import { useRef, useState, useLayoutEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TIMELINE } from '../../constants/site'
import { IMAGES } from '../../constants/images'
import './Heritage.css'

/**
 * Horizontal scroll timeline driven by a sticky container + Framer Motion.
 * No GSAP pin / DOM-wrapping, so it never fights React's reconciliation
 * (avoids the "removeChild" crash on route changes).
 */
export default function Heritage() {
  const wrap = useRef(null)
  const track = useRef(null)
  const [distance, setDistance] = useState(0)
  const [staticMode, setStaticMode] = useState(false)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const measure = () => {
      if (!track.current) return
      // small screens & reduced-motion fall back to a native swipe scroller
      if (reduce || window.innerWidth <= 860) {
        setStaticMode(true)
        setDistance(0)
        return
      }
      setStaticMode(false)
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth + 40))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <section
      ref={wrap}
      className="heritage"
      style={{ height: distance ? `calc(100vh + ${distance}px)` : undefined }}
    >
      <div className="heritage-sticky">
        <div className="heritage-head container">
          <span className="eyebrow">Our Journey · 1947 — 2026</span>
          <h2 className="display-md heritage-title">
            Seven Decades, <em className="text-serif-italic">One Promise</em>
          </h2>
          <div className="heritage-bar">
            <motion.span
              className="heritage-bar-fill"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>

        <div className={`heritage-viewport ${staticMode ? 'is-scroll' : ''}`}>
          <motion.div ref={track} className="heritage-track" style={{ x }}>
            <div className="heritage-intro-card">
              <span className="heritage-vert">The Pillai Legacy</span>
            </div>
            {TIMELINE.map((t, i) => (
              <article className="heritage-card" key={t.year}>
                <div className="heritage-card-media">
                  <img src={IMAGES[t.img]} alt={`${t.year} — ${t.title}`} loading="lazy" />
                  <span className="heritage-year">{t.year}</span>
                </div>
                <div className="heritage-card-body">
                  <span className="heritage-index">
                    0{i + 1} / 0{TIMELINE.length}
                  </span>
                  <h3 className="heritage-card-title">{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
            <div className="heritage-end-card">
              <span className="eyebrow center">To Be Continued</span>
              <p className="display-sm">The heirlooms of tomorrow, crafted today.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
