"use client";

import React from 'react';

const team = [
  {
    name: "Andrei Baranov",
    role: "Design Chief",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225202_f9e684f3-dc19-469a-8142-eb391bfc601b.png&w=1280&q=85"
  },
  {
    name: "Daria Lebedeva",
    role: "Interface Expert",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225149_7937e8ea-3b0a-46ab-919f-775627695a23.png&w=1280&q=85"
  },
  {
    name: "Ivan Sorokin",
    role: "Concept Chief",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225153_f2b1fc04-776a-4f2e-879b-b764ea762e77.png&w=1280&q=85"
  },
  {
    name: "Anna Fedorova",
    role: "Brand Consultant",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225847_f456fd9c-8938-4103-836d-51b0e88a9510.png&w=1280&q=85"
  },
  {
    name: "Pavel Smirnov",
    role: "Movement Artist",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256.png&w=1280&q=85"
  },
  {
    name: "Olga Kravtsova",
    role: "UX Specialist",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4.png&w=1280&q=85"
  },
  {
    name: "Igor Zakharenko",
    role: "Graphic Creator",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3.png&w=1280&q=85"
  },
  {
    name: "Ksenia Romanova",
    role: "Studio Head",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_230413_62e8b331-89be-4d35-84fe-330ba9b1b64f.png&w=1280&q=85"
  }
];

export default function KollektivaHero() {
  return (
    <section className="w-full bg-[#1b1c21] py-16 md:py-24 px-6 sm:px-10 lg:px-16 text-white font-sans select-none overflow-hidden">
      
      {/* Top Header Line */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo / Chat bubble Megaphone Icon */}
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10 text-[#ff5a1f]" viewBox="0 0 40 40" fill="currentColor">
            <circle cx="20" cy="20" r="18" fill="#1b1c21" stroke="#ff5a1f" strokeWidth="2.5"/>
            {/* Chat tail */}
            <path d="M12 28l-2 5 6-3" fill="none" stroke="#ff5a1f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Megaphone body */}
            <path d="M15 17.5l3.5-3.5a0.5.5 0 0 1 .8.4v11.2a0.5.5 0 0 1-.8.4L15 22.5h-2c-.5 0-1-.5-1-1v-3c0-.5.5-1 1-1h2z" fill="#ff5a1f"/>
            {/* Sound waves */}
            <path d="M22 17.5a2.5 2.5 0 0 1 0 5m1.5-7.5a5 5 0 0 1 0 10" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Start a project CTA Button */}
        <button className="bg-[#ff5a1f] px-6 py-2.5 rounded-full text-white font-semibold text-[13px] md:text-[14px] hover:bg-[#e04812] transition-colors flex items-center gap-2.5 shadow-md shadow-[#ff5a1f]/10 cursor-pointer">
          Start a project
          <span className="flex gap-0.5 items-center">
            <span className="w-1 h-1 rounded-full bg-white/40"/>
            <span className="w-1 h-1 rounded-full bg-white/70"/>
            <span className="w-1 h-1 rounded-full bg-white"/>
          </span>
        </button>

      </div>

      {/* Subheader "OUR TEAM" Label */}
      <div className="max-w-[1400px] mx-auto mt-6 text-[#9ca3af] text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase">
        — OUR TEAM
      </div>

      {/* Staggered Masonry Cards Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 pb-16">
        {team.map((member, idx) => {
          // Staggering values based on column indices:
          // Odd columns (indices 1, 3, 5, 7) are translated down on sm/lg screens.
          const isStaggeredCol = idx % 2 === 1;

          return (
            <div
              key={`team-card-${idx}`}
              className={`group relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-800 shadow-lg border border-slate-700/20 transform transition-transform duration-500 ${
                isStaggeredCol ? 'sm:translate-y-8 lg:translate-y-12' : 'translate-y-0'
              }`}
            >
              {/* Image with grayscale hover transition */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-[1.1] transition-all duration-[450ms] ease-in-out group-hover:grayscale-0 group-hover:contrast-100"
              />

              {/* Bottom Dark Overlay Vignette for readability */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent pointer-events-none z-5" />

              {/* Text Meta Info */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                <h3 className="text-[16px] md:text-[18px] font-bold text-white leading-tight">
                  {member.name}
                </h3>
                <p className="text-[12px] md:text-[13px] text-slate-300 font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
