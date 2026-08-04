"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ── REST API custom inline SVG ──────────────────────────────────────────────
const RestApiSvg = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="40" cy="40" r="10" fill="#d62020" />
    <circle cx="12" cy="20" r="7" fill="#2563eb" />
    <circle cx="68" cy="20" r="7" fill="#2563eb" />
    <circle cx="12" cy="60" r="7" fill="#2563eb" />
    <circle cx="68" cy="60" r="7" fill="#2563eb" />
    <line x1="18" y1="23" x2="31" y2="33" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="62" y1="23" x2="49" y2="33" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="57" x2="31" y2="47" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <line x1="62" y1="57" x2="49" y2="47" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <text x="40" y="44" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">API</text>
  </svg>
);

// ── Technology cards data ───────────────────────────────────────────────────
const tools = [
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
  },
  {
    name: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  },
  {
    name: "REST API",
    logo: null // uses inline SVG
  }
];

// ── Component ───────────────────────────────────────────────────────────────
export function WebSoftwareToolkit() {
  return (
    <section className="w-full pt-16 lg:pt-24 pb-10 lg:pb-12 px-6 md:px-12 lg:px-24 bg-[#f8f7f5]">
      {/* ── Outer premium red container ── */}
      <div className="max-w-[1400px] mx-auto relative bg-[#d62020] border border-white/20 rounded-[40px] p-8 md:p-12 lg:p-14 overflow-hidden">

        {/* Decorative corner crop marks */}
        <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-white/25 pointer-events-none" />
        <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/25 pointer-events-none" />
        <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-white/25 pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-white/25 pointer-events-none" />

        {/* Decorative crosshair mark */}
        <div className="absolute right-12 top-6 w-10 h-10 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-white">
            <circle cx="12" cy="12" r="7" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

          {/* ── LEFT SIDE — 40% ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between min-h-[180px] select-none"
          >
            <div>
              <span className="inline-block text-white/80 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                OUR DEVELOPMENT TOOLKIT
              </span>
              <p
                className="font-heading font-black uppercase leading-none tracking-tighter max-w-[20ch] m-0"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(32px, 3.6vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                TOOLS WE USE TO<br />BUILD DIGITAL<br />PRODUCTS
              </p>
            </div>

            <p className="text-sm font-medium leading-relaxed mt-6 max-w-[42ch]" style={{ color: "rgba(255,255,255,0.78)" }}>
              Modern technologies for building fast, scalable and reliable websites, web applications, SaaS platforms and business software.
            </p>
          </motion.div>

          {/* ── RIGHT SIDE — 60%: Swiper carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              speed={700}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              grabCursor={true}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
              }}
              style={{ overflow: "hidden" }}
            >
              {tools.map((tool, idx) => (
                <SwiperSlide key={`${tool.name}-${idx}`}>
                  {/* White technology card */}
                  <div className="h-[210px] lg:h-[230px] rounded-2xl bg-white flex flex-col overflow-hidden group cursor-grab active:cursor-grabbing">
                    {/* Centered colored logo */}
                    <div className="flex-1 flex items-center justify-center p-6">
                      {tool.logo ? (
                        <img
                          src={tool.logo}
                          alt={`${tool.name} logo`}
                          className="w-16 h-16 lg:w-20 lg:h-20 object-contain select-none transition-transform duration-500 group-hover:scale-110"
                          draggable="false"
                        />
                      ) : (
                        <div className="w-16 h-16 lg:w-20 lg:h-20 transition-transform duration-500 group-hover:scale-110">
                          <RestApiSvg />
                        </div>
                      )}
                    </div>

                    {/* Tool name — bottom-left */}
                    <div className="px-5 pb-4">
                      <span style={{
                        color: "#111111",
                        fontSize: "13px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        display: "block",
                      }}>
                        {tool.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default WebSoftwareToolkit;
