import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Users } from 'lucide-react';

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

export default function HirePage() {
    const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', roleType: '', headcount: '', message: '', attachment: null as { name: string; type: string; content: string } | null });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError('File size must be less than 5MB');
                e.target.value = '';
                return;
            }
            setError('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm(prev => ({
                    ...prev,
                    attachment: {
                        name: file.name,
                        type: file.type,
                        content: reader.result as string
                    }
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setForm(prev => ({ ...prev, attachment: null }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/send-hire', {
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
            <section
                className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]"
                style={{ background: 'linear-gradient(135deg, #0D1B4B 0%, #152266 50%, #080f2e 100%)' }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(232,25,44,0.15) 0%, transparent 60%)' }}
                />

                <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 w-full">
                    <Section>
                        <div className="text-center mb-10">
                            <div
                                className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                                style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
                            >
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Hire request Form
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Hire With <span className="text-gradient-red">Mo-Jake Consult</span>
                            </h1>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                Drive your business forward with our expertise. Tell us your talent requirements and let us supply the perfect fit.
                            </p>
                        </div>

                        <div className="glass-card mirror rounded-3xl p-8 md:p-12 border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Company Name *</label>
                                            <input name="company" required value={form.company} onChange={handleChange} placeholder="Your Company Ltd" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Contact Person *</label>
                                            <input name="contact" required value={form.contact} onChange={handleChange} placeholder="Jane Doe" style={inputStyle} />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Business Email *</label>
                                            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Phone Number *</label>
                                            <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inputStyle} />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Required Talent Type</label>
                                            <select name="roleType" value={form.roleType} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                                                <option value="" style={{ background: '#0D1B4B' }}>Select Category...</option>
                                                <option value="industrial" style={{ background: '#0D1B4B' }}>Industrial / Manufacturing Staff</option>
                                                <option value="executive" style={{ background: '#0D1B4B' }}>Executive / Professional Roles</option>
                                                <option value="gig" style={{ background: '#0D1B4B' }}>Gig Workers / Flexible Staff</option>
                                                <option value="other" style={{ background: '#0D1B4B' }}>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Estimated Headcount</label>
                                            <select name="headcount" value={form.headcount} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                                                <option value="" style={{ background: '#0D1B4B' }}>Select...</option>
                                                <option value="single" style={{ background: '#0D1B4B' }}>1 - 100 Persons</option>
                                                <option value="team" style={{ background: '#0D1B4B' }}>100 - 500 Persons</option>
                                                <option value="bulk" style={{ background: '#0D1B4B' }}>500 - 1000 Persons</option>
                                                <option value="bulk" style={{ background: '#0D1B4B' }}>1000+ bulk recruitment</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Attach File (JD or Requirements)</label>
                                        <input type="file" onChange={handleFileChange} style={{ ...inputStyle, padding: '9px 16px', background: 'rgba(255,255,255,0.03)' }} accept=".pdf,.doc,.docx,.xls,.xlsx" />
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Specific Requirements & Timeline</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Give us the details of the specific roles and when you need them..." style={{ ...inputStyle, resize: 'vertical' }} />
                                    </div>

                                    {error && (
                                        <div className="mb-4 px-4 py-3 rounded-xl text-sm font-medium" style={{ background: 'rgba(232,25,44,0.15)', color: '#ff6b7a', border: '1px solid rgba(232,25,44,0.3)' }}>
                                            ⚠️ {error}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mirror-button w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-base transition-all hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60"
                                        style={{ background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)', boxShadow: '0 6px 25px rgba(232,25,44,0.4)' }}
                                    >
                                        {loading ? 'Sending Request...' : <><Users size={18} /> Request Talent</>}
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 30px rgba(232,25,44,0.4)' }}>
                                        <CheckCircle size={48} className="text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Request Sent successfully!</h3>
                                    <p className="text-lg text-white/70">
                                        Thank you from <strong className="text-white">{form.company}</strong>. Our business development team will contact you shortly to provide the perfect talent.
                                    </p>
                                </div>
                            )}
                        </div>
                    </Section>
                </div>
            </section>
        </main>
    );
}
