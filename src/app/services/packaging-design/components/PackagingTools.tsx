"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PackagingTools() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(6); // Start in the middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const gap = 16; // 16px gap between cards

  const indesignIcon = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#ff3366"/><text x="50" y="72" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="#4a001a" text-anchor="middle">Id</text></svg>`);
  const dimensionIcon = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#2bffa9"/><text x="50" y="72" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="#003822" text-anchor="middle">Dn</text></svg>`);

  const tools = [
    { 
      name: "Photoshop", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" 
    },
    { 
      name: "Illustrator", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" 
    },
    { 
      name: "InDesign", 
      image: indesignIcon 
    },
    { 
      name: "Figma", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
    },
    { 
      name: "Dimension", 
      image: dimensionIcon 
    },
    { 
      name: "Blender", 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" 
    }
  ];

  // Repeat items 3 times to enable seamless infinite looping
  const extendedTools = [...tools, ...tools, ...tools];

  // Handle responsive visible card counts
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

  // Seamless jump reset at boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= 12) {
      setIsTransitioning(false);
      setCurrentIndex(6);
    } else if (currentIndex <= 5) {
      setIsTransitioning(false);
      setCurrentIndex(11);
    }
  };

  // Re-enable CSS transition after snap-reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Autoplay setup
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      slideNext();
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, currentIndex]);

  // Drag / Swipe listeners
  const handleStart = (clientX: number) => {
    setIsPaused(true);
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current) return;
    dragOffsetX.current = clientX - dragStartX.current;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsPaused(false);

    const threshold = 55;
    if (dragOffsetX.current < -threshold) {
      slideNext();
    } else if (dragOffsetX.current > threshold) {
      slidePrev();
    }
    dragOffsetX.current = 0;
  };

  // Calculate translation: (100% / visibleCards + gap / visibleCards)
  const translationValue = `calc(-${currentIndex} * (100% / ${visibleCards} + ${gap / visibleCards}px))`;

  const cardWidthStyle = {
    width: `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`
  };

  return (
    <section className="w-full pt-16 lg:pt-24 pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 bg-white text-[#111111]">
      
      {/* Editorial Horizontal Card Section */}
      <div className="max-w-[1400px] mx-auto relative bg-[#FAF9F6] border border-zinc-200/50 rounded-[40px] p-8 md:p-12 lg:p-14 overflow-hidden shadow-sm">
        
        {/* Crop Marks (Decorative) */}
        <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-zinc-300/60 pointer-events-none" />
        <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-zinc-300/60 pointer-events-none" />
        <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-zinc-300/60 pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-zinc-300/60 pointer-events-none" />
        
        {/* Registration Crosshair Mark (Decorative) */}
        <div className="absolute right-12 top-6 w-10 h-10 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-zinc-900">
            <circle cx="12" cy="12" r="7" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* LEFT SIDE: Heading & Eyebrow (40% space on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between min-h-[180px] select-none"
          >
            <div>
              <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                OUR DESIGN TOOLKIT
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[20ch]">
                TOOLS WE USE TO<br />BRING PACKAGING TO LIFE
              </h2>
            </div>
            
            <p className="text-sm text-zinc-500 font-medium leading-relaxed mt-6 max-w-[42ch]">
              Industry-leading design tools for creating precise, production-ready packaging — from initial concepts and dielines to realistic 3D mockups and final artwork.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Slider viewport (60% space on desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 overflow-hidden relative cursor-grab active:cursor-grabbing py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleEnd();
            }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {/* Extended list container track */}
            <div 
              className="flex select-none"
              style={{
                gap: `${gap}px`,
                transform: `translateX(${translationValue})`,
                transition: isTransitioning ? "transform 750ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTools.map((tool, idx) => (
                <div 
                  key={`${tool.name}-${idx}`}
                  style={cardWidthStyle}
                  className="h-[210px] lg:h-[230px] shrink-0 rounded-2xl relative border border-zinc-200/40 bg-white flex items-center justify-center transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <img 
                    src={tool.image} 
                    alt={`${tool.name} Logo`} 
                    className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] object-contain select-none"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
