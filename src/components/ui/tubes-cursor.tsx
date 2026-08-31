"use client";

import React, { useEffect, useRef } from "react";

interface TubesCursorProps {
  className?: string;
}

export default function TubesCursor({ className = "" }: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<any>(null);

  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const handleCanvasClick = () => {
    if (instanceRef.current && instanceRef.current.tubes) {
      const newTubesColors = [randomColor(), randomColor(), randomColor()];
      const newLightsColors = [
        randomColor(),
        randomColor(),
        randomColor(),
        randomColor(),
      ];
      instanceRef.current.tubes.setColors(newTubesColors);
      instanceRef.current.tubes.setLightsColors(newLightsColors);
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let active = true;

    const initTubes = async () => {
      try {
        const { Tubes1Cursor } = await import("threejs-components");

        // Wait until the element has dimensions to avoid division-by-zero errors in ThreeJS setup
        while (
          active &&
          (canvasRef.current?.clientWidth === 0 ||
            canvasRef.current?.clientHeight === 0)
        ) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }

        if (!active || !canvasRef.current) return;

        instanceRef.current = Tubes1Cursor(canvasRef.current, {
          tubes: {
            colors: ["#5e72e4", "#8965e0", "#f5365c"],
            lights: {
              intensity: 200,
              colors: ["#21d4fd", "#b721ff", "#f4d03f", "#11cdef"],
            },
          },
        });
      } catch (err) {
        console.error("Error loading Tubes1Cursor:", err);
      }
    };

    initTubes();

    return () => {
      active = false;
      if (instanceRef.current && typeof instanceRef.current.dispose === "function") {
        instanceRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={handleCanvasClick}
      className={`hero relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />

      {/* Hero Text Content */}
      <div className="ai-automation-hero-text pointer-events-none">
        <h1 className="ai-automation-hero-title mb-5">
          AI AUTOMATION
        </h1>
        <h2 className="ai-automation-hero-subtitle mb-5">
          FOR SMARTER BUSINESS
        </h2>
      </div>

      <style>{`
        .hero h1,
        .hero h2 {
          font-family: "Qubic Grid", sans-serif !important;
        }

        .ai-automation-hero-text {
          position: relative;
          z-index: 10;
          text-align: center;
        }

        .ai-automation-hero-title,
        .ai-automation-hero-subtitle {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          margin: 0;
          padding: 0;
          font-family: inherit;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
          user-select: none;
        }

        .ai-automation-hero-title {
          font-size: clamp(48px, 7vw, 80px);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.04em !important;
        }

        .ai-automation-hero-subtitle {
          margin-top: 8px;
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.03em !important;
        }
      `}</style>
    </div>
  );
}
