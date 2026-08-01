"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Industry {
  name: string;
  img: string;
}

const industries: Industry[] = [
  {
    name: "Food & Beverage",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Jewellery",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Cosmetics & Beauty",
    img: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Fashion",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "FMCG",
    img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "E-commerce",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Luxury Products",
    img: "https://images.unsplash.com/photo-1614859324967-bdf461fec769?q=80&w=500&auto=format&fit=crop"
  }
];

export default function PackagingIndustries() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Title */}
        <div className="mb-16">
          <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Markets</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mt-4">
            PACKAGING FOR EVERY INDUSTRY.
          </h2>
        </div>

        {/* Side by side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          
          {/* LEFT: Text list */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-2">
            {industries.map((ind, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={ind.name}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="group py-4 border-b border-zinc-200 cursor-pointer flex items-center justify-between"
                >
                  <h3 
                    className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tighter transition-all duration-300 ${
                      isHovered ? "text-[#fd2e35] translate-x-2" : "text-zinc-400 group-hover:text-zinc-800"
                    }`}
                  >
                    {ind.name}
                  </h3>
                  <span className={`text-xs font-mono font-bold tracking-widest transition-opacity duration-300 ${isHovered ? "opacity-100 text-[#fd2e35]" : "opacity-0"}`}>
                    MARKET SELECT &bull;
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Image Box */}
          <div className="hidden lg:block lg:col-span-5 sticky top-36 h-[480px] rounded-[2.5rem] overflow-hidden bg-white border border-zinc-200/50 shadow-xl shadow-black/5">
            <div className="w-full h-full relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredIdx}
                  src={industries[hoveredIdx].img}
                  alt={industries[hoveredIdx].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
