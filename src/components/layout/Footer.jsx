import { Link } from 'react-router-dom'
import { MapPin, Clock, Mail, Phone, MessageCircle, Heart } from 'lucide-react'
import { BRAND, NAV, COLLECTIONS, LOGO } from '../../constants/site'
import Icon from '../ui/Icon'
import GoldDivider from '../ui/GoldDivider'
import Particles from '../ui/Particles'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer grain">
      <Particles count={14} />
      <div className="footer-top container-wide">
        {/* Brand + newsletter */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img className="footer-logo-mark" src={LOGO} alt={`${BRAND.name} logo`} />
            <div>
              <h3 className="footer-logo-name">{BRAND.name}</h3>
              <span className="footer-logo-sub">Jewellery · Since {BRAND.since}</span>
            </div>
          </div>
          <p className="footer-tag">
            Crafting Memories. Preserving Traditions. Since {BRAND.since}.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Collections</h4>
          <ul>
            {COLLECTIONS.map((c) => (
              <li key={c.key}>
                <Link to={c.to}>{c.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/chit">AABARANA Gold Scheme</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h4>Visit the House</h4>
          <p className="footer-info">
            <MapPin size={16} className="fi-icon" />
            <a href={BRAND.mapLink} target="_blank" rel="noreferrer">
              {BRAND.address.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </a>
          </p>
          <p className="footer-info">
            <Clock size={16} className="fi-icon" />
            <span>
              {BRAND.hours.map((h) => (
                <span key={h.day}>
                  {h.day}: {h.time}
                </span>
              ))}
            </span>
          </p>
          <p className="footer-info">
            <Phone size={16} className="fi-icon" />
            <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
          </p>
          <p className="footer-info">
            <Mail size={16} className="fi-icon" />
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </p>
          <a
            className="footer-wa"
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <GoldDivider dark className="footer-divider" />

      {/* Map strip */}
      <div className="footer-map container-wide">
        <iframe
          title="Store location"
          src={BRAND.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="footer-bottom container-wide">
        <span>
          © 2026 {BRAND.name} Jewellery. All Rights Reserved.
        </span>
        <div className="footer-social">
          {BRAND.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="footer-soc"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={s.icon} size={17} />
            </a>
          ))}
        </div>
        <span className="footer-credit">
          Made with <Heart size={13} fill="currentColor" strokeWidth={0} className="footer-heart" /> by{' '}
          <a
            href="https://altitudetech.in/"
            target="_blank"
            rel="noreferrer"
            className="footer-credit-link"
          >
            Altitude Technologies
          </a>
        </span>
      </div>
    </footer>
  )
}
