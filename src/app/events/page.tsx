'use client';
import { Navbar } from "@/components/Navbar";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { Footerdemo } from "@/components/Footer";
import DepartmentPage from "@/components/DepartmentPage";

const EVENTS_MARQUEE = [
  "Discover Amazing Events!",
  "Join Exciting Competitions",
  "Learn from Expert Workshops",
  "Network with Industry Leaders",
];

export default function EventsPage() {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
        <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <Navbar />
        </div>
        <div className="flex-grow relative">
          <DepartmentPage />
        </div>
        <InfiniteMarquee items={EVENTS_MARQUEE} />
        <Footerdemo />
      </div>
    </>
  );
} 