'use client';

import React from 'react';

const row1Images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const row2Images = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function AboutImageSlider() {
  return (
    <section className="w-full bg-white overflow-hidden py-16 md:py-24">
      <style>{`
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .pause-on-hover:hover .animate-marquee-left,
        .pause-on-hover:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="flex flex-col gap-2 md:gap-4 pause-on-hover">
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee-left gap-2 md:gap-4">
          {[...row1Images, ...row1Images].map((src, idx) => (
            <div key={`row1-${idx}`} className="w-[280px] md:w-[400px] aspect-[4/3] shrink-0 bg-slate-100">
              <img src={src} alt="Virrat Global Team" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee-right gap-2 md:gap-4">
          {[...row2Images, ...row2Images].map((src, idx) => (
            <div key={`row2-${idx}`} className="w-[280px] md:w-[400px] aspect-[4/3] shrink-0 bg-slate-100">
              <img src={src} alt="Virrat Global Team" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
