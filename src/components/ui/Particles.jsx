import { useMemo } from 'react'
import './Particles.css'

/** Subtle floating gold jewellery particles / dust. count: number. */
export default function Particles({ count = 18, className = '' }) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // deterministic pseudo-random from index (no Math.random for SSR-safety)
        const r = (n) => ((Math.sin(i * 99.13 + n) + 1) / 2)
        return {
          left: `${r(1) * 100}%`,
          size: 2 + r(2) * 5,
          delay: `${r(3) * -16}s`,
          duration: `${10 + r(4) * 14}s`,
          drift: r(5) > 0.5 ? 'fall' : 'floaty',
          opacity: 0.25 + r(6) * 0.5,
        }
      }),
    [count],
  )

  return (
    <div className={`particles ${className}`} aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationName: b.drift,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  )
}
