"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={container} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-6"
    >
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto flex flex-col items-center text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          Creative Digital Agency in Pune
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter leading-[0.9] mb-8 max-w-5xl">
          We build brands that <span className="text-[var(--color-accent)]">demand</span> attention.
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[var(--color-secondary)] max-w-2xl mb-12 font-medium"
        >
          Strategy-led design and high-performance digital marketing for ambitious startups, SaaS platforms, and enterprise brands.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="/contact" size="lg" className="w-full sm:w-auto !text-[#FFFFFF] hover:!text-[#FFFFFF] focus:!text-[#FFFFFF] active:!text-[#FFFFFF]">
            Start a Project <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button href="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto border-[var(--color-primary)]">
            View Our Work <Play className="w-4 h-4 ml-2 fill-current" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
