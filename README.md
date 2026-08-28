# Help Me website

The public marketing site for **Help Me** — connecting people in need with trusted Helpers nearby.
Brand line: *See Beyond.*

## Run it

```bash
npm install
npm run dev     # http://localhost:3002
```

## Structure

- `src/app/page.tsx` — the landing page, composed from `src/components/sections/*`
  (Hero → Problem → How it works → Inside the app → Features → Helpers → Safety → Download)
- `src/app/download` — the page share links point to; one screen, one action
- `src/app/legal/*`, `src/app/support/*` — footer destinations (Terms, Privacy, Help Center, Contact)
- `src/components/AppBadge.tsx` — the single call to action, self-drawn (not a hotlinked store badge)
- `src/components/PhoneFrame.tsx` — CSS iPhone bezel around a real App screenshot
- `src/components/QrCode.tsx` — server-generated QR (the `qrcode` package, no third-party API call)
- `src/lib/constants.ts` — **`APP_URL`** plus all landing-page copy data

## Links and assets

`APP_URL` in `src/lib/constants.ts` is the TestFlight join link. Every button, the navbar CTA, and both
QR codes read it, so moving to a public App Store listing later is a one-line change.

The three phone images in `public/` (`IMG_8317`–`IMG_8319`) are real screenshots of the shipping iOS app —
Home, Live map, and Community. They already include the iOS status bar and home indicator, which is why
`PhoneFrame` draws hardware only.

## Design

Dark first, matching the app. Near-black chrome, iOS system blue for anything actionable, and the deep
green of the app's home card for the human notes. A light theme is available from the navbar toggle;
both palettes are defined as tokens in `src/app/globals.css`.

Voice: human, observant, bold, hopeful. Show the human problem first, then show how Help Me changes it.
No corporate or charity language.

## Deploying to Vercel

Point a new Vercel project at this directory as its root. No environment variables are required to
build; set `NEXT_PUBLIC_SITE_URL` once the production domain is connected.
