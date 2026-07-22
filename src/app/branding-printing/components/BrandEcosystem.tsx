"use client";
import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring, 
  useMotionTemplate 
} from "framer-motion";

// Individual Interactive Card with mouse-move magnetic 3D tilt and grayscale-to-color hover transition
const InteractiveCard = ({ 
  src, 
  category, 
  className, 
  delay = 0,
  style = {} 
}: { 
  src: string; 
  category: string; 
  className: string; 
  delay?: number;
  style?: any;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for the card tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Motion values for shine position
  const shineX = useMotionValue("50%");
  const shineY = useMotionValue("50%");
  const shineOpacity = useMotionValue(0);
  
  // Smooth springs for tilt response
  const springX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    
    // Max 15 degree rotation
    rotateX.set(-py * 16);
    rotateY.set(px * 16);
    
    // Position shine
    shineX.set(`${(x / rect.width) * 100}%`);
    shineY.set(`${(y / rect.height) * 100}%`);
    shineOpacity.set(0.65);
  };
  
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    shineOpacity.set(0);
  };

  // Compile shine background gradient string
  const shineBg = useMotionTemplate`radial-gradient(circle 120px at ${shineX} ${shineY}, rgba(255,255,255,0.3) 0%, transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-50 border border-gray-200/40 shadow-sm transition-all duration-500 ease-out select-none ${className}`}
    >
      {/* Container wrapper for image, handling scale lift, red accent shadow, and perpetual micro-floating drift */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5 + delay * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.3,
        }}
        className="relative w-full h-full overflow-hidden transition-all duration-500 group-hover:scale-[1.04] group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(214,32,32,0.14)] group-hover:border-[#d62020]/25"
      >
        {/* Grayscale, blurred image that lifts on hover */}
        <img
          src={src}
          alt={category}
          className="w-full h-full object-cover filter grayscale blur-[1px] brightness-75 group-hover:grayscale-0 group-hover:blur-0 group-hover:brightness-100 transition-all duration-700 ease-out pointer-events-none"
        />
        
        {/* Dynamic shine overlay */}
        <motion.div
          style={{
            background: shineBg,
            opacity: shineOpacity,
          }}
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay transition-opacity duration-300"
        />
        
        {/* Subtle red tint overlay on hover */}
        <div className="absolute inset-0 bg-[#d62020]/0 group-hover:bg-[#d62020]/5 transition-colors duration-500 pointer-events-none" />

        {/* Floating Premium Chip Tag - Animates with smooth spring cubic-bezier pop */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-max">
          <div className="px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wider uppercase shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
            {category}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

// Subtle ambient particle grid
const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 5 + 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * -20;
        
        return (
          <motion.div
            key={i}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            className="absolute rounded-full bg-[#d62020]/15 blur-[0.5px]"
          />
        );
      })}
    </div>
  );
};

