"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import gsap from "gsap";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const slides = [
  {
    label: "CREATIVE BRANDING STUDIO",
    heading1: "Brand identities",
    heading2: "for visionaries",
    features: ["Premium Identity", "Strategic Identity", "ROI-Driven", "Viral Growth"],
    btn1: "Grow Your Brand",
    btn2: "See Our Work",
  },
  {
    label: "AWARD WINNING DESIGN",
    heading1: "Creative Branding",
    heading2: "That Gets Remembered",
    features: ["Logo Design", "Brand Identity", "Creative Direction", "Premium Design"],
    btn1: "Start Project",
    btn2: "View Portfolio",
  },
  {
    label: "PREMIUM PACKAGING",
    heading1: "Packaging That",
    heading2: "Sells Products",
    features: ["Luxury Packaging", "Product Labels", "Retail Boxes", "Custom Packaging"],
    btn1: "Design Packaging",
    btn2: "Explore Work",
  },
  {
    label: "HIGH QUALITY PRINTING",
    heading1: "Premium Printing",
    heading2: "Without Limits",
    features: ["Brochures", "Catalogues", "Flyers", "Standees"],
    btn1: "Print Now",
    btn2: "See Options",
  },
  {
    label: "TRUSTED BY LEADERS",
    heading1: "Build Brands",
    heading2: "People Trust",
    features: ["Corporate Identity", "Marketing Assets", "Printing", "Packaging"],
    btn1: "Build Trust",
    btn2: "Read Case Studies",
  },
];

const services = [
  "Logo Design",
  "Brand Identity",
  "Packaging",
  "Brochure",
  "Flyers",
  "Visiting Cards",
  "Standee",
  "Billboard",
  "Corporate Stationery",
  "Large Format Printing",
];

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<SVGSVGElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Background ribbon floating animation
    if (ribbonRef.current) {
      gsap.to(ribbonRef.current, {
        y: -30,
        x: 20,
        rotation: 2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Model subtle floating animation
    if (modelRef.current) {
      gsap.to(modelRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Marquee continuous scrolling animation
    if (marqueeRef.current) {
      const track = marqueeRef.current.firstElementChild as HTMLElement;
      if (track) {
        // Clone the items to create a seamless loop
        const clone = track.innerHTML;
        track.innerHTML += clone;

        gsap.to(track, {
          xPercent: -50,
          duration: 35,
          repeat: -1,
          ease: "none",
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full h-[820px] bg-[#F7F8FA] overflow-hidden flex flex-col font-syne ] py-16 md:py-24">
      
      {/* ─── BACKGROUND SHAPE (Abstract Red Ribbon) ─── */}
      <div className="absolute right-[-10%] top-[-10%] w-[65%] h-[120%] pointer-events-none z-0">
        <svg 
          ref={ribbonRef}
          viewBox="0 0 800 800" 
          className="w-full h-full text-[#D62020] opacity-100 drop-shadow-2xl" 
          fill="currentColor"
        >
          <path d="M784.6,183.1c-15.6-32.9-46.1-61.9-88.7-77.8c-71.8-26.8-150.1,6.5-199.1,63.1c-43.1,49.8-71.3,115.1-137.9,139.7
            c-58.4,21.6-121.7-1.1-163-47.5c-35.3-39.7-55.8-95.6-47-151C154.2,76.5,188.8,47,222.1,30.3C268,7.3,322.2,2.5,372,13.2
            c31.3,6.7,64.2,21.5,88.4,43.3c35.4,32,49.5,82.4,50.1,130.3c0.7,54.7-18,107.1-43.6,155.6c-25.2,47.8-60.1,91.3-95.3,133.5
            c-37.4,44.9-76.3,90.2-106.6,140.1c-22.1,36.4-38.6,77-40,119.4c-1.3,38.8,11.5,76.9,35.1,105.4c29.1,35.2,74.7,53,119.5,50.1
            c46.7-3.1,89.6-28.7,126-58.5c41.3-33.8,77.7-74.8,114.7-113.8c42.8-45,89.5-88.3,141.9-122.9C811.5,363,844,289.4,784.6,183.1z"/>
        </svg>
      </div>

      {/* ─── MODEL IMAGE ─── */}
      <div 
        ref={modelRef}
        className="absolute bottom-0 right-[5%] w-[45%] h-[85%] z-10 pointer-events-none hidden lg:block"
      >
        <Image 
          src="/media/business-woman.png" 
          alt="Business Woman" 
          fill 
          className="object-contain object-bottom scale-[1.05]" 
          priority
        />
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-20 flex-grow max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex items-center h-full pb-[100px]">
        
        {/* Left Area (45%) */}
        <div className="w-full lg:w-[55%] xl:w-[48%] relative">
          
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Keyboard]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            keyboard={{ enabled: true }}
            navigation={{
              prevEl: ".hero-prev",
              nextEl: ".hero-next",
            }}
            className="w-full"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="font-syne text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold text-black leading-[1.05] tracking-tight mb-5">
                    <span className="text-[#D62020]">{slide.heading1}</span><br />
                    <span className="text-[#1E293B]">{slide.heading2}</span>
                  </h1>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-10">
                    {slide.features.map((feat, i) => (
                      <React.Fragment key={feat}>
                        <span className="text-gray-600 font-inter text-lg font-medium">{feat}</span>
                        {i < slide.features.length - 1 && (
                          <span className="text-gray-300 select-none">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <button className="px-8 py-4 bg-[#D62020] text-white font-syne font-bold text-lg rounded-[14px] hover:bg-black transition-colors duration-300">
                      {slide.btn1}
                    </button>
                    <button className="px-6 py-4 bg-transparent text-[#D62020] font-syne font-bold text-lg hover:underline transition-all duration-300">
                      {slide.btn2}
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

      {/* ─── CUSTOM NAVIGATION ARROWS ─── */}
      <button className="hero-prev absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-30 group hover:bg-[#D62020] transition-colors duration-300 cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="hero-next absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-30 group hover:bg-[#D62020] transition-colors duration-300 cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* ─── BOTTOM SEARCH / TECHNOLOGY BAR ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] h-[80px] flex items-center px-6 lg:px-10 z-30 border border-gray-100 overflow-hidden">
        
        {/* Left Label */}
        <div className="flex items-center gap-3 pr-8 border-r border-gray-100 shrink-0 h-full">
          <span className="font-syne font-bold text-gray-800 text-lg">Looking for a Service?</span>
        </div>

        {/* Right Marquee */}
        <div ref={marqueeRef} className="flex-1 overflow-hidden h-full flex items-center pl-8 relative">
          {/* Gradient Edges for smooth fade */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex gap-4 items-center whitespace-nowrap min-w-max">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-[#D62020] hover:border-[#D62020] transition-all duration-300 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D62020] group-hover:text-white transition-colors" />
                <span className="font-inter font-medium text-sm text-gray-700 group-hover:text-white transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
