/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.buygrab.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buygrab.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
