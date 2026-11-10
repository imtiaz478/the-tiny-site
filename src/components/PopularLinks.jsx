import React, { useState } from 'react';

const PopularLinks = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const linksData = [
    {
      shortUrl: 'https://thetiny.site/ARLSeN',
      originalUrl: 'https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...',
      clicks: 416,
    },
    {
      shortUrl: 'https://thetiny.site/BArxCj',
      originalUrl: 'https://leena45945.softr.app',
      clicks: 269,
    },
    {
      shortUrl: 'https://thetiny.site/kLrnXd',
      originalUrl: 'https://supportersframe.com/blog/supportersframecom-introduces-qr-code...',
      clicks: 83,
    },
    {
      shortUrl: 'https://thetiny.site/qQNTp0',
      originalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWh...',
      clicks: 64,
    },
    {
      shortUrl: 'https://thetiny.site/k4dIp8',
      originalUrl: 'https://solverfirm.com/',
      clicks: 33,
    },
  ];

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Most Popular Links
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-gray-500 font-normal">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {linksData.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-100 hover:border-purple-200 transition-all shadow-xs overflow-hidden"
            >
              {/* Left Column: Short URL & Original URL */}
              <div className="flex-1 min-w-0 w-full">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-[#7c54fc] hover:underline block truncate"
                >
                  {item.shortUrl}
                </a>
                <p className="text-xs sm:text-sm text-gray-400 truncate mt-0.5">
                  {item.originalUrl}
                </p>
              </div>

              {/* Right Column: Clicks Count, Copy Button & QR Button 
                  Updated: Mobile-e justify-start (left side), Desktop-e sm:justify-end */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto justify-start sm:justify-end flex-wrap sm:flex-nowrap">
                
                {/* Clicks Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200/80 rounded-xl text-xs sm:text-sm text-gray-700 font-medium">
                  <svg
                    className="w-4 h-4 text-gray-500 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-2.673A9 9 0 1120.486 10"
                    />
                  </svg>
                  <span>{item.clicks} clicks</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(item.shortUrl, index)}
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-[#6336fa] hover:bg-[#5229e0] text-white rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm whitespace-nowrap"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
                      />
                    </svg>
                    <span>{copiedIndex === index ? 'Copied!' : 'Copy'}</span>
                  </button>

                  {/* QR Code Button */}
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e0e7ff]/70 hover:bg-[#d0dcff] text-[#6336fa] rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 whitespace-nowrap">
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM6.75 6.75h.008v.008H6.75V6.75zM6.75 16.5h.008v.008H6.75V16.5zM16.5 6.75h.008v.008H16.5V6.75zM13.5 13.5h3v3h-3v-3zM16.5 16.5h3v3h-3v-3zM13.5 18h3v3h-3v-3z"
                      />
                    </svg>
                    <span>QR</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularLinks;