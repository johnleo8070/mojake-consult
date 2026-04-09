import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Briefcase } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Industrial Staffing', path: '/services#industrial' },
      { label: 'HR Compliance', path: '/services#hr-compliance' },
      { label: 'Executive Search', path: '/services#executive' },
      { label: 'Supply Chain', path: '/services#supply' },
      { label: 'Gig Workforce', path: '/services#gig' },
      { label: 'Industry Solutions', path: '/services#industry-solutions' },
    ]
  },
  { label: 'Businesses & Orgs', path: '/businesses-organizations' },
  { label: 'Our Team', path: '/our-team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:block text-xs py-2 px-6"
        style={{ background: 'linear-gradient(90deg, #080f2e 0%, #0D1B4B 100%)', color: 'rgba(255,255,255,0.75)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2347019883073"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} />
              <span>+2347019883073</span>
            </a>
            <a
              href="mailto:mail@mojakeconsult.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={11} />
              <span>mail@mojakeconsult.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon–Fri: 8AM–6PM &nbsp;|&nbsp; 24/7 Emergency Support</span>
            <span className="w-px h-3 bg-white/20" />
            <span>Ota, Ogun State, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-white shadow-lg shadow-navy/10'
          : 'bg-transparent'
          }`}
        style={
          !scrolled
            ? { background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid rgba(13,27,75,0.08)' }
            : undefined
        }
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Mojake Consult Home">
            <Logo variant="navbar" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path} className="group relative">
                <Link
                  to={link.path}
                  className={`relative flex items-center px-2 lg:px-3 py-2 text-[13px] lg:text-sm font-medium rounded-lg transition-all duration-200 ${isActive(link.path)
                    ? 'text-red-600'
                    : 'text-navy hover:text-red-600'
                    }`}
                  style={{
                    color: isActive(link.path) ? '#E8192C' : '#0D1B4B',
                  }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform" />}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    style={{ background: '#E8192C' }}
                  />
                </Link>

                {link.dropdown && (
                  <div className="absolute left-0 top-full mx-auto mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl border border-gray-100 py-2 overflow-hidden z-[100]">
                    {link.dropdown.map(drop => (
                      <a href={drop.path} key={drop.path} className="block px-4 py-2.5 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50/80 transition-colors">
                        {drop.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/apply"
              className="mirror-button flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                boxShadow: '0 4px 15px rgba(232,25,44,0.3)',
              }}
            >
              <Briefcase size={14} />
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#0D1B4B' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid rgba(13,27,75,0.08)' }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      setMobileDropdownOpen(!mobileDropdownOpen);
                    }
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path)
                    ? 'text-white'
                    : 'text-navy hover:bg-gray-50'
                    }`}
                  style={
                    isActive(link.path)
                      ? { background: 'linear-gradient(135deg, #0D1B4B 0%, #E8192C 100%)', color: '#fff' }
                      : { color: '#0D1B4B' }
                  }
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={16} className={`${isActive(link.path) ? "opacity-70" : ""} transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {link.dropdown && (
                  <div className={`pl-4 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-96 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'}`}>
                    <div className="border-l-2 border-red-100 ml-6 space-y-1">
                      {link.dropdown.map(drop => (
                        <a href={drop.path} key={drop.path} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50/50 transition-colors">
                          {drop.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                to="/apply"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white text-center justify-center mirror-button"
                style={{ background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)' }}
              >
                <Briefcase size={14} /> Apply Now
              </Link>
              <a
                href="mailto:mail@mojakeconsult.com"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-center justify-center border"
                style={{ color: '#0D1B4B', borderColor: 'rgba(13,27,75,0.2)' }}
              >
                <Mail size={14} /> mail@mojakeconsult.com
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
