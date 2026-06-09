import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Time Attendance', 'Access Control', 'HR Software', 'CCTV']

const products = [
  {
    cat: 'Time Attendance',
    emoji: '🖐️',
    bg: '#eff6ff',
    tag: 'Time Attendance',
    tagColor: 'badge-blue',
    name: 'Fingerprint Attendance Terminal',
    desc: 'Standalone or networked device using fingerprint biometric scanning. Real-time data sync with cloud software.',
    specs: [
      { label: 'Capacity', value: '3,000–10,000 templates' },
      { label: 'Connectivity', value: 'TCP/IP, Wi-Fi, USB' },
      { label: 'Identification', value: 'Fingerprint' },
    ],
    price: 'MYR 300 – 1,200',
  },
  {
    cat: 'Time Attendance',
    emoji: '😊',
    bg: '#f0fdf4',
    tag: 'Time Attendance',
    tagColor: 'badge-green',
    name: 'Face Recognition Terminal',
    desc: 'Contactless facial recognition with liveness detection. Identifies employees in under 1 second. Temperature screening option available.',
    specs: [
      { label: 'Recognition Speed', value: '< 1 second' },
      { label: 'Feature', value: 'Liveness Detection' },
      { label: 'Optional', value: 'Temperature Screening' },
    ],
    price: 'MYR 1,200 – 4,500',
  },
  {
    cat: 'Time Attendance',
    emoji: '✋',
    bg: '#faf5ff',
    tag: 'Time Attendance',
    tagColor: 'badge-blue',
    name: 'Palm Vein / Iris Recognition',
    desc: 'High-security biometric terminals with extremely low false acceptance rate. Ideal for clean-room, medical, and government applications.',
    specs: [
      { label: 'Technology', value: 'Palm Vein / Iris' },
      { label: 'Security Level', value: 'High Security' },
      { label: 'Use Case', value: 'Medical, Gov, Lab' },
    ],
    price: 'Contact for pricing',
  },
  {
    cat: 'Time Attendance',
    emoji: '💳',
    bg: '#fff7ed',
    tag: 'Time Attendance',
    tagColor: 'badge-orange',
    name: 'RFID / Proximity Card Reader',
    desc: 'Card-based attendance using RFID or Mifare smart cards. Supports multi-factor authentication (card + PIN or card + fingerprint).',
    specs: [
      { label: 'Card Type', value: 'RFID / Mifare' },
      { label: 'Auth', value: 'Card + PIN / Fingerprint' },
      { label: 'Best For', value: 'Large workforces' },
    ],
    price: 'MYR 200 – 500',
  },
  {
    cat: 'Time Attendance',
    emoji: '📱',
    bg: '#f0fdfa',
    tag: 'Time Attendance',
    tagColor: 'badge-green',
    name: 'Mobile Attendance App',
    desc: 'GPS-tagged clock-in/out via smartphone. Geo-fencing to restrict attendance to approved locations. Ideal for field and remote workers.',
    specs: [
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Feature', value: 'GPS + Geo-fencing' },
      { label: 'Best For', value: 'Field / Remote staff' },
    ],
    price: 'Included in SmartHR',
  },
  {
    cat: 'Access Control',
    emoji: '🚪',
    bg: '#eff6ff',
    tag: 'Access Control',
    tagColor: 'badge-blue',
    name: 'Standalone Door Controller',
    desc: 'Simple single-door access using fingerprint or card. No PC required. Stores up to 10,000 user records. Built-in Wiegand output.',
    specs: [
      { label: 'Doors', value: '1 door' },
      { label: 'Capacity', value: '10,000 users' },
      { label: 'Protocol', value: 'Wiegand output' },
    ],
    price: 'MYR 300 – 800',
  },
  {
    cat: 'Access Control',
    emoji: '🏢',
    bg: '#f0fdf4',
    tag: 'Access Control',
    tagColor: 'badge-green',
    name: 'Networked Access Control Panel',
    desc: 'Multi-door controller managing 2 to 128 doors from central software. Real-time alerts, anti-passback, interlock, and first-person-in rules.',
    specs: [
      { label: 'Doors', value: '2 – 128 doors' },
      { label: 'Features', value: 'Anti-passback, Interlock' },
      { label: 'Integration', value: 'Fire alarm, CCTV' },
    ],
    price: 'MYR 800 – 1,500',
  },
  {
    cat: 'Access Control',
    emoji: '🔄',
    bg: '#fff7ed',
    tag: 'Access Control',
    tagColor: 'badge-orange',
    name: 'Turnstile & Barrier Gates',
    desc: 'Flap barrier, tripod turnstile, and full-height turnstile. Integrated with biometric or card readers. Suitable for lobbies, factories, and public venues.',
    specs: [
      { label: 'Types', value: 'Flap / Tripod / Full-height' },
      { label: 'Integration', value: 'Biometric / Card' },
      { label: 'Locations', value: 'Lobby, Factory, Carpark' },
    ],
    price: 'MYR 3,500 – 8,000',
  },
  {
    cat: 'Access Control',
    emoji: '👥',
    bg: '#faf5ff',
    tag: 'Access Control',
    tagColor: 'badge-blue',
    name: 'Visitor Management System',
    desc: 'Digital visitor registration replacing paper logbooks. Automatic badge printing. Pre-registration via web/email. Temporary access pass integration.',
    specs: [
      { label: 'Type', value: 'Software + Kiosk' },
      { label: 'Features', value: 'Badge print, Pre-reg' },
      { label: 'Integration', value: 'Access control' },
    ],
    price: 'On request',
  },
  {
    cat: 'HR Software',
    emoji: '👤',
    bg: '#eff6ff',
    tag: 'HR Software',
    tagColor: 'badge-blue',
    name: 'SmartHR – Core HR Module',
    desc: 'Employee database, org chart, document management, leave management, appraisal tracking, and employee self-service portal.',
    specs: [
      { label: 'Modules', value: 'Leave, Appraisal, ESS' },
      { label: 'Deployment', value: 'Cloud / On-Premise' },
      { label: 'Integration', value: 'Attendance, Payroll' },
    ],
    price: 'Subscription-based',
  },
  {
    cat: 'HR Software',
    emoji: '💰',
    bg: '#f0fdf4',
    tag: 'HR Software',
    tagColor: 'badge-green',
    name: 'SmartPayroll – Payroll Processing',
    desc: 'Automated salary calculation with EPF, SOCSO, EIS, and PCB compliance. Bank file generation for all major Malaysian banks. Digital payslips.',
    specs: [
      { label: 'Compliance', value: 'EPF, SOCSO, EIS, PCB' },
      { label: 'Bank Files', value: 'All major MY banks' },
      { label: 'Tax', value: 'EA / E Form / CP39' },
    ],
    price: 'Subscription-based',
  },
  {
    cat: 'HR Software',
    emoji: '📅',
    bg: '#fff7ed',
    tag: 'HR Software',
    tagColor: 'badge-orange',
    name: 'SmartScheduler – Shift Planning',
    desc: 'Drag-and-drop shift scheduling with automated overtime calculations. Supports rotating, fixed, and flexi-work arrangements.',
    specs: [
      { label: 'Interface', value: 'Drag-and-drop' },
      { label: 'Shift Types', value: 'Rotating, Fixed, Flexi' },
      { label: 'Auto-calc', value: 'Overtime + Premiums' },
    ],
    price: 'Add-on module',
  },
  {
    cat: 'CCTV',
    emoji: '📹',
    bg: '#f0fdfa',
    tag: 'CCTV',
    tagColor: 'badge-blue',
    name: 'IP Camera Systems',
    desc: 'HD and 4K IP cameras with NVR systems. Remote monitoring via mobile app. Scalable from single camera to enterprise deployments.',
    specs: [
      { label: 'Resolution', value: 'HD to 4K' },
      { label: 'Storage', value: 'NVR Systems' },
      { label: 'Remote', value: 'Mobile app viewing' },
    ],
    price: 'Contact for pricing',
  },
  {
    cat: 'CCTV',
    emoji: '🤖',
    bg: '#fef2f2',
    tag: 'CCTV',
    tagColor: 'badge-blue',
    name: 'AI Analytics Cameras',
    desc: 'People counting, intrusion detection, loitering alerts, and crowd density monitoring. Proactive security with smart alerts.',
    specs: [
      { label: 'Features', value: 'People counting, Intrusion' },
      { label: 'Alerts', value: 'Loitering, Crowd density' },
      { label: 'Type', value: 'AI-powered' },
    ],
    price: 'Contact for pricing',
  },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All' ? products : products.filter(p => p.cat === activeTab)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Products</span>
            </div>
            <h1>Products & Solutions</h1>
            <p>
              Complete range of biometric attendance terminals, access control systems,
              HR software, and CCTV — all designed to work seamlessly together.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING OVERVIEW */}
      <section className="section-sm" style={{ background: 'var(--bg-blue)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Fingerprint Terminals', price: 'from MYR 300' },
              { label: 'Face Recognition', price: 'from MYR 1,200' },
              { label: 'HR Software (Cloud)', price: 'Starter from ~MYR 3/user' },
              { label: 'Access Control Panel', price: 'from MYR 800' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)' }}>{item.price}</div>
              </div>
            ))}
            <Link to="/contact" className="btn btn-primary">Request Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-listing">
            {filtered.map(p => (
              <div key={p.name} className="product-listing-card">
                <div className="product-listing-img" style={{ background: p.bg }}>
                  <span style={{ fontSize: '3.5rem' }}>{p.emoji}</span>
                </div>
                <div className="product-listing-body">
                  <div className={`product-tag ${p.tagColor}`} style={{ marginBottom: 8 }}>
                    <span className={`badge ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="product-specs">
                    {p.specs.map(s => (
                      <div key={s.label} className="spec-row">
                        <span className="spec-label">{s.label}</span>
                        <span className="spec-value">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="product-price">
                    Indicative Price: <strong>{p.price}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Link to="/contact" className="btn btn-secondary btn-sm">Request Quote</Link>
                    <Link to="/support" className="btn btn-outline-dark btn-sm">Brochure</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE PLANS */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SmartHR Software Plans</span>
            <h2>Flexible Plans for Every Business Size</h2>
            <p>Cloud-hosted or on-premise deployment. Scale as you grow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                name: 'Starter',
                users: 'Up to 50 employees',
                features: ['Attendance Tracking', 'Basic Payroll', 'EPF / SOCSO / EIS', 'Cloud Deployment', 'Email Support'],
                featured: false,
                cta: 'Get Started',
              },
              {
                name: 'Professional',
                users: 'Up to 200 employees',
                features: ['All Starter Features', 'Full HR Module', 'Leave Management', 'Shift Scheduling', 'Mobile App', 'Priority Support', 'Cloud or On-Premise'],
                featured: true,
                cta: 'Most Popular',
              },
              {
                name: 'Enterprise',
                users: 'Unlimited employees',
                features: ['All Professional Features', 'Custom Reports', 'REST API Access', 'Multi-site Dashboard', 'Active Directory SSO', 'SLA + Dedicated Support', 'Hybrid Deployment'],
                featured: false,
                cta: 'Contact Sales',
              },
            ].map(plan => (
              <div key={plan.name} className="size-plan-card" style={plan.featured ? { borderColor: 'var(--secondary)' } : {}}>
                {plan.featured && <div className="plan-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="plan-users">{plan.users}</p>
                <div className="plan-features">
                  {plan.features.map(f => (
                    <div key={f} className="plan-feature">
                      <div className="plan-feature-check">✓</div>
                      {f}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 12 }}>Contact for pricing</div>
                  <Link to="/contact" className={`btn ${plan.featured ? 'btn-secondary' : 'btn-outline-dark'}`} style={{ width: '100%', justifyContent: 'center' }}>
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Not Sure Which Solution Fits You?</h2>
          <p>Our consultants will assess your requirements and recommend the best configuration.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">Talk to an Expert</Link>
            <Link to="/support" className="btn btn-outline btn-lg">Download Brochure</Link>
          </div>
        </div>
      </section>
    </>
  )
}
