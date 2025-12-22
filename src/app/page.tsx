"use client";

import { Hero } from "@/components/layout/Hero";
import { FeatureTop } from "@/components/sections/FeatureTop";
import { AboutOne } from "@/components/sections/AboutOne";
import { CausesOne } from "@/components/sections/CausesOne";
import { FeatureOne } from "@/components/sections/FeatureOne"; // Split Banner
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { CounterOne } from "@/components/sections/CounterOne";
import { EventsOne } from "@/components/sections/EventsOne";
import { NewsOne } from "@/components/sections/NewsOne";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <FeatureTop />
      <AboutOne />
      <CausesOne />
      <FeatureOne />
      <VolunteerCTA />
      <CounterOne />
      <EventsOne />
      <NewsOne />
    </main>
  );
}
