"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INDUSTRIES = [
  {
    id: "01",
    name: "Healthcare",
    description: "Digital healthcare solutions, hospital websites, appointment systems, and patient management.",
    projects: "120+",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Real Estate",
    description: "Property websites, CRM systems, lead generation, and marketing automation.",
    projects: "85+",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Education",
    description: "LMS platforms, coaching websites, ERP solutions, and online learning systems.",
    projects: "60+",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Manufacturing",
    description: "Factory websites, ERP, inventory management, and industrial automation.",
    projects: "45+",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "E-Commerce",
    description: "Online stores, payment integration, product management, and growth marketing.",
    projects: "250+",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Finance & Banking",
    description: "FinTech platforms, secure applications, dashboards, and compliance solutions.",
    projects: "70+",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "07",
    name: "Hospitality",
    description: "Hotels, restaurants, booking platforms, and customer engagement systems.",
    projects: "90+",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "08",
    name: "Startups & Enterprises",
    description: "Branding, MVP development, SaaS platforms, AI solutions, and business automation.",
    projects: "140+",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&auto=format&fit=crop"
  }
];

export function IndustryExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = INDUSTRIES[activeIndex];

  return (
    <section className="py-22 bg-white text-black relative">
      <div className="container mx-auto px-6">
        {/* Header Content as per prompt */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-4"
          >
            Industry Expertise
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="homepage-section-title"
          >
            Expertise that Powers <br />
            <span>Every Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--color-secondary)] mt-6 max-w-2xl"
          >
            We help businesses across diverse industries with tailored digital solutions, strategic branding, scalable software, AI automation, and performance-driven marketing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Left Side: Sticky Image and Details */}
          <div className="lg:col-span-5 lg:sticky top-32 hidden lg:block h-[75vh]">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl border border-black/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndustry.id}
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeIndustry.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[var(--color-accent)] font-mono text-sm tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        [{activeIndustry.id}]
                      </span>
                      <span className="font-semibold tracking-wide text-lg">
                        {activeIndustry.projects} Completed Projects
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold font-heading mb-3">{activeIndustry.name}</h3>
                    <p className="text-white/80 max-w-sm">{activeIndustry.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Vertical List */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4">
            {INDUSTRIES.map((industry, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={industry.id}
                  className="group relative border-t border-black/10 last:border-b py-8 md:py-10 cursor-pointer overflow-hidden transition-colors"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                    
                    <div className="flex items-start md:items-center gap-6 md:gap-10">
                      <span 
                        className={`text-xl md:text-2xl font-mono font-medium transition-colors duration-300 ${isActive ? "text-[var(--color-accent)]" : "text-black/30 group-hover:text-black/50"}`}
                      >
                        [{industry.id}]
                      </span>
                      
                      <div>
                        <h3 
                          className={`text-3xl md:text-5xl font-bold font-heading transition-all duration-300 ${isActive ? "text-black" : "text-black/40 group-hover:text-black/70"}`}
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
                          <img 
                            src={industry.image} 
                            alt={industry.name}
                            className="w-full h-60 object-cover rounded-xl shadow-md border border-black/5"
                          />
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
                        className="w-40 h-24 rounded-lg overflow-hidden shadow-lg border border-black/5"
                      >
                        <img 
                          src={industry.thumb} 
                          alt={industry.name}
                          className="w-full h-full object-cover"
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
