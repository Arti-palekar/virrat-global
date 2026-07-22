"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  magnetic = true,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-black/80",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[#555]",
    outline: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    ghost: "text-[var(--color-primary)] hover:bg-black/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center rounded-full overflow-hidden transition-colors duration-300",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const Element = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      ) : (
        <button className={baseClasses} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );

  if (!magnetic) {
    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }
    return (
      <button className={baseClasses} {...props}>
        {content}
      </button>
    );
  }

  return Element;
}
