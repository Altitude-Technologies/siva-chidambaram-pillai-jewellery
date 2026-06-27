import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Icon from '../../components/ui/Icon'
import SectionHeader from '../../components/ui/SectionHeader'
import { fadeUp, viewportSoft } from '../../utils/motion'
import './ProductGrid.css'

/** Category cards grid for Gold / Silver / Diamond / Gift pages. */
export default function ProductGrid({ label, title, intro, categories, to = '/contact', dark = false }) {
  return (
    <section className={`pgrid section ${dark ? 'pgrid-dark dark-bg grain' : ''}`}>
      <div className="container-wide">
        <SectionHeader align="center" label={label} title={title} intro={intro} />
        <div className="pgrid-grid">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              custom={i % 4}
            >
              <Link to={to} className="pcard" data-cursor-label="View">
                <div className="pcard-media">
                  <img src={c.img} alt={c.name} loading="lazy" />
                  <span className="pcard-icon">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <span className="pcard-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="pcard-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
