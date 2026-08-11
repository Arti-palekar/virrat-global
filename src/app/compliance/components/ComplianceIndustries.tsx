"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, ShoppingCart, Landmark, Stethoscope, Factory, Briefcase, Rocket } from "lucide-react";

const industries = [
  { name: "IT & Software", desc: "Secure cloud data and ensure SOC 2 readiness.", icon: Monitor },
  { name: "E-commerce", desc: "Protect customer data and maintain PCI DSS compliance.", icon: ShoppingCart },
  { name: "Finance & FinTech", desc: "Meet strict regulatory and financial data standards.", icon: Landmark },
  { name: "Healthcare", desc: "Safeguard patient records and ensure HIPAA compliance.", icon: Stethoscope },
  { name: "Manufacturing", desc: "Protect intellectual property and supply chain data.", icon: Factory },
  { name: "Professional Services", desc: "Secure client information and internal policies.", icon: Briefcase },
  { name: "Startups & SMEs", desc: "Build a scalable compliance foundation from day one.", icon: Rocket },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ComplianceIndustries() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#FAF9F6]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
          >
            Compliance Across Industries
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col bg-white border border-[#E8E8E8] rounded-2xl p-6 hover:-translate-y-1 hover:border-[#E31E24]/30 hover:shadow-lg hover:shadow-[#E31E24]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center group-hover:bg-[#E31E24]/10 transition-colors duration-300">
                  <ind.icon className="w-5 h-5 text-[#666666] group-hover:text-[#E31E24] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-[#111111] leading-tight">{ind.name}</h3>
              </div>
              <p className="text-sm text-[#666666] leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card in the grid */}
          <motion.div
            variants={cardVariants}
            className="group flex flex-col justify-center bg-[#E31E24] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-[#ffffff] mb-2 leading-tight">Don't see your industry?</h3>
            <p className="text-sm text-[#ffffff] mb-4">We adapt our compliance solutions to fit your unique requirements.</p>
            <a href="/contact" className="text-[#ffffff] font-semibold text-sm flex items-center group-hover:opacity-80 transition-opacity duration-300">
              Let's Talk &rarr;
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
