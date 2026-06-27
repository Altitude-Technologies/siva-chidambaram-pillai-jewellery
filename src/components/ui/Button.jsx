import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'
import './Button.css'

/**
 * Luxury button with ripple, magnetic pull and animated arrow.
 * variant: 'solid' | 'outline' | 'gold' | 'ghost'
 *
 * Ripples are React-managed (state, not raw DOM injection) so they never
 * corrupt React's child reconciliation on re-render / unmount.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'solid',
  arrow = true,
  className = '',
  magnetic = true,
  ...rest
}) {
  const [ripples, setRipples] = useState([])
  const idRef = useRef(0)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const handleClick = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const size = Math.max(el.clientWidth, el.clientHeight)
    const id = idRef.current++
    const ripple = {
      id,
      size,
      x: e.clientX - r.left - size / 2,
      y: e.clientY - r.top - size / 2,
    }
    setRipples((prev) => [...prev, ripple])
    const t = setTimeout(
      () => setRipples((prev) => prev.filter((rp) => rp.id !== id)),
      650,
    )
    timers.current.push(t)
    onClick?.(e)
  }

  const inner = (
    <>
      <span className="btn-label">{children}</span>
      {arrow && (
        <span className="btn-arrow">
          <ArrowUpRight size={17} strokeWidth={1.5} />
        </span>
      )}
      {ripples.map((rp) => (
        <span
          key={rp.id}
          className="btn-ripple"
          style={{ width: rp.size, height: rp.size, left: rp.x, top: rp.y }}
        />
      ))}
    </>
  )

  const cls = `btn btn-${variant} ${className}`
  let node

  if (to) {
    node = (
      <Link to={to} className={cls} onClick={handleClick} {...rest}>
        {inner}
      </Link>
    )
  } else if (href) {
    node = (
      <a className={cls} href={href} onClick={handleClick} {...rest}>
        {inner}
      </a>
    )
  } else {
    node = (
      <button className={cls} onClick={handleClick} {...rest}>
        {inner}
      </button>
    )
  }

  return magnetic ? <Magnetic strength={0.25}>{node}</Magnetic> : node
}
