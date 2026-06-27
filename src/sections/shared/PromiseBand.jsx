import { motion } from 'framer-motion'
import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import GoldDivider from '../../components/ui/GoldDivider'
import { PROMISES } from '../../constants/catalog'
import { fadeUp, viewportSoft } from '../../utils/motion'
import './PromiseBand.css'

export default function PromiseBand({
  items = PROMISES,
  label = 'Our Covenant',
  title = 'A Promise Stamped|into Every Piece',
}) {
  return (
    <section className="promise section-tight">
      <div className="container">
        <div className="promise-head">
          <Reveal variant="fade">
            <span className="eyebrow center">{label}</span>
          </Reveal>
          <h2 className="display-sm">
            {title.split('|').map((l, i) => (
              <span key={i} className={i === 1 ? 'text-serif-italic' : ''} style={{ display: 'block' }}>
                {l}
              </span>
            ))}
          </h2>
          <GoldDivider />
        </div>
        <div className="promise-grid">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              className="promise-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              custom={i}
            >
              <span className="promise-icon">
                <Icon name={p.icon} size={26} strokeWidth={1.2} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
