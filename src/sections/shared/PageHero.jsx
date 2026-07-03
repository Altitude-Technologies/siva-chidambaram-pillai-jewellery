import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Particles from '../../components/ui/Particles'
import './PageHero.css'

/** Reusable cinematic page banner with parallax image and split heading. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  dark = false,
  crumbs = [],
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <header ref={ref} className={`page-hero ${dark ? 'page-hero-dark' : ''}`}>
      <motion.div className="page-hero-bg" style={{ y, scale }}>
        <img src={image} alt="" loading="eager" />
      </motion.div>
      <div className="page-hero-overlay" />
      <Particles count={12} />

      <motion.div className="page-hero-inner container" style={{ opacity: fade }}>
        {crumbs.length > 0 && (
          <Reveal variant="fade" className="page-hero-crumbs">
            {crumbs.map((c, i) => (
              <span key={c}>
                {c}
                {i < crumbs.length - 1 && <span className="crumb-sep">/</span>}
              </span>
            ))}
          </Reveal>
        )}
        {eyebrow && (
          <Reveal variant="fade">
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <SplitText text={title} as="h1" className="page-hero-title display-lg" />
        {intro && (
          <Reveal variant="fadeUp" delay={1}>
            <p className="page-hero-intro lead">{intro}</p>
          </Reveal>
        )}
      </motion.div>

      <div className="page-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C480,20 960,20 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </header>
  )
}
