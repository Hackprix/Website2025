"use client";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footerdemo } from "@/components/Footer";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import DepartmentEventDetails from "@/components/DepartmentEventDetails";

const EVENT_DETAILS_MARQUEE = [
  "Explore Events",
  "Register for Competitions",
  "Join Workshops",
  "Participate in Cultural Activities",
];

export default function DepartmentEventPage() {
  const { departmentId } = useParams();

  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
        <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <Navbar />
        </div>
        <div className="flex-grow relative">
          <DepartmentEventDetails departmentId={departmentId as string} />
        </div>
        <InfiniteMarquee items={EVENT_DETAILS_MARQUEE} speed={40} />
        <Footerdemo />
      </div>
    </>
  );
}