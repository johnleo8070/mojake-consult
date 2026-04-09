import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, ArrowRight, Briefcase, TrendingUp, Heart, BookOpen, CheckCircle, Mail, Phone } from 'lucide-react';

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

const jobs: any[] = [];

const evp = [
  { icon: TrendingUp, title: 'Growth Trajectory', desc: 'From 10-person team to West Africa expansion. Early employees shape our culture and advance rapidly.' },
  { icon: Briefcase, title: 'Innovation Exposure', desc: 'Work on diversified HR and supply solutions solving real problems for 500+ workers and 50+ manufacturing clients.' },
  { icon: Heart, title: 'Meaningful Impact', desc: 'Every placement changes a life. Every material delivery keeps a factory running. Our work matters.' },
  { icon: Clock, title: 'Work-Life Balance', desc: 'Ota location = no Lagos traffic. Flexible hours for operational roles. Family-friendly policies.' },
  { icon: BookOpen, title: 'Continuous Learning', desc: 'Monthly training budgets. CIPM, SHRM, supply chain, and technical certification sponsorships.' },
  { icon: MapPin, title: 'Regional Impact', desc: 'Be part of West Africa\'s expansion story. Grow with us into Ghana, Côte d\'Ivoire, and beyond.' },
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 60%, #152266 100%)' }}
        aria-label="Careers page header"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 70% at 85% 40%, rgba(232,25,44,0.14) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div
              className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Join Our Team {jobs.length > 0 ? `— ${jobs.filter((j: any) => j.urgent).length} Urgent Opening${jobs.filter((j: any) => j.urgent).length !== 1 ? 's' : ''}` : '— Opportunities Coming Soon'}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Build Your Career with{' '}
              <span className="text-gradient-red">Nigeria's HR & Supply Innovators</span>
            </h1>
            <p className="text-lg md:text-xl mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
              At Mojake Consult, we don't just fill jobs — we build futures. Join a team that's transforming how Nigeria's manufacturing sector hires, manages, and sources critical supplies.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: '🎯', label: '500+ lives improved through placements' },
                { icon: '🚀', label: 'Startup to West Africa expansion' },
                { icon: '🏆', label: 'Meritocratic & client-focused culture' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="#openings"
                className="mirror-button inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 25px rgba(232,25,44,0.4)' }}
              >
                Go to Job Openings <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVP Strip ───────────────────────────────────────────── */}
      <section className="py-16" style={{ background: '#f8f8fc' }} aria-label="Why work at Mojake">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center mb-12">
              <div className="section-divider mx-auto mb-6" />
              <h2
                className="text-2xl md:text-3xl font-black mb-3"
                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
              >
                Why Join <span className="text-gradient-red">Mojake?</span>
              </h2>
            </div>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {evp.map((item, i) => {
              const Icon = item.icon;
              return (
                <Section key={item.title}>
                  <div
                    className="glass-white mirror rounded-2xl p-6 card-hover border h-full"
                    style={{ borderColor: 'rgba(13,27,75,0.07)' }}
                  >
                    <div
                      className="mirror w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        background: i % 2 === 0
                          ? 'linear-gradient(135deg, #E8192C, #b8111f)'
                          : 'linear-gradient(135deg, #0D1B4B, #152266)',
                      }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#0D1B4B' }}>{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Job Listings ────────────────────────────────────────── */}
      <section
        id="openings"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}
        aria-labelledby="jobs-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse at 90% 10%, rgba(232,25,44,0.1) 0%, transparent 50%)' }}
        />
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <Section>
            <div className="text-center mb-12">
              <h2
                id="jobs-heading"
                className="text-3xl md:text-4xl font-black text-white mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Current <span className="text-gradient-red">Openings</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                {jobs.length} positions available across Ota, Lagos, and remote
              </p>
            </div>
          </Section>

          <div className="space-y-5">
            {jobs.length > 0 ? jobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <Section key={job.id}>
                  <div
                    className="glass-card mirror rounded-2xl overflow-hidden border transition-all duration-300"
                    style={{
                      borderColor: isExpanded ? 'rgba(232,25,44,0.3)' : 'rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Job Header */}
                    <button
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                      className="w-full text-left p-6 md:p-7"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div
                            className="mirror w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: job.color === '#E8192C'
                                ? 'linear-gradient(135deg, #E8192C, #b8111f)'
                                : 'linear-gradient(135deg, #152266, #0D1B4B)',
                              border: '1px solid rgba(255,255,255,0.15)',
                            }}
                          >
                            <Briefcase size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 flex-wrap mb-1">
                              <h3 className="font-bold text-white text-lg">{job.title}</h3>
                              {job.urgent && (
                                <span
                                  className="text-xs font-bold px-2.5 py-1 rounded-full animate-pulse"
                                  style={{ background: 'rgba(232,25,44,0.2)', color: '#E8192C' }}
                                >
                                  Urgent
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                              <span className="flex items-center gap-1">
                                <Briefcase size={11} /> {job.dept}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={11} /> {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} /> {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          {job.deadline !== 'Open' && (
                            <div className="text-right">
                              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Deadline</div>
                              <div className="text-xs font-semibold" style={{ color: '#E8192C' }}>{job.deadline}</div>
                            </div>
                          )}
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300"
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              transform: isExpanded ? 'rotate(90deg)' : 'none',
                            }}
                          >
                            <ArrowRight size={14} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
                      <div className="px-6 md:px-7 pb-7 pt-0 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                        <p className="text-sm leading-relaxed mt-5 mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          {job.summary}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#E8192C' }}>
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((r: any) => (
                                <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                  <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#E8192C' }} />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#E8192C' }}>
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((r: any) => (
                                <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                                  <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#E8192C' }}>
                            Compensation & Benefits
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.benefits.map((b: any) => (
                              <span
                                key={b}
                                className="text-xs px-3 py-1.5 rounded-full"
                                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={`mailto:careers@mojakeconsult.com?subject=Application: ${job.title} – [Your Name]`}
                          className="mirror-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm"
                          style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 6px 20px rgba(232,25,44,0.35)' }}
                        >
                          Apply Now <ArrowRight size={15} />
                        </a>
                        <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          Subject: "Application: {job.title} – [Your Name]" · Attach: CV + Cover Letter (PDF)
                        </p>
                      </div>
                    </div>
                  </div>
                </Section>
              );
            }) : (
              <Section>
                <div
                  className="glass-card mirror rounded-3xl p-10 md:p-16 text-center border transition-all duration-300 transform hover:scale-[1.01]"
                  style={{
                    borderColor: 'rgba(255,255,255,0.1)',
                    background: 'rgba(13,27,75,0.4)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="relative inline-flex mb-8">
                    <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                    <div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center animate-bounce"
                      style={{
                        background: 'linear-gradient(135deg, #E8192C, #b8111f)',
                        boxShadow: '0 10px 30px rgba(232,25,44,0.5)',
                      }}
                    >
                      <Briefcase size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Great things are brewing!
                  </h3>
                  <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Our team is currently at full strength, but excellence never sleeps. We are frequently looking for outstanding talent to join our mission. <strong className="text-white font-semibold">Check back soon</strong> for new opportunities—your next big career move might just be around the corner!
                  </p>
                  <a
                    href="mailto:careers@mojakeconsult.com"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#E8192C'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; }}
                  >
                    Send Spontaneous Application <ArrowRight size={18} />
                  </a>
                </div>
              </Section>
            )}
          </div>
        </div>
      </section>

      {/* ── General Application ─────────────────────────────────── */}
      <section className="py-16" style={{ background: '#f8f8fc' }} aria-label="General application">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <Section>
            <h2
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
            >
              Don't See the Right Role?
            </h2>
            <p className="text-gray-600 mb-8">
              Submit a general application. We're always looking for exceptional people to join our growing team.
            </p>
            <div className="glass-white mirror rounded-2xl p-7 border" style={{ borderColor: 'rgba(13,27,75,0.08)' }}>
              <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E8192C' }}>Email Applications</div>
                  <a
                    href="mailto:careers@mojakeconsult.com"
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: '#0D1B4B' }}
                  >
                    <Mail size={14} style={{ color: '#E8192C' }} />
                    careers@mojakeconsult.com
                  </a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E8192C' }}>Questions?</div>
                  <a
                    href="tel:+2347019883073"
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: '#0D1B4B' }}
                  >
                    <Phone size={14} style={{ color: '#E8192C' }} />
                    +2347019883073
                  </a>
                </div>
              </div>
              <div
                className="rounded-xl p-4 text-left text-sm"
                style={{ background: 'rgba(13,27,75,0.04)', color: '#374151' }}
              >
                <div className="font-bold mb-2" style={{ color: '#0D1B4B' }}>Application Instructions:</div>
                <ol className="space-y-1 text-xs list-decimal list-inside text-gray-500">
                  <li>Email CV and cover letter to careers@mojakeconsult.com</li>
                  <li>Subject line: "Application: [Role Title] – [Your Full Name]"</li>
                  <li>Attach: CV (PDF), Cover Letter (PDF), Relevant Certifications (optional)</li>
                  <li>Cover letter should address: Why Mojake? Why this role? What impact in year one?</li>
                  <li>Shortlisted candidates contacted within 10 business days</li>
                </ol>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
