import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Subscription Bar */}
      <div className="border-b border-gray-800 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Stay Updated with Buygrab Realty</h3>
            <p className="text-gray-400 text-sm">
              Get the latest property insights, market trends, and AI-powered recommendations delivered to your inbox.
            </p>
          </div>

          {/* Updated Subscribe Box */}
          <div className="flex items-center w-full md:w-auto max-w-md rounded-md overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
  <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-16">

        {/* Company Info */}
        <div className="lg:col-span-2">
          <Image
            src="https://www.buygrab.in/buygrab-logo.png"
            alt="BuyGrab Realty"
            width={180}
            height={45}
            className="mb-4"
          />
          <p className="text-gray-400 mb-6 leading-relaxed">
            Revolutionizing real estate with AI-powered search and personalized property recommendations. Find your perfect home with intelligent insights and cutting-edge technology.
          </p>
          <div className="space-y-3 text-gray-400 text-sm">
            <p>📍 B101, Sector 1, Noida, 201301, UP (India)</p>
            <p>📞 +91 906 968 9226</p>
            <p>📧 support@buygrab.in</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Company</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Our Team</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#">Real Estate Lead Generation</Link></li>
            <li><Link href="#">Residential Properties</Link></li>
            <li><Link href="#">Flats for Rent Near Me</Link></li>
            <li><Link href="#">Jewar Airport Plots</Link></li>
          </ul>
        </div>

        {/* Properties & Resources */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Properties</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#">Flats in New Ashok Nagar</Link></li>
            <li><Link href="#">1 BHK Flat Rent</Link></li>
            <li><Link href="#">Flats for Sale Delhi</Link></li>
            <li><Link href="#">1 BHK Flat Sale</Link></li>
          </ul>

          <h4 className="font-semibold mb-4 mt-6 text-lg">Resources</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#">Market Reports</Link></li>
            <li><Link href="#">Investment Guide</Link></li>
            <li><Link href="#">Mortgage Calculator</Link></li>
            <li><Link href="#">Neighborhood Guide</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Legal</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Accessibility</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Buygrab Realty. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">💼</a>
            <a href="#" className="hover:text-white">▶️</a>
            <a href="#" className="hover:text-white">📌</a>
            <a href="#" className="hover:text-white">⏰</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
