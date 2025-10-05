/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.buygrab.in',
        port: '', // no custom port
        pathname: '/**', // allow all paths
      },
    ],
  },

  // Configure trailing slash behavior
  trailingSlash: false,
};

export default nextConfig;
