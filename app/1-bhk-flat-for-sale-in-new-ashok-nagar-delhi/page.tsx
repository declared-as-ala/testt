'use client'
import React from 'react';
import { Home, TrendingUp, BarChart3, Shield, MapPin, School, Building2, Users } from 'lucide-react';

export default function AshokNagarListing() {
  const listings = [
    {
      badge: "New Delhi",
      price: "₹13L",
      subtitle: "Ex Colony 1",
      title: "Block B (Near Metro)",
      area: "414 sq ft",
      features: ["Near metro station", "Spacious locality", "Joint road"]
    },
    {
      badge: "Healthcare Hub",
      price: "₹22L",
      subtitle: "Ex Colony 5",
      title: "Block C (Medical Center)",
      area: "450 sq ft",
      features: ["Near medical facilities", "Good connectivity", "Healthcare access"]
    },
    {
      badge: "Stadium",
      price: "₹15L",
      subtitle: "Ex Colony 3",
      title: "Block A (City Shine School)",
      area: "580 sq ft",
      features: ["Near school", "Spacious layout", "Family friendly"]
    },
    {
      badge: "Cultural Area",
      price: "₹20L",
      subtitle: "Ex Colony 8",
      title: "Near Kali Mata Temple",
      area: "440 sq ft",
      features: ["Religious proximity", "Cultural area", "Peaceful location"]
    }
  ];

  const locationBenefits = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Excellent Connectivity",
      description: "Metro station less than 1.5 km away; also near BRTS terminal (enhancing accessibility)"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Competitive Property Rates",
      description: "Average flat prices around ₹6-₹25/sq ft, making it affordable option for value buyers"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Growth Potential",
      description: "Rapidly infrastructure development and regional accessibility boost property values"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Investment Ready",
      description: "Ideal blend of affordability, connectivity, and locality in a mature neighborhood"
    }
  ];

  const faqs = [
    {
      question: "What is the price range for 1 BHK flats here?",
      answer: "Prices vary from ₹13L to ₹25L, depending on size and location"
    },
    {
      question: "Which listings offer the best value per square foot?",
      answer: "Block B near the metro offers the most cost-effective option at around ₹3,140/sq ft"
    },
    {
      question: "How's local transport connectivity?",
      answer: "Very well-connected by both metro and the high-speed RRTS, facilitating seamless cross-city transit"
    },
    {
      question: "Any neighborhood concerns?",
      answer: "Minor, primarily affordable; some have had quality issues but Vasundhara Enclave offers quality gated environment in terms of extent with stations"
    }
  ];

  const features = [
    { icon: "✓", text: "Metro Connected" },
    { icon: "✓", text: "RRTS Access" },
    { icon: "✓", text: "Affordable Pricing" },
    { icon: "✓", text: "Growth Potential" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Smart Investment Choice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            1 BHK Flats for Sale in New Ashok Nagar, Delhi
          </h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Discover an ideal blend of affordability, connectivity, and locality in the eastern Delhi
            neighborhood. Here's a comprehensive breakdown of available 1 BHK options.
          </p>
        </div>
      </div>

      {/* Current Listings Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Current Listings & Pricing Insights
          </h2>
          <p className="text-gray-600">
            Explore affordable 1 BHK options across different blocks in New Ashok Nagar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {listings.map((listing, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {listing.badge}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{listing.price}</div>
                  <div className="text-xs text-gray-500">{listing.subtitle}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-gray-600 mb-4">{listing.area}</p>
              <div className="space-y-2">
                {listing.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Location Matters Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Why Location Matters
            </h2>
            <p className="text-gray-600">
              Strategic advantages that make New Ashok Nagar an attractive investment destination
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {locationBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQs</h2>
          <p className="text-gray-600">
            Common questions about 1 BHK flats in New Ashok Nagar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Value Recommendation */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <h3 className="text-2xl font-bold">Best Value Recommendation</h3>
          </div>
          <p className="mb-6 opacity-90">Block B (Near Metro Station)</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">₹13L</div>
              <div className="text-sm opacity-90">Ideal Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold">414 sq ft</div>
              <div className="text-sm opacity-90">Optimal Size</div>
            </div>
            <div>
              <div className="text-3xl font-bold">₹3,140/sq ft</div>
              <div className="text-sm opacity-90">Best Value/Affordability</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your 1 BHK Investment Today
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            With metro connectivity, RRTS access, and competitive pricing starting from just ₹13
            lakhs, there's a 1BHK flat in New Ashok Nagar for every budget.
          </p>
          <p className="text-xl font-semibold mb-8">
            Ready to invest? Explore available properties now
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            View All Properties
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <span className="text-green-500 text-xl">{feature.icon}</span>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}