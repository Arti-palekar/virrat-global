"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IndustryItem {
  name: string;
  image: string;
  description: string;
}

const industries: IndustryItem[] = [
  {
    name: "Healthcare & Medical",
    image: "/images/services/picks_jar.png",
    description: "Clear, professional and trustworthy packaging designed for healthcare, medical, and wellness products."
  },
  {
    name: "Real Estate & Infrastructure",
    image: "/images/services/picks_arch.png",
    description: "Custom box solutions for architectural models, key presentation boxes, and premium property handover kits."
  },
  {
    name: "Education & E-Learning",
    image: "/images/services/picks_pouch.png",
    description: "Sturdy and creative package designs for educational kits, student onboarding boxes, and learning materials."
  },
  {
    name: "Food & Beverage",
    image: "/images/services/picks_bottle.png",
    description: "Packaging designed for shelf appeal, product freshness, compliance, and stronger brand recognition."
  },
  {
    name: "Jewelry & Precious Metals",
    image: "/images/services/luxury_box_portrait.png",
    description: "Elegant luxury packaging boxes designed to protect and present high-value jewelry and precious metals."
  },
  {
    name: "Financial Services & FinTech",
    image: "/images/services/picks_hand.png",
    description: "Sleek and secure unboxing designs for premium credit cards, welcome packs, and corporate client gifts."
  },
  {
    name: "Fashion & Apparel",
    image: "/images/services/picks_pink.png",
    description: "Premium retail boxes, garment bags, and tag designs that strengthen fashion product presentation."
  },
  {
    name: "Sports & Entertainment",
    image: "/images/services/picks_box.png",
    description: "Dynamic and protective packaging solutions for sports gear, merchandise, and fan memorabilia."
  }
];

// Duplicate the list to allow for a seamless infinite scroll loop
const duplicatedIndustries = [...industries, ...industries];

export default function PackagingIndustries() {
  const [isPaused, setIsPaused] = useState(false);

  // Animation variants for text items
  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#111111] pt-20 pb-20 overflow-hidden flex flex-col items-center text-center">
      {/* ── CENTRAL HEADER TEXT BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-30 flex flex-col items-center">

        {/* Main Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-black tracking-tight text-[#111111] uppercase leading-none max-w-2xl"
        >
          INDUSTRIES WE DESIGN FOR
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-sm md:text-base text-zinc-500 leading-relaxed"
        >
          Packaging solutions shaped around your product, market and customer.
        </motion.p>

        {/* Red Action Button */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-[#D62020] text-white font-bold text-sm tracking-wide shadow-md transition-colors hover:bg-[#b51b1b] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 cursor-pointer uppercase"
          >
            Explore Industries
          </motion.button>
        </motion.div>
      </div>

      {/* ── 35px - 50px CLEAR GAP ── */}
      <div className="h-8" /> {/* Clear visual gap in the 35px - 50px range */}

      {/* ── INFINITE MARQUEE SLIDER ── */}
      <div 
        className="w-full relative pt-6 pb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedIndustries.map((item, index) => {
            const isStaggered = index % 2 === 1;

            return (
              <div
                key={`${item.name}-${index}`}
                className={cn(
                  "relative w-[240px] flex flex-col items-center flex-shrink-0 transition-transform duration-300",
                  isStaggered ? "translate-y-8" : "translate-y-0"
                )}
              >
                {/* Packaging image container (Tilted/rotated) */}
                <div
                  className="relative w-[240px] h-[320px] rounded-[24px] overflow-hidden bg-white border border-zinc-100 shadow-md group transition-transform duration-300 hover:shadow-xl"
                  style={{
                    rotate: `${index % 2 === 0 ? -1.5 : 2.5}deg`
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-700"
                    draggable={false}
                  />
                </div>

                {/* Industry name below image (NOT rotated/tilted) */}
                <div className="mt-4 px-2 w-full text-center">
                  <p className="text-[15px] md:text-[16px] font-semibold text-[#171717] uppercase tracking-wider leading-[1.3] font-sans">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Spacer to absorb staggered lower cards spacing at the bottom */}
      <div className="h-8" />
    </section>
  );
}
