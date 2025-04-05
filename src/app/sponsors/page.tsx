'use client';
import { Navbar } from "@/components/Navbar";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { Footerdemo } from "@/components/Footer";
import { SponsorsSection } from "@/components/SponsorsSection";
import { SponsorUs } from "@/components/SponsorUs";
import TitleSponserSection2 from "@/components/TitleSponsorSection2";

const SPONSORS_MARQUEE = [
    "Be a Part of the Movement",
    "Fuel the Next Wave of Innovation",
    "Invest in Learning & Growth",
    "Connect with Changemakers",
  ];

export default function SponsorsPage() {
    return (
        <>
        <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
            <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
                <Navbar />
            </div>
            <div className="flex-grow relative">
            <TitleSponserSection2  />
        </div>
        <SponsorsSection />
        <SponsorUs />

            <InfiniteMarquee items={SPONSORS_MARQUEE} />
            <Footerdemo />
        </div>
        </>
    )
}