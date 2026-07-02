import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BRAND } from '../../constants/site'
import SplitText from '../../components/ui/SplitText'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import Particles from '../../components/ui/Particles'
import { heroTemple, heroBg } from '../../constants/images'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '34%'])
  const templeY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="" loading="eager" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <Particles count={22} />

      <div className="hero-grid container">
        <motion.div className="hero-content" style={{ y: contentY, opacity: fade }}>
          <Reveal variant="fade">
            <span className="hero-est">
              <span className="hero-est-line" /> Established {BRAND.since} · Thanjavur{' '}
              <span className="hero-est-line" />
            </span>
          </Reveal>

          <SplitText
            text={`${BRAND.years} Years of Trust,|Crafted into Every Ornament`}
            as="h1"
            className="hero-title"
            stagger={0.06}
            amount={0.1}
          />

          <Reveal variant="fadeUp" delay={2} className="hero-sub">
            <p>
              From cherished family traditions to modern celebrations, {BRAND.name}{' '}
              Jewellery has adorned generations with purity, elegance and unmatched
              craftsmanship since {BRAND.since}.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={3} className="hero-actions">
            <Button to="/gold" variant="gold" data-cursor-label="Explore">
              Discover Our Collections
            </Button>
            <Button to="/chit" variant="ghost">
              Join Gold Savings Scheme
            </Button>
          </Reveal>
        </motion.div>
      </div>

      <motion.div className="hero-temple" style={{ y: templeY, opacity: fade }}>
        <div className="hero-temple-halo" />
        <img
          src={heroTemple}
          alt="Brihadeeswara Big Temple, Thanjavur"
          loading="eager"
        />
      </motion.div>

      <motion.div className="hero-scroll" style={{ opacity: fade }}>
        <span>Scroll to discover</span>
        <ChevronDown size={18} className="hero-scroll-icon" />
      </motion.div>

      <div className="hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,120 C480,30 960,30 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
