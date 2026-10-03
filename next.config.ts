import type { NextConfig } from "next";
import { CATALOG_REDIRECTS } from "./src/lib/seo/redirects";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/2500d7578e4242d48d57e551182e81d0.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      /*
       * One canonical host: helpme.fyi (SITE_URL). Today Vercel still redirects
       * helpme.fyi -> www.helpme.fyi, so turning this rule on first would loop
       * the site. Order of operations:
       *   1. Vercel > Domains: make helpme.fyi primary; www redirects to it.
       *   2. Then set CANONICAL_HOST_REDIRECT=1 in Vercel and redeploy.
       * Step 1 alone already fixes the redirect errors; step 2 is a safety net.
       */
      ...(process.env.CANONICAL_HOST_REDIRECT === "1"
        ? [
            {
              source: "/:path*",
              has: [{ type: "host" as const, value: "www.helpme.fyi" }],
              destination: "https://helpme.fyi/:path*",
              permanent: true,
            },
          ]
        : []),
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/tos", destination: "/legal/terms", permanent: true },
      { source: "/contact", destination: "/support/contact", permanent: true },
      { source: "/app", destination: "/download", permanent: true },
      { source: "/get", destination: "/download", permanent: true },
      { source: "/testflight", destination: "/download", permanent: true },
      { source: "/help-center", destination: "/support/help", permanent: true },
      { source: "/questions/what-does-see-beyond-mean", destination: "/questions/what-does-it-starts-with-me-mean", permanent: true },
      // Pages removed, merged, or renamed. Source of truth: src/lib/seo/redirect-map.json
      ...CATALOG_REDIRECTS.map((r) => ({ ...r, permanent: true })),
    ];
  },
};

export default nextConfig;
