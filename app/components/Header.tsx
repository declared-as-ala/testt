'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/buygrap.webp"
              alt="BuyGrab Realty"
              width={240}
              height={40}
              priority
              style={{ maxWidth: '240px', height: 'auto', display: 'block', objectFit: 'contain' }}
              className="h-10 w-auto mx-auto"
            />
          </Link>
          
          <button 
            className="lg:hidden text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav 
            className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:items-center lg:space-x-8 absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-6 lg:p-0 space-y-4 lg:space-y-0 shadow-lg lg:shadow-none`}
            aria-label="Main navigation"
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 w-full lg:w-auto">
            <li><Link href="/" className="block text-black hover:text-blue-600 transition text-base font-medium">Home</Link></li>
            <li><Link href="/about" className="block text-black hover:text-blue-600 transition text-base font-medium">About</Link></li>
            <li><Link href="/buy" className="block text-black hover:text-blue-600 transition text-base font-medium">Buy</Link></li>
            <li><Link href="/sell" className="block text-black hover:text-blue-600 transition text-base font-medium">Sell</Link></li>
            <li><Link href="/rent" className="block text-black hover:text-blue-600 transition text-base font-medium">Rent</Link></li>
            <li><Link href="/properties" className="block text-black hover:text-blue-600 transition text-base font-medium">Properties</Link></li>
            <li><Link href="/blog" className="block text-black hover:text-blue-600 transition text-base font-medium">Blog</Link></li>
            <li><Link href="/contact" className="block text-black hover:text-blue-600 transition text-base font-medium">Contact</Link></li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="flex items-center space-x-2 text-black hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
              aria-label="Sign in to your account"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium">Sign In</span>
            </button>
            <Link href="/sell" className="bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-900 transition flex items-center space-x-2">
              <span className="text-lg">+</span>
              <span>List Property</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}