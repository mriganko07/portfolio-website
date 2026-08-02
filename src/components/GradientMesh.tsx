import { useReducedMotion } from 'framer-motion';

export function GradientMesh() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div 
        className={`absolute -inset-[100%] opacity-30 ${!shouldReduceMotion ? 'animate-mesh' : ''}`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(0, 240, 255, 0.05), transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  )
}
