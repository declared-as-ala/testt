import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Understanding how we use cookies and similar technologies on BuyGrab.in
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
            At <span className="text-blue-600 font-semibold">BuyGrab.in</span>, we value your privacy and are committed to ensuring transparency in how we use cookies and similar technologies. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences while using our website.
          </p>
        </div>

        {/* Section 1: What Are Cookies? */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, login details, and browsing activities to improve your user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Types of Cookies We Use */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <p className="text-gray-700 mb-4">
                BuyGrab.in uses several types of cookies to ensure website functionality and improve performance:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Essential Cookies</span> – Required for the website to function properly (e.g., account login, security verification).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Performance Cookies</span> – Help us understand how visitors interact with the website by collecting analytics data.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Functional Cookies</span> – Allow the website to remember your preferences such as language or region.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Advertising & Marketing Cookies</span> – Used to deliver personalized ads and track ad campaign performance.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Why We Use Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies enable us to enhance your browsing experience by allowing us to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Remember your login details and saved properties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Analyze website traffic and improve functionality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Offer personalized content and property recommendations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Deliver relevant ads across our marketing platforms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Third-Party Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use third-party cookies from trusted partners such as Google Analytics, Facebook, and other advertising networks. These partners help us analyze site usage, measure marketing effectiveness, and deliver targeted advertisements. BuyGrab.in does not control third-party cookie data but ensures that they comply with privacy regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: How to Manage Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Manage Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can manage or disable cookies through your browser settings. However, disabling cookies may limit your access to certain features or affect the performance of our website.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Here's how to manage cookies in popular browsers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Google Chrome:</span> Settings → Privacy and Security → Cookies and other site data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Mozilla Firefox:</span> Options → Privacy & Security → Cookies and Site Data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Microsoft Edge:</span> Settings → Site permissions → Cookies and site data
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div className="text-gray-700">
                    <span className="font-semibold">Safari:</span> Preferences → Privacy → Manage Website Data
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two Column Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Section 6: Data Privacy and Security */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-bold text-gray-900">Data Privacy and Security</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We do not store personal information such as your name or contact details in cookies. Any data collected through cookies is processed in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </div>

          {/* Section 7: Changes to This Cookie Policy */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-bold text-gray-900">Changes to This Cookie Policy</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our data practices. The latest version will always be available on this page with an updated revision date.
            </p>
          </div>
        </div>

        {/* Section 8: Contact Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
              8
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-purple-100 mb-6">
            If you have any questions about this Cookie Policy or your privacy rights, please contact us at:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Address</span>
            </div>
            <p className="text-purple-100">
              BuyGrab Realty Pvt. Ltd., India
            </p>
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

export default CookiePolicy;