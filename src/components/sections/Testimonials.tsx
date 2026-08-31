"use client";

import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CMO",
    company: "TechFlow",
    quote: "Virrat Global didn't just give us a new logo; they fundamentally changed how we position ourselves in the market. Their strategic depth is rare, and the execution is flawless. They feel like a core part of our team.",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "Vault Finance",
    quote: "We needed an agency that could move fast without sacrificing quality. The team at Virrat delivered a world-class web app and a launch campaign that exceeded every benchmark we set. Highly recommended.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Aura Lifestyle",
    quote: "The ROI speaks for itself. Since Virrat took over our digital strategy and rebuilt our e-commerce flow, our customer acquisition costs have dropped by 30%. They are absolute professionals.",
  },
  // Duplicate for smooth infinite looping
  {
    name: "Sarah Jenkins",
    role: "CMO",
    company: "TechFlow",
    quote: "Virrat Global didn't just give us a new logo; they fundamentally changed how we position ourselves in the market. Their strategic depth is rare, and the execution is flawless. They feel like a core part of our team.",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "Vault Finance",
    quote: "We needed an agency that could move fast without sacrificing quality. The team at Virrat delivered a world-class web app and a launch campaign that exceeded every benchmark we set. Highly recommended.",
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Aura Lifestyle",
    quote: "The ROI speaks for itself. Since Virrat took over our digital strategy and rebuilt our e-commerce flow, our customer acquisition costs have dropped by 30%. They are absolute professionals.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#f8f7f5] overflow-hidden relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Don't just take <br /> <span className="text-[var(--color-accent)]">our word</span> for it.
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
              bulletActiveClass: "!bg-[var(--color-accent)] !w-8",
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
                    className={`h-full p-10 rounded-[2.5rem] bg-[var(--color-background)] border transition-all duration-700
                      ${isActive 
                        ? "border-[#FF0000] scale-[1.02] opacity-100 shadow-xl shadow-[#FF0000]/20" 
                        : "border-[#FF0000]/30 scale-[0.95] opacity-60 hover:opacity-100"
                      }
                    `}
                  >
                    <Quote className={`w-10 h-10 mb-8 transition-colors duration-700 ${isActive ? "text-[var(--color-accent)]" : "text-black/10"}`} />
                    <p className="text-xl leading-relaxed font-medium text-[var(--color-primary)] mb-6">
                      "{t.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold font-heading text-lg">{t.name}</h4>
                      <p className="text-[var(--color-secondary)] text-sm">{t.role}, {t.company}</p>
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
              <button className="testimonial-prev w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-black/5 transition-all duration-300 focus:outline-none">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button className="testimonial-next w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-black/5 transition-all duration-300 focus:outline-none">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
