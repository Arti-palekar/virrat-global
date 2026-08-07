import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

export interface CardItem {
  id: string | number;
  title: string;
  subtitle?: string;
  imageUrl: string;
  description?: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({
  items,
  className,
  cardClassName,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    dragFree: false, 
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    let intervalId = setInterval(scrollNext, 3200);

    const onPointerDown = () => clearInterval(intervalId);
    const onPointerUp = () => {
      clearInterval(intervalId);
      intervalId = setInterval(scrollNext, 3200);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    const rootNode = emblaApi.rootNode();
    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      clearInterval(intervalId);
      intervalId = setInterval(scrollNext, 3200);
    };
    
    rootNode.addEventListener('mouseenter', handleMouseEnter);
    rootNode.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
      rootNode.removeEventListener('mouseenter', handleMouseEnter);
      rootNode.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [emblaApi, scrollNext]);

  return (
    <div 
      className={cn('w-full max-w-[1400px] mx-auto overflow-hidden px-4', className)}
      ref={emblaRef}
    >
      <div className="flex -ml-4 touch-pan-y group">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_25%] pl-4 min-w-0 py-4"
            role="group"
            aria-roledescription="slide"
          >
            <div
              role="listitem"
              aria-label={item.subtitle ? `${item.title}, ${item.subtitle}` : item.title}
              tabIndex={0}
              className={cn(
                'relative h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out',
                'group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px]',
                'hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
                cardClassName
              )}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              {/* Subtle dark image overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
                {item.subtitle && (
                  <p 
                    className="text-sm font-light uppercase tracking-widest"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.subtitle}
                  </p>
                )}
                <h3 
                  className="mt-1 text-xl font-semibold uppercase leading-tight"
                  style={{ color: '#FFFFFF' }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p 
                    className="mt-2 text-sm leading-snug line-clamp-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverRevealCards;
