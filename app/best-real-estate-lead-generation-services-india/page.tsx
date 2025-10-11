'use client'
import React from 'react';
import { TrendingUp, FileText, Video, Share2, Mail, MessageSquare, Target, Users, CheckCircle } from 'lucide-react';

const BuygrabLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Lead Generation Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Best Real Estate Lead Generation<br />
            Services in India — Powered by<br />
            Buygrab.in
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Over the past decade, we've delivered 170,000+ high-quality real estate leads globally,
            empowering agents, brokers, and investors with intelligent lead generation solutions.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Proven Track Record',
              stat: '170K+ Leads',
              desc: 'Validated, real-estate leads delivered across 15+ property sectors'
            },
            {
              icon: Target,
              title: 'Global Reach',
              stat: 'PAN India',
              desc: 'Connecting clients, sellers, and buyers across every major city'
            },
            {
              icon: Target,
              title: 'AI-Powered Matching',
              stat: 'AI-Enhanced',
              desc: 'Intelligent property searches with machine learning algorithms'
            },
            {
              icon: CheckCircle,
              title: 'Comprehensive Solutions',
              stat: 'Full Service',
              desc: 'End-to-end lead generation and management platform'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">{item.stat}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How Buygrab Generates Leads */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Buygrab.in Generates Quality Real Estate Leads
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive lead generation strategies designed to connect you with serious buyers and sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Target,
              title: 'Local SEO & Visibility',
              desc: 'Targeting location-specific keywords like "flats for sale in [city]" to attract local buyers via organic search and targeted pages',
              features: ['High Google ranking', 'Local map results', 'Quick page discovery']
            },
            {
              icon: FileText,
              title: 'High-Converting Landing Pages',
              desc: 'Dedicated property-specific pages with strong call to action, designed to capture leads in Delhi, Gurgaon or Bangalore via PPC/organic',
              features: ['CTA-based layouts', 'A/B tested layouts', 'Premium visuals']
            },
            {
              icon: Video,
              title: 'Video & Content Strategies',
              desc: 'Educational blogs, area guides, and interactive video tours including property walkthroughs and neighborhood insights',
              features: ['Property videos', 'Neighborhood insights', 'Educational content']
            },
            {
              icon: Share2,
              title: 'Social Media & Targeted Ads',
              desc: 'Hyper-local campaigns on Facebook and Instagram using lead form ads, engaging posts, and persuasive listings',
              features: ['Facebook lead ads', 'Instagram campaigns', 'Venue engagement', 'Lead form integration']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Mail,
              title: 'Email & Drip Marketing',
              desc: 'Segmented email campaigns and automated sequences with personalized property recommendations and relevant listings',
              features: ['CRM integrations', 'Personalized suggestions', 'Automated follow-up']
            },
            {
              icon: MessageSquare,
              title: 'SMS Alerts & Outreach',
              desc: 'High open-rate SMS WhatsApp for live listings, price reductions, and open house notifications',
              features: ['Instant alerts', 'High open rates', 'Segmented promotion']
            },
            {
              icon: Target,
              title: 'Smart Lead Management',
              desc: 'AI-driven lead scoring, CRM integrations, and automated re-targeting for premium prospects',
              features: ['Lead scoring', 'Automated segregation', 'Lead nurturing', 'Quality validation']
            },
            {
              icon: Users,
              title: 'Referral System & Testimonials',
              desc: 'Satisfied client referrals and incentivized recommendations and trust-building testimonials for lead building',
              features: ['Client success stories', 'Trust building', 'Credibility boost']
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Generation Process */}
      <div className="max-w-6xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Lead Generation Process
          </h2>
          <p className="text-gray-600">
            Step-by-step approach in generating high-quality real estate leads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: '1',
              title: 'Local SEO & Visibility',
              desc: 'Localized keyword targeting, Google Business listings, location-specific hyperlocal and community-focused content',
              color: 'blue'
            },
            {
              num: '2',
              title: 'High-Converting Landing Pages',
              desc: 'Clean user-friendly designs and conversion-optimized pages with strong calls to action, mobile-optimized layouts',
              color: 'green'
            },
            {
              num: '3',
              title: 'Content & Video Strategies',
              desc: 'Educational blogs, area guides, immersive walkthroughs, and neighborhood videos',
              color: 'purple'
            },
            {
              num: '4',
              title: 'Social Media & Ads',
              desc: 'Hyper-local Facebook and Instagram campaigns with lead form ads, engaging videos, and carousel property listings',
              color: 'orange'
            },
            {
              num: '5',
              title: 'Email & Drip Marketing',
              desc: 'Segmented email campaigns with personalized property suggestions and automated lead nurturing',
              color: 'red'
            },
            {
              num: '6',
              title: 'SMS Alerts & Outreach',
              desc: 'Immediate alerts about new properties, price reductions, and open houses',
              color: 'yellow'
            },
            {
              num: '7',
              title: 'Smart Lead Management',
              desc: 'AI-driven lead scoring and CRM integration that prioritizes high-intent inquiries and reduces manual sorting',
              color: 'teal'
            },
            {
              num: '8',
              title: 'Referral System',
              desc: 'Incentivize happy client referrals for example, refer testimonials boost trust and credibility driving new prospects',
              color: 'pink'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full bg-${item.color}-500 bg-opacity-10 flex items-center justify-center`}>
                  <span className={`text-lg font-bold text-${item.color}-600`}>{item.num}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale Your Real Estate Business?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of successful agents and brokers who trust Buygrab.in for their lead generation needs. Get started with our proven system and watch your pipeline grow.
          </p>
          <p className="text-base mb-8">
            Start generating quality leads today - Book your free strategy session
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started →
          </button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, text: '170K+ Leads Generated' },
            { icon: Target, text: 'AI Powered Matching' },
            { icon: CheckCircle, text: 'Decade Experience' },
            { icon: Target, text: 'Global Reach' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 bg-white rounded-lg shadow-sm p-4">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Buygrab Realty</h3>
            <p className="text-gray-400">
              Get the latest property insights, market trends, and AI-powered recommendations delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuygrabLanding;