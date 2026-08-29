import type { NextConfig } from "next";

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
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/tos", destination: "/legal/terms", permanent: true },
      { source: "/contact", destination: "/support/contact", permanent: true },
      { source: "/app", destination: "/download", permanent: true },
      { source: "/get", destination: "/download", permanent: true },
      { source: "/testflight", destination: "/download", permanent: true },
      { source: "/help-center", destination: "/support/help", permanent: true },
    ];
  },
};

export default nextConfig;
