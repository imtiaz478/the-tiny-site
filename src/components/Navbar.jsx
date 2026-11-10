import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'About', 'Blog', 'Terms'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-black z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Container 1: Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="THETINY.SITE" 
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Container 2: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveTab(link)}
                className={`text-sm md:text-base font-medium transition-colors duration-200 ${
                  activeTab === link
                    ? 'text-[#6336fa] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Container 3: Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-3.5 py-1.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              Log In
            </button>
            <button className="px-4 py-1.5 text-sm font-semibold text-white bg-[#6336fa] rounded-lg hover:bg-purple-700 transition-all shadow-sm active:scale-95">
              Get Started Free
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-black focus:outline-none p-1.5"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-black px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveTab(link);
                  setIsOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg text-base font-medium ${
                  activeTab === link
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <button className="w-full py-2 text-center text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Log In
            </button>
            <button className="w-full py-2 text-center text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 shadow-sm">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;