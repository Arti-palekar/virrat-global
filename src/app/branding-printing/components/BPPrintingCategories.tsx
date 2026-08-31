"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Package, LayoutTemplate, Megaphone } from "lucide-react";

const CATEGORIES = [
    { title: "Marketing Collateral", icon: <FileText className="w-8 h-8"/>, items: ["Brochures", "Flyers", "Catalogs", "Posters"] },
    { title: "Packaging & Labels", icon: <Package className="w-8 h-8"/>, items: ["Product Boxes", "Shopping Bags", "Custom Labels", "Tags"] },
    { title: "Corporate Stationery", icon: <LayoutTemplate className="w-8 h-8"/>, items: ["Business Cards", "Letterheads", "Envelopes", "ID Cards"] },
    { title: "Large Format", icon: <Megaphone className="w-8 h-8"/>, items: ["Billboards", "Standees", "Banners", "Signages"] }
];

export default function BPPrintingCategories() {
    return (
        <section className="w-full bg-[#FAFAFA] border-t border-gray-200 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-12">
                    <span className="homepage-section-tag">Printing Categories</span>
                    <h2 className="homepage-section-title text-center mb-5">
                        Premium physical <span>touchpoints.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                            <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-[#d62020] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-[#111111] mb-6">{cat.title}</h3>
                            <ul className="space-y-2">
                                {cat.items.map((item, j) => (
                                    <li key={j} className="text-[#666666] flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-[#d62020] before:rounded-full">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
