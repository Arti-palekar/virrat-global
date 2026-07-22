"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BPContactCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="w-full bg-white pt-32 pb-20 overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Massive CTA Text */}
                <motion.div 
                    style={{ scale, opacity }} 
                    className="text-center mb-24"
                >
                    <h2 className="text-[10vw] md:text-[8vw] font-[900] font-heading leading-[0.85] tracking-[-0.04em] text-[#111111] uppercase">
                        Let's build <br/>
                        <span className="text-[#d62020]">your brand.</span>
                    </h2>
                </motion.div>

                {/* Minimalist Contact Block */}
                <div className="max-w-3xl mx-auto bg-[#FAFAFA] p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-bold font-heading text-[#111111] mb-8">Ready to start? Send us a message.</h3>
                    
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-3 text-[#111111] focus:outline-none focus:border-[#d62020] transition-colors placeholder-transparent" required />
                                <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#d62020] peer-valid:-top-4 peer-valid:text-xs">Your Name</label>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-3 text-[#111111] focus:outline-none focus:border-[#d62020] transition-colors placeholder-transparent" required />
                                <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#d62020] peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
                            </div>
                        </div>

                        <div className="relative">
                            <textarea id="message" rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-gray-300 py-3 text-[#111111] focus:outline-none focus:border-[#d62020] transition-colors placeholder-transparent resize-none" required />
                            <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#d62020] peer-valid:-top-4 peer-valid:text-xs">Project Details</label>
                        </div>

                        <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#111111] text-white font-bold tracking-wide uppercase text-sm hover:bg-[#d62020] transition-colors duration-300">
                            Submit Inquiry
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
