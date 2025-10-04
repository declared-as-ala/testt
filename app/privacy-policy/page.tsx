'use client'
import React, { useState } from 'react';
import { Shield, FileText, Info, Eye, Settings, Share2, Lock, Cookie, UserCheck, Archive, Baby, RefreshCw, Mail, Phone, MessageCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const [email, setEmail] = useState('');

  const tableOfContents = [
    { id: 1, title: "About Buygrade Realty", icon: <Info className="w-4 h-4" /> },
    { id: 2, title: "Information We Collect", icon: <FileText className="w-4 h-4" /> },
    { id: 3, title: "How We Use Your Information", icon: <Eye className="w-4 h-4" /> },
    { id: 4, title: "Use of AI Technologies", icon: <Settings className="w-4 h-4" /> },
    { id: 5, title: "Sharing of Information", icon: <Share2 className="w-4 h-4" /> },
    { id: 6, title: "Data Security", icon: <Lock className="w-4 h-4" /> },
    { id: 7, title: "Cookies and Tracking", icon: <Cookie className="w-4 h-4" /> },
    { id: 8, title: "User Rights", icon: <UserCheck className="w-4 h-4" /> },
    { id: 9, title: "Data Retention", icon: <Archive className="w-4 h-4" /> },
    { id: 10, title: "Children's Privacy", icon: <Baby className="w-4 h-4" /> },
    { id: 11, title: "Policy Updates", icon: <RefreshCw className="w-4 h-4" /> }
  ];

  const sections = [
    {
      id: 1,
      number: "1",
      title: "About Buygrade Realty",
      description: "Buygrade Realty is a technology-driven real estate platform that leverages artificial intelligence to assist users in buying, selling, and renting properties efficiently and securely."
    },
    {
      id: 2,
      number: "2",
      title: "Information We Collect",
      description: "We may collect the following information from users:",
      list: [
        "Full name",
        "Email address",
        "Contact number",
        "Property preferences and search history",
        "Location and IP address",
        "Device information and browser type",
        "Interactions with our website and mobile app"
      ]
    },
    {
      id: 3,
      number: "3",
      title: "How We Use Your Information",
      description: "We use your data to:",
      list: [
        "Provide tailored property recommendations",
        "Contact you about your inquiries and interest",
        "Improve our services based on the behavior of our platform",
        "Provide reviews about listings, offers, or changes in service",
        "Send promotional content (with your consent)",
        "Analyze user behavior for improving our services"
      ]
    },
    {
      id: 4,
      number: "4",
      title: "Use of AI Technologies",
      description: "Our AI systems use anonymized and collective data to enhance property matching, predict trends, and personalize user experiences. AI tools operate within strict security protocols to protect user privacy."
    },
    {
      id: 5,
      number: "5",
      title: "Sharing of Information",
      description: "Buygrade Realty does not sell your personal information. We may share data only:",
      list: [
        "Third-party service providers (hosting, analytics, marketing)",
        "Legal authorities (if required by law)",
        "Business partners assisting in fulfilling user services"
      ]
    },
    {
      id: 6,
      number: "6",
      title: "Data Security",
      description: "We take modern encryption methods, firewalls, and access controls to protect your data. However, no method of online storage and digital transmission is 100% secure. Please note: handle accounts and passwords securely and responsibly."
    },
    {
      id: 7,
      number: "7",
      title: "Cookies and Tracking",
      description: "We use cookies and similar technologies to improve site functionality and user experience. You may control cookies through your browser settings."
    },
    {
      id: 8,
      number: "8",
      title: "User Rights",
      description: "You have the right to:",
      list: [
        "Access and update your data",
        "Request corrections or deletions",
        "Withdraw consent at any time"
      ],
      contactInfo: "To exercise these rights, contact us at: support@buygrade.in"
    },
    {
      id: 9,
      number: "9",
      title: "Data Retention",
      description: "We retain user data only as long as necessary to fulfill the purposes outlined in this policy or as required by law."
    },
    {
      id: 10,
      number: "10",
      title: "Children's Privacy",
      description: "Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors."
    },
    {
      id: 11,
      number: "11",
      title: "Policy Updates",
      description: "We may update this Privacy Policy periodically. All updates will be reflected on this page with the revision date."
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "support@buygrade.in"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "Phone",
      value: "+91 999 999 9999"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: "Website",
      value: "www.buygrade.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            At Buygrade Realty, we are committed to protecting your privacy. With over 10 years of
            experience in the real estate domain, we understand the importance of maintaining the
            confidentiality of your data. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-sm opacity-90">
            📅 Last Updated: October 4, 2025
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Table of Contents</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#section-${item.id}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="text-blue-600 group-hover:text-blue-700">
                  {item.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-semibold">{item.id}.</span>
                  <span className="text-gray-700 group-hover:text-blue-700">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {section.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contactInfo && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-gray-700">{section.contactInfo}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center mb-8 opacity-90">
            If you have any questions about this Privacy Policy, please contact:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3 opacity-90">
                  {method.icon}
                </div>
                <div className="font-semibold mb-1">{method.label}</div>
                <div className="text-sm opacity-90">{method.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
      
      </div>

      {/* Footer Info */}
      
      
    </div>
  );
}