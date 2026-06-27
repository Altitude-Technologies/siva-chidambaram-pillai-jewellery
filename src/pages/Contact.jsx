import { useState } from 'react'
import { MapPin, Clock, Phone, MessageCircle, Send, Check } from 'lucide-react'
import PageHero from '../sections/shared/PageHero'
import Faq from '../sections/shared/Faq'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { BRAND } from '../constants/site'
import { IMAGES } from '../constants/images'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Visit · Call · Write"
        title="Let's Begin|a Conversation"
        intro="Step into our showroom or reach out — our consultants are delighted to help you find or create something extraordinary."
        image={IMAGES.contactHero}
        crumbs={['Home', 'Contact Us']}
      />

      <section className="contact section">
        <div className="container contact-grid">
          {/* Info column */}
          <div className="contact-info">
            <SectionHeader
              label="The House of Pillai"
              title="We'd Love to|Hear From You"
            />
            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-icon"><MapPin size={20} /></span>
                <div>
                  <h4>Visit the Showroom</h4>
                  {BRAND.address.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon"><Clock size={20} /></span>
                <div>
                  <h4>Working Hours</h4>
                  {BRAND.hours.map((h) => (
                    <p key={h.day}>
                      <strong>{h.day}</strong> · {h.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-icon"><Phone size={20} /></span>
                <div>
                  <h4>Call Us</h4>
                  <p><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></p>
                  <p><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
                </div>
              </div>
            </div>

            <div className="contact-quick">
              <Button href={`tel:${BRAND.phone}`} variant="solid" arrow={false}>
                <Phone size={16} /> Call Now
              </Button>
              <Button
                href={`https://wa.me/${BRAND.whatsapp}`}
                variant="outline"
                arrow={false}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </div>
          </div>

          {/* Form column */}
          <Reveal variant="scaleIn" className="contact-form-wrap">
            <span className="contact-form-badge">Enquiry</span>
            <h3 className="contact-form-title">Book an Appointment</h3>
            <p className="contact-form-sub muted">
              Tell us a little about what you're looking for and we'll be in touch within
              one business day.
            </p>
            <form className="contact-form" onSubmit={submit}>
              <div className="field">
                <input type="text" required placeholder=" " id="c-name" />
                <label htmlFor="c-name">Full Name</label>
              </div>
              <div className="field-row">
                <div className="field">
                  <input type="tel" required placeholder=" " id="c-phone" />
                  <label htmlFor="c-phone">Phone</label>
                </div>
                <div className="field">
                  <input type="email" placeholder=" " id="c-email" />
                  <label htmlFor="c-email">Email</label>
                </div>
              </div>
              <div className="field">
                <select id="c-interest" defaultValue="">
                  <option value="" disabled>
                    I'm interested in…
                  </option>
                  <option>Gold Jewellery</option>
                  <option>Silver Collections</option>
                  <option>Diamond Jewellery</option>
                  <option>Gift Collections</option>
                  <option>AABARANA Gold Scheme</option>
                </select>
              </div>
              <div className="field">
                <textarea rows="4" placeholder=" " id="c-msg" />
                <label htmlFor="c-msg">Your Message</label>
              </div>
              <button type="submit" className={`contact-submit ${sent ? 'is-sent' : ''}`}>
                {sent ? (
                  <>
                    <Check size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={17} /> Send Enquiry
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map-section section-tight">
        <div className="container-wide">
          <div className="contact-map">
            <iframe
              title="Showroom location"
              src={BRAND.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-card">
              <span className="eyebrow">Find Us</span>
              <h3>Heart of Thanjavur</h3>
              <p>{BRAND.address.join(', ')}</p>
              <Button
                href="https://www.google.com/maps?q=Thanjavur+Tamil+Nadu"
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Faq label="Before You Visit" title="Helpful|Answers" />
    </>
  )
}
