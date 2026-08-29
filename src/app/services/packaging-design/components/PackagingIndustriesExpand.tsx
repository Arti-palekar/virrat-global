"use client";

import React from "react";
import { ExpandingCards, CardItem } from "@/components/ui/interactive-image-accordion";
import {
  HeartPulse,
  Building,
  GraduationCap,
  Coffee,
  Gem,
  Landmark,
  Shirt,
  Trophy
} from "lucide-react";

export function PackagingIndustriesExpand() {
  const items: CardItem[] = [
    {
      id: 1,
      title: "Education & E-Learning",
      description: "Sturdy and creative package designs for educational kits, student onboarding boxes, and learning materials.",
      imgSrc: "/generated/edu_packaging.png",
      icon: <GraduationCap className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 2,
      title: "Food & Beverage",
      description: "Packaging designed for shelf appeal, product freshness, compliance, and stronger brand recognition.",
      imgSrc: "/generated/food_packaging.png",
      icon: <Coffee className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 3,
      title: "Jewelry & Precious Metals",
      description: "Elegant luxury packaging boxes designed to protect and present high-value jewelry and precious metals.",
      imgSrc: "/generated/jewelry_packaging.png",
      icon: <Gem className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 4,
      title: "Financial Services & FinTech",
      description: "Sleek and secure unboxing designs for premium credit cards, welcome packs, and corporate client gifts.",
      imgSrc: "/generated/fintech_packaging.png",
      icon: <Landmark className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 5,
      title: "Fashion & Apparel",
      description: "Premium retail boxes, garment bags, and tag designs that strengthen fashion product presentation.",
      imgSrc: "/generated/fashion_packaging.png",
      icon: <Shirt className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 6,
      title: "Sports & Entertainment",
      description: "Dynamic and protective packaging solutions for sports gear, merchandise, and fan memorabilia.",
      imgSrc: "/generated/sports_packaging.png",
      icon: <Trophy className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 7,
      title: "Healthcare & Medical",
      description: "Clear, professional and trustworthy packaging designed for healthcare, medical, and wellness products.",
      imgSrc: "/generated/medical_packaging.png",
      icon: <HeartPulse className="w-8 h-8" />,
      linkHref: "/contact"
    },
    {
      id: 8,
      title: "Real Estate & Infrastructure",
      description: "Custom box solutions for architectural models, key presentation boxes, and premium property handover kits.",
      imgSrc: "/generated/realestate_packaging.png",
      icon: <Building className="w-8 h-8" />,
      linkHref: "/contact"
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-[12px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-3 inline-block">
          EXPLORE INDUSTRIES
        </span>
        <h2 className="font-bold font-heading text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight text-black mb-4">
          INDUSTRIES WE <span className="text-[#D62020]">DESIGN FOR</span>
        </h2>
        <p className="text-lg text-[var(--color-secondary)] max-w-xl mx-auto mt-4">
          Packaging solutions shaped around your product, market and customer.
        </p>
      </div>
      <div className="w-full flex justify-center px-6">
        <ExpandingCards items={items} />
      </div>
    </section>
  );
}

export default PackagingIndustriesExpand;
