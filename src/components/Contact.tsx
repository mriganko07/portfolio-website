import { motion, useReducedMotion } from 'framer-motion';

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="contact" className="w-full min-h-[80vh] py-32 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden bg-foreground text-background">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 z-10">
        
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-background/50 uppercase tracking-widest text-sm font-semibold">06 — Let's Talk</span>
          <p className="text-xl md:text-2xl text-background/80 font-light max-w-2xl">
            Have a project in mind, or just want to say hi? I'm currently open to new opportunities.
          </p>
        </div>

        <motion.a 
          href="mailto:mrigankaadhikary@proton.me"
          className="text-4xl sm:text-6xl md:text-[8vw] font-display font-bold tracking-tighter leading-none hover:text-accent transition-colors duration-500 break-all text-center"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        >
          mrigankaadhikary<br className="md:hidden" />@proton.me
        </motion.a>

        <div className="flex gap-8 mt-12">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => {
            const links: Record<string, string> = {
              'GitHub': 'https://github.com/mriganko07',
              'LinkedIn': 'https://www.linkedin.com/in/mrigankoadhikary/',
              'Twitter': 'https://x.com/Mriganko07'
            };
            return (
              <a 
                key={social} 
                href={links[social]} 
                target="_blank" 
                rel="noreferrer"
                className="text-background/70 hover:text-accent uppercase tracking-widest text-sm font-semibold transition-colors"
              >
                {social}
              </a>
            )
          })}
        </div>

      </div>
      
      {/* Background large text element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="text-[20vw] font-display font-black tracking-tighter leading-none whitespace-nowrap">
          LET'S BUILD
        </span>
      </div>
    </section>
  )
}
