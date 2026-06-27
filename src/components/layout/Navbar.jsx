import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { NAV, MEGA, BRAND } from '../../constants/site'
import Magnetic from '../ui/Magnetic'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mega, setMega] = useState(null)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobile(false)
    setMega(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [mobile])

  return (
    <>
      <header
        className={`nav ${scrolled || mega ? 'nav-solid' : ''}`}
        onMouseLeave={() => setMega(null)}
      >
        <div className="nav-inner container-wide">
          {/* Brand */}
          <Link to="/" className="nav-brand" aria-label={BRAND.name}>
            <span className="nav-brand-mark">{BRAND.initials}</span>
            <span className="nav-brand-text">
              <span className="nav-brand-name">{BRAND.name}</span>
              <span className="nav-brand-sub">Jewellery · Est. {BRAND.since}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <div
                key={item.to}
                className="nav-link-wrap"
                onMouseEnter={() => setMega(item.mega || null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'is-active' : ''}`
                  }
                  end={item.to === '/'}
                >
                  <span>{item.label}</span>
                </NavLink>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="nav-actions">
            <Magnetic strength={0.3}>
              <a className="nav-cta" href={`tel:${BRAND.phone}`}>
                <Phone size={15} strokeWidth={1.6} />
                <span>Book Appointment</span>
              </a>
            </Magnetic>
            <button
              className="nav-burger"
              aria-label="Open menu"
              onClick={() => setMobile(true)}
            >
              <Menu size={26} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              className="mega"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setMega(mega)}
            >
              <div className="mega-inner container-wide">
                <div className="mega-intro">
                  <span className="eyebrow">{MEGA[mega].title}</span>
                  <p>{MEGA[mega].note}</p>
                  <Link to={`/${mega}`} className="mega-explore">
                    Explore {MEGA[mega].title} <ChevronRight size={16} />
                  </Link>
                </div>
                <ul className="mega-grid">
                  {MEGA[mega].links.map((l) => (
                    <li key={l}>
                      <Link to={`/${mega}`}>
                        <span className="mega-dot" />
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-nav-bar container">
              <Link to="/" className="nav-brand">
                <span className="nav-brand-mark">{BRAND.initials}</span>
              </Link>
              <button
                className="nav-burger"
                aria-label="Close menu"
                onClick={() => setMobile(false)}
              >
                <X size={28} strokeWidth={1.4} />
              </button>
            </div>
            <nav className="mobile-links container">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={item.to} className="mobile-link">
                    <span className="mobile-link-index">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-foot container">
              <a href={`tel:${BRAND.phone}`} className="mobile-call">
                <Phone size={16} /> {BRAND.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
