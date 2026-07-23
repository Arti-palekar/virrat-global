"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    damping: 60,
    stiffness: 100,
    mass: 1,
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <span ref={ref} className="inline-flex items-center">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 600, prefix: "", suffix: "+", label: "Projects Completed", id: "01" },
  { value: 98, prefix: "", suffix: "%", label: "Client Retention Rate", id: "02" },
  { value: 12, prefix: "", suffix: "", label: "Countries Served", id: "03" },
];

export function Statistics() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Label */}
          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-lg leading-none pb-0.5">
                +
              </span>
              Our Impact
            </div>
          </div>
          
          {/* Right Column: Heading, Description & Cards */}
          <div className="lg:col-span-9">
            
            {/* Top Area: Heading & Description */}
            <div className="mb-20">
              <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="homepage-section-title"
            >
              Delivering Results That Drive <br />
              <span>Business Growth.</span>
            </motion.h2>
            
            <div className="ml-auto w-full md:w-3/4 lg:w-2/3 xl:w-3/5">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8"
              >
                From startups to enterprises, we help businesses build scalable digital experiences that generate measurable growth, stronger customer engagement, and long-term success.
              </motion.p>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                href="#" 
                className="inline-flex items-center text-black font-semibold text-lg border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Explore Our Success
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
              </div>
            </div>

            {/* Bottom Area: Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02, 
                    boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.08)" 
                  }}
                  className="bg-white rounded-[24px] border border-gray-200 flex flex-col text-left transition-all duration-300"
                >
                  {/* Top Half: Number & ID */}
                  <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-start">
                    <div className="text-4xl xl:text-[42px] font-bold font-heading text-black tracking-tight leading-none">
                      <Counter 
                        value={stat.value} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix} 
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-400 leading-none">{stat.id}</span>
                  </div>
                  
                  {/* Bottom Half: Description */}
                  <div className="p-6 md:p-8 flex-grow">
                    <p className="text-gray-800 font-medium text-base md:text-lg leading-snug">
                      {stat.label.split(" ").map((word, i, arr) => (
                        <span key={i}>
                          {word}
                          {/* Optional: Add a line break for specific long labels to match aesthetic */}
                          {i !== arr.length - 1 && " "}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
