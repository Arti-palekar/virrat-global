"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Matter from 'matter-js';

export default function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [resizeKey, setResizeKey] = useState(0);

  // Re-trigger simulation on window resize
  useEffect(() => {
    const handleResize = () => {
      setResizeKey((prev) => prev + 1);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !canvasRef.current) return;

    const container = sceneRef.current;
    const canvas = canvasRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // 1. Create Matter.js Engine
    const engine = Matter.Engine.create({
      gravity: { y: 0.35, x: 0 } // Standard gravity so they settle naturally
    });
    const world = engine.world;

    // 2. Create Renderer
    const render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
      }
    });
    Matter.Render.run(render);

    // 3. Create Runner
    const runner = Matter.Runner.create();

    // 4. Create Boundaries (floor, ceiling, walls)
    const wallThickness = 100;
    const boundaryOptions = {
      isStatic: true,
      render: { visible: false } // Keep invisible
    };

    const floor = Matter.Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width + 200,
      wallThickness,
      boundaryOptions
    );
    const ceiling = Matter.Bodies.rectangle(
      width / 2,
      -wallThickness / 2,
      width + 200,
      wallThickness,
      boundaryOptions
    );
    const leftWall = Matter.Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height + 200,
      boundaryOptions
    );
    const rightWall = Matter.Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height + 200,
      boundaryOptions
    );

    Matter.Composite.add(world, [floor, ceiling, leftWall, rightWall]);

    // 5. Explicit initial positions (percentages of width/height) matching the reference layout
    const initialPositions = [
      { name: 'Strategists', px: 0.08, py: 0.65 },
      { name: 'Leaders', px: 0.14, py: 0.65 },
      { name: 'Mehfil', px: 0.22, py: 0.65 },
      { name: 'Visionaries', px: 0.35, py: 0.58 },
      { name: 'Developers', px: 0.32, py: 0.68 },
      { name: 'Partner', px: 0.45, py: 0.68 },
      { name: 'Creators', px: 0.37, py: 0.78 },
      { name: 'Designers', px: 0.48, py: 0.78 },
      { name: 'Just Chill', px: 0.62, py: 0.65 },
      { name: 'Jagat Bhaari', px: 0.75, py: 0.65 },
      { name: 'Good Idea', px: 0.86, py: 0.65 },
      { name: 'Innovators', px: 0.94, py: 0.65 },
    ];

    // 6. Select HTML elements and create matching physics bodies
    const elements = Array.from(container.querySelectorAll<HTMLElement>(
      '.dm-matter-elem, .dm-matter-elem-circle, .dm-matter-elem-pill'
    ));

    const bodiesMap = elements.map((el) => {
      // Get dimensions of element
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;

      // Find the mapped initial position
      const dataName = el.getAttribute('data-name');
      const pos = initialPositions.find(p => p.name === dataName);
      
      const x = pos ? pos.px * width : Math.random() * (width - elWidth - 100) + elWidth / 2 + 50;
      const y = pos ? pos.py * height : Math.random() * (height * 0.3) + elHeight / 2 + 50;

      // Initialize inline positioning styles
      el.style.position = 'absolute';
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.transformOrigin = 'center center';

      let body;
      const isCircle = el.classList.contains('dm-matter-elem-circle');
      const isPill = el.classList.contains('dm-matter-elem-pill');

      const bodyOptions = {
        density: 0.01,
        friction: 0.1,
        restitution: 0.5,
        render: { visible: false } // Prevent default matter-js rendering
      };

      if (isCircle) {
        const radius = elWidth / 2;
        body = Matter.Bodies.circle(x, y, radius, bodyOptions);
      } else if (isPill) {
        body = Matter.Bodies.rectangle(x, y, elWidth, elHeight, {
          ...bodyOptions,
          chamfer: { radius: elHeight / 2 }
        });
      } else {
        body = Matter.Bodies.rectangle(x, y, elWidth, elHeight, bodyOptions);
      }

      // Add to world
      Matter.Composite.add(world, body);

      return {
        element: el,
        body: body,
        width: elWidth,
        height: elHeight
      };
    });

    // 7. Add mouse constraint
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Matter.Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // 8. Update HTML positions/rotations on afterUpdate
    const updatePosition = () => {
      bodiesMap.forEach(({ element, body, width: w, height: h }) => {
        const x = body.position.x - w / 2;
        const y = body.position.y - h / 2;
        const angle = body.angle;

        element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotate(${angle}rad)`;
        element.style.opacity = '1'; // make visible after first placement
      });
    };

    Matter.Events.on(engine, 'afterUpdate', updatePosition);
    updatePosition();

    // 9. Start physics loop only when hero is visible in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Matter.Runner.run(runner, engine);
        } else {
          Matter.Runner.stop(runner);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(container);

    // Cleanup
    return () => {
      observer.disconnect();
      Matter.Events.off(engine, 'afterUpdate', updatePosition);
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, [resizeKey]);

  return (
    <section 
      ref={sceneRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-white matter-box py-16 md:py-24"
    >
      {/* Scoped style for dark theme and custom matter elements */}
      <style dangerouslySetInnerHTML={{__html: `
        .matter-box {
          background-color: #FFFFFF;
          background-image:
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 109px 109px;
        }

        .dm-matter-elem {
          position: absolute;
          width: max-content;
          max-width: 240px;
          pointer-events: none;
          white-space: nowrap;
          opacity: 0;
        }

        .dm-matter-elem-pill {
          position: absolute;
          width: max-content;
          min-width: 120px;
          max-width: 220px;
          padding: 14px 28px;
          border-radius: 999px;
          white-space: nowrap;
          opacity: 0;
        }

        .dm-matter-elem-circle {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          opacity: 0;
        }
      `}} />



      {/* Matter.js Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto z-[1]" 
      />

      {/* Physics HTML Elements */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {/* Strategists (White vertical label) */}
        <div 
          data-name="Strategists" 
          className="dm-matter-elem bg-white text-black font-extrabold uppercase text-center border-2 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] w-[56px] py-6 flex items-center justify-center select-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Strategists
        </div>

        {/* Leaders (White vertical label) */}
        <div 
          data-name="Leaders" 
          className="dm-matter-elem bg-white text-black font-extrabold uppercase text-center border-2 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] w-[56px] py-6 flex items-center justify-center select-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Leaders
        </div>

        {/* Mehfil Sticker */}
        <div 
          data-name="Mehfil" 
          className="dm-matter-elem bg-[#1E0B36] text-[#FF007F] font-black rounded-2xl border-4 border-white px-5 py-2.5 shadow-lg text-2xl font-serif uppercase tracking-wider select-none"
        >
          महफ़िल
        </div>

        {/* Visionaries (Yellow Pill) */}
        <div 
          data-name="Visionaries" 
          className="dm-matter-elem-pill bg-[#FFE500] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Visionaries
        </div>

        {/* Developers (Yellow Pill) */}
        <div 
          data-name="Developers" 
          className="dm-matter-elem-pill bg-[#FFE500] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Developers
        </div>

        {/* Partner (Yellow Pill) */}
        <div 
          data-name="Partner" 
          className="dm-matter-elem-pill bg-[#FFE500] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Partner
        </div>

        {/* Creators (White Pill) */}
        <div 
          data-name="Creators" 
          className="dm-matter-elem-pill bg-white text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Creators
        </div>

        {/* Designers (White Pill) */}
        <div 
          data-name="Designers" 
          className="dm-matter-elem-pill bg-white text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Designers
        </div>

        {/* Just Chill Flower Sticker */}
        <div 
          data-name="Just Chill" 
          className="dm-matter-elem bg-[#FF7BE5] text-white border-2 border-white rounded-3xl p-3 shadow-lg flex items-center gap-2 select-none"
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="#9D4EDD" />
            <circle cx="18" cy="18" r="7" fill="#FFE500" stroke="black" strokeWidth="1.5" />
            <circle cx="16" cy="17" r="1" fill="black" />
            <circle cx="20" cy="17" r="1" fill="black" />
            <path d="M15 20 C16 22, 20 22, 21 20" stroke="black" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="bg-[#FFE500] text-black font-black px-2 py-0.5 rounded border border-black text-[10px] uppercase rotate-[-3deg] tracking-wider">
            जस्त CHILL
          </span>
        </div>

        {/* Jagat Bhaari Sticker */}
        <div 
          data-name="Jagat Bhaari" 
          className="dm-matter-elem bg-[#E10600] text-white font-extrabold rounded-full border-4 border-[#FFE500] px-4 py-4 shadow-lg text-center flex flex-col justify-center items-center w-[85px] h-[85px] leading-tight select-none"
        >
          <span className="text-[9px] text-[#FFE500] uppercase font-black">जगात</span>
          <span className="text-sm font-black uppercase">भारी</span>
        </div>

        {/* Good Idea Lightbulb Sticker */}
        <div 
          data-name="Good Idea" 
          className="dm-matter-elem bg-white border-2 border-black p-2 rounded-2xl flex flex-col items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] w-[80px] select-none"
        >
          <span className="text-[8px] font-black uppercase text-white bg-[#5D3FD3] px-1 rounded mb-1">GOOD IDEA</span>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="text-[#FFE500] fill-[#FFE500]">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        </div>

        {/* Innovators (Yellow Pill) */}
        <div 
          data-name="Innovators" 
          className="dm-matter-elem-pill bg-[#FFE500] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center select-none"
        >
          Innovators
        </div>
      </div>

      {/* Main Heading and Description (static HTML layered on top) */}
      <div className="absolute inset-0 pointer-events-none z-[10] flex flex-col md:block">
        {/* Main Heading */}
        <h1 
          className="pointer-events-auto select-none font-extrabold uppercase tracking-tight leading-[0.9] text-[#050505] md:absolute md:left-[15%] md:top-[38%] md:-translate-y-1/2 w-full md:w-[500px] text-[clamp(3.5rem,7vw,7rem)] text-center md:text-left px-6 md:px-0 mt-28 md:mt-0 mb-5"
          style={{ letterSpacing: '-0.06em' }}
        >
          Who are<br />We
        </h1>

        {/* Description */}
        <p className="pointer-events-auto font-light text-[#050505] leading-[1.2] md:absolute md:left-[63%] md:top-[48%] md:-translate-y-1/2 w-full md:w-[360px] text-[clamp(1.1rem,1.8vw,1.6rem)] text-center md:text-left px-6 md:px-0 mt-8 md:mt-0 opacity-80">
          Creative growth partners delivering<br />
          impactful, modern, and strategic brand<br />
          solutions.
        </p>
      </div>
    </section>
  );
}
