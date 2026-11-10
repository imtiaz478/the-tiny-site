import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#f5f6ff] min-h-[65vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100/60 border border-purple-200/80 text-[#6336fa] font-medium text-sm mb-6 shadow-xs">
        <svg 
          className="w-4 h-4 text-[#6336fa]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a.5.5 0 00.71 0l7.234-7.234M21 8.25V13.5M21 8.25H15.75" />
        </svg>
        <span>Trusted by thousands of users</span>
      </div>

      {/* Main Heading - Slightly increased sizing */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 max-w-4xl leading-[1.15]">
        Shorten Your URL <br className="hidden sm:inline" />
        <span className="text-[#6336fa]">in seconds</span>
      </h1>

      {/* Subtitle - Slightly increased sizing */}
      <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed font-normal">
        Create short, memorable links that you can share anywhere.
        <br className="hidden sm:inline" />
        Track every click with powerful analytics.
      </p>
    </section>
  );
};

export default Hero;