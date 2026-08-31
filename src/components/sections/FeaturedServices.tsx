"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool, Code, LineChart, Video, Gift, Briefcase } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Branding & Print",
    description: "We define your market position and visualize your identity. From foundational strategy to logo design.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Web Dev & UI/UX",
    description: "Fast, scalable, and intuitive digital platforms. We design and engineer websites that convert.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns built for ROI. We leverage SEO, paid acquisition, and content marketing.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: "Video Production",
    description: "Visual storytelling that moves the needle. Corporate videos, commercials, and 3D animations.",
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: "Corporate Gifting",
    description: "Physical touchpoints that leave a lasting impression. Premium custom apparel and merchandise.",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    title: "Business Licensing",
    description: "Navigate compliance without the headache. Company registration, trademarking, and certifications.",
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export function FeaturedServices() {
  return (
    <section className="bg-[var(--color-background)] text-[var(--color-foreground)] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
            >
              Expertise that <br /> drives <span className="text-[var(--color-accent)]">growth.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--color-secondary)]"
            >
              We bring clarity to the chaos of growth. Whether launching a new product or repositioning a legacy company, we act as an extension of your team.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="inline-flex items-center font-semibold text-lg border-b-2 border-black pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white border border-black/5 hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-background)] flex items-center justify-center mb-8 text-[var(--color-primary)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6">{service.title}</h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
