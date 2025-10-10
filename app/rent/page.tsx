'use client'
import React, { useState } from 'react';
import { Search, MapPin, Heart, Share2, Phone, Camera, Video, ChevronRight, Bed, Bath, SlidersHorizontal, Building2, Check, Home, Briefcase, MapPinned } from 'lucide-react';

const RentPropertyPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: 1,
      title: "3 BHK Apartment",
      rent: "₹ 85,000/month",
      deposit: "₹ 2,50,000",
      address: "Bandra West, Mumbai",
      area: "1000 sq.ft",
      carpet: "900 sq.ft",
      availability: "Immediate",
      floor: "10 out of 15 Floors",
      facing: "East",
      furnished: "Fully Furnished",
      parking: "2 Covered",
      beds: 3,
      baths: 3,
      balcony: 2,
      images: 12,
      videos: 1,
      featured: true,
      verified: true,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      postedBy: "Owner",
      postedDate: "2 days ago",
      amenities: ["Gym", "Swimming Pool", "Power Backup"]
    },
    {
      id: 2,
      title: "2 BHK Apartment",
      rent: "₹ 45,000/month",
      deposit: "₹ 1,35,000",
      address: "Andheri West, Mumbai",
      area: "750 sq.ft",
      carpet: "675 sq.ft",
      availability: "From 15 Nov",
      floor: "5 out of 12 Floors",
      facing: "North",
      furnished: "Semi-Furnished",
      parking: "1 Covered",
      beds: 2,
      baths: 2,
      balcony: 1,
      images: 8,
      videos: 0,
      featured: false,
      verified: true,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop",
      postedBy: "Agent",
      postedDate: "1 week ago",
      amenities: ["Security", "Lift"]
    },
    {
      id: 3,
      title: "4 BHK Luxury Apartment",
      rent: "₹ 1,50,000/month",
      deposit: "₹ 4,50,000",
      address: "Worli, Mumbai",
      area: "1760 sq.ft",
      carpet: "1584 sq.ft",
      availability: "Immediate",
      floor: "18 out of 25 Floors",
      facing: "Sea Facing",
      furnished: "Fully Furnished",
      parking: "3 Covered",
      beds: 4,
      baths: 4,
      balcony: 3,
      images: 20,
      videos: 2,
      featured: true,
      verified: true,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop",
      postedBy: "Owner",
      postedDate: "3 days ago",
      amenities: ["Gym", "Pool", "Club House", "Security"]
    },
    {
      id: 4,
      title: "1 BHK Apartment",
      rent: "₹ 28,000/month",
      deposit: "₹ 84,000",
      address: "Malad West, Mumbai",
      area: "550 sq.ft",
      carpet: "495 sq.ft",
      availability: "From 1 Dec",
      floor: "3 out of 8 Floors",
      facing: "West",
      furnished: "Unfurnished",
      parking: "1 Open",
      beds: 1,
      baths: 1,
      balcony: 1,
      images: 6,
      videos: 0,
      featured: false,
      verified: false,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop",
      postedBy: "Owner",
      postedDate: "5 days ago",
      amenities: ["Lift", "Power Backup"]
    },
    {
      id: 5,
      title: "3 BHK Premium Flat",
      rent: "₹ 95,000/month",
      deposit: "₹ 2,85,000",
      address: "Powai, Mumbai",
      area: "1100 sq.ft",
      carpet: "990 sq.ft",
      availability: "Immediate",
      floor: "12 out of 20 Floors",
      facing: "Lake View",
      furnished: "Fully Furnished",
      parking: "2 Covered",
      beds: 3,
      baths: 3,
      balcony: 2,
      images: 15,
      videos: 1,
      featured: true,
      verified: true,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop",
      postedBy: "Owner",
      postedDate: "1 day ago",
      amenities: ["Gym", "Pool", "Garden", "Security"]
    },
    {
      id: 6,
      title: "Commercial Office Space",
      rent: "₹ 2,50,000/month",
      deposit: "₹ 7,50,000",
      address: "Lower Parel, Mumbai",
      area: "3000 sq.ft",
      carpet: "2700 sq.ft",
      availability: "Immediate",
      floor: "8 out of 12 Floors",
      facing: "North",
      furnished: "Fully Furnished",
      parking: "10 Reserved",
      beds: 0,
      baths: 3,
      balcony: 0,
      images: 18,
      videos: 1,
      featured: true,
      verified: true,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      postedBy: "Builder",
      postedDate: "4 days ago",
      amenities: ["Central AC", "Cafeteria", "Conference Room"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-blue-600 cursor-pointer">Rent</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Properties for Rent in Mumbai</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Properties for Rent | BuyGrab.in</h1>
          <p className="text-lg text-purple-100 mb-6 max-w-3xl">
            Find your ideal rental home, commercial space, or office with BuyGrab.in. We connect tenants and property owners through verified listings, transparent communication, and expert guidance across India's most desirable locations.
          </p>
        </div>
      </div>

      {/* Quick Category Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Residential Rent</h3>
            </div>
            <p className="text-sm text-gray-600">Apartments, Flats, Villas & Studio Homes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Commercial Rent</h3>
            </div>
            <p className="text-sm text-gray-600">Offices, Shops, Warehouses & Showrooms</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MapPinned className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Land for Lease</h3>
            </div>
            <p className="text-sm text-gray-600">Industrial & Agricultural Land</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-4">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear All</button>
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Rent Category</h3>
                <div className="space-y-2">
                  {['Residential', 'Commercial', 'Land/Plot'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="category" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Monthly Rent</h3>
                <div className="flex gap-2 mb-3">
                  <input type="text" placeholder="Min" className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded" />
                  <input type="text" placeholder="Max" className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded" />
                </div>
                <input type="range" min="0" max="100" className="w-full" />
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3">BHK Type</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'].map((bhk) => (
                    <button key={bhk} className="px-3 py-2 text-sm border border-gray-300 rounded hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Furnishing Status</h3>
                <div className="space-y-2">
                  {['Fully Furnished', 'Semi-Furnished', 'Unfurnished'].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="text-sm text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Availability</h3>
                <div className="space-y-2">
                  {['Immediate', 'Within 15 Days', 'Within 1 Month', 'After 1 Month'].map((avail) => (
                    <label key={avail} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="text-sm text-gray-700">{avail}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Amenities</h3>
                <div className="space-y-2">
                  {['Car Parking', 'Gym', 'Swimming Pool', 'Security', 'Power Backup', 'Lift'].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Property Listings */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-sm text-gray-600">{properties.length} Properties Available for Rent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                <select className="px-3 py-2 text-sm border border-gray-300 rounded outline-none bg-white">
                  <option>Relevance</option>
                  <option>Rent: Low to High</option>
                  <option>Rent: High to Low</option>
                  <option>Newest First</option>
                  <option>Area: Large to Small</option>
                </select>
              </div>
            </div>

            {/* Property Cards */}
            <div className="space-y-4">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Property Image */}
                    <div className="relative md:w-72 flex-shrink-0">
                      <img src={property.image} alt={property.title} className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                      {property.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                          FEATURED
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 flex gap-2">
                        <div className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Camera className="w-3 h-3" />
                          {property.images}
                        </div>
                        {property.videos > 0 && (
                          <div className="bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            {property.videos}
                          </div>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors">
                          <Heart className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                            {property.verified && (
                              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.address}
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-3 border-t border-b border-gray-200 mb-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Carpet Area</div>
                          <div className="text-sm font-semibold text-gray-900">{property.carpet}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Availability</div>
                          <div className="text-sm font-semibold text-gray-900">{property.availability}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Floor</div>
                          <div className="text-sm font-semibold text-gray-900">{property.floor}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Furnishing</div>
                          <div className="text-sm font-semibold text-gray-900">{property.furnished}</div>
                        </div>
                      </div>

                      {property.beds > 0 ? (
                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span>{property.beds} Beds</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span>{property.baths} Baths</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span>{property.balcony} Balcony</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>Commercial Space</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span>{property.baths} Washrooms</span>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-3">
                        {property.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{property.rent}</div>
                          <div className="text-sm text-gray-500">Deposit: {property.deposit}</div>
                          <div className="text-xs text-gray-500 mt-1">Posted by {property.postedBy} • {property.postedDate}</div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-sm transition-colors">
                            Contact Owner
                          </button>
                          <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded font-semibold text-sm transition-colors flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">8</button>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Rent with BuyGrab Realty?</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Listings</h3>
                    <p className="text-sm text-gray-600">All properties are screened for authenticity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Transparent Rent Terms</h3>
                    <p className="text-sm text-gray-600">Clear lease details and zero hidden costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Options</h3>
                    <p className="text-sm text-gray-600">Choose short or long-term rental agreements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Support</h3>
                    <p className="text-sm text-gray-600">Our team assists with documentation and negotiation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Renting Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Search & Shortlist</h3>
                    <p className="text-sm text-gray-600">Filter by location, budget, and property type.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Connect with Owner</h3>
                    <p className="text-sm text-gray-600">Contact verified property owners or agents directly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit & Verify</h3>
                    <p className="text-sm text-gray-600">Schedule a property visit or virtual tour.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Finalize Lease</h3>
                    <p className="text-sm text-gray-600">Sign the agreement with transparency and legal clarity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Find Your Perfect Rental Property</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you're searching for your next home or a workspace that fits your brand, BuyGrab.in makes renting simple and secure.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-sm transition-colors">
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentPropertyPage;