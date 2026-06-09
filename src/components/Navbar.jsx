import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/support', label: 'Support' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled || menuOpen ? 'scrolled' : 'transparent'}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-img-wrap">
              <img src="/images/Smartouch_Logo.png" alt="Smartouch Malaysia" className="navbar-logo-img" />
            </div>
            <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6875rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Malaysia Sdn Bhd
            </span>
          </Link>

          <nav className="navbar-nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="nav-link nav-cta">Get a Demo</Link>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`mobile-nav-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="mobile-nav-link mobile-nav-cta">
          Get a Free Demo
        </Link>
      </div>
    </>
  )
}
