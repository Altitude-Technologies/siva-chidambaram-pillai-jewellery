import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '../../constants/site'
import SectionHeader from '../../components/ui/SectionHeader'
import './Faq.css'

export default function Faq({ items = FAQS, label = 'Good to Know', title = 'Questions,|Answered with Care' }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section">
      <div className="container faq-inner">
        <div className="faq-aside">
          <SectionHeader label={label} title={title} />
          <p className="faq-help muted">
            Can't find what you're looking for? Our consultants are a call away.
          </p>
        </div>

        <div className="faq-list">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={i}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq-toggle">
                    <Plus size={20} strokeWidth={1.4} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="faq-a">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
