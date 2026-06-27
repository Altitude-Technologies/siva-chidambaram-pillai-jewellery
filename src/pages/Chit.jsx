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
import { IMAGES } from '../constants/images'
import { fadeUp, viewportSoft } from '../utils/motion'
import './Gold.css'

const BENEFITS = [
  { icon: 'PiggyBank', title: 'Convenient Monthly Payments' },
  { icon: 'Repeat', title: 'Flexible Saving Options' },
  { icon: 'Award', title: 'Exclusive Customer Benefits' },
  { icon: 'ShieldCheck', title: 'Safe & Transparent Process' },
  { icon: 'CalendarHeart', title: 'Ideal for Wedding Purchases' },
  { icon: 'Landmark', title: 'Trusted Legacy Support' },
]

const WHY_JOIN = [
  { icon: 'PiggyBank', title: 'Easy Monthly Contributions' },
  { icon: 'Calculator', title: 'Flexible Saving Duration' },
  { icon: 'Star', title: 'Special Benefits for Members' },
  { icon: 'ShieldCheck', title: 'Secure & Trusted Program' },
  { icon: 'PartyPopper', title: 'Perfect for Weddings & Celebrations' },
]

function BenefitGrid({ items }) {
  return (
    <div className="why-gold-grid">
      {items.map((r, i) => (
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
  )
}

export default function Chit() {
  return (
    <>
      <PageHero
        eyebrow="AABARANA · Order Thittam New-11"
        title="Your Dream Jewellery|Starts Here"
        image={IMAGES.chitHero}
        crumbs={['Home', 'Chit']}
      />

      <Marquee
        dark
        items={['Save Monthly', 'Flexible Plans', 'Member Benefits', 'Wedding Ready', 'Trusted Since 1947']}
      />

      {/* AABARANA description */}
      <IntroSplit
        label="AABARANA Order Thittam New-11"
        image={IMAGES.scheme}
        paragraphs={[
          'The AABARANA ORDER THITTAM NEW-11 is designed to help customers plan their jewellery purchases through convenient monthly savings.',
          "Whether you're preparing for a wedding, family celebration or future investment, this scheme offers a reliable path toward your jewellery aspirations.",
        ]}
      />

      {/* Scheme Benefits */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader align="center" label="What You Get" title="Scheme|Benefits" />
          <BenefitGrid items={BENEFITS} />
        </div>
      </section>

      {/* Gold Savings Scheme description */}
      <IntroSplit
        label="Gold Savings Scheme"
        title="Build Your Jewellery Dreams|One Month at a Time"
        flip
        image={IMAGES.featured1}
        paragraphs={[
          'Our Gold Savings Scheme offers a simple and disciplined way to save towards your future jewellery purchases.',
          'Designed to provide convenience and peace of mind, the scheme helps customers plan ahead while enjoying exclusive benefits.',
        ]}
      />

      {/* Why Join? */}
      <section className="why-gold section dark-bg grain">
        <div className="container">
          <SectionHeader align="center" label="The Advantages" title="Why|Join?" />
          <BenefitGrid items={WHY_JOIN} />
        </div>
      </section>

      {/* Need Assistance? CTA */}
      <section className="gold-cta">
        <div className="gold-cta-bg">
          <img src={IMAGES.cta} alt="" loading="lazy" />
        </div>
        <div className="gold-cta-overlay" />
        <div className="container gold-cta-inner">
          <Reveal variant="fade">
            <span className="eyebrow center">We're Here to Help</span>
          </Reveal>
          <h2 className="display-md gold-cta-title">Need Assistance?</h2>
          <GoldDivider dark className="gold-cta-divider" />
          <p className="lead gold-cta-text">
            Our team is always available to guide you through the enrollment process and
            help you choose the right plan.
          </p>
          <div className="gold-cta-actions">
            <Button to="/contact" variant="gold">
              <PiggyBank size={17} strokeWidth={1.6} /> Join the Scheme Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
