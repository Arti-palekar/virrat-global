"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, ShieldAlert, GitMerge, FileSearch, LineChart } from "lucide-react";

const workflowSteps = [
  { name: "DATA", icon: Database },
  { name: "RISK DETECTION", icon: ShieldAlert },
  { name: "COMPLIANCE WORKFLOW", icon: GitMerge },
  { name: "REVIEW", icon: FileSearch },
  { name: "REPORTING", icon: LineChart },
];

export default function ComplianceTechWorkflow() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
              MAKE COMPLIANCE SMARTER
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight mb-6"
          >
            Technology-Assisted Compliance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#666666] max-w-[600px] leading-relaxed"
          >
            Combine structured compliance practices with modern technology to simplify monitoring, documentation and reporting.
          </motion.p>
        </div>

        {/* Workflow Visual */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#E8E8E8] -translate-y-1/2 z-0" />
          
          {/* Desktop Animated Line Overlay */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 z-0 overflow-hidden">
            <motion.div 
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#E31E24] to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Mobile Connecting Line (between items) */}
                {idx !== 0 && (
                  <div className="block md:hidden w-[1px] h-8 bg-[#E8E8E8] relative -my-4 z-0">
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#E31E24] to-transparent"
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: idx * 0.2 }}
                    />
                  </div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: idx * 0.15, type: "spring" }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8E8E8] shadow-sm flex items-center justify-center mb-4 group-hover:border-[#E31E24]/30 group-hover:shadow-[0_8px_20px_rgba(227,30,36,0.1)] transition-all duration-300 relative">
                    {/* Subtle pulse */}
                    <div className="absolute inset-0 rounded-2xl bg-[#E31E24] opacity-0 group-hover:animate-ping" style={{ animationDuration: '2s' }} />
                    <step.icon className="w-7 h-7 text-[#111111] group-hover:text-[#E31E24] transition-colors relative z-10" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold text-[#111111] tracking-widest uppercase text-center w-full md:w-[120px] leading-tight">
                    {step.name}
                  </span>
                </motion.div>
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
