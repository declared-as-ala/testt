
import Image from 'next/image'

interface PropertyCardProps {
  title: string
  location: string
  price: string
  beds: string
  baths: string
  area: string
  image: string
  status?: string
  featured?: boolean
}

export default function PropertyCard({ title, location, price, beds, baths, area, image, status = "For Sale", featured = false }: PropertyCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 bg-gray-200 overflow-hidden group">
        <Image
          src={image.replace(/w=\d+/, 'w=395').replace(/h=\d+/, 'h=296') + '&fit=crop'}
          alt={`${title} - ${location} property for ${status.toLowerCase()}`}
          width={395}
          height={296}
          loading="lazy"
          style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
        />
        <div className="absolute top-4 left-4">
          <span 
            className={`${status === 'For Sale' ? 'bg-green-800' : 'bg-blue-800'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
            aria-label={`Property status: ${status}`}
          >
            {status}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span 
              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              aria-label="Featured property ala"
            >
              Featured
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>8</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-black">{price}</h3>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true"></div>
            <span className="text-sm text-green-800 font-medium">Available</span>
          </div>
        </div>
        
        <div className="flex items-center text-black mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between text-black text-sm mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="font-medium">{area} sq ft</span>
          </div>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`View details for ${title} property in ${location}`}
        >
          View Details
        </button>
      </div>
    </article>
  )
}