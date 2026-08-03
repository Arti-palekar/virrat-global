"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Palette, Sparkles, Target, Users, TrendingUp } from "lucide-react";

export default function DMConsiderations() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const gap = 24; // 24px gap between cards

  const cardsData = [
    {
      type: "stat",
      num: "01",
      title: "Audience Research",
      metric: "98%",
      metricLabel: "TARGETING ACCURACY",
      desc: "In-depth buyer persona research and behavioral analysis to pinpoint high-value audiences.",
      icon: Users
    },
    {
      type: "image",
      num: "02",
      title: "SEO Strategy",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    },
    {
      type: "stat",
      num: "03",
      title: "Campaign Planning",
      metric: "4.2x",
      metricLabel: "AVERAGE ROI",
      desc: "Multi-channel funnel architecture mapping ad spend across high-performing digital platforms.",
      icon: Target
    },
    {
      type: "image",
      num: "04",
      title: "Creative Strategy",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600"
    },
    {
      type: "stat",
      num: "05",
      title: "Conversion Optimization",
      metric: "3.5x",
      metricLabel: "CONVERSION LIFT",
      desc: "Landing page testing, hook optimization, and behavioral analysis to maximize ad-click conversions.",
      icon: Sparkles
    },
    {
      type: "image",
      num: "06",
      title: "Performance Tracking",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      type: "stat",
      num: "07",
      title: "Lead Generation",
      metric: "100%",
      metricLabel: "ATTRIBUTION SETUP",
      desc: "Robust server-side GTM, Conversions API, and CRM integrations for clean tracking pipelines.",
      icon: TrendingUp
    },
    {
      type: "image",
      num: "08",
      title: "Reporting & Insights",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600"
    }
  ];

  // Handle responsive visible card counts (with peeking cards on mobile/tablet)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2.5);
      } else {
        setVisibleCards(1.15);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = cardsData.length - Math.floor(visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // Loop to end
      }
      return prev - 1;
    });
  };

  // Drag / Swipe handlers
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
      nextSlide();
    } else if (dragOffsetX.current > threshold) {
      prevSlide();
    }
    dragOffsetX.current = 0;
  };

  // Calculate translation matching the peek cards:
  const translationValue = `calc(-${currentIndex} * (100% / ${visibleCards} + ${gap / visibleCards}px))`;

  const cardWidthStyle = {
    width: `calc((100% - ${(Math.floor(visibleCards)) * gap}px) / ${visibleCards})`
  };

  // Progress Bar left offset calculation
  const progressPercent = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  return (
    <section className="w-full pt-6 pb-20 px-6 md:px-12 lg:px-24 bg-white text-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER WITH CONTROLS AND SPLIT DESKTOP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end justify-between mb-12">
          
          {/* Left Column: Eyebrow + Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-3"
          >
            <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase">
              WHAT WE FOCUS ON
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-none uppercase max-w-[24ch]">
              What Goes Into Every<br />Digital Marketing Strategy
            </h2>
          </motion.div>

          {/* Right Column: Description + Controls */}
          <div className="lg:col-span-5 flex flex-col space-y-6 items-start lg:items-end">
            
            {/* Repositioned Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-zinc-600 font-medium text-base md:text-[17px] leading-[1.6] max-w-[460px] text-left"
            >
              Every successful campaign combines strategy, creativity, targeting and data to turn visibility into measurable business growth.
            </motion.p>

            {/* Navigation Controls */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="flex items-center gap-3 shrink-0 lg:justify-end w-full lg:max-w-[460px]"
            >
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white text-[#111111] hover:bg-[#d62020] hover:text-white hover:border-[#d62020] transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white text-[#111111] hover:bg-[#d62020] hover:text-white hover:border-[#d62020] transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

        </div>

        {/* HORIZONTAL CARDS SLIDER CONTAINER */}
        <div 
          className="overflow-hidden relative cursor-grab active:cursor-grabbing w-full"
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
          {/* Slider track list wrapper */}
          <div 
            className="flex select-none py-2"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translationValue})`,
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {cardsData.map((card) => {
              if (card.type === "stat" && card.icon) {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.num}
                    style={cardWidthStyle}
                    className="h-[330px] md:h-[350px] lg:h-[370px] shrink-0 bg-[#FAF9F6] border border-zinc-200/60 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-sm group transition-colors duration-300 hover:bg-white hover:border-zinc-300/80 cursor-default"
                  >
                    <div>
                      {/* Top Row: Icon inside circle & Metric */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-zinc-200/50 flex items-center justify-center text-zinc-400 group-hover:text-[#d62020] group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="text-right">
                          <span className="block text-4xl md:text-5xl font-heading font-black tracking-tighter text-[#111111] leading-none mb-1">
                            {card.metric}
                          </span>
                          <span className="block text-[9px] font-black tracking-widest text-zinc-400 uppercase">
                            {card.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-zinc-400 tracking-wider">
                        {card.num}
                      </span>
                      <h3 className="text-base font-black tracking-tight text-[#111111] uppercase group-hover:text-[#d62020] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={card.num}
                    style={cardWidthStyle}
                    className="h-[330px] md:h-[350px] lg:h-[370px] shrink-0 rounded-[28px] overflow-hidden border border-zinc-200/40 relative group shadow-sm"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      draggable="false"
                    />
                    
                    {/* Faded overlay showing labels */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent flex flex-col justify-end p-6 select-none text-white">
                      <span className="text-[10px] font-bold text-zinc-300/80 tracking-widest uppercase mb-1">
                        {card.num} — CHECKPOINT
                      </span>
                      <span className="text-base font-black tracking-tight uppercase text-white">
                        {card.title}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* BOTTOM PROGRESS INDICATOR LINE */}
        <div className="flex justify-center mt-12">
          <div className="w-36 h-0.5 bg-zinc-200/80 rounded-full relative overflow-visible select-none">
            <div 
              className="w-2.5 h-2.5 bg-[#d62020] rounded-full absolute -top-1 transition-all duration-300 ease-out"
              style={{ 
                left: `calc(${progressPercent}% - 5px)` 
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
