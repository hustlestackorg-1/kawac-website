"use client";

import { motion } from "framer-motion";
import { Heart, Users, Shield, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AsuntaWaguraPage() {
    return (
        <main className="min-h-screen bg-[#F8F9FA]">
            {/* Hero Section - Personal & Warm */}
            <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0d0a1a] overflow-hidden">
                {/* Background with warm overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0d0a1a] to-rose-900/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.15),transparent_50%)]" />
                </div>

                <div className="container relative z-10 px-6 max-w-5xl mx-auto py-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Portrait Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-purple-500/20 to-rose-500/20 border border-white/10 overflow-hidden relative">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white/30">
                                        <Heart className="w-24 h-24 mx-auto mb-4 stroke-1" />
                                        <span className="text-sm uppercase tracking-widest">Portrait</span>
                                    </div>
                                </div>
                                {/* Decorative corner accents */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-secondary/50" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-secondary/50" />
                            </div>
                        </motion.div>

                        {/* Right: Introduction */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-white"
                        >
                            <div className="inline-flex items-center gap-3 mb-6 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-manrope font-bold">Founder&apos;s Story</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black font-cormorant tracking-tight leading-[0.95] mb-6">
                                Do You <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-rose-400">Know Me?</span>
                            </h1>

                            <p className="text-xl text-slate-300 font-manrope font-light leading-relaxed mb-8">
                                My name is <span className="text-white font-semibold">Asunta Wagura</span>, and this is my story—not because I seek sympathy, but because I want you to know that <span className="text-secondary font-medium">HIV is not the end of life</span>.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                <span className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-secondary" />
                                    Living Positively Since 1987
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-secondary rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* My Journey Section */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">My Journey</span>
                            <h2 className="text-4xl md:text-5xl font-black font-cormorant text-primary mb-6">
                                A Journey of Courage, Resilience & Hope
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-400" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none font-manrope"
                        >
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                I found out that I was HIV-positive in <span className="font-semibold text-primary">1987</span>. At that time, the world was filled with fear, stigma, and little knowledge about HIV/AIDS. Discovering my status was devastating, but over time, I learned that <span className="text-secondary font-semibold">knowledge is power</span>.
                            </p>

                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                Acceptance became my strength, and I took charge of my health. I started medication, maintained a healthy lifestyle, and found a purpose in helping other women like me navigate life with HIV.
                            </p>

                            <div className="bg-gradient-to-r from-purple-50 to-rose-50 border-l-4 border-secondary p-8 rounded-r-xl my-12">
                                <h3 className="text-2xl font-bold text-primary font-cormorant mb-4">My Greatest Joy</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    One of my greatest joys in life is my son, <span className="font-semibold">Joshua</span>. He is HIV-negative. When I became pregnant, I was determined to do everything possible to protect him. Through medical care, support, and faith, I was able to give birth to a healthy child. Having a loving and supportive family has given me even more reason to wake up every day with renewed energy and hope.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Are You Afraid Of? Section */}
            <section className="py-32 bg-[#0d0a1a] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-rose-900/20" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Quote className="w-16 h-16 mx-auto mb-8 text-secondary/50" />

                            <h2 className="text-4xl md:text-6xl font-black font-cormorant mb-8 leading-tight">
                                What Are You <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-400 to-rose-400">Afraid Of?</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-300 font-manrope font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                                I know that many people are still afraid—afraid to get tested, afraid of what others will say, afraid of what the future holds.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mt-16">
                                {[
                                    { icon: Shield, title: "Not a Death Sentence", desc: "Living with HIV is not the end. With right care, you can live fully." },
                                    { icon: Heart, title: "20+ Years Strong", desc: "I have been living positively for over 20 years." },
                                    { icon: Users, title: "Life Goes On", desc: "I stand as proof that life goes on, beautifully." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-secondary/50 transition-all group"
                                    >
                                        <item.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-lg font-bold mb-2 font-manrope">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Take Control Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">A Message From Asunta</span>
                            <h2 className="text-4xl md:text-5xl font-black font-cormorant text-primary mb-6">
                                Take Control of Your Life
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-purple-400 mx-auto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none font-manrope text-center"
                        >
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                If you haven&apos;t been tested, I urge you to do it today. Take control of your health and your future. If you are living with HIV, know that <span className="font-semibold text-primary">you are not alone</span>. There is help, there is support, and there is hope.
                            </p>

                            <div className="bg-gradient-to-br from-purple-50 via-white to-rose-50 border border-purple-100 p-12 rounded-3xl my-12 shadow-xl">
                                <h3 className="text-2xl font-bold text-primary font-cormorant mb-4">KENWA - Repairing Broken Hearts</h3>
                                <p className="text-slate-700 leading-relaxed mb-8">
                                    Through the <span className="font-semibold text-secondary">Kenya Network of Women with AIDS (KENWA)</span>, we repair broken hearts by offering guidance, care, and a community of strength. If you need someone to talk to or want to learn more about living positively with HIV, please reach out.
                                </p>

                                <Link href="/contact">
                                    <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-sm font-bold tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all">
                                        Reach Out to Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Closing Quote */}
            <section className="py-32 bg-[#0d0a1a] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto border-y border-white/20 py-20"
                    >
                        <div className="mb-10 text-6xl text-secondary opacity-50 font-serif">&ldquo;</div>
                        <h2 className="text-3xl md:text-5xl font-light italic font-cormorant leading-tight mb-10 tracking-wide text-gray-200">
                            HIV is not the end of life. <br />
                            It is a journey, one that I have walked for decades <br />
                            with <span className="text-white font-bold border-b border-secondary/50">courage, resilience, and hope</span>.
                        </h2>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-400 rounded-full mb-4 flex items-center justify-center">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-white font-black uppercase tracking-[0.2em] font-manrope text-sm">Asunta Wagura</div>
                            <div className="text-secondary text-xs uppercase tracking-widest opacity-80">Founder, KENWA & KAWAC</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
