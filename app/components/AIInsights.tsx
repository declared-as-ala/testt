export default function AIInsights() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary">
          <div className="flex items-start space-x-4">
            <div className="bg-primary text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">AI Insights</h3>
              <p className="text-gray-600">Based on your searches, you prefer properties with 2-4 bedrooms in urban areas. We've curated personalized recommendations below.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
