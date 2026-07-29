'use client';

import React, { useLayoutEffect, useMemo, useRef, useState, useEffect } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';

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

interface TooltipState {
  username: string;
  position: string;
  left: number;
  top: number;
}

const GAP = 16; // Increased gap from 12 to 16 for a more premium, spacious feel

const baseTeam: Contributor[] = [
  {
    username: 'Arti',
    position: 'Web Developer',
    avatarUrl: '/team/Web Developer.webp',
    profileUrl: '#'
  },
  {
    username: 'Bhushan',
    position: 'Digital Marketer',
    avatarUrl: '/team/Digital Marketer.webp',
    profileUrl: '#'
  },
  {
    username: 'Saurabh',
    position: 'Graphic Designer',
    avatarUrl: '/team/Graphic Designer (2).webp',
    profileUrl: '#'
  },
  {
    username: 'Dnyaneshwar',
    position: 'Graphic Designer',
    avatarUrl: '/team/Graphic Designer.webp',
    profileUrl: '#'
  },
  {
    username: 'Harish',
    position: 'Video Editor',
    avatarUrl: '/team/Video Editor.webp',
    profileUrl: '#'
  },
  {
    username: 'Payal',
    position: 'Admin, HR',
    avatarUrl: '/team/Admin, HR.webp',
    profileUrl: '#'
  },
  {
    username: 'Pradnya',
    position: 'Asst. Admin',
    avatarUrl: '/team/Asst. Admin.webp',
    profileUrl: '#'
  },
  {
    username: 'Pradnya',
    position: 'BD Executive',
    avatarUrl: '/team/BD Executive.webp',
    profileUrl: '#'
  },
  {
    username: 'Priti',
    position: 'Content Writer',
    avatarUrl: '/team/priti.png',
    profileUrl: '#'
  },
  {
    username: 'Sakshi',
    position: 'Web Developer',
    avatarUrl: '/team/Web Developer 2.jpeg',
    profileUrl: '#'
  },
  {
    username: 'Vaibhav',
    position: 'Digital Marketer',
    avatarUrl: '/team/Digital Marketer 2.webp',
    profileUrl: '#'
  },
  {
    username: 'Vaibhav',
    position: 'Web Developer',
    avatarUrl: '/team/Web Developer 3.webp',
    profileUrl: '#'
  },
  {
    username: 'Yash',
    position: 'Web Developer',
    avatarUrl: '/team/Web Developer 1.jpeg',
    profileUrl: '#'
  }
];

// Dynamically scale baseTeam to fit exactly 5 rows of 13 columns (65 items) by default on desktop
const defaultContributors: Contributor[] = Array.from({ length: 65 }, (_, i) => baseTeam[i % baseTeam.length]);

// Répète les avatars jusqu'à compléter la dernière rangée pour garder une grille rectangulaire.
function padToGrid(items: Contributor[], columns: number): Contributor[] {
  if (items.length === 0) return items;
  const remainder = items.length % columns;
  if (remainder === 0) return items;
  const fill = columns - remainder;
  return items.concat(
    Array.from({ length: fill }, (_, i) => items[i % items.length]),
  );
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
  title = 'Contributors',
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
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [blockHeight, setBlockHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const columns = useColumns(initialColumns);

  const tiles = useMemo(
    () => padToGrid(contributors, columns),
    [contributors, columns],
  );
  const count = totalCount ?? contributors.length;

  // Mesure la hauteur d'une copie de la grille et du conteneur pour un défilement sans couture.
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

  const handleEnter = (
    e: React.MouseEvent<HTMLElement>,
    username: string,
    position: string,
  ) => {
    const wall = wallRef.current;
    if (!wall) return;
    const tile = e.currentTarget.getBoundingClientRect();
    const box = wall.getBoundingClientRect();
    setTooltip({
      username,
      position,
      left: tile.left - box.left + tile.width / 2,
      top: tile.top - box.top,
    });
  };

  const planeStyle: CSSProperties = {
    transform: `rotateX(${tilt}deg)`,
    transformStyle: 'preserve-3d',
  };
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: GAP,
  };

  const renderGrid = (copy: number, ref?: React.Ref<HTMLDivElement>) => (
    <div key={copy} ref={ref} className="grid w-full" style={gridStyle}>
      {tiles.map((c, i) => {
        const Tile = (c.profileUrl ? 'a' : 'div') as 'a';
        return (
          <Tile
            key={`${copy}-${c.username}-${i}`}
            {...(c.profileUrl
              ? { href: c.profileUrl, target: '_blank', rel: 'noreferrer' }
              : {})}
            aria-label={c.username}
            onMouseEnter={(e) => handleEnter(e, c.username, c.position)}
            className="group relative block aspect-square outline-none"
          >
            {/* La zone cliquable reste fixe et seule cette couche interne s'agrandit, pour que le curseur ne sorte jamais pendant le survol. */}
            <span className="absolute inset-0 overflow-hidden rounded-[8px] transition-transform duration-300 ease-out group-hover:z-20 group-hover:scale-[1.25] group-focus-visible:z-20 group-focus-visible:scale-[1.25]">
              <Image
                src={c.avatarUrl}
                alt={c.username}
                width={180} // Increased image width/height from 150 to 180 for 35-40% scale up
                height={180}
                loading="lazy"
                draggable={false}
                className="h-full w-full select-none object-cover grayscale brightness-95 transition duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-focus-visible:grayscale-0 group-focus-visible:brightness-100 dark:brightness-[0.72] dark:group-hover:brightness-110 dark:group-focus-visible:brightness-110"
              />
              <span className="pointer-events-none absolute inset-0 rounded-[8px] ring-1 ring-inset ring-black/[0.08] transition group-hover:ring-black/30 dark:ring-white/[0.06] dark:group-hover:ring-white/40" />
            </span>
          </Tile>
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
          {subtitle ?? (
            <>
              Built by a community of{' '}
              <span className="font-semibold text-zinc-900/80 dark:text-white/70">
                {count}+
              </span>{' '}
              contributors.
            </>
          )}
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
        onMouseLeave={() => setTooltip(null)}
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
              animationPlayState: tooltip ? 'paused' : 'running',
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

        {tooltip && (
          <div
            className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-[calc(100%+8px)] text-center rounded-md border border-black/10 bg-white px-3 py-1.5 shadow-lg shadow-black/10 dark:border-white/10 dark:bg-[#161616] dark:shadow-black/40"
            style={{ left: tooltip.left, top: tooltip.top }}
          >
            <div className="text-xs font-semibold text-[#111111] dark:text-white">
              {tooltip.username}
            </div>
            <div className="text-[10px] font-normal text-[#6B7280] dark:text-white/60 mt-0.5">
              {tooltip.position}
            </div>
            <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-black/10 bg-white dark:border-white/10 dark:bg-[#161616]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContributorsWall;
