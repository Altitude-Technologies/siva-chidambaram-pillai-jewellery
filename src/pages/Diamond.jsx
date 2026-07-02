import { motion } from 'framer-motion'
import { CalendarCheck, PiggyBank } from 'lucide-react'
import PageHero from '../sections/shared/PageHero'
import Marquee from '../components/ui/Marquee'
import ProductGrid from '../sections/shared/ProductGrid'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import GoldDivider from '../components/ui/GoldDivider'
import { IMAGES, DIAMOND_IMAGES } from '../constants/images'
import { BRAND } from '../constants/site'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Gold.css'

const CATEGORIES = [
  { name: 'Diamond Rings', icon: 'Diamond', img: DIAMOND_IMAGES[0], desc: "Elegant diamond rings designed to symbolize love, commitment and life's special milestones." },
  { name: 'Diamond Earrings', icon: 'Flower2', img: DIAMOND_IMAGES[1], desc: 'Graceful diamond earrings crafted to add sparkle and sophistication to every look.' },
  { name: 'Diamond Necklaces', icon: 'Gem', img: DIAMOND_IMAGES[2], desc: 'Exquisite diamond necklaces that reflect luxury, beauty and timeless charm.' },
  { name: 'Diamond Pendants', icon: 'CircleDot', img: DIAMOND_IMAGES[3], desc: 'Beautifully crafted pendants designed for both everyday elegance and special occasions.' },
  { name: 'Diamond Bangles', icon: 'Sparkles', img: DIAMOND_IMAGES[4], desc: 'Stunning diamond bangles that blend modern style with classic craftsmanship.' },
  { name: 'Bridal Diamond Collection', icon: 'Crown', img: DIAMOND_IMAGES[5], desc: 'Exclusive bridal diamond sets designed to make your wedding moments truly unforgettable.' },
]

const REASONS = [
  { icon: 'BadgeCheck', title: 'Certified Quality Diamonds' },
  { icon: 'Hammer', title: 'Exceptional Craftsmanship' },
  { icon: 'Gem', title: 'Elegant & Contemporary Designs' },
  { icon: 'Sparkles', title: 'Premium Finishing' },
  { icon: 'ShieldCheck', title: 'Trusted Jewellery Legacy Since 1947' },
  { icon: 'HandHeart', title: 'Personalized Customer Experience' },
]

const BLOCKS = [
  {
    title: 'Diamonds for Every Celebration',
    text: "Whether it's an engagement, wedding, anniversary, birthday or a personal milestone, our diamond collections are crafted to make every moment sparkle with elegance and meaning.",
  },
  {
    title: 'Crafted to Perfection',
    text: 'Every diamond piece is meticulously designed and crafted by skilled artisans, ensuring unmatched brilliance, beauty and lasting value.',
  },
  {
    title: 'A Symbol of Love & Luxury',
    text: 'Diamonds are more than jewellery — they are expressions of love, success and cherished memories. Our collection is thoughtfully curated to help you celebrate life’s finest moments with confidence and elegance.',
  },
  {
    title: 'A Legacy of Trust',
    text: `For ${BRAND.years} years, ${BRAND.name} Jewellery has been helping generations of families celebrate their most treasured occasions with jewellery that embodies quality, trust and timeless beauty.`,
  },
]

export default function Diamond() {
  return (
    <>
      <PageHero
        eyebrow="Diamond Collection"
        title="Brilliance That|Lasts Forever"
        intro="Discover the timeless beauty of diamonds crafted to celebrate life's most precious moments. Our exclusive diamond collection combines exceptional craftsmanship, elegance and sophistication, creating jewellery that shines for generations."
        image={IMAGES.diamondHero}
        dark
        crumbs={['Home', 'Diamond']}
      />

      <Marquee
        dark
        items={['IGI Certified', 'GIA Graded', 'Maximum Fire', 'The 4 Cs', 'Bridal Brilliance']}
      />

      {/* Our Diamond Collections */}
      <ProductGrid dark title="Our Diamond|Collections" categories={CATEGORIES} to="/contact" />

      {/* Why Choose Our Diamond Jewellery? */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader
            align="center"
            label="The Pillai Difference"
            title="Why Choose Our|Diamond Jewellery?"
          />
          <div className="why-gold-grid">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                className="why-gold-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportSoft}
                custom={i % 3}
              >
                <span className="why-gold-icon">
                  <Icon name={r.icon} size={24} strokeWidth={1.3} />
                </span>
                <h3>{r.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration / Perfection / Love & Luxury / Legacy */}
      <section className="gold-trio section">
        <div className="container gold-trio-grid cols-2">
          {BLOCKS.map((t, i) => (
            <Reveal key={t.title} variant="fadeUp" delay={i % 2} className="gold-trio-card">
              <span className="gold-trio-num">0{i + 1}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit / Savings CTA */}
      <section className="gold-cta">
        <div className="gold-cta-bg">
          <img src={IMAGES.diamond} alt="" loading="lazy" />
        </div>
        <div className="gold-cta-overlay" />
        <div className="container gold-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">Experience It in Person</span>
          </Reveal>
          <h2 className="display-md gold-cta-title">Visit Our Showroom</h2>
          <p className="lead gold-cta-text">
            Experience the brilliance of our exclusive diamond collections and find the
            perfect piece that reflects your style, personality and special moments.
          </p>

          <GoldDivider dark className="gold-cta-divider" />

          <h3 className="gold-cta-sub gold-text">Save Today. Shine Tomorrow.</h3>
          <p className="gold-cta-text">
            Join our Gold Savings Scheme and make your dream jewellery purchase easier
            with convenient monthly savings and exclusive benefits.
          </p>
          <div className="gold-cta-actions">
            <Button to="/chit" variant="gold">
              <PiggyBank size={17} strokeWidth={1.6} /> Enroll Now
            </Button>
            <Button to="/contact" variant="ghost">
              <CalendarCheck size={16} strokeWidth={1.6} /> Visit Our Showroom
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
