import { useEffect } from 'react';

export default function GalleryPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        { src: '/bussiness 1.jpg', alt: 'Industrial Operations', category: 'Operations' },
        { src: '/bussiness 2.jpg', alt: 'Corporate Environment', category: 'Corporate' },
        { src: '/bussiness 3.jpg', alt: 'Team Work', category: 'Team' },
        { src: '/bussiness 4.jpg', alt: 'Logistics Management', category: 'Operations' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f8fc] pb-20">
            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0D1B4B] text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Gallery</h1>
                <p className="text-lg text-white max-w-2xl mx-auto">
                    A visual glimpse into our daily operations, our dedicated teams, and the excellence we deliver across all sectors.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
