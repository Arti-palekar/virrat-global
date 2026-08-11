"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ComplianceHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-end pb-12 lg:pb-20">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#09111A] via-[#09111A]/80 to-[#09111A]/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px]"
        >
          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.2] mb-4 tracking-tight">
            Licensing, Compliance & Business Support — All in One Place
          </h1>
          <p className="text-base md:text-[19px] text-white/80 mb-8 max-w-3xl font-medium">
            Simplify your regulatory journey with expert guidance and seamless business support solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]">
            <Link 
              href="/contact"
              className="px-8 py-3.5 bg-[#3B6A35] hover:bg-[#2d5228] text-white font-semibold rounded text-center shadow-lg transition-colors border border-transparent"
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="px-8 py-3.5 bg-transparent border border-white/40 hover:bg-white/10 text-white font-semibold rounded transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
