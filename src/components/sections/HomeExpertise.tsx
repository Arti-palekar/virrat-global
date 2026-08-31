"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Palette, Code, TrendingUp, Video, Gift } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Branding & Print",
    description: "We define your market position and visualize your identity.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    id: "02",
    title: "Web Dev & UI/UX",
    description: "Fast, scalable, and intuitive digital platforms.",
    icon: <Code className="w-8 h-8" />
  },
  {
    id: "03",
    title: "Performance",
    description: "Data-driven campaigns built for high ROI.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: "04",
    title: "Video Production",
    description: "Visual storytelling that moves the needle.",
    icon: <Video className="w-8 h-8" />
  },
  {
    id: "05",
    title: "Corp Gifting",
    description: "Physical touchpoints that leave a lasting impression.",
    icon: <Gift className="w-8 h-8" />
  }
];

export function HomeExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom hook to handle window resize for responsive scatter layout
  const [isMobile, setIsMobile] = useState(false);
  const [scatterSpacing, setScatterSpacing] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 1024);
      
      if (w < 1024) {
        // Mobile: Vertical Spacing
        setScatterSpacing(240);
        setCardWidth(Math.min(w - 40, 320));
      } else {
        // Desktop: Horizontal Spacing
        // Ensure all 5 cards fit perfectly in the viewport with equal spacing
        const availableWidth = Math.min(w - 60, 1600); 
        // We need 5 cards. Total width = 5 * cardWidth + 4 * gap
        // If we make cardWidth slightly flexible:
        const maxCardWidth = 320;
        const calculatedCardWidth = Math.min(maxCardWidth, availableWidth / 5 - 10);
        setCardWidth(calculatedCardWidth);
        
        // Spacing offset is the distance from center to center of each adjacent card
        const calculatedSpacing = availableWidth / 5;
        setScatterSpacing(calculatedSpacing);
      }
    };
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Master opacity for the whole section content (fade in on enter)
  const masterOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const pathProgress = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-white py-16 md:py-24">
      
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Animated Mesh / Glowing Orbs Background */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1500px] max-h-[1500px] pointer-events-none opacity-40"
        >
          <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-[#d62020]/10 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute bottom-[20%] right-[30%] w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[80px] mix-blend-multiply" />
          <div className="absolute top-[40%] right-[40%] w-[400px] h-[400px] bg-gray-100/50 rounded-full blur-[80px] mix-blend-multiply" />
        </motion.div>

        <motion.div style={{ opacity: masterOpacity }} className="relative z-10 w-full max-w-[1600px] mx-auto px-4 flex flex-col h-full">
          
          {/* Header - Vertically balanced instead of absolutely pinned to top */}
          <div className="w-full text-center px-4 pt-16 md:pt-24 shrink-0">
            <h2 className="text-[14px] font-bold tracking-[0.25em] text-[#d62020] uppercase mb-5">OUR SERVICES</h2>
            <p className="text-5xl md:text-7xl font-[800] font-heading text-[#111111] leading-tight tracking-tight mb-6">
              Solutions built <br /> for every business.
            </p>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mx-auto">
              Explore our complete range of business solutions—from branding and digital marketing to software development, AI automation, compliance, and enterprise technology—crafted to help businesses grow, innovate, and scale with confidence.
            </p>
          </div>

          {/* Animation Canvas - Flex 1 to fill remaining space properly centering cards */}
          <div className="relative w-full flex-1 flex items-center justify-center mt-10 pb-20">
            
            {/* Animated Connecting Path (Desktop only for horizontal) */}
            {!isMobile && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-2 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 1440 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  {/* Subtle track background */}
                  <path d="M 0 5 L 1440 5" stroke="#d62020" strokeWidth="2" strokeOpacity="0.05" strokeLinecap="round" strokeDasharray="8 8" />
                  
                  {/* Animated glowing path */}
                  <motion.path 
                    d="M 0 5 L 1440 5" 
                    stroke="#d62020" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    style={{ pathLength: pathProgress, opacity: pathProgress }}
                    className="drop-shadow-[0_0_12px_rgba(214,32,32,0.6)]"
                  />
                </svg>
              </div>
            )}
            
            {/* The Cards */}
            {SERVICES.map((service, i) => {
              const isCenter = i === 2;
              
              // Calculate specific transforms for each card directly inside map to capture current state
              const stackScale = isCenter ? 1 : 1 - (Math.abs(i - 2) * 0.05);
              const stackY = isCenter ? 0 : Math.abs(i - 2) * 15;
              const stackOpacity = isCenter ? 1 : 0.4;
              const stackBlur = isCenter ? 0 : Math.abs(i - 2) * 4;

              const scatterScale = 1;
              const scatterOpacity = 1;
              const scatterBlur = 0;
              
              const finalX = isMobile ? 0 : (i - 2) * scatterSpacing;
              const finalY = isMobile ? (i - 2) * scatterSpacing : 0;

              const scale = useTransform(smoothProgress, [0.2, 0.5], [stackScale, scatterScale]);
              const x = useTransform(smoothProgress, [0.2, 0.6], [0, finalX]);
              const y = useTransform(smoothProgress, [0.2, 0.6], [stackY, finalY]);
              const opacity = useTransform(smoothProgress, [0.2, 0.5], [stackOpacity, scatterOpacity]);
              const blur = useTransform(smoothProgress, [0.2, 0.5], [stackBlur, scatterBlur]);
              
              return (
                <motion.div
                  key={service.id}
                  style={{
                    scale,
                    x,
                    y,
                    opacity,
                    filter: useTransform(blur, (v) => `blur(${v}px)`),
                    zIndex: isCenter ? 50 : 10 - Math.abs(i - 2), // Center always on top during stack
                    width: cardWidth
                  }}
                  className={`absolute p-8 md:p-10 rounded-[32px] bg-white/70 backdrop-blur-2xl border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col gap-6 md:gap-8 cursor-pointer group hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 ${isCenter ? 'ring-2 ring-[#d62020]/20 shadow-[0_30px_60px_rgba(214,32,32,0.12)]' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[#d62020] font-mono text-sm md:text-base font-bold opacity-80 mt-2">{service.id}</span>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-[#111111] group-hover:bg-[#d62020] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_10px_20px_rgba(214,32,32,0.3)] transition-all duration-500 shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-[#111111] leading-snug mb-6">{service.title}</h3>
                    <p className="text-[#555555] text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-[#d62020]/40`} />
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
