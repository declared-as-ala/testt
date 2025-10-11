import React from 'react';
import { Mail, Globe, Phone } from 'lucide-react';

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Our commitment to ensuring digital accessibility for all users
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
            <span className="text-blue-600 font-semibold">BuyGrab.in</span> is committed to ensuring digital accessibility for all users, including people with disabilities. We are continually working to improve the user experience for everyone and applying best practices to make our website accessible.
          </p>
        </div>

        {/* Section 1: Measures to Support Accessibility */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Measures to Support Accessibility</h2>
              <p className="text-gray-700 mb-4">
                BuyGrab.in takes the following measures to ensure accessibility:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">●</span>
                  <span className="text-gray-700">Using clear and consistent navigation and headings across the website.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">●</span>
                  <span className="text-gray-700">Providing alternative text for images and multimedia content wherever possible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">●</span>
                  <span className="text-gray-700">Ensuring that all forms, buttons, and interactive elements are accessible using keyboard navigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">●</span>
                  <span className="text-gray-700">Using high-contrast colors and readable fonts to enhance visibility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">●</span>
                  <span className="text-gray-700">Regularly reviewing and updating website content to improve accessibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Limitations */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to make BuyGrab.in accessible to all users, some content or features may not yet be fully accessible. This may include certain third-party content, interactive maps, or embedded media. We are actively working to address these limitations.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Feedback and Contact */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you experience any accessibility barriers while using our website or have suggestions for improvement, please contact us. Your feedback is valuable and helps us improve accessibility for everyone.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-900 font-semibold mb-3">Contact Us:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">●</span>
                    <div className="text-gray-700">
                      <span className="font-semibold">Email:</span> support@buygrab.in
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">●</span>
                    <div className="text-gray-700">
                      <span className="font-semibold">Phone:</span> +91-XXXXXXXXXX
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">●</span>
                    <div className="text-gray-700">
                      <span className="font-semibold">Contact Form:</span> <a href="#" className="text-blue-600 hover:text-blue-700 underline">Click here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Ongoing Efforts */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Efforts</h2>
              <p className="text-gray-700 leading-relaxed">
                BuyGrab.in is committed to continuously improving accessibility. We regularly review our website for compliance with accessibility standards and implement necessary updates to ensure an inclusive experience for all users.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-purple-100 mb-6">
            We value your feedback and are here to help. If you have questions or concerns about accessibility, please reach out:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email</span>
              </div>
              <a href="mailto:support@buygrab.in" className="text-purple-100 hover:text-white transition-colors text-sm">
                support@buygrab.in
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Phone</span>
              </div>
              <a href="tel:+91XXXXXXXXXX" className="text-purple-100 hover:text-white transition-colors text-sm">
                +91-XXXXXXXXXX
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Website</span>
              </div>
              <a href="https://www.buygrab.in" className="text-purple-100 hover:text-white transition-colors text-sm">
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

export default AccessibilityStatement;