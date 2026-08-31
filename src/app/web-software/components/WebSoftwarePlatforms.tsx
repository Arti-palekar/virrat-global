"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  LoaderCircle,
  Circle,
} from "lucide-react";
import Image from "next/image";

/* ─── Tab data ────────────────────────────────────────────────────────────── */

const items = [
  {
    icon: Layers,
    label: "UI/UX Design",
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces with intuitive user flows, wireframes and interactive prototypes.",

    /* Background image for this tab */
    bg: "/images/workflow/workflow-uiux.webp",
    /* Fine-tune object-position per image so the interesting content isn't
       hidden behind the center card or the left nav panel */
    bgPosition: "center right",

    card: {
      heading: "Design System",
      badge: "In Progress",
      goal: "Create a scalable component library with responsive layouts and brand-consistent typography.",
      tasks: [
        { title: "Wireframe core pages",      meta: "Completed in 3.8s",    status: "completed" },
        { title: "Build design tokens",        meta: "Completed in 6.2s",    status: "completed" },
        { title: "Prototype interactions",     meta: "In progress... 14s",   status: "progress"  },
        { title: "Stakeholder review",         meta: "Pending",              status: "pending"   },
      ],
    },
  },

  {
    icon: Code2,
    label: "Development",
    title: "Full-Stack Development",
    description:
      "Modular, high-performance codebases using Next.js, React, Node and modern cloud architecture.",

    bg: "/images/workflow/workflow-development.webp",
    bgPosition: "center right",

    card: {
      heading: "Sprint Builder",
      badge: "Live",
      goal: "Develop a production-ready REST API with authentication, database layer and CI/CD pipeline.",
      tasks: [
        { title: "Set up project scaffold", meta: "Completed in 2.1s",  status: "completed" },
        { title: "Build API endpoints",     meta: "Completed in 7.4s",  status: "completed" },
        { title: "Integrate database",      meta: "In progress... 18s", status: "progress"  },
        { title: "Deploy to staging",       meta: "Pending",            status: "pending"   },
      ],
    },
  },

  {
    icon: ShieldCheck,
    label: "QA & Testing",
    title: "Quality Assurance",
    description:
      "Automated test suites, cross-browser validation and performance audits for bulletproof releases.",

    bg: "/images/workflow/workflow-testing.webp",
    bgPosition: "center right",

    card: {
      heading: "Test Runner",
      badge: "Automated",
      goal: "Run full regression suite across browsers, devices and screen sizes before release.",
      tasks: [
        { title: "Unit test coverage",  meta: "Completed in 4.5s",  status: "completed" },
        { title: "Integration tests",   meta: "Completed in 9.3s",  status: "completed" },
        { title: "Performance audit",   meta: "In progress... 22s", status: "progress"  },
        { title: "Security scan",       meta: "Pending",            status: "pending"   },
      ],
    },
  },

  {
    icon: Rocket,
    label: "Deployment",
    title: "Launch & DevOps",
    description:
      "Zero-downtime deployments with CI/CD pipelines, monitoring and scalable cloud infrastructure.",

    bg: "/images/workflow/workflow-deployment.webp",
    bgPosition: "center right",

    card: {
      heading: "Deploy Pipeline",
      badge: "Production",
      goal: "Ship to production with automated rollback, CDN configuration and uptime monitoring.",
      tasks: [
        { title: "Build production bundle", meta: "Completed in 1.9s",  status: "completed" },
        { title: "Run smoke tests",         meta: "Completed in 5.7s",  status: "completed" },
        { title: "Deploy to cloud",         meta: "In progress... 12s", status: "progress"  },
        { title: "Enable monitoring",       meta: "Pending",            status: "pending"   },
      ],
    },
  },
];

/* ─── Preload helper (image tag hidden off-screen) ────────────────────────── */
function PreloadImages() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
      {items.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={item.bg} src={item.bg} alt="" fetchPriority="low" />
      ))}
    </div>
  );
}

/* ─── Component ───────────────────────────────────────────────────────────── */

