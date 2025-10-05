'use client'
import React from 'react';
import { Plane, TrendingUp, Building2, MapPin, CheckCircle, Target, BarChart3, Smile, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Search } from 'lucide-react';

const JewarAirportPlots = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Plane className="w-5 h-5" />
            <span className="text-sm font-medium">Prime Investment Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Plots for Sale Near Jewar Airport,<br />
            Greater Noida
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Discover prime investment opportunities with residential plots near the upcoming Noida International Airport (Jewar). Here's a detailed overview of the real estate landscape, pricing trends, and strategic significance.
          </p>
        </div>
      </div>

      {/* Why Buy Plots Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Buy Plots Near Jewar Airport?
          </h2>
          <p className="text-gray-600">
            Infrastructure developments making this region a prime investment destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Plane,
              title: 'Mega Airport Project',
              badge: 'New Infrastructure',
              badgeColor: 'blue',
              desc: 'One of India\'s largest greenfield airports, initially handling 12 million passengers, scaling up to 70 million+ by 2050.'
            },
            {
              icon: Building2,
              title: 'Ever-Changing Connectivity',
              badge: 'Connectivity Boost',
              badgeColor: 'blue',
              desc: 'New metro links, roads, and expressways (Yamuna Expressway, Greater Noida metro extension), and integrated road networks cutting travel time.'
            },
            {
              icon: TrendingUp,
              title: 'Regional Development Hub',
              badge: 'Development Hub',
              badgeColor: 'blue',
              desc: 'Real estate, industrial parks, and logistics centers converge, rapidly transforming the corridor into a thriving commercial zone.'
            },
            {
              icon: MapPin,
              title: 'Strategic Location',
              badge: 'Strategic',
              badgeColor: 'blue',
              desc: 'Prime positioning connecting Delhi, Noida, Greater Noida with proposed high-speed rail links and national highway network.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property Appreciation & ROI */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Property Appreciation & ROI
            </h2>
            <p className="text-gray-600">
              Exceptional growth statistics driving investor interest in the Jewar corridor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Skyrocketing Land Rates
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Before:</span>
                  <span className="font-semibold text-gray-900">₹10,000/sq.m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-semibold text-gray-900">₹12,000/sq.m</span>
                </div>
              </div>
              <p className="text-center text-sm text-green-600 font-medium">
                +2,400% surge
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                High Growth Potential
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Before:</span>
                  <span className="font-semibold text-gray-900">Base Value</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Expected:</span>
                  <span className="font-semibold text-gray-900">500% Increase</span>
                </div>
              </div>
              <p className="text-center text-sm text-green-600 font-medium">
                Over 5 years
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-8 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Smile className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Investor Sentiment
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Before:</span>
                  <span className="font-semibold text-gray-900">Limited Interest</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current:</span>
                  <span className="font-semibold text-gray-900">90% High Investment</span>
                </div>
              </div>
              <p className="text-center text-sm text-green-600 font-medium">
                3 years over case
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Stories from Land Owners */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Stories from Land Owners
          </h2>
          <p className="text-gray-600">
            Firsthand insights from investors and landowners in the Jewar corridor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-lg">💬</span>
              </div>
              <div>
                <p className="text-gray-700 italic mb-4">
                  "Once Jewar Airport is complete and the first runway begins operations, land values will skyrocket—I've recommended it to several friends."
                </p>
                <p className="text-sm font-semibold text-gray-900">— Navdut garg</p>
                <p className="text-xs text-gray-500">Invested 3.5 crore selling parcel for 8/200+ lakhs</p>
                <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
                  Read full story
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-lg">💬</span>
              </div>
              <div>
                <p className="text-gray-700 italic mb-4">
                  "I'm selling 72 bighas (~40 lakh each) around 12 km from the airport—land connectivity via service roads."
                </p>
                <p className="text-sm font-semibold text-gray-900">— Landowner</p>
                <p className="text-xs text-gray-500">Selling farmland for agriculture viable plots near Jewar</p>
                <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
                  View Listings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Planning & Upcoming Infrastructure */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Planning & Upcoming Infrastructure
            </h2>
            <p className="text-gray-600">
              Cutting/releases/development plans shaping the future of the Jewar project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛩️',
                title: 'Aerospace Hub Development',
                desc: 'Proposals for MRO (Maintenance, Repair, Overhaul) facilities spanning over 1,500 acres with allied and direct airport facilities.'
              },
              {
                icon: '💰',
                title: 'Compensation Framework',
                desc: 'Farmers being compensated at 4X the circle rate, ensuring fair market value for respective owners.'
              },
              {
                icon: '🏢',
                title: 'Industrial Park Proximity',
                desc: 'New industrial hubs to be located near Jewar Airport, including logistics parks and commercial zones for the region.'
              },
              {
                icon: '📅',
                title: 'Future Expansion Plans',
                desc: 'Phases 2 & 3 extension planning completed, targeting 70M+ passenger capacity through strategic acquisition and development strategy.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Benefits Summary */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Investment Benefits Summary
          </h2>
          <p className="text-gray-600">
            Key advantages of investing in plots near Jewar Airport
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure Catalyst</h3>
            <ul className="space-y-3">
              {[
                'Major airport project driving development',
                'Metro and expressway links',
                'Government policy support',
                'Regional connectivity hub'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Appreciation Potential</h3>
            <ul className="space-y-3">
              {[
                'Land rates increased 40% recently',
                '500% growth projected over 5 years',
                'Airport-led development boom',
                'Industrial corridor benefits'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Investment</h3>
            <ul className="space-y-3">
              {[
                '3–5 years holding period recommended',
                'Multiple exit strategies available',
                'Suitable and spec available',
                'Lower risk with residential zoning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Plot Near Jewar Airport Today
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            With the airport development in full swing and infrastructure investments pouring in, now is the ideal time to invest in this high-growth corridor. Expert recommendations suggest a 3-4 year holding period for optimal returns.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to invest in India's aviation future? Explore available plots now
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Airport Proximity' },
            { text: '500% Growth Potential' },
            { text: 'Infrastructure Boom' },
            { text: 'Strategic Investment' }
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
                <li><a href="#" className="hover:text-white transition-colors">1 BHK Flat Rent</a></li>
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
//ss
export default JewarAirportPlots;