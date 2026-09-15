"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ value, suffix = "", duration = 1800 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = value;
          const totalFrames = 60;
          const frameDuration = duration / totalFrames;
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // easeOutQuad
            const current = Math.round(start + (end - start) * (1 - (1 - progress) * (1 - progress)));
            setCount(current);

            if (frame >= totalFrames) {
              clearInterval(counter);
              setCount(end);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-mono">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
