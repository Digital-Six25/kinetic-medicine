"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const directionMap: Record<NonNullable<FadeInProps["direction"]>, string> = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0, 0)" : undefined,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        className={`${inView ? "" : directionMap[direction]}`}
        style={{
          transition: `transform ${duration}s ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface StaggeredFadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  staggerDelay?: number;
  initialDelay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function StaggeredFadeIn({
  children,
  direction = "up",
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
}: StaggeredFadeInProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <FadeIn
            direction={direction}
            delay={initialDelay + index * staggerDelay}
            duration={duration}
            threshold={threshold}
          >
            {child}
          </FadeIn>
        );
      })}
    </div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

export function CountUp({
  end,
  duration = 2000,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentCount = Math.floor(easedProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return (
    <div ref={ref}>
      <span ref={countRef} className={className}>
        {count}
      </span>
    </div>
  );
}

interface PulseAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export function PulseAnimation({
  children,
  className = "",
}: PulseAnimationProps) {
  return <div className={`animate-pulse ${className}`}>{children}</div>;
}
