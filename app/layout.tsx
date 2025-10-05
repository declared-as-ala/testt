// app/layout.tsx (or your root layout file)

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: 'BuyGrab - AI-Powered Real Estate Platform',
  description: 'Find your dream property with AI precision. 10+ years of expertise, 170,000+ leads delivered.',
  metadataBase: new URL('https://www.buygrab.in'),
  keywords: ['real estate', 'property', 'AI', 'buygrab', 'investment', 'rent', 'sale'],
  authors: [{ name: 'BuyGrab Realty' }],
  creator: 'BuyGrab Realty',
  publisher: 'BuyGrab Realty',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'BuyGrab – AI-Powered Real Estate Platform',
    description: 'Find your dream property with AI precision. 10+ years of expertise, 170,000+ leads delivered.',
    url: 'https://www.buygrab.in/',
    siteName: 'BuyGrab Realty',
    images: [
      {
        url: 'https://www.buygrab.in/your-default-og-image.png',
        width: 1200,
        height: 630,
        alt: 'BuyGrab Real Estate',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuyGrab – AI-Powered Real Estate Platform',
    description: 'Find your dream property with AI precision. 10+ years of expertise, 170,000+ leads delivered.',
    images: ['https://www.buygrab.in/your-default-og-image.png'],
    creator: '@buygrab',
  },
  category: 'real estate',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3B82F6',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.buygrab.in" />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="https://www.buygrab.in/images/pexels-photo-1571460-lg.webp" 
          as="image" 
          type="image/webp"
          fetchPriority="high"
        />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/buy" />
        <link rel="prefetch" href="/rent" />
        <link rel="prefetch" href="/sell" />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
