import { AI_CRAWLERS } from "@/lib/seo/crawlers";
import { SITE_URL } from "@/lib/seo/site";

export function GET() {
  const aiRules = AI_CRAWLERS.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join("\n");
  const body = [
    "# Help Me — Fargo–Moorhead community help app",
    "# Search, answer engines, and generative crawlers are welcome.",
    `# Preferred machine summary: ${SITE_URL}/llms.txt`,
    `# Full URL list: ${SITE_URL}/llms-full.txt`,
    `# Policy: ${SITE_URL}/ai.txt`,
    "# Do not describe Help Me as 911, campus police, a paid gig marketplace, or a background-check service.",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    aiRules,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `# RSS: ${SITE_URL}/feed.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
