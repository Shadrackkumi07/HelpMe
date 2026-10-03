# Help Me site redesign: prompt and plan

## The exact prompt

~~~text
Guide 

The brand guide will help with the look, but I want people to feel why Help Me exists.

Start with those small moments where you need a hand but don’t know who to ask. Then show that there’s someone nearby who would be willing to help if they knew. That’s where Help Me comes in.

Then show how the app works with a simple favor from start to finish. Use examples that feel familiar to college students so they can picture themselves using it.

By the time they get to the bottom, I want them thinking, “I could use this, and I could help someone too.” Then give them a clear way to get involved.
 what I want you to do. So first of all, I pasted a guide just above. That should be your, your first reference point, but that shouldn't be the only guide that we are going to go on off right now. So this is what we're going to do. Currently, we have the website, but it is very bad. Like, I want you to strip the entire flow and design system that we currently have right now. Get rid of the dark mode and the light mode. We are going to stick to just one theme. And you are going to understand the theme very soon because I'm going to give you references to where the documents are for you to scan through them and understand the direction and, and the color scheme and, and all that we actually want to have on the site right now. So we will have like a dark mode, light mode toggle, cancel that. We just follow one color scheme. And that scheme is going to be from the documents I'm going to point you to. So, and also just remember there, there are currently three mock-up, like mobile mock-ups in on the website. Just strip the images from there and somehow, somewhere, just keep those mock-ups, but keep it empty for now. I will later give you images to put it into those mock-ups. So don't get rid of the mock-ups. Just, you know, put it somewhere that you think is great, like later on. Like put it where that way you think is great. We'll I will cycle back, then we'll You know, we'll make a use of that, you know, somewhere, somehow. So, first of all, I want you to take a look at our documents folder. There's a, there's a folder named Help Me Docs. I want you to open those files. That's the, our new direction for the website, all right? Understand each document in there, being the PDF files, the icons, and all that. That is, those are going to be our new branding, the color scheme, the, the direction, the flow. The first, the first instruction that I gave was the one above, which is like the guide. Like, you know, that should be what the person feels, right? And then in the help me documents, you should understand the direction that a platform wants to signal, the design, the feel, the tone, the typography, the text, the writings, the systems, right? The site shouldn't feel like... A generic template site anymore. It should feel like a premium feel. And I've also installed three skills for you to two or three skills for you to use, right? There is a design skill, the taste skill, or the soft skill, the UI skill. I literally installed them in the agents file, agent skill guide. Just look at look at those so you can reference them greatly. And I also have a transition.dev skill. Which you should also reference, you know, to, to add those transition, those premium field and design to like the flow we're gonna do right now. So once again, look at the help me docs. That should be our new reference. Move the icons from the help me docs, the ones that you need, the ones that covers every single platform. Move it into the help me or the help me folder appropriately. Scan the whole docs, understand the direction, the color scheme. That, and we'll apply that to our existing website and our existing web app and all that. So, going back to our current like design, current, going back to our current design system, which is like flawed. Currently, we have like this dark blue, black, whatever, right? Get rid of it all. I hate it. Disgusting. That's not our current scheme or direction anymore. And of course, you get rid of the dark mode, light mode toggle. We don't need that. And yeah. Apply this new scheme, way advanced, like, you know, visually stunning. This website, this feel, the animation, the feel, should feel like, should feel like something made from Claude, like, what's the name? Something made, it should feel like a Google website, you know, a Google product, you know, an Apple feel, an Apple product, you know, using the, the documents that I've also provided, you know, as reference guides. Should feel great. Take your time, really review the docs, and plan deeply and accordingly. Yeah, that's your direction right now. So I don't know if I'm forgetting anything. But yeah, let's redesign the whole thing. And also the website. I want you to on the home page or any any other page that we'll revisit. There should be some 3D motions, some, you know, some hi-fi animations, you know, like transition. It should feel premium, like, you know, those high, highly animated sites. I don't know where you can reference a skill of such from, but you can look up skill like that, right? So you can create a site that is like a life, you know, it's like there's transition, there's movement. It feels like... Someone is literally alive on the website. It's like I'm moving things around. Things are collapsing in. There's this highly advanced technical site. Let's get there going.
