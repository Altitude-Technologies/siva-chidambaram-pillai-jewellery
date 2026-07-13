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

// send-mail.php ships in /public, so it sits next to index.html once built.
// BASE_URL keeps this correct whether the site is at a domain root or a subpath.
const ENDPOINT = `${import.meta.env.BASE_URL}send-mail.php`

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.target
    const payload = Object.fromEntries(new FormData(form))

    setStatus('sending')
    setError('')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await res.json().catch(() => ({}))

      if (!res.ok || !result.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.')
      }

      form.reset()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('idle')
      setError(err.message || 'Could not send your message. Please call us instead.')
    }
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
                <input type="text" name="name" required placeholder=" " id="c-name" />
                <label htmlFor="c-name">Full Name</label>
              </div>
              <div className="field-row">
                <div className="field">
                  <input type="tel" name="phone" required placeholder=" " id="c-phone" />
                  <label htmlFor="c-phone">Phone</label>
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder=" " id="c-email" />
                  <label htmlFor="c-email">Email</label>
                </div>
              </div>
              <div className="field">
                <select name="interest" id="c-interest" defaultValue="">
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
                <textarea rows="4" name="message" placeholder=" " id="c-msg" />
                <label htmlFor="c-msg">Your Message</label>
              </div>

              {/* honeypot — off-screen for people, irresistible to bots */}
              <div className="contact-hp" aria-hidden="true">
                <label htmlFor="c-company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="c-company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className={`contact-submit ${status === 'sent' ? 'is-sent' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sent' ? (
                  <>
                    <Check size={18} /> Message Sent
                  </>
                ) : status === 'sending' ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send size={17} /> Send Enquiry
                  </>
                )}
              </button>

              {error && (
                <p className="contact-form-error" role="alert">
                  {error}
                </p>
              )}
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
                href={BRAND.mapLink}
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
