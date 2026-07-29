"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Feather,
  Sparkles,
  CreditCard,
  BookOpen,
  FileText,
  Package,
  Tag,
  PenTool,
  Layers,
  Presentation,
  Image as ImageIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";

// 12 Branding & Printing Services data with premium local assets
const services = [
  {
    id: 1,
    title: "Logo Design",
    mockup: "Logo Presentation",
    image: "/images/services/logo-design.webp",
    icon: Feather,
  },
  {
    id: 2,
    title: "Brand Identity",
    mockup: "Business Card Mockup",
    image: "/images/services/brand-identity.webp",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Business Cards",
    mockup: "Packaging Box",
    image: "/images/services/business-cards.webp",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Brochure Design",
    mockup: "Shopping Bag Branding",
    image: "/images/services/brochure.webp",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Flyer Design",
    mockup: "Product Label",
    image: "/images/services/flyer-poster.webp",
    icon: FileText,
  },
  {
    id: 6,
    title: "Packaging Design",
    mockup: "Brochure",
    image: "/images/services/packaging.webp",
    icon: Package,
  },
  {
    id: 7,
    title: "Product Labels",
    mockup: "Flyer",
    image: "/images/services/id-cards.webp",
    icon: Tag,
  },
  {
    id: 8,
    title: "Corporate Stationery",
    mockup: "Corporate Identity",
    image: "/images/services/corporate-stationery.webp",
    icon: PenTool,
  },
  {
    id: 9,
    title: "Catalogue Design",
    mockup: "Letterhead",
    image: "/images/services/corporate-merchandise.webp",
    icon: Layers,
  },
  {
    id: 10,
    title: "Roll-up Standee",
    mockup: "Catalogue",
    image: "/images/services/shop-signage.webp",
    icon: Presentation,
  },
  {
    id: 11,
    title: "Banner & Flex",
    mockup: "Roll-up Banner",
    image: "/images/services/billboard.webp",
    icon: ImageIcon,
  },
  {
    id: 12,
    title: "Social Media Creatives",
    mockup: "Store Branding",
    image: "/images/services/vehicle-branding.webp",
    icon: Share2,
  },
];

