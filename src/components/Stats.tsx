import { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function AnimatedCounter({ value, text, suffix = "" }: { value: number, text: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }
    if (isInView) {

      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const easeOut = progress * (2 - progress);
          setCount(Math.floor(easeOut * value));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border border-border bg-white/[0.01]">
      <div className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground mb-4">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-widest text-foreground/50 font-medium text-center">
        {text}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="w-full py-32 px-6 md:px-12 flex flex-col items-center border-b border-border">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">05 — By the Numbers</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">Impact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedCounter value={15} suffix="+" text="Technologies Mastered" />
          <AnimatedCounter value={3} text="Core AI Integrations" />
          <AnimatedCounter value={4} suffix="+" text="Highlighted Projects" />
          <AnimatedCounter value={2} text="Academic Degrees" />
        </div>
      </div>
    </section>
  )
}
