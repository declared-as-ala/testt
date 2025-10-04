'use client'
import React from 'react';
import { Home, TrendingUp, Building2, MapPin, CheckCircle, Sparkles, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Search } from 'lucide-react';

const NewAshokNagarRentals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Premium Rental Listings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Flats for Rent in New Ashok Nagar,<br />
            Delhi
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Searching for "flats for rent in New Ashok Nagar near metro" or "affordable 2 BHK rentals"? Our latest listings offer furnished and semi-furnished options tailored to your budget and lifestyle.
          </p>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Listings
          </h2>
          <p className="text-gray-600">
            Discover a variety of rental options from budget-friendly studios to luxury 2 BHK apartments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: '1 RK / Studio Flats',
              price: '₹4,500 - ₹9,000/month',
              size: '~200-300 sq ft',
              desc: 'Ideal for bachelors or dual-professionals in standalone buildings'
            },
            {
              title: '1 BHK Apartments',
              price: '₹10,000 - ₹15,000/month',
              size: '~400-500 sq ft',
              desc: 'Furnished units in gated societies near metro station'
            },
            {
              title: '1.5 BHK Builder Floors',
              price: '₹14,000 - ₹17,000/month',
              size: '~500-625 sq ft',
              desc: 'Ideal for solo residents seeking more space'
            }
          ].map((listing, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{listing.title}</h3>
              <p className="text-2xl font-bold text-blue-600 text-center mb-1">{listing.price}</p>
              <p className="text-sm text-gray-500 text-center mb-4">{listing.size}</p>
              <p className="text-sm text-gray-600 text-center">{listing.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '2 BHK Flats & Builder Floors',
              price: '₹16,000 - ₹24,000/month',
              size: '~650-900 sq ft',
              desc: 'Semi-furnished or fully furnished, perfect for families'
            },
            {
              title: 'Luxury 2 BHK Options',
              price: '₹28,700/month',
              size: '~1,440 sq ft',
              desc: 'Spacious units in gated communities with 24/7 security'
            }
          ].map((listing, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{listing.title}</h3>
              <p className="text-2xl font-bold text-blue-600 text-center mb-1">{listing.price}</p>
              <p className="text-sm text-gray-500 text-center mb-4">{listing.size}</p>
              <p className="text-sm text-gray-600 text-center">{listing.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose New Ashok Nagar for Renting?
            </h2>
            <p className="text-gray-600">
              Discover the advantages of living in one of Delhi's most well-connected and affordable neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Prime Metro Connectivity',
                desc: 'Just steps from New Ashok Nagar Metro Station with rapid access to networks and transit hubs.'
              },
              {
                icon: TrendingUp,
                title: 'Affordable Rental Market',
                desc: 'Typical rents (₹ 600–₹21,600/month) for 1–2 BHKs with favorable rental yields of 3–5% annually.'
              },
              {
                icon: Building2,
                title: 'Diverse Housing Options',
                desc: 'From studio flats for 2 BHKs with built-in amenities for every budget and preference.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Rental Home Today
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Whether you're a working professional, student, or small family—discover verified rental listings in New Ashok Nagar with competitive pricing and excellent connectivity.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to move in? Explore our latest listings now
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Verified Listings' },
            { text: 'Metro Connectivity' },
            { text: 'Affordable Pricing' },
            { text: 'Multiple Options' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
};

export default NewAshokNagarRentals;