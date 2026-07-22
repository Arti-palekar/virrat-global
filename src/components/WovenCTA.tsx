"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import * as THREE from "three";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── WOVEN LIGHT CTA — VIRRAT GLOBAL ─────────────────────── */

export default function WovenCTA() {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06 + 0.8,
        duration: 1.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }));
    buttonControls.start({
      opacity: 1,
      transition: { delay: 1.8, duration: 0.9 },
    });
  }, [textControls, buttonControls]);

  const line1 = "Ready to Build";
  const line2 = "Something Great?";

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Three.js woven particle canvas */}
      <WovenCanvas />

      {/* Subtle radial vignette overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D62020]" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#D62020] uppercase">
            START YOUR PROJECT
          </span>
        </motion.div>

        {/* Animated headline — character-by-character */}
        <h2
          className="font-heading font-black leading-[1.0] tracking-tighter text-white mb-6 select-none"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          {[line1, line2].map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  custom={lineIdx * 16 + charIdx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={textControls}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.p
          custom={32}
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          className="mx-auto max-w-xl text-base md:text-lg text-white/55 font-inter leading-relaxed mb-10"
        >
          From branding and printing to AI automation, web development, and digital
          marketing — we deliver complete business solutions that drive real growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D62020] hover:bg-[#bf1a1a] text-white text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-[0_0_40px_rgba(214,32,32,0.35)] hover:shadow-[0_0_60px_rgba(214,32,32,0.55)] transform hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] text-white text-sm font-bold uppercase tracking-[0.12em] backdrop-blur-sm transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.2, duration: 1 } }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30 text-[11px] font-mono tracking-widest uppercase"
        >
          <span>250+ Projects Delivered</span>
          <span className="w-px h-4 bg-white/20" />
          <span>100+ Happy Clients</span>
          <span className="w-px h-4 bg-white/20" />
          <span>4.9 / 5 Client Rating</span>
          <span className="w-px h-4 bg-white/20" />
          <span>Pan-India & Global</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── THREE.JS WOVEN PARTICLE CANVAS ────────────────────────── */

function WovenCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    // ── Particle system on TorusKnot ──
    const particleCount = 50000;
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const geometry = new THREE.BufferGeometry();
    const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

    for (let i = 0; i < particleCount; i++) {
      const vi = i % torusKnot.attributes.position.count;
      const x = torusKnot.attributes.position.getX(vi);
      const y = torusKnot.attributes.position.getY(vi);
      const z = torusKnot.attributes.position.getZ(vi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Virrat Global color palette: red #D62020, white, warm amber
      const color = new THREE.Color();
      const t = Math.random();
      if (t < 0.25) {
        // Virrat Red
        color.setHex(0xd62020);
      } else if (t < 0.45) {
        // Warm white
        color.setRGB(1, 1, 1);
      } else {
        // Subtle warm gold
        color.setHSL(0.08 + Math.random() * 0.06, 0.9, 0.65);
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;

        const cur = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
        const orig = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
        const vel = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

        // Mouse repulsion
        const dist = cur.distanceTo(mouseWorld);
        if (dist < 1.5) {
          const force = (1.5 - dist) * 0.012;
          vel.add(new THREE.Vector3().subVectors(cur, mouseWorld).normalize().multiplyScalar(force));
        }

        // Spring return
        vel.add(new THREE.Vector3().subVectors(orig, cur).multiplyScalar(0.001));
        vel.multiplyScalar(0.95); // damping

        positions[ix] += vel.x;
        positions[iy] += vel.y;
        positions[iz] += vel.z;
        velocities[ix] = vel.x;
        velocities[iy] = vel.y;
        velocities[iz] = vel.z;
      }
      geometry.attributes.position.needsUpdate = true;

      points.rotation.y = elapsed * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}
