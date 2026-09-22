#!/usr/bin/env node
/**
 * One-off content-migration tool: pulls images (logo, sponsor logos, event
 * photos) off the live WordPress site at azeventsgroup.com so they can be
 * reviewed and moved into public/images/ for the new site. Not part of the
 * app build — run manually, review the output, then delete what you don't
 * need.
 *
 * Fetches raw HTML/images directly (Node's built-in fetch) rather than
 * driving a browser — a headless-Chromium request gets reset outright in
 * some sandboxed environments, while a plain HTTPS request with a normal
 * browser User-Agent reaches the site fine.
 *
 * Usage:
 *   node scripts/scrape-legacy-assets.mjs
 *   node scripts/scrape-legacy-assets.mjs --base https://azeventsgroup.com --out .legacy-assets
 *   node scripts/scrape-legacy-assets.mjs --pages /,/about/,/admission/
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const BASE_URL = arg("base", "https://azeventsgroup.com");
const OUT_DIR = path.resolve(process.cwd(), arg("out", ".legacy-assets"));
const PAGES = arg(
  "pages",
  "/,/about/,/admission/,/contact/,/upcoming-events/,/white-mountain-balloon-festival/",
).split(",");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
};

const IMAGE_ATTR_RE =
  /\b(?:src|data-src|data-lazy-src|srcset|data-srcset)\s*=\s*["']([^"']+)["']/gi;
const CSS_URL_RE = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;

async function fetchWithRetry(url, { retries = 3, delayMs = 1000 } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.ok) return res;
      lastErr = new Error(`HTTP ${res.status}`);
    } catch (err) {
      lastErr = err;
    }
    if (attempt < retries)
      await new Promise((r) => setTimeout(r, delayMs * attempt));
  }
  throw lastErr;
}

function absolutize(url, base) {
  try {
    return new URL(url.trim(), base).toString().split("#")[0];
  } catch {
    return null;
  }
}

function extractImageUrls(html, pageUrl) {
  const found = new Set();

  for (const match of html.matchAll(IMAGE_ATTR_RE)) {
    const rawValue = match[1];
    // srcset can hold multiple "url descriptor" pairs, comma-separated
    for (const candidate of rawValue.split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      const abs = absolutize(url, pageUrl);
      if (abs) found.add(abs);
    }
  }

  for (const match of html.matchAll(CSS_URL_RE)) {
    const url = match[1].trim();
    if (url.startsWith("data:")) continue;
    const abs = absolutize(url, pageUrl);
    if (abs) found.add(abs);
  }

  return [...found].filter((url) =>
    /\.(jpe?g|png|gif|webp|svg|avif)$/i.test(url),
  );
}

async function main() {
  const manifest = [];
  const seenUrls = new Set();

  for (const pagePath of PAGES) {
    const pageUrl = new URL(pagePath, BASE_URL).toString();
    process.stdout.write(`Fetching ${pageUrl} ... `);
    let html;
    try {
      const res = await fetchWithRetry(pageUrl);
      html = await res.text();
    } catch (err) {
      console.log(`skipped (${err.message})`);
      continue;
    }

    const urls = extractImageUrls(html, pageUrl);
    let added = 0;
    for (const url of urls) {
      if (seenUrls.has(url)) continue;
      seenUrls.add(url);
      manifest.push({ url, pageFoundOn: pageUrl });
      added += 1;
    }
    console.log(`found ${added} new image(s)`);
  }

  await mkdir(OUT_DIR, { recursive: true });

  let downloaded = 0;
  for (const entry of manifest) {
    await new Promise((r) => setTimeout(r, 200)); // be polite, avoid 429s
    try {
      const res = await fetchWithRetry(entry.url, {
        retries: 4,
        delayMs: 1500,
      });
      const buffer = Buffer.from(await res.arrayBuffer());
      const rawName = decodeURIComponent(
        path.basename(new URL(entry.url).pathname),
      );
      const filename = rawName || `image-${downloaded}.bin`;
      const destPath = path.join(OUT_DIR, filename);
      await writeFile(destPath, buffer);
      entry.localPath = path.relative(process.cwd(), destPath);
      entry.bytes = buffer.length;
      downloaded += 1;
    } catch (err) {
      console.warn(`  failed to download ${entry.url}: ${err.message}`);
    }
  }

  await writeFile(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(
    `\nDone. Downloaded ${downloaded}/${manifest.length} images to ${OUT_DIR}`,
  );
  console.log(`Manifest: ${path.join(OUT_DIR, "manifest.json")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
