/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xFCZrQsfZQ",
      },
    ];
  },
};

export default nextConfig;
