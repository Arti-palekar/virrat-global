"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    title: "TechFlow",
    category: "SaaS Platform Redesign",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "/portfolio/techflow",
  },
  {
    title: "Nova Health",
    category: "Healthcare Brand Identity",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    link: "/portfolio/nova-health",
  },
  {
    title: "Vault Finance",
    category: "Fintech Market Launch",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
    link: "/portfolio/vault-finance",
  },
  {
    title: "Aura Lifestyle",
    category: "E-commerce Conversion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    link: "/portfolio/aura-lifestyle",
  },
  {
    title: "Oasis Developments",
    category: "Real Estate Digital Ecosystem",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    link: "/portfolio/oasis",
  },
  {
    title: "LearnSphere",
    category: "EdTech Web Application",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    link: "/portfolio/learnsphere",
  },
];

export function PortfolioGrid() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.8 }}
              className={`group ${index % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <Link href={project.link} className="block overflow-hidden rounded-[2.5rem] mb-8 relative aspect-[4/5] md:aspect-square bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-4xl font-bold font-heading mb-6">{project.title}</h3>
                  <p className="text-[var(--color-secondary)] text-lg">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
