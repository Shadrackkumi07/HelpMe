# Help Me website

Public marketing site for the Help Me iPhone app. Master line: "It starts with me." Campaign line: "Your block is closer than you think."

The Capacitor app lives in a separate repository. This site does not implement help requests, matching, or auth. It must not invent product behavior the app does not ship.

## Ownership

- Landing, download, legal, and support pages: `src/app/` plus `src/components/`
- SEO / AEO / GEO catalog and crawler files: `src/lib/seo/`, `src/lib/content/`, `src/app/[...slug]/`
- Copy data for the homepage: `src/lib/constants.ts`

## Product facts that pages may not contradict

- Everyday, non-emergency help in Fargo–Moorhead (Fargo and West Fargo, ND; Moorhead, MN).
- Helping requires a **current** review by our team after identity evidence. That is not a background check. Public wording: "Helpers can apply to be reviewed by our team. Help Me does not run background checks."
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
- **No school pages and no out-of-area city pages.** Help Me is for adults in Fargo, West Fargo, and Moorhead (plus Dilworth and Horace). Nearby towns live on one page (`cities/towns-around-fargo-moorhead`). Do not add per-school, per-high-school, or far-town pages.
- **No comparison pages that name well-known brands.** The brand package forbids it. The neutral version is `lists/community-apps-compared` and `questions/is-help-me-a-gig-app`.
- **Fewer, stronger pages beat many thin ones.** Before adding a page, check that its intent is not already served by an existing page. Merge instead.
- Resource pages send emergencies and official needs to 911, campus safety, police, and 211 — not into the app.
- JSON-LD is built in `src/lib/seo/schema.ts`. Do not advertise a site search `SearchAction` unless a real site search exists. Question pages emit `FAQPage` (the page's own question first), never `QAPage`, which is reserved for user-answered threads.
- **One canonical host: `https://helpme.fyi` (no www).** `SITE_URL` in `src/lib/seo/site.ts` is the only source. The sitemap, canonicals, `og:url`, JSON-LD, robots, llms.txt, the feed, and IndexNow all read it. Never hard-code the origin.
- **Removing or renaming a page means adding a redirect** in `src/lib/seo/redirect-map.json` (permanent, one hop, to a live page). `next.config.ts` and the build checks read that file. `registry.ts` throws if a redirect source is still a live page or a destination does not exist.
- Each `updated` date should reflect a real edit. Do not stamp the whole catalog with one date for appearances.
- The sitemap lists HTML pages only: no `.txt` or `.xml` files and no `noindex` pages.
- `generateStaticParams` in `src/app/[...slug]/page.tsx` must not emit slugs that already have dedicated routes (`download`, `legal/*`, `support/*`).
- IndexNow ownership file is `public/<INDEXNOW_KEY>.txt`. Production `npm run build` submits the built sitemap (`scripts/submit-indexnow.mjs --from-build`) and must not fail the deploy if IndexNow is down. `/api/indexnow` remains the daily cron. Keep the key file, `INDEXNOW_KEY`, and Bing Webmaster key identical.

## Brand

Source of truth: the Help Me brand identity package (v1, 23 Sep 2026) and the "Who we are" deck. Brand files live in `public/brand/`.

- **One theme, no dark mode.** Ember `#FF5A36`, Paper `#F8F6F0` (page color), Ink `#000000`. Supporting, small roles only: Sunbeam `#FFC53D`, Teal `#0D9488`, Navy `#12305C`. Never Signal Blue `#2E5BD7` or Prairie green. Tokens live in `src/app/globals.css`.
- Text on Ember is always black. Ember as text only at display sizes. Paper on Ember is for the mark only.
- Solid fills only: no gradients, glows, blur, shadows, or see-through layers. This includes the WebGL scene (unlit, flat materials).
- Type: Archivo Black/ExtraBold, narrowed, tight leading, for display. Inter for text. Sentence case everywhere, no all-caps labels, straight quotes, no dashes as pauses.
- The "me" mark is frozen. Use the supplied PNGs in `public/brand/` (`me-*.png` are the same glyphs with transparent padding trimmed). Never recolor, redraw, rotate, stretch, outline, shadow, or render it in 3D. Animate only opacity and uniform scale or position. Never put the bare Paper glyph on white or Paper. The "Help Me" wordmark is not chosen, so do not set the name as a logo. Use ™, never ®.
- Motion durations and easings come from the transitions.dev tokens in `globals.css` and `src/lib/motion.ts`. Respect `prefers-reduced-motion`.
- Imagery: no stock photos of people. Maps show coarse zones only, never pins or people. Daylight, public places.

## Voice

Plain-spoken. Warm, not sentimental. Confident, not urgent. Local and specific. Honest about limits. Sound like a good neighbor on a normal day. Show the small human moment, then the product.

- **Never write:** vetted, screened, background-checked, verified, trusted, safe/safer/safety-first, secure, peace of mind, guaranteed, protected, emergency/urgent/SOS/rescue, instant, always available, never alone, 24/7 (about Help Me), approved/official/licensed/qualified (about helpers), ride/pick you up, countdowns or "ends in", strangers near you, exclusive to students, for teens.
- **No numbers** about users, helpers, response times, or spots left unless they come live from the system with a source.
- **Required lines, verbatim:** "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number." (footer of every page, and anything that could read as urgent help). "Helpers can apply to be reviewed by our team. Help Me does not run background checks." "You can report or block any member at any time."
- College-life examples are fine as places (the library, a campus building, saving a seat). Never imply the app is for students only or for anyone under 18.
- Legal pages (`/legal/*`) and anything about data, location, or privacy use Legal-supplied wording. Do not rewrite them for voice.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

After content catalog edits, run the post-build guardrail:

```bash
npm run build && npm run seo:check
```

`scripts/seo-check.mjs` reads the built HTML and fails on a canonical or `og:url` off the canonical origin, sitemap URLs that redirect or are `noindex`, orphan pages, redirect chains or dead targets, thin pages, titles and descriptions out of range, invalid JSON-LD, and brand-banned words. `src/lib/content/registry.ts` also throws at build time on duplicate slugs, duplicate titles or descriptions, broken `related` links, and question pages with no `answer`.

Then check `/sitemap.xml`, `/robots.txt`, and `/llms.txt` on a production-like build.

### Domain setup (Vercel)

`helpme.fyi` is canonical. In Vercel, make `helpme.fyi` the primary domain and set `www.helpme.fyi` to redirect to it. Only after that, set `CANONICAL_HOST_REDIRECT=1` in the production environment to turn on the in-app `www` redirect in `next.config.ts`. Turning it on first loops the site. Keep `NEXT_PUBLIC_SITE_URL=https://helpme.fyi`.
