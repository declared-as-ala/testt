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

  // Optional: Future-proof Next.js 14 features
  experimental: {
    appDir: true, // if you use /app folder
  },

  // Configure trailing slash behavior
  trailingSlash: false,
  
  // Custom webpack configuration to handle void elements
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
