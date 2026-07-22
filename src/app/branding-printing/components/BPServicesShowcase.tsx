"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── SERVICE DATA ──────────────────────────────────────────── */

const SERVICES = [
  {
    id: "01",
    title: "Logo Design",
    desc: "Timeless marks that define your brand identity.",
    img: "/portfolio/portfolio_logo_branding_1784618160119.png",
  },
  {
    id: "02",
    title: "Brand Identity",
    desc: "Complete visual systems — colors, type, guidelines.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=85",
  },
  {
    id: "03",
    title: "Business Cards",
    desc: "Foil, embossed, and letterpress premium cards.",
    img: "/portfolio/portfolio_business_cards_1784618183141.png",
  },
  {
    id: "04",
    title: "Brochure Design",
    desc: "Bi-fold, tri-fold brochures and company profiles.",
    img: "/portfolio/portfolio_brochure_catalogue_1784618255473.png",
  },
  {
    id: "05",
    title: "Flyer Design",
    desc: "High-impact promotional flyers and event posters.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=85",
  },
  {
    id: "06",
    title: "Packaging Design",
    desc: "Luxury boxes, cosmetics, and unboxing experiences.",
    img: "/portfolio/portfolio_luxury_packaging_1784618217548.png",
  },
  {
    id: "07",
    title: "Label & Sticker Design",
    desc: "Product labels, die-cut stickers, and bottle wraps.",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=85",
  },
  {
    id: "08",
    title: "Stationery Design",
    desc: "Letterheads, ID cards, invoices, and notepads.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=85",
  },
  {
    id: "09",
    title: "Banner & Flex Printing",
    desc: "Large-format banners, backdrops, and trade displays.",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&q=85",
  },
  {
    id: "10",
    title: "Standee Design",
    desc: "Roll-up standees and display boards for events.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=85",
  },
  {
    id: "11",
    title: "Signage & Display Boards",
    desc: "Acrylic signs, shop fronts, and exhibition graphics.",
    img: "https://images.unsplash.com/photo-1519444656952-ded4fa6fb941?w=600&q=85",
  },
  {
    id: "12",
    title: "Merchandise & Promotional",
    desc: "T-shirts, mugs, bags, caps, and corporate gifts.",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=85",
  },
];

/* ─── ANIMATION ─────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

/* ─── MAIN COMPONENT ────────────────────────────────────────── */

export default function BPServicesShowcase() {
  return (
    <section className="w-full bg-white" aria-label="Our Services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">

        {/* ── GRID: STICKY LEFT + SCROLLING RIGHT ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── LEFT: STICKY HEADER ───────────────────────────── */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">

              <motion.span
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="homepage-section-tag"
              >
                OUR SERVICES
              </motion.span>

              <motion.h2
                variants={fadeUp(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="homepage-section-title m-0"
              >
                Complete Branding &<br />
                <span>Printing Solutions.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp(0.16)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[16px] text-[#666666] leading-relaxed max-w-sm"
              >
                Everything you need to build, launch, and grow a memorable brand — from creative strategy and visual identity to premium print production and marketing collateral.
              </motion.p>

              <motion.div
                variants={fadeUp(0.22)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D62020] hover:bg-[#BF1A1A] text-white text-[12px] font-black uppercase tracking-[0.18em] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(214,32,32,0.32)] transform hover:-translate-y-[2px]"
                >
                  Start Your Project
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp(0.28)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-6 pt-4 border-t border-[#EBEBEB]"
              >
                <div>
                  <p className="text-[22px] font-black text-[#111111] leading-none">250+</p>
                  <p className="text-[11px] text-[#888888] font-medium mt-1">Projects Done</p>
                </div>
                <div className="w-px h-8 bg-[#EBEBEB]" />
                <div>
                  <p className="text-[22px] font-black text-[#111111] leading-none">12+</p>
                  <p className="text-[11px] text-[#888888] font-medium mt-1">Service Lines</p>
                </div>
                <div className="w-px h-8 bg-[#EBEBEB]" />
                <div>
                  <p className="text-[22px] font-black text-[#111111] leading-none">4.9★</p>
                  <p className="text-[11px] text-[#888888] font-medium mt-1">Client Rating</p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ── RIGHT: SERVICE CARDS GRID ─────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: (i % 3) * 0.07,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-[18px] border border-[#EBEBEB] bg-white cursor-pointer hover:border-[#D62020]/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-400"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    {/* Subtle red overlay on hover */}
                    <div className="absolute inset-0 bg-[#D62020] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Number + arrow */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-black tracking-[0.2em] text-[#CCCCCC] font-mono">
                        {service.id}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-[#EBEBEB] flex items-center justify-center group-hover:bg-[#D62020] group-hover:border-[#D62020] transition-all duration-300">
                        <ArrowUpRight
                          className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-white transition-colors duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-bold text-[#111111] font-heading leading-tight mb-1.5 group-hover:text-[#D62020] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-[#888888] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Bottom red accent bar */}
                    <div className="mt-4 h-[2px] w-0 bg-[#D62020] rounded-full group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
