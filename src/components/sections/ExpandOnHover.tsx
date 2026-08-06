"use client";

import React from "react";
import { ExpandingCards, CardItem } from "@/components/ui/interactive-image-accordion";
import {
  Pyramid,
  Castle,
  Mountain,
  TowerControl,
  Building,
  Landmark,
} from "lucide-react";

export function ExpandOnHover() {
  const items: CardItem[] = [
    {
      id: 1,
      title: "Dedicated Experts",
      description: "Our team of senior developers, designers, and strategists are committed to your success.",
      imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop",
      icon: <Building className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "We follow agile methodologies to ship high-quality products on time and within budget.",
      imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      icon: <TowerControl className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 3,
      title: "AI-Powered Tech",
      description: "Leverage state-of-the-art machine learning models and intelligent workflows.",
      imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      icon: <Pyramid className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 4,
      title: "Custom Solutions",
      description: "Tailor-made software engineered to address your unique business challenges and goals.",
      imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2090&auto=format&fit=crop",
      icon: <Mountain className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 5,
      title: "Enterprise Support",
      description: "Round-the-clock technical support, robust service-level agreements, and monitoring.",
      imgSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      icon: <Landmark className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 6,
      title: "Robust Security",
      description: "Bank-grade compliance, data encryption, and secure cloud infrastructure configurations.",
      imgSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1974&auto=format&fit=crop",
      icon: <Castle className="w-8 h-8" />,
      linkHref: "/contact"
    }
  ];

  return (
    <section className="bg-[#f8f7f5] py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-3 inline-block">
          WHY VIRRAT GLOBAL
        </span>
        <h2 className="font-bold font-heading text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight text-black mb-4">
          Why Businesses Choose <span className="text-[#D62020]">Virrat Global</span>
        </h2>
        <p className="text-lg text-[var(--color-secondary)] max-w-xl mx-auto mt-4">
          Discover why ambitious startups, SMEs, and enterprises trust Virrat Global to build high-performance products and drive measurable revenue growth.
        </p>
      </div>
      <div className="w-full flex justify-center px-6">
        <ExpandingCards items={items} />
      </div>
    </section>
  );
}

export default ExpandOnHover;
