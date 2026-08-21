"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const INDUSTRIES = [
  {
    id: "01",
    name: "Healthcare & Medical",
    description: "Digital healthcare solutions, hospital websites, appointment systems, patient management.",
    projects: "120+",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Real Estate & Infrastructure",
    description: "Property portals, builder websites, CRM, lead management.",
    projects: "85+",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Education & E-Learning",
    description: "LMS platforms, student portals, online learning systems.",
    projects: "60+",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Food & Beverage",
    description: "Restaurant websites, QR ordering, food delivery systems.",
    projects: "90+",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "Jewelry & Precious Metals",
    description: "Jewellery ecommerce, catalog websites, ERP integration.",
    projects: "50+",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Financial Services & FinTech",
    description: "Loan platforms, finance dashboards, payment integrations.",
    projects: "70+",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "07",
    name: "Fashion & Apparel",
    description: "Fashion ecommerce, catalog management, branding.",
    projects: "110+",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "08",
    name: "Sports & Entertainment",
    description: "Sports management platforms, ticketing systems, event websites.",
    projects: "40+",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=200&auto=format&fit=crop"
  }
];

export function IndustryExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = INDUSTRIES[activeIndex];

  return (
    <section className="py-22 bg-[#f8f7f5] text-black relative">
      <div className="container mx-auto px-6">
        {/* Header Content as per prompt */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-3"
          >
            INDUSTRY EXPERTISE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bold font-heading text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight text-black mb-4"
          >
            Expertise that Powers <br />
            <span className="text-[#D62020]">Every Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-secondary)] mt-4 max-w-xl"
          >
            We help businesses across diverse industries with tailored digital solutions, strategic branding, scalable software, AI automation, and performance-driven marketing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Side: Sticky Image and Details */}
          <div className="lg:col-span-5 lg:sticky top-28 hidden lg:block h-[60vh]">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100 shadow-xl border border-black/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                    className="object-cover"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeIndustry.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-[var(--color-accent)] font-mono text-xs tracking-widest bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        [{activeIndustry.id}]
                      </span>
                      <span className="font-semibold tracking-wide text-sm">
                        {activeIndustry.projects} Completed Projects
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold font-heading mb-2 !text-white">{activeIndustry.name}</h3>
                    <p className="!text-white/80 text-sm max-w-sm">{activeIndustry.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Vertical List */}
          <div className="lg:col-span-7 flex flex-col justify-center py-2">
            {INDUSTRIES.map((industry, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={industry.id}
                  className="group relative border-t border-black/10 last:border-b py-6 md:py-8 cursor-pointer overflow-hidden transition-colors"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-10">
                    
                    <div className="flex items-start md:items-center gap-5 md:gap-8">
                      <span 
                        className={`text-lg md:text-xl font-mono font-medium transition-colors duration-300 ${isActive ? "text-[var(--color-accent)]" : "text-black/30 group-hover:text-black/50"}`}
                      >
                        [{industry.id}]
                      </span>
                      
                      <div>
                        <h3 
                          className={`text-2xl md:text-[38px] font-bold font-heading transition-all duration-300 ${isActive ? "text-black" : "text-black/40 group-hover:text-black/70"}`}
                        >
                          {industry.name}
                        </h3>
                        
                        {/* Mobile Description & Image (Revealed when active) */}
                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 16 : 0 }}
                          className="overflow-hidden lg:hidden"
                        >
                          <p className="text-[var(--color-secondary)] mb-6 text-base">
                            {industry.description}
                          </p>
                          <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-md border border-black/5">
                            <Image 
                              src={industry.image} 
                              alt={industry.name}
                              fill
                              sizes="100vw"
                              loading="lazy"
                              className="object-cover"
                            />
                          </div>
                        </motion.div>

                        {/* Desktop Description (Revealed when active) */}
                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
                          className="overflow-hidden hidden lg:block"
                        >
                          <p className="text-[var(--color-secondary)] text-lg max-w-md">
                            {industry.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Desktop Thumbnail */}
                    <div className="hidden lg:block shrink-0">
                      <motion.div
                        animate={{ 
                          scale: isActive ? 1 : 0.95,
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : 20
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-40 h-24 rounded-lg overflow-hidden shadow-lg border border-black/5"
                      >
                        <Image 
                          src={industry.thumb} 
                          alt={industry.name}
                          fill
                          sizes="160px"
                          loading="lazy"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Subtle hover background highlight */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    className="absolute inset-0 bg-gray-50/80 -z-0 pointer-events-none rounded-xl mx-[-16px] px-[16px]"
                  />
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertise;
