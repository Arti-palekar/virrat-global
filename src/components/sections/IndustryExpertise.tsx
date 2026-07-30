"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Utensils, 
  Gem, 
  Landmark, 
  Shirt, 
  Trophy 
} from "lucide-react";

// --- Vector Abstract SVGs for backgrounds ---

const HealthcareSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M10 50h15l8-20 8 40 8-30 6 10h35" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M41 30c-2.5-4-7-4-9.5 0L30 32.5 28.5 30c-2.5-4-7-4-9.5 0-3 5 0 12.5 11 17.5 11-5 14-12.5 11-17.5z" fill="none" strokeWidth="1" />
  </svg>
);

const RealEstateSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M15 90V25l25-10v75M40 45h20v45M60 35l25 10v45M10 90h80" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="35" width="6" height="6" rx="1" />
    <rect x="22" y="50" width="6" height="6" rx="1" />
    <rect x="22" y="65" width="6" height="6" rx="1" />
    <rect x="68" y="55" width="6" height="6" rx="1" />
    <rect x="68" y="70" width="6" height="6" rx="1" />
  </svg>
);

const EducationSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M15 35l35-15 35 15-35 15z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 38v22c0 8 12 14 28 14s28-6 28-14V38" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 50v28M42 78h16" strokeLinecap="round" />
    <path d="M80 35v25c0 3 2 5 5 5s5-2 5-5V35" strokeLinecap="round" />
  </svg>
);

const FoodSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M35 15v25M27 15v12c0 4 8 4 8 0V15M43 15v12c0 4-8 4-8 0V15M35 40v45M60 15c-8 0-8 25 0 25h5v45M65 15v25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const JewelrySVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M28 20h44L88 45 50 85 12 45z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 45h76M28 20l22 25 22-25M50 45l-22 40M50 45l22 40M50 45V85" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FintechSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M10 85V55l22-15 25 22 33-37M10 85h80M20 85V65M40 85V50M60 85V70M80 85V35" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FashionSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M50 15c-6 0-11 5-11 11s5 11 11 11h3L18 68c-4 4 0 8 4 8h56c4 0 8-4 4-8L47 37h3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="20" r="2.5" />
  </svg>
);

const SportsSVG = () => (
  <svg 
    className="w-56 h-56 text-[#D62020] opacity-5 pointer-events-none select-none" 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
  >
    <path d="M22 20h56v25c0 15-12 27-28 27S22 60 22 45V20z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 72v13M32 85h36M12 30c-4 0-4 10 0 10h10M88 30c4 0 4 10 0 10h-10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const INDUSTRIES = [
  {
    id: "01",
    name: "Healthcare & Medical",
    description: "Building secure, scalable and patient-centric digital healthcare platforms.",
    Icon: Stethoscope,
    SvgBg: HealthcareSVG
  },
  {
    id: "02",
    name: "Real Estate & Infrastructure",
    description: "Developing modern property discovery engines, broker portals, and construction workflows.",
    Icon: Building2,
    SvgBg: RealEstateSVG
  },
  {
    id: "03",
    name: "Education & E-Learning",
    description: "Engineering responsive LMS hubs, interactive virtual classrooms, and remote exam modules.",
    Icon: GraduationCap,
    SvgBg: EducationSVG
  },
  {
    id: "04",
    name: "Food & Beverage",
    description: "Creating smart contactless QR menus, ordering platforms, and kitchen inventory dashboards.",
    Icon: Utensils,
    SvgBg: FoodSVG
  },
  {
    id: "05",
    name: "Jewelry & Precious Metals",
    description: "Designing high-end catalog portfolios, luxury checkouts, and production inventory tools.",
    Icon: Gem,
    SvgBg: JewelrySVG
  },
  {
    id: "06",
    name: "Financial Services & FinTech",
    description: "Building secure micro-lending portals, investment trackers, and multi-currency gateway hubs.",
    Icon: Landmark,
    SvgBg: FintechSVG
  },
  {
    id: "07",
    name: "Fashion & Apparel",
    description: "Creating immersive boutique e-shops, automated sizing guides, and virtual dressing portals.",
    Icon: Shirt,
    SvgBg: FashionSVG
  },
  {
    id: "08",
    name: "Sports & Entertainment",
    description: "Engineering scalable ticket booking hubs, live scoreboard feeds, and fan engagement centers.",
    Icon: Trophy,
    SvgBg: SportsSVG
  }
] as const;

