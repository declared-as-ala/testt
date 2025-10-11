'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white">
      {/* Top Subscription Bar */}
      <div className="border-b border-gray-700 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-3">Stay Updated with Buygrab Realty</h3>
            <p className="text-white text-base">
              Get the latest property insights, market trends, and AI-powered recommendations delivered to your inbox.
            </p>
          </div>

          {/* Subscribe Box */}
          <div className="flex items-stretch w-full lg:w-auto lg:min-w-[500px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 text-gray-300 bg-[#252b3d] border border-gray-600 placeholder-gray-500 focus:outline-none focus:border-gray-500 rounded-l-lg"
            />
            <button className="flex items-center gap-2 px-7 py-3.5 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all whitespace-nowrap rounded-r-lg">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer - 6 columns on large screens so Legal stays in line */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16">

        {/* Company Info */}
        <div>
          <Image
            src="/buygrap.webp"
            alt="BuyGrab Realty"
            width={300}
            height={100}
            className="mb-6"
          />
          <p className="text-white mb-8 leading-relaxed text-sm">
            Revolutionizing real estate with AI-powered search and personalized property recommendations. Find your perfect home with intelligent insights and cutting-edge technology.
          </p>
         
      
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold mb-5 text-lg">Company</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/about" className="text-white hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Press</Link></li>
            <li><Link href="/contact" className="text-white hover:text-white transition-colors">Contact</Link ></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-bold mb-5 text-lg">Services</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/best-real-estate-lead-generation-services-india" className="text-white hover:text-white transition-colors">Real Estate Lead Generation</Link></li>
            <li><Link href="/residential-properties" className="text-white hover:text-white transition-colors">Residential Properties</Link></li>
            <li><Link href="/flat-for-rent-near-me" className="text-white hover:text-white transition-colors">Flats for Rent Near Me</Link></li>
            <li><Link href="/buy-plots-near-jewar-airport" className="text-white hover:text-white transition-colors">Jewar Airport Plots</Link></li>
          </ul>
        </div>

        {/* Properties Links */}
        <div>
          <h4 className="font-bold mb-5 text-lg">Properties</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/flat-for-rent-in-new-ashok-nagar" className="text-white hover:text-white transition-colors">Flats in New Ashok Nagar</Link></li>
            <li><Link href="/1-bhk-flat-in-new-ashok-nagar-for-rent" className="text-white hover:text-white transition-colors">1 BHK Flat Rent</Link></li>
            <li><Link href="/flat-for-sale-in-new-ashok-nagar-delhi" className="text-white hover:text-white transition-colors">Flats for Sale Delhi</Link></li>
            <li><Link href="/1-bhk-flat-for-sale-in-new-ashok-nagar-delhi" className="text-white hover:text-white transition-colors">1 BHK Flat Sale</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-bold mb-5 text-lg">Resources</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="#" className="text-white hover:text-white transition-colors">Market Reports</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Investment Guide</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Mortgage Calculator</Link></li>
            <li><Link href="#" className="text-white hover:text-white transition-colors">Neighborhood Guide</Link></li>
            <li><Link href="/blog" className="text-white hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-bold mb-5 text-lg">Legal</h4>
          <ul className="space-y-3 text-white text-sm">
            <li><Link href="/privacy-policy" className="text-white hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="text-white hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/Cookie-Policy" className="text-white hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link href="/Disclaimer" className="text-white hover:text-white transition-colors">Disclaimer</Link></li>
            <li><Link href="/Accessibility" className="text-white hover:text-white transition-colors">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section (socials + copyright) */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Buygrab Realty. All rights reserved.
          </p>
          <div className="flex items-center space-x-5 text-white">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Quora">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.738 18.701c-.831 0-1.612-.236-2.269-.645.656-1.239 1.907-2.394 3.426-2.394.231 0 .457.021.675.063l-.014.001c-.033.082-.119.309-.181.445-.565 1.245-1.032 1.688-1.637 2.53zm2.453-1.014c1.756-.916 2.809-2.602 2.809-4.587 0-2.862-2.268-5.1-5.417-5.1-2.973 0-5.417 2.235-5.417 5.1 0 2.814 2.444 5.099 5.417 5.099.836 0 1.645-.158 2.403-.446.473.762 1.072 1.377 1.778 1.826-.601.068-1.218.105-1.847.105C6.622 19.684 0 15.743 0 10.8 0 5.856 6.622 1.916 12.916 1.916c6.294 0 12.916 3.94 12.916 8.884 0 2.658-1.654 5.046-4.266 6.664.891 1.633 1.677 2.241 2.434 2.241v2.479c-2.243 0-3.535-1.146-4.809-3.497z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
