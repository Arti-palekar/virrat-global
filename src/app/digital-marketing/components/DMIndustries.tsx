"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialIndustries = [
  {
    id: "finance",
    name: "Finance",
    imageUrl: "/images/industries/finance.jpg",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    imageUrl: "/images/industries/ecommerce.jpg",
  },
  {
    id: "education",
    name: "Education",
    imageUrl: "/images/industries/education.jpg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    imageUrl: "/images/industries/manufacturing.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    imageUrl: "/images/industries/healthcare.jpg",
  },
  {
    id: "realestate",
    name: "Real Estate",
    imageUrl: "/images/industries/realestate.jpg",
  },
  {
    id: "technology",
    name: "Technology",
    imageUrl: "/images/industries/technology.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    imageUrl: "/images/industries/hospitality.jpg",
  },
  {
    id: "fashion",
    name: "Fashion",
    imageUrl: "/images/industries/fashion.jpg",
  }
];

export default function DMIndustries() {
  const [items, setItems] = useState(initialIndustries);

  useEffect(() => {
    const timer = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 4000); // cycle every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAF9F6] flex flex-col overflow-hidden py-16 md:py-24 w-full">
      <div className="container mx-auto px-6 text-center relative z-10 mb-12">
        <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-[#E32620] mb-4 inline-block">
          INDUSTRIES WE BUILD FOR
        </span>
        <h2 
          className="text-4xl md:text-[54px] font-semibold tracking-[-0.025em] leading-[1.1] text-[#111111] mb-5"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Industries we <span className="text-[#E32620]">build for</span>
        </h2>
        <p 
          className="text-[18px] text-[#666666] leading-[1.67] mb-0 max-w-[720px] mx-auto"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          AI-powered automation solutions tailored to the unique needs of modern industries.
        </p>
      </div>

      <div className="w-full pl-6 md:pl-12 lg:pl-24 relative group/section overflow-hidden h-[400px] md:h-[500px]">
        <div className="flex gap-4 md:gap-6 h-full w-max">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const isActive = index === 0;
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    layout: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.3 }
                  }}
                  className={`relative rounded-3xl overflow-hidden shadow-sm h-full flex-shrink-0 ${
                    isActive 
                      ? "w-[85vw] md:w-[60vw] lg:w-[800px]" 
                      : "w-[40vw] md:w-[25vw] lg:w-[350px]"
                  }`}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" 
                  />
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  
                  {/* Industry Title */}
                  <div className="absolute inset-0 flex items-end p-6 md:p-10">
                    <h3 
                      className={`font-semibold tracking-[-0.025em] leading-[1.1] text-white transition-all duration-500 ${
                        isActive ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                      }`}
                      style={{ fontFamily: 'Sora, sans-serif', color: 'white' }}
                    >
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
