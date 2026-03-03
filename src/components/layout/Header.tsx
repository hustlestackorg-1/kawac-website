"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, Mail, Search, Heart, ArrowRight, HeartHandshake, Leaf, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { programsData, programPillars, getProgramsByPillar } from "@/data/programs";
import { ClassicTicker } from "@/components/ui/classic-ticker";

const pillarIcons = {
  "community-care": HeartHandshake,
  "climate-justice": Leaf,
  "inclusive-development": Scale,
};

const pillarColors: Record<string, string> = {
  "community-care": "text-rose-500",
  "climate-justice": "text-emerald-500",
  "inclusive-development": "text-violet-400",
};

const pillarBg: Record<string, string> = {
  "community-care": "bg-rose-50 border-rose-100 hover:bg-rose-100",
  "climate-justice": "bg-emerald-50 border-emerald-100 hover:bg-emerald-100",
  "inclusive-development": "bg-violet-50 border-violet-100 hover:bg-violet-100",
};

const pillarAccentBg: Record<string, string> = {
  "community-care": "bg-rose-500",
  "climate-justice": "bg-emerald-500",
  "inclusive-development": "bg-violet-500",
};

export function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<string>("community-care");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const activePillar = programPillars.find(p => p.id === activeTab)!;
  const activePillarPrograms = getProgramsByPillar(activeTab as any);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Identity & Utility Layer */}
      <div className={cn(
        "bg-[#100a26] text-white/70 py-1 transition-all duration-500 overflow-hidden",
        scrolled ? "h-0 py-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-manrope font-black tracking-[0.2em] uppercase">
          <div className="flex items-center gap-8">
            <a href="mailto:info@kawac.ca" className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Mail size={12} className="text-secondary" />
              <span>info@kawac.ca</span>
            </a>
            <div className="hidden md:flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
              <Phone size={12} className="text-secondary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <Link href="/portal" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-sm text-white transition-all border border-white/5">
              Impact Hub
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Layer */}
      <div className={cn(
        "w-full transition-all duration-500 border-b border-logo-gradient relative z-[60]",
        scrolled
          ? "bg-white/97 backdrop-blur-md py-1 shadow-lg"
          : "bg-white/92 backdrop-blur-md py-2"
      )}>
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-start gap-4 lg:gap-6 min-w-fit">
              <Link href="/" className="flex items-center gap-4 lg:gap-6 group relative">
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10"
                  >
                    <img
                      src="/assets/maple-leaf-red.png"
                      alt="Heritage"
                      className={cn(
                        "transition-all duration-700 object-contain drop-shadow-[0_0_10px_rgba(220,38,38,0.2)] mix-blend-multiply brightness-125 saturate-150",
                        scrolled ? "h-6" : "h-8"
                      )}
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <img
                    src="/assets/v3-logo.jpg"
                    alt="Seal"
                    className={cn(
                      "transition-all duration-700 object-contain",
                      scrolled ? "h-8 w-auto" : "h-10 w-auto"
                    )}
                  />
                </div>

                <div className="flex flex-col justify-center border-l border-slate-200 pl-6 h-10 lg:h-12">
                  <div className="relative">
                    <h1 className={cn(
                      "font-cormorant font-black tracking-[0.2em] text-primary transition-all duration-700 ease-in-out uppercase leading-none",
                      scrolled ? "text-xl" : "text-3xl lg:text-4xl"
                    )}>
                      KAWAC
                    </h1>
                  </div>
                  <span className={cn(
                    "font-manrope font-black text-secondary tracking-[0.15em] transition-all duration-700 whitespace-nowrap uppercase",
                    scrolled ? "text-[7px] mt-0.5" : "text-[8px] lg:text-[9px] mt-0.5"
                  )}>
                    KACB WORLDBANK ALLIANCE CANADA
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden xl:flex flex-1 justify-center px-4">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Our Origin", href: "/origin" },
                    { name: "Programs", href: "/programs", hasDropdown: true },
                    { name: "Impact", href: "/impact" },
                    { name: "Our Team", href: "/team" },
                    { name: "Events", href: "/events" },
                    { name: "Contact Us", href: "/contact" }
                  ].map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <NavigationMenuTrigger
                            onClick={() => { if (item.href) router.push(item.href); }}
                            className={cn(
                              "bg-transparent font-black uppercase tracking-[0.2em] text-[10px] h-8 px-3 transition-all hover:bg-transparent",
                              scrolled ? "text-primary/80 hover:text-primary" : "text-primary/70 hover:text-primary"
                            )}>
                            {item.name}
                          </NavigationMenuTrigger>

                          {/* ── Mega Dropdown ────────────────────────────── */}
                          <NavigationMenuContent>
                            <div className="w-[820px] bg-white/95 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 rounded-2xl overflow-hidden">

                              {/* Pillar Tabs Row */}
                              <div className="flex border-b border-slate-100">
                                {programPillars.map((pillar) => {
                                  const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
                                  const isActive = activeTab === pillar.id;
                                  return (
                                    <button
                                      key={pillar.id}
                                      onMouseEnter={() => setActiveTab(pillar.id)}
                                      onClick={() => router.push(`/programs#${pillar.id}`)}
                                      className={cn(
                                        "flex-1 flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 group relative",
                                        isActive ? "bg-slate-50" : "hover:bg-slate-50/60"
                                      )}
                                    >
                                      <div className={cn(
                                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                                        isActive
                                          ? cn("text-white", pillarAccentBg[pillar.id])
                                          : cn(pillarColors[pillar.id], "bg-slate-100 group-hover:bg-slate-200")
                                      )}>
                                        <Icon size={15} />
                                      </div>
                                      <div>
                                        <div className={cn(
                                          "text-[10px] font-black uppercase tracking-[0.15em] leading-tight transition-colors",
                                          isActive ? "text-slate-800" : "text-slate-600 group-hover:text-slate-800"
                                        )}>
                                          {pillar.title}
                                        </div>
                                        <div className="text-[8px] text-slate-400 font-medium tracking-wider mt-0.5">
                                          {pillar.subtitle}
                                        </div>
                                      </div>
                                      {/* Active indicator */}
                                      {isActive && (
                                        <div className={cn("absolute bottom-0 left-0 right-0 h-0.5", pillarAccentBg[activeTab])} />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Programs Panel */}
                              <div className="grid grid-cols-3 gap-0 p-5">
                                {/* Left: Program list */}
                                <div className="col-span-2 grid grid-cols-2 gap-1.5 pr-5 border-r border-slate-100">
                                  {activePillarPrograms.slice(0, 8).map((p) => (
                                    <NavigationMenuLink asChild key={p.id}>
                                      <Link
                                        href={`/programs/${p.id}`}
                                        className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                      >
                                        <div className={cn(
                                          "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-all group-hover:scale-125",
                                          pillarAccentBg[activeTab]
                                        )} />
                                        <div>
                                          <div className="text-[10px] font-bold text-slate-800 group-hover:text-slate-900 leading-snug">
                                            {p.title}
                                          </div>
                                          <div className="text-[9px] text-slate-400 leading-relaxed mt-0.5 line-clamp-1">
                                            {p.description}
                                          </div>
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  ))}
                                </div>

                                {/* Right: Pillar summary + CTA */}
                                <div className="col-span-1 pl-5 flex flex-col justify-between">
                                  <div>
                                    <div className={cn(
                                      "text-[9px] font-black uppercase tracking-[0.2em] mb-2",
                                      pillarColors[activeTab]
                                    )}>
                                      {activePillar?.subtitle}
                                    </div>
                                    <p className="text-[10px] text-slate-500 leading-relaxed font-manrope">
                                      {activePillar?.description}
                                    </p>
                                  </div>
                                  <div className="space-y-2 mt-4">
                                    <Link
                                      href={`/programs#${activeTab}`}
                                      className={cn(
                                        "flex items-center justify-between p-3 rounded-xl border transition-all group",
                                        pillarBg[activeTab]
                                      )}
                                    >
                                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 group-hover:text-slate-900">
                                        Explore All
                                      </span>
                                      <ArrowRight size={12} className="text-slate-500 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                      href="/programs"
                                      className="flex items-center justify-between p-3 rounded-xl bg-primary text-white transition-all group hover:bg-primary/90"
                                    >
                                      <span className="text-[10px] font-black uppercase tracking-widest">
                                        All Programs
                                      </span>
                                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </NavigationMenuContent>
                          {/* ── End Mega Dropdown ─────────────────────── */}
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "inline-flex items-center justify-center rounded-none px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-secondary group relative hover:bg-transparent",
                              scrolled ? "text-primary/80" : "text-primary/70"
                            )}
                          >
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300" />
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Action Area */}
            <div className="flex-shrink-0 flex justify-end items-center gap-4 lg:gap-8 min-w-fit">
              <button className="text-primary/40 hover:text-primary transition-colors hidden lg:block">
                <Search size={20} strokeWidth={2.5} />
              </button>
              <Link href="/donate">
                <Button
                  style={{ backgroundColor: '#dc2626' }}
                  className="hover:bg-[#b91c1c] text-white font-black rounded-none px-6 lg:px-8 py-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 flex items-center gap-3 border-none"
                >
                  <Heart size={14} className="fill-white" />
                  <span className="hidden lg:inline">Donate Now</span>
                  <span className="lg:hidden">Donate</span>
                </Button>
              </Link>

              {/* Mobile Menu */}
              <div className="xl:hidden">
                <Sheet>
                  <SheetTrigger>
                    <Menu size={24} className="text-primary" />
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[320px] bg-white border-l border-slate-100 p-0 overflow-y-auto">
                    <div className="p-8 space-y-8">
                      <div className="text-2xl font-black font-cormorant text-primary">KAWAC</div>
                      <div className="flex flex-col gap-1">
                        {[
                          { name: "Home", href: "/" },
                          { name: "Our Origin", href: "/origin" },
                          { name: "Impact", href: "/impact" },
                          { name: "Our Team", href: "/team" },
                          { name: "Events", href: "/events" },
                          { name: "Contact", href: "/contact" }
                        ].map(item => (
                          <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 uppercase tracking-widest py-3 border-b border-slate-100 hover:text-secondary transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      {/* Mobile Programs by pillar */}
                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-secondary uppercase tracking-widest">Programs</div>
                        {programPillars.map((pillar) => {
                          const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
                          return (
                            <div key={pillar.id}>
                              <Link href={`/programs#${pillar.id}`} className={cn("flex items-center gap-2 text-xs font-bold text-slate-800 mb-2", pillarColors[pillar.id])}>
                                <Icon size={14} /> {pillar.title}
                              </Link>
                              <div className="pl-5 space-y-1">
                                {getProgramsByPillar(pillar.id).slice(0, 4).map(p => (
                                  <Link key={p.id} href={`/programs/${p.id}`} className="block text-[11px] text-slate-500 hover:text-slate-800 py-0.5 transition-colors">
                                    → {p.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <Link href="/donate">
                        <Button style={{ backgroundColor: '#dc2626' }} className="w-full text-white font-black text-xs tracking-widest uppercase">
                          Donate Now
                        </Button>
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Classic Ticker */}
      <div className="border-t border-white/10">
        <ClassicTicker />
      </div>

      <div className={cn(
        "bg-white h-[1px] w-full transition-all duration-500",
        scrolled ? "opacity-0 invisible" : "opacity-100 visible"
      )} />
    </header>
  );
}
