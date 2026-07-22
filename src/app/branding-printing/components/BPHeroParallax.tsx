"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PORTFOLIO_PRODUCTS = [
  {
    title: "Logo Design",
    category: "Brand Identity",
    link: "/contact",
    thumbnail: "/images/services/logo-design.webp",
  },
  {
    title: "Brand Identity",
    category: "Visual System",
    link: "/contact",
    thumbnail: "/images/services/brand-identity.webp",
  },
  {
    title: "Business Cards",
    category: "Stationery",
    link: "/contact",
    thumbnail: "/images/services/business-cards.webp",
  },
  {
    title: "Brochure Design",
    category: "Print Media",
    link: "/contact",
    thumbnail: "/images/services/brochure.webp",
  },
  {
    title: "Company Profile",
    category: "Corporate Editorial",
    link: "/contact",
    thumbnail: "/images/services/corporate-stationery.webp",
  },
  {
    title: "Flyer Design",
    category: "Promotional Print",
    link: "/contact",
    thumbnail: "/images/services/flyer-poster.webp",
  },
  {
    title: "Product Packaging",
    category: "Packaging",
    link: "/contact",
    thumbnail: "/images/services/packaging.webp",
  },
  {
    title: "Cosmetic Packaging",
    category: "Luxury Packaging",
    link: "/contact",
    thumbnail: "/images/services/packaging.webp",
  },
  {
    title: "Food Packaging",
    category: "Retail Packaging",
    link: "/contact",
    thumbnail: "/images/services/packaging.webp",
  },
  {
    title: "Shopping Bag Branding",
    category: "Retail Identity",
    link: "/contact",
    thumbnail: "/images/services/corporate-merchandise.webp",
  },
  {
    title: "Billboard Design",
    category: "Outdoor Media",
    link: "/contact",
    thumbnail: "/images/services/billboard.webp",
  },
  {
    title: "Shop Signage",
    category: "Architectural Signage",
    link: "/contact",
    thumbnail: "/images/services/shop-signage.webp",
  },
  {
    title: "Vehicle Branding",
    category: "Fleet Branding",
    link: "/contact",
    thumbnail: "/images/services/vehicle-branding.webp",
  },
  {
    title: "Corporate Stationery",
    category: "Business Collateral",
    link: "/contact",
    thumbnail: "/images/services/corporate-stationery.webp",
  },
  {
    title: "Promotional Merchandise",
    category: "Branded Goods",
    link: "/contact",
    thumbnail: "/images/services/corporate-merchandise.webp",
  },
];

