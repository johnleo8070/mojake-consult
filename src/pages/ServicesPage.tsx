import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Shield, Search, Package, Zap } from 'lucide-react';

function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useVisible();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

const serviceModels = [
  { model: 'Temporary Staffing', desc: 'Workers for 1 day to 6 months', best: 'Peak seasons, maternity cover, sick leave' },
  { model: 'Contract-to-Hire', desc: '3–6 month trial before permanent conversion', best: 'Testing fit before long-term commitment' },
  { model: 'Permanent Placement', desc: 'Direct hire recruitment', best: 'Management roles, technical specialists' },
  { model: 'Bulk Recruitment', desc: '50–500 workers deployed within 72 hours', best: 'New factory setup, major expansion, surge' },
];

const complianceData = [
  { obligation: 'PAYE (Pay As You Earn)', service: 'Monthly calculation, remittance to FIRS/State IRS, TCC processing', penalty: '10% penalty + interest + possible prosecution' },
  { obligation: 'Pension Reform Act', service: 'RSA registration, 8%/10% remittance to PFAs', penalty: 'Fine up to ₦500,000 + 6 months imprisonment' },
  { obligation: 'NSITF', service: '1% of monthly payroll remittance', penalty: 'Late payment penalties + lawsuit exposure' },
  { obligation: 'NHF', service: '2.5% of basic salary remittance', penalty: 'Access denial to mortgage facilities' },
];

const searchLevels = [
  { level: 'C-Suite', roles: 'CEO, MD, CFO, COO, Country Manager', timeline: '6–10 weeks' },
  { level: 'Senior Management', roles: 'Plant Manager, HR Director, Supply Chain Head', timeline: '4–8 weeks' },
  { level: 'Technical Specialists', roles: 'Chief Engineer, QA Manager, Production Manager', timeline: '3–6 weeks' },
  { level: 'Mid-Level Professionals', roles: 'Accountants, HR Officers, Sales Managers', timeline: '2–4 weeks' },
  { level: 'Entry Level', roles: 'Graduate trainees, Junior analysts, Admin officers', timeline: '1–3 weeks' },
];

const supplyCategories = [
  { category: 'Raw Materials', examples: 'Industrial chemicals, solvents, acids, bases, additives, APIs', apps: 'Pharmaceutical, chemical processing, food production' },
  { category: 'Packaging Materials', examples: 'Cartons, boxes, labels, shrink wraps, bottles, caps, films', apps: 'Food & beverage, pharmaceuticals, cosmetics, FMCG' },
  { category: 'Chemical Materials', examples: 'Cleaning agents, disinfectants, reagents, lubricants, coolants', apps: 'Equipment maintenance, quality testing, production' },
  { category: 'Production Supplies', examples: 'PPE, safety equipment, maintenance tools, spare parts', apps: 'Worker safety, equipment upkeep, operations' },
];

