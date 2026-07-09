import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yoona_find',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
