"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 10, suffix: "+", label: "Years" },
  { value: 5000, suffix: " KG", label: "Max Capacity" },
  { value: 1, suffix: " Yr", label: "Warranty" },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-steel-600/50 bg-steel-800/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-hydraulic sm:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 font-body text-xs uppercase tracking-widest text-steel-300">
              {stat.label}
            </p>
          </div>
        ))}
        <div className="text-center">
          <p className="font-display text-3xl font-extrabold text-hydraulic sm:text-4xl">
            Pan-India
          </p>
          <p className="mt-1 font-body text-xs uppercase tracking-widest text-steel-300">
            Delivery
          </p>
        </div>
      </div>
    </div>
  );
}
