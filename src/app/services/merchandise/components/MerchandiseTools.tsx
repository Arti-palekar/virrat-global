"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MerchandiseTools() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(6);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const gap = 16;

  const tools = [
    { 
      name: "Illustrator", 
      desc: "For apparel layouts, vector logo paths, precision placement grids, and print templates.", 
      image: "/images/services/branding_5.png" 
    },
    { 
      name: "Photoshop", 
      desc: "For custom item mockup composition, product textures, and photorealistic fabric finishes.", 
      image: "/images/services/picks_pink.png" 
    },
    { 
      name: "InDesign", 
      desc: "For comprehensive brand merchandise manuals, kit guidelines, and catalog spreads.", 
      image: "/images/services/brand-identity.webp" 
    },
    { 
      name: "Figma", 
      desc: "For collaborative curation, visual moodboards, feedback iterations, and clients presentations.", 
      image: "/images/services/picks_box.png" 
    },
    { 
      name: "Blender", 
      desc: "For rich 3D merchandise rendering, custom onboarding box simulations, and depth previews.", 
      image: "/images/services/picks_pouch.png" 
    },
    { 
      name: "Dimension", 
      desc: "For fast product mockup assemblies and placement previews across bottles, notebooks, and pens.", 
      image: "/images/services/picks_arch.png" 
    }
  ];

  const extendedTools = [...tools, ...tools, ...tools];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const slidePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= 12) {
      setIsTransitioning(false);
      setCurrentIndex(6);
    } else if (currentIndex <= 5) {
      setIsTransitioning(false);
      setCurrentIndex(11);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(slideNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, isPaused]);

  // Touch Drag / Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragOffsetX.current = 0;
    isDragging.current = true;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    dragOffsetX.current = currentX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);
    
    if (dragOffsetX.current < -50) {
      slideNext();
    } else if (dragOffsetX.current > 50) {
      slidePrev();
    }
  };

  return (
    <section 
      className="w-full bg-[#FAF9F6] text-[#111111] overflow-hidden select-none py-16 md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-16">
          <div>
            <span className="text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              CREATIVE BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter uppercase leading-none mb-5">
              TOOLS WE USE FOR<br />MERCHANDISE DESIGN
            </h2>
          </div>
          <div className="flex justify-between md:justify-end items-center gap-4">
            <p className="text-sm text-zinc-500 font-medium max-w-[28ch] hidden lg:block leading-relaxed">
              We leverage modern vector layouts, precision styling guides, and high-fidelity 3D modeling.
            </p>
            {/* Arrow Controls */}
            <div className="flex gap-2">
              <button 
                onClick={slidePrev}
                className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
                aria-label="Previous tools"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button 
                onClick={slideNext}
                className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
                aria-label="Next tools"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex will-change-transform"
            style={{
              width: "100%",
              transform: `translate3d(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (gap - (gap / visibleCards))}px), 0, 0)`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              gap: `${gap}px`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedTools.map((tool, idx) => (
              <div 
                key={`${tool.name}-${idx}`}
                className="flex-shrink-0 bg-white border border-zinc-100/80 rounded-[32px] p-6 md:p-8 flex flex-col justify-between h-[360px] md:h-[400px] shadow-sm relative group overflow-hidden"
                style={{
                  width: `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`
                }}
              >
                <div>
                  <span className="text-[10px] font-bold text-[#d62020] uppercase tracking-widest block mb-4">
                    Tool / {tool.name}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase text-zinc-900 leading-none mb-6">
                    {tool.name}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed max-w-[24ch]">
                    {tool.desc}
                  </p>
                </div>

                {/* Inline decorative product mockup clip */}
                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-50 opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
                  <img 
                    src={tool.image} 
                    alt="" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
