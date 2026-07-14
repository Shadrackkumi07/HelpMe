# Help Me website

The public marketing site for Help Me, a community platform built around places.

## Run it

```bash
npm install
npm run dev     # http://localhost:3002
```

## Structure

- `src/app/page.tsx` — the landing page, composed from `src/components/sections/*`
- `src/app/download` — the page every QR code and share link points to; shows the App Store badge
- `src/app/legal/*`, `src/app/support/*` — footer destinations (Terms, Privacy, Help Center, Contact)
- `src/components/StoreBadges.tsx` — self-drawn App Store badge (not hotlinked)
- `src/components/QrCode.tsx` — server-generated QR (the `qrcode` package, no third-party API call)
- `src/lib/constants.ts` — **`APP_STORE_URL` starts as `"#"`**. Set the App Store listing URL here when it
  is live — the badge and `/download` page pick it up automatically. Until then, the badge shows a "Soon"
  chip instead of a dead or
  fabricated link.

## Design

Simple off white, white, and black palette with light and dark mode. Phone mockups on the landing page
are illustrative recreations of place pages, live updates, and nearby help — not literal screenshots.

## Deploying to Vercel

Point a new Vercel project at this directory as its root. No environment variables are required to
build; set `NEXT_PUBLIC_SITE_URL` once the production domain is connected.
