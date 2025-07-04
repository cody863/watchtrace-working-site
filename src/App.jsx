import React, { useState } from "react";
import "./assets/email-signup.css";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 shadow-md bg-white sticky top-0 z-50">
        {/* LOGO + BRAND */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="WatchTrace Logo" className="h-8" />
          <span className="text-xl font-bold text-blue-700">WatchTrace</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </header>

      {/* MOBILE MENU */}
      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col space-y-4 px-4 py-4 bg-white shadow-md md:hidden`}>
        <a href="#features" className="block text-lg">Features</a>
        <a href="#pricing" className="block text-lg">Pricing</a>
        <a href="#contact" className="block text-lg">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Smart Website Visitor Reports</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Receive clean PDF reports daily via email — includes visitor location, top pages, time spent, and behavior insights.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="cta-container">
            <input type="email" placeholder="Enter your email" />
            <button>Get Early Access</button>
          </div>
        </div>
        <div className="mt-4">
          <a href="/sample-report.pdf" download className="text-blue-600 underline text-sm">
            Download Sample Report
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">✨ Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📩</span>
            <p className="text-gray-700">Daily PDF emailed automatically</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <p className="text-gray-700">Tracks country, region, and city</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📁</span>
            <p className="text-gray-700">Logs visited pages + timestamps</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <p className="text-gray-700">Shows top visitors by time spent</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Straightforward pricing. No hidden fees.
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Choose a plan that fits your website's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="border rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Ideal for getting started.</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✅ 4 daily reports per month</li>
              <li>✅ PDF reports via email</li>
            </ul>
            <div className="text-3xl font-bold text-gray-800 mb-6">$0/mo</div>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-blue-600 bg-blue-50 rounded-2xl shadow-lg p-8 relative">
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Premium</h3>
            <p className="text-blue-800 mb-4">For active website owners.</p>
            <ul className="text-blue-900 space-y-2 mb-6">
              <li>✅ Unlimited daily reports</li>
              <li>✅ PDF reports via email</li>
              <li>✅ On-demand PDF report (manual)</li>
              <li>✅ Priority email support</li>
              <li>🚀 Weekly & Monthly Reports <span className="text-sm">(coming soon)</span></li>
            </ul>
            <div className="text-3xl font-bold text-blue-900 mb-6">$9.99/mo</div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-sm py-6 px-4 mt-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="WatchTrace Logo" className="h-6" />
            <span className="font-semibold">WatchTrace</span>
          </div>
          <div className="flex gap-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#sample" className="hover:underline">Sample</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} WatchTrace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
