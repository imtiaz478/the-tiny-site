import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-500 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-600">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Left Column: Brand, Description, Socials & Contact */}
          <div className="md:col-span-6 space-y-6">
            {/* Logo Text */}
            <div className="font-black text-xl tracking-wider text-gray-950">
              THETINY.SITE
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              The fastest way to shorten, track, and manage your URLs. Trusted by thousands of marketers, developers, and businesses across Bangladesh and beyond.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#6336fa] hover:text-white flex items-center justify-center text-gray-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#6336fa] hover:text-white flex items-center justify-center text-gray-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#6336fa] hover:text-white flex items-center justify-center text-gray-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#6336fa] hover:text-white flex items-center justify-center text-gray-600 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 pt-2 text-sm">
              <div className="flex items-center gap-2.5 text-gray-600">
                <span className="text-[#6336fa]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span>banglapuzzle@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600">
                <span className="text-[#6336fa]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span>+880 1880-811048</span>
              </div>
            </div>

          </div>

          {/* Right Columns: Product & Company */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            
            {/* Product Column */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase mb-5">
                PRODUCT
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Browser Extension</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Report Malicious URL</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase mb-5">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#6336fa] transition-colors">Refund Policy</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gray-100" />

        {/* Bottom Copyright and Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; 2026 <span className="text-gray-900 font-medium">Bangla Puzzle Limited</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 flex-wrap">
            <a href="#" className="hover:text-[#6336fa] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#6336fa] transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-[#6336fa] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#6336fa] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;