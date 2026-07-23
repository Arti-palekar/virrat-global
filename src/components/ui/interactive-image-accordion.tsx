"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: "Dedicated Experts",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fast Delivery",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI-Powered Tech",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Custom Solutions",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Enterprise Support",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
];

interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shrink-0
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[300px] sm:w-[360px] md:w-[380px] lg:w-[400px]" : "w-[60px] sm:w-[70px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
        }}
      />
      {/* Dark overlay for readability */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent" : "bg-black/55"}`}></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-6 text-xl md:text-2xl rotate-0 font-heading"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-sm opacity-80"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#f8f7f5] font-sans">
      <section className="container mx-auto px-4 py-16 md:py-28 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <span className="homepage-section-tag inline-block mb-3">
              WHY VIRRAT GLOBAL
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] font-heading leading-tight tracking-tight">
              Why Businesses Choose <br />
              <span className="text-[#D62020]">Virrat Global</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#666666] max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
              Discover why ambitious startups, SMEs, and enterprises trust Virrat Global to build high-performance digital products, automate workflows, and drive measurable revenue growth.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D62020] text-[#FFFFFF] hover:text-[#FFFFFF] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:bg-[#BF1A1A] transition-all duration-300 hover:shadow-red-600/30"
                style={{ color: "#FFFFFF" }}
              >
                CONTACT US <ArrowRight className="w-4 h-4 text-[#FFFFFF]" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full lg:w-7/12 overflow-hidden">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 overflow-x-auto p-2 scrollbar-none">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default LandingAccordionItem;
