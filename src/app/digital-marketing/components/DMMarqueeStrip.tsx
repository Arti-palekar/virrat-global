"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  { highlight: "RESULTS", text: "THAT GROW" },
  { highlight: "BRANDS", text: "THAT CONVERT" },
  { highlight: "SEO", text: "THAT RANKS" },
  { highlight: "ADS", text: "THAT SELL" },
  { highlight: "SOCIAL", text: "MEDIA THAT ENGAGES" },
  { highlight: "LEADS", text: "THAT SCALE" },
  { highlight: "DIGITAL MARKETING", text: "THAT DELIVERS" },
];

export default function DMMarqueeStrip() {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the array for seamless infinite marquee loop
  const marqueeItems = [...PHRASES, ...PHRASES, ...PHRASES];

  return (
    <section
      aria-label="Editorial Digital Marketing Marquee"
      className="w-full bg-white border-y border-[#EBEBEB] h-[100px] md:h-[120px] overflow-hidden select-none flex items-center"
    >
      <div
        className="w-full overflow-hidden relative flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-33.333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center gap-10 md:gap-16 w-max whitespace-nowrap"
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-10 md:gap-16 shrink-0">
              <span className="text-[42px] sm:text-[58px] lg:text-[72px] font-black font-heading tracking-tighter text-[#111111] uppercase leading-none">
                <span className="text-[#D62020] mr-2 md:mr-3">{item.highlight}</span>
                {item.text}
              </span>
              <span className="text-[#D62020] text-[24px] sm:text-[32px] md:text-[38px] font-mono leading-none select-none">
                ◆
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
