import React from 'react';

const Stats = () => {
  const statsData = [
    { value: '100K+', label: 'Links Created' },
    { value: '1M+', label: 'Total Clicks' },
    { value: '180+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className="bg-[#6336fa] py-11 sm:py-13 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              {/* Stat Value - Slightly adjusted font size */}
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                {stat.value}
              </h3>
              {/* Stat Label - Slightly adjusted font size */}
              <p className="text-purple-200 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;