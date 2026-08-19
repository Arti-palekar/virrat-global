"use client";
import { useEffect, useRef, useState } from "react";
import { User, Lock, ArrowRight, PenTool, Palette, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";
import HoverGradientNavBar from "@/components/HoverGradientNavBar";
import CinematicFooter from "@/components/CinematicFooter";
import MobileFloatingMenu from "@/components/MobileFloatingMenu";

// Vertex shader source code
const vertexSmokeySource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

// Fragment shader source code for the smokey background effect
const fragmentSmokeySource = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform vec3 u_color;

void mainImage(out vec4 fragColor, in vec2 fragCoord){
    vec2 uv = fragCoord / iResolution;
    vec2 centeredUV = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

    float time = iTime * 0.5;

    // Normalize mouse input (0.0 - 1.0) and remap to -1.0 ~ 1.0
    vec2 mouse = iMouse / iResolution;
    vec2 rippleCenter = 2.0 * mouse - 1.0;

    vec2 distortion = centeredUV;
    // Apply distortion for a wavy, smokey effect
    for (float i = 1.0; i < 8.0; i++) {
        distortion.x += 0.5 / i * cos(i * 2.0 * distortion.y + time + rippleCenter.x * 3.1415);
        distortion.y += 0.5 / i * cos(i * 2.0 * distortion.x + time + rippleCenter.y * 3.1415);
    }

    // Create a glowing wave pattern
    float wave = abs(sin(distortion.x + distortion.y + time));
    float glow = smoothstep(0.9, 0.2, wave);

    fragColor = vec4(u_color * glow, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

/**
 * Valid blur sizes supported by Tailwind CSS.
 */
type BlurSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

/**
 * Props for the SmokeyBackground component.
 */
interface SmokeyBackgroundProps {
  backdropBlurAmount?: string;
  color?: string;
  className?: string;
}

/**
 * A mapping from blur size names to Tailwind CSS classes.
 */
const blurClassMap: Record<BlurSize, string> = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
  "3xl": "backdrop-blur-3xl",
};

/**
 * A React component that renders an interactive WebGL shader background.
 */
export function SmokeyBackground({
  backdropBlurAmount = "sm",
  color = "#1E40AF", // Default dark blue
  className = "",
}: SmokeyBackgroundProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Helper to convert hex color to RGB (0-1 range)
  const hexToRgb = (hex: string): [number, number, number] => {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    return [r, g, b];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSmokeySource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSmokeySource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const iMouseLocation = gl.getUniformLocation(program, "iMouse");
    const uColorLocation = gl.getUniformLocation(program, "u_color");

    let startTime = Date.now();
    const [r, g, b] = hexToRgb(color);
    gl.uniform3f(uColorLocation, r, g, b);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);

      const currentTime = (Date.now() - startTime) / 1000;

      gl.uniform2f(iResolutionLocation, width, height);
      gl.uniform1f(iTimeLocation, currentTime);
      gl.uniform2f(iMouseLocation, isHovering ? mousePosition.x : width / 2, isHovering ? height - mousePosition.y : height / 2);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    render();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering, mousePosition, color]);

  const finalBlurClass = blurClassMap[backdropBlurAmount as BlurSize] || blurClassMap["sm"];

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className={`absolute inset-0 ${finalBlurClass}`}></div>
    </div>
  );
}

/**
 * A glassmorphism-style login form component with animated labels and Google login.
 */
export function LoginForm() {
  return (
    <div className="w-full max-w-sm p-8 space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="mt-2 text-sm text-gray-300">Sign in to continue</p>
      </div>
      <form className="space-y-8">
        {/* Email Input with Animated Label */}
        <div className="relative z-0">
          <input
            type="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" " 
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            <User className="inline-block mr-2 -mt-1" size={16} />
            Email Address
          </label>
        </div>
        {/* Password Input with Animated Label */}
        <div className="relative z-0">
          <input
            type="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            <Lock className="inline-block mr-2 -mt-1" size={16} />
            Password
          </label>
        </div>

        <div className="flex items-center justify-between">
          <a href="#" className="text-xs text-gray-300 hover:text-white transition">Forgot Password?</a>
        </div>
        
        <button
          type="submit"
          className="group w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300"
        >
          Sign In
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Divider */}
        <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-400/30"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">OR CONTINUE WITH</span>
            <div className="flex-grow border-t border-gray-400/30"></div>
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-2.5 px-4 bg-white/90 hover:bg-white rounded-lg text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 8.841C34.553 4.806 29.613 2.5 24 2.5C11.983 2.5 2.5 11.983 2.5 24s9.483 21.5 21.5 21.5S45.5 36.017 45.5 24c0-1.538-.135-3.022-.389-4.417z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12.5 24 12.5c3.059 0 5.842 1.154 7.961 3.039l5.839-5.841C34.553 4.806 29.613 2.5 24 2.5C16.318 2.5 9.642 6.723 6.306 14.691z"></path><path fill="#4CAF50" d="M24 45.5c5.613 0 10.553-2.306 14.802-6.341l-5.839-5.841C30.842 35.846 27.059 38 24 38c-5.039 0-9.345-2.608-11.124-6.481l-6.571 4.819C9.642 41.277 16.318 45.5 24 45.5z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l5.839 5.841C44.196 35.123 45.5 29.837 45.5 24c0-1.538-.135-3.022-.389-4.417z"></path>
          </svg>
          Sign in with Google
        </button>

      </form>
       <p className="text-center text-xs text-gray-400">
        Don't have an account? <a href="#" className="font-semibold text-blue-400 hover:text-blue-300 transition">Sign Up</a>
      </p>
    </div>
  );
}

