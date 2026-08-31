"use client";

import React from "react";
import { ExpandingCards, CardItem } from "@/components/ui/interactive-image-accordion";
import {
  Pyramid,
  Castle,
  Mountain,
  TowerControl,
} from "lucide-react";

export function PackagingExpandOnHover() {
  const items: CardItem[] = [
    {
      id: 1,
      title: "Brand Identity",
      description: "Logo, colors, typography and visual elements aligned with your brand identity.",
      imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop",
      icon: <TowerControl className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 2,
      title: "Packaging Structure",
      description: "02 — CHECKPOINT",
      imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      icon: <Pyramid className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 3,
      title: "Shelf Appeal",
      description: "Strong visual hierarchy and distinctive design that helps products stand out.",
      imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      icon: <Mountain className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 4,
      title: "Product Information",
      description: "04 — CHECKPOINT",
      imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2090&auto=format&fit=crop",
      icon: <Castle className="w-8 h-8" />,
      linkHref: "/contact"
    }
  ];

  return (
    <section className="bg-[#f8f7f5] flex flex-col items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="text-[12px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-3 inline-block">
          WHAT WE CONSIDER
        </span>
        <h2 className="font-heading text-black text-4xl md:text-[54px] font-bold leading-[1.1] tracking-tight mb-5">
          What goes into every <span className="text-[#D62020]">packaging design</span>
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-[18px] font-semibold leading-[1.5] tracking-normal">
          Every successful package combines strategy, creativity, usability and production precision to create a product that looks great and performs in the real world.
        </p>
      </div>
      <div className="w-full flex justify-center px-6">
        <ExpandingCards items={items} />
      </div>
    </section>
  );
}

export default PackagingExpandOnHover;
