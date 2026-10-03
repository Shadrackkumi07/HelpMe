# SEO / AEO / GEO kernel

- `site.ts` — canonical origin, NAP-ish identity, product facts.
- `schema.ts` — JSON-LD graph: Organization, WebSite, SoftwareApplication, Service, WebPage (with `speakable`), BreadcrumbList, plus QAPage / HowTo / ItemList / FAQPage when the page carries the matching fields. No fake `SearchAction`.
- `crawlers.ts` — generative/answer bots we explicitly allow.
- `feed.xml` — RSS of guides, lists, seasons, and question pages, built from the registry.
- `llms.txt` / `ai.txt` / `humans.txt` route handlers must stay aligned with product facts in `site.ts`.
- `robots.ts` must allow `/` for `*` and for the listed AI crawlers. Do not block GPTBot, ClaudeBot, Google-Extended, PerplexityBot, or Applebot-Extended.
- IndexNow: public key file is `public/<INDEXNOW_KEY>.txt` (must match `INDEXNOW_KEY` in `site.ts`). Production builds run `scripts/submit-indexnow.mjs --from-build` after `next build`. Daily cron still hits `/api/indexnow`. Do not fail the site build if IndexNow is down.
- Brand line is `SITE_TAGLINE` ("It starts with me"). Product-fact wording in `site.ts` follows the banned-word list in the root `AGENTS.md` (no "approved", "verified", "safe", "trusted").
- `redirect-map.json` is the single list of removed and renamed catalog URLs. `redirects.ts` feeds it to `next.config.ts`; `scripts/seo-check.mjs` and `registry.ts` validate it.
- `urls.ts` lists HTML pages only. Machine files are advertised through robots.txt and `<link rel=alternate>`.
