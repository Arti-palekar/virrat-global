"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "Logo Design",
    image: "/portfolio/portfolio_logo_branding_1784618160119.png",
    description: "Create memorable and timeless logos that define your brand identity — from monogram marks and wordmarks to complete icon systems.",
    tags: ["Custom Logos", "Monogram Marks", "Brand Icons"],
  },
  {
    id: "02",
    title: "Brand Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=85",
    description: "Complete visual identity including color systems, typography, stationery, and brand guidelines that keep every touchpoint consistent.",
    tags: ["Color Systems", "Typography", "Brand Guidelines"],
  },
  {
    id: "03",
    title: "Packaging Design",
    image: "/portfolio/portfolio_luxury_packaging_1784618217548.png",
    description: "Premium packaging solutions that enhance product presentation, communicate quality, and deliver an unforgettable unboxing experience.",
    tags: ["Luxury Boxes", "Cosmetic Packaging", "Unboxing Design"],
  },
  {
    id: "04",
    title: "Print Design",
    image: "/portfolio/portfolio_business_cards_1784618183141.png",
    description: "Business cards, brochures, flyers, catalogues, labels, and all marketing print materials crafted to impress and convert.",
    tags: ["Business Cards", "Brochures & Flyers", "Product Labels"],
  },
  {
    id: "05",
    title: "Signage & Brand Collateral",
    image: "https://images.unsplash.com/photo-1519444656952-ded4fa6fb941?w=800&q=85",
    description: "Indoor and outdoor signage, exhibition branding, vehicle graphics, branded merchandise, and promotional materials that extend your brand everywhere.",
    tags: ["Shop Signage", "Vehicle Branding", "Branded Merch"],
  },
];

export default function BPExpertise() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        
        {/* Top Header Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 lg:mb-32">
          {/* Left Side: Heading */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="homepage-section-tag dark-theme"
            >
              OUR EXPERTISE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="homepage-section-title dark-theme"
            >
              Branding Expertise<br /><span>That Builds Recognition.</span>
            </motion.h2>
          </div>
          
          {/* Right Side: Description & Button */}
          <div className="lg:col-span-5 lg:col-start-8 xl:col-start-8 flex flex-col justify-end items-start lg:items-start lg:pl-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              We create powerful brand identities and premium print solutions that help businesses stand out and leave a lasting impression.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-colors duration-300 flex items-center group"
            >
              View All Services
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.button>
          </div>
        </div>

        {/* Accordion Area */}
        <div className="border-t border-white/10">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={service.id} className="border-b border-white/10">
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-8 md:py-10 flex items-center group focus:outline-none"
                >
                  <span className="text-sm md:text-base font-semibold text-white/50 w-16 md:w-24 text-left font-mono">
                    ({service.id})
                  </span>
                  
                  <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold flex-grow text-left transition-colors duration-300 group-hover:text-white/80">
                    {service.title}
                  </span>
                  
                  <span className="ml-4 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/60">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-4 h-4 flex items-center justify-center"
                    >
                      {/* Horizontal Line (-) */}
                      <span className="absolute w-full h-[2px] bg-white rounded-full"></span>
                      {/* Vertical Line (|) */}
                      <motion.span 
                        animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-[2px] h-full bg-white rounded-full"
                      ></motion.span>
                    </motion.div>
                  </span>
                </button>

                {/* Accordion Expanded Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-16 md:pl-24 pr-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                          
                          {/* Image Column */}
                          <div className="lg:col-span-5 xl:col-span-4">
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
                            >
                              <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          </div>
                          
                          {/* Description Column */}
                          <div className="lg:col-span-4 xl:col-span-4 flex items-center">
                            <motion.p 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-white/60 text-lg leading-relaxed"
                            >
                              {service.description}
                            </motion.p>
                          </div>
                          
                          {/* Tags Column */}
                          <div className="lg:col-span-3 xl:col-span-4 flex flex-col justify-center gap-3 items-start">
                            {service.tags.map((tag, i) => (
                              <motion.div
                                key={tag}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                className="px-6 py-2.5 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors cursor-default"
                              >
                                {tag}
                              </motion.div>
                            ))}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
