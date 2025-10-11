import PropertyCard from '@/components/PropertyCard'

export default function LandInvestment() {
  const lands = [
    { title: "Agricultural Land", location: "Outskirts Delhi NCR", price: "₹25 Lakh", beds: "-", baths: "-", area: "5000", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600" },
    { title: "Commercial Plot", location: "Noida Extension", price: "₹80 Lakh", beds: "-", baths: "-", area: "2000", image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600" },
    { title: "Farmhouse Plot", location: "Gurgaon Road", price: "₹1.5 Cr", beds: "-", baths: "-", area: "10000", image: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?w=600" },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Land Investment Opportunities</h1>
          <p className="text-xl">Smart land investments with verified titles and clear documentation</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Find Land for Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="Location" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>Land Type</option>
                <option>Agricultural</option>
                <option>Commercial</option>
                <option>Residential Plot</option>
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

          <h2 className="text-3xl font-bold mb-8">Available Land Parcels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lands.map((land, index) => (
              <PropertyCard key={index} {...land} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Land?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">High Appreciation</h3>
              <p className="text-gray-600">Land values typically appreciate faster than other real estate investments.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
              <p className="text-gray-600">Unlike buildings, land requires minimal upkeep and maintenance costs.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Future Development</h3>
              <p className="text-gray-600">Build your dream project or hold for long-term capital gains.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Due Diligence Services</h2>
            <p className="text-xl mb-6">We provide comprehensive legal checks, title verification, and site surveys for all land purchases.</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}