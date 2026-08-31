"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe2, MessageSquare } from "lucide-react";

const valuePoints = [
  {
    title: "Dedicated Expertise",
    desc: "Get structured assistance for each compliance requirement.",
    icon: CheckCircle2
  },
  {
    title: "Timely Processing",
    desc: "Keep applications, filings and documentation organized and on schedule.",
    icon: Clock
  },
  {
    title: "Digital-First Process",
    desc: "Submit documents and manage compliance requirements through a streamlined digital workflow.",
    icon: Globe2
  },
  {
    title: "Transparent Support",
    desc: "Clear requirements, process information and communication throughout the engagement.",
    icon: MessageSquare
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ComplianceWhy() {
  return (
    <section className="relative w-full bg-white border-y border-[#E8E8E8] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
              WHY BUSINESSES CHOOSE US
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
          >
            Reliable Support for Your Business Compliance
          </motion.h2>
        </div>

        {/* 4 Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {valuePoints.map((point, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#E8E8E8] flex items-center justify-center mb-6 group-hover:bg-[#E31E24]/5 group-hover:border-[#E31E24]/30 transition-all duration-300">
                <point.icon className="w-5 h-5 text-[#666666] group-hover:text-[#E31E24] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-[#111111] leading-tight mb-6">{point.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
