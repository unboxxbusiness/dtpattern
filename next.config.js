/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.rareblocks.xyz'], // Add your third-party domain here
  },
};

module.exports = nextConfig;
