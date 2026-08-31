"use client";

import React, { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Dedicated Experts',
    imageUrl: '/images/services/experts-workspace.png',
  },
  {
    id: 2,
    title: 'Fast Delivery',
    imageUrl: '/images/services/fast-delivery.png',
  },
  {
    id: 3,
    title: 'AI-Powered Tech',
    imageUrl: '/images/services/ai-tech.png',
  },
  {
    id: 4,
    title: 'Custom Solutions',
    imageUrl: '/images/services/custom-solutions.png',
  },
  {
    id: 5,
    title: 'Enterprise Support',
    imageUrl: '/images/services/enterprise-support.png',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: any, isActive: boolean, onMouseEnter: () => void }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out bg-black
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isActive ? 'opacity-100 scale-100 grayscale-0' : 'opacity-80 scale-110 grayscale'
        }`}
      />
      {/* Dark overlay for better text readability and inactive state darkening */}
      <div 
        className={`absolute inset-0 transition-colors duration-700 ease-in-out ${
          isActive ? 'bg-black/40' : 'bg-black/70'
        }`}
      ></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main App Component ---
export function LandingAccordion() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#f8f7f5] font-sans">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#D62020] mb-3 inline-block">
              WHY VIRRAT GLOBAL
            </span>
            <h1 className="font-bold font-heading text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight text-black mb-5">
              Why Businesses Choose <span className="text-[#D62020]">Virrat Global</span>
            </h1>
            <p className="mt-6 text-lg text-[#666] max-w-xl mx-auto md:mx-0">
              Discover why ambitious startups, SMEs, and enterprises trust Virrat Global to build high-performance products and drive measurable revenue growth.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-black !text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#D62020] transition-colors duration-300"
                style={{ color: '#FFFFFF' }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
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

export default LandingAccordion;
