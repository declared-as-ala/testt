'use client'
import React, { useState } from 'react';
import { Heart, Share2, Phone, Bed, Bath, Square, MapPin, Building2, ChevronRight, Star } from 'lucide-react';

const PropertyCard = ({ property }:any) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex gap-3 p-3">
        {/* Property Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-32 h-32 object-cover rounded"
          />
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:scale-110 transition-transform"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* Property Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 leading-tight">
              {property.title}
            </h3>
            <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          <div className="flex items-center gap-3 mb-2 text-xs text-gray-700">
            <div className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-3.5 h-3.5" />
              <span>{property.area} sq.ft</span>
            </div>
          </div>

          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-lg font-bold text-gray-900">₹ {property.price}</span>
            {property.emi && (
              <span className="text-xs text-gray-500">EMI starts at ₹{property.emi}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded hover:bg-blue-700 transition-colors">
              Contact Owner
            </button>
            {property.featured && (
              <span className="text-xs text-green-600 font-medium">Featured</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('buy');
  
  const properties = [
    {
      id: 1,
      title: "2 BHK Apartment for Sale in Andheri West",
      location: "Andheri West, Mumbai",
      price: "1.85 Cr",
      emi: "95,000",
      beds: 2,
      baths: 2,
      area: 950,
      featured: true,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "3 BHK Flat in Bandra East with Sea View",
      location: "Bandra East, Mumbai",
      price: "3.2 Cr",
      emi: "1,65,000",
      beds: 3,
      baths: 3,
      area: 1400,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Spacious 2 BHK in Powai Lake View",
      location: "Powai, Mumbai",
      price: "1.65 Cr",
      emi: "85,000",
      beds: 2,
      baths: 2,
      area: 1100,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      title: "1 BHK Apartment Ready to Move",
      location: "Thane West, Mumbai",
      price: "68 Lac",
      emi: "35,000",
      beds: 1,
      baths: 1,
      area: 580,
      featured: true,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Luxury 4 BHK Penthouse in Worli",
      location: "Worli, Mumbai",
      price: "8.5 Cr",
      emi: "4,40,000",
      beds: 4,
      baths: 4,
      area: 3200,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      title: "2 BHK Apartment in Borivali East",
      location: "Borivali East, Mumbai",
      price: "1.15 Cr",
      emi: "59,000",
      beds: 2,
      baths: 2,
      area: 850,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=300&fit=crop"
    },
    {
      id: 7,
      title: "3 BHK Premium Flat in Goregaon",
      location: "Goregaon West, Mumbai",
      price: "2.1 Cr",
      emi: "1,08,000",
      beds: 3,
      baths: 2,
      area: 1250,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop"
    },
    {
      id: 8,
      title: "2 BHK Flat with Parking in Kandivali",
      location: "Kandivali East, Mumbai",
      price: "95 Lac",
      emi: "49,000",
      beds: 2,
      baths: 2,
      area: 780,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=300&h=300&fit=crop"
    },
    {
      id: 9,
      title: "1 BHK Compact Apartment in Malad",
      location: "Malad West, Mumbai",
      price: "72 Lac",
      emi: "37,000",
      beds: 1,
      baths: 1,
      area: 620,
      featured: true,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=300&fit=crop"
    },
    {
      id: 10,
      title: "3 BHK Sea Facing Apartment",
      location: "Marine Drive, Mumbai",
      price: "6.5 Cr",
      emi: "3,35,000",
      beds: 3,
      baths: 3,
      area: 2100,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&h=300&fit=crop"
    },
    {
      id: 11,
      title: "2 BHK Apartment Near Metro Station",
      location: "Ghatkopar East, Mumbai",
      price: "1.35 Cr",
      emi: "70,000",
      beds: 2,
      baths: 2,
      area: 920,
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=300&h=300&fit=crop"
    },
    {
      id: 12,
      title: "Studio Apartment in Lower Parel",
      location: "Lower Parel, Mumbai",
      price: "1.1 Cr",
      emi: "57,000",
      beds: 1,
      baths: 1,
      area: 480,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=300&h=300&fit=crop"
    },
    {
      id: 13,
      title: "3 BHK Builder Floor in Chembur",
      location: "Chembur, Mumbai",
      price: "2.4 Cr",
      emi: "1,24,000",
      beds: 3,
      baths: 3,
      area: 1450,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=300&fit=crop"
    },
    {
      id: 14,
      title: "2 BHK Modern Flat in Mulund",
      location: "Mulund West, Mumbai",
      price: "1.45 Cr",
      emi: "75,000",
      beds: 2,
      baths: 2,
      area: 980,
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=300&h=300&fit=crop"
    },
    {
      id: 15,
      title: "4 BHK Villa in Juhu",
      location: "Juhu, Mumbai",
      price: "12 Cr",
      emi: "6,20,000",
      beds: 4,
      baths: 5,
      area: 4500,
      featured: true,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=300&fit=crop"
    },
    {
      id: 16,
      title: "2 BHK Apartment with Garden View",
      location: "Vikhroli East, Mumbai",
      price: "1.25 Cr",
      emi: "65,000",
      beds: 2,
      baths: 2,
      area: 890,
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=300&h=300&fit=crop"
    },
    {
      id: 17,
      title: "3 BHK Premium in Santacruz",
      location: "Santacruz East, Mumbai",
      price: "3.8 Cr",
      emi: "1,96,000",
      beds: 3,
      baths: 3,
      area: 1650,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop"
    },
    {
      id: 18,
      title: "1 BHK Affordable Housing",
      location: "Dahisar East, Mumbai",
      price: "58 Lac",
      emi: "30,000",
      beds: 1,
      baths: 1,
      area: 550,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop"
    },
    {
      id: 19,
      title: "2 BHK Flat in Wadala",
      location: "Wadala, Mumbai",
      price: "1.75 Cr",
      emi: "90,000",
      beds: 2,
      baths: 2,
      area: 1050,
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=300&h=300&fit=crop"
    },
    {
      id: 20,
      title: "3 BHK Duplex in Khar West",
      location: "Khar West, Mumbai",
      price: "5.2 Cr",
      emi: "2,68,000",
      beds: 3,
      baths: 3,
      area: 2200,
      featured: true,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&h=300&fit=crop"
    },
    {
      id: 21,
      title: "2 BHK Ready Possession Flat",
      location: "Mira Road, Mumbai",
      price: "85 Lac",
      emi: "44,000",
      beds: 2,
      baths: 2,
      area: 820,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=300&h=300&fit=crop"
    },
    {
      id: 22,
      title: "4 BHK Luxury Apartment",
      location: "Prabhadevi, Mumbai",
      price: "7.8 Cr",
      emi: "4,03,000",
      beds: 4,
      baths: 4,
      area: 2800,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=300&fit=crop"
    },
    {
      id: 23,
      title: "1 BHK Near Railway Station",
      location: "Nallasopara, Mumbai",
      price: "42 Lac",
      emi: "22,000",
      beds: 1,
      baths: 1,
      area: 480,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=300&fit=crop"
    },
    {
      id: 24,
      title: "3 BHK Gated Community Flat",
      location: "Kharghar, Navi Mumbai",
      price: "1.55 Cr",
      emi: "80,000",
      beds: 3,
      baths: 2,
      area: 1350,
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=300&h=300&fit=crop"
    },
    {
      id: 25,
      title: "2 BHK Vastu Compliant Home",
      location: "Vashi, Navi Mumbai",
      price: "1.32 Cr",
      emi: "68,000",
      beds: 2,
      baths: 2,
      area: 950,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=300&fit=crop"
    },
    {
      id: 26,
      title: "3 BHK Corner Flat with Terrace",
      location: "Airoli, Navi Mumbai",
      price: "1.68 Cr",
      emi: "87,000",
      beds: 3,
      baths: 2,
      area: 1280,
      featured: true,
      image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=300&h=300&fit=crop"
    },
    {
      id: 27,
      title: "2 BHK RERA Approved Project",
      location: "Panvel, Navi Mumbai",
      price: "78 Lac",
      emi: "40,000",
      beds: 2,
      baths: 2,
      area: 780,
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=300&h=300&fit=crop"
    },
    {
      id: 28,
      title: "1 BHK Modern Design Apartment",
      location: "Kopar Khairane, Navi Mumbai",
      price: "62 Lac",
      emi: "32,000",
      beds: 1,
      baths: 1,
      area: 600,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=300&h=300&fit=crop"
    },
    {
      id: 29,
      title: "4 BHK Independent House",
      location: "Nerul, Navi Mumbai",
      price: "3.5 Cr",
      emi: "1,81,000",
      beds: 4,
      baths: 3,
      area: 2400,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=300&fit=crop"
    },
    {
      id: 30,
      title: "2 BHK Smart Home Features",
      location: "Seawoods, Navi Mumbai",
      price: "1.42 Cr",
      emi: "73,000",
      beds: 2,
      baths: 2,
      area: 1020,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-blue-600 cursor-pointer">Property for Sale</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Mumbai</span>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Search Bar with Filters */}
          <div className="mb-4">
            <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg bg-white">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <div className="flex items-center gap-2 flex-1 flex-wrap">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-purple-700 text-white text-sm font-medium rounded-full hover:bg-purple-800">
                  Mumbai
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
                  +1 more
                </button>
                
                <button className="px-3 py-1.5 border border-purple-700 text-purple-700 text-sm font-medium rounded-full hover:bg-purple-50">
                  + Add
                </button>
              </div>
            </div>
          </div>

          {/* Filter Buttons Row */}
          <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 whitespace-nowrap">
              Sale Type
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 whitespace-nowrap">
              Construction St...
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 whitespace-nowrap">
              Verified
              <span className="flex items-center justify-center w-5 h-5 bg-gray-400 text-white text-xs rounded-full">4</span>
            </button>
            
            <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 whitespace-nowrap">
              Project
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-red-200 bg-red-50 text-gray-700 text-sm font-medium rounded hover:border-red-300 whitespace-nowrap">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Expert Pro Agents
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 whitespace-nowrap">
              More Filters
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Properties for Sale in Mumbai
          </h1>
          <p className="text-gray-600 mb-4">
            {properties.length}+ results | Residential apartments, flats & more
          </p>
          
          {/* Research by Place Section */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Research by Place</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Andheri West
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Bandra
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Powai
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Thane
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Worli
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Borivali
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Goregaon
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Kandivali
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Malad
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Marine Drive
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Ghatkopar
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Lower Parel
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Chembur
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Mulund
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Juhu
              </button>
              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-blue-600 hover:text-blue-600 transition-colors">
                Navi Mumbai
              </button>
            </div>
          </div>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
              1 BHK
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
              2 BHK
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
              3 BHK
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
              Ready to Move
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
              Under Construction
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
            Load More Properties
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Buy Property with Confidence | BuyGrab Realty
          </h2>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to BuyGrab Realty — your trusted partner for finding verified residential, commercial, and investment properties across India. Whether you're looking for your first home, a premium apartment, or a profitable land investment, we make your property search simple, smart, and secure.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              🏘️ Explore Our Property Categories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🏠 Residential Properties</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Luxury Apartments & Flats</li>
                  <li>• Independent Houses & Villas</li>
                  <li>• Studio Apartments & Builder Floors</li>
                  <li>• Gated Community Homes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🏢 Commercial Spaces</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Office Units</li>
                  <li>• Retail Outlets</li>
                  <li>• Co-working Properties</li>
                  <li>• Showrooms & Industrial Units</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🌾 Plots & Land for Sale</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Residential Plots</li>
                  <li>• Farm Land</li>
                  <li>• Industrial & Institutional Land</li>
                  <li>• Title Verification Support</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Why Buy with BuyGrab.in?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Verified Listings</h4>
                  <p className="text-sm text-gray-600">100% verified property data – no fake or outdated posts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Market Insights</h4>
                  <p className="text-sm text-gray-600">Real-time data on prices, demand trends, and investment zones</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">AI-Driven Property Match</h4>
                  <p className="text-sm text-gray-600">Intelligent recommendations based on your preferences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Expert Support</h4>
                  <p className="text-sm text-gray-600">Our property advisors are available for consultation anytime</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              🗺️ Top Cities to Buy Property
            </h3>
            <p className="mb-3">
              Explore opportunities in India's fastest-growing real estate hubs:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <li>• Delhi NCR</li>
              <li>• Mumbai & Pune</li>
              <li>• Bangalore & Hyderabad</li>
              <li>• Chennai & Coimbatore</li>
              <li>• Ahmedabad & Jaipur</li>
              <li>• Kochi & Lucknow</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;