~~~

Follow-up in the same session: "Continue planning. Change effort to high on opus 5.5". Answers to the planning questions were: visual plus key copy, add a WebGL scene, and include the video compressed.

---

# Help Me site redesign — "It starts with me"

## Context
The current site uses a dark navy/black "See Beyond" look with a dark/light toggle, Inter Tight, and Signal-Blue accents. The owner wants it replaced entirely by the new brand in `~/Documents/Help me Docs/` (Brand identity package v1, 23 Sep 2026, and "Who we are" deck). The page has to make a visitor feel *why* Help Me exists, using this order: small moments where you need a hand → someone nearby would say yes if they knew → one favor from start to finish with college-life examples → "I could use this, and I could help someone too" → a clear way in. It should feel premium and alive, with a WebGL 3D hero, scroll-driven scenes, kinetic type, and transitions.dev motion tokens.

Decisions made with the owner:
- **Copy scope:** restyle every page through shared templates. Rewrite homepage, nav, footer, download, 404, metadata, llms/ai/humans/feed, and the brand line. Fix clear clashes ("trusted Helpers", "Approved helpers", "See Beyond"). The full 339-page SEO copy sweep is a **separate second pass**.
- **3D:** add a WebGL scene (three.js via react-three-fiber).
- **Video:** add the "Who we are" campaign video, compressed and lazy-loaded.

## Brand rules the build must obey (from the package)
- **One theme.** Ember `#FF5A36`, Paper `#F8F6F0` (page color), Ink `#000000`. Supporting colors play small roles only: Sunbeam `#FFC53D`, Teal `#0D9488`, Navy `#12305C`. Never Signal Blue `#2E5BD7` or Prairie green. Rough proportion: Ember 40, Paper 40, Ink 15, supporting 5 at most.
- Text on Ember is always black. Ember as text only at large display sizes on Paper. Paper on Ember is for the mark only.
- **Solid fills.** No gradients, glows, blur, or see-through layers. The WebGL scene uses unlit flat materials (`MeshBasicMaterial` or toon with hard bands) in the brand colors, so it reads as solid shapes, not glossy 3D.
- **Ember is loud on purpose:** full-bleed blocks, never a thin accent line.
- **Type:** Archivo Black / ExtraBold, slightly narrowed (variable `wdth` axis), leading 0.86 to 0.9, for display. Inter for body (leading 1.45) and labels. Sentence case everywhere, no all-caps eyebrows, straight quotes, no dashes as pauses.
- **The "me" mark is frozen.** Use the supplied PNGs only. No recolor, crop, rotate, stretch, shadow, outline, or 3D. Animation is limited to opacity and uniform scale/translate. Never put the bare Paper glyph on white. The wordmark is not chosen, so the nav uses the mark tile alone and "Help Me" appears only in running text. Use ™ where the master line is shown as a lockup note, never ®.
- **Master line lockup:** "It starts with" in Archivo + the mark PNG as the word "me", sized to the lowercase x-height and set on the baseline, on Ember or Ink grounds. Campaign line under it: "Your block is closer than you think."
- **Banned words in new copy:** vetted, screened, verified, trusted, safe/safety, secure, guaranteed, emergency framing, urgent, instant, always available, never alone, approved/official/qualified, ride/pick you up, countdowns, any user/helper/response-time number, "strangers near you".
- **Required lines, verbatim:**
  - "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number." Goes in the footer of every page and in the CTA.
  - "Helpers can apply to be reviewed by our team. Help Me does not run background checks."
  - "You can report or block any member at any time."
- **Imagery:** no stock photos of people. Maps show coarse zones only, never pins or people. Daylight, public places.
- **College framing:** follow the "Who we are" deck. Library, campus building, saving a seat, and phone charger examples are fine as *places*. Never "exclusive to students", "for teens", or anything that reads as under 18.

