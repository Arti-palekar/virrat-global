"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AiAutomationMetrics() {
  const metrics = [
    { value: "75%", label: "FASTER PROCESSING" },
    { value: "100%", label: "DATA ACCURACY" },
    { value: "3x", label: "ROI IN YEAR 1" },
    { value: "24/7", label: "CONTINUOUS OPERATION" }
  ];

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-black/5 aspect-[4/3] sm:aspect-square"
          >
            <img 
              src="/images/ai/ai_workflow_1786340682075.png" 
              alt="Business Impact of AI" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* RIGHT: Typography and Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 flex flex-col items-start gap-8"
          >
            <span className="text-[#E32620] text-[10px] font-bold tracking-[0.3em] uppercase">BUSINESS IMPACT</span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tighter leading-[1.05] text-[#111111] uppercase">
              MEASURABLE<br />
              RESULTS.<br />
              SCALABLE<br />
              IMPACT.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed max-w-[32em]">
              AI and automation shouldn't just be an experiment. We build systems designed to dramatically reduce costs, eliminate bottlenecks, and accelerate growth.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 mt-4 w-full">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col bg-white border border-zinc-200 shadow-sm rounded-2xl p-6">
                  <span className="text-3xl sm:text-4xl font-heading font-black text-[#111111] tracking-tighter mb-1">
                    {metric.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#E32620] uppercase">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
