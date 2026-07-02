import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import PageHero from '../sections/shared/PageHero'
import Marquee from '../components/ui/Marquee'
import ProductGrid from '../sections/shared/ProductGrid'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import GoldDivider from '../components/ui/GoldDivider'
import { IMAGES, GIFT_IMAGES } from '../constants/images'
import { BRAND } from '../constants/site'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Gold.css'

const CATEGORIES = [
  { name: 'Wedding Gifts', icon: 'CalendarHeart', img: GIFT_IMAGES[0], desc: 'Elegant and memorable gifts designed to celebrate weddings and new beginnings.' },
  { name: 'Anniversary Gifts', icon: 'Heart', img: GIFT_IMAGES[1], desc: 'Timeless gift articles that honor love, commitment and cherished milestones.' },
  { name: 'Birthday Gifts', icon: 'PartyPopper', img: GIFT_IMAGES[2], desc: 'Unique and thoughtful gifts to make every birthday celebration extra special.' },
  { name: 'Baby Shower Gifts', icon: 'Baby', img: GIFT_IMAGES[3], desc: 'Beautiful gifting options for welcoming new beginnings and precious moments.' },
  { name: 'Housewarming Gifts', icon: 'Building2', img: GIFT_IMAGES[4], desc: 'Traditional and decorative gift articles that bring prosperity and happiness to every home.' },
  { name: 'Festive Gifts', icon: 'Sparkles', img: GIFT_IMAGES[5], desc: 'Special collections curated for Diwali, Akshaya Tritiya, Pongal and other festive celebrations.' },
  { name: 'Corporate Gifts', icon: 'Award', img: GIFT_IMAGES[6], desc: 'Premium gifting solutions that leave a lasting impression on clients, employees and business associates.' },
  { name: 'Return Gifts', icon: 'Gift', img: GIFT_IMAGES[7], desc: 'Elegant gift articles perfect for weddings, family functions and special events.' },
]

const REASONS = [
  { icon: 'BadgeCheck', title: 'Premium Quality Products' },
  { icon: 'Gem', title: 'Elegant & Meaningful Designs' },
  { icon: 'PartyPopper', title: 'Perfect for Every Occasion' },
  { icon: 'Repeat', title: 'Traditional & Contemporary Choices' },
  { icon: 'HandHeart', title: 'Custom Gifting Options' },
  { icon: 'ShieldCheck', title: 'Trusted Since 1947' },
]

const TRIO = [
  {
    title: 'Gifts That Create Memories',
    text: 'A thoughtful gift is more than an item — it is a reflection of love, appreciation and celebration. Our carefully curated collections help you find the perfect gift for every occasion and every relationship.',
  },
  {
    title: 'Perfect for Every Celebration',
    text: "Whether you're celebrating a wedding, anniversary, birthday, baby shower, housewarming, corporate event or festive occasion, our gift collection offers something memorable for everyone.",
  },
  {
    title: 'A Legacy of Meaningful Gifting',
    text: `For ${BRAND.years} years, ${BRAND.name} Jewellery has been a trusted part of countless celebrations, helping families share joy and create unforgettable memories through thoughtful gifting.`,
  },
]

export default function Gift() {
  return (
    <>
      <PageHero
        eyebrow="Gift Collection"
        title="Thoughtful Gifts for|Life's Special Moments"
        intro="Celebrate every occasion with meaningful gifts that create lasting memories. Our exclusive gift collection features beautifully crafted Gold, Silver and premium gift articles, perfect for expressing love, gratitude and celebration."
        image={IMAGES.giftHero}
        crumbs={['Home', 'Gift']}
      />

      <Marquee
        dark
        items={['Signature Packaging', 'Wedding Gifts', 'Festive Hampers', 'Return Gifts', 'Since 1947']}
      />

      {/* Our Gift Collections */}
      <ProductGrid title="Our Gift|Collections" categories={CATEGORIES} to="/contact" />

      {/* Why Choose Our Gift Collection? */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader
            align="center"
            label="The Pillai Difference"
            title="Why Choose Our|Gift Collection?"
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

      {/* Memories / Celebration / Legacy */}
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

      {/* Visit / Perfect Gift CTA */}
      <section className="gold-cta">
        <div className="gold-cta-bg">
          <img src={IMAGES.gift} alt="" loading="lazy" />
        </div>
        <div className="gold-cta-overlay" />
        <div className="container gold-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">Experience It in Person</span>
          </Reveal>
          <h2 className="display-md gold-cta-title">Visit Our Showroom</h2>
          <p className="lead gold-cta-text">
            Explore our exclusive gift collections and discover the perfect gift to
            celebrate life's precious moments with elegance and meaning.
          </p>

          <GoldDivider dark className="gold-cta-divider" />

          <h3 className="gold-cta-sub gold-text">Looking for the Perfect Gift?</h3>
          <p className="gold-cta-text">
            From traditional silver articles to premium gifting collections, find
            meaningful gifts that make every occasion unforgettable.
          </p>
          <div className="gold-cta-actions">
            <Button to="/contact" variant="gold">
              <CalendarCheck size={17} strokeWidth={1.6} /> Visit Our Showroom Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
