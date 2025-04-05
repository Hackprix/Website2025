import Venue from '@/components/Venue';
import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
export default function VenuePage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
    <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
    </div>
    <div className="flex-grow relative">
    <Venue />
    </div>
    <Footerdemo />
</div>
  );
}