export function WebSoftwarePlatforms() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = items[activeTab];

  /* Track whether the component has mounted so SSR doesn't trip on Image */
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="bg-[#f5f5f3] overflow-hidden py-16 md:py-24">
      {/* Preload all backgrounds so there's no flash on first switch */}
      <PreloadImages />

      {/* ── TOP header (unchanged) ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start mb-10">
          {/* LEFT */}
          <div>
            <h2 className="text-[46px] leading-[50px] tracking-tight font-bold text-[#131313] max-w-2xl font-heading mb-5">
              Our Development Workflow
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-[18px] leading-[32px] text-[#666] max-w-lg">
              End-to-end engineering platforms powering every stage of your
              product — from design systems to production deployment, built by{" "}
              <span className="font-medium text-black">Virrat Global</span>.
            </p>
          </div>
        </div>
      </div>

      {/* ── IMAGE AREA (unchanged structure) ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* FLOATING TABS — unchanged */}
        <div className="absolute left-2 bottom-16 z-20">
          <div className="bg-white rounded-[28px] shadow-xl border border-[#e8e8e8] p-3 w-[240px]">
            <div className="flex flex-col gap-2">
              {items.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      group flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 border cursor-pointer
                      ${
                        activeTab === index
                          ? "bg-[#fef2f2] border-[#d62020]"
                          : "border-transparent hover:border-[#d62020] hover:bg-[#fff5f5]"
                      }
                    `}
                  >
                    <Icon
                      className={`
                        w-5 h-5 transition-colors duration-300
                        ${
                          activeTab === index
                            ? "text-[#d62020]"
                            : "text-[#131313] group-hover:text-[#d62020]"
                        }
                      `}
                    />
                    <span
                      className={`
                        text-[15px] font-medium transition-colors duration-300
                        ${
                          activeTab === index
                            ? "text-[#d62020]"
                            : "text-[#131313] group-hover:text-[#d62020]"
                        }
                      `}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── BACKGROUND CONTAINER (same clip-path & border-radius) ──────── */}
        <div
          className="relative overflow-hidden h-[690px]"
          style={{
            clipPath:
              "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 30% 100%, 22% 88%, 0 88%)",
            borderRadius: "34px",
          }}
        >
          {/* ── Background images with crossfade + Ken Burns ──────────────── */}
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.bg}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.015 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Slow cinematic push — Ken Burns */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.04 }}
                  transition={{ duration: 12, ease: "linear" }}
                >
                  <Image
                    src={activeItem.bg}
                    alt={activeItem.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1280px"
                    style={{
                      objectFit: "cover",
                      objectPosition: activeItem.bgPosition,
                    }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Subtle neutral overlay for card readability — not a gradient */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "rgba(245, 245, 243, 0.22)" }}
          />

          {/* Very subtle red accent line at bottom — active indicator */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] z-[2]"
            style={{ background: "rgba(214, 32, 32, 0.35)" }}
          />

          {/* ── CENTER CARD — unchanged ───────────────────────────────────── */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.card.heading}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.35 }}
                className="w-[320px] rounded-[26px] border border-white/30 bg-white/80 backdrop-blur-xl shadow-2xl p-5"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] font-semibold text-[#131313]">
                    {activeItem.card.heading}
                  </h3>
                  <span className="text-[11px] bg-[#fef2f2] text-[#d62020] px-2 py-1 rounded-md font-medium">
                    {activeItem.card.badge}
                  </span>
                </div>

                {/* GOAL */}
                <div className="mt-4 border border-[#e7e7e7] rounded-xl p-3">
                  <p className="text-[11px] text-[#777]">Goal</p>
                  <p className="text-[13px] leading-[20px] mt-1 text-[#131313]">
                    {activeItem.card.goal}
                  </p>
                </div>

                {/* TASKS */}
                <div className="mt-4 flex flex-col gap-3">
                  {activeItem.card.tasks.map((task, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-[2px]">
                        {task.status === "completed" && (
                          <CheckCircle2 className="w-4 h-4 text-[#d62020]" />
                        )}
                        {task.status === "progress" && (
                          <LoaderCircle className="w-4 h-4 text-[#d62020]" />
                        )}
                        {task.status === "pending" && (
                          <Circle className="w-4 h-4 text-[#bdbdbd]" />
                        )}
                      </div>

                      <div>
                        <p
                          className={`text-[13px] ${
                            task.status === "completed"
                              ? "line-through text-[#666]"
                              : task.status === "progress"
                              ? "text-[#d62020] font-medium"
                              : "text-[#999]"
                          }`}
                        >
                          {task.title}
                        </p>
                        <p className="text-[11px] text-[#999]">{task.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-5 text-[11px] text-[#888]">
                  <span>2/4 tasks complete</span>
                  <span>Est. 30s remaining</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebSoftwarePlatforms;
