"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PackagingHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect for background typography
  const { scrollY } = useScroll();
  const bgTextY = useTransform(scrollY, [0, 800], [0, 80]);
  
  // Mouse movement parallax (desktop only)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    setMousePos({ x, y });
  };

  const canParallaxX = isDesktop ? mousePos.x * 24 : 0;
  const canParallaxY = isDesktop ? mousePos.y * 24 : 0;
  const textParallaxX = isDesktop ? mousePos.x * -12 : 0;
  const textParallaxY = isDesktop ? mousePos.y * -12 : 0;

  // GSAP ScrollTrigger for rotation scrub
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial rotation
    gsap.set(scrollWrapperRef.current, {
      rotation: 20,
      transformOrigin: "50% 50%"
    });

    // Animate to 0deg based on scroll
    gsap.to(scrollWrapperRef.current, {
      rotation: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2
      }
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden"
    >
      {/* Soft blurred studio background from the reference image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.35] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: "url('/images/services/nano_banana_bg.png')" }}
      />

      {/* Subtle print dieline grid guides */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(17, 17, 17, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 17, 17, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Outer print crop marks/targets */}
      <div className="absolute top-28 left-10 w-8 h-8 pointer-events-none opacity-20 border-l border-t border-[#d62020]" />
      <div className="absolute top-28 right-10 w-8 h-8 pointer-events-none opacity-20 border-r border-t border-[#d62020]" />
      <div className="absolute bottom-16 left-10 w-8 h-8 pointer-events-none opacity-20 border-l border-b border-[#d62020]" />
      <div className="absolute bottom-16 right-10 w-8 h-8 pointer-events-none opacity-20 border-r border-b border-[#d62020]" />

      {/* Packaging calibration color strips (represented on edges of professional dielines) */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-15 pointer-events-none select-none">
        <div className="w-1.5 h-6 bg-[#111111]" />
        <div className="w-1.5 h-6 bg-[#d62020]" />
        <div className="w-1.5 h-6 bg-[#FAF9F6] border border-[#111111]/30" />
      </div>
      
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-15 pointer-events-none select-none">
        <div className="w-1.5 h-6 bg-[#FAF9F6] border border-[#111111]/30" />
        <div className="w-1.5 h-6 bg-[#d62020]" />
        <div className="w-1.5 h-6 bg-[#111111]" />
      </div>

      <div className="max-w-[1400px] mx-auto z-10 relative w-full flex flex-col items-center justify-center">
        {/* Centered Composition */}
        <div className="relative flex flex-col items-center justify-center w-full min-h-[500px] md:min-h-[600px]">
          
          {/* Background Typography (z-index: 10) */}
          <motion.div 
            style={{ y: bgTextY }}
            className="absolute inset-0 flex items-center justify-center select-none z-10 pointer-events-none w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: textParallaxX, y: textParallaxY }}
              className="w-full flex items-center justify-center"
            >
              <h1 
                className="packaging-design-hero-title text-center font-heading font-black text-[#111111] uppercase select-none"
                style={{ whiteSpace: "nowrap" }}
              >
                PACKAGING DESIGN
              </h1>
            </motion.div>
          </motion.div>

          {/* Foreground Product Mockup: Floating Can (z-index: 20) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              x: canParallaxX,
              y: canParallaxY 
            }}
            className="relative z-20 flex items-center justify-center w-[280px] sm:w-[350px] md:w-[420px] lg:w-[460px] aspect-square pointer-events-none"
          >
            {/* Wrapper 2: GSAP Scroll Rotation */}
            <div 
              ref={scrollWrapperRef}
              style={{ transformOrigin: "50% 50%" }}
              className="w-full h-full flex items-center justify-center relative will-change-transform"
            >
              {/* Soft Shadow below can */}
              <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[55%] h-[12px] bg-black/10 blur-2xl rounded-full scale-y-50" />

              {/* Wrapper 3: Framer Motion Floating Loop */}
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/images/services/virrat_craft_can.png"
                  alt="Premium Virrat Craft Can Packaging Mockup"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
