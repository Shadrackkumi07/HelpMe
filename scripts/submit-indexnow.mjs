/**
 * Submit sitemap URLs to IndexNow (Bing and other participating engines).
 *
 *   npm run build          — production Vercel builds submit automatically; local builds skip
 *   npm run indexnow       — always submit (uses this build’s sitemap, then the live sitemap)
 *
 * `--from-build` never fails the deploy. `--force` submits even off production.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.fyi").replace(/\/$/, "");
const KEY = "2500d7578e4242d48d57e551182e81d0";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BUILT_SITEMAP = new URL("../.next/server/app/sitemap.xml.body", import.meta.url);

const args = new Set(process.argv.slice(2));
const fromBuild = args.has("--from-build");
const force = args.has("--force") || process.env.INDEXNOW_SUBMIT === "1";

function skip(reason) {
  console.log(`IndexNow skipped: ${reason}`);
  process.exit(0);
}

function fail(message) {
  console.error(message);
  if (fromBuild && process.env.INDEXNOW_FAIL_BUILD !== "1") {
    console.error("IndexNow failed but the build will still succeed.");
    process.exit(0);
  }
  process.exit(1);
}

if (fromBuild && !force) {
  const env = process.env.VERCEL_ENV ?? "";
  if (env && env !== "production") skip(`VERCEL_ENV=${env}`);
  if (!env && process.env.VERCEL !== "1") skip("local build (set INDEXNOW_SUBMIT=1 to send)");
}

const host = new URL(SITE).host;
if (host === "localhost" || host.startsWith("127.")) skip("localhost host");

function locsFromXml(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function canonicalize(loc) {
  const parsed = new URL(loc);
  const path = parsed.pathname === "/" ? "" : parsed.pathname;
  return `${SITE}${path}${parsed.search}`;
}

async function loadUrls() {
  if (existsSync(BUILT_SITEMAP)) {
    const xml = await readFile(BUILT_SITEMAP, "utf8");
    const urls = locsFromXml(xml).map(canonicalize);
    if (urls.length) return { urls, source: "built sitemap" };
  }

  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml HTTP ${res.status}`);
  const urls = locsFromXml(await res.text()).map(canonicalize);
  if (!urls.length) throw new Error("sitemap.xml contained no <loc> entries");
  return { urls, source: "live sitemap" };
}

let urls;
let source;
try {
  ({ urls, source } = await loadUrls());
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}

const payload = {
  host,
  key: KEY,
  keyLocation: `${SITE}/${KEY}.txt`,
  urlList: urls,
};

let response;
try {
  response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
} catch (error) {
  fail(`IndexNow network error: ${error instanceof Error ? error.message : String(error)}`);
}

const body = await response.text();
if (![200, 202].includes(response.status)) {
  fail(`IndexNow HTTP ${response.status}: ${body.slice(0, 500)}`);
}

console.log(`IndexNow ${response.status}: submitted ${urls.length} URLs for ${host} (${source})`);
