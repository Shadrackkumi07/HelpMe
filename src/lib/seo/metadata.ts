import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, LOCALE, SITE_NAME, SITE_TAGLINE, SITE_URL, absoluteUrl } from "./site";
import type { SeoPage } from "./types";

export function pageMetadata(page: SeoPage): Metadata {
  const path = page.slug ? `/${page.slug}` : "/";
  const url = absoluteUrl(path);
  const title = page.title;
  const description = page.description;
  const image = absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    keywords: page.keywords,
    alternates: { canonical: url },
    robots: page.noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: page.kind === "core" || page.kind === "hub" ? "website" : "article",
      url,
      title,
      description,
      siteName: `${SITE_NAME} · ${SITE_TAGLINE}`,
      locale: LOCALE,
      images: [{ url: image, alt: `${SITE_NAME} — ${SITE_TAGLINE}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Metadata for the dedicated App Router pages (download, legal, support).
 * Next replaces openGraph wholesale when a page sets it, so the share URL, title,
 * and image are all built here instead of inheriting the homepage's.
 */
export function dedicatedMetadata(input: { path: string; title: string; description: string }): Metadata {
  const url = absoluteUrl(input.path);
  const image = absoluteUrl(DEFAULT_OG_IMAGE);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: LOCALE,
      url,
      siteName: `${SITE_NAME} · ${SITE_TAGLINE}`,
      title: `${input.title} · ${SITE_NAME}`,
      description: input.description,
      images: [{ url: image, width: 1200, height: 630, alt: "Help Me. It starts with me." }],
    },
    twitter: { card: "summary_large_image", title: input.title, description: input.description, images: [image] },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Help Me · It starts with me. Ask your block in Fargo-Moorhead",
    template: "%s · Help Me",
  },
  description:
    "A place to ask your block for the small stuff, from neighbors in Fargo, West Fargo, and Moorhead. Your block is closer than you think. In beta on iPhone.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "community",
  keywords: [
    "Help Me app",
    "Fargo help",
    "Moorhead help",
    "West Fargo",
    "community help app",
    "NDSU",
    "MSUM",
    "Concordia College",
    "jump start Fargo",
    "campus events Fargo",
    "neighbors helping neighbors",
    "ask your block",
  ],
  alternates: {
    canonical: SITE_URL,
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
      "application/rss+xml": [{ url: "/feed.xml", title: `${SITE_NAME} — guides, lists, and answers` }],
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: LOCALE,
    url: SITE_URL,
    siteName: `${SITE_NAME} · ${SITE_TAGLINE}`,
    title: "Help Me · It starts with me. Ask your block in Fargo-Moorhead",
    description:
      "A place to ask your block for the small stuff. Fargo, West Fargo, and Moorhead first. In beta on TestFlight for iPhone.",
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: "Help Me. It starts with me." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Me · It starts with me",
    description:
      "Neighbors helping neighbors with the small stuff in Fargo–Moorhead. Your block is closer than you think.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  other: {
    "geo.region": "US-ND",
    "geo.placename": "Fargo",
    ICBM: "46.8772, -96.7898",
  },
};
