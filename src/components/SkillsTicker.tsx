import { useReducedMotion } from 'framer-motion';

const skills = [
  "JavaScript", "TypeScript", "React 19", "Next.js", 
  "Node.js", "Express.js", "MongoDB", "Python", 
  "PHP", "SQL", "Tailwind CSS", "Framer Motion", 
  "Vapi AI", "Gemini API", "OpenRouter"
];

const tickerItems = [...skills, ...skills, ...skills, ...skills];

export function SkillsTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-hidden border-y border-border py-4 bg-background/50 backdrop-blur-sm relative z-10">
      <div 
        className={`flex w-max ${!shouldReduceMotion ? 'animate-marquee' : ''}`}
      >
        {tickerItems.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 px-6"
          >
            <span className="text-lg md:text-xl font-display font-semibold uppercase tracking-wider whitespace-nowrap text-foreground/80">
              {skill}
            </span>
            <span className="text-accent text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
