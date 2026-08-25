"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { 
  SiWordpress, 
  SiWoocommerce, 
  SiLaravel, 
  SiPhp, 
  SiReact, 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiGoogleads, 
  SiMeta, 
  SiGoogleanalytics,
  SiFigma
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

// Custom inline SVGs for icons not available or differing in current simple-icons packages
const CanvaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.89 16.48c-1.42 1.4-3.52 1.77-5.02 1.77-3.67 0-6.17-2.68-6.17-6.22 0-3.37 2.37-6.24 6.03-6.24 1.62 0 3.32.55 4.37 1.65l-1.35 1.35c-.75-.72-1.88-1.12-3.02-1.12-2.3 0-3.83 1.83-3.83 4.26 0 2.38 1.57 4.26 3.93 4.26.98 0 2.18-.32 3.02-1.12l1.07 1.17z"/>
  </svg>
);

const SalesforceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.38 10.66a3.84 3.84 0 0 0-2.38-2.61 5.38 5.38 0 0 0-10.22 1.12 3.84 3.84 0 0 0-2.38 2.61A4.27 4.27 0 0 0 4.25 18h15.5a4.27 4.27 0 0 0-.37-7.34z"/>
  </svg>
);

const AutomationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 12a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm-9-3a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm9 0a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm-6-2.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
  </svg>
);

const PhotoshopIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M9 17V9h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9" fill="none"/>
    <path d="M14 13.5a1.5 1.5 0 0 0 1.5-1.5.5.5 0 0 0-.5-.5H14v2z" fill="currentColor"/>
    <path d="M15 17a2 2 0 0 0 2-2 1 1 0 0 0-1-1h-2v3" fill="none"/>
  </svg>
);

const IllustratorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <path d="M8 15V9h2a1.5 1.5 0 0 1 1.5 1.5v0A1.5 1.5 0 0 1 10 12H8" fill="none"/>
    <line x1="14" y1="9" x2="14" y2="15"/>
    <circle cx="14" cy="7" r="0.5" fill="currentColor"/>
  </svg>
);

const logos = [
  { name: "WordPress", Icon: SiWordpress, color: "#21759b", gradient: "linear-gradient(135deg, #21759b, #0085ba)" },
  { name: "WooCommerce", Icon: SiWoocommerce, color: "#96588a", gradient: "linear-gradient(135deg, #96588a, #7f3d6f)" },
  { name: "Laravel", Icon: SiLaravel, color: "#ff2d20", gradient: "linear-gradient(135deg, #ff2d20, #e01d12)" },
  { name: "PHP", Icon: SiPhp, color: "#777bb4", gradient: "linear-gradient(135deg, #777bb4, #4f5b93)" },
  { name: "React", Icon: SiReact, color: "#00d8ff", gradient: "linear-gradient(135deg, #00d8ff, #00b0d8)" },
  { name: "HTML5", Icon: SiHtml5, color: "#e34f26", gradient: "linear-gradient(135deg, #e34f26, #f06529)" },
  { name: "CSS3", Icon: SiCss, color: "#1572b6", gradient: "linear-gradient(135deg, #1572b6, #29a7de)" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e", gradient: "linear-gradient(135deg, #f7df1e, #e5a228)" },
  { name: "AI Tools", Icon: TbBrandOpenai, color: "#00a67e", gradient: "linear-gradient(135deg, #00a67e, #008a65)" },
  { name: "AI Automation", Icon: AutomationIcon, color: "#84cc16", gradient: "linear-gradient(135deg, #84cc16, #10b981)" },
  { name: "CRM Platforms", Icon: SalesforceIcon, color: "#00a1e0", gradient: "linear-gradient(135deg, #00a1e0, #0070d2)" },
  { name: "Figma", Icon: SiFigma, color: "#f24e1e", gradient: "linear-gradient(135deg, #f24e1e, #a259ff)" },
  { name: "Photoshop", Icon: PhotoshopIcon, color: "#31a8ff", gradient: "linear-gradient(135deg, #31a8ff, #001e36)" },
  { name: "Illustrator", Icon: IllustratorIcon, color: "#ff9a00", gradient: "linear-gradient(135deg, #ff9a00, #ff5a00)" },
  { name: "Canva", Icon: CanvaIcon, color: "#00c4cc", gradient: "linear-gradient(135deg, #00c4cc, #7d2ae8)" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285f4", gradient: "linear-gradient(135deg, #4285f4, #34a853)" },
  { name: "Meta Ads", Icon: SiMeta, color: "#0668e1", gradient: "linear-gradient(135deg, #0668e1, #00f2fe)" },
  { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#e37400", gradient: "linear-gradient(135deg, #e37400, #ff9100)" },
];

export default function DigitalEpochHero() {
  const doubleLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24 font-sans select-none">
      
      {/* Styles for Marquee Scroller */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes digitalEpochMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .epoch-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: digitalEpochMarquee 50s linear infinite;
        }
        .epoch-marquee-container:hover .epoch-marquee-track {
          animation-play-state: paused;
        }
      ` }} />

      {/* Main Hero Container */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        
        {/* Video Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start justify-center max-w-[720px]">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-5"
          >
            <h2 
              className="font-display font-medium text-[42px] md:text-[56px] leading-[1.08] tracking-tight text-[#0a1b33]"
              dangerouslySetInnerHTML={{ __html: "Foundation of the<br />new digital epoch" }}
            />
            
            <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#64748b] max-w-[500px]">
              Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0a152d] text-white font-medium px-8 py-3.5 rounded-full text-[14px] shadow-lg hover:shadow-[#0a152d]/15 transition-all mt-3 cursor-pointer"
            >
              Contact Us
            </motion.button>
          </motion.div>

        </div>

        {/* Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-fit">
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            {/* Circular Logo */}
            <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm flex items-center justify-center rounded-full text-[14px] text-slate-500 font-semibold select-none">
              ✦
            </div>

            {/* Nav Links */}
            <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3.5 py-2 transition-colors cursor-pointer rounded-full">
              Products
            </button>
            <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3.5 py-2 transition-colors cursor-pointer rounded-full">
              Docs
            </button>

            {/* Get in touch CTA */}
            <button className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1 cursor-pointer">
              Get in touch
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.nav>
        </div>

      </div>

      {/* Seamless Marquee Logo Scroller */}
      <div 
        className="epoch-marquee-container mt-10 w-full overflow-hidden relative py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
        }}
      >
        <div className="epoch-marquee-track">
          {doubleLogos.map((logo, idx) => (
            <div
              key={`logo-card-${idx}`}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
            >
              {/* Hover Background Gradient */}
              <div 
                className="absolute inset-0 transition-all duration-300 ease-out opacity-0 scale-[1.5] group-hover:opacity-100 group-hover:scale-100 pointer-events-none z-0"
                style={{ background: logo.gradient }}
              />
              
              {/* Brand Logo Component */}
              <logo.Icon 
                className="w-8 h-8 transition-all duration-300 relative z-10 group-hover:text-white"
                style={{ color: logo.color }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
