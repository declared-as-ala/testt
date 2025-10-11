'use client'
import { useState } from 'react'
import PropertyCard from '@/components/PropertyCard'

export default function Properties() {
  const [filter, setFilter] = useState('all')
  
  const properties = [
    { title: "₹65L", location: "Indira Nagar, Lucknow, UP", price: "₹65L", beds: "3", baths: "2", area: "1200", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", status: "For Sale", featured: true },
    { title: "₹85L", location: "DLF City Phase II, Gurgaon, HR", price: "₹85L", beds: "4", baths: "3", area: "2100", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600", status: "For Sale", featured: true },
    { title: "₹2.5Cr", location: "Luxury Apartments, Bangalore, KA", price: "₹2.5Cr", beds: "5", baths: "4", area: "3500", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", status: "For Sale", featured: true },
    { title: "₹45L", location: "Sector 62, Noida, UP", price: "₹45L", beds: "2", baths: "2", area: "950", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600", status: "For Sale", featured: false },
    { title: "₹1.2Cr", location: "Banjara Hills, Hyderabad, TG", price: "₹1.2Cr", beds: "4", baths: "3", area: "2800", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600", status: "For Sale", featured: true },
    { title: "₹75L", location: "Koramangala, Bangalore, KA", price: "₹75L", beds: "3", baths: "2", area: "1600", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600", status: "For Sale", featured: false },
  ]

  const filteredProperties = filter === 'all' ? properties : properties.filter(p => p.status === filter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Properties For Sale</h1>
          <p className="text-xl text-blue-100">
            Discover the finest properties in India's top locations. Find your dream home with verified listings and transparent transactions.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">3 Properties Available</h2>
            <p className="text-gray-600">Showing 1-3 of 3 results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-3xl p-12 text-white text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-lg font-semibold">Empowering 10K Users at a Record</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Properties for Sale —<br/>170,000+ Real Estate Leads Delivered
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
              At Buygrab Realty, we connect buyers with verified property listings across India. Whether you're looking for residential, commercial, or investment properties, our AI-powered platform ensures you get accurate pricing, verified listings, and secure transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Real Estate in India's Top Cities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover listings across India's most sought-after cities where buyers thrive. These locations are top choices for buyers due to infrastructure growth, connectivity, job opportunities, and lifestyle amenities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[ 'Lucknow', 'Greater Noida/Noida', 'Kolkata', 'Pune', 'Mumbai', 'Gurgaon', 'Hyderabad', 'Goa', 'Delhi', 'Dehradun', 'NCR', 'Noida'].map((city, index) => (
              <button key={index} className="flex items-center space-x-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-left">
                <span className="text-blue-600">📍</span>
                <span className="font-medium text-gray-800">{city}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Types of Properties Available</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Buygrab.in offers a diverse range of real estate options across India. Whether you're looking to buy or rent a property, we've got you covered with verified listings for residential and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏢', title: 'Luxury Residential Apartments', desc: 'Premium apartments in prime locations' },
              { icon: '🏪', title: 'Luxurious & Semi-premium Flats', desc: 'Modern flats with amenities' },
              { icon: '🏘️', title: 'Residential Lands or Villas OR Commercial Plots', desc: 'Land and plot investments' },
              { icon: '🏠', title: 'Pre-Leased or PTCs', desc: 'Ready-to-move properties' },
              { icon: '✨', title: 'Farm Apartments or Land-Plots', desc: 'Rural and farmhouse options' },
              { icon: '🏗️', title: 'Townhouse or Semi-Farms or Villas', desc: 'Spacious living spaces' }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Buygrab */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Buygrab.in?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Accelerating Tech & Innovation', desc: 'AI-powered property matching for faster results' },
              { icon: '🎯', title: 'AI-Assisted Property Matching', desc: 'Smart recommendations based on your preferences' },
              { icon: '📋', title: 'Web Portal\'s Intuitive Interface', desc: 'Easy-to-use platform with seamless navigation' },
              { icon: '📊', title: 'Better Deals with Lead Generation', desc: 'Access to exclusive listings and best prices' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Start Your Property Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to buy or sell? Find verified property listings with AI-powered matching and transparent pricing. Connect with experts now.
          </p>
          <p className="text-2xl font-semibold mb-8">
            Ready to dive in? Find your dream property now
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Property Searches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Flats for sale in Sector 2 Noida or Lucknow',
              'Residential flats/Apartments for rent offered',
              'Looking to Buy luxury villas under 2 nights in Bangalore',
              '2 bhk and 3bhk near Noida Railway',
              'Apartments & Barsats for Sale from',
              '2 BHK and 3 BHK flats in Ghazi Abad and Gurgaon',
              'Newly launched property in Indira Nagar or Sector 10-2',
              'Commercial shops properties near Jewar or Airport area',
              'flats and plots under ₹15 Lakhs ++ FRTF'
            ].map((search, index) => (
              <button key={index} className="bg-white p-4 rounded-lg text-left hover:shadow-md transition border border-gray-200">
                <p className="text-gray-700">{search}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: '1. What types of properties are listed on Buygrab.in for buyers?',
                a: 'We list a large range from mid-level income homes to prime property zones. From budget-friendly apartments to high, luxury, investment, and commercial business options for whatever property investment is best suited for you.'
              },
              {
                q: '2. How do I run the legality and title of a property in India?',
                a: 'Make sure you check all documents before and after transactions. It is an assured way to sell or purchase or even your land plots, by consulting the most experienced property expert for legal documentation in India.'
              },
              {
                q: '3. What are the differences between resale property loans, bank rate, and resale land tax cost?',
                a: 'When Buying Property in India – keep in mind the cost of documents fee, stamp duty, buyer broker charges/fees, registration fees/legal, etc.'
              },
              {
                q: '4. What steps should be charged a sale of home during property?',
                a: 'Common sale charges includes stamps and registrations, property tax (according to state), developer dues – Advance/Agreement/ NOC, bank deeds or documents charges, GST calculation % charged or building approval for sellers.'
              },
              {
                q: '5. Is the property loans on Buygrab.in registered under RERA? Are you credit-file?',
                a: 'Yes, All properties shown in listing programs comes under RERA verified or Registration for authorized governments. Buygrab.in ensures that all property listed under RERA registrations available and compliances checked'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
