# Arizona Events Group — Website

Redo of azeventsgroup.com. Next.js (App Router) + TypeScript + Tailwind CSS +
shadcn/ui + Framer Motion. Deployed on Netlify (auto-deploy from `main`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier (writes)
- `npm run format:check` — Prettier (check only)

## Status

**Phase 1 (current):** Homepage design direction, built for review before
the rest of the sitemap is built out. `/about`, `/services`, and `/contact`
are temporary placeholder pages so navigation doesn't dead-end — full pages
come in Phase 2, reusing the approved homepage patterns.

Known placeholders pending real assets from the client:

- No logo image file was supplied — header/footer use a type-based
  wordmark (`src/components/logo.tsx`) as a stand-in.
- No event photography was supplied — the hero and event cards use
  brand-color gradients where full-bleed photos will eventually go.
- Sponsor logos are rendered as text wordmarks pending real logo files.
- Social links in the footer point to `#` pending real profile URLs.

## Pulling assets from the old site

The old azeventsgroup.com is a WordPress site behind Cloudflare — a bare
`curl`/headless-browser request gets blocked, but a plain HTTPS request with
normal browser headers goes through fine.

```bash
npm run scrape:assets
```

Fetches the old site's key pages, finds every image referenced (`<img>`,
`srcset`, lazy-load attributes, CSS `background-image`), and downloads them
to `.legacy-assets/` (gitignored — a review staging area, not source of
truth) along with a `manifest.json` noting which page each image came from.
Confirmed working: it pulls the real "Enjoy Life" logo, all the sponsor
logos, and the event photography. A few files are stock (Pexels) images the
old site used as filler, not AEG's own photography — check before reusing.

Review what's in `.legacy-assets/`, then manually move the ones you want
into `public/images/` with sensible names and wire them into the
components that currently use type/gradient placeholders (search the repo
for "No logo image file" and "No event photography" comments).

Options: `--pages /,/about/` to limit which pages it crawls, `--out <dir>`
for a different output location, `--base <url>` for a different site.

## Forms

The Contact page (`src/components/contact-form.tsx`) posts to Netlify
Forms — no backend/database needed. Netlify detects the form automatically
at deploy time (it's real server-rendered HTML with `data-netlify="true"`
and a `name="contact"` attribute) and stores every submission permanently
in its own dashboard regardless of anything below — that's the real "never
lose a lead" guarantee, independent of email deliverability.

Once the site is connected to Netlify, set up in the Netlify dashboard
(not something committed to this repo — it's account-level config):

1. **Email notification**: Site configuration → Forms → Notifications →
   Add notification → Email notification → form `contact` → email
   `info@azeventsgroup.com`. After the first real submission, check that
   inbox and mark it "not spam" — Netlify's notification emails come from
   their own domain, not yours, so mail providers sometimes flag the
   first one.
2. **Backup to a Google Sheet** (optional, extra redundancy on top of
   Netlify's own storage): `scripts/netlify-form-to-sheet.gs.js` has the
   full Apps Script + setup steps — paste it into a Sheet's Apps Script
   editor, deploy as a web app, and point a Netlify outgoing-webhook
   notification at the resulting URL. Every submission then appends a row
   there too, live, independent of email.

Netlify captures every named field on the form automatically (no extra
config needed for that part) — `name`, `email`, `phone`, `event-type`,
`message` all show up as columns in Netlify's Forms tab and in the webhook
payload.

## Deploy

Connected to Netlify via `netlify.toml` (`@netlify/plugin-nextjs`). Push to
`main` to trigger a production deploy once the Netlify site is linked to
this repo.
