import PropertyCard from '@/components/PropertyCard'

export default function Rent() {
  const properties = [
    { title: "2 BHK Apartment", location: "Pune, Maharashtra", price: "₹25,000/mo", beds: "2", baths: "2", area: "1200", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600" },
    { title: "Studio Apartment", location: "Hyderabad, Telangana", price: "₹18,000/mo", beds: "1", baths: "1", area: "600", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" },
    { title: "3 BHK House", location: "Chennai, Tamil Nadu", price: "₹35,000/mo", beds: "3", baths: "2", area: "1600", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Rent Your Perfect Home</h1>
          <p className="text-xl">Discover rental properties that fit your lifestyle</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Search Rental Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="Location" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>BHK Type</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3+ BHK</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>Budget</option>
                <option>Under ₹15,000</option>
                <option>₹15K - ₹30K</option>
                <option>Above ₹30K</option>
              </select>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition">
                Search
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Available Rental Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Renting Made Easy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Flexible Leases</h3>
              <p className="text-gray-600">Choose from short-term and long-term rental options that suit your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Verified Owners</h3>
              <p className="text-gray-600">All property owners are verified to ensure secure and transparent transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-600">Schedule property visits and book your home with just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
