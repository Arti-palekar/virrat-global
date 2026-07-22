"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Building2, Home, Stethoscope, GraduationCap, Coins, TrendingUp, CheckCircle2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DMIndustries() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-b border-[#EBEBEB]" aria-label="Industries We Serve">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#EBEBEB]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="homepage-section-tag inline-block mb-3"
            >
              VERTICAL BENTO GRID
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="homepage-section-title m-0"
            >
              Tailored Blueprints For <br />
              <span>Your Specific Industry.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="text-[16px] text-[#666666] leading-relaxed max-w-md font-body m-0"
          >
            One-size-fits-all marketing fails. We build industry-specific growth engines tailored to your specific buyer journey and unit economics.
          </motion.p>
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Tile 1 (2-Col Span): E-Commerce & D2C */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="md:col-span-2 lg:col-span-2 group p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#D62020] shadow-sm">
                  <ShoppingBag className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] bg-[#D62020]/10 px-3 py-1 rounded-full uppercase">
                  D2C & E-COMMERCE
                </span>
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#111111] font-heading leading-tight mb-3 group-hover:text-[#D62020] transition-colors">
                E-Commerce & D2C Brands
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed font-body mb-6 max-w-xl">
                Scaling online revenue through Meta Catalog Ads, Google Shopping PMax, Klaviyo abandoned cart flows, and high-converting PDP optimization.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#EBEBEB] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[13px] font-bold text-[#111111] font-heading">
                <CheckCircle2 className="w-4 h-4 text-[#D62020]" /> Meta Catalog & Google Shopping Engine
              </div>
              <span className="text-[12px] font-mono text-[#27C93F] font-bold">5.8x+ ROAS</span>
            </div>
          </motion.div>

          {/* Bento Tile 2 (1-Col): B2B SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <Building2 className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">B2B SAAS & TECH</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug mb-3 group-hover:text-[#D62020] transition-colors">
                Account-Based ABM
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                Capturing C-Suite buyers with targeted LinkedIn sponsored content & SEO lead magnets.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#27C93F]">C-Suite Lead Pipeline</span>
            </div>
          </motion.div>

          {/* Bento Tile 3 (1-Col): Real Estate */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <Home className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">REAL ESTATE</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug mb-3 group-hover:text-[#D62020] transition-colors">
                Site Visit Funnels
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                Hyper-local ad campaigns, virtual site tours, and instant CRM lead triggers.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#D62020]">High-Intent Bookings</span>
            </div>
          </motion.div>

          {/* Bento Tile 4 (1-Col): Healthcare */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#111111] group-hover:text-[#D62020] transition-colors mb-6 shadow-sm">
                <Stethoscope className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#777777] uppercase block mb-2">HEALTHCARE</span>
              <h3 className="text-[20px] font-bold text-[#111111] font-heading leading-snug mb-3 group-hover:text-[#D62020] transition-colors">
                Local Map Pack #1
              </h3>
              <p className="text-[14px] text-[#666666] leading-relaxed font-body">
                HIPAA-compliant patient acquisition & local search dominance for clinics.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBEBEB]">
              <span className="text-[12px] font-mono font-bold text-[#111111]">Map Pack Dominance</span>
            </div>
          </motion.div>

          {/* Bento Tile 5 (3-Col Span): Fintech & Education */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="md:col-span-3 lg:col-span-3 group p-8 md:p-10 rounded-[24px] bg-[#F8F9FA] border border-[#EBEBEB] hover:border-[#D62020]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(214,32,32,0.08)] transition-all duration-400 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#EBEBEB] flex items-center justify-center text-[#D62020] mb-6 shadow-sm">
                <Coins className="w-6 h-6" strokeWidth={1.8} />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D62020] uppercase block mb-2">
                FINTECH & EDUCATION
              </span>
              <h3 className="text-[24px] font-bold text-[#111111] font-heading leading-tight mb-3 group-hover:text-[#D62020] transition-colors">
                Trust-Building Campaigns for High-LTV Services
              </h3>
              <p className="text-[15px] text-[#666666] leading-relaxed font-body">
                Compliant performance marketing, webinar funnels, and brand positioning engineered for financial services, fintech apps, and higher education institutes.
              </p>
            </div>

            <div className="w-full lg:w-72 p-6 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm flex flex-col gap-3 shrink-0">
              <div className="flex items-center justify-between text-[12px] font-mono font-bold">
                <span className="text-[#777777]">TRUST PROTOCOLS</span>
                <span className="text-[#D62020]">VERIFIED</span>
              </div>
              <div className="w-full h-2 bg-[#F0F0F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#D62020] w-full rounded-full" />
              </div>
              <span className="text-[11px] text-[#777777] font-mono">Compliant High-LTV Acquisition</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
