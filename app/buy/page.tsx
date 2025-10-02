import PropertyCard from '@/components/PropertyCard'

export default function Buy() {
  const properties = [
    { title: "Luxury Villa", location: "Mumbai, Maharashtra", price: "₹2.5 Cr", beds: "4", baths: "3", area: "3500", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" },
    { title: "Modern Apartment", location: "Bangalore, Karnataka", price: "₹85 Lakh", beds: "3", baths: "2", area: "1800", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600" },
    { title: "Penthouse Suite", location: "Delhi NCR", price: "₹3.2 Cr", beds: "5", baths: "4", area: "4200", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Buy Your Dream Property</h1>
          <p className="text-xl">Explore verified properties for sale across India</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Find Properties to Buy</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="Location" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>Budget</option>
                <option>Under ₹50 Lakh</option>
                <option>₹50L - ₹1 Cr</option>
                <option>Above ₹1 Cr</option>
              </select>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
                Search
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Featured Properties for Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Buy with BuyGrab?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Legal Verification</h3>
              <p className="text-gray-600">Every property undergoes thorough legal checks to ensure clear titles and documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">Our market analysis ensures you get the most competitive prices in the market.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-gray-600">From property search to registration, we guide you through every step.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
