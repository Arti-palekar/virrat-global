"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function PackagingIndustries() {
  const [cardWidth, setCardWidth] = useState(260);
  const [gap, setGap] = useState(20);
  const [currentIndex, setCurrentIndex] = useState(12); // Start at middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const industries = [
    {
      name: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Cosmetics & Beauty",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Healthcare & Pharma",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Fashion & Apparel",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "FMCG",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "E-commerce",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Jewellery & Luxury",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Restaurants & Cafés",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Organic & Natural Products",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Corporate Products",
      image: "/images/services/corporate-merchandise.webp"
    },
    {
      name: "Startups & D2C Brands",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600"
    }
  ];

  // Triplicate the items array for infinite looping
  const extendedItems = [...industries, ...industries, ...industries];

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardWidth(260);
        setGap(24);
      } else if (window.innerWidth >= 768) {
        setCardWidth(200);
        setGap(18);
      } else {
        setCardWidth(150);
        setGap(12);
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

  // Infinite boundary reset
  const handleTransitionEnd = () => {
    if (currentIndex >= 24) {
      setIsTransitioning(false);
      setCurrentIndex(12);
    } else if (currentIndex <= 11) {
      setIsTransitioning(false);
      setCurrentIndex(23);
    }
  };

  // Re-enable CSS transitions
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      slideNext();
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, isTransitioning, currentIndex]);

  // Drag listeners
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

    const threshold = 50;
    if (dragOffsetX.current < -threshold) {
      slideNext();
    } else if (dragOffsetX.current > threshold) {
      slidePrev();
    }
    dragOffsetX.current = 0;
  };

  // Center active element mathematically: translationValue aligns slide index at center of screen (50vw)
  const translationValue = `calc(50vw - ${currentIndex * (cardWidth + gap) + cardWidth / 2}px)`;

  return (
    <section className="relative w-full pt-14 pb-16 bg-white text-[#111111] overflow-hidden select-none">
      
      {/* SECTION HEADER */}
      <div className="w-full text-center px-6 md:px-12 mb-12 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-3"
        >
          PACKAGING ACROSS INDUSTRIES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[20ch] mx-auto mb-4"
        >
          Industries We Design For
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-zinc-500 font-medium leading-relaxed max-w-[48ch] mx-auto"
        >
          Packaging solutions shaped around your product, market and customer.
        </motion.p>
      </div>

      {/* CAROUSEL VIEWPORT WITH TOP & BOTTOM CURVES */}
      <div className="relative w-full h-[360px] md:h-[420px] lg:h-[480px] bg-white">
        
        {/* TOP CURVE SVG MASK - FORCE WHITE FILL */}
        <div className="absolute top-0 left-0 w-full h-[60px] md:h-[80px] lg:h-[100px] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L1440,0 L1440,100 Q720,20 0,100 Z" fill="white" />
          </svg>
        </div>

        {/* HORIZONTAL CAROUSEL CARDS TRACK */}
        <div 
          className="h-full flex items-center cursor-grab active:cursor-grabbing"
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
          <div
            className="flex items-center"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translationValue})`,
              transition: isTransitioning ? "transform 750ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => {
              const isActive = idx === currentIndex;
              const isAdjacent = Math.abs(idx - currentIndex) === 1;

              // Setup distinct visual scales & opacity per card layer
              let scaleValue = 0.92;
              let opacityValue = 0.4;
              if (isActive) {
                scaleValue = 1.0;
                opacityValue = 1.0;
              } else if (isAdjacent) {
                scaleValue = 0.96;
                opacityValue = 0.7;
              }

              return (
                <div
                  key={`${item.name}-${idx}`}
                  style={{
                    width: `${cardWidth}px`,
                    transform: `scale(${scaleValue})`,
                    opacity: opacityValue,
                    transition: "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="h-[270px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden relative shrink-0 border border-zinc-100/40 shadow-sm bg-zinc-50"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                  
                  {/* Subtle dark gradient overlay on center active card for label readability */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CURVE SVG MASK - FORCE WHITE FILL */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] lg:h-[100px] z-20 pointer-events-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 Q720,0 1440,80 L1440,100 L0,100 Z" fill="white" />
          </svg>
        </div>

        {/* ACTIVE CENTER TITLE TRANSITION - RENDERED GLOBALLY OUTSIDE OVERFLOW TO PREVENT CLIPPING */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Re-animate whenever active index shifts
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-white font-heading font-black text-center uppercase tracking-widest text-xs md:text-sm whitespace-nowrap drop-shadow-sm bg-[#d62020] px-4 py-2 rounded-full backdrop-blur-sm"
            >
              {extendedItems[currentIndex]?.name}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* BOTTOM METADATA CONTROLS ROW */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mt-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative z-30">
        
        {/* LEFT: Overlapping Avatars & Text */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 select-none">
            <div className="w-8 h-8 rounded-full border border-white bg-zinc-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60&h=60" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border border-white bg-zinc-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60&h=60" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border border-white bg-zinc-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60&h=60" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <span className="block text-xs font-bold text-[#111111]">12+ Industries</span>
            <span className="block text-[10px] text-zinc-500 font-medium">Packaging expertise across diverse markets</span>
          </div>
        </div>

        {/* CENTER: Down Chevron Trigger */}
        <div className="flex flex-col items-center gap-1.5 cursor-pointer" onClick={slideNext}>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-[#d62020] transition-colors">
            Explore Industries
          </span>
          <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-[#d62020] hover:text-[#d62020] transition-colors duration-300 shadow-sm bg-white">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* RIGHT: Spinning SVG Badge Decorative */}
        <div className="w-16 h-16 relative flex items-center justify-center select-none">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_16s_linear_infinite] opacity-65">
            <path id="badgeCirclePath" d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none" />
            <text className="text-[7.5px] uppercase font-black tracking-[0.15em] fill-zinc-900">
              <textPath href="#badgeCirclePath" startOffset="0%">
                • QUALITY DESIGN • BEST PACKAGING 
              </textPath>
            </text>
          </svg>
          {/* Subtle center dot */}
          <div className="absolute w-1.5 h-1.5 bg-[#d62020] rounded-full" />
        </div>

      </div>

    </section>
  );
}
