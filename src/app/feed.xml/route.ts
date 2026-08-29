import { allPages } from "@/lib/content/registry";
import { ORGANIZATION, SITE_NAME, SITE_TAGLINE, SITE_URL, UPDATED, absoluteUrl } from "@/lib/seo/site";

/**
 * A small RSS feed of the pages that read like publications — guides, lists,
 * seasonal pages, and direct answers. Feed readers and answer engines both
 * poll this; the XML sitemap stays the authority on the full URL set.
 */
const FEED_KINDS = new Set(["guide", "list", "season", "question"]);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = allPages()
    .filter((page) => FEED_KINDS.has(page.kind))
    .map((page) => {
      const url = absoluteUrl(`/${page.slug}`);
      const summary = page.answer ?? page.description;
      return [
        "    <item>",
        `      <title>${escapeXml(page.h1)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escapeXml(summary)}</description>`,
        `      <category>${escapeXml(page.kind)}</category>`,
        `      <pubDate>${new Date(`${page.updated ?? UPDATED}T00:00:00Z`).toUTCString()}</pubDate>`,
        "    </item>",
      ].join("\n");
    });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(`${SITE_NAME} · ${SITE_TAGLINE}`)}</title>`,
    `    <link>${SITE_URL}</link>`,
    `    <description>${escapeXml(ORGANIZATION.description)}</description>`,
    "    <language>en-us</language>",
    `    <lastBuildDate>${new Date(`${UPDATED}T00:00:00Z`).toUTCString()}</lastBuildDate>`,
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
