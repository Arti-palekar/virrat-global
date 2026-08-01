"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PackagingDeliverables() {
  const deliverables = [
    { title: "Packaging Concept", desc: "Initial aesthetic directions, mood boards, and shape geometries." },
    { title: "Dieline Design", desc: "Highly precise vector dielines containing fold, cut, and perforation indicators." },
    { title: "Print-Ready Artwork", desc: "Press-ready layouts aligned correctly with structural dielines." },
    { title: "CMYK Files", desc: "Fully color-profiled files calibrated for offset or digital printers." },
    { title: "Typography System", desc: "Consistent font hierarchies, styling, and text wraps." },
    { title: "Color Specifications", desc: "Pantone (PMS) and CMYK codes locked in for print consistency." },
    { title: "Material Recommendations", desc: "Expert guidance on paper stock weights, textures, cardboard options, and finishes." },
    { title: "Product Mockups", desc: "High-resolution 3D digital renders from multiple angles for visual checks." },
    { title: "Label Artwork", desc: "Standalone label designs for jars, tins, wrappers, or bottles." },
    { title: "Printer Coordination", desc: "Collaborating with your printer to verify technical compliance." }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 sticky top-36">
            <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Deliverables</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mt-4 max-w-[15ch] leading-[1.1]">
              EVERYTHING READY FOR PRODUCTION.
            </h2>
            <p className="text-base text-zinc-600 mt-6 leading-relaxed max-w-[32ch]">
              We compile and transfer files that are ready for immediate setup by manufacturers and commercial printing companies worldwide.
            </p>
          </div>

          {/* Right Column: Grid List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-100">
            {deliverables.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 first:pt-0 last:pb-0 items-start group"
              >
                {/* Icon Checkmark */}
                <div className="md:col-span-1 flex items-center md:justify-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-[#fd2e35] transition-colors group-hover:bg-[#fd2e35] group-hover:text-white group-hover:border-[#fd2e35]">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-11 space-y-1">
                  <h3 className="text-lg font-bold font-heading text-zinc-900 group-hover:text-[#fd2e35] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
