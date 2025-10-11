import React from 'react';
import { Home, TrendingUp, MapPin, DollarSign, Building2, CheckCircle, Sparkles, Star } from 'lucide-react';

const FlatsSaleAshokNagar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Investment Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Flats for Sale in New Ashok Nagar,<br />
            Delhi
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Discover a variety of ready-to-move and resale residential options in this well-connected Delhi neighborhood with excellent growth potential.
          </p>
        </div>
      </div>

      {/* Real Estate Trends & Highlights */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Estate Trends & Highlights
          </h2>
          <p className="text-gray-600">
            Why New Ashok Nagar is attracting smart investors and homebuyers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: DollarSign,
              badge: 'Price Investment',
              title: 'Affordable Pricing',
              desc: 'Average per sale at ₹6,914 per sq ft, significantly lower than nearby areas like Vasundhara Enclave'
            },
            {
              icon: TrendingUp,
              badge: '8% Growth',
              title: 'Strong Growth Potential',
              desc: 'Property prices appreciating at 4-6% annually with robust infrastructure expansion'
            },
            {
              icon: Building2,
              badge: 'Metro + RRTS',
              title: 'Excellent Connectivity',
              desc: 'Metro station + RRTS terminal operational since January 2025 for ultra-fast regional transit'
            },
            {
              icon: MapPin,
              badge: 'Developed Area',
              title: 'Prime Location',
              desc: 'Well-developed neighborhood with markets, hospitals, and comfortable living environment'
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

      {/* FAQs Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-gray-600">
              Common flat sizes and pricing information
            </p>
          </div>

          {/* Q1: Common Flat Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Q1. What are common flat sizes and pricing?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">1 BHK</h4>
                <p className="text-2xl font-bold text-blue-600 text-center mb-1">₹28L – ₹45L</p>
                <p className="text-sm text-gray-500 text-center mb-4">~400-500 sq ft</p>
                <ul className="space-y-2">
                  {['Compact living', 'Perfect for singles', 'Good rental yield'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">2 BHK</h4>
                <p className="text-2xl font-bold text-purple-600 text-center mb-1">₹28L – ₹65L</p>
                <p className="text-sm text-gray-500 text-center mb-4">~650-1,400 sq ft</p>
                <ul className="space-y-2">
                  {['Family friendly', 'Most popular', 'Good appreciation'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">3-4 BHK</h4>
                <p className="text-2xl font-bold text-green-600 text-center mb-1">₹1.5Cr – ₹3.1Cr</p>
                <p className="text-sm text-gray-500 text-center mb-4">~1,500-1,800 sq ft</p>
                <ul className="space-y-2">
                  {['Spacious living', 'Premium segment', 'High-end amenities'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Q2: Brokerage */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Q2. Is brokerage applicable?
            </h3>
            <p className="text-gray-700">
              Many listings on platforms like NoBroker are completely brokerage-free, connecting buyers directly with owners or developers.
            </p>
          </div>

          {/* Q3: Types of Flats */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Q3. Types of flats available?
            </h3>
            <div className="flex flex-wrap gap-4">
              {['1 BHK', '2 BHK', '1.5–4 BHK Builder floors', 'Houses & ready-to-move'].map((type, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Q4: Locality */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Q4. What is the locality like?
            </h3>
            <p className="text-gray-700">
              New Ashok Nagar offers a prime, well-developed neighborhood with excellent connectivity via metro and RRTS, nearby amenities including markets, hospitals, and a comfortable living environment.
            </p>
          </div>
        </div>
      </div>

      {/* Location & Connectivity Highlights */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Location & Connectivity Highlights
          </h2>
          <p className="text-gray-600">
            Strategic advantages that make New Ashok Nagar a smart investment choice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'RRTS Advantage',
              desc: 'Operational since January 2025, providing ultra-fast regional transit with direct connectivity to Delhi-Meerut corridor'
            },
            {
              title: 'Competitive Rates',
              desc: 'Around ₹6,970/sq ft in Ashok Vasundhara Enclave (~₹10,190/sq ft) making significant savings'
            },
            {
              title: 'Infrastructure Boost',
              desc: 'DND Flyway and Noida-Link Road provide seamless connectivity to business districts'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Invest in New Ashok Nagar's Growth Story
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            With RRTS connectivity, competitive pricing, and strong growth potential, New Ashok Nagar offers excellent investment opportunities for smart buyers.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to invest? Explore available properties now
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { text: 'Metro + RRTS' },
            { text: 'No Brokerage Options' },
            { text: 'Ready to Move' },
            { text: 'Growth Potential' }
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

export default FlatsSaleAshokNagar;