"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Printer, Clock, Palette, Truck, Play } from "lucide-react";

const brands = [
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Adobe", url: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg" },
  { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Tata", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
  { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Reliance", url: "https://upload.wikimedia.org/wikipedia/en/9/99/Reliance_Industries_Logo.svg" },
  { name: "Canon", url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Canon_logo.svg" },
  { name: "HP", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Dell", url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" },
  { name: "Epson", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Epson_logo.svg" },
];

export default function VideoShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax scale for the video
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="relative bg-[#FFFFFF] overflow-hidden font-syne py-16 md:py-24">
      {/* Background Soft Abstract Shapes & Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D62020] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D62020] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[3.5rem] font-normal text-[#313131] leading-[1.1] max-w-[1100px] w-full"
        >
          <span className="text-[#D62020]">Creative Branding</span> &amp; Premium Printing <br className="hidden lg:block" />
          That Builds Lasting Brand Impact
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-[#666666] max-w-3xl leading-relaxed"
        >
          From logo design and brand identity to premium printing, packaging, marketing materials, and corporate branding, we help businesses create memorable visual experiences that attract customers and build trust.
        </motion.p>

        {/* CTA Button */}
        <motion.a 
          href="https://virratglobal.com/contact/"
          target="_blank"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4, boxShadow: "0 12px 30px -5px rgba(214, 32, 32, 0.4)" }}
          className="mt-10 inline-flex items-center gap-2 bg-[#D62020] text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
        >
          Get Free Consultation <ArrowRight size={18} />
        </motion.a>

        {/* Feature Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {[
            { icon: Printer, text: "Premium Print Quality" },
            { icon: Clock, text: "Fast Turnaround" },
            { icon: Palette, text: "Custom Brand Identity" },
            { icon: Truck, text: "Nationwide Delivery" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -2 }}
              className="flex items-center gap-2.5 text-[#313131] text-sm md:text-base font-medium bg-white px-5 py-2.5 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50"
            >
              <feature.icon size={18} className="text-[#D62020] opacity-80" />
              {feature.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Video Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ scale: videoScale }}
          className="mt-20 w-full relative rounded-[28px] overflow-hidden shadow-2xl group bg-[#000]"
        >
          {/* HTML5 Video */}
          <div className="w-full aspect-video relative overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/7WpBj2R4eQM?autoplay=1&mute=1&loop=1&playlist=7WpBj2R4eQM&controls=1&rel=0"
              title="Creative Branding Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
              style={{ border: "none" }}
            ></iframe>
          </div>

          {/* Floating overlay pill (bottom-left) */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl flex items-center gap-4 pointer-events-none transition-transform duration-500 group-hover:-translate-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D62020] text-white flex items-center justify-center rounded-full flex-shrink-0 shadow-lg">
              <Play size={22} className="ml-1" fill="currentColor" />
            </div>
            <div className="text-left">
              <div className="text-[#313131] font-bold text-sm md:text-base leading-tight">Watch Our Work</div>
              <div className="text-[#666666] text-xs md:text-sm mt-1 font-medium">Creative Branding Demo</div>
            </div>
          </div>
        </motion.div>

        {/* Trusted Brands Logo Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 w-full flex flex-col xl:flex-row items-center gap-6 xl:gap-8"
        >
          <style>
            {`
              @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
                width: max-content;
              }
              .brand-logo-img {
                /* Target color: #8A8F9F */
                filter: brightness(0) saturate(100%) invert(61%) sepia(9%) saturate(594%) hue-rotate(189deg) brightness(90%) contrast(89%);
                transition: all 0.3s ease;
                object-fit: contain;
              }
              .brand-logo-img:hover {
                filter: none;
                transform: scale(1.05);
              }
            `}
          </style>

          {/* Label (Fixed Width) */}
          <div className="flex-shrink-0 text-center xl:text-left xl:w-[220px]">
            <p className="text-[0.75rem] font-bold text-[#888888] uppercase tracking-wider leading-snug">
              Trusted by companies<br className="hidden xl:block" /> of all sizes
            </p>
          </div>
          
          {/* Marquee Wrapper */}
          <div 
            className="relative flex overflow-hidden group flex-1 w-full"
            style={{ 
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
            }}
          >
            {/* Moving Container */}
            <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] flex-nowrap items-center">
              
              {/* Track 1 */}
              <div className="flex items-center gap-[60px] md:gap-[80px] pr-[60px] md:pr-[80px]">
                {brands.map((brand, idx) => (
                  <img
                    key={`logo-1-${idx}`}
                    src={brand.url}
                    alt={brand.name}
                    className="h-[28px] md:h-[32px] w-auto flex-shrink-0 brand-logo-img"
                    onError={(e) => {
                      e.currentTarget.src = "https://logo.clearbit.com/" + brand.name.toLowerCase() + ".com";
                    }}
                  />
                ))}
              </div>
              
              {/* Track 2 (Duplicate for seamless loop) */}
              <div className="flex items-center gap-[60px] md:gap-[80px] pr-[60px] md:pr-[80px]" aria-hidden="true">
                {brands.map((brand, idx) => (
                  <img
                    key={`logo-2-${idx}`}
                    src={brand.url}
                    alt={brand.name}
                    className="h-[28px] md:h-[32px] w-auto flex-shrink-0 brand-logo-img"
                    onError={(e) => {
                      e.currentTarget.src = "https://logo.clearbit.com/" + brand.name.toLowerCase() + ".com";
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
