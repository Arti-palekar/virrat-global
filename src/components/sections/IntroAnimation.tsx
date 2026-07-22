"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight, CheckCircle2, X, Sparkles, Rocket } from "lucide-react";

// --- Portfolio Project Data ---
const SERVICES = [
    {
        id: "ecommerce",
        title: "E-Commerce Website",
        tag: "Web Dev",
        desc: "Designed and developed a highly converting, scalable e-commerce platform built for seamless user experience and global transactions.",
        features: ["Custom Shopping Cart", "Payment Gateway Integration", "Inventory Management"],
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    },
    {
        id: "corporate",
        title: "Corporate Website",
        tag: "Web Development",
        desc: "Designed and developed a premium corporate website featuring a custom UI, responsive experience, CMS integration, and performance optimization to strengthen the client's digital presence.",
        features: ["Responsive Design", "CMS Integration", "SEO Optimization"],
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    },
    {
        id: "restaurant",
        title: "Restaurant Branding",
        tag: "Design",
        desc: "Created a complete visual identity and menu design, resulting in a cohesive dining experience from print to digital touchpoints.",
        features: ["Logo Design", "Menu Layouts", "Interior Signage Mockups"],
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    },
    {
        id: "healthcare",
        title: "Healthcare Portal",
        tag: "Software",
        desc: "Built a secure and HIPAA-compliant patient management system streamlining appointments and medical records for a leading clinic.",
        features: ["Patient Dashboard", "Telehealth Integration", "Secure Messaging"],
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    },
    {
        id: "school",
        title: "School ERP System",
        tag: "Software",
        desc: "Implemented a centralized educational resource planning software to manage admissions, grading, and parent communications effectively.",
        features: ["Student Information System", "Automated Billing", "Parent Portal"],
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
    },
    {
        id: "realestate",
        title: "Real Estate Platform",
        tag: "Web Dev",
        desc: "Launched a dynamic property listing website with advanced search filters, virtual tours, and agent management dashboards.",
        features: ["Interactive Maps", "CRM Integration", "Lead Capture Forms"],
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    },
    {
        id: "ai",
        title: "AI Automation Dashboard",
        tag: "AI / ML",
        desc: "Developed a cutting-edge data dashboard leveraging artificial intelligence to automate reporting and business analytics.",
        features: ["Real-time Analytics", "Predictive Modeling", "Custom KPI Tracking"],
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
        id: "mobileapp",
        title: "Mobile App UI",
        tag: "UI/UX",
        desc: "Crafted engaging and intuitive mobile interfaces designed for high retention and seamless user interaction across iOS and Android.",
        features: ["Wireframing", "Interactive Prototypes", "Design Systems"],
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    },
    {
        id: "packaging",
        title: "Packaging Design",
        tag: "Design",
        desc: "Designed eye-catching and sustainable product packaging that stood out on retail shelves and enhanced brand perception.",
        features: ["3D Mockups", "Die-cut Templates", "Brand Consistency"],
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    },
    {
        id: "logo",
        title: "Logo Identity",
        tag: "Branding",
        desc: "Developed a minimalist and impactful logo system forming the solid foundation of a modern enterprise visual identity.",
        features: ["Primary & Secondary Marks", "Color Palette", "Typography Guidelines"],
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
    },
    {
        id: "marketing",
        title: "Digital Marketing Campaign",
        tag: "Marketing",
        desc: "Executed an omni-channel growth campaign that significantly lowered customer acquisition cost and drove sales volume.",
        features: ["Social Media Ads", "Email Sequences", "Conversion Tracking"],
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
    {
        id: "seo-case",
        title: "SEO Case Study",
        tag: "Marketing",
        desc: "Delivered organic search optimization that propelled a B2B business to page one for high-intent industry keywords.",
        features: ["Technical Audit", "Content Strategy", "Backlink Outreach"],
        src: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&q=80",
    },
    {
        id: "crm",
        title: "CRM Software",
        tag: "Software",
        desc: "Built a custom relationship management tool to streamline complex sales pipelines and automate client follow-ups.",
        features: ["Pipeline Visualization", "Automated Workflows", "Reporting Engine"],
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    },
    {
        id: "hrms",
        title: "HR Management System",
        tag: "Software",
        desc: "Deployed an all-in-one portal for employee onboarding, payroll processing, and continuous performance evaluation tracking.",
        features: ["Payroll Integration", "Time Tracking", "Employee Self-Service"],
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
    },
    {
        id: "erp",
        title: "Manufacturing ERP",
        tag: "Software",
        desc: "Engineered robust enterprise software tailored for end-to-end supply chain visibility, inventory control, and factory operations.",
        features: ["Inventory Control", "Supplier Management", "Production Scheduling"],
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    },
    {
        id: "compliance",
        title: "Business Compliance Portal",
        tag: "Web Dev",
        desc: "Developed a regulatory platform ensuring automated legal compliance checks and secure documentation storage for enterprises.",
        features: ["Secure Document Vault", "Audit Trails", "Automated Alerts"],
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
    },
    {
        id: "finance",
        title: "Finance Dashboard",
        tag: "UI/UX",
        desc: "Designed a clean, intuitive financial application giving users real-time insights into expenses and investment growth.",
        features: ["Data Visualization", "Budget Forecasting", "Bank API Integrations"],
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
    {
        id: "event",
        title: "Event Branding",
        tag: "Design",
        desc: "Delivered holistic event collateral design including banners, badges, and digital promotions for a major global tech summit.",
        features: ["Stage Backdrops", "Digital Invites", "Swag Design"],
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    },
    {
        id: "profile",
        title: "Corporate Profile Design",
        tag: "Design",
        desc: "Crafted a premium company profile deck designed to pitch services to investors and high-value stakeholders.",
        features: ["Presentation Design", "Infographics", "Print-ready Formatting"],
        src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
    },
    {
        id: "webapp",
        title: "Custom Web Application",
        tag: "Web Dev",
        desc: "Built a highly scalable, cloud-native web application serving thousands of concurrent users with zero downtime.",
        features: ["Microservices Architecture", "Real-time Sync", "OAuth Integration"],
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    }
];

// Base Card Dimensions
const CARD_BASE_WIDTH = 175;
const CARD_BASE_HEIGHT = 225;

function FlipCard({
    service,
    target,
    isGridView,
    onSelectService,
}: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: isHovered ? target.scale * (isGridView ? 1.08 : 1.06) : target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 45,
                damping: 18,
            }}
            style={{
                position: "absolute",
                width: CARD_BASE_WIDTH,
                height: CARD_BASE_HEIGHT,
                perspective: "1000px",
                zIndex: isHovered ? 50 : (isGridView ? 20 : 10),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelectService(service)}
            className="cursor-pointer select-none"
        >
            <motion.div
                className="relative h-full w-full rounded-2xl shadow-lg"
                style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
                animate={{
                    rotateY: isHovered ? 180 : 0,
                }}
                transition={{
                    duration: 0.55,
                    ease: [0.23, 1, 0.32, 1],
                }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-black border border-gray-200/80 shadow-lg flex flex-col justify-end p-3"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(0deg)",
                    }}
                >
                    <img
                        src={service.src}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl bg-[#111111] flex flex-col items-center justify-between p-3.5 border border-[#d62020]/30 shadow-2xl text-center"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div className="flex flex-col items-center justify-between h-full w-full py-1">
                        <span className="text-[9px] font-bold text-[#d62020] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#d62020]/10 border border-[#d62020]/20 leading-none">
                            {service.tag}
                        </span>

                        <div className="my-auto px-1">
                            <h4 className="text-sm font-extrabold text-white leading-tight mb-1.5">
                                {service.title}
                            </h4>
                            <p className="text-[10.5px] text-[#D1D5DB] line-clamp-3 leading-snug">
                                {service.desc}
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-1 text-[11px] text-[#d62020] font-semibold underline">
                            <span>View Project</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = SERVICES.length;
const MAX_SCROLL = 4000; // Expanded virtual scroll range for slower pacing and a firm end buffer

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [selectedService, setSelectedService] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);

    // --- Container Size Observer ---
    useEffect(() => {
        if (!stickyRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(stickyRef.current);

        setContainerSize({
            width: stickyRef.current.offsetWidth,
            height: stickyRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // Dynamic scale calculation to guarantee 10-card grid fits with maximum clarity
    const dynamicGridScale = useMemo(() => {
        if (!containerSize.height || !containerSize.width) return 1.0;
        
        const isMobile = containerSize.width < 768;
        const isTablet = containerSize.width >= 768 && containerSize.width < 1024;
        const cols = isMobile ? 2 : 5;
        const numRows = Math.ceil(10 / cols);
        
        const rowGap = isMobile ? 210 : 275;
        const colGap = isMobile ? 160 : 235;

        const requiredHeight = (numRows - 1) * rowGap + 225; // CARD_BASE_HEIGHT
        const requiredWidth = (cols - 1) * colGap + 175; // CARD_BASE_WIDTH

        // Space allocation for headers, translations, and bottom padding
        const translationSpace = isMobile ? 64 : (isTablet ? 96 : 112);
        const bottomPaddingSpace = isMobile ? 48 : (isTablet ? 72 : 100);
        const headerSpace = isMobile ? 180 : 140;

        const availableHeight = containerSize.height - headerSpace - translationSpace - bottomPaddingSpace;
        const availableWidth = containerSize.width - 40;

        const scaleY = availableHeight / requiredHeight;
        const scaleX = availableWidth / requiredWidth;

        const targetScale = Math.min(scaleX, scaleY);
        return Math.min(isMobile ? 0.9 : 1.05, Math.max(0.4, targetScale));
    }, [containerSize.height, containerSize.width]);

    // --- Native Scroll Logic ---
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    
    // Map the 0-1 native scroll progress to the 0-MAX_SCROLL virtual values
    const virtualScroll = useTransform(scrollYProgress, [0, 1], [0, MAX_SCROLL]);

    // Animation Phase Springs
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    const scrollRotate = useTransform(virtualScroll, [600, 2400], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    const gridMorph = useTransform(virtualScroll, [2400, 3200], [0, 1]);
    const smoothGridMorph = useSpring(gridMorph, { stiffness: 45, damping: 18 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const sticky = stickyRef.current;
        if (!sticky) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = sticky.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 100);
        };
        sticky.addEventListener("mousemove", handleMouseMove);
        return () => sticky.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence Timers ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return SERVICES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.65,
            opacity: 0,
        }));
    }, []);

    // --- Manual State Interpolation ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [gridValue, setGridValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeGrid = smoothGridMorph.on("change", setGridValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeGrid();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothGridMorph, smoothMouseX]);

    const isGridView = gridValue > 0.7;

    return (
        <div ref={containerRef} className="relative w-full h-[700vh] bg-[#FAFAFA] text-gray-900 select-none">
            <div ref={stickyRef} className="sticky top-0 flex h-screen w-full flex-col items-center justify-center [perspective:1000px] overflow-visible">

                {/* Fixed Header */}
                <div className="absolute top-10 md:top-16 z-[60] flex flex-col items-center justify-center text-center pointer-events-none px-4 w-full">
                    <span className="text-sm font-medium tracking-widest text-[#d62020] uppercase mb-6 shadow-sm">
                        OUR PORTFOLIO
                    </span>
                    <h2 className="homepage-section-title text-center">
                        Explore Our <br />
                        <span>Portfolio</span>
                    </h2>
                </div>

                {/* Main Cards Layout Engine */}
                <div className="relative flex items-center justify-center w-full h-full transform translate-y-16 md:translate-y-24 lg:translate-y-28">
                    {SERVICES.map((service, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        const isMobile = containerSize.width < 768;

                        // 1. Initial Intro (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 75;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 0.65, opacity: 1 };
                        } else {
                            // 2. Circle Phase Calculation (Prominent Card Size around "Services")
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDimension * 0.38, 370);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                                scale: isMobile ? 0.72 : 0.85,
                            };

                            // 3. Bottom Arc Phase Calculation
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                            const arcApexY = containerSize.height * (isMobile ? 0.45 : 0.35);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.8;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 0.85 : 1.05,
                            };

                            // Intermediate Morph
                            const currentArcTarget = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(circlePos.scale, arcPos.scale, morphValue),
                            };

                            // 4. Final Grid Rows Phase Calculation (10 Cards in 5x2 Grid)
                            const GRID_SHOW_COUNT = 10;
                            const isGridActiveCard = i < GRID_SHOW_COUNT;

                            const cols = isMobile ? 2 : 5;
                            const numRows = Math.ceil(GRID_SHOW_COUNT / cols);
                            
                            const colGap = isMobile ? 160 : 235;
                            const rowGap = isMobile ? 210 : 275;

                            const colIndex = isGridActiveCard ? i % cols : 0;
                            const rowIndex = isGridActiveCard ? Math.floor(i / cols) : 0;

                            const gridX = (colIndex - (cols - 1) / 2) * colGap;
                            
                            const gridYCenterOffset = isMobile ? 30 : 20;
                            const unscaledGridY = (rowIndex - (numRows - 1) / 2) * rowGap + gridYCenterOffset;

                            if (isGridActiveCard) {
                                const gridPos = {
                                    x: gridX,
                                    y: unscaledGridY,
                                    rotation: 0,
                                    scale: dynamicGridScale,
                                };

                                target = {
                                    x: lerp(currentArcTarget.x, gridPos.x, gridValue),
                                    y: lerp(currentArcTarget.y, gridPos.y, gridValue),
                                    rotation: lerp(currentArcTarget.rotation, gridPos.rotation, gridValue),
                                    scale: lerp(currentArcTarget.scale, gridPos.scale, gridValue),
                                    opacity: 1,
                                };
                            } else {
                                target = {
                                    x: currentArcTarget.x,
                                    y: currentArcTarget.y + 120 * gridValue,
                                    rotation: currentArcTarget.rotation,
                                    scale: currentArcTarget.scale * lerp(1, 0.7, gridValue),
                                    opacity: lerp(1, 0, gridValue),
                                };
                            }
                        }

                        return (
                            <FlipCard
                                key={service.id}
                                service={service}
                                index={i}
                                target={target}
                                isGridView={isGridView}
                                onSelectService={setSelectedService}
                            />
                        );
                    })}
                </div>

                {/* Bottom Scroll Helper Indicator Bar */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200/80 shadow-md backdrop-blur-md text-[11px] text-gray-700 font-medium">
                        {gridValue > 0.8 ? (
                            <span className="text-[#d62020] font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#d62020]" />
                                10 Featured Portfolio Projects
                            </span>
                        ) : morphValue > 0.8 ? (
                            <span>Scroll down further to arrange into Rows</span>
                        ) : (
                            <span>Scroll down to expand view</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Selected Service Detailed Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e: any) => e.stopPropagation()}
                            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-2xl p-6 md:p-8 cursor-default"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header Banner */}
                            <div className="flex items-start gap-4 mb-6">
                                <img
                                    src={selectedService.src}
                                    alt={selectedService.title}
                                    className="w-20 h-24 object-cover rounded-xl border border-gray-200 shadow-sm flex-shrink-0"
                                />
                                <div className="flex flex-col justify-center">
                                    <span className="inline-block self-start px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#d62020] bg-[#d62020]/10 border border-[#d62020]/20 mb-1.5">
                                        {selectedService.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                        {selectedService.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Service Description */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {selectedService.desc}
                            </p>

                            {/* Key Capabilities */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Core Deliverables & Features
                                </h4>
                                <ul className="space-y-2">
                                    {selectedService.features.map((feature: any, idx: any) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-800 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-[#d62020] flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button */}
                            <div className="flex items-center gap-3 pt-2">
                                <button
                                    onClick={() => alert(`Redirecting to ${selectedService.title} project page...`)}
                                    className="flex-1 py-3 px-5 rounded-xl bg-[#d62020] hover:bg-[#b01a1a] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d62020]/20 transition-all active:scale-[0.98]"
                                >
                                    <span>View Project</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
