/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { DEPARTMENTS } from "@/config/content";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { Button } from "@/components/ui/Button";
import { AiOutlineInstagram } from "react-icons/ai";
import { InfoIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SparklesCore } from "@/components/ui/Sparkles";
import { cn } from "@/lib/utils";

interface Event {
  name?: string;
  title?: string;
  type: string;
  description?: string;
}

interface DepartmentEventDetailsProps {
  departmentId: string;
}

const DepartmentEventDetails = ({ departmentId }: DepartmentEventDetailsProps) => {
  const department = DEPARTMENTS.find((dept) => dept.id === departmentId);

  if (!department) {
    return <div>Department not found</div>;
  }

  console.log('Event Poster Path:', department.eventPoster);
  console.log('Department Logo Path:', department.logo);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden z-20 pt-30 md:pt-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] dark:opacity-50" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px] dark:opacity-50" />
      </div>
      <SparklesCore
        id="tsparticlesdeptdetailspage"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={50}
        className="w-full h-full opacity-50 absolute"
      />

      <div className="relative z-10 max-w-xs md:max-w-6xl md:mx-auto px-4 md:px-4 py-4 md:py-8 dark:bg-black/50 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/10 dark:border-white/20 bg-white/50">
        {/* Poster Container */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 dark:bg-black/40 backdrop-blur-sm border border-white/10 dark:border-white/20 shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-xl md:hover:shadow-2xl">
          <div className="relative w-full h-[300px] md:h-[600px]">
            <img 
              src={department.eventPoster}
              alt={`${department.name} Events`}
              className="w-full h-full object-contain bg-gradient-to-br from-purple-100/10 to-cyan-100/10 dark:from-purple-900/10 dark:to-cyan-900/10 p-2 md:p-4 shadow-xl md:shadow-2xl"
              style={{ display: 'block' }}
              onError={(e) => {
                console.error('Image failed to load:', e);
                const imgElement = e.target as HTMLImageElement;
                if (imgElement.src !== department.logo) {
                  imgElement.src = department.logo;
                }
              }}
            />
          </div>
        </div>

        {/* Department Name Marquee */}
        <div className="my-4 md:my-8 -mx-2 md:-mx-4 overflow-hidden bg-transparent">
          <InfiniteMarquee
            items={[department.marquee, department.marquee, department.marquee]}
            speed={40}
            className="text-sm md:text-lg bg-transparent"
          />
        </div>

        {/* Events Table */}
        <div className="overflow-auto rounded-lg md:rounded-xl border border-white/10 dark:border-white/20 bg-white/40 dark:bg-black/40 shadow-md md:shadow-lg">
          <table className="w-full whitespace-nowrap text-xs md:text-sm">
            <thead className="border-b border-white/10 dark:border-white/20 bg-gray-400/30 dark:bg-gray-400/20">
              <tr>
                <th className="w-[60%] p-3 md:p-4 text-left font-medium text-black dark:text-white">Event Name</th>
                <th className="w-[40%] p-3 md:p-4 text-left font-medium text-black dark:text-white border-l border-white/10 dark:border-white/20">
                  Type
                  <Popover>
                    <PopoverTrigger>
                      <InfoIcon className="ml-2 inline-block h-3 w-3 md:h-4 md:w-4 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" />
                    </PopoverTrigger>
                    <PopoverContent className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-white/20 text-xs md:text-sm">
                      <div className="space-y-1 md:space-y-2">
                        <p className="font-semibold text-black dark:text-white">Event Types:</p>
                        <p className="text-black dark:text-white"><span className="text-blue-600 dark:text-blue-400">Technical</span> - Engineering and technology focused events</p>
                        <p className="text-black dark:text-white"><span className="text-red-600 dark:text-red-400">Non-Technical</span> - Cultural and general events</p>
                        <p className="text-black dark:text-white"><span className="text-green-600 dark:text-green-400">Workshop</span> - Hands on learning and practical experience</p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 dark:divide-white/20">
              {department.events?.map((event: Event, index) => (
                <tr key={index} className="group transition-colors hover:bg-white/5 dark:hover:bg-white/5">
                  <td className="p-3 md:p-4 text-black dark:text-white text-xs md:text-sm">{event.name || event.title}</td>
                  <td className="p-3 md:p-4 border-l border-white/10 dark:border-white/20">
                    <span className={cn(
                      "px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium transition-colors",
                      {
                        "bg-blue-500/10 text-blue-700 dark:text-blue-400 group-hover:bg-blue-500/20": event.type === "Technical",
                        "bg-red-500/10 text-red-700 dark:text-red-400 group-hover:bg-red-500/20": event.type === "Non-Technical",
                        "bg-green-500/10 text-green-700 dark:text-green-400 group-hover:bg-green-500/20": event.type === "Workshop"
                      }
                    )}>
                      {event.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-2 md:gap-8 mt-4 md:mt-8">
          <Button 
            variant="shimmer" 
            size="custom" 
            onClick={() => window.open(department.socialLinks?.instagram, '_blank')}
            className="flex items-center gap-1 md:gap-2 hover:scale-105 transition-transform text-xs md:text-base"
          >
            <AiOutlineInstagram className="w-3 h-3 md:w-6 md:h-6" />
            <span className="text-xs md:text-lg">Follow Us</span>
          </Button>
          <Button 
            variant="shimmer" 
            size="custom"
            onClick={() => window.open(department.registrationLink, '_blank')}
            className="hover:scale-105 transition-transform text-xs md:text-lg"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentEventDetails; 