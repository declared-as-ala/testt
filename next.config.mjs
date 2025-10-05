import { HTMLFixPlugin } from './plugins/html-fix-plugin.mjs';

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

  // Next.js 14 features are enabled by default

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
    
    // Add HTML fix plugin
    config.plugins.push(new HTMLFixPlugin());
    
    return config;
  },

  // Custom headers for HTML compliance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
