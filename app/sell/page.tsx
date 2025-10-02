export default function Sell() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sell Your Property Fast</h1>
          <p className="text-xl">Get the best price with our AI-powered marketing</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">List Your Property</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Property Title" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Land</option>
                </select>
              </div>
              <input type="text" placeholder="Location" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="text" placeholder="Price" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="text" placeholder="Area (sqft)" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="text" placeholder="Bedrooms" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              </div>
              <textarea rows={4} placeholder="Property Description" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"></textarea>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition text-lg">
                Submit Property
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">List for Free</h3>
              <p className="text-gray-600">No upfront costs. Pay only when you sell.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">AI Marketing</h3>
              <p className="text-gray-600">Your property reaches the right buyers automatically.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated team to handle negotiations and paperwork.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Quick Sale</h3>
              <p className="text-gray-600">Average sale time of just 7 days!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}