import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import Logo from '../components/Logo';

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);


export default function OurTeamPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Team Members with provided details
    const teamMembers = [
        {
            name: 'Veronica Ayebae-Jaiyeola',
            role: 'Managing Director',
            bio: 'Our team is led by Veronica Ayebae-Jaiyeola, a seasoned businesswoman with extensive experience -30+ years in entrepreneurship and management- and a strong track record of success. Veronica has served as Managing Director at Justim Enterprises and El-Shadai Stores, where she honed her exceptional business acumen and dedication to customer service. With a wealth of experience in both public and private sectors, she brings a unique perspective to management and consulting. She is also a passionate educator, deeply committed to training and development. Her role on the board of several organizations further exemplifies her dedication to making a meaningful impact. Veronica is known for her goal-oriented mindset and ability to inspire and motivate teams. As a leader, she encourages collaboration and fosters an environment that nurtures success.',
            image: '/team-veronica.jpg',
        },
        {
            name: 'Joseph Jaiyeola',
            role: 'Operations Director',
            bio: "Joseph is a Management Consultant who enhances operational efficiency, team productivity, and employee motivation. He is a Proactive and focused leader with exceptional organizational, critical thinking, and prioritization skills. Joseph is adept at developing and executing targeted relationship and account development strategies, resolving customer complaints, and generating new business leads through direct customer engagement. Joseph has a bachelor's degree in International Law and Diplomacy; a postgraduate in International Conflicts and an MBA in Management. He is a Certified Scrum Master and a Certified Agile Leader. As a seasoned professional, Joseph brings expertise in diverse organizational environments, consistently driving positive results and contributing to business success.",
            image: '/team-joseph.jpg',
        },
        {
            name: 'Emmanuel Jaiyeola',
            role: 'Board Member',
            bio: 'Emmanuel possesses a wealth of marketing and recruiting experience having worked as Managing Director at Talhub Ltd, a recruitment and staffing company, and Emmtol Consults, an immigration and investment consultation outfit, with national and international acclaim and Marketing Manager at Fintech Legal Centre. He holds postgraduate degrees in Business Administration, Project Management and International Marketing. He is currently concluding his doctorate degree in Business Administration. He is a dynamic administrator and an excellent communicator.',
            image: '/team-Emmanuel.jpg',
        }
    ];

    return (
        <div className="min-h-screen bg-[#fcfcff] pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D1B4B]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] scale-[2] pointer-events-none">
                    <Logo variant="generic" />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-red-600/10 border border-red-500/30 text-red-100 text-xs font-black tracking-widest mb-8 uppercase">
                        Executive Leadership
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Meet Our <span className="text-gradient-red">Leadership Team</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Dedicated experts driving innovation and excellence across the HR and administrative landscape.
                    </p>
                </div>
            </section>

            {/* Team Layout */}
            <section className="relative py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Top Row: 2 UP */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24">
                        {teamMembers.slice(0, 2).map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>

                    {/* Bottom Row: 1 Centre */}
                    <div className="flex justify-center">
                        <div className="w-full md:w-3/4 lg:w-3/5">
                            <TeamCard member={teamMembers[2]} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TeamCard({ member }: { member: any }) {
    return (
        <div className="bg-white rounded-[40px] overflow-hidden group transition-all duration-500 flex flex-col border border-gray-100/50 shadow-[0_30px_80px_-20px_rgba(13,27,75,0.08)] hover:shadow-[0_45px_100px_-20px_rgba(13,27,75,0.12)]">
            <div className="flex flex-col items-center">
                {/* Image Section - Scaled down slightly to keep sharpness of original small files */}
                <div className="relative pt-12 px-12 w-full flex justify-center overflow-hidden">
                    <div className="w-full max-w-[400px] aspect-[1/1] rounded-[32px] overflow-hidden shadow-2xl shadow-navy/10 relative z-10 border-4 border-white">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-center transition-transform duration-700"
                            style={{ imageRendering: 'auto' }}
                        />
                        {/* Overlay subtle shadow for depth */}
                        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none" />
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-48 h-48 bg-[#E8192C] opacity-[0.03] blur-3xl rounded-full" />
                </div>

                {/* Content Section */}
                <div className="p-10 md:p-14 lg:p-16 flex flex-col items-center text-center">
                    <div className="flex flex-col mb-8 items-center">
                        <h3 className="text-3xl lg:text-4xl font-black text-[#0D1B4B] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {member.name}
                        </h3>
                        <div className="text-[#E8192C] text-sm lg:text-base font-black tracking-[0.2em] uppercase mt-2">
                            {member.role}
                        </div>
                    </div>

                    <p className="text-gray-600 text-lg lg:text-xl leading-[1.6] font-light max-w-2xl">
                        {member.bio}
                    </p>

                    {/* Social Floating Icons */}
                    <div className="mt-10 flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-2xl bg-[#E8192C] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                            <LinkedinIcon size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-2xl bg-white text-navy flex items-center justify-center shadow-lg border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="mt-12 h-1.5 w-16 bg-gradient-to-r from-[#E8192C] to-red-300 rounded-full" />
                </div>
            </div>
        </div>
    );
}
