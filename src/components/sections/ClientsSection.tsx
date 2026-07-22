"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/shared/Button";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rahul Sharma",
    company: "ABC Technologies",
    rating: 5.0,
    review: "Virrat Global transformed our online presence with a stunning website and strategic digital marketing. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t2",
    name: "Priya Patel",
    company: "Nexa Capital",
    rating: 5.0,
    review: "The custom ERP software built by Virrat streamlined our entire supply chain. Their team is professional and highly responsive.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t3",
    name: "James Chen",
    company: "Horizon Media",
    rating: 5.0,
    review: "Outstanding brand identity design. They captured our core values perfectly and executed printing collateral flawlessly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t4",
    name: "Sarah Jenkins",
    company: "TechFlow",
    rating: 5.0,
    review: "Their workflow automation tools saved us hours of manual data entry every week. Excellent support post-delivery.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t5",
    name: "Amit Verma",
    company: "Zenith Retail",
    rating: 5.0,
    review: "The e-commerce website they developed is fast, secure, and has doubled our digital conversion rate.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t6",
    name: "Emily Thorne",
    company: "Aura Design",
    rating: 5.0,
    review: "From trademark registration to legal ISO compliance, their team handled everything with ease and zero hassle.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t7",
    name: "Carlos Mendez",
    company: "Velo Labs",
    rating: 5.0,
    review: "A premium SaaS product delivered on time. The frontend experience is incredibly smooth and responsive.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t8",
    name: "Lisa Wang",
    company: "Apex Agency",
    rating: 5.0,
    review: "Their search engine optimization and Meta ads campaigns turned our business around. A true growth partner.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t9",
    name: "David Miller",
    company: "Vanguard Logi",
    rating: 5.0,
    review: "Dynamic dashboards and AI chatbot integrations that immediately reduced customer support wait times.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80",
  },
  {
    id: "t10",
    name: "Aisha Al-Mansoori",
    company: "Alpha Corp",
    rating: 5.0,
    review: "Exceptional end-to-end execution on our mobile app design and development. Sticking with them for all future projects.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
  }
];

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      className="py-12 md:py-16 lg:py-20 bg-[#0D0D0D] relative font-syne border-t border-white/5 h-auto min-h-fit"
    >
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Content Block (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit flex flex-col items-start text-left">
            <span className="px-3.5 py-1 rounded-full bg-[#d62020]/10 border border-[#d62020]/25 text-[#d62020] text-xs font-bold tracking-wider uppercase mb-4 flex items-center gap-1.5 shadow-sm">
              <span className="flex text-[#d62020] text-[10px] tracking-normal">★★★★★</span>
              CLIENT TESTIMONIALS
            </span>
            
            <p className="homepage-section-title dark-theme mb-5">
              Clients Love <br />
              <span>Working With Us</span>
            </p>
            
            <p className="font-inter text-[#B5B5B5] text-base leading-relaxed mb-8 max-w-lg">
              Businesses trust Virrat Global for branding, digital marketing, websites, software, AI automation, and compliance services. We focus on delivering measurable results, exceptional support, and long-term partnerships.
            </p>
            
            {/* Stats Block */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 w-full border-t border-b border-white/10 py-8 mb-8 font-inter">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">⭐ 4.9+</span>
                <span className="text-xs text-[#B5B5B5] mt-1 uppercase font-bold tracking-wider">Average Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">250+</span>
                <span className="text-xs text-[#B5B5B5] mt-1 uppercase font-bold tracking-wider">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">100+</span>
                <span className="text-xs text-[#B5B5B5] mt-1 uppercase font-bold tracking-wider">Happy Clients</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                href="/contact" 
                className="!bg-[#D62020] !text-white hover:!brightness-110 hover:shadow-[0_0_20px_rgba(214,32,32,0.3)] transition-all duration-300"
              >
                Get Started
              </Button>
              <Button 
                href="https://g.page/r/your-google-review-link" 
                variant="outline"
                className="!border-white/20 !text-white hover:!bg-white/5 hover:!text-white bg-transparent transition-all duration-300"
              >
                View All Reviews
              </Button>
            </div>
          </div>
          
          {/* Right Column: Stacking Testimonial Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative pb-0">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sticky w-full origin-top"
                style={{
                  top: `calc(120px + ${idx * 16}px)`, // Create stacking overlap offset
                  zIndex: idx + 1,
                }}
              >
                <div className="bg-[#171717]/95 backdrop-blur-md border border-white/5 rounded-[20px] p-6 md:p-7 shadow-[0_15px_45px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(214,32,32,0.05)] hover:border-[#D62020]/30 hover:-translate-y-1.5 transition-all duration-[400ms] group">
                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#D62020] stroke-[#D62020]" />
                    ))}
                    <span className="ml-2 font-inter text-sm font-bold text-white">{t.rating.toFixed(1)}</span>
                  </div>

                  {/* Review Quote */}
                  <p className="font-inter text-[#B5B5B5] text-base md:text-lg leading-relaxed mb-6 italic">
                    "{t.review}"
                  </p>

                  {/* Client Info Bar */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[400ms] ease-out"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[16px] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[#B5B5B5] text-xs font-inter mt-0.5 uppercase tracking-wider font-bold">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
