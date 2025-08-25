import React, { useState } from "react";

export default function WatchTraceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>
                </defs>
                
                {/* Main circle background */}
                <circle cx="20" cy="20" r="18" fill="url(#eyeGrad)" opacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
                
                {/* Inner white circle */}
                <circle cx="20" cy="20" r="8" fill="white" stroke="#3b82f6" strokeWidth="1.5"/>
                
                {/* Center dot (pupil) */}
                <circle cx="20" cy="20" r="3.5" fill="#1d4ed8"/>
                
                {/* Data trace lines extending from the eye */}
                <g stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.8">
                  <path d="M35 18 L45 16 L50 18"/>
                  <path d="M35 20 L45 20 L50 20"/>
                  <path d="M35 22 L45 24 L50 22"/>
                </g>
                
                {/* Small dots at the end of traces */}
                <circle cx="50" cy="18" r="1.5" fill="#06b6d4"/>
                <circle cx="50" cy="20" r="1.5" fill="#06b6d4"/>
                <circle cx="50" cy="22" r="1.5" fill="#06b6d4"/>
              </svg>
            </div>
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">Watch</span>
              <span className="text-blue-600">Trace</span>
            </div>
          </div>

          {/* Mobile menu button - Always visible */}
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 bg-white">
            <div className="space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-blue-50 transition-all duration-200">
                Features
              </a>
              <a href="#how-it-works" className="block text-blue-600 font-medium py-2 px-4 rounded-md bg-blue-50">
                How It Works
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-blue-50 transition-all duration-200">
                Pricing
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 font-medium py-2 px-4 rounded-md hover:bg-blue-50 transition-all duration-200">
                Contact
              </a>
              <div className="pt-2">
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
