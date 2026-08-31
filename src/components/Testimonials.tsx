"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Star, X, Play } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonialsData = [
  {
    id: 1,
    name: "LEONARDO F. ASHTON",
    date: "2 WEEKS AGO",
    review: "This agency has been a true catalyst for our growth. From the first conversation, their team grasped our vision and translated it into outstanding results.",
    rating: 5,
    fullDate: "09/06/2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "JULIAN T. BEAUMONT",
    date: "2 WEEKS AGO",
    review: "The level of creativity and strategic thinking brought to the table was incredible. They didn't just build a product; they crafted an experience.",
    rating: 5,
    fullDate: "09/06/2026",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ANDRES W. HUXLEY",
    date: "2 WEEKS AGO",
    review: "Partnering with this agency completely changed the way we do business. From day one, their team understood our goals and brought our ideas to life beautifully.",
    rating: 5,
    fullDate: "09/06/2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "SARAH JENNINGS",
    date: "3 WEEKS AGO",
    review: "Absolutely phenomenal work. The attention to detail and the seamless communication made the entire process a breeze. Highly recommended for any serious business.",
    rating: 5,
    fullDate: "08/21/2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

// Create a large array to simulate infinite scrolling without messy index resets
const items = Array.from({ length: 1000 }).map((_, i) => testimonialsData[i % testimonialsData.length]);

const Card = ({ item, isActive }: { item: any, isActive: boolean }) => {
  return (
    <div className="relative w-[340px] md:w-[380px] h-[440px] md:h-[480px] rounded-[22px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E5E5E5] group">
      
      {/* Side Card (Text) */}
      <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-between transition-opacity duration-700 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Image src={item.avatar} width={44} height={44} className="rounded-full object-cover w-10 h-10 md:w-11 md:h-11" alt={item.name} />
            <div className="flex flex-col">
              <span className="font-bold text-[#111111] text-[13px] md:text-[15px] tracking-tight">{item.name}</span>
              <span className="text-[#888888] text-[10px] md:text-[11px] uppercase font-bold tracking-widest">{item.date}</span>
            </div>
          </div>
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-[#F5F5F5] flex items-center justify-center text-[#888888] cursor-pointer hover:bg-[#E5E5E5] transition-colors">
            <X size={14} />
          </div>
        </div>
        
        <div className="flex-1 mt-6 mb-6 flex items-center">
          <p className="text-[#555555] font-inter text-[14px] md:text-[15px] leading-[1.7]">
            &ldquo; {item.review} &rdquo;
          </p>
        </div>
        
        <div className="flex justify-between items-end">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#111111] text-[#111111]" />)}
          </div>
          <span className="text-[#888888] text-[12px] md:text-[13px] font-medium">{item.fullDate}</span>
        </div>
      </div>
      
      {/* Center Card (Image) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Image src={item.image} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.name} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/60 pointer-events-none" />
        
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Image src={item.avatar} width={44} height={44} className="rounded-full object-cover w-10 h-10 md:w-11 md:h-11 border-2 border-white/20" alt={item.name} />
              <div className="flex flex-col">
                <span className="font-bold text-white text-[13px] md:text-[15px] tracking-tight">{item.name}</span>
                <span className="text-white/80 text-[10px] md:text-[11px] uppercase font-bold tracking-widest">{item.date}</span>
              </div>
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/30 transition-colors">
              <X size={14} />
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Play size={22} className="fill-[#111111] text-[#111111] ml-1" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(500); // Start in the middle
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto sliding
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade up
      gsap.from(".testi-header-anim", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger in
      gsap.from(".testimonial-card-anim", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setIsPaused(true);
  };

  const handlePointerUp = (e: React.PointerEvent | React.TouchEvent) => {
    if (dragStartX !== null) {
      const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.PointerEvent).clientX;
      const diff = clientX - dragStartX;
      if (diff > 50) setActiveIndex((prev) => prev - 1);
      else if (diff < -50) setActiveIndex((prev) => prev + 1);
    }
    setDragStartX(null);
    setIsPaused(false);
  };

  const xOffset = isMobile ? 360 : 440;

  return (
    <section ref={sectionRef} className="w-full bg-[#FFFFFF] overflow-hidden font-syne py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 relative z-10">
        
        {/* Left Side Header */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4 testi-header-anim">
            <span className="homepage-section-tag">
              Real Client Stories
            </span>
          </div>
          <h2 className="homepage-section-title testi-header-anim max-w-[650px] mb-5">
            Real Feedback From<br />
            <span>Our Happy Clients.</span>
          </h2>
        </div>

        {/* Right Side Button */}
        <div className="mt-8 md:mt-0 testi-header-anim">
          <button className="relative group px-8 py-4 font-bold text-[#111111] text-[13px] tracking-[0.1em] transition-colors">
            {/* Corner Brackets */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#111111] transition-all duration-300 group-hover:w-full group-hover:h-full" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#111111] transition-all duration-300 group-hover:w-full group-hover:h-full" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#111111] transition-all duration-300 group-hover:w-full group-hover:h-full" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#111111] transition-all duration-300 group-hover:w-full group-hover:h-full" />
            
            <span className="relative z-10">MORE REVIEWS</span>
          </button>
        </div>

      </div>

      {/* Carousel */}
      <div 
        className="relative w-full h-[460px] md:h-[520px] overflow-visible flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        {items.map((item, i) => {
          const offset = i - activeIndex;
          if (Math.abs(offset) > 2) return null;
          
          const isCenter = offset === 0;
          const x = offset * xOffset;
          const scale = isCenter ? (isMobile ? 1.05 : 1.15) : 1;
          const opacity = Math.abs(offset) > 1 ? 0 : 1;
          const zIndex = isCenter ? 20 : 10 - Math.abs(offset);

          return (
            <div 
              key={i}
              className="absolute testimonial-card-anim transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(${x}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto'
              }}
              onClick={() => {
                if (!isCenter) setActiveIndex(i);
              }}
            >
              {/* Inner div for hover lift so it doesn't conflict with inline transform */}
              <div className="transition-transform duration-500 hover:-translate-y-2">
                <Card item={item} isActive={isCenter} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
