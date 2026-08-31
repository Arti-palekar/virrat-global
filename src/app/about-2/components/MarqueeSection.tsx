"use client";

import React, { useEffect, useState } from 'react';

const TEAM_IMAGES = [
  "/images/about/team_1.png",
  "/images/about/team_2.png",
  "/images/about/team_3.jpg",
  "/images/about/team_4.jpg",
  "/images/about/team_5.png"
];

const ROW1_BASE = [TEAM_IMAGES[0], TEAM_IMAGES[1], TEAM_IMAGES[2], TEAM_IMAGES[3], TEAM_IMAGES[4]];
const ROW2_BASE = [TEAM_IMAGES[3], TEAM_IMAGES[4], TEAM_IMAGES[0], TEAM_IMAGES[1], TEAM_IMAGES[2]];

const ROW1_IMAGES = [...ROW1_BASE, ...ROW1_BASE, ...ROW1_BASE, ...ROW1_BASE, ...ROW1_BASE, ...ROW1_BASE];
const ROW2_IMAGES = [...ROW2_BASE, ...ROW2_BASE, ...ROW2_BASE, ...ROW2_BASE, ...ROW2_BASE, ...ROW2_BASE];

export default function MarqueeSection() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let sectionTop = 0;
    const section = document.getElementById('marquee-section');
    if (section) {
      sectionTop = section.offsetTop;
    }

    const handleScroll = () => {
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="marquee-section" 
      className="bg-[#F5F5F5] overflow-hidden w-full py-16 md:py-24"
    >
      <div className="flex flex-col gap-5 sm:gap-6 w-full">
        {/* Row 1 - Moves Right */}
        <div 
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${scrollOffset - 200}px, 0, 0)`,
            willChange: 'transform'
          }}
        >
          {ROW1_IMAGES.map((src, idx) => (
            <img 
              key={`row1-${idx}`} 
              src={src} 
              alt="Portfolio item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
            />
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div 
          className="flex gap-3 w-max"
          style={{
            transform: `translate3d(${-(scrollOffset - 200)}px, 0, 0)`,
            willChange: 'transform'
          }}
        >
          {ROW2_IMAGES.map((src, idx) => (
            <img 
              key={`row2-${idx}`} 
              src={src} 
              alt="Portfolio item"
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
