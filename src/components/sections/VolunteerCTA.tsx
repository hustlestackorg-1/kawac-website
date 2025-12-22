"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function VolunteerCTA() {
    return (
        <section className="relative py-32 bg-fixed bg-cover bg-center flex items-center justify-center overlay-dark" style={{ backgroundImage: "url('/assets/impact-community.jpg')" }}>
            {/* Dark Overlay using CSS utility or absolute div */}
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>

            <div className="container relative z-10 px-4 md:px-0 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[#FBAF3C] font-caveat text-3xl font-bold block mb-4">Join the Movement</span>
                    <h2 className="text-white font-playfair font-bold text-5xl md:text-7xl leading-tight mb-10">
                        United for Systemic <br /> Change.
                    </h2>
                    <Link href="/volunteer">
                        <Button className="bg-white text-primary hover:bg-[#FBAF3C] hover:text-white rounded-full px-12 py-8 text-base font-extrabold tracking-widest transition-all duration-300">
                            DISCOVER MORE
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
