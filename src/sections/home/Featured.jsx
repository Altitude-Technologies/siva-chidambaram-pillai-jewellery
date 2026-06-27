import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FEATURED } from '../../constants/site'
import { IMAGES } from '../../constants/images'
import SplitText from '../../components/ui/SplitText'
import Reveal from '../../components/ui/Reveal'
import Button from '../../components/ui/Button'
import './Featured.css'

function Row({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['14%', '-14%'])
  const flip = index % 2 === 1

  return (
    <article ref={ref} className={`featured-row ${flip ? 'is-flip' : ''}`}>
      <div className="featured-media" data-cursor-label="View">
        <motion.div className="featured-media-inner" style={{ y }}>
          <img src={IMAGES[item.img]} alt={item.title} loading="lazy" />
        </motion.div>
        <span className="featured-tag">{item.tag}</span>
        <span className="featured-num">0{index + 1}</span>
      </div>

      <div className="featured-copy">
        <SplitText text={item.title} as="h3" className="featured-title display-md" />
        <Reveal variant="fadeUp" delay={1}>
          <p className="lead">{item.text}</p>
        </Reveal>
        <Reveal variant="fadeUp" delay={2}>
          <Button to={item.to} variant="outline">
            View Collection
          </Button>
        </Reveal>
      </div>
    </article>
  )
}

export default function Featured() {
  return (
    <section className="featured section">
      <div className="container-wide">
        <div className="featured-head">
          <span className="eyebrow">Editorial</span>
          <h2 className="display-md">
            Featured <em className="text-serif-italic">Collections</em>
          </h2>
        </div>
        <div className="featured-rows">
          {FEATURED.map((item, i) => (
            <Row key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
