import { Link } from 'react-router-dom'

const features = [
  {
    icon: '☁️',
    color: 'bg-blue',
    title: 'Cloud & On-Premise',
    desc: 'Flexible deployment — fully cloud-hosted SaaS or on-premise. Hybrid deployment supported. 99.9% uptime SLA with automatic cloud backup.',
  },
  {
    icon: '🏢',
    color: 'bg-orange',
    title: 'Multi-Site Management',
    desc: 'Centralise control of unlimited branches from a single dashboard. Real-time monitoring with consolidated cross-site reporting.',
  },
  {
    icon: '📱',
    color: 'bg-green',
    title: 'Mobile App Support',
    desc: 'iOS and Android apps for employee self-service. GPS-tagged clock-in with geo-fencing and manager approval workflows on mobile.',
  },
  {
    icon: '🔗',
    color: 'bg-purple',
    title: 'Seamless Integration',
    desc: 'Open REST API for ERP integration (SAP, Oracle, MS Dynamics). Pre-built connectors for Malaysian payroll and accounting software.',
  },
  {
    icon: '🇲🇾',
    color: 'bg-teal',
    title: 'Malaysia Compliance',
    desc: 'EPF, SOCSO, EIS, and PCB auto-calculation. EA Form, E Form, and CP39 generation. Fully LHDN and statutory compliant.',
  },
  {
    icon: '🔒',
    color: 'bg-red',
    title: 'Security & Reliability',
    desc: 'AES-256 encryption at rest and in transit. Role-based access control. Regular penetration testing and security audits.',
  },
]

const products = [
  {
    icon: '🖐️',
    bg: '#eff6ff',
    title: 'Time Attendance',
    desc: 'Fingerprint, face recognition, palm vein, RFID, and mobile GPS attendance — all syncing to your payroll.',
    tags: ['Biometric', 'Cloud Sync', 'Real-time'],
  },
  {
    icon: '🚪',
    bg: '#f0fdf4',
    title: 'Door Access Control',
    desc: 'From single-door standalone units to enterprise multi-door systems with centralised management and real-time alerts.',
    tags: ['Multi-door', 'Anti-passback', 'Alerts'],
  },
  {
    icon: '👥',
    bg: '#faf5ff',
    title: 'HR Software',
    desc: 'Complete SmartHR suite — employee database, leave management, appraisals, org chart, and self-service portal.',
    tags: ['SmartHR', 'Leave Mgmt', 'ESS'],
  },
  {
    icon: '💰',
    bg: '#fff7ed',
    title: 'Payroll Processing',
    desc: 'Auto-calculate salaries, EPF, SOCSO, EIS, and PCB. Generate payslips and bank files for all major Malaysian banks.',
    tags: ['EPF/SOCSO', 'Payslips', 'Bank Files'],
  },
  {
    icon: '📹',
    bg: '#f0fdfa',
    title: 'CCTV & Surveillance',
    desc: 'HD and 4K IP cameras, AI analytics with people counting, intrusion detection, and remote mobile monitoring.',
    tags: ['AI Analytics', 'HD/4K', 'Remote View'],
  },
  {
    icon: '👋',
    bg: '#fef2f2',
    title: 'Visitor Management',
    desc: 'Digital visitor registration, automatic badge printing, pre-registration via email, and integration with access control.',
    tags: ['Kiosk', 'Badge Print', 'Pre-register'],
  },
]

const industries = [
  { emoji: '🏭', name: 'Manufacturing', desc: 'Shift & zone control' },
  { emoji: '🛍️', name: 'Retail & F&B', desc: 'Multi-outlet staff' },
  { emoji: '🏨', name: 'Hospitality', desc: 'Staff & guest access' },
  { emoji: '🏫', name: 'Education', desc: 'Campus attendance' },
  { emoji: '🏥', name: 'Healthcare', desc: 'Contactless biometric' },
  { emoji: '🏛️', name: 'Government', desc: 'High-security access' },
  { emoji: '🏗️', name: 'Property', desc: 'Building management' },
  { emoji: '🚛', name: 'Logistics', desc: 'Driver & depot control' },
]

