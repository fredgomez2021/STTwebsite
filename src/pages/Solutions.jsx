import { Link } from 'react-router-dom'

const industries = [
  {
    emoji: '🏭',
    name: 'Manufacturing & Industrial',
    desc: 'Factory floor time attendance, rotating shift management, and access control for restricted production zones. Integrate with ERP for seamless payroll.',
    tags: ['Shift Management', 'Zone Access', 'ERP Integration', 'CCTV'],
  },
  {
    emoji: '🛍️',
    name: 'Retail & F&B',
    desc: 'Multi-outlet staff attendance, part-timer management, and mobile clock-in for field staff. Centralised dashboard across all branches.',
    tags: ['Multi-outlet', 'Part-timer', 'Mobile Clock-in', 'Central Dashboard'],
  },
  {
    emoji: '🏨',
    name: 'Hospitality',
    desc: 'Hotel staff attendance, housekeeping schedule management, and access control for guest floors and back-of-house areas.',
    tags: ['Staff Scheduling', 'Guest Floor Access', 'Housekeeping', 'Visitor Mgmt'],
  },
  {
    emoji: '🏫',
    name: 'Education',
    desc: 'Teacher and administrative staff attendance, campus perimeter access control, visitor management for school security.',
    tags: ['Staff Attendance', 'Campus Access', 'Visitor Management', 'Contactless'],
  },
  {
    emoji: '🏥',
    name: 'Healthcare',
    desc: 'Hospital staff shift scheduling, hygienic contactless biometric attendance, and strict access control for pharmacy and sterile areas.',
    tags: ['Contactless', 'Sterile Access', 'Shift Scheduling', 'Palm Vein'],
  },
  {
    emoji: '🏛️',
    name: 'Government & GLC',
    desc: 'High-security multi-factor access control, visitor management, and integrated payroll compliance for statutory reporting requirements.',
    tags: ['High Security', 'Multi-factor Auth', 'Statutory Compliance', 'Audit Trail'],
  },
  {
    emoji: '🏗️',
    name: 'Property & Facilities',
    desc: 'Building access control, contractor and visitor management, CCTV integration, and intercom systems for residential and commercial properties.',
    tags: ['Building Access', 'Contractor Mgmt', 'CCTV', 'Intercom'],
  },
  {
    emoji: '🚛',
    name: 'Logistics & Transportation',
    desc: 'Driver attendance with GPS tracking, depot access control, and GPS-linked mobile attendance for distributed fleet staff.',
    tags: ['Driver Attendance', 'GPS Tracking', 'Depot Access', 'Mobile'],
  },
]

const features = [
  { icon: '📊', title: 'Centralised Dashboard', desc: 'Monitor all sites, attendance, and access events from one unified web dashboard.' },
  { icon: '🔔', title: 'Real-time Alerts', desc: 'Instant notifications for access violations, late attendance, or unauthorised entry.' },
  { icon: '📑', title: 'Compliance Reports', desc: 'Auto-generate EPF, SOCSO, EIS, LHDN statutory reports for every payroll cycle.' },
  { icon: '🔌', title: 'API Integration', desc: 'REST API for seamless connectivity with SAP, Oracle, Microsoft Dynamics, and more.' },
]

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Solutions</span>
            </div>
            <h1>Industry Solutions</h1>
            <p>
              Tailored workforce management and security configurations for every
              industry — from factory floors to government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">By Industry</span>
            <h2>Solutions Built for Your Sector</h2>
            <p>
              We understand that every industry has unique challenges. Our solutions
              are pre-configured and proven for each vertical.
            </p>
          </div>
          <div className="solutions-industry-grid">
            {industries.map(ind => (
              <div key={ind.name} className="solution-card">
                <div className="solution-emoji">{ind.emoji}</div>
                <div className="solution-content">
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <div className="solution-tags">
                    {ind.tags.map(t => (
                      <span key={t} className="solution-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY PLATFORM FEATURES */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Platform Capabilities</span>
            <h2>Enterprise-Grade Features for Every Business</h2>
          </div>
          <div className="grid-4">
            {features.map(f => (
              <div key={f.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: 14 }}>{f.icon}</div>
                <h4 style={{ marginBottom: 8 }}>{f.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT OPTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Deployment</span>
            <h2>Choose Your Deployment Model</h2>
            <p>Every organisation has different data sovereignty and infrastructure needs.</p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '☁️',
                title: 'Cloud (SaaS)',
                pros: ['No server hardware needed', 'Automatic updates', 'Accessible anywhere', '99.9% uptime SLA', 'Automatic backup'],
                best: 'SMEs and organisations without IT infrastructure',
              },
              {
                icon: '🖥️',
                title: 'On-Premise',
                pros: ['Full data control', 'Works offline / LAN only', 'One-time licence option', 'No internet dependency', 'Custom server config'],
                best: 'Regulated industries and data-sensitive organisations',
              },
              {
                icon: '🔀',
                title: 'Hybrid',
                pros: ['Best of both worlds', 'Data sovereignty met', 'Cloud for remote access', 'On-prem core processing', 'Flexible sync'],
                best: 'Enterprises with multi-site and compliance requirements',
              },
            ].map(d => (
              <div key={d.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{d.icon}</div>
                <h3 style={{ marginBottom: 16 }}>{d.title}</h3>
                <div style={{ marginBottom: 20 }}>
                  {d.pros.map(p => (
                    <div key={p} className="plan-feature" style={{ marginBottom: 8 }}>
                      <div className="plan-feature-check">✓</div>
                      <span style={{ fontSize: '0.875rem' }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Best for:</strong> {d.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY BUSINESS SIZE */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">By Business Size</span>
            <h2>Right-Sized for Your Organisation</h2>
          </div>
          <div className="size-plans-grid">
            {[
              {
                icon: '🏪',
                size: 'SME',
                range: '10 – 100 employees',
                focus: 'Affordable, easy-to-deploy solutions',
                items: ['1–3 attendance terminals', 'SmartHR Starter plan', 'Single-site management', 'Standard payroll compliance', 'Cloud deployment recommended'],
              },
              {
                icon: '🏢',
                size: 'Mid-Market',
                range: '100 – 500 employees',
                focus: 'Multi-site with centralised HR',
                items: ['Multiple terminals per site', 'SmartHR Professional', 'Multi-site dashboard', 'Shift scheduling', 'Mobile app + API access'],
                featured: true,
              },
              {
                icon: '🏙️',
                size: 'Enterprise',
                range: '500+ employees',
                focus: 'Custom, integrated, fully managed',
                items: ['Enterprise-wide rollout', 'Custom integrations (ERP/HRMS)', 'SLA-backed support', 'Dedicated account manager', 'Hybrid / on-prem deployment'],
              },
            ].map(plan => (
              <div key={plan.size} className="size-plan-card" style={plan.featured ? { borderColor: 'var(--secondary)' } : {}}>
                {plan.featured && <div className="plan-badge">Most Popular</div>}
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{plan.icon}</div>
                <h3>{plan.size}</h3>
                <p className="plan-users">{plan.range}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--secondary)', fontWeight: 600, marginBottom: 20 }}>{plan.focus}</p>
                <div className="plan-features">
                  {plan.items.map(item => (
                    <div key={item} className="plan-feature">
                      <div className="plan-feature-check">✓</div>
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`btn ${plan.featured ? 'btn-secondary' : 'btn-outline-dark'}`} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Find the Right Solution for Your Industry</h2>
          <p>Our specialists will design the perfect configuration for your specific needs and budget.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">Talk to Our Experts</Link>
            <Link to="/products" className="btn btn-outline btn-lg">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
