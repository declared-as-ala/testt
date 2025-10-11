export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "BuyGrab helped me find my dream apartment in just 7 days! The AI-powered search was incredibly accurate and saved me so much time.",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1a5cff&color=fff"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Selling my property was hassle-free thanks to BuyGrab. They handled everything from listing to closing, and I got a great price!",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=1a5cff&color=fff"
    },
    {
      name: "Amit Patel",
      location: "Delhi",
      rating: 5,
      text: "The team at BuyGrab provided excellent guidance throughout my land purchase near Jewar Airport. Very professional service!",
      image: "https://ui-avatars.com/api/?name=Amit+Patel&background=1a5cff&color=fff"
    },
    {
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "I was impressed by the AI recommendations. They understood exactly what I was looking for and showed me perfect matches.",
      image: "https://ui-avatars.com/api/?name=Sunita+Reddy&background=1a5cff&color=fff"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      text: "Best real estate platform I've used! The verification process gave me confidence, and the entire transaction was transparent.",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=1a5cff&color=fff"
    },
    {
      name: "Meera Nair",
      location: "Chennai",
      rating: 5,
      text: "Found the perfect rental property within my budget. The search filters and AI insights made the process so easy!",
      image: "https://ui-avatars.com/api/?name=Meera+Nair&background=1a5cff&color=fff"
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl">Hear what our satisfied clients have to say</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-bold">4.9/5 Average Rating from 1,200+ Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join 10,000+ Satisfied Clients</h2>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition text-lg">
            Start Your Property Journey Today
          </button>
        </div>
      </section>
    </div>
  )
}
