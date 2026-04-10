import { useEffect, useRef, useState } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

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

export default function ApplyJobPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        message: '',
        attachmentCv: null as { name: string; type: string; content: string } | null,
        attachmentCover: null as { name: string; type: string; content: string } | null,
        attachmentOther: null as { name: string; type: string; content: string } | null
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'attachmentCv' | 'attachmentCover' | 'attachmentOther') => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError(`${file.name} is too large. Max 5MB.`);
                e.target.value = '';
                return;
            }
            setError('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm(prev => ({
                    ...prev,
                    [field]: {
                        name: file.name,
                        type: file.type,
                        content: reader.result as string
                    }
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setForm(prev => ({ ...prev, [field]: null }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/send-apply', {
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
                style={{ background: 'linear-gradient(135deg, #080f2e 0%, #0D1B4B 60%, #152266 100%)' }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(232,25,44,0.15) 0%, transparent 60%)' }}
                />

                <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 w-full">
                    <Section>
                        <div className="text-center mb-10">
                            <div
                                className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                                style={{ color: '#E8192C', borderColor: 'rgba(232,25,44,0.3)' }}
                            >
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Application Form
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Join <span className="text-gradient-red">Mo-Jake Consult</span>
                            </h1>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                Drive your career forward with our expertise. Fill out the application form below and take the next step in your professional journey.
                            </p>
                        </div>

                        <div className="glass-card mirror rounded-3xl p-8 md:p-12 border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Full Name *</label>
                                            <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Email Address *</label>
                                            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle} />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Phone Number *</label>
                                            <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Role Applied For *</label>
                                            <input name="role" required value={form.role} onChange={handleChange} placeholder="e.g. Machine Operator" style={inputStyle} />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Years of Experience</label>
                                            <select name="experience" value={form.experience} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                                                <option value="" style={{ background: '#0D1B4B' }}>Select...</option>
                                                <option value="entry" style={{ background: '#0D1B4B' }}>Entry Level (0-2 years)</option>
                                                <option value="mid" style={{ background: '#0D1B4B' }}>Mid Level (3-5 years)</option>
                                                <option value="junior" style={{ background: '#0D1B4B' }}>Junior Level (5+ years)</option>
                                                <option value="senior" style={{ background: '#0D1B4B' }}>Senior Level (10+ years)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Upload Resume / CV *</label>
                                            <input type="file" required onChange={(e) => handleFileChange(e, 'attachmentCv')} style={{ ...inputStyle, padding: '9px 16px', background: 'rgba(255,255,255,0.03)' }} accept=".pdf,.doc,.docx" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Cover Letter (Optional)</label>
                                            <input type="file" onChange={(e) => handleFileChange(e, 'attachmentCover')} style={{ ...inputStyle, padding: '9px 16px', background: 'rgba(255,255,255,0.03)' }} accept=".pdf,.doc,.docx" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50">Other Documents (Optional)</label>
                                            <input type="file" onChange={(e) => handleFileChange(e, 'attachmentOther')} style={{ ...inputStyle, padding: '9px 16px', background: 'rgba(255,255,255,0.03)' }} accept=".pdf,.doc,.docx" />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="block text-xs font-semibold mb-2 uppercase tracking-wider text-white/50"> Additional Info</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us why you're a great fit..." style={{ ...inputStyle, resize: 'vertical' }} />
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
                                        {loading ? 'Submitting Application...' : <><Briefcase size={18} /> Submit Application</>}
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 30px rgba(232,25,44,0.4)' }}>
                                        <CheckCircle size={48} className="text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Application Received!</h3>
                                    <p className="text-lg text-white/70">
                                        Thank you for applying, <strong className="text-white">{form.name}</strong>. Our talent acquisition team will review your CV and be in touch shortly.
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