export default function BrandEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  // Scroll Tracking for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mouse position tracking inside the section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || !desktopRef.current) return;
    const rect = desktopRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const nx = (x / rect.width) - 0.5;
    const ny = (y / rect.height) - 0.5;
    
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Center typography entry animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0.6, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [0.96, 1]);

  const PROJECTS = [
    {
      category: "Logo Design",
      src: "/media/logo_mockup.png",
      settledClass: "left-[13%] top-[14%] w-[180px] h-[230px] xl:w-[210px] xl:h-[270px]",
      dispX: -260,
      dispY: -160,
      dispRotate: -24,
      settledRotate: -6,
      delay: 0.1,
    },
    {
      category: "Packaging Design",
      src: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&q=80",
      settledClass: "right-[13%] top-[12%] w-[200px] h-[250px] xl:w-[230px] xl:h-[290px]",
      dispX: 260,
      dispY: -160,
      dispRotate: 24,
      settledRotate: 8,
      delay: 0.2,
    },
    {
      category: "Business Cards",
      src: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=600&q=80",
      settledClass: "left-[11%] bottom-[12%] w-[170px] h-[210px] xl:w-[190px] xl:h-[240px]",
      dispX: -260,
      dispY: 160,
      dispRotate: -18,
      settledRotate: -4,
      delay: 0.3,
    },
    {
      category: "Shopping Bag",
      src: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80",
      settledClass: "right-[11%] bottom-[12%] w-[180px] h-[230px] xl:w-[200px] xl:h-[260px]",
      dispX: 260,
      dispY: 160,
      dispRotate: 18,
      settledRotate: 6,
      delay: 0.4,
    },
    {
      category: "Jewellery Branding",
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      settledClass: "left-[4%] top-[45%] w-[190px] h-[250px] xl:w-[220px] xl:h-[290px]",
      dispX: -320,
      dispY: 0,
      dispRotate: 28,
      settledRotate: 10,
      delay: 0.5,
    },
    {
      category: "Product Labels",
      src: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=600&q=80",
      settledClass: "right-[4%] top-[42%] w-[170px] h-[230px] xl:w-[200px] xl:h-[270px]",
      dispX: 320,
      dispY: 0,
      dispRotate: -28,
      settledRotate: -8,
      delay: 0.6,
    },
    {
      category: "Restaurant Identity",
      src: "https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=600&q=80",
      settledClass: "left-[32%] top-[8%] w-[190px] h-[240px] xl:w-[220px] xl:h-[280px]",
      dispX: 0,
      dispY: -280,
      dispRotate: 16,
      settledRotate: 2,
      delay: 0.7,
    },
    {
      category: "Identity Kit",
      src: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80",
      settledClass: "right-[32%] bottom-[8%] w-[180px] h-[230px] xl:w-[210px] xl:h-[270px]",
      dispX: 0,
      dispY: 280,
      dispRotate: -16,
      settledRotate: -3,
      delay: 0.8,
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
    >
      {/* ── DESKTOP SCROLL SETTLE PARALLAX LAYOUT (md+) ── */}
      <div 
        ref={desktopRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block relative w-full h-[220vh] bg-white z-10"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">
          
          {/* Subtle noise paper grain background & grid lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, rgba(214, 32, 32, 0.02) 0%, transparent 75%),
                linear-gradient(rgba(17, 17, 17, 0.012) 1px, transparent 1px),
                linear-gradient(90deg, rgba(17, 17, 17, 0.012) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 48px 48px, 48px 48px"
            }}
          />

          {/* Animated Light Ambient Gradients */}
          <motion.div 
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 50, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-[#d62020]/4 to-transparent rounded-full blur-[110px] pointer-events-none z-0"
          />
          <motion.div 
            animate={{
              x: [0, -40, 40, 0],
              y: [0, 60, -50, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/3 w-[650px] h-[650px] bg-gradient-to-br from-[#d62020]/3 to-transparent rounded-full blur-[130px] pointer-events-none z-0"
          />

          <BackgroundParticles />

          {/* Central Title Details */}
          <motion.div 
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="text-center z-20 max-w-xl px-4 pointer-events-none select-none flex flex-col items-center"
          >
            <span className="text-xs font-semibold tracking-widest text-[#d62020] uppercase font-mono block mb-4">
              VIRRAT GLOBAL
            </span>
            <h2 className="text-[3.5rem] lg:text-[5rem] xl:text-[6.5rem] font-[900] leading-none tracking-[-0.04em] mb-6 font-heading text-[#111111] flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                BRAND
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#d62020] relative inline-block"
              >
                IDENTITY
                <span className="absolute inset-0 bg-[#d62020]/20 blur-3xl rounded-full -z-10 pointer-events-none" />
              </motion.span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 font-sans font-medium tracking-wide leading-tight mt-2">
              Creating Brands<br/>
              That Leave<br/>
              A Lasting Impression
            </p>
          </motion.div>

          {/* Parallax elements cloud */}
          {PROJECTS.map((project, i) => {
            // Settle ranges from 0 (dispersed) to 0.75 (fully settled in position)
            const sx = useTransform(scrollYProgress, [0, 0.75], [project.dispX, 0]);
            const sy = useTransform(scrollYProgress, [0, 0.75], [project.dispY, 0]);
            const sRotate = useTransform(scrollYProgress, [0, 0.75], [project.dispRotate, project.settledRotate]);
            const sScale = useTransform(scrollYProgress, [0, 0.75], [0.8, 1]);

            // Subtle mouse parallax overlay (moves max 15px based on cursor position)
            const mouseFactor = 10 + i * 4;
            const mx = useTransform(smoothX, [-0.5, 0.5], [-mouseFactor, mouseFactor]);
            const my = useTransform(smoothY, [-0.5, 0.5], [-mouseFactor, mouseFactor]);

            // Combine scroll-settle transforms and cursor interactions
            const combinedX = useTransform([sx, mx], ([sVal, mVal]) => (sVal as number) + (mVal as number));
            const combinedY = useTransform([sy, my], ([sVal, mVal]) => (sVal as number) + (mVal as number));

            return (
              <InteractiveCard
                key={project.category}
                src={project.src}
                category={project.category}
                className={project.settledClass}
                delay={project.delay}
                style={{
                  x: combinedX,
                  y: combinedY,
                  rotate: sRotate,
                  scale: sScale,
                }}
              />
            );
          })}

        </div>
      </div>

      {/* ── MOBILE FLOW GRID LAYOUT (Below md) ── */}
      <div className="block md:hidden relative w-full bg-white py-20 px-6 z-10 border-t border-gray-100">
        
        {/* Subtle noise paper grain background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply z-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <span className="text-[10px] font-bold text-[#d62020] tracking-[0.25em] uppercase font-mono block mb-3">
            VIRRAT GLOBAL
          </span>
          <h2 className="text-5xl font-[900] leading-none tracking-tighter mb-5 font-heading text-[#111111] flex flex-col items-center">
            <span className="block">BRAND</span>
            <span className="text-[#D62020] relative inline-block">
              IDENTITY
              <span className="absolute inset-0 bg-[#D62020]/10 blur-2xl rounded-full -z-10 pointer-events-none" />
            </span>
          </h2>
          <p className="text-sm text-gray-500 font-sans tracking-wide mt-1">
            Creating Brands<br/>
            That Leave<br/>
            A Lasting Impression
          </p>
        </div>
        
        {/* Clean, responsive 2-column list of items with tap tilt/hover effects */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
            >
              <InteractiveCard
                src={project.src}
                category={project.category}
                className="w-full aspect-[3/4] rounded-2xl"
                delay={project.delay}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
