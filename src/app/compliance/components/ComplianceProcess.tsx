"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldAlert, FileEdit, Send, RefreshCw } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Meet & Understand",
    description: "We meet and learn about your business, your purpose, and set clear compliance goals for the project.",
    icon: Search
  },
  {
    num: "02",
    title: "Identify",
    description: "We review the regulations and identify applicable registrations, licences, and compliance obligations.",
    icon: ShieldAlert
  },
  {
    num: "03",
    title: "Prepare",
    description: "We prepare all necessary documents, forms, and required information to ensure a smooth application.",
    icon: FileEdit
  },
  {
    num: "04",
    title: "File & Present",
    description: "We submit applications, registrations, or returns accurately to the respective government authorities.",
    icon: Send
  },
  {
    num: "05",
    title: "Maintain",
    description: "Once approved, we track renewals, filings, and ongoing compliance requirements for your business.",
    icon: RefreshCw
  }
];

export default function ComplianceProcess() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 border-t border-[#E8E8E8] overflow-hidden text-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 mb-16 text-left">
        <p className="text-xs uppercase tracking-widest text-[#E31E24] font-bold mb-3">Our Process</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] max-w-3xl leading-tight">
          A Streamlined Path to Compliance
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 border-b border-gray-200/60">
        {processSteps.map((step, idx) => {
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:grid md:grid-cols-[1fr_380px_100px] items-start md:items-center py-8 md:py-12 border-t border-gray-200/60 transition-all duration-300 group cursor-pointer hover:bg-gray-50/30 px-4 md:px-8"
            >
              {/* Title Column */}
              <div className="pr-16 md:pr-0">
                <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 transition-colors duration-200 group-hover:text-[#E52521]">
                  {step.num}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#111111] tracking-tight transition-colors duration-200 group-hover:!text-[#E52521] leading-tight">
                  {step.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="mt-4 md:mt-0 max-w-md md:pl-8">
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-body text-left">
                  {step.description}
                </p>
              </div>

              {/* Circular Icon Container */}
              <div className="absolute right-4 top-8 md:static md:flex md:justify-end md:w-full mt-2 md:mt-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 bg-white transition-all duration-200 group-hover:border-[#E52521] group-hover:text-[#E52521] group-hover:translate-y-[-4px] group-hover:shadow-md">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
