"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/* ─── TESTIMONIAL DATA ────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    id: "01",
    name: "Kartikeya Sharma",
    role: "Founder & CEO | Urban Brew",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kartikeya",
    leadQuote: "Virrat Global completely transformed our brand identity.",
    restQuote: "From logo design to custom foil packaging, every single detail exceeded our luxury expectations. Love working with this team!",
  },
  {
    id: "02",
    name: "Kavita Baberwal",
    role: "Marketing Director | NutriCare",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
    leadQuote: "Virrat Global is our secret weapon for print & digital collateral.",
    restQuote: "If you're launching a new product line or redesigning your visual brand, they help you visualize, test, and validate ideas faster than ever.",
  },
  {
    id: "03",
    name: "Eyad Kelleh",
    role: "Lead Software Architect | SaaS Platform",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eyad",
    leadQuote: "Unmatched speed, precision, and visual quality.",
    restQuote: "Streamlined corporate identity systems, embossed stationery, and architectural signage delivered on schedule with flawless execution.",
  },
  {
    id: "04",
    name: "Priya Verma",
    role: "Brand Director | Bloom Cosmetics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    leadQuote: "The gold foil print and soft-touch finishing are world-class.",
    restQuote: "Working with Virrat Global on our cosmetic box line elevated our product presence on retail shelves across international markets.",
  },
  {
    id: "05",
    name: "Rohan Kapoor",
    role: "Creative Strategist | NextGen D2C",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
    leadQuote: "Highest ROI on brand design and packaging production.",
    restQuote: "From initial conceptual sketches to final offset printing, their attention to detail and material quality are second to none.",
  },
  {
    id: "06",
    name: "Sneha Reddi",
    role: "Product Manager | Artisan Foods",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    leadQuote: "Exceptional sticker label and package print finish.",
    restQuote: "Extremely reliable agency team. They understand brand psychology and bring our physical touchpoints to life effortlessly.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BPTestimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list for infinite smooth horizontal marquee effect
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      role="region"
      aria-label="Customer testimonials"
      className="w-full bg-[#0A0A0A] text-white relative overflow-hidden select-none border-b border-white/10 py-16 md:py-24"
    >
      {/* Subtle Ambient Red Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D62020]/[0.05] blur-[150px] rounded-full pointer-events-none" />

      {/* ── CENTERED HEADING BLOCK (Reduced Top Spacing) ──────────────── */}
      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10 mb-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="homepage-section-tag dark-theme inline-block"
          style={{ marginBottom: "6px" }}
        >
          CUSTOMER TESTIMONIALS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="text-[2.5rem] md:text-[3.5rem] font-bold font-heading text-white tracking-tight leading-[1.08] mb-4"
        >
          Hear from our <br />
          <span className="text-[#D62020]">client community.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="text-[15px] md:text-[17px] text-[#A1A1AA] font-normal leading-relaxed font-body"
        >
          See what founders, brand directors, and marketing leaders are saying about their experience with Virrat Global.
        </motion.p>
      </div>

      {/* ── FULL-BLEED HORIZONTALLY-SCROLLING ROW OF TESTIMONIAL CARDS ── */}
      <div
        className="w-full relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.ul
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex items-stretch gap-6 w-max px-6 md:px-12 scrollbar-none py-2"
        >
          {marqueeItems.map((item, idx) => (
            <li
              key={`${item.id}-${idx}`}
              className="scroll-snap-align-start shrink-0"
            >
              <div
                className="testimonial-card w-[340px] md:w-[420px] h-full p-7 md:p-8 rounded-[16px] bg-[#151518] border border-white/10 text-left flex flex-col justify-between transition-all duration-350 hover:border-[#D62020] hover:ring-2 hover:ring-[#D62020]/40 hover:shadow-[0_16px_40px_rgba(214,32,32,0.25)] hover:bg-[#1A1A1E] hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  {/* Card Header: Avatar + Name + Role */}
                  <div className="card-header flex items-center gap-3.5 mb-5">
                    <img
                      className="avatar w-12 h-12 rounded-full border border-white/20 object-cover shrink-0 bg-[#27272A]"
                      src={item.avatar}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div className="overflow-hidden">
                      <p className="name text-[15px] font-bold text-white font-heading leading-tight truncate">
                        {item.name}
                      </p>
                      <p className="role text-[12px] text-[#A1A1AA] font-body mt-0.5 truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote: Bold Lead Phrase + Regular Body */}
                  <p className="quote text-[14px] text-[#E4E4E7] leading-relaxed font-body line-clamp-4">
                    <strong className="text-white font-bold mr-1">
                      {item.leadQuote}
                    </strong>
                    {item.restQuote}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>

    </section>
  );
}
