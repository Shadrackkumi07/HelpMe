import type { PageKind, SeoPage } from "@/lib/seo/types";
import { CORE_PAGES } from "./core";
import { CITY_PAGES } from "./cities";
import { NEIGHBORHOOD_PAGES } from "./neighborhoods";
import { CAMPUS_PAGES } from "./campuses";
import { SCHOOL_PAGES } from "./schools";
import { HELP_PAGES } from "./help";
import { GLOSSARY_PAGES } from "./glossary";
import { VS_PAGES } from "./vs";
import { ALTERNATIVE_PAGES } from "./alternatives";
import { GUIDE_PAGES } from "./guides";
import { RESOURCE_PAGES } from "./resources";
import { LIST_PAGES } from "./lists";
import { QUESTION_PAGES } from "./questions";
import { SEASON_PAGES } from "./seasons";
import { AUDIENCE_PAGES } from "./audiences";

/** Routes that have their own App Router files and must not be SSG'd by the catch-all. */
export const OWN_ROUTE_SLUGS = new Set([
  "download",
  "legal/privacy",
  "legal/terms",
  "support/help",
  "support/contact",
]);

export const STATIC_ROUTES: { slug: string; title: string; description: string; eyebrow: string }[] = [
  {
    slug: "download",
    title: "Get Help Me",
    description: "Live on TestFlight for iPhone in Fargo–Moorhead.",
    eyebrow: "app",
  },
  {
    slug: "legal/privacy",
    title: "Privacy Policy",
    description: "How Help Me handles accounts, approximate location, and safety reports.",
    eyebrow: "legal",
  },
  {
    slug: "legal/terms",
    title: "Terms of Service",
    description: "Terms for the Help Me TestFlight beta.",
    eyebrow: "legal",
  },
  {
    slug: "support/help",
    title: "Help Center",
    description: "Common questions about Help Me.",
    eyebrow: "support",
  },
  {
    slug: "support/contact",
    title: "Contact",
    description: "Email support@helpme.fyi — a person answers.",
    eyebrow: "support",
  },
];

const PAGES: SeoPage[] = [
  ...CORE_PAGES,
  ...CITY_PAGES,
  ...NEIGHBORHOOD_PAGES,
  ...CAMPUS_PAGES,
  ...SCHOOL_PAGES,
  ...HELP_PAGES,
  ...GLOSSARY_PAGES,
  ...VS_PAGES,
  ...ALTERNATIVE_PAGES,
  ...GUIDE_PAGES,
  ...RESOURCE_PAGES,
  ...LIST_PAGES,
  ...QUESTION_PAGES,
  ...SEASON_PAGES,
  ...AUDIENCE_PAGES,
];

const INDEX = new Map<string, SeoPage>();
for (const entry of PAGES) {
  if (INDEX.has(entry.slug)) {
    throw new Error(`Duplicate SEO slug: ${entry.slug}`);
  }
  if (OWN_ROUTE_SLUGS.has(entry.slug)) {
    throw new Error(`SEO catalog slug collides with a dedicated route: ${entry.slug}`);
  }
  INDEX.set(entry.slug, entry);
}

export function allPages(): SeoPage[] {
  return PAGES;
}

export function getPage(slug: string): SeoPage | undefined {
  return INDEX.get(slug);
}

export function pagesByKind(kind: PageKind): SeoPage[] {
  return PAGES.filter((p) => p.kind === kind);
}

/** Direct children of a hub, e.g. childrenOf("cities") → cities/fargo, not cities/fargo/x. */
export function childrenOf(slug: string): SeoPage[] {
  if (!slug) return [];
  const prefix = `${slug}/`;
  return PAGES.filter((p) => {
    if (!p.slug.startsWith(prefix)) return false;
    return !p.slug.slice(prefix.length).includes("/");
  });
}

export function catalogCount(): number {
  return PAGES.length + STATIC_ROUTES.length + 1; // + home
}
