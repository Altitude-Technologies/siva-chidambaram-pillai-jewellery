import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '../../constants/images'
import { BRAND } from '../../constants/site'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Button from '../../components/ui/Button'
import Counter from '../../components/ui/Counter'
import { useInView } from 'react-intersection-observer'
import './Welcome.css'

export default function Welcome() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-8%', '10%'])
  const [statRef, statIn] = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="welcome section grain">
      <span className="welcome-ghost">Heritage</span>

      <div className="welcome-inner container-wide">
        <div className="welcome-copy">
          <Reveal variant="fade">
            <span className="eyebrow">The House of Pillai</span>
          </Reveal>
          <SplitText
            text="A Legacy That|Sparkles Across|Generations"
            as="h2"
            className="welcome-title display-lg"
          />
          <Reveal variant="fadeUp" delay={1}>
            <p className="lead welcome-lead">
              For nearly eight decades, {BRAND.name} Jewellery has been more than a
              jewellery store — it has been a trusted companion in life's most precious
              moments, from a child's first gold to a bride's wedding splendour.
            </p>
          </Reveal>

          <div className="welcome-stats" ref={statRef}>
            <div className="welcome-stat">
              <span className="welcome-stat-num">
                <Counter end={79} duration={2.4} suffix="+" play={statIn} />
              </span>
              <span className="welcome-stat-label">Years of Heritage</span>
            </div>
            <div className="welcome-stat">
              <span className="welcome-stat-num">
                <Counter end={4} duration={2} play={statIn} />
              </span>
              <span className="welcome-stat-label">Generations Served</span>
            </div>
          </div>

          <Reveal variant="fadeUp" delay={2}>
            <Button to="/about" variant="outline">
              Read Our Story
            </Button>
          </Reveal>
        </div>

        <div className="welcome-media">
          <motion.figure className="welcome-img welcome-img-1" style={{ y: y1 }}>
            <img src={IMAGES.welcome1} alt="Master karigar at work" loading="lazy" />
          </motion.figure>
          <motion.figure className="welcome-img welcome-img-2" style={{ y: y2 }}>
            <img src={IMAGES.welcome2} alt="Heritage gold ornaments" loading="lazy" />
          </motion.figure>
          <div className="welcome-badge">
            <span className="welcome-badge-year">Est.</span>
            <span className="welcome-badge-1947">{BRAND.since}</span>
            <span className="welcome-badge-sub">Thanjavur</span>
          </div>
        </div>
      </div>
    </section>
  )
}
