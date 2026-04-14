import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import Logo from './Logo';

const services = [
  { label: 'Industrial Staffing', path: '/services#industrial' },
  { label: 'HR Compliance & Payroll', path: '/services#hr-compliance' },
  { label: 'Executive Search', path: '/services#executive' },
  { label: 'Supply of Goods', path: '/services#supply' },
  { label: 'Gig Workforce', path: '/services#gig' },
];

const companyLinks = [
  { label: 'About Company', path: '/about' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'For Employers', path: '/employers' },
  { label: 'Candidates & Jobseekers', path: '/candidates-jobseekers' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #080f2e 0%, #0D1B4B 100%)' }}>
      {/* CTA Band */}
      <div
        className="relative overflow-hidden noise"
        style={{
          background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 50%, #8a0d17 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you need 50 production workers for tomorrow's shift or a comprehensive HR transformation strategy, Mojake Consult delivers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="mirror-button flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-red-700 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="#brochure"
                className="glass flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white border border-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                Download Service Brochure
              </a>
              <a
                href="tel:+2347019883073"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white/90 border border-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone size={14} /> Call: +2347019883073
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="footer" className="mb-6" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Nigeria's leading HR consulting and industrial supply firm. Delivering verified talent, quality materials, and compliance excellence since 2019.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <LinkedinIcon size={16} />, href: 'https://linkedin.com/company/mojakeconsult', label: 'LinkedIn' },
                { icon: <XIcon size={15} />, href: '#', label: 'X (Twitter)' },
                { icon: <FacebookIcon size={16} />, href: '#', label: 'Facebook' },
                { icon: <InstagramIcon size={16} />, href: 'https://www.instagram.com/mojakeconsult?igsh=c21ucXJrc3Bnd2Np', label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass-card w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:-translate-y-1 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: '#E8192C' }}>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 text-sm transition-all group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform" style={{ color: '#E8192C' }} />
                    <span className="group-hover:text-white transition-colors">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: '#E8192C' }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-2 text-sm transition-all group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform" style={{ color: '#E8192C' }} />
                    <span className="group-hover:text-white transition-colors">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: '#E8192C' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#E8192C' }} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Km 38, Lagos Abeokuta Expressway,<br />Ota, Ogun State, Nigeria
                </span>
              </li>
              <li>
                <a
                  href="tel:+2347019883073"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <Phone size={14} style={{ color: '#E8192C' }} />
                  +2347019883073
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@mojakeconsult.com"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <Mail size={14} style={{ color: '#E8192C' }} />
                  mail@mojakeconsult.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@mojakeconsult.com"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <Mail size={14} style={{ color: '#E8192C' }} />
                  careers@mojakeconsult.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#E8192C' }} />
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <div>Mon–Fri: 8:00AM – 6:00PM</div>
                  <div className="text-xs mt-1" style={{ color: '#E8192C' }}>24/7 for client emergencies</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
        >
          <p>© {new Date().getFullYear()} Mojake Consult Limited. All rights reserved. RC No. [Registered]</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
