/* Shared Framer Motion variants & easings */
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.08 },
  }),
}

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 1.12 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE } },
}

export const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(14px)', y: 24 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 1.1, ease: EASE },
  },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const wordVariant = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.85, ease: EASE },
  },
}

export const viewport = { once: true, amount: 0.3 }
export const viewportSoft = { once: true, amount: 0.18 }
