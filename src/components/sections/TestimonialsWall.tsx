"use client";

import React from "react";
import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";

const TESTIMONIALS = [
  {
    quote: "Virrat Global built our custom SaaS platform and executed a high-conversion performance ad strategy. Outstanding team!",
    author: "Elena Rostova",
    role: "Product Director, Velo Labs",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop",
    alt: "Elena Rostova",
  },
  {
    quote: "Their branding, web engineering, and AI automation saved us over 35 hours weekly. Flawless quality!",
    author: "Arjun Mehta",
    role: "Co-Founder, Zeta Health",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    alt: "Arjun Mehta",
  },
  {
    quote: "Our Google Ads and Meta campaigns achieved 8.4x ROAS within 60 days. Highly recommend Virrat Global.",
    author: "Marcus Sterling",
    role: "Head of Growth, Apex Global",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
    alt: "Marcus Sterling",
  },
  {
    quote: "From compliance audits to complete web redesign, Virrat Global handled everything with speed and precision.",
    author: "Charlotte Dubois",
    role: "Operations Director, Nouveau",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    alt: "Charlotte Dubois",
  },
  {
    quote: "The strategic depth and technical excellence of Virrat Global make them an indispensable growth partner.",
    author: "Kenji Sato",
    role: "Technical Director, OmniAI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    alt: "Kenji Sato",
  },
];

export function TestimonialsWall() {
  return (
    <section className="py-24 bg-[#f8f7f5] relative overflow-hidden border-t border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header Matching Screenshot Layout: Left Title & Right Subtitle */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 max-w-[1060px] mx-auto">
          {/* Left Title */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111] font-heading leading-[1.08]">
              Trusted by teams <br />
              who move <span className="text-[#D62020]">fast</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-[14px] md:text-[15px] text-[#666666] max-w-xs font-body leading-relaxed md:text-right">
            Real feedback from real clients who have partnered with us to build brands worth remembering.
          </p>
        </div>

        {/* Scroll Reel Testimonials Component */}
        <ScrollReelTestimonials testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}

export default TestimonialsWall;
