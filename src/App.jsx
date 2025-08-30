import React from "react";
import "./assets/email-signup.css";
import WatchTraceHeader from './components/Header';

export default function App() {
  return (
    <div className="font-sans">
      <WatchTraceHeader />

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
                                    <a 
                          href="https://forms.gle/roLPJ3actu4GUTET9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 text-base bg-black text-white hover:bg-gray-800 transition-colors"
                        >
                          Get Early Access
                        </a>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-[#0b0f19] text-white text-center">
        <h2 className="text-4xl font-bold mb-3">🛰️ How It Works</h2>
        <p className="text-lg text-[#b0b8c4] max-w-3xl mx-auto mb-10">
          WatchTrace turns your website traffic into actionable insights — automatically delivered to your inbox every morning.
        </p>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          <div className="flex-1 max-w-[300px]">
            <h3 className="text-2xl font-semibold mb-3">1. You Install</h3>
            <p className="text-[#b0b8c4]">
              Copy a simple JS snippet to your website — no coding required. We start tracking visitor sessions immediately.
            </p>
          </div>
          <div className="flex-1 max-w-[300px]">
            <h3 className="text-2xl font-semibold mb-3">2. We Monitor</h3>
            <p className="text-[#b0b8c4]">
              We record visit data like pages viewed, country, time spent, and user behavior — safely and in real time.
            </p>
          </div>
                     <div className="flex-1 max-w-[300px]">
             <h3 className="text-2xl font-semibold mb-3">3. You Receive Reports</h3>
             <p className="text-[#b0b8c4]">
               Each morning at 9 AM (your time), you receive a clean PDF report showing daily insights, top visitors, and traffic summaries.
             </p>
             <div className="mt-4">
                               <a 
                  href="/WatchTrace Setup Guide 📄.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#0891b2] transition-colors font-medium"
                >
                  <span>📄</span>
                  <span>Download Setup Guide</span>
                </a>
             </div>
           </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-3">🚀 See It in Action</h3>
          <p className="max-w-3xl mx-auto text-[#b0b8c4]">
            You install WatchTrace on your site. We detect visits like:
            <br />
            - Visitor from Germany spent 7m 24s on `/pricing`<br />
            - 4 returning users visited again this week<br />
            - Top page: `/checkout`<br />
            <br />
            ⏱ By 9 AM, a smart PDF lands in your inbox with everything summarized.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-900 py-16 text-white" id="pricing">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">Free 14-Day Trial</h3>
              <p className="text-gray-300 mb-6">Full access to all premium features.</p>
              <ul className="space-y-3 mb-6">
                <li>📄 Daily visitor reports in PDF format (both auto and manual)</li>
                <li>🌍 Top countries, time spent, and individual logs</li>
                <li>⏰ Timezone-based delivery at 9 AM</li>
                <li>🧩 Simple 1-line integration script</li>
                <li>🎨 Clean professional layout with branding</li>
                <li>🔐 No credit card required to start</li>
              </ul>
              <div className="text-3xl font-bold mb-4">$0</div>
                                        <a
                            href="https://forms.gle/roLPJ3actu4GUTET9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-3 rounded-xl font-semibold"
                          >
                            Start for Free
                          </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-indigo-700 rounded-2xl p-8 shadow-xl border-4 border-indigo-400 transform scale-105">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-indigo-100 mb-6">Best for growing sites & professionals.</p>
              <ul className="space-y-3 mb-6">
                <li>🚀 Unlimited Daily Reports</li>
                <li>📩 Manual Report Downloads</li>
                <li>💡 Multiple Website Support</li>
                <li>⚡ Priority Email Support</li>
              </ul>
              <div className="text-3xl font-bold mb-4">$9.99<span className="text-lg font-medium">/month</span></div>
                                                                                 <a
                             href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WUNS947GNGWDL"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="block text-center bg-white text-indigo-700 hover:bg-indigo-100 transition-colors px-6 py-3 rounded-xl font-semibold"
                           >
                             Upgrade to Premium — $9.99/month
                           </a>
            </div>
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
