"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function ComplianceCTA() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#111111] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E31E24]/20 to-[#FF7A59]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E31E24] to-[#FF7A59] opacity-20 animate-pulse" />
            <ShieldCheck className="w-10 h-10 text-[#E31E24]" strokeWidth={1.5} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white max-w-3xl leading-[1.1] mb-6"
          >
            READY TO STRENGTHEN YOUR COMPLIANCE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-[600px] leading-relaxed mb-10"
          >
            Let's identify your compliance gaps and build a practical path toward a more secure, compliant and trusted business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#E31E24] to-[#FF7A59] text-white font-bold text-lg hover:shadow-[0_8px_30px_rgba(227,30,36,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Get Started &rarr;
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
