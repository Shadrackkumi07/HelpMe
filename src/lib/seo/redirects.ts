import map from "./redirect-map.json";

/**
 * Permanent redirects for catalog pages that were removed, merged, or renamed.
 * Source of truth: redirect-map.json. Every source must NOT exist in the
 * catalog (registry.ts throws if it does), and every destination must.
 */
export const CATALOG_REDIRECTS: { source: string; destination: string }[] = [
  ...Object.entries(map.removed),
  ...Object.entries(map.renamed),
].map(([from, to]) => ({ source: `/${from}`, destination: `/${to}` }));
