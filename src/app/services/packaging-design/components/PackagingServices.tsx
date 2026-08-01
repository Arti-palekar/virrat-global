"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCard {
  num: string;
  title: string;
  desc: string;
  img: string;
  spanClass: string;
  heightClass: string;
}

const servicesList: ServiceCard[] = [
  {
    num: "01",
    title: "Product Packaging",
    desc: "Bespoke structures designed to match the form and protection requirements of your unique products.",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[400px]"
  },
  {
    num: "02",
    title: "Box Packaging",
    desc: "Rigid, folding carton, and corrugated boxes featuring elegant dielines and texture choices.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] sm:h-[400px]"
  },
  {
    num: "03",
    title: "Food & Beverage Packaging",
    desc: "FDA-compliant materials, beverage can designs, and wraps engineered for fresh-keeping and shelf standout.",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] sm:h-[500px]"
  },
  {
    num: "04",
    title: "Cosmetic Packaging",
    desc: "Luxury tubes, jars, dropper bottles, and outer sleeves matching cosmetic and skincare identities.",
    img: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[500px]"
  },
  {
    num: "05",
    title: "Jewellery Packaging",
    desc: "Exquisite drawer boxes, velvet inserts, and premium hinge cases designed to frame precious items.",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  },
  {
    num: "06",
    title: "Label & Sticker Design",
    desc: "Custom shapes, print finishing layouts (foil stamping, emboss) and structural labeling details.",
    img: "https://images.unsplash.com/photo-1572204096076-004028f5e357?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  },
  {
    num: "07",
    title: "Pouch Packaging",
    desc: "Stand-up pouches, flat-bottom pouches, and gusset bags optimized for retail shelves.",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  },
  {
    num: "08",
    title: "Bottle & Jar Labels",
    desc: "Die-cut labels for glass, PET, and jars designed to command attention under shop lighting.",
    img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] sm:h-[450px]"
  },
  {
    num: "09",
    title: "Retail Packaging",
    desc: "Counter displays, blister packs, and cardboard hangtags engineered for point-of-sale efficiency.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] sm:h-[450px]"
  },
  {
    num: "10",
    title: "E-commerce Packaging",
    desc: "Custom mailer boxes, water-activated tapes, and brand tissue wraps designed for an premium unboxing moment.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  },
  {
    num: "11",
    title: "Luxury Packaging",
    desc: "Ultra-premium structures with magnetic latches, custom dielines, and sustainable luxury materials.",
    img: "https://images.unsplash.com/photo-1614859324967-bdf461fec769?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  },
  {
    num: "12",
    title: "Custom Packaging",
    desc: "Avant-garde geometries and tactile paper selections tailored for high-profile product drops.",
    img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=400&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px]"
  }
];

export default function PackagingServices() {
  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">What We Design</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mt-4 leading-[1.1]">
            Packaging Solutions<br />
            Built Around Your Product.
          </h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/50 shadow-sm flex flex-col justify-end p-8 ${service.spanClass} ${service.heightClass} cursor-pointer`}
            >
              {/* Background Image inside card */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.04 }}
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300" />
              </div>

              {/* Text content overlays visual */}
              <div className="relative z-10 text-white flex flex-col items-start justify-end w-full h-full">
                {/* Number Card */}
                <span className="text-xs font-mono font-bold text-white/50 mb-auto">{service.num}</span>

                {/* Service Details */}
                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 tracking-tight group-hover:text-[#fd2e35] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Expandable info on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                    <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors mt-2"
                  >
                    VIEW SERVICE <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
