"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "TechFlow",
    quote: "The AI automation workflows completely changed how our team operates. We eliminated repetitive manual work and our response time improved significantly.",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "Vault Finance",
    quote: "Their automation solution connected our lead management, CRM and customer communication into one seamless workflow. It feels like magic.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Aura Lifestyle",
    quote: "We were able to automate several hours of repetitive work every day while giving our customers a much faster experience. Worth every penny.",
  },
  // Duplicate for smooth infinite looping
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "TechFlow",
    quote: "The AI automation workflows completely changed how our team operates. We eliminated repetitive manual work and our response time improved significantly.",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "Vault Finance",
    quote: "Their automation solution connected our lead management, CRM and customer communication into one seamless workflow. It feels like magic.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Aura Lifestyle",
    quote: "We were able to automate several hours of repetitive work every day while giving our customers a much faster experience. Worth every penny.",
  },
];

export default function AiAutomationTestimonials() {
  return (
    <section className="bg-[#f8f7f5] overflow-hidden relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#E52B26] text-xs font-bold tracking-[0.25em] uppercase"
          >
            WHAT OUR CLIENTS SAY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-[#111111]"
          >
            Real results from businesses powered by <br className="hidden md:block" /> <span className="text-[#E52B26]">intelligent automation</span>.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={48}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              el: ".testimonial-pagination",
              clickable: true,
              bulletClass: "w-3 h-3 rounded-full bg-black/20 cursor-pointer transition-all duration-300",
              bulletActiveClass: "!bg-[#E52B26] !w-8",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            className="!pt-10 !pb-20 !px-6 -mx-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} className="transition-all duration-700 h-auto">
                {({ isActive }) => (
                  <div
                    className={`h-full p-10 rounded-[2.5rem] bg-white border transition-all duration-700
                      ${isActive 
                        ? "border-[#E52B26] scale-[1.02] opacity-100 shadow-xl shadow-[#E52B26]/10" 
                        : "border-black/5 scale-[0.95] opacity-60 hover:opacity-100 hover:border-black/10"
                      }
                    `}
                  >
                    <Quote className={`w-10 h-10 mb-8 transition-colors duration-700 ${isActive ? "text-[#E52B26]" : "text-black/10"}`} />
                    <p className="text-xl leading-relaxed font-medium text-[#111111] mb-6">
                      "{t.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold font-heading text-lg text-[#111111]">{t.name}</h4>
                      <p className="text-[#555555] text-sm">{t.role}, {t.company}</p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-4 px-4">
            <div className="testimonial-pagination flex gap-2 items-center"></div>
            
            <div className="flex gap-4">
              <button className="testimonial-prev w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-[#E52B26] hover:border-[#E52B26] hover:bg-black/5 transition-all duration-300 focus:outline-none">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button className="testimonial-next w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-[#E52B26] hover:border-[#E52B26] hover:bg-black/5 transition-all duration-300 focus:outline-none">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
