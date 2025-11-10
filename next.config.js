/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Configuração para CSS
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
