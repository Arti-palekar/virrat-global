"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, LockKeyhole, FileCheck, RefreshCw } from "lucide-react";

const values = [
  { label: "Risk Reduction", icon: ShieldAlert },
  { label: "Data Protection", icon: LockKeyhole },
  { label: "Audit Readiness", icon: FileCheck },
  { label: "Continuous Compliance", icon: RefreshCw },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.5 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ComplianceValueStrip() {
  return (
    <section className="relative w-full pb-16 z-20 -mt-10 lg:-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="bg-white border border-[#E8E8E8] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 lg:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-x-0 md:divide-x divide-[#E8E8E8]">
            {values.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-8' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#E31E24]" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-[#111111] text-sm md:text-base leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
