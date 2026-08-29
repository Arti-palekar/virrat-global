"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ComplianceHero() {
  return (
    <section className="compliance-hero relative w-full h-[85vh] min-h-[600px] flex items-end pb-12 lg:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
          alt="Compliance Team"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.01) 25%,
              rgba(0, 0, 0, 0.15) 45%,
              rgba(5, 15, 28, 0.65) 75%,
              rgba(5, 15, 28, 0.9) 100%
            )`
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px]"
        >
          <p 
            className="font-[800] !text-[#FFFFFF] leading-[1.1] mb-4 tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 54px)", color: "#FFFFFF" }}
          >
            Licensing, Compliance & Business Support — All in One Place
          </p>
          <p 
            className="text-[18px] md:text-[20px] !text-[#FFFFFF] mb-8 max-w-3xl font-medium leading-[1.5]"
            style={{ color: "#FFFFFF" }}
          >
            Simplify your regulatory journey with expert guidance and seamless business support solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]">
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-[#E52521] hover:bg-[#C91A16] !text-[#FFFFFF] font-semibold rounded text-center shadow-lg transition-colors border border-transparent"
              style={{ color: "#FFFFFF" }}
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="px-8 py-3.5 bg-transparent border border-white/40 hover:bg-white/10 !text-[#FFFFFF] font-semibold rounded transition-colors text-center"
              style={{ color: "#FFFFFF" }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
