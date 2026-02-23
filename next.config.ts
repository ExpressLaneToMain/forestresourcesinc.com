import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async redirects() {
    return [
      {
        source: "/services/food-plots",
        destination: "/services/food-plots-crp-seeding",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;