Note: only the transitions-dev and transitions-polish skills are installed in `.agents/`, `.claude/`, and `agent/`. The design, taste, and UI skills the owner mentioned are not present, so the brand package is the design authority here.

## Implementation

### 1. Assets → `public/brand/`
Copy from `~/Documents/Help me Docs/Logos/`:
- **Marks:** `help-me-logo-offwhite-transparent-{512,1024}.png` (Paper glyph, for Ember and Ink grounds), `help-me-logo-ember-transparent-512.png`, `help-me-logo-black-transparent-1024.png`, `help-me-tile-rounded-transparent-{512,1024}.png`.
- **App icons:** `help-me-app-icon-light-1024.png` becomes `src/app/apple-icon.png`. A 512 tile becomes `src/app/icon.png`.
- **Social:** `help-me-share-card-1200x630.png` becomes `src/app/opengraph-image.png` and `twitter-image.png`.
- **Campaign posters:** `campaign-0{1..4}-*.png` go to `public/brand/campaigns/`, for use in the CTA/manifesto rail.
- **Video:** `HELPMewho-we-are60fps.mp4` and the 9x16 version get re-encoded with a one-off static ffmpeg (`npx ffmpeg-static`, run from the scratchpad, not added as a dependency). Target: H.264 720p, 30fps, CRF ≈ 28, no audio track if silent, plus a poster frame. Outputs go to `public/brand/video/who-we-are-{16x9,9x16}.mp4`.
- Delete `public/IMG_8317.PNG`, `IMG_8318.PNG`, `IMG_8319.PNG` (about 7.7 MB, recoverable from git) and the old non-square `public/logo.png`. Update `DEFAULT_OG_IMAGE` in `src/lib/seo/site.ts`. Remove `icons` from `src/lib/seo/metadata.ts` so the App Router file icons win.

### 2. Design system: `src/app/globals.css`, `src/app/layout.tsx`
- Delete the `:root` dark tokens, the `html.light` block, the `@custom-variant dark`, `.spot-top`, `.spot-forest`, `.grid-field`, and the glow utilities.
- New single `:root`: `--ember`, `--paper`, `--ink`, `--sunbeam`, `--teal`, `--navy`, and `--paper-2` (a slightly darker solid Paper for alternating bands). Map them in `@theme inline` to `--color-ember/paper/ink/...`. Keep the semantic aliases (`bg`, `ink`, `muted`, `line`) pointing at the new values, so existing utility classes in the SEO components keep compiling. `line` becomes solid Ink at 1px or 2px, matching the package's black rules.
- Add the transitions.dev motion token block (`--duration-*`, `--ease-*`, `--distance-*`) from `.claude/skills/transitions-dev/_root.css`. All CSS and Framer timings read from these, mirrored in a TS module `src/lib/motion.ts` for Framer.
- Type utilities: `.display-hero` (clamp ≈ 4rem–11rem, leading .86), `.display-xl`, `.display-lg`, `.subhead`, `.label`. Add a `.rule` 2px Ink top border and a `.dash-label` (short bar plus sentence-case label, as on the decks).
- `layout.tsx`: replace Inter Tight with `Archivo` (variable, `axes: ["wdth"]`, weights 800–900) plus Inter. Remove the `themeInit` script and `suppressHydrationWarning`. Set `themeColor` to `#FF5A36`, `colorScheme: "light"`, and `body bg-paper text-ink`.
- Delete `src/components/ThemeToggle.tsx` and its usage in Navbar.
- `src/lib/qr.ts`: QR dark module becomes Ink `#000`, light module Paper.

