"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { VolunteerWizard } from "@/components/ui/volunteer-wizard";

function PageTitle({ title, breadcrumb }: { title: string, breadcrumb: string }) {
    return (
        <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-[url('/assets/impact-community.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-4">{title}</h1>
                <div className="text-lg text-white/80 font-bold tracking-wider uppercase font-manrope">
                    Home / <span className="text-secondary">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
}

export default function VolunteerPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <PageTitle title="Become a Volunteer" breadcrumb="Volunteer" />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Content Column */}
                        <div>
                            <span className="text-secondary font-caveat text-3xl font-bold block mb-2">Join with us</span>
                            <h2 className="text-4xl font-extrabold text-primary font-manrope mb-6">
                                Join our community to <br /> become a volunteer
                            </h2>
                            <p className="text-[#6A7695] leading-relaxed mb-8">
                                Your support empowers African, Caribbean, and Black (ACB) families to break barriers in healthcare, education, and social inclusion.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-primary">Start your training</h4>
                                        <p className="text-sm text-[#6A7695]">Learn about our mission and approach.</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-primary">Join the team</h4>
                                        <p className="text-sm text-[#6A7695]">Connect with other changemakers.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Form Column */}
                        <div className="w-full">
                            <VolunteerWizard />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
