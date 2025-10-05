import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'

// Optimize images with proper dimensions and formats
const featuredProperties = [
  { 
    title: "₹1.25Cr", 
    location: "DLF Phase 1, Gurgaon, HR", 
    price: "₹1.25Cr", 
    beds: "4", 
    baths: "3", 
    area: "2400", 
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Sale",
    featured: true
  },
  { 
    title: "₹80,000/mo", 
    location: "Marine Drive, Mumbai, MH", 
    price: "₹80,000/mo", 
    beds: "2", 
    baths: "2", 
    area: "1200", 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Rent",
    featured: false
  },
  { 
    title: "₹15,000/mo", 
    location: "Patia, Bhubaneswar, OD", 
    price: "₹15,000/mo", 
    beds: "1", 
    baths: "1", 
    area: "450", 
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Rent",
    featured: false
  },
  { 
    title: "₹75L", 
    location: "Koramangala, Bangalore, KA", 
    price: "₹75L", 
    beds: "2", 
    baths: "2", 
    area: "1100", 
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Sale",
    featured: true
  },
  { 
    title: "₹2.1Cr", 
    location: "Banjara Hills, Hyderabad, TG", 
    price: "₹2.1Cr", 
    beds: "5", 
    baths: "4", 
    area: "3200", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Sale",
    featured: true
  },
  { 
    title: "₹1.2L/mo", 
    location: "Connaught Place, Delhi, DL", 
    price: "₹1.2L/mo", 
    beds: "3", 
    baths: "2", 
    area: "1800", 
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format&q=85&f=webp",
    status: "For Rent",
    featured: false
  },
]

export default function Home() {

  return (
    <>
      <HeroSection />
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Welcome to Buygrab Realty – Your AI-Powered Real Estate Partner
          </h2>
          <p className="text-center text-black text-lg max-w-4xl mx-auto leading-relaxed">
            With over 10 years of expertise in the Indian real estate market, Buygrab Realty has successfully delivered 170,000+ high-quality real estate leads across various segments. Whether you're a buyer, seller, or investor, we offer AI-driven property solutions that simplify your journey and connect you with the right opportunities.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Property Investment */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Property Investment Near Jewar Airport</h3>
              <p className="text-black leading-relaxed">
                Looking to buy property near Jewar Airport? Our smart search and verified listings help you find prime investment plots, luxury homes, and newly launched developments in this high-growth region.
              </p>
            </div>

            {/* Houses & Land */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Houses & Land for Sale</h3>
              <p className="text-black leading-relaxed">
                Explore options for houses for sale, houses for rent near me, and farm house near me in the most sought-after neighborhoods. Buygrab Realty connects you with genuine sellers and rental providers across India, offering secure transactions and expert guidance.
              </p>
            </div>

            {/* Rental Properties */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Rental Properties</h3>
              <p className="text-black leading-relaxed">
                Need a 1 BHK flat for rent near me or 2 BHK flats near me? Our platform offers thousands of verified rental listings, with filters for location, budget, and amenities. From affordable housing to luxury apartments, we make it easy to find the perfect home for your lifestyle.
              </p>
            </div>

            {/* Land Investment */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Land Investment Opportunities</h3>
              <p className="text-black leading-relaxed">
                Interested in investing in land? Search for land for sale near me, buy plots near Jewar Airport, or land for sale near Jewar Airport. Our AI-powered tools ensure you get accurate pricing, legal checks, and location analytics to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">More Information</h2>
          <p className="text-center text-black text-lg max-w-5xl mx-auto leading-relaxed mb-12">
            We also cater to customers searching for studio apartments near me, property to buy near me, property for sale near me, and other properties near me. With real-time updates and personalized alerts, you'll never miss an opportunity.
          </p>
          <p className="text-center text-black text-lg max-w-4xl mx-auto leading-relaxed">
            Whether you're a first-time homebuyer or a seasoned investor, Buygrab Realty is your trusted partner. Let us help you discover the best real estate opportunities powered by technology, data, and 10+ years of market knowledge.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black font-medium">Verified Listings</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black font-medium">AI-Matched Property Suggestions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black font-medium">Trusted by 57,000+ Clients</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-black font-medium">Serving PAN India</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Find your next home or investment today — only at Buygrab Realty!
          </h3>
        </div>
      </section>

      {/* Newsletter Secti */}
     
    </>
  )
}
