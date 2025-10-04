// app/layout.tsx (or your root layout file)

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BuyGrab - AI-Powered Real Estate Platform',
  description: 'Find your dream property with AI precision. 10+ years of expertise, 170,000+ leads delivered.',
  // you can also add more fields if needed, such as openGraph, twitter, etc.
  openGraph: {
    title: 'BuyGrab – AI-Powered Real Estate Platform',
    description: 'Find your dream property with AI precision. 10+ years of expertise, 170,000+ leads delivered.',
    url: 'https://www.buygrab.in/',
    siteName: 'BuyGrab Realty',
    images: [
      {
        url: 'https://www.buygrab.in/your-default-og-image.png',  // change to the actual image URL you want
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
