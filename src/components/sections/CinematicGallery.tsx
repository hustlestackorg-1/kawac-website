"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, MapPin, Calendar, Activity } from "lucide-react";

interface GalleryItem {
    id: number;
    image: string;
    description: string;
    location: string;
    date: string;
    impact: string;
    size: "small" | "medium" | "large";
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        image: "/assets/gallery/medical-camp-1.jpg",
        description: "Medical Camp Assessment",
        location: "Rural Kenya",
        date: "2024.12.10",
        impact: "Vitals Monitored",
        size: "large"
    },
    {
        id: 2,
        image: "/assets/gallery/medical-camp-2.jpg",
        description: "Pediatric Eye Check",
        location: "Community Center",
        date: "2024.12.10",
        impact: "Early Detection",
        size: "medium"
    },
    {
        id: 3,
        image: "/assets/gallery/medical-camp-3.jpg",
        description: "Vision Screening",
        location: "Outreach Tent",
        date: "2024.12.10",
        impact: "Corrective Care",
        size: "small"
    },
    {
        id: 4,
        image: "/assets/gallery/medical-camp-4.jpg",
        description: "Patient Consultation",
        location: "Triage Station",
        date: "2024.12.10",
        impact: "Direct Support",
        size: "medium"
    },
    {
        id: 5,
        image: "/assets/gallery/medical-camp-5.jpg",
        description: "Community Gathering",
        location: "Waiting Area",
        date: "2024.12.10",
        impact: "Health Education",
        size: "large"
    },
    {
        id: 6,
        image: "/assets/program-youth.jpg",
        description: "Youth Activation",
        location: "Nairobi, Kenya",
        date: "2024.11.02",
        impact: "Skill Building",
        size: "small"
    },
    {
        id: 7,
        image: "/assets/gallery/community-1.jpg",
        description: "Community Day",
        location: "Nairobi Outskirts",
        date: "2024.11.12",
        impact: "Social Cohesion",
        size: "large"
    },
    {
        id: 8,
        image: "/assets/gallery/community-2.jpg",
        description: "Orphan Care Support",
        location: "Kisumu Region",
        date: "2024.10.05",
        impact: "Mentorship",
        size: "medium"
    },
    {
        id: 9,
        image: "/assets/gallery/community-3.jpg",
        description: "Nutritional Support",
        location: "Rift Valley",
        date: "2024.12.20",
        impact: "Food Security",
        size: "large"
    },
    {
        id: 10,
        image: "/assets/gallery/community-4.jpg",
        description: "Home Based Care",
        location: "Informal Settlement",
        date: "2024.09.15",
        impact: "Direct Aid",
        size: "small"
    },
    {
        id: 11,
        image: "/assets/gallery/community-5.jpg",
        description: "Women's Solidarity",
        location: "KENWA Network",
        date: "2024.08.30",
        impact: "Mental Health",
        size: "medium"
    },
    {
        id: 12,
        image: "/assets/gallery/hiv-support-1.jpg",
        description: "Hope for a Hurting Woman",
        location: "KENWA Rally",
        date: "Archives",
        impact: "Advocacy",
        size: "large"
    },
    {
        id: 13,
        image: "/assets/gallery/hiv-support-2.jpg",
        description: "Public Awareness March",
        location: "Nairobi Streets",
        date: "Archives",
        impact: "Stigma Reduction",
        size: "medium"
    }
];

export function CinematicGallery() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#fff] relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-black/10" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
                            The Archive
                        </span>
                        <div className="h-px w-12 bg-black/10" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-cormorant text-black mb-6"
                    >
                        Holographic <span className="text-secondary italic">Memory.</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-xl font-serif text-lg leading-relaxed">
                        Visual evidence of our sovereign infrastructure. Unfiltered from the field.
                    </p>
                </div>

                {/* Premium Masonry Grid - High Fidelity */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="break-inside-avoid relative group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-sm bg-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.description}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Metadata on Hover */}
                            <div className="mt-4 flex justify-between items-end opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.date}</div>
                                    <h3 className="font-cormorant font-bold text-xl text-primary leading-none">{item.description}</h3>
                                </div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                                    <MapPin size={10} /> {item.location}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
