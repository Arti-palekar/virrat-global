"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "We needed a platform that felt as premium and cinematic as our products. Virrat Global delivered a pixel-perfect, highly responsive front-end that completely elevated our brand. The interface is stunning, and the performance is unmatched.",
    name: "Mahesh Chavhan",
    designation: "Founder",
    company: "MoneyMasterMahesh",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "Virrat Global transformed our complete brand identity and marketing collateral. Every design—from brochures to packaging—was executed with precision, creativity, and premium quality. Our customers immediately noticed the difference.",
    name: "Tushar More",
    designation: "Founder",
    company: "Kepler X",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "Virrat Global didn't just design our brand—they engineered an unforgettable customer experience. From logo creation to premium print materials, every detail reflected excellence and helped us stand apart from competitors.",
    name: "Nilesh Waghchoude",
    designation: "Founder",
    company: "SuccessCoachNilesh",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote: "The team's attention to detail, modern aesthetics, and flawless execution exceeded every expectation. The branding perfectly reflects our company's vision and has significantly improved our market presence.",
    name: "Rohit Sharma",
    designation: "CEO",
    company: "MedCare",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isHovered]);

  return (
    <section className="bg-[#FFFFFF] ] px-6 py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-0 relative z-10">
          <span className="homepage-section-tag">
            CLIENT SUCCESS
          </span>
          <h2 className="homepage-section-title mb-5">
            What They <span>Say.</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="w-full max-w-[1100px] bg-white rounded-[28px] border border-[#ECECEC] p-[48px] relative mt-[-16px]"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-[4fr_6fr] gap-[48px] items-stretch min-h-[400px]">
            
            {/* Left Side: 3x3 Grid */}
            <div className="w-full max-w-[360px] mx-auto grid grid-cols-3 grid-rows-3 gap-[10px] md:gap-[16px]">
              {Array.from({ length: 9 }).map((_, idx) => {
                const isCenter = idx === 4;
                return (
                  <div 
                    key={idx}
                    className={`relative w-full aspect-square rounded-[20px] md:rounded-[24px] overflow-hidden flex items-center justify-center
                      ${isCenter ? 'scale-[1.4] z-10' : 'bg-white border border-[#F2F2F2]'}`}
                    style={isCenter 
                      ? { boxShadow: "0 24px 40px -12px rgba(0,0,0,0.3)" } 
                      : { boxShadow: "0 8px 24px rgba(0,0,0,0.03)" }}
                  >
                    {isCenter && (
                      <AnimatePresence>
                        <motion.img
                          key={currentIndex}
                          src={testimonials[currentIndex].image}
                          alt="Client Portrait"
                          initial={{ y: 120, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -120, opacity: 0 }}
                          transition={{ duration: 0.75, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full object-cover rounded-[20px] md:rounded-[24px]"
                        />
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side: Quote & Details */}
            <div className="flex flex-col relative w-full h-full pt-4">
              
              {/* Custom Quote Icon like reference */}
              <div className="text-[#D62020] leading-none mb-6">
                <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9202 0.589844C13.2505 5.58463 11.238 10.1583 11.054 13.9167H17.849V31H0.963135V16.634C0.963135 11.0827 2.97558 6.00282 6.94054 1.58309C8.36199 0.0526732 10.5186 -0.370395 12.3996 0.176466L16.9202 0.589844ZM40.9202 0.589844C37.2505 5.58463 35.238 10.1583 35.054 13.9167H41.849V31H24.9631V16.634C24.9631 11.0827 26.9756 6.00282 30.9405 1.58309C32.362 0.0526732 34.5186 -0.370395 36.3996 0.176466L40.9202 0.589844Z" fill="#D62020"/>
                </svg>
              </div>
              
              <div className="flex-1 max-w-[620px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 70,
                      damping: 18,
                      mass: 0.8
                    }}
                  >
                    <p className="font-inter text-[18px] text-[#333333] leading-[1.8] mb-6">
                      {testimonials[currentIndex].quote}
                    </p>
                    
                    <div className="w-[40px] h-[1px] bg-[#E0E0E0] mb-2"></div>
                    
                    <div className="flex flex-col gap-0.5">
                      <span className="font-inter text-[18px] font-bold text-[#111111]">
                        {testimonials[currentIndex].name}
                      </span>
                      <span className="font-inter text-[16px] font-medium text-[#888888]">
                        {testimonials[currentIndex].designation}
                      </span>
                      <span className="font-inter text-[16px] font-medium text-[#D62020]">
                        {testimonials[currentIndex].company}
                      </span>
                    </div>

                    <div className="flex gap-1.5 mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#D62020]" fill="currentColor" />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-0 right-0 flex gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-[52px] h-[52px] rounded-full border border-[#ECECEC] bg-white flex items-center justify-center text-[#111111] hover:border-[#D62020] hover:text-[#D62020] transition-colors shadow-sm"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-[52px] h-[52px] rounded-full bg-[#D62020] flex items-center justify-center text-white hover:bg-[#B31A1A] transition-colors shadow-sm"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
