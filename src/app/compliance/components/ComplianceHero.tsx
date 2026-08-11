"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  Award, 
  Stamp, 
  Briefcase,
  Landmark,
  FileCheck
} from "lucide-react";

export default function ComplianceHero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const rings = [
    { radius: 120, dash: "4 4", width: 1, opacity: 0.2 },
    { radius: 170, dash: "none", width: 1, opacity: 0.15 },
    { radius: 220, dash: "2 6", width: 1.5, opacity: 0.2 },
    { radius: 260, dash: "1 8", width: 2, opacity: 0.1 },
  ];

  const orbitingItems = [
    { Icon: FileText, radius: 170, angle: -60, delay: 0.5 }, // document
    { Icon: Award, radius: 220, angle: -20, delay: 0.6 }, // certificate
    { Icon: Stamp, radius: 260, angle: 15, delay: 0.7 }, // legal approval
    { Icon: Briefcase, radius: 120, angle: 60, delay: 0.8 }, // business registration
    { Icon: Landmark, radius: 170, angle: 120, delay: 0.9 }, // government
    { Icon: FileCheck, radius: 220, angle: 165, delay: 1.0 }, // tax/compliance symbol
  ];

  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAF9F6]" ref={containerRef}>
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E31E24]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
                COMPLIANCE SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
            >
              Licensing, Compliance & <br className="hidden md:block" />
              Business Support — <br className="hidden md:block" />
              All in One Place
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={controls}
              variants={{ visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, delay: 0.15 } } }}
              className="w-24 h-1.5 bg-[#E31E24] mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              className="text-lg md:text-xl text-[#666666] mb-10 max-w-[540px] leading-relaxed"
            >
              From business registrations and government licences to tax compliance and ongoing legal requirements, we help businesses stay compliant and focused on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } } }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E31E24] text-white font-semibold hover:bg-[#c9181d] hover:shadow-[0_4px_14px_0_rgba(227,30,36,0.3)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Compliance Assistance &rarr;
              </Link>
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-[#E8E8E8] text-[#111111] font-semibold hover:bg-black/5 transition-all duration-300"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } } }}
            className="relative w-full aspect-square max-w-[550px] mx-auto z-10 flex items-center justify-center"
          >
            {/* SVG Concentric Rings */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" fill="none">
              {rings.map((ring, idx) => (
                <motion.circle 
                  key={idx}
                  cx="300" cy="300" r={ring.radius} 
                  stroke="#111111" 
                  strokeOpacity={ring.opacity} 
                  strokeWidth={ring.width} 
                  strokeDasharray={ring.dash} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                />
              ))}

              {/* Subtle connecting lines */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M300,300 L215,152 M300,300 L490,232" 
                stroke="#E31E24" 
                strokeOpacity="0.2"
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
            </svg>

            {/* Central Glow / Inner Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#E31E24]/10 to-[#FF7A59]/5 rounded-full flex items-center justify-center border border-[#E31E24]/10">
              
              {/* Core Icon: Shield with Checkmark */}
              <div className="w-28 h-28 rounded-full bg-white shadow-xl shadow-[#E31E24]/10 flex items-center justify-center relative border border-[#E8E8E8]">
                <ShieldCheck className="w-14 h-14 text-[#E31E24] relative z-10" strokeWidth={1.5} />
              </div>

            </div>

            {/* Orbiting Icons */}
            {orbitingItems.map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const xPos = 300 + item.radius * Math.cos(rad);
              const yPos = 300 + item.radius * Math.sin(rad);
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.delay, type: "spring" }}
                  className="absolute bg-white border border-[#E8E8E8] shadow-sm rounded-full flex items-center justify-center z-30 overflow-hidden group"
                  style={{ 
                    left: `${(xPos / 600) * 100}%`, 
                    top: `${(yPos / 600) * 100}%`, 
                    transform: 'translate(-50%, -50%)',
                    width: '3.5rem',
                    height: '3.5rem'
                  }}
                >
                  <div className="absolute inset-0 bg-[#E31E24] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <item.Icon className="w-6 h-6 text-[#111111] relative z-10 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </motion.div>
              );
            })}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
