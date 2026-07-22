"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";


export default function HeroH1() {
  const containerRef = useRef<HTMLElement>(null);
  // Scroll scale parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);



  return (
    <motion.section
      ref={containerRef}
      style={{
        position: "relative",
        background: "radial-gradient(circle at 50% 120%, #FFF7F7 0%, #FFFFFF 50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "120px 24px 80px",
        overflow: "hidden",
        scale: heroScale,
      }}
    >
      {/* ── Background Dotted & Grid Overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(214,32,32,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />



      {/* ── Content Area (Headline & CTAs) ── */}
      <div
        style={{
          maxWidth: "840px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          marginBottom: "50px",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#FFF7F7",
            border: "1px solid #F1D6D6",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#D62020", fontSize: "1rem", fontWeight: 400 }}>
            CREATIVE BRANDING STUDIO
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "#313131",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Build <span style={{ color: "#D62020" }}>Powerful Brands</span><br />
          That Leave a Lasting Impression.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "1rem",
            fontWeight: 400,
            color: "#666666",
            lineHeight: 1.85,
            maxWidth: "640px",
            margin: "0 auto 32px",
          }}
        >
          From logo design and brand identity to premium packaging, marketing materials and high-quality printing, we help businesses create unforgettable brand experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          className="flex flex-col sm:flex-row items-center w-full max-w-[400px] sm:max-w-none mx-auto"
        >
          <a
            href="https://virratglobal.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#D62020",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 400,
              padding: "14px 28px",
              borderRadius: "10px",
              boxShadow: "0 6px 18px rgba(214,32,32,0.15)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            className="w-full sm:w-auto"
          >
            Get Free Consultation <ArrowRight size={14} />
          </a>

          <a
            href="#portfolio"
            style={{
              background: "#FFFFFF",
              color: "#D62020",
              border: "1.5px solid #D62020",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 400,
              padding: "14px 28px",
              borderRadius: "10px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="w-full sm:w-auto"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>


    </motion.section>
  );
}
