"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe2, CreditCard, HeartPulse, Building2, Server } from "lucide-react";

const frameworks = [
  { name: "ISO 27001", desc: "Information Security", icon: Server },
  { name: "SOC 2", desc: "Trust Services Criteria", icon: ShieldCheck },
  { name: "GDPR", desc: "EU Data Privacy", icon: Globe2 },
  { name: "DPDP Act", desc: "India Data Protection", icon: Lock },
  { name: "PCI DSS", desc: "Payment Security", icon: CreditCard },
  { name: "HIPAA", desc: "Healthcare Privacy", icon: HeartPulse },
  { name: "ISO 9001", desc: "Quality Management", icon: Building2 },
];

export default function ComplianceFrameworks() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
              COMPLIANCE FRAMEWORKS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
          >
            Standards That Help Businesses Stay Ready
          </motion.h2>
        </div>

        {/* Frameworks Grid / Carousel */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
          {frameworks.map((fw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex-shrink-0 w-[240px] lg:w-auto snap-center group relative bg-[#FAF9F6] border border-[#E8E8E8] rounded-2xl p-6 flex flex-col items-start hover:-translate-y-1 hover:border-[#E31E24]/30 hover:shadow-lg hover:shadow-[#E31E24]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center mb-4 group-hover:border-[#E31E24]/50 transition-colors duration-300">
                <fw.icon className="w-5 h-5 text-[#666666] group-hover:text-[#E31E24] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#111111] leading-tight mb-1">{fw.name}</h3>
              <p className="text-sm text-[#666666]">{fw.desc}</p>
            </motion.div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </section>
  );
}
