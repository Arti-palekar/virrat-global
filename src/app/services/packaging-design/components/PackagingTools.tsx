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

  const tools = [
    { 
      name: "Illustrator", 
      desc: "For vector artwork, labels, dielines and print-ready packaging graphics.", 
      image: "/images/services/branding_5.png" 
    },
    { 
      name: "Photoshop", 
      desc: "For image editing, product visuals, textures and presentation artwork.", 
      image: "/images/services/picks_pink.png" 
    },
    { 
      name: "InDesign", 
      desc: "For packaging documentation, layouts and multi-page brand materials.", 
      image: "/images/services/brand-identity.webp" 
    },
    { 
      name: "Figma", 
      desc: "For collaborative concepts, visual systems and design reviews.", 
      image: "/images/services/picks_box.png" 
    },
    { 
      name: "Blender", 
      desc: "For realistic 3D packaging visualization and product renders.", 
      image: "/images/services/picks_pouch.png" 
    },
    { 
      name: "Dimension", 
      desc: "For packaging mockups and realistic product presentation.", 
      image: "/images/services/picks_arch.png" 
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
    <section className="w-full pt-0 pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 bg-white text-[#111111]">
      
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
            className="lg:col-span-7 overflow-hidden relative cursor-grab active:cursor-grabbing"
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
                  className="h-[210px] lg:h-[230px] shrink-0 overflow-hidden rounded-2xl relative group border border-zinc-200/40"
                >
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    draggable="false"
                  />
                  {/* Subtle label bottom-left with hover description fade-in */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-5 select-none text-white">
                    <span className="text-white text-xs font-black tracking-widest uppercase mb-1">
                      {tool.name}
                    </span>
                    <p className="text-[10px] text-zinc-300 font-medium leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}
