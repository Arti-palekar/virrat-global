"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface IndustryItem {
  name: string;
  image: string;
}

const industries: IndustryItem[] = [
  {
    name: "Corporate & Tech Hubs",
    image: "/images/services/corporate-merchandise.webp"
  },
  {
    name: "E-Commerce Brands",
    image: "/images/services/picks_pink.png"
  },
  {
    name: "Events & Conferences",
    image: "/images/services/id-cards.webp"
  },
  {
    name: "Education & Universities",
    image: "/images/services/picks_pouch.png"
  },
  {
    name: "Banking & Financial Services",
    image: "/images/services/corporate-stationery.webp"
  },
  {
    name: "Healthcare & Wellness",
    image: "/images/services/picks_jar.png"
  },
  {
    name: "Real Estate & Construction",
    image: "/images/services/picks_box.png"
  },
  {
    name: "Hospitality & Restaurants",
    image: "/images/services/picks_bottle.png"
  }
];

const duplicatedIndustries = [...industries, ...industries];

export default function MerchandiseIndustries() {
  const [isPaused, setIsPaused] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#111111] pt-20 pb-16 overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-[1400px] mx-auto px-6 relative z-30 flex flex-col items-center">

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#111111] uppercase leading-none max-w-2xl"
        >
          INDUSTRIES WE BRAND FOR
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-sm md:text-base text-zinc-500 leading-relaxed"
        >
          Custom corporate swag and welcome kit packaging solutions tailored for every domain.
        </motion.p>
      </div>

      {/* Infinite Horizontal Scrolling Slider */}
      <div 
        className="w-full relative mt-16 z-20 cursor-default"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full overflow-hidden flex relative">
          <div 
            className="flex gap-6 items-center whitespace-nowrap will-change-transform animate-infinite-scroll"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content"
            }}
          >
            {duplicatedIndustries.map((industry, index) => (
              <div 
                key={`${industry.name}-${index}`}
                className="flex-shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[360px] rounded-[28px] overflow-hidden relative group bg-zinc-50 border border-zinc-200/50 shadow-sm"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                  <h3 className="text-white text-lg md:text-xl font-heading font-bold uppercase leading-none tracking-tight">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
