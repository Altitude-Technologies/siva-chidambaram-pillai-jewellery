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
import { IMAGES, SILVER_IMAGES } from '../constants/images'
import { BRAND } from '../constants/site'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Gold.css'

const CATEGORIES = [
  { name: 'Silver Pooja Articles', icon: 'Flower2', img: SILVER_IMAGES[0], desc: 'Beautifully crafted silver items for religious rituals, spiritual occasions and temple offerings.' },
  { name: 'Silver Utensils', icon: 'CircleDot', img: SILVER_IMAGES[1], desc: 'Premium silver utensils that combine tradition, elegance and functionality.' },
  { name: 'Silver Gift Articles', icon: 'Gift', img: SILVER_IMAGES[2], desc: 'Thoughtful silver gifts perfect for weddings, birthdays, anniversaries, housewarming ceremonies and special celebrations.' },
  { name: 'Decorative Silver Items', icon: 'Sparkles', img: SILVER_IMAGES[3], desc: 'Intricately designed silver artifacts and decorative pieces that enhance the beauty of your home and office.' },
  { name: 'Silver Coins', icon: 'Coins', img: SILVER_IMAGES[4], desc: 'Pure silver coins ideal for gifting, investments and festive occasions.' },
  { name: "Children's Silver Collection", icon: 'Baby', img: SILVER_IMAGES[5], desc: 'Silver anklets, bracelets, feeding bowls and gifting items specially designed for children.' },
]

const REASONS = [
  { icon: 'BadgeCheck', title: 'Premium Quality Silver' },
  { icon: 'Gem', title: 'Elegant Traditional & Modern Designs' },
  { icon: 'Gift', title: 'Perfect for Gifting & Celebrations' },
  { icon: 'Hammer', title: 'Fine Craftsmanship' },
  { icon: 'ShieldCheck', title: 'Trusted Since 1947' },
  { icon: 'Sparkles', title: 'Wide Variety of Collections' },
]

const TRIO = [
  {
    title: 'Silver for Every Occasion',
    text: "Whether you're celebrating a wedding, baby shower, housewarming, festival, corporate event or religious ceremony, our silver collections offer the perfect choice for every special moment.",
  },
  {
    title: 'Crafted with Tradition',
    text: 'Every silver article reflects exceptional craftsmanship and attention to detail, ensuring lasting beauty and value for generations.',
  },
  {
    title: 'A Legacy of Trust',
    text: `For over ${BRAND.years} years, ${BRAND.name} Jewellery has been serving families with trusted quality, authentic craftsmanship and timeless collections that become part of cherished memories.`,
  },
]

export default function Silver() {
  return (
    <>
      <PageHero
        eyebrow="Silver Collection"
        title="Elegance in Every|Silver Creation"
        intro="Discover our exquisite range of silver collections crafted with precision, purity and timeless artistry. From traditional pooja articles to elegant gifting options, our silver creations are designed to add value and beauty to every occasion."
        image={IMAGES.silverHero}
        crumbs={['Home', 'Silver']}
      />

      <Marquee
        dark
        items={['999 Pure Silver', 'Pooja Articles', 'Heirloom Silverware', 'Festive Gifting', 'Hand Cast']}
      />

      {/* Our Silver Collections */}
      <ProductGrid title="Our Silver|Collections" categories={CATEGORIES} to="/contact" />

      {/* Why Choose Our Silver Collection? */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader
            align="center"
            label="The Pillai Difference"
            title="Why Choose Our|Silver Collection?"
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

      {/* Occasion / Tradition / Legacy */}
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
          <img src={IMAGES.cta} alt="" loading="lazy" />
        </div>
        <div className="gold-cta-overlay" />
        <div className="container gold-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">Experience It in Person</span>
          </Reveal>
          <h2 className="display-md gold-cta-title">Visit Our Showroom</h2>
          <p className="lead gold-cta-text">
            Explore our exclusive silver collections and discover the perfect piece for
            your home, gifting needs or special occasion.
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
