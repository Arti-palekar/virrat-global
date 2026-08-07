"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Palette, Sparkles, Printer, Users } from "lucide-react";

export default function MerchandiseConsiderations() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const gap = 24;

  const cardsData = [
    {
      type: "stat",
      num: "01",
      title: "Brand Consistency",
      metric: "95%",
      metricLabel: "PANTONE ALIGNMENT",
      desc: "Every item matches your corporate logo guides, font scale, and brand color palette.",
      icon: Palette
    },
    {
      type: "image",
      num: "02",
      title: "Corporate stationery collection mockup",
      image: "/images/services/corporate-stationery.webp"
    },
    {
      type: "stat",
      num: "03",
      title: "Quality Materials",
      metric: "90%",
      metricLabel: "PREMIUM FINISH",
      desc: "Heavyweight organic fabrics, durable metal engraving, and robust drinkware coatings.",
      icon: Sparkles
    },
    {
      type: "image",
      num: "04",
      title: "Custom ID card design showcase mockup",
      image: "/images/services/id-cards.webp"
    },
    {
      type: "stat",
      num: "05",
      title: "Everyday Utility",
      metric: "92%",
      metricLabel: "DAILY USE focus",
      desc: "Items selected for high usability, ensuring your brand stays top-of-mind every single day.",
      icon: Printer
    },
    {
      type: "image",
      num: "06",
      title: "Eco bottle design mockup",
      image: "/images/services/picks_bottle.png"
    },
    {
      type: "stat",
      num: "07",
      title: "Unboxing Experience",
      metric: "90%",
      metricLabel: "KITTING IMPACT",
      desc: "Premium outer boxes and custom internal compartment dividers that create a memorable unboxing.",
      icon: Users
    },
    {
      type: "image",
      num: "08",
      title: "Premium packaging boxes layout",
      image: "/images/services/picks_box.png"
    }
  ];

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
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  // Touch / Swipe support
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
    
    if (dragOffsetX.current < -55) {
      nextSlide();
    } else if (dragOffsetX.current > 55) {
      prevSlide();
    }
  };

  return (
    <section 
      className="w-full bg-white text-[#111111] overflow-hidden pt-24 pb-20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-16">
          <div>
            <span className="text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              DESIGN STANDARDS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter uppercase leading-none">
              WHAT WE CONSIDER FOR<br />MERCHANDISE DESIGN
            </h2>
          </div>
          <div className="flex justify-between md:justify-end items-center gap-4">
            <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-[28ch] hidden lg:block leading-relaxed">
              We balance aesthetic details with high durability to create products that people actually want to keep.
            </p>
            {/* Arrow Navigation */}
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-zinc-200 hover:border-black flex items-center justify-center transition-all bg-white hover:bg-black hover:text-white"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{
              width: "100%",
              transform: `translate3d(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (gap - (gap / visibleCards))}px), 0, 0)`,
              gap: `${gap}px`
            }}
          >
            {cardsData.map((card, index) => (
              <div 
                key={`${card.title}-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`
                }}
              >
                {card.type === "stat" ? (
                  (() => {
                    const IconComponent = card.icon || Palette;
                    return (
                      <div className="bg-[#FAF9F6] border border-zinc-100/80 rounded-[32px] p-8 flex flex-col justify-between h-[360px] md:h-[420px] shadow-sm relative group overflow-hidden">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest">{card.num}</span>
                          <IconComponent className="w-5 h-5 text-[#d62020] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase text-zinc-900 leading-none mb-3">
                        {card.title}
                      </h3>
                      <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed max-w-[24ch]">
                        {card.desc}
                      </p>
                    </div>
                    <div className="border-t border-zinc-200/60 pt-4 flex items-baseline justify-between">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{card.metricLabel}</span>
                      <span className="text-3xl md:text-4xl font-heading font-black text-[#d62020] tracking-tighter">{card.metric}</span>
                    </div>
                  </div>
                    );
                  })()
                ) : (
                  <div className="rounded-[32px] overflow-hidden h-[360px] md:h-[420px] border border-zinc-100 shadow-sm relative group bg-zinc-50">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-8">
                      <span className="text-[10px] font-bold text-white/50 font-mono tracking-widest mb-1">{card.num}</span>
                      <span className="text-sm font-bold text-white uppercase tracking-wider leading-none">
                        {card.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