const testimonials = [
  {
    text: "Smartouch's system has reduced our payroll processing time by 60%. The integration between attendance and payroll is seamless and incredibly reliable.",
    name: 'Hafizuddin Rahman',
    role: 'HR Manager, Manufacturing Co.',
    initials: 'HR',
  },
  {
    text: 'We rolled out Smartouch across 35 outlets in under 3 months. The centralised dashboard makes monitoring all our locations so easy from one screen.',
    name: 'Jennifer Lim',
    role: 'IT Director, Retail Chain',
    initials: 'JL',
  },
  {
    text: 'The face recognition terminals are perfect for our school environment. Completely contactless and hygienic for both staff and students daily.',
    name: 'Ahmad Faizal',
    role: 'Admin Manager, School Group',
    initials: 'AF',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Malaysia's Leading Workforce & Security Solutions
            </div>
            <h1>
              Smart Solutions<br />
              for <span>Smart Businesses</span>
            </h1>
            <p className="hero-sub">Smartouch Malaysia Sdn Bhd</p>
            <p className="hero-desc">
              End-to-end biometric attendance, door access control, and HR payroll
              systems — empowering Malaysian businesses to operate smarter, faster,
              and more securely.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Demo
              </Link>
              <Link to="/products" className="btn btn-outline btn-lg">
                View Products
              </Link>
            </div>
            <div className="hero-trust">
              {['5,000+ Clients', 'ISO Certified', '15+ Years Experience', '24/7 Support'].map(t => (
                <div key={t} className="hero-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {[
            { title: 'Clients Served', value: '5,000+', sub: 'Across Malaysia' },
            { title: 'Years Experience', value: '15+', sub: 'Industry Leader' },
            { title: 'Products', value: '500+', sub: 'Hardware & Software' },
            { title: 'Uptime SLA', value: '99.9%', sub: 'Cloud Platform' },
          ].map(card => (
            <div key={card.title} className="hero-card">
              <div className="hero-card-title">{card.title}</div>
              <div className="hero-card-value">{card.value}</div>
              <div className="hero-card-sub">{card.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '5,000', suffix: '+', label: 'Satisfied Clients' },
              { num: '15', suffix: '+', label: 'Years in Business' },
              { num: '500', suffix: '+', label: 'Products & Models' },
              { num: '99.9', suffix: '%', label: 'Cloud Uptime SLA' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.num}<span>{s.suffix}</span></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="logos-section">
        <div className="container">
          <p className="logos-title">Trusted by businesses across Malaysia</p>
          <div className="logos-track">
            {[
              'Manufacturing', 'Retail', 'Banking', 'Healthcare',
              'Education', 'Government', 'Hospitality', 'Property',
              'Telecommunications', 'FMCG',
            ].map(n => (
              <div key={n} className="logo-item">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Smartouch</span>
            <h2>Built for Malaysian Businesses</h2>
            <p>
              From SMEs to large enterprises, we deliver reliable, integrated
              workforce management and security solutions tailored to your needs.
            </p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" style={{ background: `var(--${f.color})`, fontSize: '1.6rem' }}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2>Complete Workforce & Security Solutions</h2>
            <p>
              Hardware devices and cloud software seamlessly integrated —
              everything you need in one place.
            </p>
          </div>
          <div className="products-grid">
            {products.map(p => (
              <div key={p.title} className="product-card">
                <div className="product-card-header">
                  <div className="product-card-icon" style={{ background: p.bg, fontSize: '1.6rem' }}>
                    {p.icon}
                  </div>
                  <h3>{p.title}</h3>
                </div>
                <div className="product-card-body">
                  <p>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                    {p.tags.map(t => (
                      <span key={t} className="badge badge-blue">{t}</span>
                    ))}
                  </div>
                  <Link to="/products" className="product-card-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/products" className="btn btn-secondary btn-lg">View All Products</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Up and Running in 3 Simple Steps</h2>
            <p>From consultation to live deployment — we handle everything.</p>
          </div>
          <div className="steps-grid">
            {[
              {
                n: '01',
                title: 'Consultation & Planning',
                desc: 'Our experts assess your workforce size, sites, and requirements. We recommend the right hardware and software mix for your organisation.',
              },
              {
                n: '02',
                title: 'Installation & Setup',
                desc: 'Certified technicians install hardware devices and configure the software. Data migration, user enrolment, and integration handled end-to-end.',
              },
              {
                n: '03',
                title: 'Go Live & Support',
                desc: 'Training for HR and IT staff, then full go-live. Ongoing technical support, updates, and account management keep you running smoothly.',
              },
            ].map(s => (
              <div key={s.n} className="step-card">
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries</span>
            <h2>Solutions Across Every Sector</h2>
            <p>Tailored configurations for the unique challenges of each industry.</p>
          </div>
          <div className="industries-grid">
            {industries.map(i => (
              <Link to="/solutions" key={i.name} className="industry-card" style={{ textDecoration: 'none' }}>
                <span className="industry-emoji">{i.emoji}</span>
                <h4>{i.name}</h4>
                <p>{i.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Over 5,000 organisations across Malaysia trust Smartouch daily.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="stars">{'★★★★★'}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container">
          <h2>Ready to Modernise Your Workforce Management?</h2>
          <p>
            Get a free demo and see how Smartouch can transform your HR and security operations.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Demo</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
