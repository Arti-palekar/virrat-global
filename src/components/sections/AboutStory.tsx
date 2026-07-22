"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VALUES = [
  { title: "Business-First", description: "We don't design in a vacuum. Every creative decision we make is reverse-engineered from your commercial goals." },
  { title: "Senior Talent", description: "Your project is handled by seasoned strategists, designers, and engineers—not passed off to junior interns." },
  { title: "Radical Transparency", description: "Clear timelines, straightforward pricing, and honest feedback. We communicate openly about what works." },
  { title: "Speed & Agility", description: "Our lean structure allows us to move fast, iterate quickly, and deploy high-quality work without agency bloat." }
];

export function AboutStory() {
  return (
    <section className="pb-32 bg-[var(--color-background)]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 tracking-tighter leading-none">
            Good design is <span className="text-[var(--color-accent)]">good business.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--color-secondary)] leading-relaxed space-y-6"
          >
            <p>
              Virrat Global is a creative and digital marketing agency located in Baner, Pune. We partner with founders and marketing leaders to turn complex challenges into clear, compelling brand experiences.
            </p>
            <p>
              What sets us apart is our perspective. We think like business owners, not just creatives. Every decision we make—from typography to performance marketing campaigns—is rooted in data and aligned with your bottom line. We avoid the expected and focus entirely on what works.
            </p>
            <p>
              Clients choose us because we bring clarity to the chaos of growth. Whether you are launching a new product or repositioning a legacy company, we act as an extension of your team.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="mb-20">
          <h2 className="homepage-section-title">
            Our <span>Values.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2rem] bg-white border border-black/5"
              >
                <h3 className="card-title mb-3">{value.title}</h3>
                <p className="card-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
