"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress"; // Utilizing Shadcn Progress

const causes = [
    {
        id: 1,
        category: "Health",
        title: "Maternal & Child Health",
        description: "Improving health outcomes and reducing mortality for mothers and children in vulnerable communities.",
        image: "/assets/program-maternal.jpg",
        raised: 25000,
        goal: 50000,
        percent: 50,
        color: "#FBAF3C" // Secondary/Orange
    },
    {
        id: 2,
        title: "HIV and AIDS Support",
        description: "Providing critical care, ending stigma, and ensuring dignity for those living with HIV/AIDS.",
        image: "/assets/program-hiv-new.jpg",
        raised: 18000,
        goal: 40000,
        percent: 45,
        color: "#E11D48" // Rose Red for AIDS Support
    },
    {
        id: 3,
        category: "Rights",
        title: "Human Rights & Advocacy",
        description: "Fighting systemic inequities and advocating for the rights of marginalized ACB communities.",
        image: "/assets/program-advocacy.jpg",
        raised: 12000,
        goal: 30000,
        percent: 40,
        color: "#5F8D4E" // Green accent
    },
    {
        id: 4,
        category: "Youth",
        title: "Youth & Culture",
        description: "Empowering the next generation through cultural connection and leadership development.",
        image: "/assets/program-youth.jpg",
        raised: 8000,
        goal: 25000,
        percent: 32,
        color: "#7C3AED" // Purple accent
    },
    {
        id: 5,
        category: "Climate",
        title: "Climate Justice",
        description: "Building resilience in communities disproportionately affected by climate change.",
        image: "/assets/program-climate.jpg",
        raised: 15000,
        goal: 35000,
        percent: 43,
        color: "#0891B2" // Teal accent
    }
];

export function CausesOne() {
    return (
        <section className="py-24 md:py-32 bg-[#F4F5F8]">
            <div className="container px-4 md:px-0 mx-auto">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-secondary font-caveat text-3xl font-bold block mb-2">Our Programs</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-manrope leading-tight">
                        Featured Programs <br /> driving real change
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {causes.map((cause, index) => (
                        <motion.div
                            key={cause.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden">
                                <img src={cause.image} alt={cause.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 bg-secondary text-white px-6 py-2 rounded-tr-xl font-bold text-sm font-manrope">
                                    {cause.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4 font-manrope leading-snug group-hover:text-secondary transition-colors">
                                    <Link href="/donate">{cause.title}</Link>
                                </h3>
                                <p className="text-[#6A7695] mb-6 leading-relaxed">
                                    {cause.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-secondary text-sm">Raised: ${cause.raised.toLocaleString()}</span>
                                        <span className="font-bold text-primary text-sm">Goal: ${cause.goal.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3 relative">
                                        <div
                                            className="h-full rounded-full relative"
                                            style={{ width: `${cause.percent}%`, backgroundColor: cause.color }}
                                        >
                                            <div className="absolute -right-4 -top-10 bg-white shadow-md border border-gray-100 text-xs font-bold py-1 px-2 rounded text-primary">
                                                {cause.percent}%
                                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
