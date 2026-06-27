import { motion } from 'framer-motion'
import { fadeUp, fade, scaleIn, blurReveal, viewport } from '../../utils/motion'

const VARIANTS = { fadeUp, fade, scaleIn, blur: blurReveal }

/** Generic scroll-reveal wrapper. */
export default function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as = 'div',
  amount = 0.3,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ ...viewport, amount }}
      custom={delay}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
