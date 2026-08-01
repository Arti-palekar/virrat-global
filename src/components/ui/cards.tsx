"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export type PremiumCardItem = {
  label: string;
  title: string;
  description: string;
  projects: string;
  href: string;
  bgBlob: string;       // rgba(...)
  bgHoverBlob: string;  // rgba(...)
  glowColor: string;    // rgba(...)
  titleColor: string;   // hex
};

export const PremiumServiceCard = React.memo(
  ({ card }: { card: PremiumCardItem }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Link
        href={card.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group relative flex flex-col justify-between h-[340px] w-full bg-[#FFFFFF] text-left",
          "rounded-[26px] p-[34px] select-none overflow-hidden",
          "shadow-[0_14px_45px_rgba(0,0,0,0.06)]",
          "transition-all duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)]",
          isHovered ? "-translate-y-2 scale-[1.02] shadow-[0_30px_70px_rgba(0,0,0,0.12)]" : ""
        )}
      >
        {/* Top Right Decoration Shape */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '170px',
            height: '170px',
            borderBottomLeftRadius: '120px',
            borderTopRightRadius: '26px',
            pointerEvents: 'none',
            transformOrigin: 'top right',
            backgroundColor: isHovered ? card.bgHoverBlob : card.bgBlob,
            boxShadow: isHovered ? `0 0 90px ${card.glowColor}` : 'none',
            transform: isHovered ? 'scale(1.18) rotate(8deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 450ms cubic-bezier(.22,.61,.36,1), background-color 450ms cubic-bezier(.22,.61,.36,1), box-shadow 450ms cubic-bezier(.22,.61,.36,1)',
          }}
        />

        {/* Content Top */}
        <div className="relative z-10 flex flex-col">
          {/* Small Category Label */}
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-400">
            {card.label}
          </span>

          {/* Large Title */}
          <h3
            className="text-2xl font-bold font-heading"
            style={{
              color: isHovered ? card.titleColor : "#202020",
              transition: "color 300ms ease",
            }}
          >
            {card.title}
          </h3>

          {/* Paragraph (16px and dark gray) */}
          <p className="text-[16px] text-zinc-500 leading-relaxed mt-4 line-clamp-3 font-body">
            {card.description}
          </p>
        </div>

        {/* Content Bottom Row (with Thin Divider Line: rgba(0,0,0,.06)) */}
        <div className="relative z-10 mt-auto pt-5 border-t border-black/[0.06] flex items-center justify-between w-full">
          {/* Project Count */}
          <span className="text-[13px] font-medium text-zinc-400 font-body">
            {card.projects}
          </span>

          {/* Explore Service Button */}
          <div className="flex items-center gap-1.5 text-[12px] font-bold tracking-wider text-black uppercase font-body">
            <span>Explore Service</span>
            <ArrowRight
              className="w-4 h-4 text-[#D62020] transition-transform duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)]"
              style={{
                transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
              }}
            />
          </div>
        </div>
      </Link>
    );
  }
);

PremiumServiceCard.displayName = "PremiumServiceCard";

export function PremiumServiceCardsGrid({ cards }: { cards: PremiumCardItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {cards.map((card) => (
        <PremiumServiceCard key={card.title} card={card} />
      ))}
    </div>
  );
}
