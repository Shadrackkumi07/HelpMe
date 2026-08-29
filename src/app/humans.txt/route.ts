import { buildHumansTxt } from "@/lib/seo/llms";

export function GET() {
  return new Response(buildHumansTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
