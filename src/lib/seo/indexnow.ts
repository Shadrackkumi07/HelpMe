import { INDEXNOW_ENDPOINT, INDEXNOW_KEY, SITE_URL } from "./site";
import { indexableUrls } from "./urls";

const BATCH = 10_000;
const MIN_INTERVAL_MS = 15 * 60 * 1000;

let lastFullSubmitAt = 0;

export type IndexNowResult = {
  ok: boolean;
  skipped?: string;
  status?: number;
  submitted: number;
  batches: number;
  keyLocation: string;
  host: string;
  body?: string;
};

export function indexNowKeyLocation(): string {
  return `${SITE_URL}/${INDEXNOW_KEY}.txt`;
}

export function indexNowHost(): string {
  return new URL(SITE_URL).host;
}

export function allIndexNowUrls(): string[] {
  return indexableUrls().map((entry) => entry.url);
}

function urlsForHost(urls: string[], host: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of urls) {
    try {
      const parsed = new URL(raw);
      if (parsed.host !== host) continue;
      const href = parsed.toString();
      if (seen.has(href)) continue;
      seen.add(href);
      out.push(href);
    } catch {
      /* skip invalid */
    }
  }
  return out;
}

function chunk<T>(items: T[], size: number): T[][] {
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += size) batches.push(items.slice(i, i + size));
  return batches;
}

export async function submitToIndexNow(urls: string[], options?: { force?: boolean }): Promise<IndexNowResult> {
  const host = indexNowHost();
  const keyLocation = indexNowKeyLocation();
  const urlList = urlsForHost(urls, host);

  if (host === "localhost" || host.startsWith("127.")) {
    return { ok: true, skipped: "localhost", submitted: 0, batches: 0, keyLocation, host };
  }

  if (!options?.force && lastFullSubmitAt && Date.now() - lastFullSubmitAt < MIN_INTERVAL_MS) {
    return {
      ok: true,
      skipped: "rate-limited",
      submitted: 0,
      batches: 0,
      keyLocation,
      host,
    };
  }

  if (!urlList.length) {
    return { ok: false, submitted: 0, batches: 0, keyLocation, host, body: "no matching URLs" };
  }

  const batches = chunk(urlList, BATCH);
  let lastStatus = 0;
  let lastBody = "";

  for (const batch of batches) {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList: batch,
      }),
    });
    lastStatus = response.status;
    lastBody = await response.text();
    if (![200, 202].includes(response.status)) {
      return {
        ok: false,
        status: lastStatus,
        submitted: 0,
        batches: batches.length,
        keyLocation,
        host,
        body: lastBody.slice(0, 500),
      };
    }
  }

  lastFullSubmitAt = Date.now();
  return {
    ok: true,
    status: lastStatus,
    submitted: urlList.length,
    batches: batches.length,
    keyLocation,
    host,
    body: lastBody.slice(0, 200),
  };
}

export async function submitAllToIndexNow(options?: { force?: boolean }): Promise<IndexNowResult> {
  return submitToIndexNow(allIndexNowUrls(), options);
}
