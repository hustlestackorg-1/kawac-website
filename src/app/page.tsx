"use client";

import { Hero } from "@/components/layout/Hero";
import { StrategicImpact } from "@/components/sections/StrategicImpact";
import { TheCorridor } from "@/components/sections/TheCorridor";
import { FeatureOne } from "@/components/sections/FeatureOne"; // Split Banner
import { CounterOne } from "@/components/sections/CounterOne";
import { NewsOne } from "@/components/sections/NewsOne";
import { CinematicGallery } from "@/components/sections/CinematicGallery";
import { LiveImpact } from "@/components/sections/LiveImpact";
import { DirectorsInsight } from "@/components/sections/DirectorsInsight";
import { GlobalBridgeMap } from "@/components/sections/GlobalBridgeMap";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <LiveImpact />
      <StrategicImpact />
      <DirectorsInsight />
      <GlobalBridgeMap />
      <TheCorridor />
      <CinematicGallery />
      <FeatureOne />
      <CounterOne />
      <NewsOne />
    </main>
  );
}
