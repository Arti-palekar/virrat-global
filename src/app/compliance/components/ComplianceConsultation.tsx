"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ComplianceConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Consultation request submitted! We will get back to you soon.");
    }, 1500);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-black/5 px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
                COMPLIANCE CONSULTATION
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight mb-6"
            >
              Get the Right Compliance Guidance for Your Business
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#666666] leading-relaxed mb-8"
            >
              Tell us what your business needs and our team will help you understand the relevant registrations, licences and compliance requirements.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start space-x-4 p-6 bg-[#FAF9F6] border border-[#E8E8E8] rounded-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#111111] mb-1">Fast Response Time</h4>
                <p className="text-sm text-[#666666]">Our compliance experts typically respond within 1-2 business hours.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-[#E8E8E8] shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-3xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Business / Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Business Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111] appearance-none">
                  <option value="">Select business type</option>
                  <option value="Startup">Startup / New Business</option>
                  <option value="SME">SME / Established Business</option>
                  <option value="Freelancer">Freelancer / Professional</option>
                  <option value="E-commerce">E-commerce / Retail</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">What do you need help with?</label>
                <input required type="text" placeholder="e.g. GST Registration, Company Incorporation" className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Message (Optional)</label>
                <textarea rows={3} placeholder="Tell us more about your specific requirements..." className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E8E8E8] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all text-[#111111] resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#E31E24] text-white font-bold text-center hover:bg-[#c9181d] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Request Compliance Assistance →"}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                We'll review your requirements and get back to you with the next steps.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
