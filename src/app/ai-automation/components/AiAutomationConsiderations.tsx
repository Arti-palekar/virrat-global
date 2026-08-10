"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Lightbulb, Settings2, Code2, Lock, Zap, RefreshCw } from "lucide-react";

export default function AiAutomationConsiderations() {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragOffsetX = useRef(0);
  const isDragging = useRef(false);

  const gap = 24;

  const cardsData = [
    {
      num: "01",
      title: "BUSINESS-FIRST AI",
      desc: "We focus on real business outcomes, not technology for technology's sake.",
      icon: Lightbulb
    },
    {
      num: "02",
      title: "PRACTICAL AUTOMATION",
      desc: "We automate workflows that actually save time and reduce operational effort.",
      icon: Settings2
    },
    {
      num: "03",
      title: "CUSTOM SOLUTIONS",
      desc: "Every solution is designed around your processes, systems and requirements.",
      icon: Code2
    },
    {
      num: "04",
      title: "SECURE & SCALABLE",
      desc: "Build reliable AI systems that can grow with your business.",
      icon: Lock
    },
    {
      num: "05",
      title: "FAST IMPLEMENTATION",
      desc: "Move from idea to working automation without unnecessary complexity.",
      icon: Zap
    },
    {
      num: "06",
      title: "ONGOING OPTIMIZATION",
      desc: "We continuously improve your AI systems as your needs evolve.",
      icon: RefreshCw
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

  const translationValue = `calc(-${currentIndex} * (100% / ${visibleCards} + ${gap / visibleCards}px))`;

  const cardWidthStyle = {
    width: `calc((100% - ${(Math.floor(visibleCards)) * gap}px) / ${visibleCards})`
  };

  const progressPercent = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  return (
    <section className="w-full pt-6 pb-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end justify-between mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-3"
          >
            <span className="inline-block text-[#E32620] text-xs font-bold tracking-[0.25em] uppercase">
              WHY BUSINESSES CHOOSE VIRRAT GLOBAL
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-[1.05] uppercase max-w-[24ch]">
              Why Businesses Choose<br />Virrat Global
            </h2>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col space-y-6 items-start lg:items-end">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[#555555] font-medium text-base md:text-[17px] leading-[1.6] max-w-[460px] text-left lg:text-right"
            >
              We combine strategy, technology and business understanding to build AI solutions that deliver measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="flex items-center gap-3 shrink-0 lg:justify-end w-full lg:max-w-[460px]"
            >
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white text-[#111111] hover:bg-[#E32620] hover:text-white hover:border-[#E32620] transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white text-[#111111] hover:bg-[#E32620] hover:text-white hover:border-[#E32620] transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
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
          <div 
            className="flex select-none py-2"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translationValue})`,
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {cardsData.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.num}
                  style={cardWidthStyle}
                  className="h-[330px] shrink-0 bg-white border border-zinc-200/60 rounded-[28px] p-6 md:p-8 flex flex-col justify-between shadow-sm group transition-all duration-300 hover:border-zinc-300/80 hover:shadow-md cursor-default"
                >
                  <div>
                    {/* Top Row: Icon inside circle */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-zinc-200/50 flex items-center justify-center text-[#555555] group-hover:text-[#E32620] group-hover:-translate-y-0.5 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <span className="block text-xs font-bold text-zinc-400 tracking-wider">
                      {card.num}
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-[#111111] uppercase group-hover:text-[#E32620] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#555555] font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full max-w-[200px] h-1 bg-zinc-200 rounded-full mt-10 overflow-hidden mx-auto">
          <div 
            className="h-full bg-[#E32620] transition-all duration-500 rounded-full"
            style={{ width: '40%', marginLeft: `${progressPercent * 0.6}%` }}
          />
        </div>

      </div>
    </section>
  );
}
