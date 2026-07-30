'use client';

import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Contributor {
  username: string;
  position: string;
  avatarUrl: string;
  profileUrl?: string;
}

export interface ContributorsWallProps {
  title?: string;
  subtitle?: ReactNode;
  contributors?: Contributor[];
  totalCount?: number;
  columns?: number;
  tilt?: number;
  perspective?: number;
  speed?: number;
  height?: number | string;
  className?: string;
}

const GAP = 16; // Increased gap from 12 to 16 for a more premium, spacious feel

const clientLogos: Contributor[] = [
  { username: '0009.jpg.jpeg', position: '', avatarUrl: '/client-logos/0009.jpg.jpeg' },
  ...Array.from({ length: 103 }, (_, i) => {
    const id = i + 1;
    if (id === 88) return null;
    return {
      username: `${id}.png`,
      position: '',
      avatarUrl: `/client-logos/${id}.png`
    };
  }).filter((item): item is Contributor => item !== null)
];

function getAdjacentSafeLogos(logos: Contributor[], targetCount: number): Contributor[] {
  if (logos.length === 0) return [];
  const result: Contributor[] = [];
  let pool = [...logos];
  
  // Stable sort to keep it mixed
  pool.sort((a, b) => {
    let h1 = a.avatarUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    let h2 = b.avatarUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return h1 - h2;
  });

  let prevUrl = '';
  for (let i = 0; i < targetCount; i++) {
    let foundIndex = pool.findIndex(item => item.avatarUrl !== prevUrl);
    if (foundIndex === -1) {
      foundIndex = 0;
    }
    const selected = pool[foundIndex];
    result.push(selected);
    prevUrl = selected.avatarUrl;
    
    pool.splice(foundIndex, 1);
    if (pool.length === 0) {
      pool = [...logos].filter(item => item.avatarUrl !== prevUrl);
      if (pool.length === 0) {
        pool = [...logos];
      }
    }
  }
  return result;
}

const defaultContributors: Contributor[] = getAdjacentSafeLogos(clientLogos, 104);

