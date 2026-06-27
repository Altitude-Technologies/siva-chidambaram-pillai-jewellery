import CountUpLib from 'react-countup'

/* react-countup ships as CJS; under Vite's interop the component can land
   one level deep on `.default`. Resolve it robustly here, once. */
const CountUp = CountUpLib?.default ?? CountUpLib

/** Animated number. Renders nothing until `play` is true. */
export default function Counter({ end, duration = 2.4, suffix = '', play = true }) {
  if (!play) return <span>0{suffix}</span>
  return (
    <span>
      <CountUp end={end} duration={duration} />
      {suffix}
    </span>
  )
}
