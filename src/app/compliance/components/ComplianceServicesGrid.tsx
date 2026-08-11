"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Scale, 
  ShieldCheck, 
  Lock, 
  FileText, 
  AlertTriangle, 
  ClipboardCheck, 
  Users, 
  LineChart 
} from "lucide-react";

const services = [
  {
    title: "Regulatory Compliance",
    desc: "Understand and implement the regulatory requirements relevant to your business.",
    icon: Scale
  },
  {
    title: "Data Privacy & Protection",
    desc: "Strengthen how your organization collects, processes, stores and protects sensitive data.",
    icon: ShieldCheck
  },
  {
    title: "Information Security Compliance",
    desc: "Build practical security controls and processes aligned with compliance requirements.",
    icon: Lock
  },
  {
    title: "Policy & Documentation",
    desc: "Create clear policies, SOPs and documentation required for consistent compliance.",
    icon: FileText
  },
  {
    title: "Risk Assessment & Management",
    desc: "Identify compliance risks, evaluate their impact and establish mitigation strategies.",
    icon: AlertTriangle
  },
  {
    title: "Audit & Compliance Readiness",
    desc: "Prepare your organization for internal reviews, external audits and compliance assessments.",
    icon: ClipboardCheck
  },
  {
    title: "Vendor & Third-Party Compliance",
    desc: "Assess third-party risks and establish appropriate vendor compliance processes.",
    icon: Users
  },
  {
    title: "Ongoing Compliance Monitoring",
    desc: "Track changes, monitor controls and continuously improve your compliance posture.",
    icon: LineChart
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ComplianceServicesGrid() {
  return (
    <section id="services" className="relative w-full py-20 lg:py-32 bg-[#FAF9F6]">
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
              WHAT WE HELP WITH
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] max-w-2xl leading-tight"
          >
            Compliance Solutions Built Around Your Business
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="group relative bg-white border border-[#E8E8E8] rounded-[24px] p-8 flex flex-col items-start hover:-translate-y-1 hover:border-[#E31E24]/30 hover:shadow-[0_12px_40px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-black/5 group-hover:bg-[#E31E24]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(227,30,36,0.3)]">
                <service.icon className="w-6 h-6 text-[#111111] group-hover:text-[#E31E24] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              {/* Text */}
              <h3 className="text-lg font-bold text-[#111111] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
