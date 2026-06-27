import { motion } from 'framer-motion'
import { wordVariant, stagger, viewport } from '../../utils/motion'
import './SplitText.css'

/**
 * Word-by-word masked reveal for headings.
 * Pass `text` (string). Use `|` to force a line break.
 */
export default function SplitText({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  stagger: s = 0.07,
  amount = 0.5,
}) {
  const MotionTag = motion[as] || motion.h2
  const lines = text.split('|')

  return (
    <MotionTag
      className={`split-text ${className}`}
      variants={stagger(s, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ ...viewport, amount }}
    >
      {lines.map((line, li) => (
        <span className="split-line" key={li}>
          {line.trim().split(' ').map((word, wi) => (
            <span className="split-word" key={wi}>
              <motion.span className="split-word-inner" variants={wordVariant}>
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </MotionTag>
  )
}
