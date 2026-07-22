"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
    { title: "Brand Identity", desc: "Logos, guidelines, and core visual language.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80" },
    { title: "Packaging Design", desc: "Tactile, premium product packaging.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80" },
    { title: "Corporate Stationery", desc: "Business cards, letterheads, and envelopes.", img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80" },
    { title: "Large Format Print", desc: "Billboards, standees, and exhibition graphics.", img: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=600&q=80" },
];

export default function BPServices() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-32 bg-[#FAFAFA] border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-20">
                    <span className="homepage-section-tag">Core Capabilities</span>
                    <h2 className="homepage-section-title">
                        We design. We print.<br/>
                        <span>We execute.</span>
                    </h2>
                </div>

                <div className="flex flex-col border-t border-[#111111]/10">
                    {SERVICES.map((srv, i) => (
                        <div 
                            key={i}
                            className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-[#111111]/10 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Hover Image Reveal for Desktop */}
                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none z-10 rounded-2xl overflow-hidden shadow-2xl"
                                    >
                                        <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-[#d62020]/20 mix-blend-multiply" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="relative z-20 flex-1">
                                <h3 className="text-3xl md:text-5xl font-bold font-heading text-[#111111] group-hover:text-[#d62020] transition-colors duration-300">
                                    {srv.title}
                                </h3>
                                <p className="mt-4 text-[#666666] text-lg font-sans max-w-sm">
                                    {srv.desc}
                                </p>
                            </div>

                            <div className="relative z-20 mt-6 md:mt-0">
                                <div className="w-16 h-16 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:bg-[#d62020] group-hover:border-[#d62020] group-hover:text-white transition-all duration-300">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
