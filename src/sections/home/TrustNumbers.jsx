import Counter from '../../components/ui/Counter'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { STATS } from '../../constants/site'
import Marquee from '../../components/ui/Marquee'
import { fadeUp, viewport } from '../../utils/motion'
import './TrustNumbers.css'

export default function TrustNumbers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section className="trust dark-bg grain">
      <Marquee
        dark
        items={['Purity Assured', 'BIS Hallmarked', 'IGI Certified', 'Since 1947', 'Lifetime Exchange']}
        speed={30}
      />

      <div className="trust-inner container" ref={ref}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="trust-stat"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            custom={i}
          >
            <span className="trust-num">
              <Counter end={s.value} duration={2.6} play={inView} />
              <em>{s.suffix}</em>
            </span>
            <span className="trust-label">{s.label}</span>
          </motion.div>
        ))}
      </div>

      <Marquee
        dark
        items={['Bridal Jewellery', 'Temple Collections', 'Certified Diamonds', 'Gold Savings', 'Heirloom Silver']}
        speed={34}
      />
    </section>
  )
}