function padToGrid(items: Contributor[], columns: number): Contributor[] {
  if (items.length === 0) return items;
  const remainder = items.length % columns;
  if (remainder === 0) return items;
  const fill = columns - remainder;
  const padded = [...items];
  let prevUrl = items[items.length - 1].avatarUrl;
  for (let i = 0; i < fill; i++) {
    const safeItem = items.find(item => item.avatarUrl !== prevUrl) || items[0];
    padded.push(safeItem);
    prevUrl = safeItem.avatarUrl;
  }
  return padded;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function useColumns(initialColumns: number) {
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(4); // Mobile: 4 columns
      } else if (window.innerWidth < 1024) {
        setColumns(8); // Tablet: 8 columns
      } else {
        setColumns(13); // Desktop: 13 columns (spacious, larger images)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return columns;
}

export function ContributorsWall({
  title = 'Trusted By Our Clients',
  subtitle,
  contributors = defaultContributors,
  totalCount,
  columns: initialColumns = 13,
  tilt = 18,
  perspective = 1100,
  speed = 24,
  height = 700, // Increased vertical viewport height from 600 to 700 to accommodate larger cards
  className,
}: ContributorsWallProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [blockHeight, setBlockHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const columns = useColumns(initialColumns);

  const tiles = useMemo(
    () => padToGrid(contributors, columns),
    [contributors, columns],
  );

  // Measure copy height and container height for seamless scrolling
  useIsomorphicLayoutEffect(() => {
    const block = blockRef.current;
    const wall = wallRef.current;
    if (!block || !wall) return;
    const measure = () => {
      setBlockHeight(block.offsetHeight);
      setContainerHeight(wall.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(block);
    ro.observe(wall);
    return () => ro.disconnect();
  }, [tiles, columns]);

  const copiesCount = useMemo(() => {
    if (blockHeight === 0 || containerHeight === 0) return 2;
    return Math.max(2, Math.ceil(containerHeight / (blockHeight + GAP)) + 1);
  }, [blockHeight, containerHeight]);

  const duration = useMemo(() => {
    if (blockHeight === 0) return 0;
    return (blockHeight + GAP) / speed;
  }, [blockHeight, speed]);

  const planeStyle: CSSProperties = {
    transform: `rotateX(${tilt}deg)`,
    transformStyle: 'preserve-3d',
  };
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: GAP,
  };

  const cardVariants = {
    default: { y: 0 },
    hover: { y: -6 }
  };

  const logoVariants = {
    default: { scale: 1 },
    hover: { scale: 1.08 }
  };

  const renderGrid = (copy: number, ref?: React.Ref<HTMLDivElement>) => (
    <div key={copy} ref={ref} className="grid w-full" style={gridStyle}>
      {tiles.map((c, i) => {
        return (
          <motion.div
            key={`${copy}-${c.username}-${i}`}
            aria-label={c.username}
            className="group relative block aspect-square outline-none cursor-pointer"
            initial="default"
            whileHover="hover"
            variants={cardVariants}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
          >
            <span className="absolute inset-0 overflow-hidden rounded-[8px] bg-white dark:bg-zinc-900/40 flex items-center justify-center p-3 border border-black/[0.08] dark:border-white/[0.06] group-hover:border-[#D62020]/20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_24px_-6px_rgba(214,32,32,0.15),0_8px_16px_-8px_rgba(0,0,0,0.08)] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <motion.div
                className="h-full w-full select-none flex items-center justify-center filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]"
                variants={logoVariants}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }}
              >
                <Image
                  src={c.avatarUrl}
                  alt={c.username}
                  width={180}
                  height={180}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <span className="pointer-events-none absolute inset-0 rounded-[8px] ring-1 ring-inset ring-black/[0.02] dark:ring-white/[0.02]" />
            </span>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div
      className={`w-full min-h-[80vh] flex flex-col justify-center px-6 py-24 sm:px-10 sm:py-32 bg-[var(--wall-bg)] text-zinc-900 [--wall-bg:#FAF9F6] dark:bg-[var(--wall-bg)] dark:text-white dark:[--wall-bg:#0a0a0a] ${className ?? ''}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold tracking-tight whitespace-nowrap">
            {title}
          </h2>
          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>
        <p className="mt-2 text-sm text-zinc-500 dark:text-white/45">
          {subtitle ?? 'Trusted by hospitals, healthcare organizations, startups, SMEs, and enterprises across India.'}
        </p>
      </div>

      <div
        ref={wallRef}
        className="relative mx-auto mt-12 w-full max-w-6xl overflow-hidden"
        style={{
          perspective: `${perspective}px`,
          perspectiveOrigin: '50% 50%',
          height,
        }}
      >
        <div className="h-full" style={planeStyle}>
          <div
            className="flex w-full flex-col"
            style={{
              gap: GAP,
              transform: blockHeight > 0 ? undefined : 'translateY(0)',
              animationName: blockHeight > 0 ? 'marquee-down' : 'none',
              animationDuration: blockHeight > 0 ? `${duration}s` : '0s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: 'running',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
              transformStyle: 'preserve-3d',
              ...({
                '--marquee-translate': `-${blockHeight + GAP}px`,
              } as CSSProperties),
            }}
          >
            {Array.from({ length: copiesCount }).map((_, idx) =>
              renderGrid(idx, idx === 0 ? blockRef : undefined)
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(130% 95% at 50% 50%, transparent 30%, var(--wall-bg) 82%),
              linear-gradient(to bottom, var(--wall-bg) 0%, transparent 16%, transparent 84%, var(--wall-bg) 100%),
              linear-gradient(to right, var(--wall-bg) 0%, transparent 12%, transparent 88%, var(--wall-bg) 100%)
            `,
          }}
        />
      </div>
    </div>
  );
}

export default ContributorsWall;
