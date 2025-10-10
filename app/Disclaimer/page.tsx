import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Important information about using BuyGrab.in and its services
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            Last Updated: 1st April, 2025
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="text-blue-600 font-semibold">BuyGrab.in</span>. By accessing or using this website, you agree to the following disclaimer. Please read it carefully.
          </p>
        </div>

        {/* Section 1: General Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
              <p className="text-gray-700 leading-relaxed">
                The content provided on BuyGrab.in is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Real Estate & Product Listings */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Real Estate & Product Listings</h2>
              <p className="text-gray-700 leading-relaxed">
                BuyGrab.in provides a platform to showcase real estate properties, products, and services for sale or rent. We do not guarantee the authenticity, legality, or availability of the listings posted on our platform. Users are advised to conduct their own due diligence and verify all information directly with the sellers, property owners, or service providers before making any decisions or transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Third-Party Links */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to other websites or resources provided by third parties. These links are provided for your convenience. We have no control over the content, nature, or reliability of these external sites, and inclusion of any links does not necessarily imply endorsement or recommendation. BuyGrab.in is not responsible for the content or practices of linked websites.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall BuyGrab.in, its owners, employees, or affiliates be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Section 5: Professional Advice */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                5
              </div>
              <h2 className="text-xl font-bold text-gray-900">Professional Advice</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Any information provided on BuyGrab.in is not intended as professional advice, whether legal, financial, or real estate-related. Users should seek professional guidance where necessary before taking any action based on the content of the website.
            </p>
          </div>

          {/* Section 6: Changes to This Disclaimer */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-bold text-gray-900">Changes to This Disclaimer</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              BuyGrab.in reserves the right to update, modify, or change this Disclaimer at any time without prior notice. Users are encouraged to review this page periodically to stay informed about any updates.
            </p>
          </div>
        </div>

        {/* Section 7: Contact Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
              7
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-purple-100 mb-6">
            If you have any questions regarding this Disclaimer, please contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email</span>
              </div>
              <a href="mailto:support@buygrab.in" className="text-purple-100 hover:text-white transition-colors">
                support@buygrab.in
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Website</span>
              </div>
              <a href="https://www.buygrab.in" className="text-purple-100 hover:text-white transition-colors">
                www.buygrab.in
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 mt-12 text-white">
          <h3 className="text-2xl font-bold mb-2">Stay Updated with Buygrab Realty</h3>
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

export default Disclaimer;