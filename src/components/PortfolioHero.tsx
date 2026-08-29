'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';

export function PortfolioHero() {
  const scrollToGallery = () => {
    const el = document.getElementById('portfolio-grid');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden text-[#1A1A1A]"
      style={{
        background: 'radial-gradient(circle at 15% 15%, #ffecec 0%, #fafafa 55%, #fcfbfa 100%)',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Abstract neon ribbon overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="absolute w-full h-full min-w-[1200px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-90"
        >
          <g>
            {/* Path 1: Pale warm red */}
            <path 
              d="M -100 500 C 150 300, 350 200, 450 320 C 520 400, 400 500, 450 520 C 500 540, 750 380, 950 360 C 1150 340, 1300 430, 1600 400" 
              stroke="#FFE3E3" 
              strokeWidth="24" 
              strokeLinecap="round"
            />
            {/* Path 2: Soft rose-red */}
            <path 
              d="M -100 480 C 150 280, 350 180, 450 300 C 520 380, 400 480, 450 500 C 500 540, 750 360, 950 340 C 1150 320, 1300 410, 1600 380" 
              stroke="#FFB3B3" 
              strokeWidth="24" 
              strokeLinecap="round"
            />
            {/* Path 3: Bright red */}
            <path 
              d="M -100 460 C 150 260, 350 160, 450 280 C 520 360, 400 460, 450 480 C 500 500, 750 340, 950 320 C 1150 300, 1300 390, 1600 360" 
              stroke="#FF4D4D" 
              strokeWidth="24" 
              strokeLinecap="round"
            />
            {/* Path 4: Virrat brand red */}
            <path 
              d="M -100 440 C 150 240, 350 140, 450 260 C 520 340, 400 440, 450 460 C 500 480, 750 320, 950 300 C 1150 280, 1300 370, 1600 340" 
              stroke="#D62020" 
              strokeWidth="24" 
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Top Row: Description + Stats */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        {/* Description left */}
        <motion.div 
          className="flex flex-col gap-5 max-w-md text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#1A1A1A] text-sm md:text-base font-semibold leading-relaxed font-body">
            We are a premium creative & tech agency. Explore our curated selection of digital products, branding, and automation platforms.
          </p>
          <button 
            onClick={scrollToGallery}
            className="self-start inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer"
          >
            Explore Projects &rarr;
          </button>
        </motion.div>

        {/* Stats right */}
        <motion.div 
          className="flex gap-12 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-none mb-1">98%</h2>
            <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-500 font-bold leading-tight font-body">
              Clients satisfied<br />and repeating
            </p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-none mb-1">125+</h2>
            <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-gray-500 font-bold leading-tight font-body">
              Projects completed<br />globally
            </p>
          </div>
        </motion.div>
      </div>

      {/* Middle Row: Giant Typography wordmark */}
      <div className="relative z-10 w-full flex justify-center py-6 select-none">
        <motion.h1 
          className="text-[13vw] font-black leading-none tracking-tight text-[#0F0F11] flex items-center justify-center font-heading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-serif italic font-normal mr-[-0.02em] text-[#0F0F11] translate-y-[-0.05em]">port</span>
          <span className="font-sans font-bold">folio</span>
        </motion.h1>

        {/* Circular Sticker Badge */}
        <motion.div 
          className="absolute right-[4%] sm:right-[8%] md:right-[12%] top-[58%] md:top-[64%] z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text className="text-[6.2px] font-bold fill-gray-800 tracking-[0.05em] uppercase">
              <textPath href="#circlePath">
                VIRRAT GLOBAL PVT. LTD. • VIRRAT GLOBAL PVT. LTD. •
              </textPath>
            </text>
          </svg>
          {/* Nested wireframe ovals in center */}
          <div className="absolute flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-80">
              <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="#111111" strokeWidth="0.8" transform="rotate(-30 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="#111111" strokeWidth="0.8" transform="rotate(10 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="#111111" strokeWidth="0.8" transform="rotate(50 12 12)" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Empty space at the bottom to push content up and balance visually */}
      <div className="h-6" />
    </section>
  );
}
