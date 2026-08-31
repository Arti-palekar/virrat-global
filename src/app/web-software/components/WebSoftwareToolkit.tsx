"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ── Technology cards data ───────────────────────────────────────────────────

const row1Tools = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
];

const row2Tools = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

const allTools = [...row1Tools, ...row2Tools];

// ── Main Component ──────────────────────────────────────────────────────────

export function WebSoftwareToolkit() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 bg-[#f8f7f5] py-16 md:py-24">
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
              <p className="text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight !text-white max-w-[20ch] m-0">
                TOOLS WE USE
              </p>
            </div>

            <p className="text-base md:text-lg !text-white/90 leading-relaxed max-w-[42ch] mt-6">
              Modern technologies for building fast, scalable and reliable websites, web applications, SaaS platforms and business software.
            </p>
          </motion.div>

          {/* ── RIGHT SIDE — 60%: Tool Cards Slider ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 w-full relative py-2 overflow-hidden flex items-center justify-center"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              speed={800}
              breakpoints={{
                // Mobile
                320: { slidesPerView: 2, spaceBetween: 12 },
                // Tablet
                768: { slidesPerView: 3, spaceBetween: 16 },
                // Desktop
                1024: { slidesPerView: 5, spaceBetween: 16 }
              }}
              className="w-full"
            >
              {allTools.map((tool, i) => (
                <SwiperSlide key={`${tool.name}-${i}`} className="py-2">
                  <div 
                    className="aspect-square rounded-2xl bg-white flex items-center justify-center overflow-hidden group shadow-sm transition-transform duration-300 hover:-translate-y-1 w-full"
                  >
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="w-[55%] h-[55%] object-contain select-none transition-transform duration-500 group-hover:scale-110"
                      draggable="false"
                    />
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
