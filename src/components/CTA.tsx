"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  { name: "Branding & Printing", icon: "🎨", color: "bg-orange-50", delay: 0 },
  { name: "Website & Software", icon: "💻", color: "bg-blue-50", delay: 0.2 },
  { name: "Digital Marketing", icon: "📈", color: "bg-purple-50", delay: 0.4 },
  { name: "AI Automation", icon: "🤖", color: "bg-emerald-50", delay: 0.1 },
  { name: "Legal Compliance", icon: "⚖️", color: "bg-slate-50", delay: 0.3 },
  { name: "Business Growth", icon: "🚀", color: "bg-rose-50", delay: 0.5 },
];

export default function CTA({ centerContent }: { centerContent?: React.ReactNode }) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#FFFFFF] py-24 md:py-22 overflow-hidden font-syne relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-[#FD2E35] rounded-full" />
            <span className="text-[#FD2E35] text-[12px] md:text-[14px] font-medium tracking-[1px] uppercase">
              READY TO GROW
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#111111] leading-[1.1] tracking-[-0.03em] mb-6 max-w-[600px]"
          >
            Let's Build Something<br />Extraordinary Together
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#666666] font-inter text-[16px] md:text-[18px] max-w-[540px] leading-relaxed mb-10"
          >
            Whether you need branding & printing, website development, custom software, AI automation, digital marketing, legal compliance, or complete business growth solutions, our experts are ready to help your business grow faster.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
          >
            <button className="bg-[#FD2E35] text-white px-8 py-4 rounded-[12px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-transform duration-150 ease-out hover:shadow-[0_10px_30px_rgba(253,46,53,0.3)] active:scale-[0.97]">
              Start Your Project <ArrowRight size={18} />
            </button>
            <button className="bg-white text-[#111111] border border-[#E5E5E5] px-8 py-4 rounded-[12px] font-semibold text-[15px] flex items-center justify-center transition-all duration-150 ease-out hover:bg-[#F5F5F5] active:scale-[0.97]">
              Book Free Consultation
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-inter"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#111111] text-[#111111]" />
                ))}
              </div>
              <span className="font-bold text-[#111111] text-[15px]">4.9/5</span>
              <span className="text-[#888888] text-[12px]">Client Rating</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-[#111111] text-[24px] leading-none mb-1">250+</span>
              <span className="text-[#888888] text-[12px]">Successful Projects</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-[#111111] text-[24px] leading-none mb-1">100+</span>
              <span className="text-[#888888] text-[12px]">Happy Businesses</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 mb-1 text-[#FD2E35]">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-bold text-[#111111] text-[15px]">Delivered</span>
              <span className="text-[#888888] text-[12px]">Across India</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Visual */}
        <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center pointer-events-none lg:pointer-events-auto mt-12 lg:mt-0">
          {/* Background subtle decoration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-[300px] h-[300px] rounded-full border border-[#111111] absolute" />
            <div className="w-[450px] h-[450px] rounded-full border border-[#111111] absolute" />
            <div className="w-[600px] h-[600px] rounded-full border border-[#111111] absolute" />
          </div>

          {/* Floating Cards */}
          <div className="relative w-full h-full max-w-[500px]">
            {services.map((service, index) => {
              // Distribute cards in a scattered overlapping layout
              const positions = [
                { top: "10%", left: "10%" },
                { top: "15%", right: "5%" },
                { top: "45%", left: "0%" },
                { top: "40%", right: "10%" },
                { bottom: "15%", left: "15%" },
                { bottom: "10%", right: "5%" },
              ];
              const pos = positions[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  className={`absolute`}
                  style={{ ...pos }}
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: service.delay * 5, // stagger the floating
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
                    className="bg-white rounded-[18px] p-4 flex items-center gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E5E5E5] cursor-pointer pointer-events-auto min-w-[200px]"
                  >
                    <div className={`w-12 h-12 rounded-[12px] ${service.color} flex items-center justify-center text-[20px]`}>
                      {service.icon}
                    </div>
                    <span className="font-semibold text-[#111111] text-[14px]">
                      {service.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* Center Main Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-auto"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[180px] h-[180px] rounded-full border border-dashed border-[#E5E5E5] flex items-center justify-center relative"
              >
                <div className="w-[120px] h-[120px] rounded-full bg-[#FD2E35]/5 absolute flex items-center justify-center">
                  <div className="w-[80px] h-[80px] rounded-full bg-[#FD2E35] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(253,46,53,0.3)]">
                    {centerContent ? (
                      centerContent
                    ) : (
                      <Star size={32} className="fill-white" />
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
