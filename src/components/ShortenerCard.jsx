import React from 'react';

const ShortenerCard = () => {
  return (
    <div className="bg-[#f5f6ff] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 -mt-10 md:-mt-16 relative z-10">
      {/* Expanded Width (max-w-3xl) & Reduced Vertical Padding */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full text-center shadow-xl shadow-purple-500/5 border border-purple-100/50">
        
        {/* Top Circle Lock Icon */}
        <div className="w-14 h-14 bg-[#f1edff] text-[#6336fa] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 0h10.5A2.25 2.25 0 0119.5 12.75v7.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 20.25v-7.5a2.25 2.25 0 012.25-2.25z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-2.5 tracking-tight">
          Login to make your URL short
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-7">
          Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          {/* Primary Lock Button */}
          <button className="w-full sm:w-auto px-7 py-3 bg-[#6336fa] hover:bg-[#5229e0] text-white font-medium rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 active:scale-95">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 0h10.5A2.25 2.25 0 0119.5 12.75v7.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 20.25v-7.5a2.25 2.25 0 012.25-2.25z"
              />
            </svg>
            <span>Login to Make URL</span>
          </button>

          {/* Secondary Outline Arrow Button */}
          <button className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-purple-50 text-[#6336fa] font-semibold border-2 border-[#6336fa] rounded-xl text-sm transition-all flex items-center justify-center gap-2 active:scale-95">
            <span>Sign Up Free</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShortenerCard;