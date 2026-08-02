import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

export function SmoothScroller({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: !shouldReduceMotion 
    }}>
      {children}
    </ReactLenis>
  )
}
