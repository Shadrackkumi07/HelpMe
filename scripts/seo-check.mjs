#!/usr/bin/env node
/**
 * Post-build SEO guardrail. Reads the built site (.next/server/app) and fails on
 * the things that got this site skipped by Google and Bing:
 *
 *   - a canonical or og:url that is not on the canonical origin
 *   - sitemap URLs that redirect, 404, are noindex, or are duplicated
 *   - redirect targets that do not exist, and redirect chains
 *   - thin pages, orphan pages (no inbound internal link)
 *   - titles and descriptions out of range
 *   - invalid JSON-LD
 *   - brand-banned words in page copy (see AGENTS.md)
 *
 * Usage:  npm run build && npm run seo:check
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = ".next/server/app";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.fyi").replace(/\/$/, "");
const SKIP = /(^|\/)(_not-found|_global-error)(\.html)?$/;

if (!fs.existsSync(ROOT)) {
  console.error("No build found. Run `npm run build` first.");
  process.exit(2);
}

const map = JSON.parse(fs.readFileSync("src/lib/seo/redirect-map.json", "utf8"));
const redirects = { ...map.removed, ...map.renamed };

/* ── collect built pages ─────────────────────────────────────────────── */
const pages = new Map(); // path ("/x") -> html
(function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html") && !SKIP.test(p)) {
      let route = p.slice(ROOT.length).replace(/\.html$/, "").replace(/^\/\[\.\.\.slug\]/, "");
      if (route === "/index" || route === "") route = "/";
      pages.set(route, fs.readFileSync(p, "utf8"));
    }
  }
})(ROOT);

const failures = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

const strip = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const BANNED =
  /\b(vetted|screened|background[- ]checked|checked out|pre-approved|certified|verified|id-verified|trusted|trustworthy|trust score|vouched|safe|safer|safest|safety-first|secure|securely|guaranteed|protected|insured|approved|approval|official helpers?|qualified|rescue|sos|instant|instantly|always available|never alone|pick you up|countdown|suspicious|keep an eye)\b/gi;
const ALLOWED = [
  /\b(not a|no|never a|isn't a|is not a|without a|nothing here is a|not any)\s+guarantee[ds]?\b/gi,
  /799-SAFE/g,
];

/* ── per-page checks ─────────────────────────────────────────────────── */
const inbound = new Map();
const noindex = new Set();

for (const [route, html] of pages) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const ogUrl = (html.match(/<meta property="og:url" content="([^"]*)"/) || [])[1];
  const robots = (html.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || "";
  const isNoindex = /noindex/.test(robots);
  if (isNoindex) noindex.add(route);

  if (!isNoindex) {
    const expected = route === "/" ? SITE : `${SITE}${route}`;
    if (canon !== expected) fail(route, `canonical is ${canon ?? "missing"}, expected ${expected}`);
    if (ogUrl && ogUrl !== expected) fail(route, `og:url is ${ogUrl}, expected ${expected}`);
    if (title.length > 72) fail(route, `title is ${title.length} chars: ${title}`);
    if (desc.length < 100 || desc.length > 165) fail(route, `description is ${desc.length} chars`);
  }

  for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(block[1]);
    } catch {
      fail(route, "invalid JSON-LD");
    }
  }

  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const text = strip(main);
  const words = text.split(" ").length;
  const isHub = /^\/[a-z-]+$/.test(route) && !route.includes("/", 1);
  const dedicated = /^\/(download|legal|support|not-found)/.test(route);
  if (!isNoindex && !dedicated && route !== "/" && words < (isHub ? 200 : 300)) fail(route, `only ${words} words`);

  let scan = text;
  for (const re of ALLOWED) scan = scan.replace(re, "");
  if (route.startsWith("/resources")) scan = scan.replace(/24\/7/g, "");
  if (!route.startsWith("/legal")) {
    const hits = [...new Set([...scan.matchAll(BANNED)].map((m) => m[0].toLowerCase()))];
    if (hits.length) fail(route, `banned words: ${hits.join(", ")}`);
  }

  for (const m of main.matchAll(/href="(\/[^"#?]*)"/g)) {
    const target = m[1].replace(/\/$/, "") || "/";
    if (target !== route) (inbound.get(target) ?? inbound.set(target, new Set()).get(target)).add(route);
  }
  // header and footer links count too
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const target = m[1].replace(/\/$/, "") || "/";
    if (target !== route) (inbound.get(target) ?? inbound.set(target, new Set()).get(target)).add(route);
  }
}

/* ── sitemap ─────────────────────────────────────────────────────────── */
const sitemapFile = [".next/server/app/sitemap.xml.body", ".next/server/app/sitemap.xml"].find((f) => fs.existsSync(f));
if (!sitemapFile) {
  fail("sitemap.xml", "not found in build output");
} else {
  const xml = fs.readFileSync(sitemapFile, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const seen = new Set();
  for (const loc of locs) {
    if (!loc.startsWith(SITE)) fail("sitemap.xml", `off-origin URL: ${loc}`);
    if (seen.has(loc)) fail("sitemap.xml", `duplicate: ${loc}`);
    seen.add(loc);
    const route = loc.slice(SITE.length) || "/";
    if (/\.(txt|xml)$/.test(route)) continue;
    if (!pages.has(route)) fail("sitemap.xml", `no built page for ${route}`);
    if (noindex.has(route)) fail("sitemap.xml", `lists a noindex page: ${route}`);
    if (redirects[route.replace(/^\//, "")] !== undefined) fail("sitemap.xml", `lists a redirected URL: ${route}`);
    if (route !== "/" && !(inbound.get(route)?.size > 0)) fail("sitemap.xml", `orphan page, no inbound link: ${route}`);
  }
}

/* ── favicon (Google shows it next to every result) ──────────────────── */
const home = pages.get("/") ?? "";
if (!/<link rel="icon" href="\/favicon\.ico[^"]*"/.test(home)) fail("/", "no <link rel=icon> for /favicon.ico in the homepage head");
if (!/<link rel="icon" href="\/icon\.png[^"]*"[^>]*sizes="(\d+)x\1"/.test(home)) fail("/", "no square PNG <link rel=icon>");
const iconSize = (home.match(/<link rel="icon" href="\/icon\.png[^"]*"[^>]*sizes="(\d+)x\d+"/) || [])[1];
if (iconSize && Number(iconSize) % 48 !== 0) fail("/", `icon.png is ${iconSize}px, Google wants a multiple of 48`);

/* ── redirect map ────────────────────────────────────────────────────── */
const known = new Set([...pages.keys()].map((r) => r.replace(/^\//, "")));
for (const [from, to] of Object.entries(redirects)) {
  if (known.has(from)) fail("redirects", `${from} is a live page and a redirect source`);
  if (!known.has(to)) fail("redirects", `${from} → ${to}: destination has no built page`);
  if (redirects[to] !== undefined) fail("redirects", `${from} → ${to}: chain, ${to} also redirects`);
}

/* ── report ──────────────────────────────────────────────────────────── */
console.log(`Checked ${pages.size} pages, ${Object.keys(redirects).length} redirects.`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n` + failures.map((f) => `  - ${f}`).join("\n"));
  process.exit(1);
}
console.log("SEO check passed.");
