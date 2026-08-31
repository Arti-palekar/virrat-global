"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ComplianceHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={containerRef}
      className="compliance-hero relative w-full h-[90vh] min-h-[650px] overflow-hidden flex items-center bg-[#FAF9F6]"
    >
      {/* ── Background Image with Parallax ── */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/compliance/hero-bg.jpg"
          alt="Compliance Services Background"
          fill
          className="object-cover object-center lg:object-right"
          priority
          quality={90}
        />
      </motion.div>

      {/* ── Mobile/Tablet Readability Overlay ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent lg:hidden pointer-events-none" />

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-16">
        <motion.div
          className="max-w-[800px] lg:max-w-[700px] flex flex-col items-start text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.05] text-zinc-950 mb-6"
          >
            Licensing, Compliance & Business Support — All in One Place
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-700 leading-relaxed max-w-2xl mb-10 font-medium"
          >
            Simplify your regulatory journey with expert guidance and seamless business support solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#E52521] hover:bg-[#C91A16] text-white font-bold text-sm md:text-base rounded shadow-lg shadow-red-900/20 transition-all hover:-translate-y-0.5 text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-zinc-300 hover:border-zinc-950 text-zinc-950 font-bold text-sm md:text-base rounded transition-all hover:bg-zinc-50 text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
