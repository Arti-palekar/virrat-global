"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const POSTS = [
  {
    title: "The Death of the Traditional Agency Model",
    category: "Agency Insights",
    readTime: "5 min read",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    link: "/blog/post",
  },
  {
    title: "Why Your B2B SaaS Design is Costing You Conversions",
    category: "UI/UX Design",
    readTime: "8 min read",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1507238692062-2a042f7e37e5?q=80&w=2670&auto=format&fit=crop",
    link: "/blog/post",
  },
  {
    title: "Performance Marketing in a Privacy-First World",
    category: "Digital Marketing",
    readTime: "6 min read",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1432888117247-36a5060f0559?q=80&w=2670&auto=format&fit=crop",
    link: "/blog/post",
  },
  {
    title: "Building a Brand Architecture that Scales",
    category: "Brand Strategy",
    readTime: "10 min read",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop",
    link: "/blog/post",
  }
];

export function BlogGrid() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-6">
        
        {/* Featured Post */}
        <div className="mb-24">
          <Link href={POSTS[0].link} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video lg:aspect-auto lg:h-[500px] rounded-[2rem] overflow-hidden bg-gray-100">
              <Image
                src={POSTS[0].image}
                alt={POSTS[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--color-secondary)]">
                <span>{POSTS[0].category}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                <span>{POSTS[0].readTime}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading group-hover:text-[var(--color-accent)] transition-colors mb-5">
                {POSTS[0].title}
              </h2>
              <p className="text-xl text-[var(--color-secondary)] line-clamp-3 mb-6">
                In an era of in-house teams and specialized freelancers, the bloated, slow-moving AOR model is dying. Here's how agile creative partners are replacing them.
              </p>
              <div className="inline-flex items-center font-bold border-b-2 border-transparent group-hover:border-[var(--color-accent)] transition-colors text-[var(--color-primary)]">
                Read Article <ArrowUpRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {POSTS.slice(1).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={post.link} className="group block">
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-secondary)]">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold font-heading group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
