import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="logo-img-wrap logo-img-wrap--footer">
                  <img src="/images/Smartouch_Logo.png" alt="Smartouch Malaysia" className="navbar-logo-img" />
                </div>
                <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.6875rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Malaysia Sdn Bhd
                </span>
              </div>
              <p>
                Smart Solutions for Smart Businesses. Providing innovative biometric,
                time attendance, access control, and HR software to organisations
                across Malaysia and Southeast Asia.
              </p>
              <div className="footer-socials">
                {['f', 'in', 'yt', 'ig'].map(s => (
                  <a key={s} href="#" className="social-icon" aria-label={s}>
                    {s === 'f' ? 'F' : s === 'in' ? 'in' : s === 'yt' ? '▶' : '●'}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                {[
                  'Time Attendance',
                  'Access Control',
                  'HR Software',
                  'Payroll',
                  'CCTV',
                  'Visitor Management',
                ].map(item => (
                  <li key={item}>
                    <Link to="/products">›&nbsp;{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                {[
                  'Manufacturing',
                  'Retail',
                  'Hospitality',
                  'Education',
                  'Healthcare',
                  'Government',
                ].map(item => (
                  <li key={item}>
                    <Link to="/solutions">›&nbsp;{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {[
                  ['About Us', '/about'],
                  ['Our Team', '/about'],
                  ['Careers', '/about'],
                  ['Support', '/support'],
                  ['Downloads', '/support'],
                  ['Contact Us', '/contact'],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path}>›&nbsp;{label}</Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24 }}>
                <div className="footer-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                  </svg>
                  <span>+603-XXXX XXXX</span>
                </div>
                <div className="footer-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>sales@smartouch.com.my</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Smartouch Malaysia Sdn Bhd. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">PDPA</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
