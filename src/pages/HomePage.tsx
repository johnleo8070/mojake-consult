import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import {
  ArrowRight, CheckCircle, Users, Package, Shield, Clock,
  Award, MapPin, ChevronRight, Star,
  Factory, Briefcase, Search
} from 'lucide-react';

/* ── Intersection Observer hook ── */
function useVisible(threshold = 0.15) {
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

/* ── Animated Counter ── */
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useVisible(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / 60);
    const t = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [visible, end]);
  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const services = [
  {
    icon: Factory,
    title: 'Industrial & Manufacturing Staffing',
    desc: 'End-to-end workforce solutions for Nigeria\'s manufacturing sector. Machine operators, production supervisors, quality control specialists deployed within 72 hours.',
    tags: ['Temporary Staffing', 'Bulk Recruitment', 'Shift Management'],
    href: '/services#industrial',
    color: '#E8192C',
  },
  {
    icon: Shield,
    title: 'HR Management & Compliance',
    desc: 'Navigate Nigeria\'s complex regulatory landscape. Full FIRS, PENCOM, NSITF, and NHF compliance automation eliminating penalties and administrative burden.',
    tags: ['Payroll Outsourcing', 'Tax Compliance', 'Pension Admin'],
    href: '/services#hr-compliance',
    color: '#0D1B4B',
  },
  {
    icon: Search,
    title: 'Executive Search & Recruitment',
    desc: 'Headhunting expertise for specialized roles. C-suite to technical specialists—we identify transformative talent that drives business growth.',
    tags: ['C-Suite Search', 'Technical Talent', 'Healthcare'],
    href: '/services#executive',
    color: '#E8192C',
  },
  {
    icon: Package,
    title: 'Supply of Goods & Materials',
    desc: 'Reliable supply chain for manufacturing operations. Raw materials, packaging, chemicals, and PPE delivered on time with full quality certification.',
    tags: ['Raw Materials', 'Packaging', 'Chemicals'],
    href: '/services#supply',
    color: '#0D1B4B',
  },
  {
    icon: Users,
    title: 'Gig Worker & Flexible Workforce',
    desc: 'Scale up or down without permanent headcount burden. On-demand verified labor for production peaks, events, and project-based needs within 24 hours.',
    tags: ['Event Staff', 'Warehouse Support', 'Production Assist'],
    href: '/services#gig',
    color: '#E8192C',
  },
  {
    icon: Briefcase,
    title: 'HR Documentation & Consulting',
    desc: 'Employment contract drafting, employee handbooks, disciplinary procedures, and leave management systems—all compliant with Nigerian Labor Act.',
    tags: ['Contracts', 'Handbooks', 'Labor Law'],
    href: '/services',
    color: '#0D1B4B',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Lives Improved Through Placements', icon: Users },
  { value: 50, suffix: '+', label: 'Manufacturing Clients Served', icon: Factory },
  { value: 5000, suffix: '+', label: 'Pre-Screened Candidates in Database', icon: Briefcase },
  { value: 72, suffix: 'hrs', label: 'Bulk Deployment Turnaround', icon: Clock },
  { value: 0, suffix: '', prefix: '₦0', label: 'Compliance Penalties for Our Clients', icon: Shield },
  { value: 5, suffix: ' Yrs', label: 'Industry Excellence', icon: Award },
];

const comparison = [
  { feature: 'Industry Focus', traditional: 'Generic across all sectors', mojake: 'Manufacturing & industrial specialization' },
  { feature: 'Location', traditional: 'Lagos-only operations', mojake: 'Ota-based, 15-min response to Agbara/Ogun factories' },
  { feature: 'Compliance', traditional: 'Basic payroll processing', mojake: 'Full FIRS/PENCOM/NSITF automation' },
  { feature: 'Talent Verification', traditional: 'CV screening only', mojake: 'Skills assessment + safety cert + background checks' },
  { feature: 'Supply Chain', traditional: 'No procurement capability', mojake: 'Raw materials, packaging, chemicals delivered' },
  { feature: 'Support Hours', traditional: '9–5 Lagos office', mojake: '24/7 on-site support for factory clients' },
];


const coverage = [
  { zone: 'Primary', locations: ['Ota, Ogun State – HQ', 'Agbara Industrial Estate (15-min)', 'Ogun Guangdong Free Trade Zone', 'Lagos – Ikeja, Apapa, Lekki', 'Abeokuta Corridor'] },
  { zone: 'National', locations: ['Abuja (FCT industrial zones)', 'Port Harcourt (Onne, Trans Amadi)', 'Ibadan, Kano, Kaduna'] },
  { zone: 'West Africa 2026+', locations: ['Ghana – Tema Free Zones', 'Côte d\'Ivoire – Abidjan hub'] },
];

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

export default function HomePage() {
  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center noise overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 55%, #152266 100%)',
        }}
        aria-label="Hero section"
      >
        {/* Decorative Orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
        />

        {/* Geometric Lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] rotate-[-15deg] pointer-events-none">
          <Logo variant="generic" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-up">
              {/* Badge */}
              <div
                className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-border-pulse"
                style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Nigeria's #1 Industrial HR & Supply Partner
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Transform Your{' '}
                <span className="relative inline-block">
                  <span className="text-gradient-red">Workforce</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #E8192C, transparent)' }}
                  />
                </span>{' '}
                &amp; Supply Chain
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.72)' }}>
                From deploying machine operators within 72 hours to providing C-suite executives, ensuring payroll compliance, and supplying raw materials, Mojake Consult offers Nigeria’s most complete HR and industrial solutions.
              </p>

              {/* Key Points */}
              <ul className="space-y-3 mb-10">
                {[
                  'Over 5000 pre screened industrial candidates ready for deployment',
                  'Full FIRS, PENCOM & NSITF compliance — zero penalties guaranteed',
                  '15-minute response to Agbara & Ogun industrial corridor',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#E8192C' }} />
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="mirror-button flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                    boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                  }}
                >
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="glass flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm border border-white/20 transition-all hover:border-white/40 hover:-translate-y-1"
                >
                  Explore Services <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — Glass Info Cards */}
            <div className="relative animate-scale-in hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Workers Deployed', value: '500+', sub: 'Since 2019', color: '#E8192C' },
                  { label: 'Bulk Deployment', value: '72hrs', sub: '50–500 workers', color: '#ffffff' },
                  { label: 'Compliance Rate', value: '100%', sub: 'Zero penalties', color: '#E8192C' },
                  { label: 'Coverage', value: 'West Africa', sub: 'Ota → Lagos → Beyond', color: '#ffffff' },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="glass-card mirror rounded-2xl p-6 card-hover"
                  >
                    <div
                      className="text-3xl font-black mb-1"
                      style={{ color: card.color === '#ffffff' ? '#ffffff' : '#E8192C' }}
                    >
                      {card.value}
                    </div>
                    <div className="text-sm font-semibold text-white mb-0.5">{card.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{card.sub}</div>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div
                className="glass-card mirror absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl animate-float"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg mirror"
                    style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)' }}
                  >
                    ⭐
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Trusted Partner</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>Ota Industrial Zone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ═══ STATS BAR ══════════════════════════════════════════════ */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0D1B4B 0%, #152266 50%, #0D1B4B 100%)' }}
        aria-label="Key statistics"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(232,25,44,0.3) 0px, rgba(232,25,44,0.3) 1px, transparent 1px, transparent 120px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl md:text-3xl font-black mb-1"
                  style={{ color: '#E8192C' }}
                >
                  <Counter end={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WELCOME & APPROACH ═════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden" aria-label="Welcome and Approach">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div
                className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                style={{ color: '#E8192C', background: 'rgba(232,25,44,0.05)', borderColor: 'rgba(232,25,44,0.1)' }}
              >
                Welcome to Mo-Jake Consult
              </div>
              <h2
                className="text-3xl md:text-5xl font-black mb-6 leading-tight"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Drive Growth and Achieve Your Business Goals
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                Finding and managing the right talent is crucial for the success of any organization. Here at Mo-Jake Consult, we help you build a valuable and long-lasting business with the right human resources and great management options that maximize your business potential and help you achieve business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/services"
                  className="mirror-button px-8 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-1 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #0D1B4B 0%, #152266 100%)', boxShadow: '0 8px 30px rgba(13,27,75,0.2)' }}
                >
                  For Employers
                </Link>
                <Link
                  to="/careers"
                  className="mirror-button px-8 py-3.5 rounded-xl font-bold text-white text-sm hover:-translate-y-1 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)', boxShadow: '0 8px 30px rgba(232,25,44,0.3)' }}
                >
                  Candidates &amp; Jobseekers
                </Link>
              </div>
            </div>
          </Section>

          <div className="grid lg:grid-cols-2 gap-8 mt-16 items-stretch">
            <Section>
              <div className="glass-card mirror rounded-3xl p-8 lg:p-12 border h-full" style={{ background: 'rgba(13,27,75,0.02)', borderColor: 'rgba(13,27,75,0.05)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 mirror" style={{ background: 'linear-gradient(135deg, #0D1B4B, #152266)' }}>
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-6" style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}>Our Approach</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#E8192C' }}>Partnering with you</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We believe in establishing a true partnership with our clients. We take the time to understand your company culture, values, and specific requirements to ensure we find the ideal candidates who align with your organization’s goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#E8192C' }}>Extensive Talent Pool</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      With our vast network and access to a diverse pool of talent, we have the ability to identify individuals with the right skills, experience, and qualifications. Our comprehensive screening processes ensure that only the most suitable candidates are presented to you.
                    </p>
                  </div>
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-sm font-bold hover:gap-3 transition-all uppercase tracking-wider" style={{ color: '#E8192C' }}>
                  Know More <ChevronRight size={16} />
                </Link>
              </div>
            </Section>

            <Section>
              <div className="glass-card mirror rounded-3xl p-8 lg:p-12 border h-full flex flex-col justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
                <h3 className="text-3xl font-black mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Us ?</h3>
                <p className="text-white/80 text-lg leading-relaxed relative z-10">
                  Our commitment to your success sets us apart, as we strive to unleash the full potential of your business through proven strategies and exceptional service from a team of highly experienced personnel with a network of only the best professionals.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center mb-16">
              <div className="section-divider mx-auto mb-6" />
              <h2
                id="services-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-5"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Comprehensive HR & Supply Solutions{' '}
                <span className="text-gradient-red">for Modern Businesses</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                From factory floor staffing to C-suite placements, payroll compliance to raw materials procurement — one partner for every operational need.
              </p>
            </div>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Section key={svc.title}>
                  <Link
                    to={svc.href}
                    className="group block h-full rounded-2xl p-7 card-hover transition-all duration-300 border"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      borderColor: 'rgba(13,27,75,0.08)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="mirror w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{
                        background: i % 2 === 0
                          ? 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)'
                          : 'linear-gradient(135deg, #0D1B4B 0%, #152266 100%)',
                        boxShadow: i % 2 === 0
                          ? '0 6px 20px rgba(232,25,44,0.25)'
                          : '0 6px 20px rgba(13,27,75,0.25)',
                      }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    <h3
                      className="text-lg font-bold mb-3 group-hover:text-red-600 transition-colors"
                      style={{ color: '#0D1B4B' }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{svc.desc}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: 'rgba(13,27,75,0.06)',
                            color: '#0D1B4B',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                      style={{ color: '#E8192C' }}
                    >
                      Learn More <ArrowRight size={13} />
                    </div>
                  </Link>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY MOJAKE ═════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}
        aria-labelledby="why-heading"
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at right, rgba(232,25,44,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="text-center mb-14">
              <div className="section-divider mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #E8192C, rgba(232,25,44,0.3))' }} />
              <h2
                id="why-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Mojake Difference:{' '}
                <span className="text-gradient-red">Partnership, Precision, Performance</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
                See how Mojake Consult outperforms traditional agencies across every critical dimension.
              </p>
            </div>
          </Section>

          {/* Comparison Table — Glass + Mirror */}
          <Section>
            <div className="glass-card mirror rounded-3xl overflow-hidden">
              {/* Header */}
              <div
                className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider py-4 px-6"
                style={{ background: 'rgba(232,25,44,0.15)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>Feature</span>
                <span className="text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>Traditional Agencies</span>
                <span className="text-center" style={{ color: '#E8192C' }}>Mojake Consult</span>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 py-4 px-6 items-center text-sm"
                  style={{
                    borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span className="font-semibold text-white">{row.feature}</span>
                  <span className="text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {row.traditional}
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={14} style={{ color: '#E8192C', flexShrink: 0 }} />
                    <span className="font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {row.mojake}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>


      {/* ═══ GEOGRAPHIC COVERAGE ════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B4B 0%, #152266 100%)' }}
        aria-labelledby="coverage-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(232,25,44,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="text-center mb-14">
              <div className="section-divider mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #E8192C, rgba(232,25,44,0.3))' }} />
              <h2
                id="coverage-heading"
                className="text-3xl md:text-4xl font-black text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                From <span className="text-gradient-red">Ota</span> to West Africa
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Strategic coverage across Nigeria's industrial corridor and beyond</p>
            </div>
          </Section>

          <div className="grid md:grid-cols-3 gap-6">
            {coverage.map((zone, i) => (
              <Section key={zone.zone}>
                <div className="glass-card mirror rounded-2xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold mirror"
                      style={{
                        background: i === 0
                          ? 'linear-gradient(135deg, #E8192C, #b8111f)'
                          : 'linear-gradient(135deg, #152266, #0D1B4B)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-white font-bold">{zone.zone}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {zone.locations.map((loc) => (
                      <li key={loc} className="flex items-start gap-2">
                        <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#E8192C' }} />
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES WE SERVE ════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden" aria-labelledby="home-industries-heading">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                id="home-industries-heading"
                className="text-3xl md:text-5xl font-black mb-4"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Industries <span className="text-gradient-red">We Serve</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Empowering Nigeria’s core economic sectors with robust workforce flexibility and uncompromised supply chain solutions.
              </p>
            </div>
          </Section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Pharma & Healthcare', icon: '💊' },
              { name: 'Food & Beverage', icon: '🍶' },
              { name: 'Building Materials', icon: '🏗️' },
              { name: 'FMCG Fast Moving', icon: '🛒' },
              { name: 'Packaging & Goods', icon: '📦' },
              { name: 'Chemicals & Ind.', icon: '⚗️' },
              { name: 'Oil & Gas', icon: '⛽' },
              { name: 'Cosmetics', icon: '✨' },
            ].map((ind) => (
              <Section key={ind.name}>
                <Link
                  to="/services#industry-solutions"
                  className="glass-white mirror rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full card-hover border group"
                  style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{ind.icon}</div>
                  <h3 className="text-sm font-bold text-gray-800">{ind.name}</h3>
                </Link>
              </Section>
            ))}
          </div>

          <Section>
            <div className="mt-12 text-center">
              <Link to="/services#industry-solutions" className="text-red-600 font-bold hover:underline inline-flex items-center gap-2 text-sm uppercase tracking-wider">
                View full industry solutions <ArrowRight size={14} />
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* ═══ WHY WE ARE DIFFERENT ═══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden" aria-label="Why we are different">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-5xl font-black mb-4"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Why We <span className="text-gradient-red">Are Different</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#E8192C' }}>
                We are diverse. We are efficient. We deliver, all the time.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The services we provide are founded on a strong and culturally diverse network of individuals and organizations, and backed every step of the way by the most competent methods of and software for data analysis to ensure returns of only the highest quality.
              </p>
            </div>
          </Section>

          <div className="grid md:grid-cols-2 gap-8">
            <Section>
              <div className="glass-white mirror rounded-3xl p-8 md:p-10 border h-full card-hover" style={{ borderColor: 'rgba(13,27,75,0.07)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mirror" style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 20px rgba(232,25,44,0.3)' }}>
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0D1B4B' }}>Our Network</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Tap into our expansive network of industry professionals and experts. We connect you with a wealth of talent, knowledge, and opportunities to enable you spend your time making decisions that fuel your business growth and success.
                </p>
              </div>
            </Section>

            <Section>
              <div className="glass-white mirror rounded-3xl p-8 md:p-10 border h-full card-hover" style={{ borderColor: 'rgba(13,27,75,0.07)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mirror" style={{ background: 'linear-gradient(135deg, #0D1B4B, #152266)', boxShadow: '0 8px 20px rgba(13,27,75,0.3)' }}>
                  <Search size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0D1B4B' }}>Our Data &amp; Software</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Drive successful hiring and efficient business management with cutting-edge software and data analysis tools, empowering you to effectively identify, recruit, and optimize human or product resources aligned with your specific objectives.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ═══ OUR REVIEWS ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-section-light" aria-label="Client success stories">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center mb-14">
              <div className="section-divider mx-auto mb-6" />
              <h2
                className="text-3xl md:text-5xl font-black mb-4"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Our <span className="text-gradient-red">Reviews</span>
              </h2>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(232,25,44,0.1)' }}>
                <Star size={16} fill="#E8192C" style={{ color: '#E8192C' }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#E8192C' }}>Highest satisfaction rate</span>
              </div>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Mojake Consult Limited is steadily on ground to meet the department' personnel needs",
                author: 'Gbenga Odujebe',
                company: 'Project and Facility Manager',
                stars: 5,
              },
              {
                quote: 'Mojake staffs are diligent. I feel very comfortable to work with them.',
                author: 'Paschal Ishiwu',
                company: 'Production Supervisor',
                stars: 5,
              },
              {
                quote: 'Zero compliance penalties across 5 years. Saved us ₦12M in avoided FIRS fines through proactive remediation. Mojake is indispensable.',
                author: 'CEO',
                company: 'Pharmaceutical Manufacturer',
                stars: 5,
              },
            ].map((t) => (
              <Section key={t.author}>
                <div
                  className="glass-white mirror rounded-3xl p-8 h-full card-hover border"
                  style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                >
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={16} fill="#E8192C" style={{ color: '#E8192C' }} />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 mb-8 italic font-serif">"{t.quote}"</p>
                  <div className="border-t pt-5" style={{ borderColor: 'rgba(13,27,75,0.08)' }}>
                    <div className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#0D1B4B' }}>{t.author}</div>
                    <div className="text-xs text-gray-500 font-semibold">{t.company}</div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
