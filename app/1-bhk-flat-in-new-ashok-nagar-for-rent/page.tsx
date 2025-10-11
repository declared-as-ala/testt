import React from 'react';
import { Home, MapPin, DollarSign, Building2, CheckCircle, Sparkles, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Search } from 'lucide-react';

const OneBHKRentalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Affordable 1 BHK Rentals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            1 BHK Flats for Rent in New Ashok<br />
            Nagar, Delhi
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Looking for a cozy and convenient 1 BHK flat in New Ashok Nagar? Here's a snapshot of current listings and what renters are saying.
          </p>
        </div>
      </div>

      {/* Featured Rental Listings */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Rental Listings
          </h2>
          <p className="text-gray-600">
            Discover affordable 1 BHK options across various blocks and locations in New Ashok Nagar
          </p>
        </div>

        {/* First Row of Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            {
              price: '₹6,000/month',
              title: 'Semi-Furnished Near Temple',
              size: '525 sq.ft • Near chiti Singh Marg temple',
              features: ['Semi-furnished', 'Standalone building', 'Modern living']
            },
            {
              price: '₹10,000/month',
              title: 'Unfurnished Block D',
              size: '~475 sq.ft • Block D-I, Standalone building',
              features: ['Unfurnished', 'Good connectivity', 'Parking spot']
            },
            {
              price: '₹12,000/month',
              title: 'Unfurnished Block B',
              size: '485 sq.ft • Block B - Standalone building',
              features: ['Unfurnished', 'Near metro', 'Community access']
            }
          ].map((listing, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-2">{listing.price}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{listing.size}</p>
              <ul className="space-y-2">
                {listing.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row of Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              price: '₹14,000/month',
              title: 'Semi-Furnished Builder Floor',
              size: '550 sq.ft • Builder floor, Premium area',
              features: ['Semi-furnished', 'Balcony', 'Modern amenities']
            },
            {
              price: '₹12,250/month',
              title: 'Gated Society',
              size: '475 sq.ft • Gated society',
              features: ['Unfurnished', 'Security', 'Community living']
            },
            {
              price: '₹18,500/month',
              title: 'Prime Ground Floor',
              size: '550 sq.ft • Prime location, Ground floor',
              features: ['Unfurnished', 'Prime area', 'Easy access']
            }
          ].map((listing, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-2">{listing.price}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{listing.size}</p>
              <ul className="space-y-2">
                {listing.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose 1 BHK Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose 1 BHK Rentals in New Ashok Nagar?
            </h2>
            <p className="text-gray-600">
              Perfect blend of affordability, convenience, and connectivity for singles and couples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: 'Affordable Pricing',
                desc: 'Starting from just ₹6,000/month for semi-furnished rentals'
              },
              {
                icon: MapPin,
                title: 'Prime Locations',
                desc: 'Near temples, close station, and transportation for easy connectivity'
              },
              {
                icon: Building2,
                title: 'Diverse Options',
                desc: 'Standalone, builders, builder floors, and gated societies available'
              },
              {
                icon: Home,
                title: 'Ready to Move',
                desc: 'Furnished and semi-furnished options for a smoother transition'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Furnished & Well-Maintained Units */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Furnished & Well-Maintained Units
          </h2>
          <p className="text-gray-600">
            Ready-to-move options for professionals and students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-8 border border-green-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Semi-Furnished Ground Level</h3>
                <p className="text-sm text-gray-600 mb-4">400 sq.ft • Ground level location</p>
              </div>
              <p className="text-xl font-bold text-green-600 whitespace-nowrap">₹13,000/month</p>
            </div>
            <ul className="space-y-2">
              {['Easy access and parking', 'Basic furnishing included'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Furnished Prime Areas</h3>
                <p className="text-sm text-gray-600 mb-4">400-450 sq.ft • Prime locations</p>
              </div>
              <p className="text-xl font-bold text-blue-600 whitespace-nowrap">₹15,500-₹18,500/month</p>
            </div>
            <ul className="space-y-2">
              {['Fully furnished units', 'Under Kids category'].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
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
            Find Your Perfect 1 BHK Today
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            From budget-friendly options to premium furnished flats, discover the ideal 1 BHK rental in New Ashok Nagar that fits your lifestyle and budget.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to move in? Explore available listings now
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Budget Options' },
            { text: 'Furnished Available' },
            { text: 'Near Metro' },
            { text: 'Multiple Blocks' }
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

export default OneBHKRentalsPage;