import { motion, useReducedMotion } from 'framer-motion';

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="w-full min-h-[80vh] py-32 px-6 md:px-12 flex flex-col items-center border-b border-border">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">01 — Who I Am</span>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-light leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            I'm a developer with a strong interest in{" "}
            <span className="font-bold text-accent">full-stack web development</span> and{" "}
            <span className="font-bold text-accent">AI-powered applications</span>. I enjoy integrating intelligent services and third-party APIs into practical, real-world software products.
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 w-full max-w-5xl mx-auto border-t border-border pt-12"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-bold uppercase tracking-tight">Focus</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              Building scalable, cinematic, and user-centric web applications from the ground up, utilizing modern tech stacks.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-bold uppercase tracking-tight">Core Stack</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              JavaScript, TypeScript, React, Node.js, Express, MongoDB, SQL, Python, and PHP.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-display font-bold uppercase tracking-tight">AI & APIs</h3>
            <p className="text-foreground/70 font-light leading-relaxed">
              Integrating Vapi AI, Google Gemini, OpenRouter, and custom Lightweight CNN models into robust products.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
