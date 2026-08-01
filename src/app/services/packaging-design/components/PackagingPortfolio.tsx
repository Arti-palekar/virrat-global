"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  industry: string;
  type: string;
  img: string;
  spanClass: string;
  heightClass: string;
  offsetClass?: string;
}

const projects: Project[] = [
  {
    name: "Luxury Cosmetic Collection",
    industry: "Cosmetics & Beauty",
    type: "Premium Outer Box & Frosted Bottle",
    img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[450px] md:h-[600px]"
  },
  {
    name: "Opaline Jewellery Box",
    industry: "Luxury Accessories",
    type: "Hinged Velvet Cases",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[400px] md:h-[500px]",
    offsetClass: "md:mt-24"
  },
  {
    name: "Pure Harvest Granola Pouch",
    industry: "Organic Food & Snack",
    type: "Stand-Up Resealable Pouches",
    img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[400px] md:h-[500px]",
    offsetClass: "md:-mt-12"
  },
  {
    name: "Solaris Botanicals Tea Can",
    industry: "Beverages",
    type: "Textured Matte Aluminum Cans",
    img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[450px] md:h-[580px]",
    offsetClass: "md:mt-12"
  },
  {
    name: "Eco-Aura Soap Sleeves",
    industry: "FMCG / Bathing",
    type: "Recycled Die-Cut Sleeves",
    img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[400px] md:h-[480px]",
    offsetClass: "md:-mt-24"
  }
];

export default function PackagingPortfolio() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Asymmetric Header Grid: Vertical Typography + Main Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-2 hidden lg:block">
            {/* Vertical Typography */}
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-300 transform rotate-90 origin-left translate-x-4 translate-y-12">
              FEATURED &bull; PACKAGING &bull; WORK
            </div>
          </div>
          <div className="lg:col-span-10">
            <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Showcase</span>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mt-4 max-w-[20ch]">
              Design That Inspires Unboxing &amp; Drives Retail Shelf Growth.
            </h2>
          </div>
        </div>

        {/* Asymmetric Portfolio Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-zinc-50 border border-zinc-100 ${project.spanClass} ${project.heightClass} ${project.offsetClass || ""}`}
            >
              {/* Image Container with Hover Scale */}
              <div className="w-full h-full overflow-hidden absolute inset-0">
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  whileHover={{ scale: 1.04 }}
                />
                
                {/* Reveal Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-8" />
              </div>

              {/* Text overlay (visible on hover) */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#fd2e35] mb-2">{project.industry}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight">{project.name}</h3>
                <p className="text-xs text-white/60 font-light mt-2 mb-4">{project.type}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#fd2e35] transition-colors"
                >
                  VIEW PROJECT <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
