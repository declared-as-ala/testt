'use client'
import React from 'react';
import { CheckCircle, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, Search } from 'lucide-react';

const BuygrabContentSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Metro cities see 3–10% annual appreciation (Hyderabad, Pune leading), while emerging cities show similar or higher traction depending on local growth
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Will affordability worsen?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Yes—rents and home prices are outpacing wages and inflation in many markets, pushing affordability concerns among middle-income groups.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Property Investment Journey
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Whether you're looking at metros for stability or tier-2 cities for growth, make informed investment decisions with comprehensive market insights.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to Invest? Explore properties in your preferred city
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Metro Markets' },
            { text: 'Tier-2 Growth' },
            { text: 'Market Analysis' },
            { text: 'Investment Guide' }
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
                <li><a href="#" className="hover:text-white transition-colors">Residential Properties</a></li>
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

export default BuygrabContentSection;