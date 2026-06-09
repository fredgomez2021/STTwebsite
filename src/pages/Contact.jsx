import { useState } from 'react'
import { Link } from 'react-router-dom'

const offices = [
  {
    icon: '🏢',
    name: 'Headquarters — KL / Selangor',
    address: 'Kuala Lumpur / Petaling Jaya,\nSelangor, Malaysia',
    phone: '+603-XXXX XXXX',
    email: 'info@smartouch.com.my',
    hours: 'Mon–Fri: 9am–6pm\nSat: 9am–1pm',
  },
  {
    icon: '🌺',
    name: 'Northern Region — Penang',
    address: 'George Town,\nPenang, Malaysia',
    phone: '+604-XXXX XXXX',
    email: 'penang@smartouch.com.my',
    hours: 'Mon–Fri: 9am–6pm',
  },
  {
    icon: '🌇',
    name: 'Southern Region — Johor',
    address: 'Johor Bahru,\nJohor, Malaysia',
    phone: '+607-XXXX XXXX',
    email: 'johor@smartouch.com.my',
    hours: 'Mon–Fri: 9am–6pm',
  },
]

const defaultForm = {
  name: '', company: '', email: '', phone: '',
  product: '', employees: '', message: '', contact: 'Email',
}

export default function Contact() {
  const [form, setForm] = useState(defaultForm)
  const [submitted, setSubmitted] = useState(false)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Contact Us</span>
            </div>
            <h1>Get in Touch</h1>
            <p>
              Ready to modernise your workforce management? Our sales team will
              respond within one business day with a tailored recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* SIDEBAR INFO */}
            <div className="contact-info">
              <h3 style={{ marginBottom: 24 }}>Contact Information</h3>

              {[
                {
                  icon: '📞',
                  label: 'Sales Hotline',
                  value: '+603-XXXX XXXX',
                },
                {
                  icon: '💬',
                  label: 'WhatsApp',
                  value: <a href="https://wa.me/601XXXXXXXX">+60 1X-XXX XXXX</a>,
                },
                {
                  icon: '📧',
                  label: 'Sales Email',
                  value: <a href="mailto:sales@smartouch.com.my">sales@smartouch.com.my</a>,
                },
                {
                  icon: '🔧',
                  label: 'Support Email',
                  value: <a href="mailto:support@smartouch.com.my">support@smartouch.com.my</a>,
                },
                {
                  icon: '🕐',
                  label: 'Business Hours',
                  value: 'Mon–Fri: 9am–6pm\nSat: 9am–1pm (closed Sun & PH)',
                },
                {
                  icon: '📍',
                  label: 'Headquarters',
                  value: 'Kuala Lumpur / Petaling Jaya, Selangor, Malaysia',
                },
              ].map(info => (
                <div key={info.label} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div>
                    <div className="contact-info-label">{info.label}</div>
                    <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* SOCIAL */}
              <div style={{ marginTop: 8 }}>
                <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 14 }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[
                    { label: 'Facebook', icon: 'f', href: 'https://facebook.com/smartouchmalaysia' },
                    { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/smartouch-malaysia' },
                    { label: 'YouTube', icon: '▶', href: 'https://youtube.com/@smartouchmalaysia' },
                    { label: 'Instagram', icon: '●', href: 'https://instagram.com/smartouchmalaysia' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      style={{
                        width: 40, height: 40, borderRadius: 8,
                        background: 'var(--bg-blue)', border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--secondary)', fontWeight: 800, fontSize: '0.875rem',
                        transition: 'all 0.25s',
                        textDecoration: 'none',
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-card">
              <h3>Send Us an Enquiry</h3>
              <p className="sub">Fill in the form and we'll get back to you within one business day.</p>

              {submitted ? (
                <div className="form-success" style={{ fontSize: '1rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Thank you! Your enquiry has been received. We'll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-control" type="text" placeholder="Ahmad Abdullah" required value={form.name} onChange={set('name')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input className="form-control" type="text" placeholder="Your Company Sdn Bhd" required value={form.company} onChange={set('company')} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-control" type="email" placeholder="you@company.com" required value={form.email} onChange={set('email')} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input className="form-control" type="tel" placeholder="+60 12-XXX XXXX" required value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Product Interest</label>
                      <select className="form-control" value={form.product} onChange={set('product')}>
                        <option value="">Select product...</option>
                        <option>Time Attendance Terminal</option>
                        <option>Face Recognition Terminal</option>
                        <option>Door Access Control</option>
                        <option>HR & Payroll Software</option>
                        <option>CCTV System</option>
                        <option>Visitor Management</option>
                        <option>Full Integrated Solution</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Number of Employees</label>
                      <select className="form-control" value={form.employees} onChange={set('employees')}>
                        <option value="">Select range...</option>
                        <option>1 – 20</option>
                        <option>21 – 50</option>
                        <option>51 – 100</option>
                        <option>101 – 200</option>
                        <option>201 – 500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Enquiry</label>
                    <textarea
                      className="form-control"
                      placeholder="Tell us about your requirements — number of sites, current challenges, or specific features you need..."
                      value={form.message}
                      onChange={set('message')}
                      style={{ minHeight: 120 }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Contact Method</label>
                    <div className="radio-group">
                      {['Email', 'Phone', 'WhatsApp'].map(method => (
                        <label key={method} className="radio-option">
                          <input
                            type="radio"
                            name="contact"
                            value={method}
                            checked={form.contact === method}
                            onChange={set('contact')}
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                    Send Enquiry
                  </button>

                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 14 }}>
                    By submitting this form, you agree to our{' '}
                    <a href="#" style={{ color: 'var(--secondary)' }}>Privacy Policy</a>{' '}
                    and PDPA consent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Offices</span>
            <h2>Regional Coverage Across Malaysia</h2>
            <p>Offices and authorised dealers in all major Malaysian cities.</p>
          </div>
          <div className="offices-grid">
            {offices.map(o => (
              <div key={o.name} className="office-card">
                <h4><span>{o.icon}</span> {o.name}</h4>
                <p style={{ whiteSpace: 'pre-line', marginBottom: 10 }}>{o.address}</p>
                <p>
                  <a href={`tel:${o.phone.replace(/\s|-/g, '')}`} style={{ color: 'var(--secondary)', fontWeight: 500 }}>{o.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${o.email}`} style={{ color: 'var(--secondary)', fontWeight: 500 }}>{o.email}</a>
                </p>
                <p style={{ whiteSpace: 'pre-line', marginTop: 8, fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{o.hours}</p>
              </div>
            ))}
          </div>

          {/* EAST MALAYSIA */}
          <div style={{
            marginTop: 24,
            background: 'var(--bg-white)',
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: '2rem' }}>🗺️</div>
            <div style={{ flex: 1 }}>
              <h4 style={{ marginBottom: 6 }}>East Malaysia & Other Regions</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                We cover Sabah, Sarawak, Melaka, Negeri Sembilan, Pahang, and other states through
                our authorised dealer network. Contact us for your nearest dealer.
              </p>
            </div>
            <Link to="/contact" className="btn btn-secondary" style={{ flexShrink: 0 }}>Find a Dealer</Link>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <div style={{
        height: 320,
        background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 12,
        color: 'var(--text-muted)',
      }}>
        <span style={{ fontSize: '3rem' }}>📍</span>
        <p style={{ fontSize: '1rem', fontWeight: 600 }}>Kuala Lumpur / Petaling Jaya, Selangor</p>
        <p style={{ fontSize: '0.875rem' }}>Google Maps embed — contact us for directions</p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ marginTop: 8 }}
        >
          Open in Google Maps
        </a>
      </div>

      <section className="cta-strip">
        <div className="container">
          <h2>Need an Urgent Response?</h2>
          <p>WhatsApp us directly for the fastest response from our sales team.</p>
          <div className="cta-btns">
            <a href="https://wa.me/601XXXXXXXX" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
            <a href="tel:+603XXXXXXXX" className="btn btn-outline btn-lg">
              Call Sales: +603-XXXX XXXX
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
