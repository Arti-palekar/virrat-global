"use client";

import React from "react";
import { motion } from "framer-motion";

const valuePoints = [
  { value: "100+", label: "Compliance & Business Services" },
  { value: "Business", label: "Registration & Licensing" },
  { value: "Tax", label: "Filing & Compliance" },
  { value: "End-to-End", label: "Compliance Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ComplianceValueStrip() {
  return (
    <div className="w-full bg-white border-y border-[#E8E8E8] relative z-20 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x md:divide-x divide-[#E8E8E8]"
        >
          {valuePoints.map((point, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="py-10 px-4 md:px-8 flex flex-col items-center text-center justify-center group"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#E31E24] mb-2 leading-none transition-transform duration-300 group-hover:scale-110 origin-bottom">
                {point.value}
              </h3>
              <p className="text-xs md:text-sm font-semibold tracking-wider text-[#111111] uppercase max-w-[150px]">
                {point.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
