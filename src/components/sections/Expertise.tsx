"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SERVICES = [
  {
    id: "01",
    title: "Branding & Print",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    description: "We define your market position and visualize your identity. From foundational strategy to logo design.",
    tags: ["Logo Design", "Brand Identity", "Print Media"]
  },
  {
    id: "02",
    title: "Web Dev & UI/UX",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    description: "Fast, scalable, and intuitive digital platforms. We design and engineer websites that convert.",
    tags: ["Website Development", "UI/UX Design", "Web Applications"]
  },
  {
    id: "03",
    title: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Data-driven campaigns built for ROI. We leverage SEO, paid acquisition, and content marketing.",
    tags: ["SEO", "Google Ads", "Social Media"]
  },
  {
    id: "04",
    title: "Video Production",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    description: "Visual storytelling that moves the needle. Corporate videos, commercials, and 3D animations.",
    tags: ["Video Editing", "Motion Graphics", "3D Animation"]
  },
  {
    id: "05",
    title: "Corporate Gifting",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
    description: "Physical touchpoints that leave a lasting impression. Premium custom apparel and merchandise.",
    tags: ["Corporate Gifts", "Promotional Items", "Custom Merchandise"]
  },
  {
    id: "06",
    title: "Business Licensing",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    description: "Navigate compliance without the headache. Company registration, trademarking, and certifications.",
    tags: ["Company Registration", "Trademark", "Certifications"]
  }
];

export function Expertise() {
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
              OUR CAPABILITIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="homepage-section-title dark-theme"
            >
              Expertise that<br /><span>drives growth.</span>
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
              We bring clarity to the chaos of growth. Whether launching a new product or repositioning a legacy company, we act as an extension of your team.
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
