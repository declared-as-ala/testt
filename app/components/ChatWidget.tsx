'use client'
import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={isOpen ? "Close chat" : "Open chat"}
            aria-expanded={isOpen}
          >
            {!isOpen && (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            )}
            {isOpen && (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          {!isOpen && (
            <>
              <div className="absolute -top-2 -left-2 bg-white text-blue-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                👋
              </div>
              <div className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                We Are Here!
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-8 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up"
          role="dialog"
          aria-labelledby="chat-title"
          aria-describedby="chat-description"
        >
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-6 rounded-t-2xl">
            <h3 id="chat-title" className="text-2xl font-bold mb-2 flex items-center">
              Hi there 👋
            </h3>
            <p id="chat-description" className="text-sm text-blue-100">
              Need help? We're online — our response time is just a few seconds!
            </p>
          </div>

          {/* Chat Body */}
          <div className="flex-1 bg-blue-600 p-6 overflow-y-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-black mb-2">Start Chart</h4>
              <p className="text-black text-sm mb-4">We typically reply in a few seconds</p>
              <button 
                className="text-blue-600 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                aria-label="Send message"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Footer */}
          <div className="bg-white border-t border-gray-200 p-4 flex items-center justify-around">
            <button 
              className="p-3 hover:bg-gray-100 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Home"
            >
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </button>
            <button 
              className="p-3 hover:bg-gray-100 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Chat"
            >
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div className="bg-white px-4 py-2 text-center border-t border-gray-100">
            <div className="inline-flex items-center space-x-2 text-xs text-black">
              <span>⚡</span>
              <span>Powered by tawk.to</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}