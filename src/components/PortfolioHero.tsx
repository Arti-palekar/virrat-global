'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Clock, ArrowUpRight } from 'lucide-react';

export function PortfolioHero() {
  const [time, setTime] = useState('');
  const reduceMotion = useReducedMotion();

  // Dynamic Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToGallery = () => {
    const el = document.getElementById('portfolio-grid');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex flex-col justify-end overflow-hidden bg-gradient-to-b from-[#859698] to-[#647577] text-white pt-24">

      {/* Hero Body Content */}
      <div className="relative flex-1 flex flex-col justify-end items-center max-w-[1600px] mx-auto w-full px-6 z-10 pb-4">
        {/* Massive overlapping portrait image of priti */}
        <div className="absolute inset-x-0 bottom-0 top-[10%] flex justify-center items-end pointer-events-none z-10 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...transition, delay: 0.1 }}
            className="relative w-full max-w-[580px] h-[90%] md:h-[95%] flex items-end justify-center"
          >
            <Image 
              src="/portfolio-wall/img/priti.png"
              alt="Priti Portrait"
              fill
              priority
              className="object-contain object-bottom select-none"
              sizes="(max-width: 768px) 100vw, 580px"
            />
          </motion.div>
        </div>

        {/* Dynamic layered texts overlaying in front of the image background */}
        <div className="relative z-30 flex flex-col items-center text-center max-w-xl mb-[8%] px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="text-sm md:text-base text-white/90 leading-relaxed font-body tracking-wide mb-6 drop-shadow-sm font-medium"
          >
            Each project I take begins with purposeful strategy, evolving through design to deliver simple, engaging experiences.
          </motion.p>

          <motion.button 
            onClick={scrollToGallery}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider hover:opacity-80 transition-all border-b border-white pb-1 group cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Massive bottom text layout layering behind the portrait */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden pointer-events-none select-none z-0 flex justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.12, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-[16vw] font-heading font-black leading-none text-white tracking-tight"
          style={{ transform: 'translateY(15%)' }}
        >
          Essanza
        </motion.h1>
      </div>
    </section>
  );
}
