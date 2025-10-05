// app/layout.tsx (or your root layout file)

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
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
        {/* Only preconnect to used domains */}
        <link rel="preconnect" href="https://www.buygrab.in" />
        {/* Preload main CSS for render speed */}
        <link rel="preload" href="/_next/static/css/e8f382cdc1d350b8.css" as="style" />
        {/* Preload main font if self-hosted */}
        {/* <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        {/* Optimized hero image example */}
        <main>
          <section className="relative w-full h-[296px] flex items-center justify-center bg-gray-100">
            <Image
              src="/images/pexels-photo-1571460-lg.webp"
              alt="Hero"
              width={395}
              height={296}
              priority
              sizes="(max-width: 768px) 100vw, 395px"
              quality={70}
              style={{ objectFit: 'cover', borderRadius: '1rem' }}
            />
          </section>
          {children}
        </main>
        <Footer />
        {/* Lazy-load ChatWidget for performance */}
        {typeof window !== 'undefined' && <ChatWidget />}
      </body>
    </html>
  );
}
