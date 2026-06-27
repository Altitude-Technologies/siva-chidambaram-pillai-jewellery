import { motion } from 'framer-motion'
import { viewport } from '../../utils/motion'

/** Animated SVG gold divider with a central diamond motif. */
export default function GoldDivider({ className = '', dark = false }) {
  const stroke = dark ? 'rgba(220,196,138,0.6)' : 'var(--gold)'
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
    >
      <svg
        width="220"
        height="22"
        viewBox="0 0 220 22"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="11" x2="92" y2="11" stroke={stroke} strokeWidth="1" />
        <line x1="128" y1="11" x2="220" y2="11" stroke={stroke} strokeWidth="1" />
        <path
          d="M110 2 L118 11 L110 20 L102 11 Z"
          stroke={stroke}
          strokeWidth="1"
          fill="none"
        />
        <circle cx="110" cy="11" r="2" fill={stroke} />
      </svg>
    </motion.div>
  )
}
