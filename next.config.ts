import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  skipTrailingSlashRedirect: true,
  // Finance 서비스는 gmefinance.com 으로 분리됐다.
  // 기존 주소로 들어오는 외부 링크·검색 유입을 그쪽으로 넘긴다.
  async redirects() {
    return [
      {
        source: '/services/loan',
        destination: 'https://gmefinance.com',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'klvfsorzfdsommxscspg.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