export default function BPHeroParallax() {
  const firstRow = PORTFOLIO_PRODUCTS.slice(0, 8);
  const secondRow = PORTFOLIO_PRODUCTS.slice(8, 15);

  const ref = useRef<HTMLDivElement>(null);

  // 3D Parallax Scroll Entrance Trigger
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [15, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 1], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.2, 1]),
    springConfig
  );

  // Subtle Scroll Parallax Shift for depth
  const rowParallaxLtr = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 120]),
    springConfig
  );
  const rowParallaxRtl = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -120]),
    springConfig
  );

  return (
    <section 
      ref={ref}
      className="relative w-full py-16 md:py-24 overflow-hidden bg-white text-[#111111] flex flex-col justify-between z-20 group select-none [perspective:1000px] [transform-style:preserve-3d]"
    >
      
      {/* Hardware Accelerated Keyframes for Infinite Auto-Sliding and Mouse Hover Pause */}
      <style>{`
        @keyframes marquee-p-ltr {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-p-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-portfolio-ltr {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-p-ltr 35s linear infinite;
        }
        .animate-portfolio-rtl {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-p-rtl 35s linear infinite;
        }
        .animate-portfolio-ltr:hover,
        .animate-portfolio-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Noise Grain Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Side Soft Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Header Area with Scroll Reveal */}
      <Header />

      {/* 3D Hero Parallax Stage with Continuous Auto-Sliding */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10 my-8 w-full flex flex-col gap-6 md:gap-8 overflow-hidden pointer-events-auto transform-gpu [transform-style:preserve-3d]"
      >
        
        {/* Top Row: Continuously Slide Left -> Right with Parallax & Blur Stagger Reveal */}
        <motion.div 
          style={{ x: rowParallaxLtr }}
          initial={{ opacity: 0, y: 50, scale: 0.92, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden flex items-center"
        >
          <div className="animate-portfolio-ltr">
            {[...firstRow, ...firstRow].map((product, idx) => (
              <ProductCard
                key={`pcard-row1-${product.title}-${idx}`}
                product={product}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Row: Continuously Slide Right -> Left with Parallax & Blur Stagger Reveal */}
        <motion.div 
          style={{ x: rowParallaxRtl }}
          initial={{ opacity: 0, y: 50, scale: 0.92, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden flex items-center"
        >
          <div className="animate-portfolio-rtl">
            {[...secondRow, ...secondRow].map((product, idx) => (
              <ProductCard
                key={`pcard-row2-${product.title}-${idx}`}
                product={product}
              />
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom CTA Block with Scroll Reveal */}
      <BottomCTA />
    </section>
  );
}

function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-7xl relative mx-auto pt-4 pb-6 px-6 md:px-12 w-full text-center flex flex-col items-center z-10"
    >
      <span className="text-xs font-bold text-[#D62020] tracking-[0.25em] font-mono block mb-3 uppercase">
        OUR PORTFOLIO
      </span>
      <p 
        className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-[900] text-[#111111] leading-none tracking-[-0.04em] mb-4 font-heading"
        style={{ fontFamily: '"Syne", sans-serif' }}
      >
        Crafting Brands <br />
        That Stand Out.
      </p>
      <p className="max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed font-body">
        Explore a curated collection of our branding and printing projects, showcasing creative design, premium quality, and attention to every detail.
      </p>
    </motion.div>
  );
}

function ProductCard({
  product,
}: {
  product: typeof PORTFOLIO_PRODUCTS[0];
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group/product h-60 w-[18rem] sm:h-64 sm:w-[22rem] md:h-[17.5rem] md:w-[26rem] relative flex-shrink-0 mx-3 md:mx-4 rounded-[24px] overflow-hidden border border-gray-200/80 bg-gray-50 shadow-lg hover:shadow-[0_20px_40px_rgba(214,32,32,0.22)] hover:border-[#D62020]/50 transition-all duration-500 cursor-pointer transform-gpu origin-center"
    >
      <Link href={product.link} className="block w-full h-full relative overflow-hidden">
        {/* Unclipped Center-Zoom Image */}
        <Image
          src={product.thumbnail}
          height="500"
          width="500"
          className="object-cover object-center origin-center absolute h-full w-full inset-0 transform-gpu transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/product:scale-105"
          alt={product.title}
          sizes="(max-width: 768px) 300px, 420px"
        />

        {/* Dark Hover Overlay */}
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-40 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500 pointer-events-none z-10" />

        {/* Floating Details Badge & Title */}
        <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 opacity-0 group-hover/product:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/product:translate-y-0 z-20 flex flex-col justify-end">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D62020] bg-white/95 px-3 py-1 rounded-full w-fit mb-2 shadow-sm">
            {product.category}
          </span>
          <p 
            className="text-lg md:text-xl font-bold text-white drop-shadow-md font-heading"
          >
            {product.title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

function BottomCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 w-full max-w-4xl mx-auto pt-8 pb-4 px-6 text-center flex flex-col items-center"
    >
      <h3 
        className="card-title text-center mb-6 font-heading"
      >
        Ready to Build Your Brand?
      </h3>
      <Link
        href="/contact"
        className="inline-flex items-center gap-3 bg-[#D62020] hover:bg-[#B51B1B] text-white text-base md:text-lg font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-600/30 transform hover:-translate-y-1"
      >
        <span>Start Your Branding Project</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  );
}
