'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h1 className="mt-6 text-5xl font-extrabold text-gray-900">500</h1>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Something went wrong!</h2>
              <p className="mt-2 text-sm text-gray-600">
                A critical error occurred. Please try again later.
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Try again
              </button>
              <div>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Go back home
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}