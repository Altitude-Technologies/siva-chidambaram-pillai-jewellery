import { motion } from 'framer-motion'
import { FEATURES } from '../../constants/site'
import Icon from '../../components/ui/Icon'
import SectionHeader from '../../components/ui/SectionHeader'
import Particles from '../../components/ui/Particles'
import { fadeUp, viewportSoft } from '../../utils/motion'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="why section dark-bg grain">
      <Particles count={16} />
      <div className="container">
        <SectionHeader
          align="center"
          label="The Pillai Difference"
          title="Why Generations|Choose Our House"
          intro="Eight reasons families have trusted us with their most treasured milestones for nearly eighty years."
        />

        <div className="why-grid">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              className="why-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              custom={i % 4}
              style={{ '--i': i }}
            >
              <span className="why-card-num">0{i + 1}</span>
              <span className="why-icon">
                <Icon name={f.icon} size={24} strokeWidth={1.3} />
              </span>
              <h3 className="why-card-title">{f.title}</h3>
              <p>{f.text}</p>
              <span className="why-card-glow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
