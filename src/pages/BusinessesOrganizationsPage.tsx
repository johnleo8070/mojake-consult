import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';

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

export default function BusinessesOrganizationsPage() {
    return (
        <main>
            {/* ═══ HERO ═══════════════════════════════════════════════════ */}
            <section
                className="relative min-h-[85vh] flex items-center noise overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 55%, #152266 100%)',
                }}
            >
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/businesses-1.png")' }}
                />

                {/* Decorative Orbs */}
                <div
                    className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.18) 0%, transparent 70%)' }}
                />

                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10 pt-20">
                    <div className="max-w-3xl animate-fade-up">
                        <div
                            className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 animate-border-pulse"
                            style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            Welcome to Mo-Jake Consult
                        </div>

                        <h1
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            For <span className="text-gradient-silver">Businesses</span> &amp; Organizations
                        </h1>

                        <p className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            We are a reliable network of human connections.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: '#ffffff' }}>
                            Make The Right Business Decisions When You Consult With Us. Unleash your organization’s full potential when you strategically consult with us on business management, policy alignment, strategy review and business development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="mirror-button flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                                    boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                                }}
                            >
                                Consult With Us <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ TIME TO GROW ═══════════════════════════════════════════ */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Section className="order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/businesses-2.jpg"
                                    alt="Woman working on laptop"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                                    <p className="text-white/80 text-sm">Empowering your team with sustainable success.</p>
                                </div>
                            </div>
                        </Section>

                        <Section className="order-1 lg:order-2">
                            <div className="section-divider mb-6" />
                            <h2
                                className="text-3xl md:text-5xl font-black mb-6"
                                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
                            >
                                Time to <span className="text-gradient-silver">Grow</span>
                            </h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Let Us Look For You
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Unleash your organization’s full potential when you strategically consult with us on business management, policy alignment, strategy review and business development.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} style={{ color: '#E8192C' }} className="mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Strategic Planning &amp; Review</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} style={{ color: '#E8192C' }} className="mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Business Policy Alignment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} style={{ color: '#E8192C' }} className="mt-1 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">Comprehensive Development</span>
                                </li>
                            </ul>
                        </Section>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES HEADER ════════════════════════════════════════ */}
            <section className="py-20 bg-section-light">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <Section>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="section-divider mx-auto mb-6" />
                            <div className="text-red-600 font-bold uppercase tracking-wider text-sm mb-4">What we do</div>
                            <h2
                                className="text-3xl md:text-5xl font-black mb-6"
                                style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}
                            >
                                Make The Right Business Decisions When You Consult With Us
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Unleash your organization’s full potential when you strategically consult with us on business management, policy alignment, strategy review and business development.
                            </p>
                        </div>
                    </Section>

                    {/* Service Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Section>
                            <div className="glass-white h-full rounded-2xl p-8 border border-gray-100 shadow-xl shadow-navy/5 card-hover relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-red-100" />
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg" style={{ background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)' }}>
                                    <TrendingUp size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ color: '#0D1B4B' }}>Management Consulting</h3>
                                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                                    Mo-Jake Consult is your trusted partner in management consulting. With unparalleled expertise, tailored solutions, and a collaborative approach, we deliver measurable results through data-driven insights, helping you overcome challenges in achieving your objectives and achieve sustainable growth.
                                </p>
                            </div>
                        </Section>

                        {/* Card 2 */}
                        <Section>
                            <div className="glass-white h-full rounded-2xl p-8 border border-gray-100 shadow-xl shadow-navy/5 card-hover relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-blue-100" />
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg" style={{ background: 'linear-gradient(135deg, #0D1B4B 0%, #152266 100%)' }}>
                                    <Users size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ color: '#0D1B4B' }}>Human Resource Development</h3>
                                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                                    Through unique programs and collaborative strategies, such as trainings, retreats and conferences, we upskill your workforce, foster a culture of growth, and drive sustainable success, all while delivering measurable results that transform your organization.
                                </p>
                            </div>
                        </Section>

                        {/* Card 3 */}
                        <Section>
                            <div className="glass-white h-full rounded-2xl p-8 border border-gray-100 shadow-xl shadow-navy/5 card-hover relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-red-100" />
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg" style={{ background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)' }}>
                                    <Target size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ color: '#0D1B4B' }}>Advisory Services</h3>
                                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                                    Our comprehensive offerings include diagnostic business consultation, expert business policy formulation, and policy alignment. We empower your organization to thrive through strategic guidance and effective decision-making.
                                </p>
                            </div>
                        </Section>
                    </div>
                </div>
            </section>

            {/* ═══ FIND A BETTER WAY BANNER ═══════════════════════════════ */}
            <section className="py-20 md:py-28 relative bg-[#0D1B4B]">
                <div className="absolute inset-0 w-full h-full">
                    {/* The user provided a graphic text image for the banner. We'll use it as background and use a fallback color. */}
                    <img
                        src="/businesses-3.jpg"
                        alt="There is a way to do it better... Contact Us"
                        className="w-full h-full object-cover object-center opacity-80 mix-blend-screen"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Section>
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-wide drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                            THERE IS A<br />
                            WAY TO DO IT BETTER...FIND
                        </h2>
                        <div className="inline-block">
                            <Link
                                to="/contact"
                                className="mirror-button flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-black text-white text-lg transition-all hover:shadow-[0_0_40px_rgba(232,25,44,0.6)] hover:-translate-y-2 uppercase tracking-wider"
                                style={{
                                    background: '#E8192C',
                                    boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                                }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </Section>
                </div>
            </section>
        </main>
    );
}
