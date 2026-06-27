import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus } from 'lucide-react'
import { galleryImages } from '../../constants/images'
import SectionHeader from '../../components/ui/SectionHeader'
import { fadeUp, viewportSoft } from '../../utils/motion'
import './Gallery.css'

export default function Gallery({
  label = 'The Lookbook',
  title = 'Moments|Worth Wearing',
  images = galleryImages,
}) {
  const [active, setActive] = useState(null)

  return (
    <section className="gallery section">
      <div className="container-wide">
        <SectionHeader align="center" label={label} title={title} />

        <div className="gallery-grid">
          {images.map((src, i) => (
            <motion.button
              key={i}
              className={`gallery-item gi-${i % 6}`}
              onClick={() => setActive(src)}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportSoft}
              custom={i % 4}
              data-cursor-label="Open"
            >
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              <span className="gallery-veil">
                <Plus size={26} strokeWidth={1} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="lightbox-close" aria-label="Close">
              <X size={30} strokeWidth={1.2} />
            </button>
            <motion.img
              src={active}
              alt=""
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
