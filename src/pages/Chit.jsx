import { motion } from 'framer-motion'
import { PiggyBank } from 'lucide-react'
import PageHero from '../sections/shared/PageHero'
import Marquee from '../components/ui/Marquee'
import IntroSplit from '../sections/shared/IntroSplit'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import GoldDivider from '../components/ui/GoldDivider'
import { IMAGES, GOLD_IMAGES } from '../constants/images'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Chit.css'

// AABARANA Order Thittam New-11 — scheme benefits
const SCHEME_BENEFITS = [
  { icon: 'PiggyBank', title: 'Convenient Monthly Payments' },
  { icon: 'Repeat', title: 'Flexible Saving Options' },
  { icon: 'Award', title: 'Exclusive Customer Benefits' },
  { icon: 'ShieldCheck', title: 'Safe & Transparent Process' },
  { icon: 'CalendarHeart', title: 'Ideal for Wedding Purchases' },
  { icon: 'Landmark', title: 'Trusted Legacy Support' },
]

// Gold Savings Scheme — why join
const WHY_JOIN = [
  { icon: 'PiggyBank', title: 'Easy Monthly Contributions' },
  { icon: 'Calculator', title: 'Flexible Saving Duration' },
  { icon: 'Star', title: 'Special Benefits for Members' },
  { icon: 'ShieldCheck', title: 'Secure & Trusted Program' },
  { icon: 'PartyPopper', title: 'Perfect for Weddings & Celebrations' },
]

function BenefitGrid({ items }) {
  return (
    <div className="benefits-grid">
      {items.map((b, i) => (
        <motion.div
          key={b.title}
          className="benefit-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportSoft}
          custom={i % 3}
        >
          <span className="benefit-icon">
            <Icon name={b.icon} size={24} strokeWidth={1.4} />
          </span>
          <h3>{b.title}</h3>
        </motion.div>
      ))}
    </div>
  )
}

export default function Chit() {
  return (
    <>
      <PageHero
        eyebrow="AABARANA · Order Thittam New-11"
        title="Your Dream Jewellery|Starts Here"
        intro="Two simple, disciplined ways to turn small monthly savings into the jewellery you have always dreamed of."
        image={IMAGES.chitHero}
        crumbs={['Home', 'Scheme']}
      />

      <Marquee
        dark
        items={['Save Monthly', 'Flexible Plans', 'Member Benefits', 'Wedding Ready', 'Trusted Since 1947']}
      />

      {/* ============================================================
          SCHEME 01 — AABARANA ORDER THITTAM NEW-11
      ============================================================ */}
      <div className="scheme-block">
        <div className="container scheme-tag-row">
          <span className="scheme-tag">Scheme 01</span>
          <span className="scheme-tag-line" />
        </div>

        <IntroSplit
          label="AABARANA · Order Thittam New-11"
          title="Your Dream Jewellery|Starts Here"
          image={IMAGES.scheme}
          paragraphs={[
            'The AABARANA ORDER THITTAM NEW-11 is designed to help customers plan their jewellery purchases through convenient monthly savings.',
            "Whether you're preparing for a wedding, family celebration, or future investment, this scheme offers a reliable path toward your jewellery aspirations.",
          ]}
        />

        <section className="chit-benefits section">
          <div className="container">
            <SectionHeader align="center" label="What You Get" title="Scheme|Benefits" />
            <BenefitGrid items={SCHEME_BENEFITS} />
          </div>
        </section>
      </div>

      {/* ============================================================
          SCHEME 02 — GOLD SAVINGS SCHEME
      ============================================================ */}
      <div className="scheme-block scheme-block-alt">
        <div className="container scheme-tag-row">
          <span className="scheme-tag">Scheme 02</span>
          <span className="scheme-tag-line" />
        </div>

        <IntroSplit
          label="Gold Savings Scheme"
          title="Build Your Jewellery Dreams|One Month at a Time"
          flip
          image={GOLD_IMAGES[3]}
          paragraphs={[
            'Our Gold Savings Scheme offers a simple and disciplined way to save towards your future jewellery purchases.',
            'Designed to provide convenience and peace of mind, the scheme helps customers plan ahead while enjoying exclusive benefits.',
          ]}
        />

        <section className="chit-benefits section">
          <div className="container">
            <SectionHeader align="center" label="The Advantages" title="Why|Join?" />
            <BenefitGrid items={WHY_JOIN} />
          </div>
        </section>
      </div>

      {/* Need Assistance? CTA */}
      <section className="chit-cta section">
        <div className="container chit-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">We're Here to Help</span>
          </Reveal>
          <h2 className="display-md chit-cta-title">Need Assistance?</h2>
          <GoldDivider className="chit-cta-divider" />
          <p className="lead chit-cta-text">
            Our team is always available to guide you through the enrollment process and
            help you choose the right plan.
          </p>
          <div className="chit-cta-actions">
            <Button to="/contact" variant="gold">
              <PiggyBank size={17} strokeWidth={1.6} /> Join the Scheme Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
