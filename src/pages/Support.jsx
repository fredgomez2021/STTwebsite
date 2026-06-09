import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What biometric identification methods does Smartouch support?',
    a: 'Smartouch supports fingerprint, face recognition, palm vein, iris, RFID/Mifare card, PIN, and GPS-based mobile attendance. Multi-factor combinations (card + fingerprint, card + PIN) are also supported for enhanced security.',
  },
  {
    q: 'Can I integrate Smartouch with my existing ERP or payroll system?',
    a: 'Yes. We provide a REST API for integration with SAP, Oracle, Microsoft Dynamics, and other ERP systems. Pre-built connectors are available for popular Malaysian payroll and accounting software. Our team handles integration during implementation.',
  },
  {
    q: 'Is the system compliant with Malaysian statutory requirements?',
    a: 'Absolutely. SmartPayroll auto-calculates EPF, SOCSO, EIS, and PCB contributions. It generates EA Form, E Form, and CP39 for LHDN submission, and supports SIP and HRDC levy computation with full audit trails.',
  },
  {
    q: 'What is the difference between cloud and on-premise deployment?',
    a: 'Cloud (SaaS) deployment requires no server hardware, offers automatic updates, 99.9% uptime SLA, and is accessible from anywhere. On-premise deployment keeps data on your own servers and works without internet dependency. Hybrid combines both — ideal for organisations with data sovereignty requirements.',
  },
  {
    q: 'How long does installation typically take?',
    a: 'A standard single-site deployment (1–5 devices, cloud software) can be completed within 1–3 working days. Multi-site enterprise rollouts are planned in phases and can range from 2 weeks to several months depending on scope.',
  },
  {
    q: 'Is there a mobile app for employees and managers?',
    a: 'Yes. The SmartHR mobile app is available on iOS and Android. Employees can clock-in/out (with GPS geo-fencing), apply for leave, view payslips, and submit claims. Managers can approve leave and access attendance reports on the go.',
  },
  {
    q: 'What support do you offer after installation?',
    a: 'All clients receive phone, email, and WhatsApp technical support during business hours. Cloud subscribers benefit from a 99.9% uptime SLA. Enterprise clients get a dedicated account manager, priority support, and optional on-site maintenance agreements.',
  },
  {
    q: 'Can I manage multiple branch locations from one software?',
    a: 'Yes. Smartouch\'s multi-site management allows you to control unlimited branches from a single dashboard. You can set per-site or organisation-wide policies and generate consolidated reports across all locations.',
  },
  {
    q: 'Do the attendance terminals work offline?',
    a: 'Yes. All hardware terminals store data locally. When connectivity is restored, they automatically sync attendance records to the cloud or server. This ensures no data loss during network outages.',
  },
  {
    q: 'Is there a free trial or demo available?',
    a: 'Yes. We offer free product demonstrations at our office, at your premises, or via online screen-share. Contact our sales team to schedule a demo tailored to your industry and requirements.',
  },
]

