'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({ target, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let animationFrameId: number;

    const startCounter = () => {
      const startTime = performance.now();
      const endValue = target;

      const animate = (timestamp: number) => {
        const runtime = timestamp - startTime;
        const progress = Math.min(runtime / duration, 1);
        
        // Easing out quad
        const ease = progress * (2 - progress);
        const currentValue = Math.floor(ease * endValue);

        setCount(currentValue);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCounter();
            if (observer) {
              observer.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="flex items-center leading-none">
      {count}
      <span className="text-brand-teal ml-0.5">{suffix}</span>
    </span>
  );
}
