import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { COLLECTIONS } from '../../constants/site'
import { IMAGES } from '../../constants/images'
import TiltCard from '../../components/ui/TiltCard'
import Icon from '../../components/ui/Icon'
import SectionHeader from '../../components/ui/SectionHeader'
import { fadeUp, viewport } from '../../utils/motion'
import './Collections.css'

export default function Collections() {
  return (
    <section className="collections section">
      <div className="container-wide">
        <div className="collections-head">
          <SectionHeader
            label="Curated Houses"
            title="Four Worlds of|Timeless Adornment"
          />
          <p className="collections-head-note lead">
            Each collection is a discipline of its own — struck in pure metal,
            certified for purity and finished by hand.
          </p>
        </div>

        <div className="collections-grid">
          {COLLECTIONS.map((c, i) => (
            <motion.div
              key={c.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              custom={i}
              className={`collection-cell cell-${i}`}
            >
              <TiltCard className="collection-card">
                <Link to={c.to} className="collection-link" data-cursor-label="View">
                  <div className="collection-media">
                    <img src={IMAGES[c.img]} alt={c.title} loading="lazy" />
                    <div className="collection-media-veil" />
                    <span className="collection-icon">
                      <Icon name={c.icon} size={22} />
                    </span>
                  </div>
                  <div className="collection-body">
                    <span className="collection-sub">{c.sub}</span>
                    <h3 className="collection-title">{c.title}</h3>
                    <p className="collection-desc">{c.desc}</p>
                    <span className="collection-cta">
                      Explore <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <span className="collection-border" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
