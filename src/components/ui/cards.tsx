"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface PremiumCardItem {
  title: string;
  slug: string;
  description: string;
  count: string;
  tag: string;
  color: string;
}

const servicesList: PremiumCardItem[] = [
  {
    title: "Branding",
    slug: "branding",
    description: "Crafting iconic brand identities, guidelines, and visual narratives that resonate with target audiences.",
    count: "18 projects",
    tag: "Strategy & Identity",
    color: "rgba(242, 139, 168, 0.1)",
  },
  {
    title: "Printing",
    slug: "printing",
    description: "Premium physical assets, bespoke editorial layouts, corporate stationery, and high-end collateral.",
    count: "12 projects",
    tag: "Editorial & Print",
    color: "rgba(255, 179, 123, 0.1)",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Next-gen web applications, corporate websites, e-commerce storefronts, and premium custom development.",
    count: "24 projects",
    tag: "Code & Strategy",
    color: "rgba(110, 168, 254, 0.1)",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Data-driven performance campaigns, SEO strategy, social media growth, and content marketing funnels.",
    count: "15 projects",
    tag: "Growth & Visibility",
    color: "rgba(126, 203, 231, 0.1)",
  },
  {
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Sophisticated editorial systems, marketing assets, layouts, and illustrative design solutions.",
    count: "20 projects",
    tag: "Art Direction",
    color: "rgba(198, 166, 255, 0.1)",
  },
  {
    title: "Packaging Design",
    slug: "packaging-design",
    description: "Eco-friendly, tactile, and highly memorable product packaging that commands shelf presence.",
    count: "9 projects",
    tag: "Industrial & Visual",
    color: "rgba(126, 244, 203, 0.1)",
  },
  {
    title: "Video Production",
    slug: "video-production",
    description: "Cinematic commercial spots, brand storytelling, social content, and dynamic motion graphics.",
    count: "11 projects",
    tag: "Motion & Film",
    color: "rgba(242, 139, 230, 0.1)",
  },
  {
    title: "Corporate Gifting",
    slug: "corporate-gifting",
    description: "Bespoke, curated physical merchandise and premium corporate gifts that build lasting relationships.",
    count: "7 projects",
    tag: "Merchandise & Curation",
    color: "rgba(126, 231, 135, 0.1)",
  },
];

export function PremiumServiceCardsGrid({ cards }: { cards?: any[] }) {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCols(3);
      } else if (window.innerWidth >= 768) {
        setCols(2);
      } else {
        setCols(1);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rows = [];
  for (let i = 0; i < servicesList.length; i += cols) {
    rows.push(servicesList.slice(i, i + cols));
  }

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">
      {rows.map((rowCards, rowIndex) => {
        const direction = rowIndex % 2 === 0 ? 1 : -1;
        const initialX = direction === 1 ? "100vw" : "-100vw";

        return (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ willChange: "transform, opacity" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rowCards.map((service) => (
              <motion.div
                key={service.slug}
                whileHover={{ y: -8, scale: 1.015, boxShadow: `0 20px 40px ${service.color.replace('0.1', '0.25')}` }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 min-h-[280px] cursor-pointer"
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-3xl rounded-tr-2xl transition-all duration-500 pointer-events-none group-hover:scale-125 group-hover:rotate-6"
                  style={{ backgroundColor: service.color }}
                />
                
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3 group-hover:text-zinc-500 transition-colors duration-300">
                    {service.tag}
                  </div>
                  <h3 className="text-2xl font-black text-zinc-800 tracking-tight group-hover:text-pink-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-3 leading-relaxed max-w-[90%] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-4 border-t border-black/5">
                  <span className="text-xs font-semibold text-zinc-400">{service.count}</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-pink-500 transition-colors duration-200"
                  >
                    Explore Service
                    <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
}
