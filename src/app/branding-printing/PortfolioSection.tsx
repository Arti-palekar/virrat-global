"use client";

import React from "react";
import { CardStack, CardStackItem } from "@/components/ui/CardStack";
import { 
  PenTool, 
  CreditCard, 
  BookOpen, 
  FileText, 
  Package, 
  Monitor, 
  Layout, 
  UserCircle, 
  Award 
} from "lucide-react";

const portfolioItems: CardStackItem[] = [
  {
    id: "logo",
    title: "Logo Design",
    description: "Premium brand identity design that makes your business stand out.",
    imageSrc: "/images/portfolio/logo.png",
    icon: <PenTool className="w-5 h-5" />,
    href: "/services/logo-design"
  },
  {
    id: "cards",
    title: "Visiting Cards",
    description: "Luxury business cards with premium finishes.",
    imageSrc: "/images/portfolio/visiting_cards.png",
    icon: <CreditCard className="w-5 h-5" />,
    href: "/services/visiting-cards"
  },
  {
    id: "brochure",
    title: "Brochure Design",
    description: "Corporate brochure & company profile design.",
    imageSrc: "/images/portfolio/brochure.png",
    icon: <BookOpen className="w-5 h-5" />,
    href: "/services/brochure-design"
  },
  {
    id: "flyers",
    title: "Flyers & Pamphlets",
    description: "High-impact promotional marketing materials.",
    imageSrc: "/images/portfolio/flyers.png",
    icon: <FileText className="w-5 h-5" />,
    href: "/services/flyers-pamphlets"
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description: "Luxury product packaging solutions.",
    imageSrc: "/images/portfolio/packaging.png",
    icon: <Package className="w-5 h-5" />,
    href: "/services/packaging-design"
  },
  {
    id: "billboard",
    title: "Billboard Printing",
    description: "Large-format outdoor advertising prints.",
    imageSrc: "/images/portfolio/billboard.png",
    icon: <Monitor className="w-5 h-5" />,
    href: "/services/billboard-printing"
  },
  {
    id: "standee",
    title: "Standee & Flex",
    description: "Portable exhibition and event displays.",
    imageSrc: "/images/portfolio/standee.png",
    icon: <Layout className="w-5 h-5" />,
    href: "/services/standee-flex"
  },
  {
    id: "idcards",
    title: "ID Cards",
    description: "Secure, professional corporate access cards.",
    imageSrc: "/images/portfolio/id_cards.png",
    icon: <UserCircle className="w-5 h-5" />,
    href: "/services/id-cards"
  },
  {
    id: "badges",
    title: "Badges",
    description: "Custom metal and magnetic name badges.",
    imageSrc: "/images/portfolio/badges.png",
    icon: <Award className="w-5 h-5" />,
    href: "/services/badges"
  }
];

export default function PortfolioSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 lg:py-36 font-syne relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* ── TOP HEADER CONTENT ── */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="homepage-section-tag">
            OUR PORTFOLIO
          </span>
          <h2 className="homepage-section-title text-center">
            Work That Speaks <br />
            <span>Our Creativity.</span>
          </h2>
          <p className="homepage-section-subtitle text-center max-w-[760px] mx-auto">
            Explore our latest branding and printing projects crafted to help businesses build memorable brands and premium visual experiences.
          </p>
        </div>
        
        {/* ── PORTFOLIO SLIDER (CARD STACK) ── */}
        <div className="w-full flex justify-center items-center">
             <CardStack 
                items={portfolioItems} 
                maxVisible={5} /* 2 left, 1 center, 2 right */
                cardWidth={340} 
                cardHeight={440} 
                autoAdvance={true} 
                intervalMs={3500} 
             />
        </div>

      </div>
    </section>
  );
}
