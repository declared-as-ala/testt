'use client'
import { useState } from 'react'

export default function SearchBar() {
  const [searchType, setSearchType] = useState('buy')

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 -mt-16 relative z-20 max-w-4xl mx-auto">
      <div className="flex space-x-4 mb-4" role="tablist" aria-label="Search type">
        <button 
          id="buy-tab"
          onClick={() => setSearchType('buy')}
          className={`px-6 py-2 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${searchType === 'buy' ? 'bg-primary text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
          role="tab"
          aria-selected={searchType === 'buy'}
          aria-controls="search-panel"
          aria-label="Search properties to buy"
        >
          Buy
        </button>
        <button 
          id="rent-tab"
          onClick={() => setSearchType('rent')}
          className={`px-6 py-2 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${searchType === 'rent' ? 'bg-primary text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
          role="tab"
          aria-selected={searchType === 'rent'}
          aria-controls="search-panel"
          aria-label="Search properties to rent"
        >
          Rent
        </button>
        <button 
          id="sell-tab"
          onClick={() => setSearchType('sell')}
          className={`px-6 py-2 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${searchType === 'sell' ? 'bg-primary text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
          role="tab"
          aria-selected={searchType === 'sell'}
          aria-controls="search-panel"
          aria-label="List property for sale"
        >
          Sell
        </button>
      </div>
      
      <div 
        id="search-panel" 
        role="tabpanel" 
        aria-labelledby={`${searchType}-tab`}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input 
          type="text" 
          placeholder="Location" 
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          aria-label="Location"
        />
        <select 
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          aria-label="Property Type"
        >
          <option>Property Type</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Land</option>
        </select>
        <button 
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Search ${searchType} properties`}
        >
          Search
        </button>
      </div>
    </div>
  )
}