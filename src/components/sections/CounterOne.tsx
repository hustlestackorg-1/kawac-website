"use client";

import { CountUp } from "@/components/ui/count-up";

const stats = [
    { id: 1, value: 70, suffix: "m", label: "Total donation" },
    { id: 2, value: 48, suffix: "k", label: "Projects funded" },
    { id: 3, value: 38, suffix: "%", label: "Kids need help" },
    { id: 4, value: 230, suffix: "", label: "Our volunteers" },
];

export function CounterOne() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background pattern simulation */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="container px-4 md:px-0 mx-auto relative z-10">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white">
                    {stats.map((stat) => (
                        <li key={stat.id} className="relative group">
                            <div className="mb-2 flex items-center justify-center gap-1">
                                <h3 className="text-5xl md:text-6xl font-extrabold font-manrope">
                                    <CountUp end={stat.value} />
                                </h3>
                                <span className="text-3xl font-caveat text-secondary">{stat.suffix}</span>
                            </div>
                            <p className="text-white/70 font-manrope uppercase tracking-wider font-bold text-sm group-hover:text-white transition-colors">{stat.label}</p>

                            {/* Divider line except last */}
                            <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 last:hidden"></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
