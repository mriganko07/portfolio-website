import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Deep dive into the core problem, user needs, and business objectives before writing a single line of code."
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecting the technical foundation and crafting cinematic, user-centric visual experiences."
  },
  {
    num: "03",
    title: "Build",
    desc: "Writing clean, scalable code utilizing modern tech stacks like React, Node.js, and AI integrations."
  },
  {
    num: "04",
    title: "Ship",
    desc: "Deploying robust applications with a focus on performance, security, and continuous iteration."
  }
];

export function HowIBuild() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">02 — The Process</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">How I Build</h2>
        </div>

        <div className="w-full flex flex-col md:flex-row border border-border">
          {steps.map((step, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <motion.div
                key={idx}
                className="flex-1 min-h-[300px] md:min-h-[500px] border-b md:border-b-0 md:border-r border-border last:border-0 relative overflow-hidden group cursor-pointer transition-colors hover:bg-white/[0.02]"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flex: shouldReduceMotion ? 1 : isHovered ? 1.5 : 1
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="text-4xl font-display font-light text-foreground/20 group-hover:text-accent transition-colors duration-500">
                    {step.num}
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight uppercase">
                      {step.title}
                    </h3>
                    
                    <motion.p 
                      className="text-foreground/70 font-light leading-relaxed"
                      initial={{ opacity: 0.5, y: 0 }}
                      animate={{ 
                        opacity: shouldReduceMotion ? 1 : isHovered ? 1 : 0.5,
                        y: shouldReduceMotion ? 0 : isHovered ? 0 : 10
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
