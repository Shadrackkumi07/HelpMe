# Help Me website

Public marketing site for the Help Me iPhone app. Brand line: See Beyond.

The Capacitor app lives in a separate repository. This site does not implement help requests, matching, or auth. It must not invent product behavior the app does not ship.

## Ownership

- Landing, download, legal, and support pages: `src/app/` plus `src/components/`
- SEO / AEO / GEO catalog and crawler files: `src/lib/seo/`, `src/lib/content/`, `src/app/[...slug]/`
- Copy data for the homepage: `src/lib/constants.ts`

## Product facts that pages may not contradict

- Everyday, non-emergency help in Fargo–Moorhead (Fargo and West Fargo, ND; Moorhead, MN).
- Helping requires a **current** staff-reviewed approval after identity evidence. That is not a background check.
- Live help is a coarse ~500 m area until a helper accepts and the requester consents.
- Chat is private between those two people. Meet in public by default.
- Official events come from a fixed source list: NDSU, MSUM, Concordia College, M State, West Fargo, Ticketmaster Fargo. Always attributed. Never invented.
- Help Me is not 911, campus police, a paid gig marketplace, or a K–12 student network.
- Current distribution: TestFlight for iPhone (iOS 15+). `APP_URL` in `src/lib/constants.ts` is the only download target.

## SEO contract

- Every indexable URL is either a dedicated App Router page or an entry in `src/lib/content/*.ts` exported through `src/lib/content/registry.ts`.
- `src/app/sitemap.ts`, `/llms-full.txt`, and `/feed.xml` are generated from that registry. Do not hand-maintain a second URL list.
- Answer-engine fields on `SeoPage` are optional but preferred: `answer` (a self-contained 40–70 word quotable answer, rendered first and marked `data-speakable`), `takeaways`, `steps` (emits HowTo), and `listItems` (emits ItemList). `kind: "question"` pages emit QAPage and must have an `answer`.
- `src/app/robots.ts` allows all crawlers, including answer-engine and generative bots listed in `src/lib/seo/crawlers.ts`. Do not add `Disallow` rules for AI crawlers.
- `/llms.txt` and `/ai.txt` exist so models can cite accurate product rules. Keep those rules identical to the product facts above.
- Pages need unique titles, descriptions, leads, and FAQs. Do not mint thin doorway pages that only swap a city name.
- High-school pages describe the adult community around the school. They must not invite minors to meet strangers.
- Resource pages send emergencies and official needs to 911, campus safety, police, and 211 — not into the app.
- JSON-LD is built in `src/lib/seo/schema.ts`. Do not advertise a site search `SearchAction` unless a real site search exists.
- `generateStaticParams` in `src/app/[...slug]/page.tsx` must not emit slugs that already have dedicated routes (`download`, `legal/*`, `support/*`).
- IndexNow ownership file is `public/<INDEXNOW_KEY>.txt`. Production `npm run build` submits the built sitemap (`scripts/submit-indexnow.mjs --from-build`) and must not fail the deploy if IndexNow is down. `/api/indexnow` remains the daily cron. Keep the key file, `INDEXNOW_KEY`, and Bing Webmaster key identical.

## Voice

Human, observant, bold, hopeful. Show the human problem, then the product. No corporate or charity language. No fake user counts.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

After content catalog edits, confirm `src/lib/content/registry.ts` still throws on duplicate slugs, then check `/sitemap.xml`, `/robots.txt`, and `/llms.txt` on a production-like build.
