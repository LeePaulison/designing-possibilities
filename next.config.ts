import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
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
};

export default nextConfig;
