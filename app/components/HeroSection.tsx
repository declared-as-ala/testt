'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized background image with fetchpriority and preload */}
      <Image
        src="https://www.buygrab.in/images/pexels-photo-1571460-lg.webp"
        alt="Modern real estate property showcase"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{
          objectPosition: 'center center',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        {/* Tagline */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <svg
            className="w-8 h-8 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-lg font-medium text-blue-300">
            AI-Powered Real Estate
          </span>
        </div>

        {/* Headings */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
          The Future of Real Estate.
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">
            Personalized by AI.
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 font-light max-w-3xl mx-auto text-white">
          Experience intelligent property search that understands exactly what
          you're looking for.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-3 shadow-2xl flex items-center">
            <svg
              className="w-6 h-6 text-black ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Say 'Find 3-bed homes under ₹50L near schools'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-4 text-black text-lg focus:outline-none bg-transparent"
            />
            <button 
              className="mr-2 p-2 hover:bg-gray-100 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Voice search"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Search luxury homes"
          >
            Luxury Homes
          </button>
          <button 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Search apartments"
          >
            Apartments
          </button>
          <button 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Search condos"
          >
            Condos
          </button>
          <button 
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Search townhouses"
          >
            Townhouses
          </button>
        </div>
      </div>

    
    </section>
  )
}
