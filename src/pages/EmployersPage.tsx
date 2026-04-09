import { useEffect } from 'react';
import { Briefcase, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmployersPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f8fc] pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0D1B4B]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080f2e] via-[#0D1B4B]/90 to-transparent z-10" />
                    {/* NOTE: Provide a specific image for employers/corporate clients here */}
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Employers Solutions"
                        className="w-full h-full object-cover object-center opacity-40"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-semibold tracking-wider mb-6">
                            FOR EMPLOYERS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Scale Your Operations with <span className="text-[#E8192C]">Elite Talent</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            We provide tailored staffing, raw materials supply, and compliance management customized to fit your organization's unique requirements.
                        </p>
                        <Link
                            to="/hire"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#E8192C] hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30"
                        >
                            Hire Top Talent Now <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4B] mb-6">Why Partner With Us?</h2>
                        <p className="text-gray-600 text-lg">
                            We understand the complexities of running industrial and corporate operations.
                            Here is how we bring value to your firm.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-red-50 text-[#E8192C] rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0D1B4B] mb-4">Vetted professionals</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Extensive background checks, skillset verification, and rigorous interviews to ensure only the best candidates join your team.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-[#0D1B4B] rounded-xl flex items-center justify-center mb-6">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0D1B4B] mb-4">Flexible Staffing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From temporary shifts to permanent placements, our adaptable staffing models align directly with your production schedules.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Building size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0D1B4B] mb-4">Full Compliance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We handle taxation, payroll, and industrial relations, fully shielding you from HR liabilities and administrative burdens.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-[#0D1B4B] mb-6">Ready to improve your workforce?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Discuss your organizational needs with our expert consultants today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/hire"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#E8192C] hover:bg-red-700 transition-all duration-300"
                        >
                            Request a Hire Form
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-[#0D1B4B] bg-transparent border border-[#0D1B4B] hover:bg-gray-50 transition-all duration-300"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
