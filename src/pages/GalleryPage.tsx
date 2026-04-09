import { useEffect } from 'react';

export default function GalleryPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // NOTE: Populate these with actual images representing Mojake Consult's operations, teams, and events.
    const images = [
        { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Industrial Operations', category: 'Operations' },
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Office Setup', category: 'Corporate' },
        { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Team Meeting', category: 'Team' },
        { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Training Session', category: 'Training' },
        { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Warehouse Logistics', category: 'Operations' },
        { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Professional Collaboration', category: 'Corporate' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8fc] pb-20">
            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0D1B4B] text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Gallery</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    A visual glimpse into our daily operations, our dedicated teams, and the excellence we deliver across all sectors.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Notice to User */}
                    <div className="mb-12 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-800 text-sm">
                        <strong>Note from Developer:</strong> Please provide high-quality images of your actual operations, staff, and facilities to replace these placeholder images.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B4B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-xs font-bold text-[#E8192C] uppercase tracking-wider mb-1">{img.category}</span>
                                    <h3 className="text-white font-medium text-lg">{img.alt}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
