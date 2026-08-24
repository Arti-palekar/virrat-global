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
      gravity: { y: 0.25, x: 0 } // Gentle gravity pulling down
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
      render: { visible: false }
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

    // 5. Select HTML elements to map to Matter.js bodies
    const elements = Array.from(container.querySelectorAll<HTMLElement>(
      '.dm-matter-elem, .dm-matter-elem-circle, .dm-matter-elem-pill'
    ));

    const bodiesMap = elements.map((el) => {
      // Get dimensions of element
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;

      // Position them randomly in the top half of the screen
      const x = Math.random() * (width - elWidth - 100) + elWidth / 2 + 50;
      const y = Math.random() * (height * 0.3) + elHeight / 2 + 50;

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

    // 6. Add mouse constraint
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

    // 7. Update HTML positions/rotations on afterUpdate
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

    // 8. Start physics loop only when hero is visible in viewport
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
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#FFFFFF] matter-box"
    >
      {/* Global Scoped style for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .matter-box {
          background-image:
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
          background-size: 109px 109px;
        }

        .dm-matter-elem,
        .dm-matter-elem-circle,
        .dm-matter-elem-pill {
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }
      `}} />

      {/* Header/Navbar */}
      <div className="absolute top-0 left-0 w-full px-6 md:px-10 pt-6 md:pt-8 z-50 flex justify-between items-center pointer-events-none">
        {['About', 'Price', 'Projects', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="pointer-events-auto text-[#050505] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:text-[#E10600] transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Matter.js Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto z-[1]" 
      />

      {/* Physics HTML Elements */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {/* Strategists */}
        <div className="dm-matter-elem px-5 py-2.5 bg-[#050505] text-[#FFFFFF] font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-[#050505] shadow-[4px_4px_0px_#FFE500]">
          Strategists
        </div>

        {/* Leaders */}
        <div className="dm-matter-elem px-5 py-2.5 bg-[#FFFFFF] text-[#050505] font-bold uppercase tracking-widest text-xs sm:text-sm border-2 border-[#050505] shadow-[4px_4px_0px_#E10600]">
          Leaders
        </div>

        {/* Visionaries */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Visionaries
        </div>

        {/* Developers */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Developers
        </div>

        {/* Partner */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Partner
        </div>

        {/* Creators */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Creators
        </div>

        {/* Designers */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Designers
        </div>

        {/* Innovators */}
        <div className="dm-matter-elem-pill px-6 py-2.5 bg-[#FFE500] text-[#050505] font-extrabold uppercase tracking-wider text-xs sm:text-sm border-2 border-[#050505] rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          Innovators
        </div>

        {/* Doodle Sticker */}
        <div className="dm-matter-elem w-[120px] h-[60px] flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}>
            <path d="M10 30C25 10 35 50 50 30C65 10 75 50 90 30C105 10 110 30 110 30" stroke="#FF1A1A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 30C25 10 35 50 50 30C65 10 75 50 90 30C105 10 110 30 110 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Flower Sticker */}
        <div className="dm-matter-elem-circle w-[90px] h-[90px] flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}>
            <circle cx="45" cy="45" r="42" fill="white" />
            <g fill="#E10600">
              <circle cx="45" cy="22" r="12" />
              <circle cx="45" cy="68" r="12" />
              <circle cx="22" cy="45" r="12" />
              <circle cx="68" cy="45" r="12" />
              <circle cx="29" cy="29" r="12" />
              <circle cx="61" cy="61" r="12" />
              <circle cx="29" cy="61" r="12" />
              <circle cx="61" cy="29" r="12" />
            </g>
            <circle cx="45" cy="45" r="18" fill="#FFE500" stroke="black" strokeWidth="2" />
            <circle cx="40" cy="42" r="2.5" fill="black" />
            <circle cx="50" cy="42" r="2.5" fill="black" />
            <path d="M39 49 C42 53, 48 53, 51 49" stroke="black" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Lightbulb Sticker */}
        <div className="dm-matter-elem w-[90px] h-[110px] bg-white border-2 border-black p-2 rounded-2xl flex flex-col items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFE500] fill-[#FFE500]">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-widest text-black mt-1 bg-[#FFE500] px-1.5 py-0.5 rounded border border-black">
            Good Idea
          </span>
        </div>

        {/* Hindi Typography Sticker */}
        <div className="dm-matter-elem px-5 py-2.5 bg-[#E10600] text-white font-black rounded-xl border-2 border-white shadow-[3px_3px_6px_rgba(0,0,0,0.25)] text-lg tracking-wider font-sans">
          सृजन
        </div>

        {/* Starburst Sparkle */}
        <div className="dm-matter-elem-circle w-[70px] h-[70px] flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.15))' }}>
            <path d="M35 5 L39 25 L59 21 L43 35 L59 49 L39 45 L35 65 L31 45 L11 49 L27 35 L11 21 L31 25 Z" fill="#FFE500" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Main Heading and Description (static HTML layered on top) */}
      <div className="absolute inset-0 pointer-events-none z-[10] flex flex-col md:block">
        {/* Main Heading */}
        <h1 
          className="pointer-events-auto select-none font-extrabold uppercase tracking-tight leading-[0.9] text-[#050505] md:absolute md:left-[15%] md:top-[38%] md:-translate-y-1/2 w-full md:w-[500px] text-[clamp(3.5rem,7vw,7rem)] text-center md:text-left px-6 md:px-0 mt-28 md:mt-0"
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
