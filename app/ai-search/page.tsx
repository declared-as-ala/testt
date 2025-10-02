'use client'
import { useState } from 'react'
import PropertyCard from '@/components/PropertyCard'

export default function AISearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [preferences, setPreferences] = useState({
    bedrooms: '',
    budget: '',
    location: '',
    propertyType: ''
  })

  const aiRecommendations = [
    { title: "Smart Apartment", location: "Mumbai Central", price: "₹95 Lakh", beds: "3", baths: "2", area: "1850", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600" },
    { title: "Modern Villa", location: "Bangalore North", price: "₹2.2 Cr", beds: "4", baths: "3", area: "3200", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" },
    { title: "Luxury Penthouse", location: "Delhi Aerocity", price: "₹3.5 Cr", beds: "5", baths: "4", area: "4500", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">AI-Powered Property Search</h1>
          <p className="text-xl">Tell us what you want, and let our AI find the perfect match</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Natural Language Search</h2>
            <div className="mb-6">
              <textarea 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rows={4}
                placeholder="Describe your dream property... e.g., 'I'm looking for a 3 bedroom apartment in Mumbai with a budget of 1 crore, close to schools and with parking'"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition text-lg flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Search with AI</span>
            </button>
          </div>

          <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Bedrooms</label>
                <select 
                  value={preferences.bedrooms}
                  onChange={(e) => setPreferences({...preferences, bedrooms: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Any</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4+">4+ BHK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Budget Range</label>
                <select 
                  value={preferences.budget}
                  onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Any</option>
                  <option value="0-50">Under ₹50 Lakh</option>
                  <option value="50-100">₹50L - ₹1 Cr</option>
                  <option value="100-200">₹1 Cr - ₹2 Cr</option>
                  <option value="200+">Above ₹2 Cr</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Location</label>
                <input 
                  type="text"
                  value={preferences.location}
                  onChange={(e) => setPreferences({...preferences, location: e.target.value})}
                  placeholder="e.g., Mumbai, Bangalore"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Property Type</label>
                <select 
                  value={preferences.propertyType}
                  onChange={(e) => setPreferences({...preferences, propertyType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Any</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">Independent House</option>
                  <option value="land">Plot/Land</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">AI Analysis</h3>
                <p className="text-gray-700">Based on your search history and preferences, our AI has identified that you're looking for properties in urban areas with good connectivity. We've curated these personalized recommendations for you.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">AI-Recommended Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiRecommendations.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our AI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Understand</h3>
              <p className="text-gray-600">AI analyzes your search patterns and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Match</h3>
              <p className="text-gray-600">Smart algorithms find properties that fit your criteria</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Recommend</h3>
              <p className="text-gray-600">Curated list of properties ranked by relevance</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Learn</h3>
              <p className="text-gray-600">System improves with every interaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
