'use client';
import { Navbar } from "@/components/Navbar";
/// import { GooeyText } from "@/components/ui/GooeyText";
import HeroSection from "@/components/HeroSection";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { MARQUEE } from '@/config/content';
import { Footerdemo } from "@/components/Footer";
import About from "@/components/About";
import TitleSponserSection from "@/components/TitleSponserSection";
import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo";
import { Faqs } from "@/components/Faqs";
import { SponsorsSection } from "@/components/SponsorsSection";
import { SponsorUs } from "@/components/SponsorUs";


export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
        <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
        </div>
        <div className="flex-grow relative">
          <HeroSection />
        </div>
        <InfiniteMarquee items={MARQUEE} />
        <About />
        <TitleSponserSection />
        <SponsorsSection />
        <SponsorUs />
        <AnimatedBeamDemo />
        <Faqs />
        <Footerdemo />
      </div>
    </>
  );
}