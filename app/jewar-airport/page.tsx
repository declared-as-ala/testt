import PropertyCard from '@/components/PropertyCard'

export default function JewarAirport() {
  const properties = [
    { title: "Premium Plot", location: "Near Jewar Airport", price: "₹45 Lakh", beds: "-", baths: "-", area: "1500", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600" },
    { title: "Luxury Villa Plot", location: "Jewar Development Zone", price: "₹75 Lakh", beds: "-", baths: "-", area: "2500", image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600" },
    { title: "Commercial Land", location: "Jewar Airport Road", price: "₹1.2 Cr", beds: "-", baths: "-", area: "5000", image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?w=600" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Property Investment Near Jewar Airport</h1>
          <p className="text-xl">Invest in India's upcoming aviation hub - High ROI guaranteed</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Invest Near Jewar Airport?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Noida International Airport (Jewar Airport) is set to be one of Asia's largest airports, creating unprecedented real estate opportunities. The region is witnessing rapid infrastructure development, making it a prime location for property investment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary">Expected ROI</h3>
                <p className="text-3xl font-bold">40-60%</p>
                <p className="text-gray-600">in 3-5 years</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary">Airport Distance</h3>
                <p className="text-3xl font-bold">2-10 km</p>
                <p className="text-gray-600">from our properties</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-primary">Development Status</h3>
                <p className="text-3xl font-bold">Phase 1</p>
                <p className="text-gray-600">opens in 2024</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Featured Properties Near Jewar Airport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">✓ Airport Construction</h3>
              <p className="text-gray-600">Phase 1 under construction with 2024 completion target</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">✓ Expressway Connectivity</h3>
              <p className="text-gray-600">Yamuna Expressway and proposed metro connectivity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">✓ Commercial Hubs</h3>
              <p className="text-gray-600">Multiple IT parks and business districts planned</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">✓ Residential Projects</h3>
              <p className="text-gray-600">Luxury and affordable housing developments underway</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}