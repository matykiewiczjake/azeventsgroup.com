#!/usr/bin/env node
/**
 * Removes a flat white (or near-white) background from a logo/graphic,
 * making it transparent — without touching white that's actually part of
 * the design (letter counters, a badge's own white plaque fill, etc).
 *
 * Plain "make every white pixel transparent" breaks on badge/crest-style
 * logos: their outline often isn't a fully sealed shape (small stylized
 * notches where a ribbon or banner overlaps the border), so a naive flood
 * fill leaks through those gaps and eats the interior white too. This
 * dilates the "non-white" barrier by a few pixels first to seal those
 * gaps, then flood-fills only the true exterior background from the
 * image's edges inward.
 *
 * Usage:
 *   node scripts/remove-white-background.mjs <input> <output.webp>
 *   node scripts/remove-white-background.mjs logo.webp logo-transparent.webp
 *
 * Always eyeball the result before using it — composite it onto a dark
 * background to check the alpha (a plain image viewer usually shows
 * transparency as white, which looks identical to "didn't work"):
 *
 *   node -e "require('sharp')({create:{width:W,height:H,channels:4,background:'#02224A'}}).composite([{input:'output.webp'}]).png().toFile('check.png')"
 */
import sharp from "sharp";

const SRC = process.argv[2];
const OUT = process.argv[3];
const THRESHOLD = 235; // min per-channel value to count as "white-ish"
const DILATE_PASSES = 4; // how many pixels of notch-gap to seal

if (!SRC || !OUT) {
  console.error(
    "Usage: node scripts/remove-white-background.mjs <input> <output.webp>",
  );
  process.exit(1);
}

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const N = width * height;

// barrier[p] = true where the pixel is NOT white-ish (part of the design)
let barrier = new Uint8Array(N);
for (let p = 0; p < N; p++) {
  const idx = p * channels;
  const r = data[idx],
    g = data[idx + 1],
    b = data[idx + 2];
  barrier[p] = r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD ? 0 : 1;
}

// Dilate the barrier a few passes (8-connected) to seal thin notch gaps in
// the outline, so the flood fill below can't leak from the outer
// background into the design's own white interior fill through them.
for (let pass = 0; pass < DILATE_PASSES; pass++) {
  const next = new Uint8Array(barrier);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      if (barrier[p]) continue;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = x + dx,
            ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          if (barrier[ny * width + nx]) {
            next[p] = 1;
            break;
          }
        }
      }
    }
  }
  barrier = next;
}

// Flood fill the true background from the image border, blocked by the
// dilated barrier.
const reached = new Uint8Array(N);
const stack = [];
function push(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (reached[p] || barrier[p]) return;
  reached[p] = 1;
  stack.push(p);
}

for (let x = 0; x < width; x++) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y++) {
  push(0, y);
  push(width - 1, y);
}

let cleared = 0;
while (stack.length) {
  const p = stack.pop();
  const x = p % width;
  const y = (p - x) / width;
  data[p * channels + 3] = 0;
  cleared++;
  push(x + 1, y);
  push(x - 1, y);
  push(x, y + 1);
  push(x, y - 1);
}

console.log(`Cleared ${cleared} / ${N} pixels to transparent`);

await sharp(data, { raw: { width, height, channels } })
  .trim()
  .webp({ quality: 100, lossless: true })
  .toFile(OUT);

console.log("Wrote", OUT);