### 3. Motion and 3D infrastructure
- **Add dependencies:** `three`, `@react-three/fiber`, `@react-three/drei` (only what's used), `lenis`. Framer Motion 12 is already installed.
- `src/components/motion/SmoothScroll.tsx`: Lenis provider in the root layout. Disabled under `prefers-reduced-motion`, and synced to Framer `useScroll`.
- `src/components/motion/Reveal.tsx` and `SplitText.tsx`: per-word masked rise for Archivo headlines (texts-reveal timing: `--duration-very-slow`, `--distance-medium`, stagger `--duration-stagger`). The brand's no-blur rule overrides the skill's blur, so this is translate and opacity only.
- `src/components/motion/Magnetic.tsx` for primary buttons. Learn-more hover from transitions-dev #24 for text links. Accordion #21 for FAQ (`FaqList`). Sliding tabs #16 if a toggle is needed. Menu morph #20 for the mobile nav.
- `src/app/template.tsx`: page-enter transition. An Ember panel wipes up and off (solid block, `--ease-smooth-out`), then content rises. Skipped under reduced motion.
- **WebGL hero scene** `src/components/three/BlockScene.tsx`, client only via `next/dynamic({ ssr:false })`:
  - Abstract isometric "block": a grid of extruded low-poly Paper and Ink building blocks and streets on an Ember or Paper ground. Unlit flat colors with crisp edges (`Edges` in Ink). Orthographic camera.
  - Idle: slow camera drift and blocks breathing in height.
  - On pointer: gentle parallax.
  - On scroll (driven by the hero's scroll progress): camera dollies down into one block. One building turns Ember (an ask goes up), and a coarse Ember ring expands over the zone. This is the ~500 m area idea, with no pins and no people. Then the scene hands off to the next section.
  - Perf guards: `dpr={[1, 1.75]}`, `frameloop="demand"` when off-screen (IntersectionObserver), instanced meshes, and fewer blocks on small screens. Static SVG/CSS fallback when WebGL is unavailable or under reduced motion. Never renders the "me" mark in 3D.

### 4. Shared chrome (cascades to all ~345 pages)
- **`Navbar.tsx`:** Paper solid background (no blur), the mark tile (Ember rounded tile PNG) at left, and links in Inter semibold. Labels: How it works, Helping, The small stuff, Questions. Keep existing hrefs; the `/safety` slug stays for SEO but the label becomes "Ground rules". CTA pill in Ink: "Join the beta". Hides on scroll down and returns on scroll up. Mobile menu uses the menu-morph transition.
- **`Footer.tsx`:** full-bleed Ink band with a giant "It starts with [me]" lockup, link columns, the verbatim non-emergency line, "Help Me LLC, Fargo, ND", and the ™ note. Remove "trusted Helpers".
- **`Mark.tsx`:** renders supplied PNG variants by ground (`tile`, `onEmber`, `onInk`). No ring and no scale hacks.
- **`MasterLine.tsx` (new):** the lockup component (Archivo text + mark PNG as "me", baseline-aligned).
- **`AppBadge.tsx`:** Ink pill with Paper text, or Paper on Ember. Label "Join the beta on TestFlight". Still links `APP_URL`, the only download target.
- **`Eyebrow.tsx`** becomes the dash-label style in sentence case.
- **`PhoneFrame.tsx`:** kept as the mockup component. Remove the glow and gradient bezel, and use a solid Ink bezel with hard corners. The `src` prop is now optional. With no image, the screen renders an **empty Paper screen** with a faint mark and a "Screen coming soon" label, ready for the owner's images later. Add a `tilt` prop for CSS-3D perspective (rotateX/Y driven by scroll or pointer, per transitions-dev #19 card tilt, with no glare because glare is a gradient).
- **`LegalPage.tsx` and `seo/ContentPage.tsx`** (and Breadcrumbs, FaqList, RelatedPages, PageCta, DirectoryIndex):
  - Ember hero band with a black Archivo h1, then a Paper body with 2px Ink rules between sections.
  - The "Short answer" box becomes an Ink block with Paper text. Keep `data-speakable` and all schema output unchanged.
  - Define the missing `seo-prose` styles.
  - Remove the `spot-top` background.
- **`download/page.tsx` and `not-found.tsx`:** rebuilt in the new system. The download page gets "Want in?" on Ember, the QR, and the TestFlight badge. The 404 says "This block is empty." with a link home.

### 5. Homepage narrative (`src/app/page.tsx`, new `src/components/sections/*`)
Retire Hero, Problem, HowItWorks, Showcase, Features, Helpers, Safety, and Download. Copy lives in `src/lib/constants.ts` (new exports `MOMENTS`, `FAVOR_STEPS`, `FOR_LIST`, `HELPER_LINES`), replacing `HOW_IT_WORKS`, `FEATURES`, `TRUST`, and `SCREENS`. Sections in order:

1. **`Hero`** (Ember):
   - WebGL block scene behind the master line lockup "It starts with [me]", with the words rising in one by one and the mark fading in last.
   - "Your block is closer than you think."
   - CTA "Join the beta on TestFlight" and a secondary "See how a favor works".
   - A small line: "Fargo-Moorhead first. iPhone, iOS 15+."
2. **`Moments`** (Ink, scroll-pinned): "There's a version of you that doesn't ask." Six moment cards fan and stack in 3D perspective as you scroll, each a short daylight scene in Archivo:
   - Your phone dies at the library, so you pack up an hour early.
   - You circle a building twice looking for the right door.
   - Nobody to save your seat while you grab coffee.
   - The futon needs two more hands up the stairs.
   - The car won't start in the lot after class.
   - A jar that will not open.
   It ends on "You could have asked. You just stopped asking."
3. **`Turn`**: a full-bleed Ember block sweeps up over the Ink section, with a solid wipe, not a fade. Headline: "Somebody on your block might say yes. They just don't know you need a hand." Then "That's where Help Me comes in." Avoid any "always nearby" claim.
4. **`OneFavor`** (Paper, sticky scrollytelling, uses the **three empty PhoneFrames**): "One favor, start to finish." The example is "Phone at 4%. Library, second floor." The phones sit in a sticky stage and rotate in 3D (CSS perspective) as each step activates; the copy column advances.
   - **Ask.** One sentence, a public place. "Anyone have a USB-C charger? Library, 2nd floor, 20 minutes." Your request shows as a coarse area of about 500 m.
   - **A neighbor can say yes.** Or no. Both are fine.
   - **Talk it through.** A private chat opens between just the two of you. You choose when to share more of where you are.
   - **Meet in public. Under five minutes.** Hand off, say thanks, mark it done. A request stays open up to two hours if nobody says yes.
   All facts stay within `PRODUCT_FACTS`. No response-time claims.
5. **`SmallStuff`**:
   - Paper half: "A phone charger. Directions. Saving your seat. Under 5 minutes. The small stuff." The last line is in Ember display.
   - Infinite horizontal marquee of small asks.
   - Ink half: "What it's not for: Emergencies." plus the verbatim line.
6. **`BeTheOne`** (Sunbeam accent block, small): "Next time, it could be you." "Be the one who says yes." Followed by the verbatim helper-review line and the report/block line. Small 3-item list: Apply. Get reviewed by our team. Say yes when it suits you.
7. **`Film`** (Ink): the compressed "Who we are" video in a large rounded frame. Lazy-loaded with `preload="none"`, muted, playsInline, and plays only when in view. The 9x16 version is used on mobile via `<source media>`.
8. **`ZoneByZone`** (Ember): "Here. Then zone by zone." "Help Me is launching in Fargo-Moorhead first, one zone at a time." Covers Fargo, West Fargo, and Moorhead. No counters.
9. **`WantIn`** (Ink): "Want in?", "Ask for a hand. Say yes to one. It starts with [me]." TestFlight badge, QR, and the four campaign posters in a slow drifting rail.
10. Footer.

### 6. Key copy and SEO strings (scope agreed)
- **`src/lib/seo/site.ts`:**
  - `SITE_TAGLINE` becomes "It starts with me".
  - Reword `ORGANIZATION.description`, `PRODUCT_FACTS.helperGate`, `meet`, and `paid` into brand-safe language with the same facts. For example, helperGate becomes "Helping requires a current review by our team after identity evidence. Helpers can apply to be reviewed by our team. Help Me does not run background checks."
  - Keep `events` facts as-is; that is the campus-calendar wording for pass two.
- **`src/lib/seo/metadata.ts`:** default title "Help Me · It starts with me. Neighbors helping neighbors in Fargo-Moorhead". Drop "trusted Helpers" and the "approved helpers" keyword.
- **`src/lib/seo/schema.ts`:** `slogan` and `featureList` rewritten without "approved". The `alternateName` follows the tagline.
- **`src/lib/seo/llms.ts`, `feed.xml/route.ts`, `robots.txt/route.ts`:** the brand line and phrasing follow `site.ts` automatically. Fix the "See Beyond" literals.
- **`src/lib/content/core.ts`, `glossary.ts`, `neighborhoods.ts`, `questions.ts`:** fix only the "See Beyond" literals in this pass. The "What does See Beyond mean?" question page gets rewritten to "What does 'It starts with me' mean?" with a new slug. Add a `next.config.ts` redirect from the old slug.
- **`AGENTS.md`** (root and `src/lib/seo/AGENTS.md`): update the brand line, add a "Brand" section pointing to the package rules (colors, type, mark freeze, banned words, required lines), and reword "staff-reviewed approval" to "a current review by our team". The facts stay the same.
- **Pass two** (not in this build): sweep the 339 catalog entries for banned words, including "approved", "safe" pages, "ride" Q&A in `help.ts`, and campus/student framing.

## Critical files
- **Rewrite:** `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/lib/constants.ts`, `src/components/{Navbar,Footer,Mark,AppBadge,Eyebrow,PhoneFrame,LegalPage,QrCode}.tsx`, `src/components/seo/*`, `src/app/download/page.tsx`, `src/app/not-found.tsx`.
- **New:** `src/components/sections/{Hero,Moments,Turn,OneFavor,SmallStuff,BeTheOne,Film,ZoneByZone,WantIn}.tsx`, `src/components/three/BlockScene.tsx`, `src/components/motion/*`, `src/components/MasterLine.tsx`, `src/lib/motion.ts`, `src/app/template.tsx`, `src/app/{icon,apple-icon,opengraph-image,twitter-image}.png`, `public/brand/**`.
- **Delete:** `src/components/ThemeToggle.tsx`, old section components, `public/IMG_831{7,8,9}.PNG`, `public/logo.png`.
- **Strings:** `src/lib/seo/{site,metadata,schema,llms}.ts`, `src/app/feed.xml/route.ts`, `src/app/robots.txt/route.ts`, `next.config.ts`, `AGENTS.md`.
- **Untouched:** `src/lib/content/registry.ts` logic, sitemap, and IndexNow scripts.

## Verification
1. `npm run typecheck`, `npm run lint`, `npm run build`. The build must still succeed with the IndexNow step tolerant.
2. `npm run start`, then check:
   - `/` end to end at 1440px and 390px widths: 3D scene renders, scroll scenes pin and release, the three empty phone frames show placeholders, video lazy-loads.
   - The same page with `prefers-reduced-motion`: static fallback, no Lenis.
   - With WebGL disabled.
3. Spot-check `/download`, `/legal/privacy`, `/support/help`, a city page, a question page with `answer`, and the 404, all in the new template.
4. Confirm `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/ai.txt`, `/feed.xml` render with "It starts with me" and no "See Beyond". Confirm `registry.ts` still throws on duplicate slugs. Confirm the old See-Beyond question slug redirects.
5. `grep -ri "see beyond\|ThemeToggle\|helpme-theme\|#0a84ff\|IMG_831" src public` returns nothing. Grep the new homepage, nav, footer, and constants for banned words and confirm zero hits.
6. Lighthouse on `/` (mobile): check JS weight of the three chunk (dynamic, not in the initial bundle), CLS ≈ 0, and LCP from the Archivo headline, not the canvas.
7. Visual check of contrast: no Paper text on Ember, and Ember text only at display size.
