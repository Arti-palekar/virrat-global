"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const showcaseImages = [
  { title: "CUSTOM WEB APPS", image: "/images/services/web_app_mockup.png" },
  { title: "WEBSITE DEVELOPMENT", image: "/images/services/website_mockup.png" },
  { title: "SAAS PLATFORMS", image: "/images/services/saas_mockup.png" },
  { title: "MOBILE APPS", image: "/images/services/mobile_mockup.png" },
  { title: "ERP & CRM SYSTEMS", image: "/images/services/erp_crm_mockup.png" },
  { title: "E-COMMERCE", image: "/images/services/ecommerce_mockup.png" },
  { title: "AI WORKFLOW AUTOMATION", image: "/images/services/ai_automation_mockup.png" },
  { title: "CUSTOM SOFTWARE", image: "/images/services/web_1.png" },
  { title: "ENTERPRISE APPLICATIONS", image: "/images/services/web_2.png" },
  { title: "ANALYTICS DASHBOARDS", image: "/images/services/marketing_1.png" },
  { title: "ADMIN PORTALS", image: "/images/services/marketing_2.png" },
  { title: "CLIENT DATABASE PORTALS", image: "/images/services/marketing_3.png" },
];

const slotsConfig = [
  {
    id: "slot-01",
    desktopStyle: {
      left: "0%",
      top: "0px",
      width: "16%",
      height: "340px",
    },
    parallaxRange: [0, -45],
  },
  {
    id: "slot-02",
    desktopStyle: {
      left: "18%",
      top: "80px",
      width: "14.5%",
      height: "300px",
    },
    parallaxRange: [0, 30],
  },
  {
    id: "slot-03",
    desktopStyle: {
      left: "34.5%",
      top: "160px",
      width: "14.5%",
      height: "300px",
    },
    parallaxRange: [0, -25],
  },
  {
    id: "slot-04",
    desktopStyle: {
      left: "51%",
      top: "160px",
      width: "14.5%",
      height: "300px",
    },
    parallaxRange: [0, 35],
  },
  {
    id: "slot-05",
    desktopStyle: {
      left: "67.5%",
      top: "80px",
      width: "14.5%",
      height: "300px",
    },
    parallaxRange: [0, -30],
  },
  {
    id: "slot-06",
    desktopStyle: {
      left: "84%",
      top: "0px",
      width: "16%",
      height: "340px",
    },
    parallaxRange: [0, 50],
  },
];

export function WebSoftwareServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax hook bound to section scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Autoplay intervals
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#ffffff] text-[#111111] pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden"
    >
      {/* ── SHARED CENTRAL HEADER TEXT BLOCK ── */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-[#111111] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none max-w-2xl"
        >
          Digital Products Built
          <br />
          Around Your Business
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-[#666666] text-sm md:text-base leading-relaxed max-w-2xl mt-5 mb-8"
        >
          From high-performance websites and custom software to SaaS platforms, mobile apps and business automation — we build scalable digital solutions designed for real-world growth.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold !text-white shadow-md hover:bg-zinc-800 transition-all duration-300 group"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* ── DESKTOP INTEGRATED COMPOSITION (lg and up) ── */}
      <div className="hidden lg:block relative w-[94vw] max-w-[1500px] mx-auto h-[480px] mt-16 z-20">
        {/* Staggered Floating Image Slots */}
        {slotsConfig.map((slot, slotIdx) => {
          // Identify currently active image content in this slot configuration
          const card = showcaseImages[(startIndex + slotIdx) % showcaseImages.length];
          
          // Calculate individual custom parallax offset
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yVal = useTransform(scrollYProgress, [0, 1], slot.parallaxRange);

          return (
            <motion.div
              key={`desktop-${slot.id}`}
              style={{
                position: "absolute",
                ...slot.desktopStyle,
                y: yVal,
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                delay: slotIdx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto group cursor-pointer"
            >
              {/* Image container with transition swap support */}
              <div className="relative w-full h-full overflow-hidden rounded-[18px] border border-zinc-100 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-md bg-white">
                
                <AnimatePresence initial={false}>
                  <motion.img
                    key={card.image}
                    src={card.image}
                    alt={card.title}
                    initial={{ opacity: 0, x: 22 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -22 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Dark Hover overlay layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                
                {/* Micro title display on hover */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <p className="text-[10px] font-bold text-white tracking-widest uppercase filter drop-shadow">
                    {card.title}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── TABLET STAGGERED GRID COMPOSITION (md to lg) ── */}
      <div className="hidden md:block lg:hidden max-w-[1000px] mx-auto px-10 mt-14 z-20">
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, slotIdx) => {
            const card = showcaseImages[(startIndex + slotIdx) % showcaseImages.length];
            const isStaggered = slotIdx % 3 === 1;
            const isDeepStaggered = slotIdx % 3 === 2;
            const staggerClass = isStaggered 
              ? "mt-12" 
              : isDeepStaggered 
                ? "mt-6" 
                : "mt-0";

            return (
              <div
                key={`tablet-${slotIdx}`}
                className={`flex flex-col gap-3 group ${staggerClass}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] border border-zinc-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={card.image}
                      src={card.image}
                      alt={card.title}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
                <div className="px-1 text-center h-8 flex items-center justify-center">
                  <p className="text-[11px] font-bold text-zinc-800 tracking-wider uppercase">
                    {card.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE HORIZONTAL SWIPE COMPOSITION (< md) ── */}
      <div className="block md:hidden mt-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-5 px-6 pb-6">
        {Array.from({ length: 6 }).map((_, slotIdx) => {
          const card = showcaseImages[(startIndex + slotIdx) % showcaseImages.length];

          return (
            <div
              key={`mobile-${slotIdx}`}
              className="flex-shrink-0 w-[240px] snap-center flex flex-col gap-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] border border-zinc-100 shadow-sm bg-white">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={card.image}
                    src={card.image}
                    alt={card.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="px-1 text-center h-8 flex items-center justify-center">
                <p className="text-[11px] font-bold text-zinc-800 tracking-wider uppercase">
                  {card.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WebSoftwareServicesShowcase;
