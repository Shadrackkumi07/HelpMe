import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo/site";

/** Web app manifest. Also gives Google and browsers a stable, square brand icon. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: `${SITE_NAME}. ${SITE_TAGLINE}. Ask your block for the small stuff in Fargo, West Fargo, and Moorhead.`,
    start_url: "/",
    display: "browser",
    background_color: "#F8F6F0",
    theme_color: "#FF5A36",
    icons: [
      { src: "/brand/help-me-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/help-me-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/help-me-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
