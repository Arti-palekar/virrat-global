"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  category: string;
  label: string;
  img: string;
  spanClass: string;
  heightClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Cosmetics",
    label: "Sustainable Box",
    img: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=500&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px] md:h-[450px]"
  },
  {
    id: 2,
    category: "Beverage",
    label: "Minimal Glass Bottle",
    img: "https://images.unsplash.com/photo-1527960656366-ee2a999e32e6?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[320px] md:h-[450px]"
  },
  {
    id: 3,
    category: "Food",
    label: "Kraft Paper Stand-up Pouch",
    img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[300px] md:h-[380px]"
  },
  {
    id: 4,
    category: "Jewellery",
    label: "Rigid Ring Case",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[300px] md:h-[380px]"
  },
  {
    id: 5,
    category: "Fashion",
    label: "Heavy Cardboard Shopping Bag",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500&auto=format&fit=crop",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px] md:h-[450px]"
  },
  {
    id: 6,
    category: "Luxury",
    label: "Magnetic Closure rigid case",
    img: "https://images.unsplash.com/photo-1614859324967-bdf461fec769?q=80&w=600&auto=format&fit=crop",
    spanClass: "md:col-span-2",
    heightClass: "h-[320px] md:h-[450px]"
  }
];

const categories = ["All", "Food", "Beverage", "Cosmetics", "Jewellery", "Fashion", "Luxury"];

export default function PackagingGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#111111] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Gallery Title & Filters */}
        <div className="flex flex-col gap-10 mb-16">
          <div>
            <span className="text-[#fd2e35] text-[10px] font-bold tracking-[0.3em] uppercase">Visual Assets</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mt-4">
              Packaging Gallery
            </h2>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2.5 pb-4 border-b border-zinc-200">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    active 
                      ? "bg-[#111111] text-white border-[#111111]" 
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-[2.2rem] bg-white border border-zinc-200/50 shadow-sm ${item.spanClass} ${item.heightClass} cursor-pointer`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2.2rem]">
                  <motion.img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    whileHover={{ scale: 1.04 }}
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/35" />
                </div>

                {/* Left Top Pill Label */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[9px] font-bold uppercase tracking-widest bg-[#111111] text-white px-4 py-2 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-md">
                    <p className="text-xs font-bold text-zinc-900 tracking-tight">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
