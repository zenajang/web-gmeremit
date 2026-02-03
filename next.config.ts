import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    skipTrailingSlashRedirect: true,
  },
};

export default nextConfig;
