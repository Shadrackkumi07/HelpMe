import { UPDATED } from "@/lib/seo/site";
import type { SeoPage } from "@/lib/seo/types";

export function page(input: SeoPage): SeoPage {
  return {
    updated: UPDATED,
    changeFrequency: input.kind === "hub" || input.kind === "core" ? "weekly" : "monthly",
    priority:
      input.priority ??
      (input.kind === "core" ? 0.9 : input.kind === "hub" ? 0.8 : 0.6),
    faqs: input.faqs ?? [],
    keywords: input.keywords ?? [],
    ...input,
  };
}
