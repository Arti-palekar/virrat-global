"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}

// Fade up variants for entrance animation
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Image zoom variants for hover animation
const imageHoverVariants: Variants = {
  initial: { scale: 1.04 },
  visible: { scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  hover: { scale: 1.035, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

// Floating content translation on card hover
const contentHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const } },
};

// Staggered reveal for chips/tags
const chipHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02, 
    borderColor: "rgba(214, 32, 32, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" as const } 
  },
};

export default function DMServices() {
  return (
    <section className="w-full py-24 bg-[#ffffff] text-[#111111] px-6 md:px-12 lg:px-24 border-b border-black/[0.04] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-[#d62020] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              OUR DIGITAL MARKETING SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-none uppercase text-[#111111] mb-6">
              Marketing Built for<br />
              <span className="text-[#d62020]">Measurable Growth</span>
            </h2>
            <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-[65ch]">
              From search visibility and paid campaigns to social media and content,
              we build data-driven marketing systems designed to attract, engage
              and convert the right audience.
            </p>
          </div>
          <div className="shrink-0 select-none">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#111111] hover:text-[#d62020] transition-colors duration-300 group"
            >
              Explore Services 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>

        {/* ── CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* CARD 01: PERFORMANCE MARKETING */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            whileHover="hover"
            className="relative flex flex-col items-center group cursor-pointer w-full h-[520px]"
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-[24px] overflow-hidden">
              <motion.img 
                src="/images/services/marketing_performance.png" 
                alt="Performance Marketing"
                initial="initial"
                animate="visible"
                variants={imageHoverVariants}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Info Panel */}
            <motion.div 
              variants={contentHoverVariants}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-[20px] p-6 shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-black/[0.04] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10"
            >
              <h3 className="text-xl font-heading font-bold text-[#111111] mb-2">Performance Marketing</h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-5">
                High-converting paid campaigns built to generate qualified leads and sales.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Google Ads', 'Meta Ads', 'Retargeting', 'Lead Generation'].map((tag, i) => (
                  <motion.span 
                    key={tag}
                    variants={chipHoverVariants}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-transparent transition-colors duration-300 hover:bg-[#d62020]/10 hover:text-[#d62020]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CARD 02: SEO & ORGANIC GROWTH */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            whileHover="hover"
            className="bg-[#F3F6F2] rounded-[24px] p-8 pb-0 flex flex-col justify-between group cursor-pointer h-[520px] border border-black/[0.02] overflow-hidden relative"
          >
            <motion.div variants={contentHoverVariants} className="relative z-10">
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Technical SEO', 'On-Page SEO', 'Local SEO'].map((tag) => (
                  <motion.span 
                    key={tag}
                    variants={chipHoverVariants}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white text-zinc-600 border border-transparent shadow-sm transition-colors duration-300 hover:bg-[#d62020]/10 hover:text-[#d62020]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111111] mb-3">SEO & Organic Growth</h3>
              <p className="text-sm text-[#666666] leading-relaxed max-w-[280px]">
                Build long-term search visibility and attract customers actively looking for your services.
              </p>
            </motion.div>
            
            {/* Image Wrapper at Bottom */}
            <div className="relative w-full h-[260px] rounded-t-[20px] overflow-hidden mt-6 shadow-[0_-8px_20px_rgba(0,0,0,0.02)]">
              <motion.img 
                src="/images/services/marketing_seo.png" 
                alt="SEO & Organic Growth"
                initial="initial"
                animate="visible"
                variants={imageHoverVariants}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CARD 03: SOCIAL MEDIA MARKETING */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            whileHover="hover"
            className="relative rounded-[24px] overflow-hidden group cursor-pointer h-[520px] flex flex-col justify-between p-8 border border-black/[0.02]"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <motion.img 
                src="/images/services/marketing_social.png" 
                alt="Social Media Marketing"
                initial="initial"
                animate="visible"
                variants={imageHoverVariants}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />
            </div>
            
            {/* Content Overlay */}
            <motion.div variants={contentHoverVariants} className="relative z-10">
              <h3 className="text-xl font-heading font-bold mb-3 text-white">Social Media Marketing</h3>
              <p className="text-sm text-white/90 leading-relaxed max-w-[285px]">
                Content and campaigns designed to build attention, engagement and brand authority.
              </p>
            </motion.div>
            
            {/* Chips at Bottom */}
            <motion.div variants={contentHoverVariants} className="relative z-10 flex flex-wrap gap-1.5">
              {['Instagram', 'Facebook', 'LinkedIn', 'Content Strategy'].map((tag) => (
                <motion.span 
                  key={tag}
                  variants={chipHoverVariants}
                  className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-transparent transition-colors duration-300 hover:bg-[#d62020] hover:text-white"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
