/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  // ❗️Muy importante: NO pongas output: 'export'
};

module.exports = nextConfig;