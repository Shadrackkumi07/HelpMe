# Content catalog

`src/lib/content/*.ts` is the only place to add indexable marketing pages.

- Export a `SeoPage[]` and register it in `registry.ts`.
- Prefer writing an `answer` (40–70 words, self-contained, quotable) on every new page; it feeds the on-page answer capsule, `speakable`, `/llms-full.txt`, and `/feed.xml`.
- `questions/*` pages are `kind: "question"` and must answer exactly one question. `seasons/*` are `kind: "season"`. `for-*` audience pages live in `audiences.ts`.
- Unique title, description, lead, sections, and FAQs per URL. No city-name doorway templates.
- Do not invent features, user counts, background checks, paid gigs, or official campus partnerships.
- High-school pages: adult community context only. Resource pages: send crises to 911 / official services.
- `OWN_ROUTE_SLUGS` in `registry.ts` must stay in sync with dedicated App Router pages.
