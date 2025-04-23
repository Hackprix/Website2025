"use client";

import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StallCard } from "@/components/StallCard";
import { SearchBarWithFilter } from "@/components/SearchBarWithFilter";
import { Stall, StallType, STALLS } from "./content";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/Sparkles";

export default function StallsPage() {
  const [filteredStalls, setFilteredStalls] = useState<Stall[]>(
    [...STALLS].sort((a, b) => {
      // If both have stall numbers
      if (a.stallNumber && b.stallNumber) {
        // Extract the letter and number parts
        const aMatch = a.stallNumber.match(/([A-Z])(\d+)/);
        const bMatch = b.stallNumber.match(/([A-Z])(\d+)/);

        if (aMatch && bMatch) {
          // Compare letters first
          if (aMatch[1] !== bMatch[1]) {
            return aMatch[1].localeCompare(bMatch[1]);
          }
          // If letters are same, compare numbers
          return parseInt(aMatch[2]) - parseInt(bMatch[2]);
        }
        return a.stallNumber.localeCompare(b.stallNumber);
      }
      // Put empty stall numbers at the end
      if (!a.stallNumber) return 1;
      if (!b.stallNumber) return -1;
      return 0;
    })
  );

  const handleSearch = (searchTerm: string) => {
    const filtered = STALLS.filter((stall) =>
      stall.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Maintain the same sorting when filtering
    setFilteredStalls(
      filtered.sort((a, b) => {
        if (a.stallNumber && b.stallNumber) {
          const aMatch = a.stallNumber.match(/([A-Z])(\d+)/);
          const bMatch = b.stallNumber.match(/([A-Z])(\d+)/);

          if (aMatch && bMatch) {
            if (aMatch[1] !== bMatch[1]) {
              return aMatch[1].localeCompare(bMatch[1]);
            }
            return parseInt(aMatch[2]) - parseInt(bMatch[2]);
          }
          return a.stallNumber.localeCompare(b.stallNumber);
        }
        if (!a.stallNumber) return 1;
        if (!b.stallNumber) return -1;
        return 0;
      })
    );
  };

  const handleTypeFilter = (type: StallType | null) => {
    if (!type) {
      setFilteredStalls(
        [...STALLS].sort((a, b) => {
          if (a.stallNumber && b.stallNumber) {
            const aMatch = a.stallNumber.match(/([A-Z])(\d+)/);
            const bMatch = b.stallNumber.match(/([A-Z])(\d+)/);

            if (aMatch && bMatch) {
              if (aMatch[1] !== bMatch[1]) {
                return aMatch[1].localeCompare(bMatch[1]);
              }
              return parseInt(aMatch[2]) - parseInt(bMatch[2]);
            }
            return a.stallNumber.localeCompare(b.stallNumber);
          }
          if (!a.stallNumber) return 1;
          if (!b.stallNumber) return -1;
          return 0;
        })
      );
      return;
    }
    const filtered = STALLS.filter((stall) => stall.type === type);
    setFilteredStalls(
      filtered.sort((a, b) => {
        if (a.stallNumber && b.stallNumber) {
          const aMatch = a.stallNumber.match(/([A-Z])(\d+)/);
          const bMatch = b.stallNumber.match(/([A-Z])(\d+)/);

          if (aMatch && bMatch) {
            if (aMatch[1] !== bMatch[1]) {
              return aMatch[1].localeCompare(bMatch[1]);
            }
            return parseInt(aMatch[2]) - parseInt(bMatch[2]);
          }
          return a.stallNumber.localeCompare(b.stallNumber);
        }
        if (!a.stallNumber) return 1;
        if (!b.stallNumber) return -1;
        return 0;
      })
    );
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
