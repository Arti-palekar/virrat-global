"use client";

import React from "react";

const phrases = [
  "AI-Powered Automation",
  "Work Smarter",
  "Automate Repetitive Tasks",
  "Scale Your Business",
  "Intelligent Workflows",
];

export default function AiAutomationTextSlider() {
  // We only duplicate it enough times to cover ultra-wide monitors.
  // Using 4 sets total (2 sets per half) ensures the 50% translation is seamless.
  // Fewer duplicates mean a shorter physical distance for the 50% translation,
  // which results in a much slower, more elegant movement at a high duration.
  const duplicatedPhrases = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <section className="relative w-full py-8 md:py-12 bg-[#111111] text-[#FAF9F6] overflow-hidden border-y border-[#333333]">
      
      {/* Inline pure CSS for GPU-accelerated smooth marquee */}
      <style>{`
        @keyframes ultra-slow-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .gpu-marquee-slow {
          /* A long duration combined with optimized distance creates an ultra-slow, premium glide */
          animation: ultra-slow-marquee 80s linear infinite;
          will-change: transform;
        }
      `}</style>
      
      {/* Decorative gradient edges to fade the marquee in/out smoothly */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <div className="flex items-center whitespace-nowrap w-max gpu-marquee-slow">
          {duplicatedPhrases.map((phrase, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tighter uppercase px-6 md:px-12 transition-colors hover:text-[#E32620]">
                {phrase}
              </span>
              <span className="text-[#E32620] text-3xl md:text-4xl opacity-80">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
