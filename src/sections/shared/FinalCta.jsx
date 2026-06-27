import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, CalendarCheck } from 'lucide-react'
import { IMAGES } from '../../constants/images'
import { BRAND } from '../../constants/site'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Button from '../../components/ui/Button'
import Particles from '../../components/ui/Particles'
import GoldDivider from '../../components/ui/GoldDivider'
import './FinalCta.css'

export default function FinalCta({
  title = 'Ready to Celebrate Your|Most Precious Moments?',
  intro = 'Step into our showroom and let our consultants help you discover the ornament that becomes tomorrow’s heirloom.',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="cta">
      <motion.div className="cta-bg" style={{ y }}>
        <img src={IMAGES.cta} alt="" loading="lazy" />
      </motion.div>
      <div className="cta-overlay" />
      <Particles count={20} />

      <div className="cta-inner container">
        <Reveal variant="fade">
          <span className="eyebrow center">Visit the House of Pillai</span>
        </Reveal>
        <SplitText text={title} as="h2" className="cta-title display-lg" />
        <GoldDivider dark className="cta-divider" />
        <Reveal variant="fadeUp" delay={1}>
          <p className="cta-intro lead">{intro}</p>
        </Reveal>
        <Reveal variant="fadeUp" delay={2} className="cta-actions">
          <Button to="/contact" variant="gold">
            <CalendarCheck size={17} strokeWidth={1.6} /> Book an Appointment
          </Button>
          <Button href={`tel:${BRAND.phone}`} variant="ghost" arrow={false}>
            <Phone size={16} strokeWidth={1.6} /> Call {BRAND.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
