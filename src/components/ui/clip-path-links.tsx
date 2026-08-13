"use client";

import React from "react";
import { useAnimate } from "framer-motion";

// Custom SVG Icons to bypass any react-icons / lucide-react version compatibility issues
const OpenAIIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.3,11.1c0.2-0.7,0.1-1.4-0.3-2.1c-0.4-0.6-1.1-1-1.8-1.1c-0.2,0-0.4,0-0.6,0.1c-0.4-0.8-1.1-1.3-2-1.5c-0.9-0.2-1.7,0-2.4,0.5c-0.1-0.1-0.3-0.2-0.5-0.3C13,6.3,12,6.3,11.2,6.7C10.4,7.2,9.9,8,9.7,9C9.5,8.9,9.2,8.9,9,8.9C8.1,8.9,7.3,9.4,6.9,10.2C6.4,11,6.4,12,6.8,12.8c-0.1,0.1-0.2,0.1-0.2,0.2c-0.7,0.4-1.1,1.1-1.2,1.9C5.3,15.7,5.6,16.5,6.1,17c0.2,0.2,0.4,0.3,0.6,0.4c0,0.2,0.1,0.4,0.2,0.6c0.4,0.8,1.1,1.3,2,1.5c0.9,0.2,1.7,0,2.4-0.5c0.1,0.1-0.3,0.2-0.5,0.3c0.7,0.3,1.4,0.3,2.1-0.1c0.7-0.4,1.1-1.1,1.3-1.9c0.2,0,0.4,0,0.6-0.1c0.9-0.1,1.6-0.6,2-1.4C22.2,13.8,22,12.8,21.3,11.1z" />
  </svg>
);

const GeminiIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c.132 4.937 4.063 8.868 9 9-.132 4.937-4.063 8.868-9 9-4.937-.132-8.868-4.063-9-9 4.937-.132 8.868-4.063 9-9z" />
  </svg>
);

const MakeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const ZapierIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const N8NIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const SlackIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.782a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.134 3.861a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.78 10.134a2.528 2.528 0 0 1-2.522 2.522 2.528 2.528 0 0 1-2.52-2.522v-2.52h2.52a2.528 2.528 0 0 1 2.522 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const FigmaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-4-4C5.79 8 4 9.79 4 12s1.79 4 4 4h4v-8H8zm8 0c0 2.21-1.79 4-4 4v-8c2.21 0 4 1.79 4 4zm-8 8c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8H8z" />
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.478 0-6.3-2.823-6.3-6.3 0-3.478 2.822-6.3 6.3-6.3 1.54 0 2.94.55 4.03 1.47l3.07-3.07C19.24 2.23 15.97 1 12.24 1 6.033 1 12.24 6.033 12.24 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-11 0-.746-.067-1.43-.195-2.2H12.24z" />
  </svg>
);

export const ClipPathLinks = () => {
  return (
    <section className="w-full bg-[#050b09] py-24 px-6 md:px-12 lg:px-24 border-b border-zinc-900 relative">
      {/* Background ambient RED glow matching section theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E31E24]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight mb-3 !text-white">
            Tools We Use
          </h2>
          <p className="font-sans mx-auto max-w-[650px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] !text-white/85 text-center mt-3">
            Powering intelligent automation with the tools, platforms, and technologies we trust.
          </p>
        </div>

        {/* Clip-Path Links Grid (Subtle Red Borders) */}
        <div className="divide-y border divide-[#E31E24]/20 border-[#E31E24]/20 rounded-[20px] overflow-hidden bg-zinc-950/20 backdrop-blur-md shadow-sm">
          {/* Row 1 — 2 large cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E31E24]/20">
            <LinkBox name="OpenAI" CustomIcon={OpenAIIcon} href="https://openai.com" />
            <LinkBox name="Google Gemini" CustomIcon={GeminiIcon} href="https://gemini.google.com" />
          </div>

          {/* Row 2 — 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E31E24]/20">
            <LinkBox name="Make" CustomIcon={MakeIcon} href="https://make.com" />
            <LinkBox name="Zapier" CustomIcon={ZapierIcon} href="https://zapier.com" />
            <LinkBox name="n8n" CustomIcon={N8NIcon} href="https://n8n.io" className="border-t border-[#E31E24]/20 md:border-t-0" />
            <LinkBox name="Slack" CustomIcon={SlackIcon} href="https://slack.com" className="border-t border-[#E31E24]/20 md:border-t-0" />
          </div>

          {/* Row 3 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E31E24]/20">
            <LinkBox name="GitHub" CustomIcon={GithubIcon} href="https://github.com" />
            <LinkBox name="Figma" CustomIcon={FigmaIcon} href="https://figma.com" className="border-t border-[#E31E24]/20 sm:border-t-0" />
            <LinkBox name="Google Workspace" CustomIcon={GoogleIcon} href="https://workspace.google.com" className="border-t border-[#E31E24]/20 sm:border-t-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  name: string;
  CustomIcon: React.ComponentType<{ className?: string }>;
  href: string;
  className?: string;
}

const LinkBox = ({ name, CustomIcon, href, className }: LinkBoxProps) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative grid h-24 w-full place-content-center sm:h-32 md:h-40 bg-zinc-950/20 hover:bg-transparent transition-colors duration-300 ${className}`}
    >
      {/* Default state content (Dark/black card, white icon/text, subtle red border) */}
      <div className="flex flex-col items-center gap-3 text-white z-0">
        <CustomIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#E31E24]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-wider font-sans uppercase">
          {name}
        </span>
      </div>

      {/* Hover reveal state content (White overlay with red icon) */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-white text-[#111111] transition-all duration-300 z-10"
      >
        <CustomIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#E31E24]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-wider font-sans uppercase mt-3">
          {name}
        </span>
      </div>
    </a>
  );
};

export default ClipPathLinks;
