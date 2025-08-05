import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };
  const services = [
    {
      title: "Instant Cash Offers",
      description: "Get a fair, no-obligation cash offer for your property within 24 hours.",
      details: [
        "Professional valuation based on current market conditions",
        "Guaranteed offer within 24 hours of property inspection",
        "No obligation to accept - take your time to decide",
        "Transparent pricing with no hidden fees or commissions",
        "Skip the uncertainty of traditional market listings"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    },
    {
      title: "Quick Closing",
      description: "Close in as little as 7 days or on your timeline. No waiting for bank approvals.",
      details: [
        "Close in as little as 7 days - you choose the timeline",
        "No bank approval delays or financing contingencies",
        "We handle all the paperwork and closing costs",
        "Flexible move-out dates to fit your schedule",
        "Professional title company handles the closing process"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    },
    {
      title: "As-Is Purchase",
      description: "Sell your home in its current condition. No repairs or renovations needed.",
      details: [
        "We buy properties in any condition - no repairs needed",
        "Skip costly renovations and contractor hassles",
        "No cleaning or junk removal required",
        "Perfect for inherited properties or deferred maintenance",
        "Save thousands on pre-sale improvements"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    },
    {
      title: "Zero Fees",
      description: "No agent commissions, no hidden fees. Keep more money in your pocket.",
      details: [
        "No real estate agent commissions (save 6%)",
        "We cover all closing costs and legal fees",
        "No inspection or appraisal fees",
        "No marketing or staging costs",
        "What we offer is what you get - guaranteed"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    },
    {
      title: "Simple Process",
      description: "A straightforward 3-step process: Request offer, Accept, Close. No complications.",
      details: [
        "1. Submit your property details online",
        "2. Receive your cash offer within 24 hours",
        "3. Choose your closing date and get paid",
        "No showings, no back-and-forth negotiations",
        "Professional support throughout the entire process"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    },
    {
      title: "Local Experts",
      description: "Work with experienced local real estate investors who know your market inside and out.",
      details: [
        "Deep knowledge of Arizona real estate markets",
        "Over 15 years of combined local experience",
        "Strong relationships with local title companies",
        "Understanding of local regulations and processes",
        "Direct communication with decision makers"
      ],
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/80 border-b border-white/5 shadow-xl z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              {['Home', 'Services', 'About Us', 'Contact Us', 'Our Mission'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(
                    item === 'Home' ? homeRef :
                    item === 'Services' ? servicesRef :
                    item === 'About Us' ? aboutRef :
                    item === 'Contact Us' ? contactRef :
                    missionRef,
                    item.toLowerCase().replace(' ', '')
                  )}
                  className={`text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:text-emerald-400 relative mx-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-emerald-400 after:to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    activeTab === item.toLowerCase().replace(' ', '') ? 'text-emerald-400 after:scale-x-100' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-end">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white bg-gray-800/50 p-2 rounded-lg backdrop-blur-xl"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>


          </div>

          {/* Mobile navigation overlay */}
          <div className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-lg"></div>
          </div>

          {/* Mobile navigation menu */}
          <div className={`md:hidden fixed inset-0 z-50 transform transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="flex flex-col items-end justify-center min-h-screen p-12 space-y-6">
              {['Home', 'Services', 'About Us', 'Contact Us', 'Our Mission'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(
                      item === 'Home' ? homeRef :
                      item === 'Services' ? servicesRef :
                      item === 'About Us' ? aboutRef :
                      item === 'Contact Us' ? contactRef :
                      missionRef,
                      item.toLowerCase().replace(' ', '')
                    );
                    setIsMenuOpen(false);
                  }}
                  className={`text-2xl font-medium text-white hover:text-emerald-400 transition-all duration-500 uppercase tracking-wider transform hover:translate-x-[-8px] ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-emerald-400 p-2 bg-gray-900/50 rounded-full backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section ref={homeRef} className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/modern-house.jpg")'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
          <div className="container mx-auto text-center relative z-10 px-4 max-w-4xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 px-4 leading-tight">
              The Build Game
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-6 text-gray-100 max-w-3xl mx-auto font-light px-4 leading-tight">
              Sell Your Property Fast. No Agents. No Fees.
            </p>
            <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto px-6 leading-relaxed">
              Get a cash offer within 24 hours. Close on your timeline. Skip the stress of selling your home, condo, or apartment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-6">
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')} 
                className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 py-5 px-8 sm:px-12 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30 w-full sm:w-auto"
              >
                Get Your Cash Offer Now
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')} 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 py-5 px-8 sm:px-12 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/30 w-full sm:w-auto"
              >
                How It Works
              </button>
            </div>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-center px-6">
              <div className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">24h</h3>
                <p className="text-sm sm:text-base text-gray-300">Cash Offer Timeline</p>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">7 Days</h3>
                <p className="text-sm sm:text-base text-gray-300">Average Closing Time</p>
              </div>
              <div className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                <h3 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">0%</h3>
                <p className="text-sm sm:text-base text-gray-300">Agent Commission</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Problem Statement */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-emerald-400">Why Traditional Home Selling Doesn't Work Anymore</h2>
                <p className="text-xl text-gray-300 mb-8">The old way of selling homes is slow, expensive, and full of uncertainty. We've got a better solution.</p>
              </div>

              {/* Problem Details */}
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Traditional Home Selling</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">6% agent commissions eating into your equity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">Months of uncertainty waiting for qualified buyers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">Endless repairs, showings, and negotiations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-900/50 p-8 rounded-xl backdrop-blur">
                  <h3 className="text-2xl font-semibold mb-4 text-white">The Build Game Way</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-emerald-400 font-semibold">Direct Cash Offers</span>
                        <p className="text-gray-300">Get a fair, no-obligation cash offer within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-emerald-400 font-semibold">Zero Fees or Commissions</span>
                        <p className="text-gray-300">Keep more money in your pocket - no middlemen involved</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-emerald-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-emerald-400 font-semibold">Close On Your Timeline</span>
                        <p className="text-gray-300">As fast as 7 days or whenever you're ready to move</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-2xl font-semibold text-white mb-8">
                  Skip the stress, keep the profit. Sell your home the smart way.
                </p>
                <button 
                  onClick={() => scrollToSection(contactRef, 'contact')}
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 py-4 px-10 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/30"
                >
                  Get Your Cash Offer Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Buy Homes Section */}
        <section ref={servicesRef} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 backdrop-blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">How We Buy Your Home</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our streamlined process makes selling your home as simple as possible. Here's what you can expect when working with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[200%] h-full bg-gradient-to-t from-emerald-500/10 to-transparent opacity-20 blur-3xl"></div>
        </section>

        {/* About Us Section */}
        <section ref={aboutRef} className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
          <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-gradient-to-b from-emerald-500/20 to-blue-500/20 blur-3xl rotate-12 transform translate-x-1/2"></div>
          <div className="absolute -bottom-1/2 left-0 w-1/2 h-full bg-gradient-to-t from-blue-500/20 to-emerald-500/20 blur-3xl -rotate-12 transform -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Meet The Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our founders combine real estate expertise with technological innovation to revolutionize the home-selling process.</p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Ricky Gutierrez</h3>
                    <a 
                      href="https://www.instagram.com/rickygutierrezz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">CEO & Lead Investor</p>
                  <p className="text-gray-400 mt-4 leading-relaxed flex-grow">
                    Born and raised in Chandler, Arizona, Ricky studied entrepreneurship at Arizona State University before diving into real estate investing. As the founder of TechBud Solutions and a prominent YouTube educator, he's helped thousands learn the art of real estate investing. His expertise in both technology and real estate allows us to provide innovative solutions for homeowners.
                  </p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Weston Moore</h3>
                    <a 
                      href="https://www.instagram.com/wesjangles" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">Chief Acquisitions Officer</p>
                  <p className="text-gray-400 mt-4 leading-relaxed flex-grow">
                    A native Arizonan with over 15 years in real estate, Weston has closed hundreds of successful deals throughout the Phoenix metropolitan area. His deep understanding of the local market and commitment to transparent transactions has earned him a reputation as one of Arizona's most trusted real estate professionals.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Together, we're revolutionizing how homeowners sell their properties in Arizona. Our technology-driven approach combined with years of local market expertise ensures you get the best possible deal with the least amount of hassle.
              </p>
            </div>
          </div>
        </section>

        {/* Submit Your Deal Section */}
        <section ref={contactRef} id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl"></div>
          <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-gradient-to-b from-emerald-500/20 to-blue-500/20 blur-3xl rotate-12 transform translate-x-1/2"></div>
          <div className="absolute -bottom-1/2 left-0 w-1/2 h-full bg-gradient-to-t from-blue-500/20 to-emerald-500/20 blur-3xl -rotate-12 transform -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Submit Your Deal
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get your no-obligation cash offer within 24 hours. Tell us about your property and we'll make it happen.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/5">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
          <div className="absolute inset-0 bg-[url('/modern-house.jpg')] opacity-5 bg-cover bg-center"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent px-4 leading-normal pb-2">
                  Reimagining Real Estate
                </h2>
                <p className="text-xl text-gray-300 px-4">
                  Building a better way to sell your property in Arizona
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300">
                  <div className="text-emerald-400 mb-4">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Speed & Simplicity</h3>
                  <p className="text-gray-300">
                    We've streamlined the home-selling process to close deals in as little as 7 days. No more endless waiting and uncertainty.
                  </p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300">
                  <div className="text-emerald-400 mb-4">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Fair Value</h3>
                  <p className="text-gray-300">
                    Get the best possible price for your home with our transparent pricing and zero hidden fees or commissions.
                  </p>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-xl p-8 rounded-2xl border border-white/5 transform hover:scale-105 transition-all duration-300">
                  <div className="text-emerald-400 mb-4">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Peace of Mind</h3>
                  <p className="text-gray-300">
                    Sell your home with confidence, knowing you're working with Arizona's most trusted real estate investors.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-emerald-900/30 to-blue-900/30 backdrop-blur-xl p-12 rounded-2xl border border-white/5">
                <p className="text-2xl text-white font-light mb-8 leading-relaxed">
                  "Our vision is to create a world where selling your home is as simple as a handshake. No complications, no stress — just a fair deal and a quick close."
                </p>
                <p className="text-emerald-400 font-semibold">— Ricky Gutierrez, CEO & Founder</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
