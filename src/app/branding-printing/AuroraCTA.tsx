"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Floating Particles Layer
const FloatingParticles = () => {
  const count = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create swirling galaxy/wave effect matching the image
      const t = Math.random() * Math.PI * 2;
      const r = Math.random() * 40;
      
      const x = Math.cos(t) * r;
      const z = Math.sin(t) * r - 15;
      
      // Wave function based on distance and angle
      const wave = Math.sin(x * 0.1) * 3 + Math.cos(z * 0.1) * 3;
      const y = wave + (Math.random() - 0.5) * 1.5 - 6;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);
  
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* @ts-expect-error - R3F types sometimes complain about missing args even though declarative props work */}
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#FFFFFF" 
        transparent 
        opacity={0.7} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Aurora-like flowing background
const AuroraBackground = () => {
  const { scene } = useThree();
  
  useEffect(() => {
    // Make the plane massive so it covers ultra-wide displays at any FOV
    const geometry = new THREE.PlaneGeometry(1000, 1000);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        // Simplex noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
        
        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        
        void main() {
          vec2 uv = vUv;
          
          // Ultra slow animated mesh gradient flow
          float flow1 = snoise(vec2(uv.x * 1.0 + time * 0.02, uv.y * 1.0 + time * 0.015));
          float flow2 = snoise(vec2(uv.x * 0.8 - time * 0.01, uv.y * 1.2 + time * 0.01));
          
          // Base mesh gradient flow
          float mesh = (flow1 + flow2) * 0.5 + 0.5;
          mesh = pow(mesh, 1.2);
          
          // Sharp sweeping light curves matching the reference image
          float curve1 = sin((uv.x + flow1 * 0.2) * 3.14 + time * 0.05) * 0.5 + 0.5;
          float curve2 = cos((uv.y + flow2 * 0.3) * 4.0 - time * 0.04) * 0.5 + 0.5;
          float curve3 = sin((uv.x - uv.y + flow1 * 0.3) * 5.0 + time * 0.03) * 0.5 + 0.5;
          
          // Make curves extremely sharp and thin
          float line1 = pow(curve1, 15.0);
          float line2 = pow(curve2, 20.0);
          float line3 = pow(curve3, 25.0);
          
          float streaks = line1 + line2 + line3;
          
          // Premium colors matching palette
          vec3 bgDark = vec3(0.08, 0.0, 0.0);       // Very Dark Red/Black
          vec3 darkRed = vec3(0.4, 0.0, 0.0);       // Dark Red
          vec3 primaryRed = vec3(0.8, 0.0, 0.0);    // Bright Red
          vec3 highlight = vec3(1.0, 0.3, 0.3);     // Red Highlight Glow
          
          vec3 color = bgDark;
          
          // Smooth blend layers for the background
          color = mix(color, darkRed, smoothstep(0.2, 0.7, mesh));
          color = mix(color, primaryRed, smoothstep(0.6, 1.0, mesh));
          
          // Add the sharp sweeping glowing lines
          color += highlight * streaks * 1.2;
          
          // Add radial glow in center
          float dist = distance(uv, vec2(0.5, 0.5));
          float centerGlow = max(0.0, 1.0 - dist * 1.5);
          color += primaryRed * centerGlow * 0.4;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -50;
    scene.add(mesh);
    
    let animationFrameId: number;
    const animate = () => {
      material.uniforms.time.value += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);
  
  return null;
};

// Camera Controller
const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.02) * 2;
    camera.position.y = Math.cos(time * 0.03) * 1.5;
    camera.position.z = 30;
    camera.lookAt(0, 0, -30);
  });
  
  return null;
};

export default function AuroraCTA() {
  return (
    <section className="w-screen max-w-none relative left-1/2 -translate-x-1/2 h-[420px] overflow-hidden bg-[#2A0708] py-16 md:py-24">
      {/* Layer 1-3 & 5: Canvas Background with Animated Shader & Particles */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 30], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
          <AuroraBackground />
          <FloatingParticles />
          <CameraController />
        </Canvas>
      </div>

      {/* Layer 4: Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Layer 6: Soft Radial Glow Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D62020] opacity-40 blur-[150px] rounded-full z-10 pointer-events-none"></div>
      
      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 pointer-events-none text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-[700px] pointer-events-auto"
        >
          <h2 className="font-syne text-[#FFFFFF] text-[38px] md:text-[50px] lg:text-[60px] leading-[1.1] tracking-tight mb-5">
            <span className="font-[300]">Ready to </span>
            <span className="font-[700]">Build Your Brand?</span>
          </h2>
          
          <p className="font-inter text-[16px] md:text-[18px] font-[400] text-[#FFFFFF] opacity-90 leading-[1.8] max-w-[600px] mb-6">
            Coordinate a direct consultation strategy call with our creative leads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[20px] justify-center w-full">
            <motion.a
              href="https://virratglobal.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[52px] md:h-[56px] px-[32px] rounded-[12px] bg-[#FFFFFF] text-[#CC0000] font-bold text-[16px] md:text-[18px] flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.6)] relative z-10"
            >
              Get Free Consultation
            </motion.a>
            
            <motion.a
              href="https://virratglobal.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)", y: -2 }}
              transition={{ duration: 0.2 }}
              className="h-[52px] md:h-[56px] px-[32px] rounded-[12px] bg-transparent border border-[rgba(255,255,255,0.4)] text-[#FFFFFF] font-[600] text-[16px] md:text-[18px] flex items-center justify-center transition-all relative z-10"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
