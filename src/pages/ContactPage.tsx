import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react';

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

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#ffffff',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <main>
      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 60%, #152266 100%)' }}
        aria-label="Contact page header"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 60% at 80% 60%, rgba(232,25,44,0.13) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <div
            className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            24/7 Support for Manufacturing Clients
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's <span className="text-gradient-red">Start a Conversation</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Ready to transform your workforce or supply chain? Our team is standing by to discuss how Mojake Consult can deliver results for your business.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0D1B4B 0%, #080f2e 100%)' }}
        aria-label="Contact form and information"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info — left 2/5 */}
            <div className="lg:col-span-2 space-y-6">
              <Section>
                <h2
                  className="text-2xl font-black text-white mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Get in Touch
                </h2>

                {/* Info Cards */}
                {[
                  {
                    icon: MapPin,
                    title: 'Head Office',
                    lines: ['Km 38, Lagos Abeokuta Expressway,', 'Ota, Ogun State, Nigeria'],
                    href: 'https://maps.google.com/?q=Km+38+Lagos+Abeokuta+Expressway+Ota+Ogun+State+Nigeria',
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    lines: ['+2347019883073'],
                    href: 'tel:+2347019883073',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    lines: ['mail@mojakeconsult.com', 'careers@mojakeconsult.com'],
                    href: 'mailto:mail@mojakeconsult.com',
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    lines: ['Monday–Friday: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 2:00 PM (by appointment)', '24/7 for manufacturing client emergencies'],
                    href: null,
                  },
                ].map(({ icon: Icon, title, lines, href }) => (
                  <div
                    key={title}
                    className="glass-card mirror rounded-2xl p-5 flex items-start gap-4 mb-4"
                  >
                    <div
                      className="mirror w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)' }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#E8192C' }}>
                        {title}
                      </div>
                      {lines.map((line) =>
                        href ? (
                          <a
                            key={line}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="block text-sm hover:text-white transition-colors"
                            style={{ color: 'rgba(255,255,255,0.7)' }}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="space-y-3 mt-8">
                  <a
                    href="https://wa.me/2347019883073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mirror-button flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Chat
                  </a>
                  <a
                    href="tel:+2347019883073"
                    className="mirror-button flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 4px 20px rgba(232,25,44,0.3)' }}
                  >
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </Section>
            </div>

            {/* Contact Form — right 3/5 */}
            <div className="lg:col-span-3">
              <Section>
                <div className="glass-card mirror rounded-3xl p-8 md:p-10">
                  {!submitted ? (
                    <>
                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Send Us a Message
                      </h3>
                      <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        Fill out the form below and our team will get back to you within 24 hours.
                      </p>
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                              Full Name *
                            </label>
                            <input
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              placeholder="John Adeyemi"
                              style={inputStyle}
                              className="focus:border-red-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                              Email Address *
                            </label>
                            <input
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                              style={inputStyle}
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                              Company Name
                            </label>
                            <input
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your Company Ltd"
                              style={inputStyle}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                              Phone Number
                            </label>
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+234 701 234 5678"
                              style={inputStyle}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Service Interest *
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, cursor: 'pointer' }}
                          >
                            <option value="" style={{ background: '#0D1B4B' }}>Select a service...</option>
                            <option value="industrial-staffing" style={{ background: '#0D1B4B' }}>Industrial & Manufacturing Staffing</option>
                            <option value="hr-compliance" style={{ background: '#0D1B4B' }}>HR Management & Compliance</option>
                            <option value="executive-search" style={{ background: '#0D1B4B' }}>Executive Search & Recruitment</option>
                            <option value="supply-chain" style={{ background: '#0D1B4B' }}>Supply of Goods & Materials</option>
                            <option value="gig-workforce" style={{ background: '#0D1B4B' }}>Gig Worker & Flexible Workforce</option>
                            <option value="all-services" style={{ background: '#0D1B4B' }}>All Services / Comprehensive Partnership</option>
                          </select>
                        </div>
                        <div className="mb-6">
                          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your requirements — number of workers needed, materials, timeline, location, etc."
                            style={{ ...inputStyle, resize: 'vertical' }}
                          />
                        </div>
                        {error && (
                          <div className="mb-4 px-4 py-3 rounded-xl text-sm font-medium" style={{ background: 'rgba(232,25,44,0.15)', color: '#ff6b7a', border: '1px solid rgba(232,25,44,0.3)' }}>
                            ⚠️ {error}
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={loading}
                          className="mirror-button w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm transition-all hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{
                            background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                            boxShadow: '0 6px 25px rgba(232,25,44,0.4)',
                          }}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={15} /> Send Message
                            </>
                          )}
                        </button>
                        <p className="text-xs text-center mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                          Your information is secure and will never be shared. We respond within 24 hours.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div
                        className="mirror w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 30px rgba(232,25,44,0.4)' }}
                      >
                        <CheckCircle size={36} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Message Sent!
                      </h3>
                      <p className="mb-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Thank you, <strong className="text-white">{form.name}</strong>! We've received your enquiry.
                      </p>
                      <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Our team will respond within 24 hours. For urgent matters, call us directly.
                      </p>
                      <a
                        href="tel:+2347019883073"
                        className="mirror-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm"
                        style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)' }}
                      >
                        <Phone size={15} /> Call +2347019883073
                      </a>
                    </div>
                  )}
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ─────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: '#f8f8fc' }}
        aria-label="Office location"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div
              className="glass-white mirror rounded-3xl overflow-hidden border"
              style={{ borderColor: 'rgba(13,27,75,0.07)', height: '320px' }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(13,27,75,0.04) 0%, rgba(232,25,44,0.04) 100%)' }}
              >
                <MapPin size={48} style={{ color: '#E8192C', marginBottom: 16 }} />
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0D1B4B' }}>Km 38, Lagos Abeokuta Expressway</h3>
                <p className="text-sm text-gray-500 mb-4">Ota, Ogun State, Nigeria</p>
                <a
                  href="https://maps.google.com/?q=Km+38+Lagos+Abeokuta+Expressway+Ota+Ogun+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mirror-button flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
