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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/70 ${isMobileMenuOpen ? '' : 'hidden'}`}
        onClick={(e) => {
          // Close when clicking overlay
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        {/* Slide-in drawer panel */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#212121] text-white p-8 shadow-2xl transform transition-transform duration-300 ease-in-out">
          {/* Close icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl absolute top-4 right-6"
          >
            &times;
          </button>
          {/* Links */}
          <nav className="mt-12 flex flex-col space-y-6">
            <a href="#features" className="text-xl font-medium hover:text-blue-400">Features</a>
            <a href="#pricing" className="text-xl font-medium hover:text-blue-400">Pricing</a>
            <a href="#contact" className="text-xl font-medium hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </div>

            {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Smart Website Visitor Reports</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Receive clean PDF reports daily via email — includes visitor location, top pages, time spent, and behavior insights.
        </p>

        <div className="cta-form mt-8 mb-16 flex justify-center">
          <div className="flex flex-wrap w-full max-w-[500px]">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 min-w-[250px] p-4 text-base border border-gray-300 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button 
              type="button"
              className="px-8 py-4 text-base bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Get Early Access
            </button>
          </div>
        </div>

        <div className="mt-6">
          <a 
            href="/WatchTrace-Sample-Report.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#1a73e8] underline text-base font-medium hover:text-[#0c59cf] transition-colors"
          >
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

      <hr className="border-t border-gray-300 my-8 w-3/4 mx-auto" />

      {/* Policy Sections */}
      <section id="contact" className="px-6 py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">Have a question or feedback? Send us a message below:</p>
          
          <form action="https://formspree.io/f/mnnzwejw" method="POST" className="max-w-lg space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition-colors" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition-colors" 
            />
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition-colors"
            ></textarea>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <p className="mt-6 text-sm text-gray-600">
            Alternatively, you can email us directly at:{" "}
            <a href="mailto:support@watchtrace.app" className="text-blue-600 hover:underline">
              support@watchtrace.app
            </a>
          </p>
        </div>
      </section>

      <section id="privacy" className="px-6 py-12 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
          <p>We respect your privacy. Your data is never shared or sold. Reports are generated securely and only accessible to you.</p>
        </div>
      </section>

      <section id="terms" className="px-6 py-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
          <p>By using WatchTrace, you agree to our service limitations, fair use policies, and data collection for analytics purposes.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          {/* Trust Badges */}
          <div className="text-sm text-gray-300 space-x-4">
            <span>🔒 SSL Secured</span>
            <span>📧 Verified Email Delivery</span>
            <span>🧠 AI-Powered Reports</span>
            <span>⏱️ Privacy First</span>
            <span>📄 Sample Report Available</span>
          </div>

          {/* Footer Links */}
          <div className="text-xs text-gray-400 space-x-4">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms & Conditions</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} <strong>WatchTrace</strong>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
