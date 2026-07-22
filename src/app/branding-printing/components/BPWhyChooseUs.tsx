"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Award } from "lucide-react";

export default function BPWhyChooseUs() {
    return (
        <section className="w-full bg-white py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-20">
                    <span className="homepage-section-tag">Why Virrat Global</span>
                    <h2 className="homepage-section-title text-center">
                        Built for impact.<br/>
                        <span>Engineered for scale.</span>
                    </h2>
                </div>

                {/* Bento Box Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    
                    {/* Large Box */}
                    <div className="md:col-span-2 md:row-span-2 bg-[#FAFAFA] rounded-3xl p-10 flex flex-col justify-between border border-gray-100 group hover:border-[#d62020]/30 hover:shadow-xl transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#d62020] mb-8">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-heading text-[#111111] mb-4">Uncompromising Quality</h3>
                            <p className="text-[#666666] text-lg max-w-md">
                                We source the highest grade materials for print and apply world-class design standards to every brand asset. No corners cut, ever.
                            </p>
                        </div>
                    </div>

                    {/* Small Box 1 */}
                    <div className="bg-[#111111] rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                            <Target className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-white mb-3">Strategic Depth</h3>
                            <p className="text-gray-400 text-sm">
                                We don't just make things look pretty. Every design choice is backed by market research and brand psychology.
                            </p>
                        </div>
                    </div>

                    {/* Small Box 2 */}
                    <div className="bg-[#FAFAFA] rounded-3xl p-8 flex flex-col justify-between border border-gray-100 group hover:border-[#d62020]/30 hover:shadow-xl transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#d62020] mb-6 shadow-sm">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-[#111111] mb-3">Rapid Execution</h3>
                            <p className="text-[#666666] text-sm">
                                Enterprise-grade workflows ensure your branding and printing projects are delivered on time, every time.
                            </p>
                        </div>
                    </div>

                    {/* Wide Box */}
                    <div className="md:col-span-3 bg-[#d62020] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                        
                        <div className="relative z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
                            <h3 className="text-3xl font-bold font-heading text-white mb-4">Award-Winning Creative Team</h3>
                            <p className="text-white/80 text-lg">
                                Our team consists of industry veterans who have shaped identities for leading brands across the globe.
                            </p>
                        </div>
                        
                        <div className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#d62020] shrink-0 shadow-2xl">
                            <Award className="w-10 h-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
