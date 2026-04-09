import { useEffect } from 'react';
import { Target, ArrowRight, Briefcase, Network, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function AboutCompanyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f8fc] pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0D1B4B]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080f2e] via-[#0D1B4B]/90 to-transparent z-10" />
                    <img
                        src="/about-team.jpg"
                        alt="About Mojake Consult Team"
                        className="w-full h-full object-cover object-center opacity-30"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
                            ABOUT THE COMPANY
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            We help you build a valuable and <span className="text-gradient-red">long-lasting business</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light">
                            Our work at Mo-Jake Consult goes beyond just management, staffing and consulting. We help you build a valuable and long-lasting business with the right human resource and great management options that maximize your business potential and helps you achieve all your business dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/hire"
                                className="mirror-button flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(135deg, #E8192C 0%, #b8111f 100%)',
                                    boxShadow: '0 8px 30px rgba(232,25,44,0.4)',
                                }}
                            >
                                Hire Top Talent <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/contact"
                                className="glass flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm border border-white/20 transition-all hover:border-white/40 hover:-translate-y-1"
                            >
                                Contact Us <Briefcase size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="/about-meeting.jpg"
                                    alt="Mojake Consult Team Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                                style={{ background: 'rgba(232,25,44,0.2)' }}
                            />
                        </div>

                        <div>
                            <div className="section-divider mb-6" style={{ background: 'linear-gradient(90deg, #E8192C, rgba(232,25,44,0.3))' }} />
                            <h2 className="text-3xl md:text-5xl font-black mb-8" style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}>
                                What We Do
                            </h2>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                                <p>
                                    At Mo-Jake Consult, we understand that building a successful business requires more than just a good product or service. It also takes proper management and a strong, dedicated workforce. That's why we're here to help.
                                </p>
                                <p>
                                    As a leading recruiting, staffing and management agency, we are dedicated to providing our clients with exceptional human resource and advisory solutions to help them build their workforce and achieve their business objectives. Our team of experts have years of experience in industry and are passionate about helping businesses thrive.
                                </p>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 my-8">
                                    <h4 className="font-bold text-[#0D1B4B] mb-3 flex items-center gap-2">
                                        <Settings size={20} className="text-[#E8192C]" />
                                        Wide Range of Services
                                    </h4>
                                    <p className="text-sm">
                                        We offer a wide range of services to help you manage your workforce, including recruiting and staffing solutions, business policy consulting, diagnostic studies and employee management training.
                                    </p>
                                </div>
                                <p>
                                    We believe that every business is unique, which is why we take a personalized approach to every client. Our team takes the time to understand your business needs and goals, and we work closely with you to create tailored solutions that fit your specific requirements.
                                </p>
                                <p className="font-medium text-[#0D1B4B]">
                                    At Mo-Jake Consult, we are committed to providing our clients with exceptional service and support. Our goal is to help you build a strong and successful workforce so that you can focus on growing your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8f8fc] transform -skew-x-12 translate-x-32" />
                <div className="absolute bottom-10 left-10 opacity-[0.03] rotate-12 scale-150 pointer-events-none">
                    <Logo variant="generic" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Mission */}
                        <div className="glass-card p-10 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style={{ background: 'linear-gradient(135deg, #E8192C, #b8111f)', boxShadow: '0 8px 20px rgba(232,25,44,0.3)' }}>
                                <Target size={28} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-black mb-6" style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}>Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                Our mission is to help our clients maximize their human capital investments and business potential by providing the most ideal management solutions and highly qualified, highly skilled personnel from various fields of endeavor to all businesses; big, medium or small.
                            </p>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    We do this thanks to a team and solid network of experience-hardened and well-educated individuals who understand the unique demands of business administration and can employ their know-how to passionately create wealth and value for all our stakeholders.
                                </p>
                            </div>
                        </div>

                        {/* How We Work */}
                        <div className="glass-card p-10 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8" style={{ background: 'linear-gradient(135deg, #0D1B4B, #152266)', boxShadow: '0 8px 20px rgba(13,27,75,0.3)' }}>
                                <Network size={28} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-black mb-6" style={{ color: '#0D1B4B', fontFamily: 'Playfair Display, serif' }}>How we Work</h3>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#E8192C' }}>Our Plan & Working Style</h4>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-[#E8192C]" />
                                    <p className="text-gray-600 text-base leading-relaxed font-light">
                                        <strong className="text-[#0D1B4B] font-medium block mb-1">Extensive Network & Experience</strong>
                                        Our extensive human resource network and education-backed experience are key factors in providing exceptional human and intellectual resource solutions to our clients.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-[#E8192C]" />
                                    <p className="text-gray-600 text-base leading-relaxed font-light">
                                        <strong className="text-[#0D1B4B] font-medium block mb-1">Long-term Relationships</strong>
                                        We prioritize building long-term relationships, recognizing that it is crucial to our success in serving our clients effectively.
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-[#E8192C]" />
                                    <p className="text-gray-600 text-base leading-relaxed font-light">
                                        <strong className="text-[#0D1B4B] font-medium block mb-1">Inclusivity & Results</strong>
                                        We value inclusivity and diversity in our workplace culture and takes pride in our commitment to surpassing client expectations by delivering exceptional results.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
