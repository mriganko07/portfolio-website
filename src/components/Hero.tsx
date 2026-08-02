import { motion, useReducedMotion } from 'framer-motion';
import { GradientMesh } from './GradientMesh';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
      <GradientMesh />
      
      <motion.div 
        className="z-10 w-full max-w-7xl mx-auto flex flex-col items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="overflow-hidden mb-6">
          <p className="text-accent uppercase tracking-widest text-sm md:text-base font-semibold">
            Full-Stack Developer & AI Innovator
          </p>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] uppercase mb-8"
        >
          Mriganka
          <br />
          <span className="text-foreground/40">Adhikary</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="max-w-2xl">
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            Building modern web applications and AI-powered products. 
            Transforming complex challenges into seamless, cinematic digital experiences.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest rotate-90 mb-8">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
