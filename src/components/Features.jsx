import React from 'react';

const Features = () => {
  const featuresList = [
    'Custom branded short links',
    'UTM parameter builder',
    'Powerful analytics dashboard',
    'QR Code generator (PNG/SVG)',
    'REST API with full documentation',
  ];

  const mockAnalytics = [
    { url: 'shorturl.bd/ig9Kp2', clicks: '1,247', barWidth: '92%' },
    { url: 'shorturl.bd/yt3Nm8', clicks: '589', barWidth: '52%' },
    { url: 'shorturl.bd/lk7Rv1', clicks: '312', barWidth: '68%' },
    { url: 'shorturl.bd/fb2Wx9', clicks: '198', barWidth: '82%' },
  ];

  return (
    <section className="bg-[#f5f6ff] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        
        {/* Left Content Column */}
        <div>
          {/* Badge */}
          <span className="text-xs font-semibold tracking-wider text-[#6336fa] uppercase mb-3 block">
            PREMIUM
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight mb-4">
            Unlock powerful tools for <br className="hidden sm:inline" />
            serious growth.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
            Go beyond basic shortening with a full suite of marketing and developer tools — custom branded links, UTM builders, deep analytics, QR codes, and a REST API for your apps.
          </p>

          {/* Checkmark List */}
          <ul className="space-y-3">
            {featuresList.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#e8e4ff] flex items-center justify-center flex-shrink-0 text-[#6336fa]">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-xs sm:text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Dashboard Column (Progress bars aligned right-to-left) */}
        <div className="bg-[#5021fa] rounded-3xl p-7 sm:p-9 text-white shadow-xl shadow-purple-500/10">
          
          <h3 className="text-base sm:text-lg font-bold mb-8 text-white tracking-wide">
            Link Analytics Dashboard
          </h3>

          <div className="space-y-7">
            {mockAnalytics.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {/* URL and Click Count Row */}
                <div className="flex items-center justify-between font-mono text-sm sm:text-base">
                  <span className="text-purple-200/90 font-medium tracking-tight">
                    {item.url}
                  </span>
                  <span className="font-bold text-white tracking-wider">
                    {item.clicks}
                  </span>
                </div>

                {/* Progress bar container with flex-row-reverse for Right-to-Left direction */}
                <div className="w-full bg-[#643bfb] rounded-full h-1.5 overflow-hidden flex flex-row-reverse">
                  <div 
                    className="h-full bg-[#825ffc] rounded-full"
                    style={{ width: item.barWidth }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;