"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CeoSection() {
  return (
    <section className="relative w-full bg-[#E10600] text-white py-10 md:py-12 px-6 md:px-16 overflow-hidden">
      {/* Subtle darker red background decorative shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#B00000] rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B00000] rounded-full blur-[160px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: CEO Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-left"
        >
          <span 
            className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-1"
            style={{ color: 'rgba(255, 255, 255, 0.95)' }}
          >
            ABOUT THE CEO
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            Meet Our CEO
          </h2>
          
          <div className="space-y-3 max-w-[600px]">
            <p 
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#FFFFFF' }}
            >
              Our journey so far has been possible because of your unwavering support and collaboration. As we step forward as Virrat Global Pvt. Ltd., our focus remains on driving innovation, building long-term partnerships, and delivering measurable results that help your business grow. We look forward to achieving greater milestones with you.
            </p>

            <p 
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.90)' }}
            >
              Thank you for trusting us with your vision together. We will continue to create success stories that inspire.
            </p>
          </div>

          {/* Quote Block */}
          <div className="mt-6 pt-5 border-t border-white/20 max-w-[550px]">
            <p 
              className="italic text-base md:text-lg font-medium leading-relaxed"
              style={{ color: '#FFE500' }}
            >
              &ldquo;We don't just build websites; we design digital experiences that scale businesses and turn complex ideas into elegant realities.&rdquo;
            </p>
            <div className="mt-3">
              <p 
                className="font-extrabold text-sm md:text-base uppercase tracking-wider"
                style={{ color: '#FFFFFF' }}
              >
                Ram Khuspe
              </p>
              <p 
                className="text-xs md:text-sm uppercase tracking-widest mt-0.5"
                style={{ color: 'rgba(255, 255, 255, 0.80)' }}
              >
                CEO, Virrat Global Pvt. Ltd. (Formerly Smartup India Ventures)
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
          className="flex justify-center lg:justify-start lg:pl-10 items-center w-full h-full relative"
        >
          {/* Transparent CEO Cutout - No borders, shadows, or background */}
          <div className="relative w-full max-w-[420px] lg:max-w-[580px] h-[450px] md:h-[580px]">
            <Image 
              src="/team/ram-khuspe.png"
              alt="Ram Khuspe, CEO of Virrat Global Pvt. Ltd."
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
