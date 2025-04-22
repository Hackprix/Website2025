"use client";

import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StallCard } from "@/components/StallCard";
import { SearchBarWithFilter } from "@/components/SearchBarWithFilter";
import { Stall, StallType, STALLS } from "./content";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/Sparkles";

export default function StallsPage() {
  const [filteredStalls, setFilteredStalls] = useState<Stall[]>(STALLS);

  const handleSearch = (searchTerm: string) => {
    const filtered = STALLS.filter((stall) =>
      stall.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStalls(filtered);
  };

  const handleTypeFilter = (type: StallType | null) => {
    if (!type) {
      setFilteredStalls(STALLS);
      return;
    }
    const filtered = STALLS.filter((stall) => stall.type === type);
    setFilteredStalls(filtered);
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
      
        <h1 className="text-4xl font-bold mb-8 text-center font-press tracking-widest">Stalls</h1>
        <div className="p-4">
        <SearchBarWithFilter
          onSearch={handleSearch}
          onTypeFilter={handleTypeFilter}
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
