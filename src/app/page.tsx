import { Navbar } from "@/components/Navbar";
/// import { GooeyText } from "@/components/ui/GooeyText";
import HeroSection from "@/components/HeroSection";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { MARQUEE } from '@/config/content';
import { Footerdemo } from "@/components/Footer";


export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow relative">
          <HeroSection />
        </div>
        <InfiniteMarquee items={MARQUEE} />
        <Footerdemo />
      </div>
    </>
  );
}