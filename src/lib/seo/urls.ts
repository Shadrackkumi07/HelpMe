import { allPages, STATIC_ROUTES } from "@/lib/content/registry";
import { SITE_URL, UPDATED, absoluteUrl } from "./site";

/** Legal pages are Legal-supplied wording; their date changes only when Legal changes them. */
const LEGAL_UPDATED = "2026-08-28";

export type IndexableUrl = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/**
 * Every HTML URL we want Bing, Google, and IndexNow to know about. Sitemap and IndexNow share this list.
 * Machine files (llms.txt, feed.xml, ai.txt) are advertised through robots.txt and <link rel=alternate>, not here.
 */
export function indexableUrls(): IndexableUrl[] {
  const home: IndexableUrl = {
    url: SITE_URL,
    lastModified: UPDATED,
    changeFrequency: "weekly",
    priority: 1,
  };

  const catalog = allPages()
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: page.updated ?? UPDATED,
      changeFrequency: page.changeFrequency ?? "monthly",
      priority: page.priority ?? 0.6,
    }));

  const dedicated = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(`/${route.slug}`),
    lastModified: route.slug.startsWith("legal/") ? LEGAL_UPDATED : UPDATED,
    changeFrequency: "monthly" as const,
    priority: route.slug === "download" ? 0.9 : 0.4,
  }));

  return [home, ...catalog, ...dedicated];
}
