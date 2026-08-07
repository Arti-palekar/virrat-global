"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PremiumServiceCardsGrid } from "@/components/ui/cards";
import {
  ArrowRight,
  ArrowUpRight,
  Palette,
  Code,
  Users,
  Zap,
  Globe,
  Heart,
  Star,
  Database,
  Shield,
} from "lucide-react";

const THEMES = {
  primary: "from-slate-700 via-slate-800 to-slate-900",
  secondary: "from-blue-600 via-blue-700 to-blue-800",
  accent: "from-purple-600 via-purple-700 to-purple-800",
  success: "from-emerald-600 via-emerald-700 to-emerald-800",
  warning: "from-amber-600 via-amber-700 to-amber-800",
  danger: "from-red-600 via-red-700 to-red-800",
  info: "from-cyan-600 via-cyan-700 to-cyan-800",
  neutral: "from-gray-600 via-gray-700 to-gray-800",
} as const;

type ThemeType = keyof typeof THEMES;

interface MousePos {
  readonly x: number;
  readonly y: number;
}

interface Card3DProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  theme?: ThemeType;
  gradient?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
  disabled?: boolean;
  loading?: boolean;
}

interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  theme?: ThemeType;
  gradient?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

interface Card3DListProps {
  cards: CardData[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
  animated?: boolean;
  staggerDelay?: number;
}

const SIZES = {
  sm: "h-64",
  md: "h-80",
  lg: "h-96",
} as const;

const VARIANTS = {
  default: "shadow-lg hover:shadow-2xl border border-[#F1D6D6] hover:border-[#D62020] transition-colors duration-300",
  minimal: "shadow-md hover:shadow-lg border border-white/10",
  premium: "shadow-xl hover:shadow-2xl ring-1 ring-white/20",
} as const;

const GRIDS = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

const GAPS = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
} as const;

const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12, mass: 0.7 },
  },
};

