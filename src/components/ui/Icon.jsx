import {
  Crown,
  Sparkles,
  Gem,
  Gift,
  Landmark,
  Users,
  BadgeCheck,
  IndianRupee,
  HandHeart,
  Hammer,
  Heart,
  Camera,
  MessageCircle,
  Video,
  AtSign,
  ShieldCheck,
  Award,
  Scale,
  Truck,
  Repeat,
  Calculator,
  PiggyBank,
  CalendarHeart,
  Baby,
  Building2,
  PartyPopper,
  Diamond,
  Flower2,
  Leaf,
  CircleDot,
  Star,
  Coins,
} from 'lucide-react'

// Lucide dropped brand glyphs, so Facebook / Instagram are inline SVGs that
// mirror the Lucide API (size + strokeWidth, stroke = currentColor).
const brandProps = (size, strokeWidth) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

const Facebook = ({ size = 22, strokeWidth = 1.4, ...rest }) => (
  <svg {...brandProps(size, strokeWidth)} {...rest}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const Instagram = ({ size = 22, strokeWidth = 1.4, ...rest }) => (
  <svg {...brandProps(size, strokeWidth)} {...rest}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const MAP = {
  Crown,
  Sparkles,
  Gem,
  Gift,
  Landmark,
  Users,
  BadgeCheck,
  IndianRupee,
  HandHeart,
  Hammer,
  Heart,
  Camera,
  MessageCircle,
  Video,
  AtSign,
  ShieldCheck,
  Award,
  Scale,
  Truck,
  Repeat,
  Calculator,
  PiggyBank,
  CalendarHeart,
  Baby,
  Building2,
  PartyPopper,
  Diamond,
  Flower2,
  Leaf,
  CircleDot,
  Star,
  Coins,
  Facebook,
  Instagram,
}

/** Renders a Lucide icon by string name. */
export default function Icon({ name, size = 22, strokeWidth = 1.4, ...rest }) {
  const Cmp = MAP[name] || CircleDot
  return <Cmp size={size} strokeWidth={strokeWidth} {...rest} />
}
