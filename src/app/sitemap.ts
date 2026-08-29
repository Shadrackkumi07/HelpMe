import type { MetadataRoute } from "next";
import { indexableUrls } from "@/lib/seo/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableUrls();
}
