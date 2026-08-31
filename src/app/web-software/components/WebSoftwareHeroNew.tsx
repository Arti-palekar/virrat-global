"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";
import { ShootingStarsGrid } from "./ShootingStarsGrid";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years of Expertise" },
];

const badges = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Layers, label: "SaaS & ERP Platforms" },
  { icon: Zap, label: "AI Workflow Automation" },
];

export function WebSoftwareHeroNew() {
  return (
    <div className="w-full bg-[#f8f7f5]">
      <ShootingStarsGrid
        starCount={55}
        shootingStarCount={7}
        gridSize={44}
        speed="normal"
        showGrid
        showStaticStars
        className="min-h-[88vh] w-full rounded-none border-x-0"
        contentClassName="py-20 md:py-28"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6">

          {/* Eyebrow Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d62020]/20 bg-[#d62020]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#d62020] backdrop-blur dark:text-red-200"
              >
                <badge.icon className="size-3" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-balance text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-none text-zinc-950 dark:text-white mb-5">
            We Build Software
            <br />
            <span className="text-[#d62020] dark:text-red-400">That Works for You</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-balance text-base md:text-lg text-slate-600 leading-relaxed dark:text-zinc-300">
            From enterprise web apps and custom ERPs to SaaS platforms, mobile apps, and AI workflow automation — we engineer digital products that perform at scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-red-950/20 transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:!text-zinc-950 dark:hover:bg-zinc-100"
            >
              Start Your Project
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/55 px-6 py-3 text-sm font-semibold text-zinc-950 backdrop-blur transition-all hover:bg-white/80 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </ShootingStarsGrid>
    </div>
  );
}

export default WebSoftwareHeroNew;
