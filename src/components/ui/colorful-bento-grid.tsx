"use client";

import { cn } from "@/lib/utils";
import { Gift } from "lucide-react";
import Link from "next/link";

export const ColorfulBentoGrid = () => {
  return (
    <section id="free-tools" className="bg-white rounded-[32px] p-8 md:p-10 my-16 max-w-6xl mx-auto shadow-sm border border-zinc-200/50">
      <div className="flex flex-col md:flex-row items-end justify-between w-full">
        <div className="flex flex-col my-6 w-full items-start justify-start gap-4">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end w-full justify-between">
            <h2 className="relative text-4xl md:text-5xl font-heading font-black tracking-tight max-w-xl text-left leading-[1.1] text-base-content-bento">
              Private client work, <br />
              <span className="flex items-center gap-2 mt-2">
                now public &amp; free.
                <Gift className="text-accent-bento fill-accent-bento/10 rotate-12" size={38} strokeWidth={2.5} />
              </span>
            </h2>
            <p className="max-w-sm font-medium text-sm text-muted-bento leading-relaxed">
              Working with us is like having an activation growth taskforce of a Data Scientist, PLG Advisor, &amp; Behavioral Designer in-house. Always ready to go.
            </p>
          </div>

          <div className="flex flex-row text-accent-bento gap-6 items-start justify-center mt-4">
            <p className="text-xs font-bold tracking-wide uppercase">+1,000 Downloads</p>
            <p className="text-xs font-bold tracking-wide uppercase">Rated 5/5 by 100 Founders</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1: UX + Product-Led */}
        <Link
          href="/resources/freebies"
          className="md:col-span-2 overflow-hidden hover:scale-[1.01] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:rotate-1 transition-all duration-300 ease-in-out h-[330px] relative bg-accent-light/40 rounded-2xl flex flex-row items-center gap-6 justify-between p-6 border border-accent-light"
        >
          <div className="relative flex flex-col items-start justify-center gap-3 z-10">
            <p className="-rotate-1 text-xs font-bold text-accent-bento tracking-wider uppercase">1,000 downloads</p>
            <h3 className="-rotate-1 text-2xl font-heading font-black text-center px-5 py-2.5 bg-base-content-bento text-white rounded-full">
              UX + Product-Led
            </h3>
          </div>
          <div className="w-1/2 h-full relative rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500&h=400"
              alt="UX + Product-Led Mockup"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </Link>

        {/* Card 2: Growth Tools */}
        <Link
          href="/resources/tools"
          className="overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:rotate-3 transition-all duration-300 ease-in-out relative bg-highlight-light/40 h-[330px] rounded-2xl flex flex-col items-center justify-between p-6 border border-[#DADBF8]"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center z-10">
            <p className="rotate-3 text-xs font-bold text-highlight-bento tracking-wider uppercase">10,000 uses</p>
            <h3 className="rotate-3 text-xl font-heading font-black text-center px-5 py-2.5 bg-base-content-bento text-white rounded-full">
              Growth Tools
            </h3>
          </div>
          <div className="w-full h-44 relative rounded-xl overflow-hidden shadow-sm mt-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300"
              alt="Growth Tools Dashboard"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </Link>

        {/* Card 3: Improve UX */}
        <Link
          href="/resources/behavior-principles"
          className="overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:-rotate-3 transition-all duration-300 ease-in-out relative bg-secondary-light/60 h-[330px] rounded-2xl flex flex-col items-center justify-between p-6 border border-[#FFFCE5]"
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center z-10">
            <p className="-rotate-2 text-xs font-bold text-error tracking-wider uppercase">106 Behavioral Principles</p>
            <h3 className="-rotate-2 text-xl font-heading font-black text-center px-5 py-2 bg-base-content-bento text-white rounded-full">
              Improve UX
            </h3>
          </div>
          <div className="w-full h-44 relative rounded-xl overflow-hidden shadow-sm mt-4">
            <img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=400&h=300"
              alt="UX Design Principles"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </Link>

        {/* Card 4: Coming Soon - Blog */}
        <div className="overflow-hidden relative bg-[#f8f7f5] h-[330px] rounded-2xl flex flex-col items-center justify-center p-6 border border-zinc-200/60 shadow-inner">
          <p className="-rotate-1 text-xs font-bold text-muted-bento tracking-wider uppercase mb-3">Blog &amp; Guides</p>
          <h3 className="-rotate-1 text-xl font-heading font-black text-center px-5 py-2 bg-white text-muted-bento rounded-full border border-zinc-200 shadow-sm">
            Coming Soon
          </h3>
        </div>

        {/* Card 5: Coming Soon - Playbooks */}
        <div className="flex items-center justify-center overflow-hidden relative bg-primary-light/20 h-[330px] rounded-2xl flex flex-col items-center justify-center p-6 border border-primary-light/30">
          <p className="rotate-2 text-xs font-bold text-primary-bento tracking-wider uppercase mb-3">Playbooks</p>
          <h3 className="rotate-2 text-xl font-heading font-black text-center px-5 py-2 bg-white text-primary-bento rounded-full border border-primary-light/40 shadow-sm">
            Coming Soon
          </h3>
        </div>
      </div>
    </section>
  );
};

export const Component = ColorfulBentoGrid;
export default ColorfulBentoGrid;
