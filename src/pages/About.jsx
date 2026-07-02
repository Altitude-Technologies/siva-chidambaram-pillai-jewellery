import { motion } from 'framer-motion'
import { Quote, Target, Eye } from 'lucide-react'
import PageHero from '../sections/shared/PageHero'
import IntroSplit from '../sections/shared/IntroSplit'
import SectionHeader from '../components/ui/SectionHeader'
import SplitText from '../components/ui/SplitText'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import { IMAGES } from '../constants/images'
import { BRAND } from '../constants/site'
import { fadeUp, viewportSoft } from '../utils/motion'
import './About.css'

const VALUES = [
  { icon: 'HandHeart', title: 'Trust' },
  { icon: 'BadgeCheck', title: 'Purity' },
  { icon: 'Hammer', title: 'Craftsmanship' },
  { icon: 'Heart', title: 'Customer Satisfaction' },
  { icon: 'Scale', title: 'Transparency' },
  { icon: 'Landmark', title: 'Heritage' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us · Est. 1947"
        title="A Tradition of|Trust Since 1947"
        image={IMAGES.aboutHero}
        crumbs={['Home', 'About Us']}
      />

      {/* Our Story */}
      <IntroSplit
        label="Our Story"
        image={IMAGES.welcome1}
        paragraphs={[
          `${BRAND.name} Jewellery was founded with a simple vision — to offer pure jewellery, honest service and lasting relationships.`,
          `Over the past ${BRAND.years} years, we have grown alongside the families of Thanjavur, becoming a trusted destination for Gold, Silver, Diamond and Gift Collections.`,
          'Every ornament we create reflects our commitment to quality, craftsmanship and the values that have guided us for generations.',
          'Today, while embracing innovation and contemporary designs, we continue to preserve the tradition and trust that define our legacy.',
        ]}
      />

      {/* Our Heritage */}
      <IntroSplit
        label="Our Heritage"
        title="Celebrating 79 Years of|Trust & Excellence"
        flip
        image={IMAGES.welcome2}
        paragraphs={[
          `Since ${BRAND.since}, ${BRAND.name} Jewellery has been a trusted name in Thanjavur, serving generations of families with purity, craftsmanship and integrity. What began as a vision to provide quality jewellery has evolved into a legacy built on customer trust and timeless traditions.`,
          "For nearly eight decades, we have been part of life's most cherished celebrations, creating jewellery that reflects elegance, heritage and lasting value.",
        ]}
      />

      {/* Chairman's message */}
      <section className="chairman section dark-bg grain">
        <div className="container chairman-inner">
          <div className="chairman-portrait">
            <img src={IMAGES.chairman} alt="Mr. D. Sivaraj, Chairman" loading="lazy" />
            <span className="chairman-frame" />
          </div>
          <div className="chairman-copy">
            <Quote className="chairman-quote" size={46} />
            <SplitText
              text="Built on trust, quality|and lasting relationships."
              as="blockquote"
              className="chairman-text display-sm"
            />
            <Reveal variant="fadeUp" delay={1}>
              <p className="chairman-msg">
                For {BRAND.years} years, {BRAND.name} Jewellery has been built on
                trust, quality and lasting relationships. We remain committed to
                offering exquisite jewellery, exceptional service and a memorable
                experience for every customer.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={2}>
              <p className="chairman-msg">
                We sincerely thank our customers for their continued support and look
                forward to being a part of your cherished moments for generations to
                come.
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={3} className="chairman-sign">
              <span className="chairman-name">Mr. D. Sivaraj, MBA.</span>
              <span className="chairman-role">Chairman · {BRAND.name} Jewellery</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mv section">
        <div className="container mv-grid">
          <Reveal variant="fadeUp" className="mv-card">
            <span className="mv-icon"><Target size={26} strokeWidth={1.3} /></span>
            <h3>Mission</h3>
            <p>
              To deliver exceptional jewellery that celebrates life's most meaningful
              moments, while maintaining the highest standards of quality and
              integrity.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={1} className="mv-card mv-card-alt">
            <span className="mv-icon"><Eye size={26} strokeWidth={1.3} /></span>
            <h3>Vision</h3>
            <p>
              To inspire future generations through timeless craftsmanship, innovation
              and unwavering customer trust.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="values section dark-bg grain">
        <div className="container">
          <SectionHeader align="center" label="What We Stand For" title="Our Values" />
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card value-card-name"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportSoft}
                custom={i % 3}
              >
                <span className="value-icon"><Icon name={v.icon} size={26} strokeWidth={1.2} /></span>
                <h3>{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
