"use client";

import React, { useEffect, useRef } from "react";

interface TaglineMessage {
  text: string;
  highlights: string[];
}

const MESSAGES: TaglineMessage[] = [
  { text: "RESULT-DRIVEN DIGITAL MARKETING", highlights: ["RESULT-DRIVEN"] },
  { text: "SEO • GOOGLE ADS • META ADS • SOCIAL MEDIA", highlights: ["SEO", "GOOGLE", "ADS", "META", "SOCIAL", "MEDIA"] },
  { text: "HIGH-CONVERTING CAMPAIGNS", highlights: ["HIGH-CONVERTING"] },
  { text: "PERFORMANCE MARKETING THAT DELIVERS ROI", highlights: ["PERFORMANCE", "ROI"] },
  { text: "GROWTH • LEADS • CONVERSIONS • BRAND VISIBILITY", highlights: ["GROWTH", "LEADS", "CONVERSIONS", "BRAND", "VISIBILITY"] },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

export function TaglineMarquee() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 96;
    let dpr = 1;

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = 96;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    let scrollX = 0;
    const speed = 1.5;

    // Render Loop (60 FPS)
    const render = () => {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Dark Strip Background (#0F0F10)
      ctx.fillStyle = "#0F0F10";
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Radial Red Glow in Center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.45
      );
      gradient.addColorStop(0, "rgba(214, 32, 32, 0.12)");
      gradient.addColorStop(0.7, "rgba(214, 32, 32, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Typography Configuration
      const fontSize = width < 768 ? 24 : 36;
      ctx.font = `900 ${fontSize}px Space Grotesk, Inter, sans-serif`;
      ctx.textBaseline = "middle";

      // Calculate Total Sequence Width
      let totalSeqWidth = 0;
      const itemsWithWidth = MESSAGES.map((msg) => {
        const textWidth = ctx.measureText(msg.text).width;
        const totalItemWidth = textWidth + 90; // text + separator gap
        totalSeqWidth += totalItemWidth;
        return { ...msg, textWidth, totalItemWidth };
      });

      scrollX += speed;
      if (scrollX >= totalSeqWidth) {
        scrollX -= totalSeqWidth;
      }

      // Draw Scrolling Items
      let currentX = -scrollX;
      const vaporZoneWidth = 320; // 2.5x wider vaporize zone

      for (let loop = 0; loop < 5; loop++) {
        for (let i = 0; i < itemsWithWidth.length; i++) {
          const item = itemsWithWidth[i];

          // Visibility check
          if (currentX + item.totalItemWidth > -200 && currentX < width + 300) {
            let charX = currentX;
            const words = item.text.split(" ");

            words.forEach((word) => {
              const cleanWord = word.trim();
              const isHighlight = item.highlights.some((h) => cleanWord.includes(h));
              const wordWidth = ctx.measureText(cleanWord + " ").width;

              // Left Exit Vaporize Zone (0px to 320px from left)
              const distFromLeft = charX;
              let opacity = 1;

              if (distFromLeft < vaporZoneWidth) {
                opacity = Math.max(0, distFromLeft / vaporZoneWidth);

                // Rich Particle Cloud Generation
                if (distFromLeft > -80 && distFromLeft < vaporZoneWidth) {
                  const spawnChance = Math.min(0.85, (vaporZoneWidth - distFromLeft) / vaporZoneWidth);
                  
                  if (Math.random() < spawnChance * 0.75) {
                    particles.push({
                      x: charX + Math.random() * wordWidth,
                      y: height / 2 + (Math.random() - 0.5) * (fontSize * 0.9),
                      vx: -(Math.random() * 2.2 + 0.8),
                      vy: (Math.random() - 0.5) * 2.2,
                      alpha: Math.min(opacity, 0.95),
                      size: Math.random() * 2.5 + 1.2,
                      color: isHighlight ? "#D62020" : "#FFFFFF",
                    });
                  }
                }
              }

              // Right Edge Entrance Distance Check (160px from right)
              const distFromRight = width - charX;
              if (distFromRight < 160) {
                opacity = Math.min(opacity, Math.max(0, distFromRight / 160));
              }

              // Render Word
              ctx.save();
              ctx.globalAlpha = opacity;
              ctx.fillStyle = isHighlight ? "#D62020" : "#FFFFFF";

              if (isHighlight) {
                ctx.shadowColor = "rgba(214, 32, 32, 0.45)";
                ctx.shadowBlur = 18;
              } else {
                ctx.shadowColor = "transparent";
                ctx.shadowBlur = 0;
              }

              ctx.fillText(cleanWord, charX, height / 2);
              ctx.restore();

              charX += wordWidth;
            });

            // Render Separator (◆)
            const sepX = currentX + item.textWidth + 40;
            let sepOpacity = 1;

            if (sepX < vaporZoneWidth) sepOpacity = Math.max(0, sepX / vaporZoneWidth);
            if (width - sepX < 160) sepOpacity = Math.min(sepOpacity, Math.max(0, (width - sepX) / 160));

            ctx.save();
            ctx.globalAlpha = sepOpacity;
            ctx.fillStyle = "#D62020";
            ctx.shadowColor = "rgba(214, 32, 32, 0.4)";
            ctx.shadowBlur = 12;
            ctx.font = `bold ${fontSize * 0.55}px sans-serif`;
            ctx.fillText("◆", sepX, height / 2);
            ctx.restore();
          }

          currentX += item.totalItemWidth;
        }
      }

      // Update & Render Persistent Vapor Particle Cloud
      for (let p = particles.length - 1; p >= 0; p--) {
        const pt = particles[p];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= 0.009; // Slower decay rate for long visible vapor trails

        if (pt.alpha <= 0 || pt.x < -100) {
          particles.splice(p, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.fillStyle = pt.color;

        if (pt.color === "#D62020") {
          ctx.shadowColor = "rgba(214, 32, 32, 0.5)";
          ctx.shadowBlur = 8;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="w-full bg-[#0F0F10] h-[96px] relative overflow-hidden select-none border-none shadow-[inset_0_10px_25px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </section>
  );
}

export default TaglineMarquee;
