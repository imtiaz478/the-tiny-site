import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'FREE',
      price: '$0',
      period: '/forever',
      description: 'Great for individuals and casual use.',
      features: [
        'Unlimited link shortening',
        'Basic click counter',
        'HTTPS security',
        'QR code (basic)',
        'Cross-device support',
      ],
      buttonText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'PRO',
      price: '$9',
      period: '/per month',
      description: 'For creators, marketers, and power users.',
      features: [
        'Everything in Free',
        'Custom short links',
        'Advanced analytics',
        'UTM builder',
        'QR code (custom)',
        'Browser extension',
        'Priority support',
      ],
      buttonText: 'Start 14-Day Trial',
      isPopular: true,
    },
    {
      name: 'BUSINESS',
      price: '$29',
      period: '/per month',
      description: 'For teams and growing companies.',
      features: [
        'Everything in Pro',
        'Team dashboard',
        'Developer API',
        'Bulk link creation',
        'White-label domain',
        'App integrations',
        'Dedicated support',
      ],
      buttonText: 'Subscribe Now',
      isPopular: false,
    },
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-2 block">
            PRICING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between ${
                plan.isPopular
                  ? 'bg-[#5822fa] text-white shadow-xl shadow-purple-600/15 lg:-translate-y-2 border-2 border-purple-400/30'
                  : 'bg-white text-gray-900 border border-gray-200/80 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Top Content Group */}
              <div>
                {/* Plan Header Name */}
                <div className={`text-[11px] font-bold tracking-wider uppercase mb-3 ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>
                  {plan.name}
                </div>

                {/* Price Row */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs font-medium ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${plan.isPopular ? 'text-purple-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {/* Divider Line */}
                <div className={`h-px w-full mb-6 ${plan.isPopular ? 'bg-purple-400/30' : 'bg-gray-100'}`} />

                {/* Feature List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.isPopular
                            ? 'bg-white/20 text-white'
                            : 'bg-purple-50 text-[#6336fa]'
                        }`}
                      >
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className={`font-medium ${plan.isPopular ? 'text-purple-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button */}
              <button
                className={`w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 mt-auto ${
                  plan.isPopular
                    ? 'bg-white text-[#6336fa] hover:bg-purple-50'
                    : 'bg-[#6336fa] text-white hover:bg-[#5229e0]'
                }`}
              >
                <span>{plan.buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;