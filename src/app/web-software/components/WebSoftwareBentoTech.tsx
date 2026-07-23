"use client";

import React from "react";
import { Code, Database, Smartphone, Cloud, Cpu, Server, LucideIcon } from "lucide-react";

interface TechCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  colSpan: string;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code,
    description: "Modern, ultra-fast user interfaces with server-side rendering and responsive styling.",
    colSpan: "lg:col-span-4",
    items: ["React.js", "Next.js 16", "TypeScript", "Angular", "Vue.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    description: "High-throughput APIs and microservices handling millions of request payloads with zero downtime.",
    colSpan: "lg:col-span-4",
    items: ["Node.js", "Express", "Laravel", "PHP", "Python (FastAPI)", "Go", "GraphQL", "REST APIs"],
  },
  {
    title: "Mobile App Stack",
    icon: Smartphone,
    description: "Native and cross-platform mobile experiences for iOS & Android.",
    colSpan: "lg:col-span-4",
    items: ["Flutter", "React Native", "Swift", "Kotlin", "Dart", "Expo", "Firebase", "App Store Publishing"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "ACID-compliant relational engines and high-speed NoSQL document stores.",
    colSpan: "lg:col-span-6",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "Supabase", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps Infrastructure",
    icon: Cloud,
    description: "Automated CI/CD pipelines, containerization, and enterprise security.",
    colSpan: "lg:col-span-6",
    items: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform", "Cloudflare"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    description: "LLM integration, autonomous AI agents, and computer vision pipelines.",
    colSpan: "lg:col-span-12",
    items: ["OpenAI API", "Claude (Anthropic)", "Google Gemini", "LangChain", "PyTorch", "Pinecone VectorDB", "Auto-GPT", "Whisper OCR"],
  },
];

export function WebSoftwareBentoTech() {
  return (
    <section className="w-full bg-[#f8f7f5] text-[#111111] py-24 md:py-32 border-b border-[#ECECEC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="homepage-section-tag inline-block mb-3">
            ENTERPRISE TECHNOLOGY STACK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#111111] font-heading">
            Built With The <span className="text-[#D62020]">Latest Tech Stack.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] leading-relaxed font-body">
            We leverage battle-tested frameworks, cloud infrastructure, and modern AI tools to ensure your product is fast, secure, and future-proof.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`${cat.colSpan} rounded-3xl bg-white border border-[#ECECEC] p-8 shadow-xs hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D62020]/10 text-[#D62020] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] font-heading group-hover:text-[#D62020] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] font-body mb-6">
                  {cat.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-[#F8F9FA] border border-[#ECECEC] text-xs font-bold text-[#111111] hover:bg-[#D62020] hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WebSoftwareBentoTech;
