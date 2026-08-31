"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function ComplianceCTA() {
  return (
    <section className="relative w-full bg-[#E31E24] overflow-hidden py-16 md:py-24">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 backdrop-blur-sm"
          >
            <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight mb-6"
          >
            Stay Compliant. Keep Growing.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            Let us help you simplify registrations, licences, filings and ongoing compliance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#E31E24] font-bold text-lg hover:bg-black hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Talk to Our Compliance Team &rarr;
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
