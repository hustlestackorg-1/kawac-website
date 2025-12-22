"use client";

import Link from "next/link";
import { MessageCircle, User, ArrowRight, Share2 } from "lucide-react";

export function NewsOne() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-0 mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-caveat text-3xl font-bold block mb-2">News & articles</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-manrope leading-tight">
                        Directly from the <br /> latest news and articles
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-60 overflow-hidden">
                                <img src={`/assets/hero-health.jpg`} alt="News" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-[#FBAF3C] text-white px-4 py-1 rounded-full text-xs font-bold font-manrope">
                                    23 May, 2024
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="flex gap-4 mb-4 text-xs font-bold text-[#6A7695] uppercase tracking-wide">
                                    <li className="flex items-center gap-2"><User className="w-4 h-4 text-secondary" /> Admin</li>
                                    <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-secondary" /> 2 Comments</li>
                                </ul>
                                <h3 className="text-xl font-extrabold text-primary mb-6 font-manrope leading-normal group-hover:text-secondary transition-colors">
                                    <Link href="/news/post">How does the malnutrition affect children?</Link>
                                </h3>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                    <Link href="/news/post" className="flex items-center gap-2 text-[#6A7695] hover:text-secondary font-bold text-sm uppercase transition-colors">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <button className="text-[#6A7695] hover:text-secondary transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
