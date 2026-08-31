"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Layers,
  CreditCard,
  Book,
  Box,
  Pencil,
  Gift,
  Layout,
  ArrowRight
} from "lucide-react";

// Feature list explicitly requested
const features = [
  {
    id: "logo",
    title: "Logo Design",
    desc: "Memorable brand identities with lasting impressions.",
    img: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&w=800&q=80",
    icon: PenTool,
  },
  {
    id: "identity",
    title: "Brand Identity",
    desc: "Complete visual frameworks and styling guidelines.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
    icon: Layers,
  },
  {
    id: "cards",
    title: "Business Cards",
    desc: "Premium 400GSM cards with luxury finishes.",
    img: "https://images.unsplash.com/photo-1589041127168-9b1915731def?auto=format&fit=crop&w=800&q=80",
    icon: CreditCard,
  },
  {
    id: "brochure",
    title: "Brochure Design",
    desc: "Corporate portfolios and high-end catalogs.",
    img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    icon: Book,
  },
  {
    id: "packaging",
    title: "Packaging Design",
    desc: "Eco-friendly duplex boxes with modern aesthetics.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    icon: Box,
  },
  {
    id: "stationery",
    title: "Corporate Stationery",
    desc: "Letterheads, envelopes, and office branding.",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    icon: Pencil,
  },
  {
    id: "gifts",
    title: "Corporate Gifts",
    desc: "Customized promotional packages and branded items.",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    icon: Gift,
  },
  {
    id: "billboard",
    title: "Billboard Printing",
    desc: "Large-format outdoor advertising with high visibility.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    icon: Layout,
  },
];

export default function InteractiveBranding() {
  return (
    <section className="relative w-full bg-[#FFFFFF] ] overflow-hidden font-syne py-16 md:py-24">
      {/* Background Soft Abstract Shapes & Gradients */}
      <div className="absolute top-10 left-[-10%] w-[600px] h-[600px] bg-[#D62020] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[800px] h-[800px] bg-[#D62020] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* 1. CONTAINER WIDTH */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] xl:px-[40px]">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-[#313131] leading-[1.1] mb-6"
          >
            Creative. <br />
            <span className="text-[#D62020]">Branding &amp; Printing</span> Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#666666] text-lg md:text-xl leading-relaxed"
          >
            Discover our premium branding and printing capabilities designed to help businesses build a memorable visual identity.
          </motion.p>
        </div>

        {/* 4. RESPONSIVE GRID & 3. CARD SPACING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative w-full bg-white/90 backdrop-blur-md rounded-[24px] border border-[#ECECEC] shadow-sm hover:shadow-[0_20px_40px_rgba(214,32,32,0.1)] hover:border-[#D62020]/30 flex flex-col cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02]"
              >
                {/* ── TOP: Fixed Image Height (220px) ── */}
                <div className="relative w-full h-[220px] overflow-hidden shrink-0">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Red Gradient Overlay (Fades in on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D62020]/90 to-[#D62020]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out mix-blend-multiply" />
                  
                  {/* Top-left: Small Red Pill Badge with Specific Typography */}
                  <div className="absolute top-4 left-4 bg-[#D62020] text-white font-syne text-[0.72rem] font-semibold tracking-[0.04em] uppercase px-3 py-1.5 rounded-full shadow-md z-10">
                    Premium
                  </div>

                  {/* Top-right: Small Circular Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-[#313131] shadow-sm z-10 transition-colors duration-300 group-hover:bg-[#D62020] group-hover:text-white">
                    <Icon size={14} />
                  </div>
                </div>

                {/* ── CENTER & BOTTOM: Content with 24px padding ── */}
                <div className="p-[24px] flex flex-col flex-1 bg-white relative z-10">
                  {/* Title Typography */}
                  <p className="font-syne text-[1rem] font-semibold leading-[1.4] tracking-[-0.02em] text-[#313131] group-hover:text-[#D62020] transition-colors duration-300 mb-6">
                    {feature.title}
                  </p>
                  
                  {/* Description Typography */}
                  <p className="font-syne text-[0.9rem] font-normal leading-[1.6] text-[#666666] line-clamp-2">
                    {feature.desc}
                  </p>

                  {/* Bottom-right: Animated Arrow */}
                  <div className="mt-auto pt-4 self-end flex items-center text-[#888888] group-hover:text-[#D62020] transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 transform group-hover:rotate-[-45deg] group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
