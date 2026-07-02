import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [25, 35, 50, 75, 100],
  },
  async rewrites() {
    const c15tUrl = process.env.NEXT_PUBLIC_C15T_URL;
    if (!c15tUrl) {
      return [];
    }

    return [
      {
        source: "/api/c15t/:path*",
        destination: `${c15tUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
