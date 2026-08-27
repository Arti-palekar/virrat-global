'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const industries: IndustryItem[] = [
  {
    id: '01',
    title: 'FOOD & BEVERAGE INDUSTRY',
    description: 'Innovative digital solutions for the food & beverage industry that drive engagement and growth.',
    href: '#'
  },
  {
    id: '02',
    title: 'JEWELRY & PRECIOUS METALS',
    description: 'Premium digital experiences for jewelry brands crafted to showcase elegance and build trust.',
    href: '#'
  },
  {
    id: '03',
    title: 'HEALTHCARE & MEDICAL SERVICES',
    description: 'Technology-driven solutions for healthcare that improve care, communication, and patient outcomes.',
    href: '#'
  },
  {
    id: '04',
    title: 'FASHION & APPAREL',
    description: 'Creative digital experiences for fashion brands that inspire, engage, and convert.',
    href: '#'
  },
  {
    id: '05',
    title: 'SPORTS & ENTERTAINMENT',
    description: 'Engaging digital platforms for sports and entertainment that connect fans and elevate experiences.',
    href: '#'
  },
  {
    id: '06',
    title: 'FINANCIAL SERVICES & FINTECH',
    description: 'Secure, scalable digital solutions for financial services and fintech companies.',
    href: '#'
  },
  {
    id: '07',
    title: 'EDUCATION & E-LEARNING',
    description: 'Modern digital learning solutions that empower educators and inspire learners.',
    href: '#'
  },
  {
    id: '08',
    title: 'REAL ESTATE & INFRASTRUCTURE',
    description: 'Digital solutions for real estate and infrastructure that build stronger connections and smarter communities.',
    href: '#'
  }
];

export function IndustryGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#FAF9F6] py-20 md:py-28 relative z-10 w-full">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-[54px] font-extrabold text-black text-center mb-16 md:mb-24 tracking-tight">
          INDUSTRIES
        </h2>
        
        <div className="flex flex-col w-full border-t border-black/10">
          {industries.map((industry, index) => (
            <a 
              key={industry.id} 
              href={industry.href}
              className="flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-black/10"
            >
              <div className="md:w-40 flex-shrink-0 mb-4 md:mb-0">
                <motion.span 
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: shouldReduceMotion ? 0 : index * 0.12, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="text-[#D62020] text-7xl md:text-[90px] font-black tracking-tighter leading-none block"
                >
                  {industry.id}
                </motion.span>
              </div>
              <div className="flex-1 md:pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 uppercase tracking-wide">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryGrid;
