"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CeoSection() {
  return (
    <section className="relative w-full bg-[#E10600] text-white py-20 md:py-32 px-6 md:px-16 overflow-hidden">
      {/* Subtle darker red background decorative shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#B00000] rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B00000] rounded-full blur-[160px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: CEO Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-left"
        >
          <span 
            className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'rgba(255, 255, 255, 0.95)' }}
          >
            ABOUT THE CEO
          </span>
          <h2 
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            Meet Our CEO
          </h2>
          
          <div className="space-y-6 max-w-[540px]">
            <p 
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#FFFFFF' }}
            >
              Priti Palekar is the Founder and CEO of Virrat Global. With over a decade of experience in strategic design, web development, and digital marketing, Priti has guided the company from a boutique design studio to a premier creative agency. Her leadership is defined by a commitment to bridging the gap between artistic vision and technical performance.
            </p>
            
            <p 
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.90)' }}
            >
              Under her guidance, Virrat Global has partnered with ambitious founders to scale their businesses through custom technology and performance-driven branding solutions, fostering a culture of innovation, creativity, and relentless growth.
            </p>
          </div>

          {/* Quote Block */}
          <div className="mt-10 pt-8 border-t border-white/20 max-w-[500px]">
            <p 
              className="italic text-lg md:text-xl font-medium leading-relaxed"
              style={{ color: '#FFE500' }}
            >
              &ldquo;We don't just build websites; we design digital experiences that scale businesses and turn complex ideas into elegant, realities.&rdquo;
            </p>
            <div className="mt-4">
              <p 
                className="font-extrabold text-sm md:text-base uppercase tracking-wider"
                style={{ color: '#FFFFFF' }}
              >
                Priti Palekar
              </p>
              <p 
                className="text-xs md:text-sm uppercase tracking-widest mt-0.5"
                style={{ color: 'rgba(255, 255, 255, 0.80)' }}
              >
                Founder &amp; CEO, Virrat Global
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: CEO Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center items-center w-full h-full relative"
        >
          {/* Subtle outer frame/border for premium editorial look */}
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[10px_10px_0px_0px_#B00000] border-4 border-white bg-[#B00000]">
            <Image 
              src="/team/priti.png"
              alt="Priti Palekar, CEO of Virrat Global"
              fill
              className="object-cover object-center scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
