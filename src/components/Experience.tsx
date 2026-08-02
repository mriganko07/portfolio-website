import { motion, useReducedMotion } from 'framer-motion';

const experiences = [
  {
    id: "01",
    role: "Master of Computer Applications (MCA)",
    company: "University of Mumbai",
    period: "Currently Pursuing",
    desc: "Advanced studies in computer applications, focusing on software engineering, database management, and emerging technologies."
  },
  {
    id: "02",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Techno India Hooghly (MAKAUT)",
    period: "Graduated",
    desc: "Foundational studies in computer science, programming languages, and web development."
  }
];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">04 — Experience</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">Roles & Education</h2>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-8 flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              className="relative pl-8 md:pl-16 group"
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 bg-foreground rounded-full -translate-x-[6.5px] group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-4">
                <span className="text-4xl font-display font-light text-foreground/20 group-hover:text-accent transition-colors">
                  {exp.id}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight">{exp.role}</h3>
                  <span className="text-accent font-medium tracking-wide">{exp.company}</span>
                </div>
                <div className="md:ml-auto">
                  <span className="text-sm font-display uppercase tracking-widest text-foreground/50 border border-border px-4 py-2 rounded-full mt-4 md:mt-0 inline-block">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <div className="md:pl-[5.5rem] max-w-3xl">
                <p className="text-foreground/70 font-light leading-relaxed text-lg">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
