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

## Forms

Contact page (Phase 2) will use Netlify Forms — no backend/database needed.

## Deploy

Connected to Netlify via `netlify.toml` (`@netlify/plugin-nextjs`). Push to
`main` to trigger a production deploy once the Netlify site is linked to
this repo.
