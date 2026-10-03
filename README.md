# Help Me website

The public marketing site for **Help Me**, a place to ask your block for the small stuff.
Master line: *It starts with me.* Campaign line: *Your block is closer than you think.*

Brand, voice, and banned words: see `AGENTS.md`.

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
- `src/app/[...slug]/page.tsx` — SEO/AEO/GEO catalog pages (cities, campuses, help topics, glossary, vs, guides, resources, lists)
- `src/lib/content/` — the page catalog; `registry.ts` is the source of truth for `/sitemap.xml` and `/llms-full.txt`
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts` — crawler and answer-engine files
- `src/components/AppBadge.tsx` — the single call to action, self-drawn (not a hotlinked store badge)
- `src/components/PhoneFrame.tsx` — CSS iPhone bezel around a real App screenshot
- `src/components/QrCode.tsx` — server-generated QR (the `qrcode` package, no third-party API call)
- `src/lib/constants.ts` — **`APP_URL`** plus all landing-page copy data

## Search, answer engines, and local pages

The public site is the only SEO surface. The iPhone app is not a website and does not ship `robots.txt`.

Crawlers are welcome, including generative and answer-engine bots. After deploy:

1. Confirm `https://helpme.fyi/robots.txt` allows `/` and lists the sitemap.
2. Submit `https://helpme.fyi/sitemap.xml` in Google Search Console.
3. Point answer engines at `https://helpme.fyi/llms.txt`.
4. IndexNow (Bing): production `npm run build` submits the built sitemap automatically. Keep the Vercel build command as `npm run build`. A daily cron still hits `/api/indexnow`. Confirm `https://helpme.fyi/2500d7578e4242d48d57e551182e81d0.txt` returns the key. Optional: `INDEXNOW_SUBMIT_TOKEN` to lock the HTTP route.

Production environment: `NEXT_PUBLIC_SITE_URL=https://helpme.fyi`. That is also the default if the variable is unset.

## Links and assets

`APP_URL` in `src/lib/constants.ts` is the TestFlight join link. Every button, the navbar CTA, and both
QR codes read it, so moving to a public App Store listing later is a one-line change.

Brand files (the frozen "me" mark, campaign posters, share card, and the "Who we are" film) live in
`public/brand/`. The three phone mockups in the homepage's "One favor" section are `PhoneFrame` with no
`src`, which shows an empty placeholder screen. Pass a 1206 x 2622 screenshot as `src` to fill one.

## Design

One theme from the brand package: Ember, Paper, and Ink, with Archivo for display and Inter for text.
Solid fills only. Tokens and the transitions.dev motion scale are in `src/app/globals.css`. The homepage
hero is a react-three-fiber scene (`src/components/three/BlockScene.tsx`), loaded client-side only, with
Lenis smooth scrolling and Framer Motion scroll scenes. Full brand and voice rules: `AGENTS.md`.

## Deploying to Vercel

Point a new Vercel project at this directory as its root. Connect **helpme.fyi** as the production
domain. Set `NEXT_PUBLIC_SITE_URL=https://helpme.fyi` in the production environment (it is also the
build default).
