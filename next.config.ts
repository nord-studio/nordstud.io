import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xFCZrQsfZQ"
      }
    ]
  }
};

export default nextConfig;