const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  (
    {
      title,
      description,
      image,
      icon,
      theme = "primary",
      gradient,
      href,
      onClick,
      className,
      size = "md",
      variant = "default",
      disabled = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const finalGradient = useMemo(
      () => gradient || THEMES[theme],
      [gradient, theme]
    );
    const patternId = useMemo(
      () => `pattern-${theme}-${title.replace(/\s+/g, "-").toLowerCase()}`,
      [theme, title]
    );

    const handleMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({
          x: (x / rect.width - 0.5) * 25,
          y: (y / rect.height - 0.5) * -25,
        });
      },
      [disabled]
    );

    const handleEnter = useCallback(() => {
      if (disabled) return;
      setHovered(true);
    }, [disabled]);

    const handleLeave = useCallback(() => {
      if (disabled) return;
      setHovered(false);
      setMousePos({ x: 0, y: 0 });
    }, [disabled]);

    const handleClick = useCallback(() => {
      if (disabled || loading || !onClick) return;
      onClick();
    }, [disabled, loading, onClick]);

    const cardElement = (
      <motion.div
        ref={ref}
        className={cn(
          "group relative w-full overflow-hidden rounded-[28px] transform-gpu transition-all duration-500 ease-out border border-[#F1D6D6] hover:border-[#D62020]",
          SIZES[size],
          VARIANTS[variant],
          (onClick || href) && !disabled && !loading && "cursor-pointer",
          disabled && "opacity-50 cursor-not-allowed",
          loading && "pointer-events-none",
          className
        )}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{
          rotateX: disabled ? 0 : mousePos.y,
          rotateY: disabled ? 0 : mousePos.x,
          z: disabled ? 0 : hovered ? 30 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
        whileTap={
          disabled || (!onClick && !href)
            ? {}
            : {
                scale: 0.98,
                rotateX: mousePos.y + 3,
                rotateY: mousePos.x + 3,
              }
        }
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
        role={(onClick || href) ? "button" : "article"}
        tabIndex={(onClick || href) && !disabled ? 0 : -1}
        {...props}
      >
        <motion.div
          className={cn(
            "absolute inset-0 rounded-[28px]",
            image ? "" : `bg-gradient-to-br ${finalGradient}`
          )}
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ transform: "translateZ(-10px)" }}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500"
              loading="lazy"
            />
          )}
        </motion.div>

        <div className="absolute inset-0 overflow-hidden rounded-[28px] opacity-20">
          <svg
            className="absolute -top-4 -right-4 w-32 h-32 text-white/30"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id={patternId}
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="1"
                  fill="currentColor"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#${patternId})`} />
          </svg>

          <motion.div
            className="absolute -bottom-4 -left-4 w-24 h-24 opacity-30"
            animate={{ rotate: hovered ? 180 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-white/40">
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                rx="8"
              />
              <rect
                x="35"
                y="35"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                rx="4"
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-[28px]"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)`,
            transform: "translateZ(5px)",
          }}
          animate={{ opacity: hovered ? 0.65 : 0.8 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(15px)" }}
        >
          <motion.div
            className="absolute -inset-full"
            animate={{
              background: hovered
                ? `linear-gradient(${mousePos.x + 135}deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)`
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="relative z-20 flex h-full flex-col justify-between p-6 !text-white"
          style={{ transform: "translateZ(20px)", color: "#ffffff" }}
        >
          <div className="flex justify-between items-start">
            {icon && (
              <motion.div
                className="relative !text-white"
                style={{ color: "#ffffff" }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="text-3xl opacity-90 filter drop-shadow-lg !text-white"
                  style={{ color: "#ffffff" }}
                  animate={{
                    rotateZ: hovered ? 5 : 0,
                    y: hovered ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className="relative"
              animate={{ scale: hovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-2.5 w-2.5 rounded-full bg-white/40 backdrop-blur-sm" />
              {!disabled && (
                <motion.div
                  className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-white/70"
                  animate={{
                    scale: hovered ? [1, 1.4, 1] : 1,
                    opacity: hovered ? [0.7, 0.3, 0.7] : 0.7,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          </div>

          <motion.div
            className="space-y-3"
            animate={{ y: hovered ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-xl font-semibold tracking-tight drop-shadow-md !text-white"
              style={{ color: "#ffffff" }}
              animate={{ scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-sm leading-relaxed drop-shadow-sm line-clamp-3 !text-white/85"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
              animate={{ opacity: hovered ? 1 : 0.85 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {(onClick || href) && !disabled && (
              <motion.div
                className="flex items-center space-x-2"
                animate={{
                  x: hovered ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-0.5 w-4 bg-white/70 rounded-full" />
                <div className="text-xs font-bold opacity-90 !text-white uppercase tracking-wider mr-1" style={{ color: "#ffffff" }}>
                  {loading ? "Loading..." : "View More"}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-[28px] pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.1) 100%)`,
            transform: "translateZ(25px)",
          }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {!disabled && (
          <motion.div
            className="absolute -inset-0.5 rounded-[28px] opacity-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${finalGradient})`,
              filter: "blur(15px)",
              transform: "translateZ(-5px)",
            }}
            animate={{ opacity: hovered ? 0.2 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {loading && (
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-[28px] flex items-center justify-center z-40"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.div
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
      </motion.div>
    );

    if (href && !disabled && !loading) {
      return (
        <Link href={href} className="block w-full h-full select-none">
          {cardElement}
        </Link>
      );
    }

    return cardElement;
  }
);

Card3D.displayName = "Card3D";

const Card3DList: React.FC<Card3DListProps> = ({
  cards,
  className,
  columns = 3,
  gap = "md",
  size = "md",
  variant = "default",
  animated = true,
  staggerDelay = 0.08,
}) => {
  const gridClass = useMemo(() => GRIDS[columns], [columns]);
  const gapClass = useMemo(() => GAPS[gap], [gap]);

  const customVariants = useMemo(
    () => ({
      ...containerVariants,
      visible: {
        ...containerVariants.visible,
        transition: {
          ...containerVariants.visible.transition,
          staggerChildren: staggerDelay,
        },
      },
    }),
    [staggerDelay]
  );

  const elements = useMemo(
    () =>
      cards.map((card, index) => (
        <motion.div
          key={card.id}
          variants={animated ? itemVariants : undefined}
          custom={index}
          whileInView={animated ? "visible" : undefined}
          initial={animated ? "hidden" : undefined}
          viewport={
            animated ? { once: true, margin: "-50px", amount: 0.2 } : undefined
          }
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card3D
            title={card.title}
            description={card.description}
            image={card.image}
            icon={card.icon}
            theme={card.theme}
            gradient={card.gradient}
            href={card.href}
            onClick={card.onClick}
            size={size}
            variant={variant}
            disabled={card.disabled}
            loading={card.loading}
          />
        </motion.div>
      )),
    [cards, size, variant, animated]
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]">
          <svg
            width="100%"
            height="100%"
            className="text-slate-900 dark:text-white"
          >
            <defs>
              <pattern
                id="grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          className="absolute top-10 right-10 w-64 h-64 opacity-[0.03]"
          animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-slate-600 dark:text-slate-400"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 opacity-[0.02]"
          animate={{ rotate: [360, 0], y: [-10, 10, -10] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 150 150"
            className="w-full h-full text-slate-600 dark:text-slate-400"
          >
            <rect
              x="25"
              y="25"
              width="100"
              height="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              rx="8"
            />
            <rect
              x="40"
              y="40"
              width="70"
              height="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              rx="4"
            />
            <rect
              x="55"
              y="55"
              width="40"
              height="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              rx="2"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className={cn("relative grid w-full", gridClass, gapClass, className)}
        variants={animated ? customVariants : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
        style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
      >
        {elements}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent dark:from-black/20 pointer-events-none" />
    </div>
  );
};

export default function ServicesPage() {
  const cards: CardData[] = [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Master modern web technologies with React, Next.js, and TypeScript. Build scalable applications with cutting-edge tools and best practices.",
      icon: <Code />,
      theme: "primary",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      href: "/web-software",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "Create beautiful and intuitive user experiences that delight users and drive engagement through thoughtful design principles.",
      icon: <Palette />,
      theme: "secondary",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
      href: "/branding-printing",
    },
    {
      id: "data",
      title: "Data Science",
      description:
        "Analyze complex data sets and build powerful machine learning models to extract meaningful insights from big data.",
      icon: <Database />,
      theme: "info",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      href: "/web-software",
    },
    {
      id: "security",
      title: "Cybersecurity",
      description:
        "Protect digital assets and infrastructure with advanced security protocols and threat detection methodologies.",
      icon: <Shield />,
      theme: "danger",
      image: "https://images.unsplash.com/photo-1563986768494-4641083e5ffb?auto=format&fit=crop&w=600&q=80",
      href: "/web-software",
    },
    {
      id: "leadership",
      title: "Team Leadership",
      description:
        "Build and manage high-performing teams that collaborate effectively and achieve exceptional results through strategic guidance.",
      icon: <Users />,
      theme: "success",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      href: "/web-software",
    },
    {
      id: "innovation",
      title: "Innovation",
      description:
        "Drive innovation in your organization by fostering creativity and implementing breakthrough solutions for complex challenges.",
      icon: <Zap />,
      theme: "accent",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      href: "/ai-automation",
    },
    {
      id: "impact",
      title: "Global Impact",
      description:
        "Create solutions that make a meaningful difference worldwide and contribute to positive social change at scale.",
      icon: <Globe />,
      theme: "neutral",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
      href: "/digital-marketing",
    },
    {
      id: "community",
      title: "Community",
      description:
        "Connect with like-minded professionals, share knowledge, and build lasting relationships in your industry network.",
      icon: <Heart />,
      theme: "warning",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
      href: "/contact",
    },
    {
      id: "excellence",
      title: "Excellence",
      description:
        "Strive for excellence in everything you do and continuously improve your skills, capabilities, and professional expertise.",
      icon: <Star />,
      theme: "secondary",
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=600&q=80",
      href: "/branding-printing",
    },
  ];

  return (
    <>
      {/* Premium Header */}
      <HoverGradientNavBar />

      {/* Breadcrumb Header Section */}
      <section className="relative w-full bg-[#FAF9F6] pt-32 pb-16 px-6 md:px-12 border-b border-black/5 z-20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Small label (Red) */}
            <span className="text-[12px] font-semibold tracking-[0.25em] text-[#D62020] uppercase block">
              OUR SERVICES
            </span>

            {/* Main Heading (Black) */}
            <h1 className="text-[clamp(42px,6vw,72px)] font-extrabold text-[#111111] leading-none tracking-tight font-heading">
              Services
            </h1>

            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-[16px] font-medium text-zinc-400">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#111111] cursor-default">Services</span>
            </nav>
          </motion.div>
        </div>
      </section>

      <main 
        className="relative bg-[#FFFFFF] text-[#111111] overflow-hidden min-h-screen"
      >
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
          style={{
            backgroundImage: "radial-gradient(#111111 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Ambient mesh glow gradients */}
        <div className="absolute top-[8%] left-[15%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-red-100/20 rounded-full blur-[130px] pointer-events-none -z-10 mix-blend-multiply" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-zinc-100/40 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-multiply" />

        {/* ─── NEW SERVICES SHOWCASE SECTION ─── */}
        <section className="relative pt-24 pb-16 px-6 md:px-12 z-20 w-full bg-[#FFFFFF]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
            {/* Title Block */}
            <div className="flex flex-col gap-4 max-w-[600px] text-left">
              <span className="text-[12px] font-bold tracking-[0.25em] text-[#D62020] uppercase block">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-[900] text-[#111111] tracking-tight leading-[1.1] font-heading">
                Everything Your Business Needs <br />
                Under One Roof.
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-body mt-2">
                From branding and websites to AI automation and digital marketing, we build complete business solutions that help companies launch, grow and scale.
              </p>
            </div>

            {/* Hover Reveal Cards Component Grid */}
            <PremiumServiceCardsGrid />
          </div>
        </section>

        {/* ─── 3D CARD GRID SECTION ─── */}
        <section className="relative overflow-hidden pt-12 pb-24 px-6 md:px-12 z-20 w-full bg-[#FFFFFF]">
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
            <svg
              width="100%"
              height="100%"
              className="text-slate-900 dark:text-white"
            >
              <defs>
                <pattern
                  id="mainGrid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mainGrid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card3DList
                cards={cards}
                columns={3}
                gap="lg"
                size="md"
                variant="premium"
                className="mb-8"
              />
            </motion.div>
          </div>
        </section>

        {/* ─── 3. INTERACTIVE CONVERSION CTA SECTION ─── */}
        <section 
          id="cta-section"
          className="relative py-24 md:py-36 px-6 md:px-12 z-20 w-full bg-[#FFFFFF]"
        >
          <div className="max-w-5xl mx-auto">
            {/* Double-Bezel Card Frame */}
            <div className="p-2 bg-zinc-50 border border-black/5 rounded-[3rem] shadow-sm">
              <div className="relative rounded-[2.5rem] bg-white border border-zinc-100 p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 overflow-hidden shadow-inner">
                {/* Visual grid behind CTA */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.015] z-0" 
                  style={{
                    backgroundImage: "radial-gradient(#111111 1.2px, transparent 1.2px)",
                    backgroundSize: "24px 24px"
                  }}
                />

                <div className="relative z-10 max-w-xl flex flex-col gap-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#D62020] bg-red-50/50 border border-red-100/50 rounded-full px-3 py-1 w-fit">
                    GET STARTED
                  </span>
                  <h3 
                    className="text-3xl md:text-5xl font-[900] text-[#111111] tracking-tight leading-none font-heading"
                    style={{ fontFamily: 'var(--font-heading), sans-serif' }}
                  >
                    Ready to Scale <br />
                    Your Business?
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-body mt-2">
                    Connect with our product architects and brand strategists to layout an execution blueprint tailored to your targets.
                  </p>
                </div>

                <div className="relative z-10 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-[#D62020] hover:bg-[#B51B1B] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-red-600/20 active:scale-[0.98]"
                  >
                    <span>Start Your Project</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <CinematicFooter />
    </>
  );
}
