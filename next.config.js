/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/404',
        destination: '/about',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
