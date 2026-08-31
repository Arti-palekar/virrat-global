"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PenTool, Palette, Package, Printer, ArrowUpRight } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */

const EXPERTISE = [
  { icon: PenTool,  label: "Logo Design" },
  { icon: Palette,  label: "Brand Identity" },
  { icon: Package,  label: "Packaging Design" },
  { icon: Printer,  label: "Premium Print Design" },
];

const MARQUEE_CHUNK = "START YOUR PROJECT";
const MARQUEE_TILES = Array(12).fill(MARQUEE_CHUNK);

/* ─── ANIMATION HELPERS ─────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

/* ─── COMPONENT ─────────────────────────────────────────────── */

export default function BPBrandingSolutions() {
  return (
    <section className="w-full bg-white overflow-hidden py-16 md:py-24" aria-label="Our Process">

      {/* ── TOP: SECTION TAG ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="homepage-section-tag inline-block mb-12"
        >
          OUR PROCESS
        </motion.span>

        {/* ── GRID: LEFT CARDS + RIGHT MEGA TYPE ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0 pb-20 md:pb-24">

          {/* LEFT: Expertise cards */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-3">

            {/* Small descriptor above cards */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[13px] text-[#888888] font-medium mb-3 tracking-wide uppercase font-mono"
            >
              What we create
            </motion.p>

            {EXPERTISE.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 px-5 py-4 rounded-[14px] border border-[#EBEBEB] bg-white hover:border-[#D62020]/50 hover:shadow-[0_6px_28px_rgba(214,32,32,0.09)] transition-all duration-300 cursor-default"
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-[10px] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D62020] transition-colors duration-300">
                  <Icon
                    className="w-[18px] h-[18px] text-[#444444] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.6}
                  />
                </div>

                {/* Label */}
                <span className="text-[15px] font-semibold text-[#111111] font-heading leading-none">
                  {label}
                </span>

                {/* Arrow */}
                <ArrowUpRight
                  className="w-4 h-4 ml-auto text-[#CCCCCC] group-hover:text-[#D62020] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Mega editorial typography */}
          <div className="lg:col-span-8 xl:col-span-9 lg:pl-10 xl:pl-16 flex flex-col gap-0 select-none">
            {(
              [
                { word: "DESIGN",  offset: "0%",   color: "#111111" },
                { word: "PRINT",   offset: "6%",   color: "#D62020" },
                { word: "DELIVER", offset: "2%",   color: "#111111" },
              ] as const
            ).map(({ word, offset, color }, i) => (
              <motion.div
                key={word}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden leading-none"
                style={{ marginLeft: offset }}
              >
                <motion.span
                  whileHover={{ letterSpacing: "0.02em", color: color === "#D62020" ? "#111111" : "#D62020" }}
                  transition={{ duration: 0.3 }}
                  className="block font-heading font-black leading-[0.85] tracking-tighter uppercase cursor-default"
                  style={{
                    fontSize: "clamp(4.5rem, 12.5vw, 15rem)",
                    color,
                    WebkitTextStrokeWidth: color === "#D62020" ? "0px" : "0px",
                  }}
                >
                  {word}
                </motion.span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── DIVIDER LINE ─────────────────────────────────────── */}
      <div className="w-full border-t border-[#111111]" />

      {/* ── MARQUEE STRIP ────────────────────────────────────── */}
      <div className="bg-[#111111] py-[14px] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap will-change-transform"
        >
          {MARQUEE_TILES.concat(MARQUEE_TILES).map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-7 text-[11px] font-black tracking-[0.3em] uppercase text-white"
            >
              {text}
              <span className="w-[5px] h-[5px] rounded-full bg-[#D62020] inline-block flex-shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── CTA AREA ─────────────────────────────────────────── */}
      <div className="w-full border-b border-[#111111]" />

      <div className="flex items-center justify-center py-14 md:py-20 px-6 bg-white">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-[13px] font-mono text-[#888888] tracking-widest uppercase">
            Ready to elevate your brand?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(214,32,32,0.32)] transform hover:-translate-y-[2px]"
          >
            Start Your Project
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>

    </section>
  );
}
