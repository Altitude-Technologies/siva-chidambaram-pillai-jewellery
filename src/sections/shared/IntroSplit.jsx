import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Button from '../../components/ui/Button'
import './IntroSplit.css'

/** Editorial split block: parallax image + copy, optional flip + dark. */
export default function IntroSplit({
  label,
  title = '',
  paragraphs = [],
  image,
  flip = false,
  dark = false,
  cta,
  bullets = [],
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  return (
    <section
      ref={ref}
      className={`isplit section ${flip ? 'is-flip' : ''} ${dark ? 'dark-bg grain' : ''}`}
    >
      <div className="container isplit-inner">
        <div className="isplit-media">
          <motion.div className="isplit-media-inner" style={{ y }}>
            <img src={image} alt={(title || label || '').replace(/\|/g, ' ')} loading="lazy" />
          </motion.div>
          <span className="isplit-frame" />
        </div>

        <div className="isplit-copy">
          {label && (
            <Reveal variant="fade">
              <span className="eyebrow">{label}</span>
            </Reveal>
          )}
          {title && (
            <SplitText text={title} as="h2" className="isplit-title display-md" />
          )}
          {paragraphs.map((p, i) => (
            <Reveal key={i} variant="fadeUp" delay={i + 1}>
              <p className="lead isplit-p">{p}</p>
            </Reveal>
          ))}
          {bullets.length > 0 && (
            <ul className="isplit-bullets">
              {bullets.map((b) => (
                <Reveal key={b} as="li" variant="fadeUp">
                  <span className="isplit-bullet-dot" />
                  {b}
                </Reveal>
              ))}
            </ul>
          )}
          {cta && (
            <Reveal variant="fadeUp" delay={2}>
              <Button to={cta.to} variant={dark ? 'gold' : 'outline'}>
                {cta.label}
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
