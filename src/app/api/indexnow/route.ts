import { submitAllToIndexNow, submitToIndexNow } from "@/lib/seo/indexnow";
import { SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-dynamic";

function authorized(request: Request): boolean {
  const cron = request.headers.get("x-vercel-cron");
  if (cron) return true;

  const expected = process.env.INDEXNOW_SUBMIT_TOKEN;
  if (!expected) {
    return process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
  }

  const header = request.headers.get("authorization");
  if (header === `Bearer ${expected}`) return true;
  const url = new URL(request.url);
  return url.searchParams.get("token") === expected;
}

function productionHost(): boolean {
  try {
    return new URL(SITE_URL).host === "helpme.fyi";
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  if (!productionHost() && !new URL(request.url).searchParams.has("force")) {
    return Response.json({ ok: true, skipped: "not-production-host" });
  }

  const force = new URL(request.url).searchParams.has("force");
  const result = await submitAllToIndexNow({ force });
  return Response.json(result, { status: result.ok ? 200 : 502 });
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  let urls: string[] | undefined;
  try {
    const body = (await request.json()) as { urls?: string[] };
    if (Array.isArray(body.urls)) urls = body.urls.filter((u) => typeof u === "string");
  } catch {
    urls = undefined;
  }

  const result = urls?.length
    ? await submitToIndexNow(urls, { force: true })
    : await submitAllToIndexNow({ force: true });
  return Response.json(result, { status: result.ok ? 200 : 502 });
}
