"use client";

import Link from "next/link";
import { Check, Heart, HelpCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureOne() {
    return (
        <section className="py-24 bg-white px-4 md:px-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Volunteer Box */}
                    <div className="bg-[#F4F5F8] p-10 md:p-14 rounded-xl relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-bl-[200px] -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="flex items-start gap-6 mb-6">
                            <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                <HelpCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-primary font-manrope">
                                Join Our <br /> Network
                            </h3>
                        </div>
                        <p className="text-[#6A7695] mb-8 text-lg">
                            Leverage your skills in advocacy, healthcare, or logistics to drive systemic equity in ACB communities.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-[#6A7695]">
                                <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"><Check className="w-3 h-3 text-white" /></span>
                                Access professional training.
                            </li>
                            <li className="flex items-center gap-3 text-[#6A7695]">
                                <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center"><Check className="w-3 h-3 text-white" /></span>
                                Connect with global changemakers.
                            </li>
                        </ul>
                        <Link href="/volunteer">
                            <Button className="bg-white text-primary border border-gray-200 hover:bg-primary hover:text-white rounded-full px-8 py-6 font-bold">
                                APPLY NOW
                            </Button>
                        </Link>
                    </div>

                    {/* Donation Box */}
                    <div className="bg-[#FBAF3C] p-10 md:p-14 rounded-xl relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-[200px] -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="flex items-start gap-6 mb-6">
                            <div className="bg-white text-secondary w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                <Gift className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white font-manrope">
                                Invest in <br /> Futures
                            </h3>
                        </div>
                        <p className="text-white/80 mb-8 text-lg">
                            Your contributions are not just charity; they are capital investments in community resilience and health.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></span>
                                Tax-deductible contributions.
                            </li>
                            <li className="flex items-center gap-3 text-white">
                                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></span>
                                Transparent impact reporting.
                            </li>
                        </ul>
                        <Link href="/donate">
                            <Button className="bg-white text-secondary hover:bg-primary hover:text-white rounded-full px-8 py-6 font-bold border-none">
                                DONATE NOW
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
