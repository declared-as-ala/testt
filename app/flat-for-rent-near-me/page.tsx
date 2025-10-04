'use client'
import React from 'react';
import { Building2, TrendingUp, Home, MapPin, CheckCircle, Sparkles, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Search } from 'lucide-react';

const BuygrabRentalPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Nationwide Rental Listings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Flats for Rent Near You — Across<br />
            India's Top Cities
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Whether you're searching for a rental in Pune, Hyderabad, Bengaluru, or emerging markets like Indore and Lucknow, we've got you covered with diverse, localized listings nationwide.
          </p>
        </div>
      </div>

      {/* Featured Rental Markets */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Rental Markets
          </h2>
          <p className="text-gray-600">
            Explore rental opportunities across India's most dynamic and promising real estate markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Building2,
              title: 'Bengaluru',
              badge: 'Tech Hub',
              badgeColor: 'blue',
              desc: 'The city\'s booming tech ecosystem keeps rental demand high across Whitefield, Electronic City, and Sarjapur. Expect reliable infrastructure and quality living.'
            },
            {
              icon: TrendingUp,
              title: 'Hyderabad',
              badge: 'Growth Markets',
              badgeColor: 'blue',
              desc: 'A thriving city, attracting residents with key hubs like Gachibowla, HITEC City, and Kondapur offering strong appreciation potential.'
            },
            {
              icon: Home,
              title: 'Pune',
              badge: 'Education & IT',
              badgeColor: 'blue',
              desc: 'Balancing IT, education, and commercial pockets. Fast-living rental hotspots include Hinjewadi, Kharadi, Baner, and the evolving Wagholi-Pune Trails.'
            },
            {
              icon: Building2,
              title: 'Delhi NCR',
              badge: 'Infrastructure Boom',
              badgeColor: 'blue',
              desc: 'Infrastructure upgrades like the Dwarka Expressway and RRTS accelerate real estate growth in sectors like YXU, YXE, and Greater Noida West.'
            },
            {
              icon: Home,
              title: 'Chennai',
              badge: 'Stable Market',
              badgeColor: 'blue',
              desc: 'Stable, mid-pace focused market with consistent occupancy. Prime corridors include OMR, Porur, and Kattupakk.'
            },
            {
              icon: TrendingUp,
              title: 'Kolkata',
              badge: '100% Growth',
              badgeColor: 'blue',
              desc: 'Residential launches surged by 100% year-on-year, with especially strong growth in the premium housing segment (over 41 units).'
            }
          ].map((market, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <market.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {market.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{market.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{market.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tier-2 Emerging Cities */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tier-2 Emerging Cities
            </h2>
            <p className="text-gray-600">
              Promising markets known for smart-city development, infrastructure expansion, and affordability
            </p>
          </div>

          {/* City Pills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {['Indore', 'Lucknow', 'Jaipur', 'Coimbatore', 'Kochi', 'Visakhapatnam'].map((city, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{city}</span>
              </div>
            ))}
          </div>

          {/* Featured Tier-2 Cities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Surat</h3>
              </div>
              <p className="text-sm text-gray-600">
                Consistently high GDP growth and "smart city" credentials
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Bhubaneswar</h3>
              </div>
              <p className="text-sm text-gray-600">
                Among India's fastest-growing Tier-2 cities with strong IT and infrastructure growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Rental Anywhere in India
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            From metro cities to emerging markets, discover verified rental listings across India's most promising real estate destinations with competitive pricing and growth potential.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to explore? Start your rental search today
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Pan-India Coverage' },
            { text: 'Smart City Markets' },
            { text: 'Growth-Oriented Locations' },
            { text: 'Localized Listings' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-3">Stay Updated with Buygrab Realty</h3>
            <p className="text-gray-400 mb-6">
              Get the latest property insights, market trends, and AI-powered recommendations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-blue-400">BUYGRAB</span>
                <span className="text-xl font-bold text-green-400">🏠 REALTY</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Revolutionizing real estate with AI-powered search and personalized property recommendations. Find your perfect home with intelligent insights and cutting-edge technology.
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>B101, Sector 1, Noida, 201301, UP (India)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 906 908 9226</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>support@buygrab.in</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Real Estate Lead Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">1 BHK Flat Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flats for Rent Near Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jewar Airport Plots</a></li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Flats in New Ashok Nagar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">1 BHK Flat Rent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flats for Sale Delhi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">1 BHK Flat Sale</a></li>
              </ul>
            </div>
          </div>

          {/* Additional Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800">
            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mortgage Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neighborhood Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Buygrab Realty. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.06-.55-.11-1.4.02-2 .12-.55.77-3.28.77-3.28s-.2-.4-.2-.98c0-.92.53-1.6 1.2-1.6.56 0 .83.42.83.93 0 .56-.36 1.41-.55 2.19-.16.65.33 1.18.98 1.18 1.17 0 2.07-1.24 2.07-3.03 0-1.58-1.14-2.69-2.76-2.69-1.88 0-2.98 1.41-2.98 2.87 0 .57.22 1.18.49 1.51.05.06.06.12.04.18l-.18.75c-.03.11-.1.14-.21.08-.82-.38-1.34-1.58-1.34-2.54 0-2.08 1.51-3.99 4.35-3.99 2.28 0 4.06 1.63 4.06 3.8 0 2.27-1.43 4.1-3.41 4.1-.67 0-1.29-.34-1.5-.75l-.41 1.56c-.15.57-.55 1.29-.82 1.72a12 12 0 1 0 1.78-23.91z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Search">
                <Search className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuygrabRentalPage;