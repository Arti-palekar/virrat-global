"use client";

import React from "react";

export default function BPMarqueeStrip() {
  const tagline1 = (
    <>
      Creative <span className="text-[#D62020]">Branding</span>. Premium{" "}
      <span className="text-[#D62020]">Printing</span>.
    </>
  );

  const tagline2 = (
    <>
      From Vision to Print, We Build{" "}
      <span className="text-[#D62020]">Brands</span> That Last.
    </>
  );

  const marqueeItems = [
    { text: tagline1 },
    { text: tagline2 },
  ];

  // Repeat items 6 times to form a full seamless infinite loop
  const marqueeSet = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative w-full h-[110px] md:h-[130px] bg-white -mt-8 flex items-center justify-center overflow-hidden z-10 select-none border-none group">
      
      {/* Hardware Accelerated Left-to-Right Keyframe Animation */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-ltr 35s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Noise Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Side Soft Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Single Left-to-Right Continuous Marquee Track */}
      <div className="w-full overflow-hidden flex items-center relative z-10">
        <div className="animate-marquee-ltr">
          {marqueeSet.map((item, idx) => (
            <div key={`mitem-${idx}`} className="flex items-center shrink-0">
              <span 
                className="text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[900] text-[#111111] tracking-[-2px] leading-[0.9] uppercase font-heading px-4 md:px-8"
              >
                {item.text}
              </span>
              <span className="text-[#D62020] text-sm sm:text-base md:text-lg select-none font-mono px-2">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
