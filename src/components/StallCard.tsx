"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Stall } from "@/app/stalls/content";
import Image from "next/image";

interface StallCardProps {
  stall: Stall;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Food & Beverages":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Arts & Crafts":
      return "bg-red-100 text-red-800 border-red-200";
    case "Games & Activities":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Tech & Innovation":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "Merchandise & Accessories":
      return "bg-green-100 text-green-800 border-green-200";
    case "Others":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function StallCard({ stall }: StallCardProps) {
  return (
    <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <div className="flex flex-col">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={stall.image}
            alt={stall.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2 font-poppins">
            {stall.name}
          </h3>
          <div className="flex flex-col gap-2 mb-2">
            <span className="font-poppins bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-700 text-black dark:text-white text-xs font-bold tracking-wider px-2 py-0.5 rounded-full w-fit">
              • Stall No: {stall.stallNumber}
            </span>
            <span className={`font-poppins border text-xs font-bold tracking-wider px-2 py-0.5 rounded-full w-fit ${getTypeColor(stall.type)}`}>
              • {stall.type}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins">
            {stall.description}
          </p>
        </div>
      </div>
    </BackgroundGradient>
  );
} 