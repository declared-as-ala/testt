import React from 'react';
import { Mail, Globe } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Understanding your rights and responsibilities when using BuyGrab.in
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
            Welcome to <span className="text-blue-600 font-semibold">BuyGrab.in</span>, a real estate AI-powered lead generation portal that connects buyers, sellers, developers, brokers, and agents. By accessing or using our website or services, you agree to the following terms and conditions.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BuyGrab.in is operated as an independent lead generation platform, facilitating connections between property seekers and providers. We do not act as a broker, real estate agent, or property consultant, and we do not sell or resell any properties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform specializes in properties and estate leads for over 10 years, with <span className="text-blue-600 font-semibold">370,000+ leads generated globally</span>. Our platform uses advanced AI to match potential buyers and sellers, but we are not involved in any transaction, negotiation, or verification process.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Use of the Platform */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Platform</h2>
              <p className="text-gray-700 mb-4">By using BuyGrab.in, you agree to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Use the platform only for lawful purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Not misuse the platform for spam, fraud, or illegal activities</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Provide accurate and truthful information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Understand that BuyGrab.in is not responsible for the accuracy, completeness, or legality of user-generated content or listings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: No Verification of Users */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Verification of Users</h2>
              <p className="text-gray-700 mb-4">
                BuyGrab.in does not verify the identity, credentials, property ownership, or legitimacy of:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Real estate agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Builders or developers</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Sellers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Property brokers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-orange-900 text-sm">
                  <span className="font-semibold">Important:</span> We do not conduct background checks, site visits, legal validations, or KYC of any users. All users are advised to exercise caution and conduct their own due diligence before proceeding with any deal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: No Involvement in Transactions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Involvement in Transactions</h2>
              <p className="text-gray-700 mb-4">
                BuyGrab.in is not a party to any transaction between users. We do not:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Mediate between buyers and sellers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Guarantee the success of any deal or lead</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Facilitate payments or property documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">Provide legal, financial, or property advice</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-900 text-sm">
                  Users engage with each other at their own risk. We encourage all users to consult legal or real estate professionals before entering into any agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Lead Data Usage */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Data Usage</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">BuyGrab.in provides real-time, AI-matched leads based on user queries and listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">We do not sell, rent, or misuse your personal information or data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Our platform is intended solely to help users connect for informational and commercial purposes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two Column Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Section 6: Intellectual Property */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Content on BuyGrab.in, including text, graphics, logos, software, algorithms, design, and copy is the property of BuyGrab.in. Unauthorized reproduction or use is strictly prohibited.
            </p>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              BuyGrab.in is not liable for any damages, disputes, misrepresentation, inaccuracies, or service interruptions. Users agree to use the platform at their own discretion and risk.
            </p>
          </div>

          {/* Section 8: Third-Party Links */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                8
              </div>
              <h2 className="text-xl font-bold text-gray-900">Third-Party Links</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              BuyGrab.in may contain links to external websites or third-party platforms. We do not assume or take responsibility for their content, policies, or practices.
            </p>
          </div>

          {/* Section 9: Changes to Terms */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                9
              </div>
              <h2 className="text-xl font-bold text-gray-900">Changes to Terms</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of the platform after changes are posted constitutes your acceptance.
            </p>
          </div>
        </div>

        {/* Section 10: Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
              10
            </div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          <p className="text-purple-100 mb-6">
            For questions, feedback, or concerns regarding these Terms, please contact:
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

export default TermsAndConditions;