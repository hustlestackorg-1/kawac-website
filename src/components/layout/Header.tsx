"use client";

import * as React from "react";
import Link from "next/link";
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
import { Menu, Search, ShoppingCart, Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { programsData } from "@/data/programs";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="relative w-full z-50">

      {/* Top Bar - Oxpins Style */}
      <div className="hidden lg:block bg-[#F4F5F8] text-[#6A7695] py-2.5 border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-medium font-manrope">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-secondary" />
              <span>Helpline: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-secondary" />
              <span>info@kawac.ca</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Toronto, ON, Canada</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3 text-[#6A7695]">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className={cn(
        "bg-white transition-all duration-300",
        scrolled ? "fixed top-0 inset-x-0 shadow-md animate-in slide-in-from-top-2" : "relative"
      )}>
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between">

            {/* Logo Area */}
            <div className="flex-shrink-0 bg-white py-4 md:py-6 pr-8 z-20 relative">
              <Link href="/" className="flex items-center gap-4">
                <img src="/assets/logo-icon.png" alt="KAWAC" className="h-24 w-auto" />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary tracking-[0.15em] font-playfair">KAWAC</span>
                  <span className="text-[10px] text-slate-500 tracking-[0.25em] uppercase font-medium">KACB Worldbank Alliance Canada</span>
                </div>
              </Link>
            </div>

            {/* Nav Menu - Teal Bar Background on Desktop */}
            <div className="hidden lg:flex items-center justify-end flex-grow bg-primary h-full py-4 pl-10 pr-4 rounded-bl-[50px] relative ml-[-20px]">

              {/* Navigation Menu Shadcn/Radix */}
              <NavigationMenu className="mr-8">
                <NavigationMenuList className="gap-2">

                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary font-bold uppercase tracking-wide text-sm")}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary font-bold uppercase tracking-wide text-sm data-[state=open]:bg-transparent data-[state=open]:text-secondary">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <ListItem href="/about" title="Who We Are">
                          Learn about our mission, history, and governance structure.
                        </ListItem>
                        <ListItem href="/about#team" title="Our Team">
                          Meet the board of directors and executive leadership.
                        </ListItem>
                        <ListItem href="/impact" title="Impact Reports">
                          See our audited financial statements and success metrics.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary font-bold uppercase tracking-wide text-sm data-[state=open]:bg-transparent data-[state=open]:text-secondary">
                      Programs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {programsData.map((program) => (
                          <ListItem
                            key={program.id}
                            href={`/programs/${program.id}`}
                            title={program.title}
                          >
                            {program.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary font-bold uppercase tracking-wide text-sm data-[state=open]:bg-transparent data-[state=open]:text-secondary">
                      Get Involved
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <ListItem href="/volunteer" title="Volunteer">
                          Join our team on the ground in Canada or Kenya.
                        </ListItem>
                        <ListItem href="/partnership" title="Partner with Us">
                          Institutional partnerships and grant collaborations.
                        </ListItem>
                        <ListItem href="/donate" title="Donate">
                          Support our programs with a one-time or monthly gift.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-transparent hover:text-secondary focus:bg-transparent focus:text-secondary font-bold uppercase tracking-wide text-sm")}>
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-6 border-l border-white/10 pl-6">
                <Search className="w-5 h-5 text-white cursor-pointer hover:text-secondary transition-colors" />
                <Link href="/donate">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 font-bold flex items-center gap-2 group">
                    <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    DONATE NOW
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-4 py-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary">
                    <Menu className="h-8 w-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-primary text-white border-none">
                  <div className="flex flex-col gap-6 mt-10">
                    <nav className="flex flex-col gap-4">
                      <Link href="/" className="text-lg font-bold hover:text-secondary">Home</Link>
                      <Link href="/about" className="text-lg font-bold hover:text-secondary">About</Link>
                      <Link href="/programs" className="text-lg font-bold hover:text-secondary">Programs</Link>
                      <Link href="/contact" className="text-lg font-bold hover:text-secondary">Contact</Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