const whySolutions = [
  { challenge: 'Urgent staffing need', solution: '72-hour bulk deployment capability' },
  { challenge: 'Production material shortage', solution: 'Emergency same-day supply (Ota–Agbara–Lagos)' },
  { challenge: 'Compliance complexity', solution: 'End-to-end statutory management, zero penalties' },
  { challenge: 'High supplier prices', solution: 'Bulk procurement power across client network' },
  { challenge: 'Quality control issues', solution: 'Pre-delivery inspection, COA documentation' },
  { challenge: 'High turnover', solution: 'Retention-focused placement, 6-month guarantee' },
  { challenge: 'Inventory management burden', solution: 'Automated reorder alerts, consignment options' },
  { challenge: 'Multi-location coordination', solution: 'Single point of contact for staffing and supplies' },
];

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* ── Page Header ────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 60%, #152266 100%)' }}
        aria-label="Services page header"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(232,25,44,0.14) 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 40px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div
            className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Comprehensive HR & Supply Solutions
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            End-to-End HR & Supply Solutions{' '}
            <span className="text-gradient-red">for Nigerian Industry</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            From factory floor staffing to raw materials procurement, Mojake Consult delivers verified talent, quality materials, compliance assurance, and operational excellence for manufacturing and enterprise clients.
          </p>
        </div>
      </section>

      {/* ── Service 1: Industrial Staffing ─────────────────────── */}
      <section
        id="industrial"
        className="py-20 md:py-24"
        style={{ background: '#f8f8fc' }}
        aria-labelledby="industrial-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="mirror w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 6px 20px rgba(232,25,44,0.3)' }}
                  >
                    <Users size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8192C' }}>
                    Service 01
                  </span>
                </div>
                <h2
                  id="industrial-heading"
                  className="text-3xl md:text-4xl font-black mb-4"
                  style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
                >
                  Industrial & Manufacturing Staffing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nigeria's manufacturing sector demands reliable, verified, safety-ready workers — often at short notice. Our industrial staffing unit maintains a live database of{' '}
                  <strong style={{ color: '#0D1B4B' }}>5,000+ pre-screened candidates</strong> ready for immediate deployment to factories across Ogun State and Lagos.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['Machine Operators', 'Production Line Workers', 'QC Inspectors', 'Warehouse Staff', 'Forklift Operators', 'HSE Officers', 'Maintenance Staff', 'Production Supervisors'].map((role) => (
                    <div key={role} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: '#E8192C', flexShrink: 0 }} />
                      <span style={{ color: '#374151' }}>{role}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="glass-white mirror rounded-2xl p-5 border"
                  style={{ borderColor: 'rgba(232,25,44,0.15)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} style={{ color: '#E8192C' }} />
                    <span className="text-sm font-bold" style={{ color: '#0D1B4B' }}>Client Success</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Delivered 200 verified machine operators to a leading FMCG manufacturer in 48 hours for emergency peak season demand."
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#E8192C' }}>
                  Service Models
                </h3>
                {serviceModels.map((m, i) => (
                  <div
                    key={m.model}
                    className="glass-white mirror rounded-2xl p-5 card-hover border"
                    style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mirror"
                        style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)' }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-0.5" style={{ color: '#0D1B4B' }}>{m.model}</div>
                        <div className="text-xs text-gray-500 mb-1">{m.desc}</div>
                        <div className="text-xs" style={{ color: '#E8192C' }}>Best for: {m.best}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── Service 2: HR Compliance ─────────────────────────────── */}
      <section
        id="hr-compliance"
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}
        aria-labelledby="hr-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(232,25,44,0.1) 0%, transparent 50%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="mirror w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #152266, #0D1B4B)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Shield size={22} className="text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8192C' }}>Service 02</span>
            </div>
            <h2
              id="hr-heading"
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              HR Management & Compliance Services
            </h2>
            <p className="max-w-3xl mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Navigate Nigeria's complex regulatory landscape with confidence. Our HR compliance experts manage your statutory obligations, eliminating penalties and administrative burden.
            </p>

            {/* Compliance Table */}
            <div className="glass-card mirror rounded-3xl overflow-hidden mb-10">
              <div
                className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider py-4 px-6"
                style={{ background: 'rgba(232,25,44,0.12)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span style={{ color: '#E8192C' }}>Statutory Obligation</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Our Service</span>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Penalty for Non-Compliance</span>
              </div>
              {complianceData.map((row, i) => (
                <div
                  key={row.obligation}
                  className="grid grid-cols-3 py-4 px-6 gap-4 text-sm"
                  style={{
                    borderBottom: i < complianceData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span className="font-semibold text-white">{row.obligation}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{row.service}</span>
                  <span className="text-xs" style={{ color: 'rgba(232,25,44,0.85)' }}>{row.penalty}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: 'Payroll Processing', points: ['Monthly payroll calculation', 'Statutory deductions', 'Payslip generation', 'Bank transfer execution', '7-year archive retention'] },
                { title: 'HR Documentation', points: ['Employment contracts (Labor Act compliant)', 'Employee handbook development', 'Disciplinary procedures', 'Leave management setup'] },
                { title: 'Audit Support', points: ['FIRS tax audit representation', 'Labor inspection preparation', 'PENCOM compliance certification', 'NSITF reconciliation reports'] },
              ].map((col) => (
                <div key={col.title} className="glass-card rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-4 text-sm">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#E8192C' }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Service 3: Executive Search ──────────────────────────── */}
      <section
        id="executive"
        className="py-20 md:py-24"
        style={{ background: '#f8f8fc' }}
        aria-labelledby="exec-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="mirror w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 6px 20px rgba(232,25,44,0.3)' }}
                  >
                    <Search size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8192C' }}>Service 03</span>
                </div>
                <h2
                  id="exec-heading"
                  className="text-3xl md:text-4xl font-black mb-4"
                  style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
                >
                  Executive Search & Professional Recruitment
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Leadership hires determine organizational trajectory. Our executive search practice combines deep sector knowledge, extensive networks, and rigorous assessment to identify transformative talent.
                </p>

                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#0D1B4B' }}>Our Search Process</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Intake Meeting', desc: 'Deep dive into role requirements, culture fit, success metrics' },
                    { step: '02', title: 'Research & Mapping', desc: 'Identify 100+ potential candidates in target companies' },
                    { step: '03', title: 'Outreach & Assessment', desc: 'Discreet approach, competency interviews, psychometric testing' },
                    { step: '04', title: 'Shortlist Presentation', desc: '3–5 verified candidates with detailed assessment reports' },
                    { step: '05', title: 'Interview Coordination', desc: 'Schedule management, feedback collection, offer negotiation' },
                    { step: '06', title: 'Onboarding Support', desc: 'Resignation handling, notice period management, integration check-ins' },
                  ].map((step) => (
                    <div
                      key={step.step}
                      className="flex items-start gap-4 glass-white mirror rounded-xl p-4 border"
                      style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                    >
                      <span
                        className="text-xs font-black flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white mirror"
                        style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', minWidth: '2rem' }}
                      >
                        {step.step}
                      </span>
                      <div>
                        <div className="font-bold text-sm mb-0.5" style={{ color: '#0D1B4B' }}>{step.title}</div>
                        <div className="text-xs text-gray-500">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#E8192C' }}>Search Levels & Timelines</h3>
                <div className="space-y-3 mb-8">
                  {searchLevels.map((lv) => (
                    <div
                      key={lv.level}
                      className="glass-white mirror rounded-2xl p-5 card-hover border"
                      style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm" style={{ color: '#0D1B4B' }}>{lv.level}</span>
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: 'rgba(232,25,44,0.08)', color: '#E8192C' }}
                        >
                          {lv.timeline}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{lv.roles}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── Service 4: Supply Chain ──────────────────────────────── */}
      <section
        id="supply"
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B4B 0%, #152266 100%)' }}
        aria-labelledby="supply-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 80%, rgba(232,25,44,0.12) 0%, transparent 50%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="mirror w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 6px 20px rgba(232,25,44,0.3)' }}
              >
                <Package size={22} className="text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8192C' }}>Service 04</span>
            </div>
            <h2
              id="supply-heading"
              className="text-3xl md:text-4xl font-black text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Supply of Goods & Materials
            </h2>
            <p className="max-w-3xl mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Reliable supply chain solutions for manufacturing operations. We source and deliver quality materials to keep your production lines running without interruption.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {supplyCategories.map((cat) => (
                <div key={cat.category} className="glass-card mirror rounded-2xl p-6 card-hover">
                  <h3 className="font-bold text-white mb-2">{cat.category}</h3>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>{cat.examples}</p>
                  <div
                    className="text-xs px-3 py-1.5 rounded-lg inline-block"
                    style={{ background: 'rgba(232,25,44,0.12)', color: '#E8192C' }}
                  >
                    {cat.apps}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#E8192C' }}>
              Our Supply Advantages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Verified Supplier Network', desc: '50+ vetted manufacturers and distributors across Nigeria and West Africa' },
                { title: 'Quality Assurance', desc: 'Batch testing and COA documentation. Return policy for defective materials' },
                { title: 'Just-In-Time Delivery', desc: 'Scheduled deliveries aligned with your production schedules' },
                { title: 'Emergency Supply', desc: 'Same-day delivery for critical shortages in Ota–Agbara–Lagos corridor' },
                { title: 'Bulk Procurement', desc: 'Cost savings through consolidated purchasing across client network' },
                { title: 'Inventory Management', desc: 'Automated reorder alerts and consignment stock arrangements' },
              ].map((adv) => (
                <div
                  key={adv.title}
                  className="glass-card rounded-xl p-5 border"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={14} style={{ color: '#E8192C' }} />
                    <span className="font-bold text-sm text-white">{adv.title}</span>
                  </div>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{adv.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Service 5: Gig Workforce ─────────────────────────────── */}
      <section
        id="gig"
        className="py-20 md:py-24"
        style={{ background: '#f8f8fc' }}
        aria-labelledby="gig-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="mirror w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0D1B4B, #152266)', border: '1px solid rgba(13,27,75,0.3)' }}
                  >
                    <Zap size={22} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8192C' }}>Service 05</span>
                </div>
                <h2
                  id="gig-heading"
                  className="text-3xl md:text-4xl font-black mb-4"
                  style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
                >
                  Gig Worker & Flexible Workforce Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Scale up or down without the burden of permanent headcount. Our gig worker platform provides verified, on-demand labor for production peaks, events, and project-based needs.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Event staff (ushers, promoters)', 'Warehouse support (loading, packing)', 'Production assistants', 'Cleaning & facility maintenance', 'Drivers & logistics support', '10–100 workers within 24 hours'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: '#E8192C', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'No Employer Liabilities', desc: 'No PAYE, pension obligation, or termination issues', icon: '🛡️' },
                  { title: 'Instant Scaling', desc: '10 to 100 workers within 24 hours', icon: '⚡' },
                  { title: 'Single Invoice', desc: 'Mojake handles all worker payments for you', icon: '📄' },
                  { title: 'Quality Guarantee', desc: 'Replacement guarantee for no-shows or underperformance', icon: '✅' },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="glass-white mirror rounded-2xl p-5 card-hover border"
                    style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                  >
                    <div className="text-2xl mb-3">{b.icon}</div>
                    <div className="font-bold text-sm mb-1" style={{ color: '#0D1B4B' }}>{b.title}</div>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── Industry Solutions ─────────────────────────────────── */}
      <section
        id="industry-solutions"
        className="py-20 md:py-24 bg-white"
        aria-labelledby="industry-solutions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center mb-16">
              <div className="section-divider mx-auto mb-6" />
              <h2
                id="industry-solutions-heading"
                className="text-3xl md:text-4xl font-black mb-4"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Industry <span className="text-gradient-red">Solutions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized staffing and supply chain solutions tailored to the unique operational demands of Nigeria's critical sectors.
              </p>
            </div>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Pharmaceutical & Healthcare',
                icon: '💊',
                points: ['Regulatory affairs specialists', 'Quality assurance officers', 'Production pharmacists', 'Medical representatives', 'Clinical research coordinators'],
                supply: 'APIs, excipients, packaging materials, laboratory reagents, cleaning agents'
              },
              {
                title: 'Food & Beverage',
                icon: '🍶',
                points: ['HACCP-certified production staff', 'Packaging machine operators', 'Quality control technicians', 'Cold chain logistics personnel', 'Sanitation & hygiene officers'],
                supply: 'Food-grade chemicals, packaging films, labels, cleaning agents, laboratory testing kits'
              },
              {
                title: 'Building Materials & Ceramics',
                icon: '🏗️',
                points: ['Kiln operators and technicians', 'Production line supervisors', 'Quality inspectors (tiles/ware)', 'Raw materials handlers', 'Maintenance mechanics'],
                supply: 'Raw clay, glazes, additives, packaging materials, kiln maintenance supplies'
              },
              {
                title: 'Packaging & Consumer Goods',
                icon: '📦',
                points: ['High-speed packaging machine operators', 'Quality control inspectors', 'Finished goods warehouse staff', 'Distribution and logistics coordinators', 'Brand activation promoters'],
                supply: 'Aluminum coils, printing inks, adhesives, flexible films, maintenance lubricants'
              },
              {
                title: 'Chemicals & Industrial Goods',
                icon: '⚗️',
                points: ['Chemical process operators', 'HSE officers & environmental specialists', 'Laboratory technicians', 'Maintenance engineers'],
                supply: 'Industrial solvents, acids, bases, processing chemicals, safety equipment, PPE'
              },
              {
                title: 'Cosmetics & Personal Care',
                icon: '✨',
                points: ['Production line operators', 'Mixing and blending specialists', 'Quality control chemists', 'Packaging line workers'],
                supply: 'Base ingredients, emulsifiers, preservatives, plastic containers, labels, shrink wraps'
              },
              {
                title: 'FMCG & Consumer Goods',
                icon: '🛒',
                points: ['Seasonal scaling workers', 'Distribution and logistics personnel', 'Quality control operators', 'Production line workers'],
                supply: 'Labels, cartons, shrink wraps, secondary packaging materials'
              },
              {
                title: 'Oil & Gas Services',
                icon: '⛽',
                points: ['Technical support engineers', 'Logistics and supply chain personnel', 'HSE officers', 'Maintenance specialists'],
                supply: 'Drilling chemicals, maintenance supplies, industrial PPE, specialized tools'
              }
            ].map((ind) => (
              <Section key={ind.title}>
                <div
                  className="glass-white mirror rounded-2xl p-6 card-hover border h-full flex flex-col"
                  style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                >
                  <div className="text-3xl mb-4">{ind.icon}</div>
                  <h3
                    className="text-lg font-bold mb-4 group-hover:text-red-600 transition-colors"
                    style={{ color: '#0D1B4B' }}
                  >
                    {ind.title}
                  </h3>
                  <div className="flex-1 space-y-2 mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#E8192C' }}>Specialized Roles</div>
                    {ind.points.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(13,27,75,0.4)' }} />
                        <span className="text-gray-600 leading-tight">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl" style={{ background: 'rgba(232,25,44,0.04)', border: '1px solid rgba(232,25,44,0.1)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#E8192C' }}>Supply Scope</div>
                    <p className="text-xs text-gray-700 leading-relaxed">{ind.supply}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Mojake for HR & Supply ───────────────────────────── */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}
        aria-label="Why choose Mojake Consult"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-black text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Mojake for Your{' '}
                <span className="text-gradient-red">HR & Supply Needs</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {whySolutions.map((item) => (
                <div
                  key={item.challenge}
                  className="glass-card mirror rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: '#E8192C' }} />
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.challenge}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>→ {item.solution}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="mirror-button inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-sm"
                style={{
                  background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                  boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                }}
              >
                Request Service Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
