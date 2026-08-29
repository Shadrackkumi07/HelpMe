import { allPages, STATIC_ROUTES } from "@/lib/content/registry";
import { SITE_URL, UPDATED, absoluteUrl } from "./site";

export type IndexableUrl = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/** Every URL we want Bing, Google, and IndexNow to know about. Sitemap and IndexNow share this list. */
export function indexableUrls(): IndexableUrl[] {
  const home: IndexableUrl = {
    url: SITE_URL,
    lastModified: UPDATED,
    changeFrequency: "weekly",
    priority: 1,
  };

  const catalog = allPages().map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified: page.updated ?? UPDATED,
    changeFrequency: page.changeFrequency ?? "monthly",
    priority: page.priority ?? 0.6,
  }));

  const dedicated = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(`/${route.slug}`),
    lastModified: UPDATED,
    changeFrequency: "monthly" as const,
    priority: route.slug === "download" ? 0.9 : 0.4,
  }));

  const extras: IndexableUrl[] = [
    { url: absoluteUrl("/llms.txt"), lastModified: UPDATED, changeFrequency: "weekly", priority: 0.3 },
    { url: absoluteUrl("/llms-full.txt"), lastModified: UPDATED, changeFrequency: "weekly", priority: 0.2 },
    { url: absoluteUrl("/feed.xml"), lastModified: UPDATED, changeFrequency: "weekly", priority: 0.3 },
    { url: absoluteUrl("/ai.txt"), lastModified: UPDATED, changeFrequency: "monthly", priority: 0.2 },
    { url: absoluteUrl("/humans.txt"), lastModified: UPDATED, changeFrequency: "yearly", priority: 0.1 },
  ];

  return [home, ...catalog, ...dedicated, ...extras];
}
