import React from 'react';
import { Target, Users, Sparkles, Shield, TrendingUp, MapPin, CheckCircle, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuyGrab Realty</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Transforming real estate through AI-powered intelligence and trusted expertise
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            Trusted by 57,000+ Clients | 170,000+ Leads Generated
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Our Vision Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Target className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                At BuyGrab Realty, we envision a real estate marketplace that's smarter, faster, and more transparent—where buyers, sellers, renters, and investors are seamlessly connected through intelligent technology and human expertise. Our goal is to make property decisions informed, confident, and hassle-free.
              </p>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over a decade of experience in the Indian real estate sector, BuyGrab Realty has emerged as a forward-looking, tech-enabled property platform. We have successfully delivered <span className="text-blue-600 font-semibold">170,000+ high-quality leads</span> across digital channels—serving homebuyers, sellers, landlords, and investors alike.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We operate PAN-India, connecting clients with residential properties, land parcels, plots, rental homes, and investment opportunities in both metro and emerging markets.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Unique Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-blue-600" />
            What Makes Us Unique
          </h2>
          
          <div className="space-y-6">
            {/* AI-Driven Property Intelligence */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Driven Property Intelligence</h3>
              <p className="text-gray-700 leading-relaxed">
                We harness advanced AI and machine learning algorithms to analyze user behavior, market trends, and property data. This allows us to curate personalized property matches tailored to each user's preferences—saving time and improving relevance.
              </p>
            </div>

            {/* Verified Listings & Trusted Network */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Listings & Trusted Network</h3>
              <p className="text-gray-700 leading-relaxed">
                Every listing on our platform undergoes authenticity checks and vetting to ensure legitimacy and clarity. We work closely with property developers, brokers, and local agents to maintain a reliable and up-to-date inventory.
              </p>
            </div>

            {/* Deep Local Expertise */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you're scouting plots near Jewar Airport or urban homes in Delhi NCR, our local property intelligence and market insights help you spot the hidden gems.
              </p>
            </div>

            {/* End-to-End Support */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-700 leading-relaxed">
                From legal due diligence and documentation checks to negotiation support and post-sale tracking, our team is by your side throughout your real estate journey. Our mission is to reduce friction and uncertainty at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Values Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-blue-600" />
            Our Core Values
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-600">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Value</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">What It Means for You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-blue-600">Transparency</td>
                  <td className="py-3 px-4 text-gray-700">Clear, honest listing information. No hidden surprises.</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-blue-600">Client-First</td>
                  <td className="py-3 px-4 text-gray-700">Your goals lead every recommendation we make.</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-blue-600">Innovation</td>
                  <td className="py-3 px-4 text-gray-700">Constantly evolving our tech and processes to stay ahead.</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-blue-600">Integrity</td>
                  <td className="py-3 px-4 text-gray-700">Ethical dealings, verified partners, trustworthy transactions.</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-blue-600">Local Insight</td>
                  <td className="py-3 px-4 text-gray-700">In-depth knowledge of neighborhoods, micro-markets, and trends.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Our Reach & Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="w-7 h-7" />
            Our Reach & Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">57,000+</div>
              <p className="text-purple-100">Trusted clients across India</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">170,000+</div>
              <p className="text-purple-100">Quality leads generated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">PAN-India</div>
              <p className="text-purple-100">Metro & emerging markets</p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-gray-700 leading-relaxed">
                Behind BuyGrab Realty is a diverse team of real estate professionals, data scientists, domain experts, and customer success specialists. We combine deep industry experience with technical excellence to deliver a superior realty platform.
              </p>
            </div>
          </div>
        </div>

        {/* What You Can Expect Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-blue-600" />
            What You Can Expect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Property Discovery</h3>
                <p className="text-gray-700 text-sm">AI-matched properties that align with your budget, location, and preference.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Reliable Listings</h3>
                <p className="text-gray-700 text-sm">Verified properties with detailed images and clarifications.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Investment Insights</h3>
                <p className="text-gray-700 text-sm">Market reports, trend analysis, and location intelligence to guide your decision.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Support & Guidance</h3>
                <p className="text-gray-700 text-sm">From site visits and legal checks to final closing, we're with you all the way.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Join the BuyGrab Community</h3>
          <p className="text-gray-400 mb-6">
            Get the latest property insights, market trends, and AI-powered recommendations delivered to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;