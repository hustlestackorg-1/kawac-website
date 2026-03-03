"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

// Collection 1: The Community Legacy (Original Photos)
const legacyCollection = [
    {
        src: "/assets/gallery/gallery-2.jpg",
        title: "Essential Nutrition",
        location: "Community Outreach",
        desc: "Supporting our elders with monthly food security packages.",
    },
    {
        src: "/assets/gallery/gallery-3.jpg",
        title: "The Future Generation",
        location: "Youth Center",
        desc: "Educational gatherings for community youth.",
    },
    {
        src: "/assets/gallery/gallery-1.jpg",
        title: "Community Health",
        location: "Wellness Clinic",
        desc: "Workshops on health, hygiene, and disease prevention.",
    },
    {
        src: "/assets/gallery/gallery-4.jpg",
        title: "Mentorship & Guidance",
        location: "Education Wing",
        desc: "Experienced educators providing one-on-one mentorship.",
    },
    {
        src: "/assets/gallery/gallery-5.jpg",
        title: "Field Counseling",
        location: "Home Visits",
        desc: "Direct support and counseling for vulnerable families.",
    }
];

// Collection 2: Medical Camp (New Request)
const medicalCollection = [
    {
        src: "/assets/gallery/medical-camp-1.jpg",
        title: "Patient Intake",
        location: "Rural Medical Camp",
        desc: "Volunteers registering community members for free checkups.",
    },
    {
        src: "/assets/gallery/medical-camp-2.jpg",
        title: "Vision Screening",
        location: "Eye Clinic Tent",
        desc: "Conducting eye exams and distributing reading glasses.",
    },
    {
        src: "/assets/gallery/medical-camp-3.jpg",
        title: "Community Waiting Bay",
        location: "Outreach Site",
        desc: "Hundreds of residents gathered for diverse medical services.",
    },
    {
        src: "/assets/gallery/medical-camp-4.jpg",
        title: "Pediatric Checkups",
        location: "Children's Ward",
        desc: "Doctors attending to mothers and infants.",
    },
    {
        src: "/assets/gallery/medical-camp-5.jpg",
        title: "Pharmacy Dispatch",
        location: "Medicine Distribution",
        desc: "Distributing free essential medicines to prescribed patients.",
    }
];

// Collection 3: HIV & AIDS Advocacy (New Request)
const hivCollection = [
    {
        src: "/assets/gallery/hiv-advocacy-1.jpg",
        title: "The KENWA Movement",
        location: "Nairobi, Kenya",
        desc: "Marching for dignity. 'Improving the quality of life of women and children infected and affected by HIV/AIDS'.",
    },
    {
        src: "/assets/gallery/hiv-advocacy-2.jpg",
        title: "Hope for a Hurting Woman",
        location: "Community Rally",
        desc: "Mobilizing support and breaking the silence. A historic gathering of the Kenya Network of Women with AIDS.",
    }
];

export default function GalleryPage() {
    const containerRef = useRef(null);

    return (
        <main ref={containerRef} className="bg-white min-h-screen selection:bg-black selection:text-white">

            {/* --- HERO: THE ARCHIVE --- */}
            <section className="pt-40 pb-20 px-6 container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">
                        The Living Archive
                    </span>
                    <h1 className="text-6xl md:text-9xl font-playfair font-black text-slate-900 tracking-tighter mb-8">
                        MOMENTS OF <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500">IMPACT</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-slate-500 text-lg font-light leading-relaxed mb-12">
                        A curated collection of our journey. From the frontlines of crisis response to the quiet moments of community building.
                    </p>
                    <ChevronDown className="w-6 h-6 text-slate-300 mx-auto animate-bounce" />
                </motion.div>
            </section>

            {/* --- COLLECTION 1: MEDICAL CAMP MISSION --- */}
            <section className="px-4 md:px-8 pb-10" id="medical">
                <div className="max-w-[1600px] mx-auto mb-12 flex items-end gap-6 border-b border-slate-100 pb-8">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900">
                        Medical Camp Mission
                    </h2>
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">Featured Collection</span>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1600px] mx-auto">
                    {medicalCollection.map((img, idx) => (
                        <GalleryItem key={idx} item={img} index={idx} highlight={true} />
                    ))}
                </div>
            </section>

            {/* --- COLLECTION 2: HIV & AIDS ADVOCACY --- */}
            <section className="px-4 md:px-8 pb-10" id="hiv">
                <div className="max-w-[1600px] mx-auto mb-12 flex items-end gap-6 border-b border-slate-100 pb-8">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900">
                        HIV & AIDS Advocacy
                    </h2>
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#E11D48]">Historic Movement</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
                    {hivCollection.map((img, idx) => (
                        // Using a larger display for these landscape banners
                        <GalleryItem key={idx} item={img} index={idx} highlight={true} />
                    ))}
                </div>
            </section>

            {/* --- COLLECTION 3: COMMUNITY LEGACY --- */}
            <section className="px-4 md:px-8 pb-32 pt-20">
                <div className="max-w-[1600px] mx-auto mb-12 border-b border-slate-100 pb-8">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900 text-slate-300">
                        Community Archives
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1600px] mx-auto">
                    {legacyCollection.map((img, idx) => (
                        <GalleryItem key={idx} item={img} index={idx} />
                    ))}
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-100 text-center">
                <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-6">Be Part of the Story</h2>
                <a href="/donate" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-[#FF6B00] transition-colors border-b border-slate-900 pb-1 hover:border-[#FF6B00]">
                    Make a Contribution <ArrowUpRight className="w-4 h-4" />
                </a>
            </section>
        </main>
    );
}

function GalleryItem({ item, index, highlight = false }: { item: any; index: number; highlight?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
        >
            <div className="relative overflow-hidden bg-slate-100">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative"
                >
                    <img
                        src={item.src}
                        alt={item.title}
                        className={`w-full h-auto object-cover transition-all duration-700 ${highlight ? 'grayscale-0' : 'grayscale-[0.5] group-hover:grayscale-0'}`}
                    />
                </motion.div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.location}
                    </span>
                    <h3 className="text-white font-playfair text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        {item.title}
                    </h3>
                    <p className="text-white/80 text-sm font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
