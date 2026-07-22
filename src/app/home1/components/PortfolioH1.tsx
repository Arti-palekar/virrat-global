"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Premium projects dataset
const PROJECTS = [
  {
    id: "01",
    title: "Luxury Jewellery Branding",
    category: "Logo Identity",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    sizeClass: "wide-landscape", // Desktop sizes: 320x200
    width: 320,
    height: 200,
    xInit: -800,
    yInit: -180,
    xEnd: -450,
    yEnd: -120,
    rotInit: -12,
    zInit: -150,
    blurInit: 8,
    delay: 0.0,
  },
  {
    id: "02",
    title: "Restaurant Identity",
    category: "Packaging Design",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
    sizeClass: "medium-portrait", // Desktop sizes: 200x280
    width: 200,
    height: 280,
    xInit: -500,
    yInit: -300,
    xEnd: -160,
    yEnd: -140,
    rotInit: 15,
    zInit: -120,
    blurInit: 6,
    delay: 0.05,
  },
  {
    id: "03",
    title: "AI Dashboard",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    sizeClass: "hero-card", // Desktop sizes: 480x320
    width: 480,
    height: 320,
    xInit: 240,
    yInit: -120,
    xEnd: 240,
    yEnd: -90,
    rotInit: -8,
    zInit: -180,
    blurInit: 10,
    delay: 0.10,
  },
  {
    id: "04",
    title: "Healthcare Portal",
    category: "Clinical Platform",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    sizeClass: "tall-portrait", // Desktop sizes: 220x340
    width: 220,
    height: 340,
    xInit: -700,
    yInit: 400,
    xEnd: -430,
    yEnd: 150,
    rotInit: 10,
    zInit: -100,
    blurInit: 6,
    delay: 0.08,
  },
  {
    id: "05",
    title: "Real Estate Platform",
    category: "CRM Software",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    sizeClass: "large-landscape", // Desktop sizes: 340x220
    width: 340,
    height: 220,
    xInit: -110,
    yInit: 350,
    xEnd: -110,
    yEnd: 170,
    rotInit: -14,
    zInit: -140,
    blurInit: 8,
    delay: 0.12,
  },
  {
    id: "06",
    title: "Vidya Academy ERP",
    category: "School ERP",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    sizeClass: "small-portrait", // Desktop sizes: 180x240
    width: 180,
    height: 240,
    xInit: 750,
    yInit: 280,
    xEnd: 260,
    yEnd: 180,
    rotInit: 12,
    zInit: -110,
    blurInit: 6,
    delay: 0.15,
  }
];

function MobileCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const rotation = index % 2 === 0 ? -3 : 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92, rotate: rotation }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 30px 80px rgba(214,32,32,0.15)",
        borderColor: "rgba(214,32,32,0.3)",
      }}
      className="group relative rounded-[30px] border border-gray-100 overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] aspect-[4/5] cursor-pointer transition-colors duration-500"
    >
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden rounded-[30px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500" />
      </div>

      {/* Hover Glass Panel */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="glass p-4 rounded-[20px] border border-white/20 flex justify-between items-center backdrop-blur-md bg-white/10 shadow-lg text-white">
          <div>
            <p className="text-[10px] uppercase font-mono text-[#D62020] font-bold tracking-wider mb-1">
              {project.category}
            </p>
            <h4 className="text-base font-heading font-bold text-white leading-tight">
              {project.title}
            </h4>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#D62020] transition-colors flex items-center justify-center text-white shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioH1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Header Animations
  const headerOpacity = useTransform(smoothProgress, [0.0, 0.15], [0, 1]);
  const headerY = useTransform(smoothProgress, [0.0, 0.15], [-50, 0]);

  // Master fade out for the section content at the very end of the scroll range
  const sectionOpacity = useTransform(smoothProgress, [0.85, 0.95], [1, 0]);

  // Mouse handler for custom cursor follower
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      id="portfolio"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(214, 32, 32, 0.04) 0%, rgba(255, 255, 255, 0) 70%), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
      }}
      className={`relative w-full ${isDesktop ? "h-[300vh]" : "py-[140px]"} bg-white overflow-hidden select-none`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setCursorActive(true)}
      onMouseLeave={() => setCursorActive(false)}
    >
      {/* Custom Cursor Follower on Desktop */}
      {isDesktop && cursorActive && (
        <motion.div
          style={{
            position: "absolute",
            left: mousePos.x,
            top: mousePos.y,
            x: "-50%",
            y: "-50%",
            pointerEvents: "none",
            zIndex: 99,
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "rgba(214, 32, 32, 0.15)",
            border: "1px solid #D62020",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D62020",
            fontSize: "12px",
            fontWeight: "bold",
            backdropFilter: "blur(2px)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          View
        </motion.div>
      )}

      {isDesktop ? (
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           DESKTOP: STICKY 3D SCROLL COLLAGE
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center py-[140px]">
          <motion.div
            style={{ opacity: sectionOpacity }}
            className="w-full max-w-[1600px] h-full flex flex-col items-center justify-between"
          >
            {/* Header */}
            <motion.div
              style={{ opacity: headerOpacity, y: headerY }}
              className="text-center px-6"
            >
              <p className="text-[14px] font-bold tracking-[0.25em] text-[#d62020] uppercase mb-6">
                OUR PORTFOLIO
              </p>
              <h2 className="homepage-section-title">
                Explore Our <br />
                <span>Portfolio</span>
              </h2>
              <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mx-auto">
                Showcase our finest branding, websites, software, AI automation, digital marketing, and business transformation projects crafted for ambitious brands.
              </p>
            </motion.div>

            {/* Asymmetrical 3D Collage Canvas */}
            <div
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              className="relative w-full flex-1 flex items-center justify-center mt-10 pb-16 [transform-style:preserve-3d]"
            >
              {PROJECTS.map((project) => {
                // Entrance stagger mapping
                const entranceOpacity = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.15],
                  [0, 1]
                );

                // Morph positions (Initial Collage -> Final Locked Positions)
                const cardX = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [project.xInit, project.xEnd, project.xEnd]
                );
                const cardY = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [project.yInit, project.yEnd, project.yEnd]
                );

                // Rotation, scale, translateZ, and blur morphing
                const cardRotate = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [project.rotInit, project.rotInit, 0]
                );
                const cardScale = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [
                    0.85,
                    project.sizeClass === "hero-card" ? 0.88 : 0.92,
                    1.0,
                  ]
                );
                const cardZ = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [project.zInit, -30, 0]
                );
                const cardBlur = useTransform(
                  smoothProgress,
                  [project.delay, project.delay + 0.2, 0.8],
                  [project.blurInit, 3, 0]
                );

                // Image Parallax translation (moves slower than the card)
                const imageY = useTransform(smoothProgress, [0, 1], [-25, 25]);

                return (
                  <motion.div
                    key={project.id}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: project.width,
                      height: project.height,
                      x: useTransform(cardX, (v) => v - project.width / 2),
                      y: useTransform(cardY, (v) => v - project.height / 2),
                      scale: cardScale,
                      rotate: cardRotate,
                      opacity: entranceOpacity,
                      z: cardZ,
                      filter: useTransform(cardBlur, (v) => `blur(${v}px)`),
                      transformStyle: "preserve-3d",
                      borderRadius: "30px",
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 30px 80px rgba(214, 32, 32, 0.18)",
                      borderColor: "rgba(214, 32, 32, 0.3)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    className="group border border-gray-100/60 overflow-hidden bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] cursor-pointer"
                  >
                    {/* Parallax Image Container */}
                    <div className="absolute inset-0 w-full h-[120%] -top-[10%] overflow-hidden rounded-[30px]">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        style={{ y: imageY, scale: 1.12 }}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.18] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/35 transition-colors duration-500" />
                    </div>

                    {/* Bottom Hover Glass Panel */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="glass p-4 rounded-[20px] border border-white/20 flex justify-between items-center backdrop-blur-md bg-white/10 shadow-lg text-white">
                        <div>
                          <p className="text-[10px] uppercase font-mono text-[#D62020] font-bold tracking-wider mb-1">
                            {project.category}
                          </p>
                          <h4 className="text-base font-heading font-bold text-white leading-tight">
                            {project.title}
                          </h4>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-[#D62020] transition-colors flex items-center justify-center text-white shrink-0">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      ) : (
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           MOBILE / TABLET: CLEAN STACKED GRID
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <div className="w-full max-w-[1600px] mx-auto px-6">
          {/* Header */}
          <div className="text-center px-4 mb-16">
            <p className="text-[14px] font-bold tracking-[0.25em] text-[#d62020] uppercase mb-6">
              OUR PORTFOLIO
            </p>
            <h2 className="homepage-section-title">
              Explore Our <br />
              <span>Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mx-auto">
              Showcase our finest branding, websites, software, AI automation, digital marketing, and business transformation projects crafted for ambitious brands.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {PROJECTS.map((project, idx) => (
              <MobileCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
