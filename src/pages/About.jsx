import { Link } from 'react-router-dom'

const values = [
  { icon: '💡', name: 'Innovation' },
  { icon: '🎯', name: 'Reliability' },
  { icon: '❤️', name: 'Customer-Centricity' },
  { icon: '🤝', name: 'Integrity' },
  { icon: '📈', name: 'Continuous Improvement' },
]

const milestones = [
  { year: '2008', title: 'Company Founded', desc: 'Smartouch Malaysia Sdn Bhd incorporated — began as a biometric device reseller in Kuala Lumpur.' },
  { year: '2011', title: 'Proprietary Software Launch', desc: 'SmartHR and SmartAttendance software launched, transitioning from hardware-only to integrated solutions.' },
  { year: '2014', title: 'Regional Expansion', desc: 'Expanded coverage to Penang, Johor Bahru, and East Malaysia through authorised dealer network.' },
  { year: '2017', title: 'Cloud Platform', desc: 'Launched cloud-hosted SaaS platform, enabling multi-site management and remote access for enterprise clients.' },
  { year: '2020', title: 'Contactless Innovation', desc: 'Launched temperature-screening face recognition terminals and mobile GPS attendance in response to industry needs.' },
  { year: '2024', title: 'AI-Powered Analytics', desc: 'Integrated AI workforce analytics, predictive attendance, and advanced CCTV AI features into the platform.' },
]

const credentials = [
  { icon: '🏆', title: 'ISO Certified', desc: 'ISO 9001 quality management processes for consistent service delivery.' },
  { icon: '🔐', title: 'Authorised Reseller', desc: 'Authorised integrator for leading global biometric hardware brands.' },
  { icon: '✅', title: 'SSM Incorporated', desc: 'Registered under Companies Commission of Malaysia (SSM).' },
  { icon: '⭐', title: '5,000+ Clients', desc: 'Thousands of satisfied clients across multiple industries in Malaysia.' },
]

const team = [
  { name: 'Ahmad Razif', role: 'Chief Executive Officer', initials: 'AR', dept: 'Leadership' },
  { name: 'Sarah Tan', role: 'Head of Product', initials: 'ST', dept: 'Product' },
  { name: 'David Khor', role: 'Head of Engineering', initials: 'DK', dept: 'Engineering' },
  { name: 'Nurul Huda', role: 'Head of Sales', initials: 'NH', dept: 'Sales' },
  { name: 'James Wong', role: 'Head of Support', initials: 'JW', dept: 'Support' },
  { name: 'Priya Kumar', role: 'Head of Marketing', initials: 'PK', dept: 'Marketing' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About Us</span>
            </div>
            <h1>About Smartouch Malaysia</h1>
            <p>
              Malaysia's trusted partner for biometric attendance, access control,
              and HR software since 2008 — serving thousands of businesses across Southeast Asia.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-image-block">
              <div className="about-stats-grid">
                {[
                  { num: '15+', label: 'Years Experience' },
                  { num: '5K+', label: 'Happy Clients' },
                  { num: '8', label: 'Regions Covered' },
                  { num: '99.9%', label: 'Uptime SLA' },
                ].map(s => (
                  <div key={s.label} className="about-stat">
                    <span className="about-stat-num">{s.num}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-text">
              <span className="section-tag">Our Story</span>
              <h2>From Hardware Reseller to Integrated Solutions Provider</h2>
              <p>
                Founded in 2008, Smartouch Malaysia Sdn Bhd began as a biometric
                hardware reseller in Kuala Lumpur. Over 15 years, we have evolved
                into Malaysia's leading end-to-end workforce management and physical
                security solutions provider.
              </p>
              <p>
                Today, we serve thousands of organisations across Malaysia and Southeast
                Asia — from SMEs managing a single site to enterprises with hundreds of
                locations. Our proprietary SmartHR and payroll software, combined with
                our hardware expertise, gives clients a truly unified platform.
              </p>
              <p>
                We are an authorised reseller and systems integrator for leading global
                biometric brands, and our team of certified engineers and HR specialists
                ensures every deployment is a success.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
                <Link to="/products" className="btn btn-outline-dark">View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Purpose</span>
            <h2>Mission, Vision & Values</h2>
          </div>
          <div className="grid-3" style={{ marginBottom: 48 }}>
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                bg: '#eff6ff',
                content: 'To provide innovative, reliable, and cost-effective workforce management and security solutions that empower organisations to operate more efficiently.',
              },
              {
                icon: '🔭',
                title: 'Our Vision',
                bg: '#faf5ff',
                content: 'To be the most trusted provider of biometric and access control solutions in Southeast Asia — known for quality, integrity, and innovation.',
              },
              {
                icon: '⭐',
                title: 'Our Positioning',
                bg: '#fff7ed',
                content: 'End-to-end provider of time attendance, payroll, HR, and access control. Seamless integration of hardware with cloud management software sets us apart.',
              },
            ].map(item => (
              <div key={item.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>{item.content}</p>
              </div>
            ))}
          </div>

          <h3 style={{ textAlign: 'center', marginBottom: 28 }}>Core Values</h3>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.name} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h4>{v.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2>Company Milestones</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="timeline">
              {milestones.map(m => (
                <div key={m.year} className="timeline-item">
                  <div className="timeline-year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Trust & Quality</span>
            <h2>Our Credentials</h2>
          </div>
          <div className="credentials-grid">
            {credentials.map(c => (
              <div key={c.title} className="credential-card">
                <span className="credential-icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our People</span>
            <h2>Meet the Leadership Team</h2>
            <p>Experienced professionals dedicated to delivering excellence.</p>
          </div>
          <div className="grid-3">
            {team.map(m => (
              <div key={m.name} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 72, height: 72,
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  borderRadius: '50%', margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', fontWeight: 800, color: '#fff',
                }}>
                  {m.initials}
                </div>
                <h4 style={{ marginBottom: 4 }}>{m.name}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 12 }}>{m.role}</p>
                <span className="badge badge-blue">{m.dept}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Join Our Growing Team</h2>
          <p>We're always looking for talented people to join Smartouch. Explore career opportunities with us.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">View Careers</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