const downloads = [
  { name: 'SmartHR 4.x User Manual', product: 'SmartHR', type: 'manual', size: '12.4 MB', date: 'Jun 2026' },
  { name: 'Face Recognition Terminal FT-500 Brochure', product: 'FT-500', type: 'pdf', size: '3.2 MB', date: 'May 2026' },
  { name: 'Fingerprint Terminal AT-200 Quick Start Guide', product: 'AT-200', type: 'manual', size: '2.8 MB', date: 'Apr 2026' },
  { name: 'SmartAttendance v3.5 Software Installer', product: 'SmartAttendance', type: 'exe', size: '87 MB', date: 'Jun 2026' },
  { name: 'Access Control Panel AC-128 Brochure', product: 'AC-128', type: 'pdf', size: '4.1 MB', date: 'Mar 2026' },
  { name: 'Turnstile & Barrier Gate Specifications', product: 'Turnstile', type: 'pdf', size: '5.6 MB', date: 'Feb 2026' },
  { name: 'SmartPayroll 2026 Compliance Update', product: 'SmartPayroll', type: 'exe', size: '45 MB', date: 'Jan 2026' },
  { name: 'AT-200 Fingerprint Terminal Firmware', product: 'AT-200', type: 'zip', size: '18 MB', date: 'May 2026' },
  { name: 'Visitor Management System VMS-Pro Manual', product: 'VMS-Pro', type: 'manual', size: '6.3 MB', date: 'Apr 2026' },
  { name: 'Mobile App Setup Guide (iOS & Android)', product: 'SmartHR App', type: 'manual', size: '1.9 MB', date: 'Jun 2026' },
]

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', product: '', desc: '' })
  const [submitted, setSubmitted] = useState(false)

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
              <span>Support</span>
            </div>
            <h1>Support & Downloads</h1>
            <p>
              Technical resources, software downloads, manuals, and frequently asked
              questions to help you get the most from your Smartouch system.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="section-sm" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="support-cards-grid">
            {[
              { icon: '📞', title: 'Phone Support', desc: '+603-XXXX XXXX\nMon–Fri: 9am–6pm\nSat: 9am–1pm', action: 'Call Now', href: 'tel:+603XXXXXXXX' },
              { icon: '💬', title: 'WhatsApp Support', desc: 'Chat with a technical expert\nvia WhatsApp for quick\nassistance.', action: 'Chat on WhatsApp', href: 'https://wa.me/601XXXXXXXX' },
              { icon: '📧', title: 'Email Support', desc: 'support@smartouch.com.my\nResponse within\n1 business day.', action: 'Send Email', href: 'mailto:support@smartouch.com.my' },
            ].map(c => (
              <div key={c.title} className="support-card">
                <span className="support-card-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{c.desc}</p>
                <a href={c.href} className="btn btn-secondary" style={{ justifyContent: 'center' }}>
                  {c.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Download Centre</span>
            <h2>Software, Manuals & Brochures</h2>
            <p>Download the latest drivers, firmware, user manuals, and product brochures.</p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <table className="downloads-table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Product</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map(d => (
                  <tr key={d.name}>
                    <td style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{d.name}</td>
                    <td>{d.product}</td>
                    <td>
                      <span className={`file-type-badge ${d.type}`}>
                        {d.type.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{d.size}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{d.date}</td>
                    <td>
                      <a href="#" className="download-link">
                        ↓ Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Contact <a href="mailto:support@smartouch.com.my" style={{ color: 'var(--secondary)' }}>support@smartouch.com.my</a> if you cannot find a specific file.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about our products and services.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg
                    className={`faq-chevron ${openFaq === i ? 'open' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TICKET */}
      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="section-header">
            <span className="section-tag">Technical Support</span>
            <h2>Submit a Support Ticket</h2>
            <p>Can't find the answer? Our technical team will respond within 1 business day.</p>
          </div>
          {submitted ? (
            <div className="form-success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              Your ticket has been submitted! We will respond within 1 business day.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 36 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                    required
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Product / System</label>
                <select
                  className="form-control"
                  value={formState.product}
                  onChange={e => setFormState(s => ({ ...s, product: e.target.value }))}
                >
                  <option value="">Select product...</option>
                  <option>SmartHR Software</option>
                  <option>SmartPayroll</option>
                  <option>Fingerprint Terminal</option>
                  <option>Face Recognition Terminal</option>
                  <option>Access Control System</option>
                  <option>CCTV System</option>
                  <option>Mobile App</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Issue Description *</label>
                <textarea
                  className="form-control"
                  placeholder="Describe your issue in detail, including error messages and steps to reproduce..."
                  required
                  style={{ minHeight: 140 }}
                  value={formState.desc}
                  onChange={e => setFormState(s => ({ ...s, desc: e.target.value }))}
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Support Ticket
              </button>
            </form>
          )}
        </div>
      </section>

      {/* WARRANTY */}
      <section className="section-sm" style={{ background: 'var(--bg-blue)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <h3 style={{ marginBottom: 10 }}>Warranty Information</h3>
            <p style={{ maxWidth: 600, margin: '0 auto', color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              All Smartouch hardware products come with a <strong>1-year manufacturer warranty</strong> covering defects in materials and workmanship.
              Extended warranties of 2 or 3 years are available at purchase. Software subscriptions include bug-fix updates and security patches throughout the subscription period.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
