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
import { IMAGES, GOLD_IMAGES } from '../constants/images'
import { BRAND } from '../constants/site'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Gold.css'

const CATEGORIES = [
  { name: 'Bridal Jewellery', icon: 'Crown', img: GOLD_IMAGES[0], desc: 'Grand bridal sets crafted to make your wedding day truly unforgettable.' },
  { name: 'Necklaces', icon: 'Gem', img: GOLD_IMAGES[1], desc: 'Elegant necklace collections ranging from traditional temple designs to modern statement pieces.' },
  { name: 'Bangles', icon: 'CircleDot', img: GOLD_IMAGES[2], desc: 'Beautifully crafted bangles that add grace and sophistication to every occasion.' },
  { name: 'Earrings', icon: 'Flower2', img: GOLD_IMAGES[3], desc: 'Stylish and timeless earrings designed for everyday elegance and festive celebrations.' },
  { name: 'Chains', icon: 'Repeat', img: GOLD_IMAGES[4], desc: 'Premium gold chains available in classic, lightweight and contemporary designs.' },
  { name: 'Rings', icon: 'Diamond', img: GOLD_IMAGES[5], desc: 'Perfectly crafted rings that symbolize love, commitment and personal style.' },
  { name: 'Temple Jewellery', icon: 'Landmark', img: GOLD_IMAGES[6], desc: 'Inspired by South Indian heritage and traditional artistry, crafted for cultural celebrations and weddings.' },
]

const REASONS = [
  { icon: 'BadgeCheck', title: 'Assured Purity & Quality' },
  { icon: 'Hammer', title: 'Expert Craftsmanship' },
  { icon: 'Gem', title: 'Exclusive Traditional & Contemporary Designs' },
  { icon: 'Scale', title: 'Transparent Pricing' },
  { icon: 'ShieldCheck', title: 'Trusted Since 1947' },
  { icon: 'HandHeart', title: 'Personalized Customer Assistance' },
]

const TRIO = [
  {
    title: 'Jewellery for Every Occasion',
    text: "Whether it's a wedding, engagement, baby shower, anniversary, birthday or festive celebration, our gold jewellery collections are thoughtfully curated to complement every special moment.",
  },
  {
    title: 'Crafted with Precision',
    text: 'Every piece of jewellery undergoes meticulous craftsmanship and quality checks to ensure exceptional beauty, durability and customer satisfaction.',
  },
  {
    title: 'A Legacy of Trust',
    text: `For over ${BRAND.years} years, ${BRAND.name} Jewellery has been helping families celebrate their most treasured milestones with jewellery that reflects elegance, purity and timeless value.`,
  },
]

export default function Gold() {
  return (
    <>
      <PageHero
        eyebrow="Gold Jewellery Collection"
        title="Timeless Gold, Crafted|for Every Generation"
        intro="Discover an exquisite collection of gold jewellery that beautifully blends tradition, craftsmanship and contemporary elegance. From bridal masterpieces to everyday essentials, every piece is designed to celebrate life's most cherished moments."
        image={IMAGES.goldHero}
        crumbs={['Home', 'Gold']}
      />

      <Marquee
        dark
        items={['916 Hallmarked', 'Bridal Grandeur', 'Temple Heritage', 'Hand Finished', 'Live Gold Rates']}
      />

      {/* Our Gold Collections */}
      <ProductGrid
        title="Our Gold|Collections"
        categories={CATEGORIES}
        to="/contact"
      />

      {/* Why Choose Our Gold Jewellery? */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader
            align="center"
            label="The Pillai Difference"
            title="Why Choose Our|Gold Jewellery?"
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

      {/* Occasion / Precision / Legacy */}
      <section className="gold-trio section">
        <div className="container gold-trio-grid">
          {TRIO.map((t, i) => (
            <Reveal key={t.title} variant="fadeUp" delay={i} className="gold-trio-card">
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
          <img src={IMAGES.gold} alt="" loading="lazy" />
        </div>
        <div className="gold-cta-overlay" />
        <div className="container gold-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">Experience It in Person</span>
          </Reveal>
          <h2 className="display-md gold-cta-title">Visit Our Showroom</h2>
          <p className="lead gold-cta-text">
            Explore our exclusive gold collections in person and experience the
            craftsmanship, trust and service that have made us a preferred jewellery
            destination for generations.
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
