"use client";
import { useState, useEffect } from "react";
import { PenTool, Palette, Sparkles, ChevronDown, Plus } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";


// Razorpay Auth Section
export function RazorpayAuthSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[750px] bg-transparent relative">
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'Sora';
          src: url('/fonts/Sora-VariableFont_wght.ttf') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
        .sora-font {
          font-family: 'Sora', sans-serif;
        }
      `}} />

      {/* LEFT PANEL */}
      <div className="flex flex-1 relative flex-col justify-center p-12 lg:p-16">
        {/* Global page background provides the styling here now */}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center lg:justify-end h-full sora-font max-w-xl mx-auto lg:mx-0 text-left">
          <h1 className="text-[40px] lg:text-[48px] font-bold text-[#0A2540] leading-[1.1] tracking-[-0.02em] mb-5">
            Shall we get started?
          </h1>
          <p className="text-[17px] text-[#425466] leading-relaxed font-medium">
            We help passionate Founders perfect theirs design & development game. Let’s build the next big thing together. Post your query & we will get back to you.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL (FORM) */}
      <div className="w-full lg:w-[500px] bg-white/95 backdrop-blur-xl relative flex flex-col pt-16 px-10 pb-8 lg:shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)] z-10 shrink-0 mx-auto lg:rounded-tl-[40px] border-t border-l border-white/50">
        
        {/* Ribbon */}
        <div className="absolute top-7 right-[-45px] w-[180px] text-center rotate-45 bg-gradient-to-r from-[#eef4ff] to-[#f3f0ff] text-[#2B64F6] font-bold text-[10px] py-1 shadow-sm uppercase tracking-wider hidden lg:block">
          Virrat Global
        </div>

        <div className="w-full max-w-sm mx-auto flex flex-col h-full">
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-start mb-6 overflow-hidden">
             <img src="https://virratglobal.com/wp-content/uploads/2025/08/favicon-v-150x150.webp" alt="Virrat Global" className="w-10 h-10 object-contain" />
          </div>

          <p className="text-[13px] text-gray-500 mb-6">Welcome to <span className="font-semibold text-gray-700">Virrat Global</span></p>
          
          <h2 className="text-[26px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
            Got something in mind? We'd love to help.
          </h2>

          <form className="flex flex-col space-y-5">
            {/* 1. I'm looking for help in... */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-600">I'm looking for help in...</label>
              <div className="relative">
                <select className="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(43,100,246,0.15)] rounded-[4px] px-3.5 py-3 text-[14px] appearance-none outline-none transition-all duration-200 cursor-pointer bg-white">
                  <option value="Website">Website</option>
                  <option value="App">App</option>
                  <option value="Branding">Branding</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Video Production">Video Production</option>
                  <option value="Merchandise">Merchandise</option>
                  <option value="Counseling">Counseling</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* 2. I'm willing to spend... */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-600">I'm willing to spend...</label>
              <div className="relative">
                <select className="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(43,100,246,0.15)] rounded-[4px] px-3.5 py-3 text-[14px] appearance-none outline-none transition-all duration-200 cursor-pointer bg-white">
                  <option value="5K - 25K">5K - 25K</option>
                  <option value="25K - 1Lac">25K - 1Lac</option>
                  <option value="1Lac - 3Lac">1Lac - 3Lac</option>
                  <option value="3Lac+">3Lac+</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* 3. Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-600">Full Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(43,100,246,0.15)] rounded-[4px] px-3.5 py-3 text-[14px] transition-all duration-200 outline-none"
              />
            </div>

            {/* 4. Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-600">Phone</label>
              <input 
                type="tel" 
                className="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(43,100,246,0.15)] rounded-[4px] px-3.5 py-3 text-[14px] transition-all duration-200 outline-none"
              />
            </div>

            {/* 5. How can we help? */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-600">How can we help?</label>
              <textarea 
                rows={4}
                className="w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:shadow-[0_0_0_2px_rgba(43,100,246,0.15)] rounded-[4px] px-3.5 py-3 text-[14px] transition-all duration-200 outline-none resize-none"
              ></textarea>
            </div>

            <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-[4px] py-3.5 text-[15px] transition-colors mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function ContactHero() {
  return (
    <div className="relative w-full min-h-[70vh] lg:min-h-[80vh] pt-32 pb-10 flex items-center justify-center bg-transparent shrink-0 mt-0">
      
      {/* Background moved to global page wrapper */}

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center pl-12 lg:pl-16 pr-10 gap-12 lg:gap-8">
        
        {/* Left Content - Text & Breadcrumbs */}
        <div className="flex-1 w-full flex flex-col justify-center max-w-2xl text-left">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            <a href="https://virratglobal.com/" className="hover:text-blue-600 transition-colors">Home</a>
            <span>→</span>
            <a href="https://virratglobal.com/contact/" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Got something in mind?<br />
            We’d love to help.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
            Got big dreams for your brand? Don’t be shy! Shoot us a message and let’s get this show on the road!
          </p>
        </div>

        {/* Right Content - Interactive Robot */}
        <div className="flex-1 w-full relative flex items-center justify-center">
          {/* Orbital rings SVG background for Robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-[1.4]">
            <svg className="w-[100%] h-[100%] opacity-[0.35] animate-spin" style={{ animationDuration: '60s' }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#2B64F6" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="#6366f1" strokeWidth="0.2" />
            </svg>
          </div>

          <InteractiveRobot />
        </div>
        
      </div>
    </div>
  );
}

/**
 * Default Page wrapper component so Next.js can resolve the route.
 */
export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-900 contact-page flex flex-col justify-between relative overflow-hidden">
      
      {/* Shared Global Background Treatment for Hero & Form */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%232B64F6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] bg-gradient-to-tr from-[#2B64F6]/15 to-cyan-400/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col flex-grow">
        {/* Header */}
        <HoverGradientNavBar />

        {/* Hero Section */}
        <ContactHero />

        {/* Form Section */}
        <div id="contact-form" className="relative w-full shrink-0">
          <RazorpayAuthSection />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 w-full bg-white">
        <CinematicFooter />
      </div>
      <MobileFloatingMenu />
    </main>
  );
}

/**
 * Interactive Robot component for the Hero section.
 */
function InteractiveRobot() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const faceX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const faceY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const eyeX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const eyeY = useTransform(smoothY, [-1, 1], [-18, 18]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
      {/* Robot Base SVG */}
      <svg width="280" height="280" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0">
        <path d="M70 70 L50 40" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="40" r="8" fill="#3b82f6" />
        <path d="M170 70 L190 40" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
        <circle cx="190" cy="40" r="8" fill="#3b82f6" />

        <rect x="40" y="60" width="160" height="140" rx="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="4" />
        
        <path d="M30 110 C20 110, 20 150, 30 150" fill="#cbd5e1" />
        <path d="M210 110 C220 110, 220 150, 210 150" fill="#cbd5e1" />
      </svg>

      {/* Moving Face Plate & Eyes */}
      <motion.div 
        style={{ x: faceX, y: faceY }}
        className="absolute w-[130px] h-[80px] bg-slate-900 rounded-[24px] shadow-inner flex items-center justify-center mt-[-10px] overflow-hidden z-10"
      >
        <div className="absolute top-0 left-0 w-full h-[40px] bg-white/10 rounded-t-[24px]" />
        
        <motion.div style={{ x: eyeX, y: eyeY }} className="flex items-center gap-6">
          <div className="w-8 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            <div className="w-4 h-6 bg-white rounded-full opacity-60 ml-2 mt-1" />
          </div>
          <div className="w-8 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            <div className="w-4 h-6 bg-white rounded-full opacity-60 ml-2 mt-1" />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Robot Mouth / Voice Indicator */}
      <motion.div 
        style={{ x: faceX, y: faceY }}
        className="absolute mt-[120px] w-12 h-3 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center gap-1.5 z-10"
      >
        <motion.div animate={{ height: ["4px", "8px", "4px"] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-1.5 bg-blue-400 rounded-full" />
        <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }} className="w-1.5 bg-blue-400 rounded-full" />
        <motion.div animate={{ height: ["4px", "8px", "4px"] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }} className="w-1.5 bg-blue-400 rounded-full" />
      </motion.div>
    </div>
  );
}
