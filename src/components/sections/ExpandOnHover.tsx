"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CARDS = [
  {
    id: 1,
    title: "Dedicated Team",
    description: "Experienced professionals committed to delivering exceptional digital solutions for every project.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Fast Project Delivery",
    description: "Efficient planning and streamlined execution ensure projects are delivered on time.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "AI-Powered Solutions",
    description: "Intelligent automation and AI-driven technologies that improve business productivity.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Custom Development",
    description: "Tailor-made websites, software, mobile apps, and enterprise solutions built around your business.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Enterprise Security",
    description: "Industry-standard security practices that protect your business and customer data.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Transparent Communication",
    description: "Regular updates, milestone tracking, and complete visibility throughout every stage.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "24×7 Support",
    description: "Reliable technical support, maintenance, and assistance whenever your business needs it.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Scalable Architecture",
    description: "Future-ready digital solutions designed to scale as your business continues to grow.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    title: "Long-Term Partnership",
    description: "We believe in building lasting partnerships that help businesses achieve continuous growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
  }
];

export function ExpandOnHover() {
  const [activeDesktop, setActiveDesktop] = useState<number | null>(null);
  
  // Mobile Slider State
  const [currentMobileIdx, setCurrentMobileIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play for mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentMobileIdx((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMobileIdx]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe Left
      setCurrentMobileIdx((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe Right
      setCurrentMobileIdx((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
    }
  };

  return (
    <section className="py-22 bg-white relative font-syne overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1500px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="homepage-section-title">
            Why Businesses Choose <br />
            <span>Virrat Global</span>
          </h2>
          <p className="font-inter text-[#555555] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover why startups, SMEs, and enterprises trust Virrat Global to build scalable digital products, accelerate business growth, and deliver long-term digital success.
          </p>
        </div>

        {/* DESKTOP / TABLET: Expanding Cards */}
        <div className="hidden md:flex h-[560px] w-full gap-4 items-center">
          {CARDS.map((card, idx) => {
            const isActive = activeDesktop === idx;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveDesktop(idx)}
                onMouseLeave={() => setActiveDesktop(null)}
                className="relative rounded-[24px] overflow-hidden cursor-pointer w-full"
                initial={false}
                animate={{
                  flex: isActive ? 3 : 1,
                  height: isActive ? "560px" : "500px",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes={isActive ? "50vw" : "15vw"}
                />

                {/* Dark Gradients */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 bg-black/40 z-10" 
                />
                
                {/* Expanded Gradient Overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex items-end px-6 pb-8 md:px-8 md:pb-10 pt-6 pointer-events-none z-20">
                  <div className="flex flex-col w-full h-full justify-end relative">
                    {/* Collapsed State: Centered Text */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 0 : 1,
                        y: isActive ? 20 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 w-full text-center"
                    >
                      <p 
                        className="font-semibold drop-shadow-md"
                        style={{
                          color: "rgba(255,255,255,0.92)",
                          fontSize: "15px",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          textShadow: "0 2px 12px rgba(0,0,0,0.45)"
                        }}
                      >
                        {card.title}
                      </p>
                    </motion.div>

                    {/* Expanded State: Full Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20
                      }}
                      transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                      className="relative w-full pr-4 md:pr-12 lg:pr-16"
                    >
                      <p 
                        className="font-bold drop-shadow-lg"
                        style={{
                          color: "rgba(255,255,255,0.94)",
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: 1.25,
                          marginBottom: "8px",
                          textShadow: "0 2px 12px rgba(0,0,0,0.45)"
                        }}
                      >
                        {card.title}
                      </p>
                      <p 
                        className="font-inter drop-shadow-md"
                        style={{
                          color: "rgba(255,255,255,0.82)",
                          fontSize: "13px",
                          fontWeight: 400,
                          lineHeight: 1.6,
                          textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          whiteSpace: "normal"
                        }}
                      >
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE: Swipe Slider */}
        <div className="md:hidden w-full relative">
          <div 
            className="w-full h-[450px] relative rounded-[24px] overflow-hidden shadow-2xl bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={currentMobileIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={CARDS[currentMobileIdx].image}
                  alt={CARDS[currentMobileIdx].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 w-full px-8 pb-10 pt-8 flex flex-col justify-end z-20">
                  <p 
                    className="font-bold drop-shadow-lg"
                    style={{
                      color: "rgba(255,255,255,0.94)",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: "8px",
                      textShadow: "0 2px 12px rgba(0,0,0,0.45)"
                    }}
                  >
                    {CARDS[currentMobileIdx].title}
                  </p>
                  <p 
                    className="font-inter drop-shadow-md"
                    style={{
                      color: "rgba(255,255,255,0.82)",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      whiteSpace: "normal"
                    }}
                  >
                    {CARDS[currentMobileIdx].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {CARDS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentMobileIdx(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentMobileIdx === idx 
                    ? "w-8 h-2 bg-[#D62020]" 
                    : "w-2 h-2 bg-[#E0E0E0]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
