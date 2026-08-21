"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{children}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + (1 / chars.length);
        return (
          <Character key={i} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Character>
        );
      })}
    </p>
  );
}
