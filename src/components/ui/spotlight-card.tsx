"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  glowColor?: "red";
  customSize?: boolean;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      children,
      glowColor = "red",
      customSize = false,
      active = false,
      disabled = false,
      loading = false,
      className,
      style,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      ...props
    },
    forwardedRef
  ) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Track mouse coordinates relative to card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics configuration for buttery smooth cursor tracking at 60 FPS
    const springConfig = { stiffness: 120, damping: 22, mass: 0.15 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    // Disable mouse tracking dynamically on mobile screens (less than 768px wide)
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Combine ref forwarded from parents with local ref
    const setRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        cardRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || loading || isMobile) return;
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
      if (onMouseMove) {
        onMouseMove(e);
      }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || loading) return;
      setIsHovered(true);
      if (cardRef.current && !isMobile) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || loading) return;
      setIsHovered(false);
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    };

    // Calculate background radial glow gradient follow-effect
    const spotlightBackground = useTransform(
      [spotlightX, spotlightY],
      ([x, y]) => {
        if (isMobile) return "none";
        return `radial-gradient(400px circle at ${x}px ${y}px, rgba(214,32,32,0.18), transparent 80%)`;
      }
    );

    // Calculate border radial gradient follow-effect
    const borderBackground = useTransform(
      [spotlightX, spotlightY],
      ([x, y]) => {
        if (isMobile) return "rgba(214,32,32,0.18)";
        return `radial-gradient(200px circle at ${x}px ${y}px, rgba(214,32,32,0.95), rgba(214,32,32,0.18) 70%)`;
      }
    );

    return (
      <motion.div
        ref={setRef}
        className={cn(
          "group relative overflow-hidden transition-all duration-500 ease-out transform-gpu",
          // Default Card styles
          "bg-white/92 backdrop-blur-[10px] rounded-[28px]",
          className
        )}
        style={{
          border: active
            ? "2px solid #D62020"
            : "1px solid rgba(214,32,32,0.18)",
          ...style
        }}
        animate={{
          y: isHovered && !disabled && !loading ? -10 : 0,
          scale: isHovered && !disabled && !loading ? 1.02 : 1,
          boxShadow: isHovered && !disabled && !loading
            ? "0 25px 80px rgba(214,32,32,0.18)"
            : "none"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 1
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Spotlight overlay behind card content */}
        {!isMobile && isHovered && !disabled && !loading && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-0 rounded-[28px]"
            style={{
              background: spotlightBackground,
            }}
          />
        )}

        {/* Glow border clip mask that tracks the cursor */}
        {!isMobile && isHovered && !disabled && !loading && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 rounded-[28px]"
            style={{
              padding: "1.5px",
              background: borderBackground,
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />
        )}

        {/* Inner Card Content */}
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlowCard.displayName = "GlowCard";
