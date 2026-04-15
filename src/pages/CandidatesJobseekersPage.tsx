import { useEffect } from 'react';
import { Search, MapPin, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CandidatesJobseekersPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f8fc] pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0D1B4B]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080f2e] via-[#0D1B4B]/90 to-transparent z-10" />
                    {/* NOTE: Provide a specific image relating to job seekers or employees here */}
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Job Seekers"
                        className="w-full h-full object-cover object-center opacity-40"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/30 text-white text-xs font-bold tracking-wider mb-8">
                            CANDIDATES & JOBSEEKERS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Unlock Your Potential. <span className="text-[#E8192C]">Build Your Career.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-2xl">
                            Connect with top employers across Nigeria. Find industrial, administrative, and executive roles that match your skills.
                        </p>
                        <Link
                            to="/apply"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#E8192C] hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30"
                        >
                            Apply for Jobs <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Roles */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4B] mb-6">Why Apply Through Mojake?</h2>
                        <p className="text-gray-600 text-lg">
                            We focus on providing our talents with stable, high-value opportunities while prioritizing worker safety, competitive wages, and growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Wide Network', desc: 'Direct access to numerous manufacturing and corporate firms.', icon: <Search size={24} /> },
                            { title: 'Training', desc: 'Upskill with our on-the-job training modules.', icon: <GraduationCap size={24} /> },
                            { title: 'Prompt Payments', desc: 'Smooth, timely, and fully compliant salary processing.', icon: <Briefcase size={24} /> },
                            { title: 'Placement Variety', desc: 'Locations spanning Lagos, Ogun State, and beyond.', icon: <MapPin size={24} /> },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <div className="w-12 h-12 bg-gray-50 text-[#0D1B4B] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-[#0D1B4B] mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-20 bg-[#0D1B4B] text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Jumpstart Your Career Journey</h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Submit your resume and details through our dedicated application portal. Our recruiters will review your profile to find the best match.
                    </p>
                    <Link
                        to="/apply"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#0D1B4B] bg-white hover:bg-gray-100 transition-all duration-300"
                    >
                        Go to Apply Form
                    </Link>
                </div>
            </section>
        </div>
    );
}
