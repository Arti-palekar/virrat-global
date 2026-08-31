"use client";

import React from "react";

const marqueeItems = [
  "DIGITAL MARKETING",
  "PERFORMANCE MARKETING",
  "SEO",
  "SOCIAL MEDIA",
  "CONTENT MARKETING",
  "PAID ADVERTISING",
  "MARKETING AUTOMATION",
  "LEAD GENERATION",
  "BRAND GROWTH",
  "DIGITAL STRATEGY",
];

export default function DMMarquee() {
  return (
    <section className="dm-marquee-container w-full overflow-hidden flex items-center border-b border-[#B71C1C]/30 cursor-default py-16 md:py-24">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Infinite Marquee Scroll */
        @keyframes dm-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .dm-marquee-track {
          display: flex;
          width: max-content;
          position: relative;
          z-index: 10;
          animation: dm-marquee-scroll 25s linear infinite;
        }
        .dm-marquee-container:hover .dm-marquee-track {
          animation-play-state: paused;
        }

        /* Hover Background Effects */
        .dm-marquee-container {
          position: relative;
          transition: box-shadow 400ms ease;
          background: #E53935;
        }
        .dm-marquee-container::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #C62828, #E53935, #C62828);
          opacity: 1;
          transition: opacity 400ms ease;
          z-index: 0;
        }
        .dm-marquee-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #B71C1C, #D92D2D, #FF3B30, #D92D2D, #B71C1C);
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 400ms ease;
          z-index: 0;
        }
        .dm-marquee-container:hover {
          box-shadow: 0 0 35px rgba(229, 57, 53, 0.45);
        }
        .dm-marquee-container:hover::before {
          opacity: 0;
        }
        .dm-marquee-container:hover::after {
          opacity: 1;
          animation: bg-pan 4s linear infinite;
        }

        @keyframes bg-pan {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
      `}} />
      <div className="dm-marquee-track">
        {/* We render the list twice to create a seamless loop.
            The animation translates exactly -50% of the total track width. */}
        {[...Array(2)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white uppercase whitespace-nowrap px-4 md:px-8 tracking-tighter drop-shadow-sm">
                  {item}
                </span>
                <span className="text-white/60 text-3xl md:text-4xl px-2 md:px-4">
                  •
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
