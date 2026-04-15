import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function CTAStrip() {
    return (
        <section
            className="relative py-24 overflow-hidden mt-auto"
            style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 100%)' }}
            aria-label="Call to action"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(232,25,44,0.15) 0%, transparent 50%)' }}
            />
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
                <Section>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Need of Highly Qualified HR Personnel or Employment Opportunities <span className="text-gradient-red">?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                        <Link
                            to="/hire"
                            className="mirror-button flex items-center gap-2 text-center justify-center px-12 py-5 rounded-2xl font-black text-white text-base transition-all hover:shadow-[0_0_40px_rgba(232,25,44,0.6)] hover:-translate-y-2 uppercase tracking-wider"
                            style={{
                                background: '#E8192C',
                                boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                            }}
                        >
                            Hire
                        </Link>
                        <Link
                            to="/apply"
                            className="glass flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-black text-[#E8192C] text-base border border-white/30 hover:bg-white/10 hover:-translate-y-2 transition-all uppercase tracking-wider"
                            style={{
                                background: '#ffffffff',
                                boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                            }}
                        >
                            Apply
                        </Link>
                    </div>
                </Section>
            </div>
        </section>
    );
}
