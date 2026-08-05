"use client";

import { Gift } from "lucide-react";
import Link from "next/link";

export const ColorfulBentoGrid = () => {
  return (
    <section id="free-tools" className="bg-white rounded-[32px] p-8 md:p-12 my-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between w-full">
        <div className="flex flex-col my-6 w-full items-start justify-start gap-4">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end w-full justify-between">
            <h2 className="relative text-4xl md:text-5xl font-heading font-black tracking-tight max-w-xl text-left leading-[1.1] text-[#0A0A0A]">
              Private client work, <br />
              <span className="flex items-center gap-2 mt-2">
                now public &amp; free.
                <Gift className="text-[#439775] fill-[#439775]/10 rotate-12" size={38} strokeWidth={2.5} />
              </span>
            </h2>
            <p className="max-w-sm font-medium text-sm text-[#777777] leading-relaxed">
              Working with us is like having an activation growth taskforce of a Data Scientist, PLG Advisor, &amp; Behavioral Designer in-house. Always ready to go.
            </p>
          </div>

          <div className="flex flex-row text-[#439775] gap-6 items-start justify-center mt-4">
            <p className="text-xs font-bold tracking-wide uppercase">+1,000 Downloads</p>
            <p className="text-xs font-bold tracking-wide uppercase">Rated 5/5 by 100 Founders</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1: UX + Product-Led */}
        <Link
          href="/resources/freebies"
          className="md:col-span-2 overflow-hidden hover:scale-[1.01] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:rotate-1 transition-all duration-300 ease-in-out h-[330px] relative bg-[#D9EAE3] rounded-[24px] flex flex-row items-center gap-8 justify-between p-8"
        >
          <div className="relative flex flex-col items-start justify-center gap-1">
            <p className="-rotate-1 text-sm font-medium text-[#0A0A0A] mb-1">1,000 downloads</p>
            <h3 className="-rotate-1 text-2xl font-bold text-center px-6 py-2 bg-[#0A0A0A] text-white rounded-full">
              UX + Product-Led
            </h3>
          </div>
          <div className="w-full object-fill rounded-xl"></div>
        </Link>

        {/* Card 2: Growth Tools */}
        <Link
          href="/resources/tools"
          className="overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:rotate-6 transition-all duration-300 ease-in-out relative bg-[#DADBF8] h-[330px] rounded-[24px] flex flex-col items-center justify-between p-8 rotate-2"
        >
          <div className="flex flex-col items-center justify-center gap-1 mt-4">
            <p className="rotate-6 text-sm font-medium text-[#0A0A0A] mb-1">10,000 uses</p>
            <h3 className="rotate-6 text-2xl font-bold text-center px-6 py-2 bg-[#0A0A0A] text-white rounded-full">
              Growth Tools
            </h3>
          </div>
          <div className="w-full object-fill rounded-xl"></div>
        </Link>

        {/* Card 3: Improve UX */}
        <Link
          href="/resources/behavior-principles"
          className="overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:-rotate-3 transition-all duration-300 ease-in-out relative bg-[#FFFCE5] h-[330px] rounded-[24px] flex flex-col items-center justify-between p-8 -rotate-1"
        >
          <div className="flex flex-col items-center justify-center gap-1 mt-4">
            <p className="-rotate-3 text-sm font-medium text-[#0A0A0A] mb-1">106 Behavioral Principles</p>
            <h3 className="-rotate-3 text-2xl font-bold text-center px-6 py-2 bg-[#0A0A0A] text-white rounded-full">
              Improve UX
            </h3>
          </div>
          <div className="w-full object-fill rounded-xl"></div>
        </Link>

        {/* Card 4: Coming Soon - Blog */}
        <Link
          href="/resources/blog"
          className="pointer-events-none overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:rotate-4 transition-all duration-300 ease-in-out relative bg-[#F2F2F2] h-[330px] rounded-[24px] flex flex-col items-center justify-center p-8"
        >
          <p className="-rotate-3 text-sm font-medium text-[#0A0A0A] mb-1">Blog &amp; Guides</p>
          <h3 className="-rotate-3 text-2xl font-bold text-center px-6 py-2 bg-white text-[#0A0A0A] rounded-full">
            Comming Soon
          </h3>
        </Link>

        {/* Card 5: Coming Soon - Playbooks */}
        <Link
          href="/resources/playbooks"
          className="pointer-events-none flex items-center justify-center overflow-hidden hover:scale-[1.03] hover:shadow-[-6px_6px_32px_8px_rgba(192,192,192,0.12)] hover:-rotate-6 transition-all duration-300 ease-in-out relative bg-[#FFCFE1] h-[330px] rounded-[24px] flex flex-col items-center justify-center p-8 -rotate-2"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="rotate-6 text-sm font-medium text-[#0A0A0A] mb-1">Playbooks</p>
            <h3 className="rotate-6 text-2xl font-bold text-center px-6 py-2 bg-white text-[#0A0A0A] rounded-full">
              Comming Soon
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export const Component = ColorfulBentoGrid;
export default ColorfulBentoGrid;