/**
 * Creative Agency style Hero Section for the Contact Page.
 */
export function ContactHero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen pt-36 pb-20 flex items-center justify-center bg-[#FAF9F6] overflow-hidden shrink-0 mt-0">
      {/* Background radial glow */}
      <div className="absolute right-0 top-1/4 w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Text & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] font-black text-slate-900 tracking-tight leading-[1.1]">
              Let's Work <br />
              Together to Create <br />
              Wonders with Us
            </h1>
            <p className="max-w-md text-base md:text-lg text-slate-600 leading-relaxed font-body">
              A visionary creative, crafting captivating wonders through art and design. Adept at turning imagination into extraordinary reality.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Let's Talk
            </button>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Start Project
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-slate-900">15+</span>
              <span className="block text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">years experience</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-slate-900">26K</span>
              <span className="block text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">projects success</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-slate-900">98%</span>
              <span className="block text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">satisfied rate</span>
            </div>
          </div>
        </div>

        {/* Right Column - Portrait & Floating Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center mt-8 lg:mt-0">
          {/* Orbital rings SVG background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg className="w-[95%] h-[95%] opacity-40 animate-spin" style={{ animationDuration: '40s' }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" className="text-blue-200" strokeWidth="0.5" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-blue-300" strokeWidth="0.5" strokeDasharray="2 2" />
            </svg>
          </div>

          {/* Main Portrait with border container */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 bg-blue-50">
            <img
              src="/img/contact-hero.jpg"
              alt="Creative Designer"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          {/* Floating Badges */}
          {/* 1. Illustration (Top Right) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] right-[-10px] md:right-[-20px] bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/20 p-2 pl-3 flex items-center gap-3 z-20"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white">
              <PenTool className="w-4.5 h-4.5" strokeWidth={2.2} />
            </div>
            <span className="text-sm font-bold text-slate-800 pr-4">Illustration</span>
          </motion.div>

          {/* 2. Graphic Design (Middle Right) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[48%] right-[-30px] md:right-[-50px] bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/20 p-2 pl-3 flex items-center gap-3 z-20"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white">
              <Palette className="w-4.5 h-4.5" strokeWidth={2.2} />
            </div>
            <span className="text-sm font-bold text-slate-800 pr-4">Graphic Design</span>
          </motion.div>

          {/* 3. Creative Branding (Bottom Right) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[18%] right-[-10px] md:right-[-20px] bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/20 p-2 pl-3 flex items-center gap-3 z-20"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white">
              <Sparkles className="w-4.5 h-4.5" strokeWidth={2.2} />
            </div>
            <span className="text-sm font-bold text-slate-800 pr-4">Creative Branding</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/**
 * Default Page wrapper component so Next.js can resolve the route.
 */
export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-[#FAF9F6] text-slate-900 contact-page flex flex-col justify-between">
      {/* Header */}
      <HoverGradientNavBar />

      {/* Hero Section */}
      <ContactHero />

      {/* Form Section (Smokey WebGL Background & Glass Login Form) */}
      <div id="contact-form" className="relative w-full h-screen min-h-[750px] flex items-center justify-center bg-gray-950 overflow-hidden shrink-0 mt-0">
        <SmokeyBackground color="#1D4ED8" backdropBlurAmount="md" />
        <div className="relative z-10 w-full flex items-center justify-center p-4">
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <CinematicFooter />
      <MobileFloatingMenu />
    </main>
  );
}
