import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Pin the workspace root; an unrelated lockfile sits above this directory.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yourmainstays.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
