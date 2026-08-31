"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingPerformance() {
  const capabilities = [
    "Brand Strategy",
    "Structural Direction",
    "Dieline Design",
    "Typography",
    "Print Production",
    "Material Guidance"
  ];

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Large Packaging Lifestyle/Production Scene */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-black/5 aspect-[4/3] sm:aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop" 
              alt="Premium packaging materials and lifestyle layout" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* RIGHT: Large typography and capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 flex flex-col items-start gap-8"
          >
            <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Performance</span>
            
            <h2 className="font-heading text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight mb-5">
              Designed for<br />
              the shelf.<br />
              built for<br />
              the brand.
            </h2>

            <p className="text-zinc-600 max-w-[32em] text-[18px] font-semibold leading-[1.5] tracking-normal">
              Every detail &mdash; from typography and color to materials and structure &mdash; is considered to create packaging that feels intentional, memorable, and ready for the real world.
            </p>

            {/* Capability Pills */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="text-xs font-bold tracking-wider text-zinc-800 uppercase px-5 py-2.5 rounded-full bg-white border border-zinc-200 shadow-sm"
                >
                  {capability}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
