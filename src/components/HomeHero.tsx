"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import gsap from "gsap";
import { motion } from "framer-motion";

// --- 3D Background Elements ---
function AbstractShapes() {
  const materialProps = {
    roughness: 0.1,
    metalness: 0.9,
    color: "#ffffff",
    envMapIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="city" />

      {/* Left Abstract Shape */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-6, 1, -5]} scale={1.5}>
          <torusKnotGeometry args={[1, 0.4, 128, 64]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      </Float>

      {/* Right Abstract Shape */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[6, -2, -8]} scale={1.2}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshPhysicalMaterial {...materialProps} color="#f0f0f0" />
        </mesh>
      </Float>

      {/* Center Top Shape */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 4, -10]} scale={0.8}>
          <octahedronGeometry args={[1.5, 1]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
      </Float>

      <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={10} />
    </>
  );
}

// --- Data ---
const mockups = [
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80", // Premium Packaging
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80", // Stationery / Business Cards
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80", // Logo / Identity
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80", // Billboard / Print
];

const serviceIcons = [
  "Logo",
  "Packaging",
  "Brochure",
  "Flyer",
  "Printing",
  "Brand Identity",
  "Business Card",
  "Large Format",
];

const floatingCards = [
  { title: "Logo Design", top: "15%", left: "5%", delay: 0 },
  { title: "Packaging", top: "70%", left: "10%", delay: 1 },
  { title: "Brand Identity", top: "20%", right: "8%", delay: 2 },
  { title: "Business Card", top: "80%", right: "12%", delay: 1.5 },
];

export default function HomeHero() {
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Rotating Service Icons
    if (iconsContainerRef.current) {
      const icons = iconsContainerRef.current.querySelectorAll(".service-icon");
      const radius = 260; // Orbit radius
      const centerX = 0;
      const centerY = 0;

      // Position icons in a circle initially
      icons.forEach((icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        gsap.set(icon, { x, y });

        // Continuous rotation animation
        gsap.to(icon, {
          duration: 30, // slow rotation
          repeat: -1,
          ease: "none",
          motionPath: {
            path: Array.from({ length: 360 }).map((_, deg) => {
              const a = angle + (deg * Math.PI) / 180;
              return {
                x: centerX + radius * Math.cos(a),
                y: centerY + radius * Math.sin(a),
              };
            }),
          },
        });
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] bg-white overflow-hidden flex items-center py-16 md:py-24">
      
      {/* --- Circular Background Lines --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-15">
        <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] border-[1px] border-gray-400 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] border-[1px] border-gray-400 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] border-[1px] border-gray-400 rounded-full animate-[spin_30s_linear_infinite]" />
      </div>

      {/* --- 3D Background Canvas --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
          <AbstractShapes />
        </Canvas>
      </div>

      {/* --- Rotating Service Icons --- */}
      <div 
        ref={iconsContainerRef} 
        className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block pointer-events-none"
      >
        {serviceIcons.map((label, idx) => (
          <div
            key={idx}
            className="service-icon absolute px-5 py-2.5 bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/50 text-xs font-bold text-gray-900 whitespace-nowrap"
            style={{ left: "-60px", top: "-20px" }} // offset to center the orbit
          >
            {label}
          </div>
        ))}
      </div>

      {/* --- Floating Cards (Boyc Style) --- */}
      {floatingCards.map((card, idx) => (
        <motion.div
          key={idx}
          className="absolute z-20 hidden md:flex items-center justify-center px-8 py-5 bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-2xl"
          style={{ top: card.top, left: card.left, right: card.right }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.delay,
          }}
          whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
        >
          <span className="font-syne font-bold text-gray-900 text-sm tracking-widest uppercase">
            {card.title}
          </span>
        </motion.div>
      ))}

      {/* --- Main Content Grid --- */}
      <div className="relative z-30 w-full max-w-[1600px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center h-full pt-20">
        
        {/* Left Content (Text) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50/90 backdrop-blur-md border border-gray-200 text-xs font-bold tracking-widest text-[#D62020] mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D62020] animate-pulse"></span>
              CREATIVE BRANDING STUDIO
            </div>
            
            <h1 className="font-syne text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] font-extrabold text-black tracking-tighter mb-5">
              Creative Branding &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D62020] to-[#990000]">
                Premium Printing
              </span><br />
              That Builds Lasting Brand Impact
            </h1>
            
            <p className="font-inter text-gray-600 text-lg md:text-xl max-w-[540px] leading-relaxed mb-6">
              From logo design and premium stationery to packaging, brochures and large-format printing, we help businesses create unforgettable brand experiences.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <motion.a
                href="#consultation"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-[#D62020] text-white font-syne font-bold text-lg rounded-xl shadow-[0_12px_30px_rgba(214,32,32,0.3)] hover:shadow-[0_20px_40px_rgba(214,32,32,0.4)] transition-all flex items-center justify-center"
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white border-2 border-gray-200 text-black font-syne font-bold text-lg rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content (Swiper Slider) */}
        <div className="lg:col-span-6 h-[500px] md:h-[700px] w-full relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] group">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            allowTouchMove={true}
            className="w-full h-full"
          >
            {mockups.map((src, idx) => (
              <SwiperSlide key={idx} className="w-full h-full overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-[7000ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${src})` }}
                />
                {/* Premium Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom decorative border frame for ultra-premium feel */}
          <div className="absolute inset-0 border-[1px] border-white/40 rounded-[2rem] pointer-events-none z-10 mix-blend-overlay" />
          <div className="absolute inset-4 border border-white/20 rounded-[1.5rem] pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}