export function BrandingShowcase() {
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Desktop active slice (5 items at a time)
  const visibleServices = services.slice(startIndex, startIndex + 5);

  // Auto-play cycle through all 12 services
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveVirtualIndex((prev) => {
        const nextIndex = (prev + 1) % services.length;
        
        // Auto-scroll the sliding window to keep the active item visible
        if (nextIndex < startIndex || nextIndex >= startIndex + 5) {
          if (nextIndex === 0) {
            setStartIndex(0);
          } else if (nextIndex >= startIndex + 5) {
            setStartIndex(Math.min(services.length - 5, nextIndex - 4));
          } else if (nextIndex < startIndex) {
            setStartIndex(Math.max(0, nextIndex));
          }
        }
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, startIndex]);

  // Adjust start index and keep active virtual index in window bounds
  const updateWindow = (newStart: number) => {
    const clampedStart = Math.max(0, Math.min(services.length - 5, newStart));
    setStartIndex(clampedStart);
    
    // Push active virtual index into the new visible range if it falls outside
    if (activeVirtualIndex < clampedStart) {
      setActiveVirtualIndex(clampedStart);
    } else if (activeVirtualIndex >= clampedStart + 5) {
      setActiveVirtualIndex(clampedStart + 4);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      updateWindow(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < services.length - 5) {
      updateWindow(startIndex + 1);
    }
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 md:py-24 overflow-hidden z-10 border-b border-neutral-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16 min-h-[500px]">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center py-4 lg:py-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-[46px] font-bold text-[#111111] leading-[1.1] tracking-tight font-heading"
            >
              Transform Your Brand with Creative Branding & Printing Solutions
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] md:text-[17px] text-[#666666] leading-relaxed max-w-[480px] font-body"
            >
              From logo design and brand identity to premium printing and marketing materials, we create impactful branding experiences that help businesses stand out and build lasting customer trust.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <Link
                href="/portfolio"
                className="relative inline-flex items-center gap-3 bg-[#111111] !text-white hover:bg-[#D62020] hover:!text-white font-semibold text-[14px] tracking-wide px-8 py-4 rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg hover:shadow-red-600/10 active:scale-[0.98]"
                style={{ color: "#FFFFFF" }}
              >
                <span style={{ color: "#FFFFFF" }}>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#FFFFFF" }} />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Showcase Accordion (Desktop View) */}
          <div 
            className="hidden md:flex w-full lg:w-[60%] flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Header controls above accordion */}
            <div className="flex items-center justify-end mb-6 px-2">
              <div className="flex items-center gap-4">
                {/* Pagination */}
                <span className="text-sm font-mono font-medium text-[#111111] tabular-nums">
                  {String(activeVirtualIndex + 1).padStart(2, "0")} <span className="text-neutral-300 mx-1">/</span> {String(services.length).padStart(2, "0")}
                </span>
                {/* Nav buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      startIndex === 0
                        ? "border-neutral-100 text-neutral-300 cursor-not-allowed"
                        : "border-neutral-200 text-neutral-600 hover:bg-[#D62020] hover:text-white hover:border-[#D62020] active:scale-95"
                    }`}
                    aria-label="Previous services"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={startIndex === services.length - 5}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      startIndex === services.length - 5
                        ? "border-neutral-100 text-neutral-300 cursor-not-allowed"
                        : "border-neutral-200 text-neutral-600 hover:bg-[#D62020] hover:text-white hover:border-[#D62020] active:scale-95"
                    }`}
                    aria-label="Next services"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Flex Accordion Cards */}
            <div 
              ref={containerRef}
              className="flex flex-row items-center justify-between gap-4 h-[460px] w-full"
            >
              {visibleServices.map((service, index) => {
                const virtualIndex = startIndex + index;
                const isActive = virtualIndex === activeVirtualIndex;
                const IconComponent = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    layout={!shouldReduceMotion ? "position" : false}
                    animate={{
                      flexGrow: isActive ? 3.0 : 0.75,
                      height: 460,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 24,
                      mass: 0.8,
                    }}
                    className={`relative rounded-3xl overflow-hidden cursor-pointer shrink-0 transition-shadow duration-300 select-none group/card ${
                      isActive ? "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]" : "hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
                    }`}
                    onClick={() => setActiveVirtualIndex(virtualIndex)}
                    onMouseEnter={() => setActiveVirtualIndex(virtualIndex)}
                  >
                    {/* Background image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? "scale-105" : "scale-100 group-hover/card:scale-102"
                      }`}
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        isActive 
                          ? "bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-100" 
                          : "bg-black/55 group-hover/card:bg-black/45"
                      }`} 
                    />

                    {/* Border highlight for active state */}
                    {isActive && (
                      <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                    )}

                    {/* Content Layer */}
                    <div className="absolute inset-0 flex flex-col justify-end w-full h-full p-6 z-10 pointer-events-none overflow-hidden">
                      {isActive ? (
                        // Active Card Content
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                          className="flex flex-col items-center justify-end text-center w-full pb-4"
                        >
                          {/* Circular glassmorphic badge */}
                          <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/card:bg-white/20 group-hover/card:border-white/30">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-white font-heading font-bold text-2xl uppercase tracking-wide leading-tight">
                            {service.title}
                          </h3>
                          <span className="text-white/60 font-body text-xs font-semibold tracking-widest uppercase mt-2">
                            {service.mockup}
                          </span>
                        </motion.div>
                      ) : (
                        // Inactive Card Content
                        <div 
                          className="flex flex-col items-center justify-end w-full h-full pb-8"
                        >
                          <span 
                            className="text-white/80 font-heading font-semibold text-[13px] tracking-[0.16em] uppercase whitespace-nowrap select-none"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                          >
                            {service.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Vertical Accordion (Mobile View) */}
          <div className="flex md:hidden w-full flex-col gap-4">
            {services.map((service, index) => {
              const isActive = index === activeVirtualIndex;
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.id}
                  layout={!shouldReduceMotion}
                  animate={{
                    height: isActive ? 280 : 64,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                  }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer w-full group/mobile shadow-[0_4px_10px_rgba(0,0,0,0.02)] ${
                    isActive ? "shadow-[0_10px_20px_rgba(0,0,0,0.15)]" : ""
                  }`}
                  onClick={() => setActiveVirtualIndex(index)}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive ? "bg-gradient-to-t from-black/85 via-black/25 to-transparent" : "bg-black/60"
                    }`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-6 z-10 pointer-events-none">
                    {isActive ? (
                      // Expanded mobile view
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-start justify-end h-full pb-6"
                      >
                        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-3">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide">
                          {service.title}
                        </h3>
                        <span className="text-white/60 font-body text-xs font-semibold tracking-wider uppercase mt-1">
                          {service.mockup}
                        </span>
                      </motion.div>
                    ) : (
                      // Collapsed mobile row
                      <div className="flex items-center justify-between w-full">
                        <span className="text-white font-heading font-semibold text-sm uppercase tracking-wider">
                          {service.title}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                          <IconComponent className="w-3.5 h-3.5 text-white/80" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandingShowcase;
