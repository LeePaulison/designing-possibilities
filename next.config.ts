import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    isrFlushToDisk: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/categories",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  async headers() {
    this.poweredByHeader = false;
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // HSTS
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Content Sniffing Protection
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Clickjacking Protection
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // XSS Protection
          },
        ],
      },
    ];
  },
};

export default nextConfig;
