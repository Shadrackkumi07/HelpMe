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

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Help Me · See Beyond — Community help in Fargo–Moorhead",
    template: "%s · Help Me",
  },
  description:
    "Someone nearby needs a hand. Someone nearby would give one. Help Me connects people in Fargo, Moorhead, and West Fargo with trusted Helpers nearby. Now on TestFlight for iPhone.",
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
    "approved helpers",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
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
    title: "Help Me · See Beyond — Community help in Fargo–Moorhead",
    description:
      "Ask for everyday help from approved people nearby. Built for Fargo, Moorhead, and West Fargo. Live on TestFlight for iPhone.",
    images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), alt: "Help Me" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Me · See Beyond",
    description:
      "Ask for everyday help from approved people nearby in Fargo–Moorhead. Live on TestFlight for iPhone.",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  other: {
    "geo.region": "US-ND",
    "geo.placename": "Fargo",
    ICBM: "46.8772, -96.7898",
  },
};
