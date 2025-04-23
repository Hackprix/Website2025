"use client";

import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StallCard } from "@/components/StallCard";
import { SearchBarWithFilter } from "@/components/SearchBarWithFilter";
import { Stall, StallType, STALLS } from "./content";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/Sparkles";

const getPrefixPriority = (prefix: string) => {
  if (prefix === "SS") return 0;
  if (prefix === "F") return 1;
  if (prefix === "S") return 2;
  return 3;
};

const sortStalls = (a: Stall, b: Stall) => {
  if (a.stallNumber && b.stallNumber) {
    // Extract the prefix (SS, F, or S) and number parts
    const aMatch = a.stallNumber.match(/^(SS|[FS])(\d+)$/);
    const bMatch = b.stallNumber.match(/^(SS|[FS])(\d+)$/);

    if (aMatch && bMatch) {
      const [, aPrefix, aNum] = aMatch;
      const [, bPrefix, bNum] = bMatch;

      // Compare prefixes first based on priority
      const aPriority = getPrefixPriority(aPrefix);
      const bPriority = getPrefixPriority(bPrefix);

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      // If prefixes are the same, compare numbers
      return parseInt(aNum) - parseInt(bNum);
    }
    return a.stallNumber.localeCompare(b.stallNumber);
  }
  // Put empty stall numbers at the end
  if (!a.stallNumber) return 1;
  if (!b.stallNumber) return -1;
  return 0;
};

export default function StallsPage() {
  const [filteredStalls, setFilteredStalls] = useState<Stall[]>(
    [...STALLS].sort(sortStalls)
  );

  const handleSearch = (searchTerm: string) => {
    const filtered = STALLS.filter((stall) =>
      stall.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Maintain the same sorting when filtering
    setFilteredStalls([...filtered].sort(sortStalls));
  };

  const handleTypeFilter = (type: StallType | null) => {
    if (!type) {
      setFilteredStalls([...STALLS].sort(sortStalls));
      return;
    }
    const filtered = STALLS.filter((stall) => stall.type === type);
    setFilteredStalls([...filtered].sort(sortStalls));
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col w-full">
      <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
      </div>

      <main className="min-h-screen mt-24 md:mt-40 bg-white dark:bg-black text-black dark:text-white">
        <SparklesCore
          id="tsparticlesstalls"
          background="transparent"
          minSize={0.8}
          maxSize={1.6}
          particleDensity={60}
          className="w-full h-full opacity-50 absolute"
        />

        <h1 className="text-4xl font-bold mb-8 text-center font-press tracking-widest">
          Stalls
        </h1>
        <div className="p-4">
          <SearchBarWithFilter
            onSearch={handleSearch}
            onTypeFilter={handleTypeFilter}
          />

          <div className="grid gap-2 gap-y-4 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:mx-8">
            {filteredStalls.map((stall) => (
              <StallCard key={stall.id} stall={stall} />
            ))}
          </div>
        </div>
        <SparklesCore
          id="tsparticlesstalls2"
          background="transparent"
          minSize={0.8}
          maxSize={1.6}
          particleDensity={60}
          className="w-full h-full opacity-50 absolute"
        />
      </main>
      <Footerdemo />
    </div>
  );
}
