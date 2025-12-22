"use client";

import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

const events = [
    {
        id: 1,
        date: "23 May, 2024",
        time: "8:00pm",
        location: "New York",
        title: "Play for the world with us",
        image: "/assets/impact-education.jpg"
    },
    {
        id: 2,
        date: "23 May, 2024",
        time: "8:00pm",
        location: "New York",
        title: "Contrary to popular belief",
        image: "/assets/hero-health.jpg"
    }
];

export function EventsOne() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-0 mx-auto">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Left Column: Heading */}
                    <div className="xl:col-span-1">
                        <div className="text-left mb-8">
                            <span className="text-secondary font-caveat text-3xl font-bold block mb-2">Upcoming events</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary font-manrope leading-tight mb-6">
                                Join our latest upcoming events
                            </h2>
                            <p className="text-[#6A7695] leading-relaxed mb-8">
                                There are many variations of passages of lorem ipsum available but the majority have suffered.
                            </p>
                            <Link href="/events" className="inline-flex items-center justify-center bg-[#F4F5F8] text-[#6A7695] hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold transition-all font-manrope text-sm uppercase tracking-wider">
                                Discover More
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Events Grid (Simulating Carousel for MVP) */}
                    <div className="xl:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.map((event) => (
                                <div key={event.id} className="group relative overflow-hidden rounded-xl">
                                    <div className="relative h-80 overflow-hidden">
                                        <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute top-0 left-0 bg-secondary text-white px-5 py-2 rounded-br-xl font-manrope font-bold text-sm">
                                            {event.date}
                                        </div>
                                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <ul className="flex gap-4 mb-3 text-sm text-[#6A7695]">
                                                <li className="flex items-center gap-1"><Clock className="w-4 h-4 text-secondary" /> {event.time}</li>
                                                <li className="flex items-center gap-1"><MapPin className="w-4 h-4 text-secondary" /> {event.location}</li>
                                            </ul>
                                            <h3 className="text-xl font-bold text-primary font-manrope mb-0 group-hover:text-secondary transition-colors">
                                                <Link href="/events">{event.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
