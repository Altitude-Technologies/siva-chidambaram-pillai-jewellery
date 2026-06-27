import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

/**
 * Luxury mouse follower: a small filled dot + a lagging gold ring that
 * grows and labels itself when hovering interactive / [data-cursor] elements.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [hidden, setHidden] = useState(true)
  const [variant, setVariant] = useState('default')
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    document.documentElement.classList.add('has-cursor')

    const pos = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }
    let raf

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      setHidden(false)
      const el = e.target.closest('a, button, [data-cursor]')
      if (el) {
        setVariant(el.dataset.cursor || 'hover')
        setLabel(el.dataset.cursorLabel || '')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16
      ringPos.y += (pos.y - ringPos.y) * 0.16
      if (dot.current)
        dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      if (ring.current)
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    const leave = () => setHidden(true)
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className={`cursor-dot ${hidden ? 'is-hidden' : ''} v-${variant}`}
      />
      <div
        ref={ring}
        className={`cursor-ring ${hidden ? 'is-hidden' : ''} v-${variant} ${
          label ? 'has-label' : ''
        }`}
      >
        {label && <span>{label}</span>}
      </div>
    </>
  )
}