interface CardProps {
  id: string;
  name: string;
  description: string;
  Icon: React.ComponentType<any>;
  SvgBg: React.ComponentType<any>;
}

function IndustryCard({ id, name, description, Icon, SvgBg }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  
  // SVG background parallax (moves with mouse, max 10px)
  const bgTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const bgTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);
  
  // Card content parallax (moves opposite to mouse, max -4px)
  const contentTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [4, -4]), springConfig);
  const contentTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = (e.clientX - rect.left) / width - 0.5;
    const yVal = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xVal);
    mouseY.set(yVal);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Link href="/portfolio" className="block w-full h-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-[280px] p-8 rounded-[28px] relative overflow-hidden flex flex-col justify-between select-none cursor-pointer transition-all duration-300 border text-left"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: isHovered ? "rgba(214, 32, 32, 0.25)" : "rgba(0, 0, 0, 0.06)",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0, 0, 0, 0.08)" 
            : "0 8px 30px rgba(0, 0, 0, 0.04)",
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
      >
        {/* Animated Background Illustration */}
        <motion.div 
          style={{ x: bgTranslateX, y: bgTranslateY }}
          animate={{
            x: [0, 8, -6, 0],
            y: [0, -8, 8, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            x: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -right-4 -bottom-4 pointer-events-none z-0"
        >
          <SvgBg />
        </motion.div>

        {/* Top Row: Icon Circle + Arrow Circle */}
        <div className="flex items-center justify-between w-full relative z-10">
          {/* Glass Icon Circle */}
          <div 
            className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isHovered ? "#D62020" : "rgba(0, 0, 0, 0.02)",
              borderColor: isHovered ? "#D62020" : "rgba(0, 0, 0, 0.05)",
            }}
          >
            <Icon 
              className="w-5 h-5 transition-colors duration-300" 
              style={{ color: isHovered ? "#FFFFFF" : "#111111" }} 
              strokeWidth={1.8}
            />
          </div>

          {/* Premium Circular Arrow Button */}
          <div 
            className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isHovered ? "#D62020" : "rgba(255, 255, 255, 0.60)",
              borderColor: isHovered ? "#D62020" : "rgba(0, 0, 0, 0.06)",
            }}
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-300"
              style={{
                color: isHovered ? "#FFFFFF" : "#D62020",
                transform: `rotate(${isHovered ? 45 : 0}deg)`
              }}
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Bottom Content: Title + Description */}
        <motion.div 
          style={{ x: contentTranslateX, y: contentTranslateY }}
          className="flex flex-col relative z-10"
        >
          <span className="text-[11px] font-mono tracking-widest text-[#D62020] uppercase font-semibold mb-1">
            [{id}]
          </span>
          <h3 className="text-xl font-bold font-heading text-[#111111] leading-tight">
            {name}
          </h3>
          <p className="text-zinc-500 text-[13px] leading-relaxed mt-2 max-w-[90%] font-body">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 22,
      stiffness: 100,
      duration: 0.5
    }
  }
};

export function IndustryExpertise() {
  return (
    <section className="py-24 bg-[#f8f7f5] text-black relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8">
        
        {/* Header Content */}
        <div className="mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] mb-3"
          >
            INDUSTRY EXPERTISE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bold font-heading text-[32px] md:text-[44px] lg:text-[54px] leading-[1.1] tracking-tight text-black mb-4"
          >
            Expertise that Powers <br />
            <span className="text-[#D62020]">Every Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-secondary)] mt-4 max-w-xl font-body"
          >
            We help businesses across diverse industries with tailored digital solutions, strategic branding, scalable software, AI automation, and performance-driven marketing.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div 
              key={industry.id} 
              variants={cardVariants}
              className={industry.id === "04" ? "lg:col-span-2" : ""}
            >
              <IndustryCard
                id={industry.id}
                name={industry.name}
                description={industry.description}
                Icon={industry.Icon}
                SvgBg={industry.SvgBg}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default IndustryExpertise;
