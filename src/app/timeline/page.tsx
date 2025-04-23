"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "@/app/timeline/content";
import MainHeading from "@/components/ui/MainHeading";
import { SparklesCore } from "@/components/ui/Sparkles";

const TimelinePage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");

  const dayFilteredEvents = timelineEvents.filter(
    (event) => event.day === selectedDay
  );

  const filteredEvents =
    filter === "all"
      ? dayFilteredEvents
      : dayFilteredEvents.filter((event) => event.timing === filter);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col w-full">
      <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
      </div>
      <main className="min-h-screen">
        <SparklesCore
          id="tsparticlestimeline"
          background="transparent"
          minSize={0.8}
          maxSize={1.6}
          particleDensity={30}
          className="w-full h-full opacity-50 absolute"
        />
        {/* Background Grid */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="border border-[#2A2A2A] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-900/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mt-12 mb-16 text-center font-press tracking-widest">
              Timeline
            </h1>

            <div className="flex justify-center gap-4 mb-12 z-[999]">
              {["day1", "day2"].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day as "day1" | "day2")}
                  className={`px-5 py-2 rounded-xl capitalize transition-all duration-300 font-medium ${
                    selectedDay === day
                      ? "bg-yellow-900 border border-yellow-500/20 text-yellow-300"
                      : "bg-purple-900 border border-purple-500/20 text-purple-200 hover:bg-purple-900/60"
                  }`}
                >
                  {day === "day1" ? "Day 1" : "Day 2"}
                </button>
              ))}
            </div>

            {/* Filter Buttons */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["all", "milestone", "partnership", "theme", "launch"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`inline-flex items-center px-4 py-2 rounded-xl capitalize ${
                      filter === category
                        ? "bg-yellow-900/10 border border-yellow-500/20 text-yellow-300"
                        : "bg-purple-900/10 border border-purple-500/20 text-purple-200 hover:bg-purple-900/20"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div> */}
            {/* <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
              <div className="absolute top-1/2 left-1/1 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[800px] bg-purple-500/30 rounded-full blur-[120px]" />
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[800px] bg-cyan-500/30 rounded-full blur-[120px]" />
            </div> */}
            {/* Roadmap Timeline */}
            <div className="relative">
              {/* Connecting Line with curved sections */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
                <div
                  className={`w-1 h-full transition-all duration-300 ${
                    hoveredEvent
                      ? "bg-gradient-to-b from-purple-500/30 via-yellow-500/30 to-purple-500/30"
                      : "bg-gradient-to-b from-purple-500 via-yellow-500 to-purple-500"
                  }`}
                />
              </div>

              {/* Timeline Events */}
              <div className="space-y-16">
                {filteredEvents.map((event, index) => {
                  const eventKey = `${event.id}-${event.title}`;
                  const isHovered = hoveredEvent === eventKey;

                  return (
                    <motion.div
                      key={eventKey}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.3,
                      }}
                      onMouseEnter={() => setHoveredEvent(eventKey)}
                      onMouseLeave={() => setHoveredEvent(null)}
                      className={`flex justify-end ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      } gap-8 relative group`}
                    >
                      {/* Event Content */}
                      <div
                        className={`w-1/3 ${
                          index % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`relative p-6 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden
                        ${
                          isHovered
                            ? "transform scale-105 shadow-2xl border-2 border-transparent"
                            : "bg-gradient-to-br from-purple-900 to-purple-900 border border-purple-500"
                        }`}
                        >
                          {/* Gradient Border Background */}
                          {isHovered && (
                            <>
                              <div className="absolute inset-0 rounded-2xl bg-purple-950" />
                            </>
                          )}

                          <div className="relative">
                            {/* <span
                              className={`text-sm font-semibold text-purple-200 transition-colors duration-300 ${
                                isHovered ? "text-yellow-300" : ""
                              }`}
                            >
                              {event.timing}
                            </span> */}
                            <h2 className="text-2xl font-bold text-yellow-200 mt-2 flex items-center gap-2">
                              {index % 2 === 0 ? (
                                <>
                                  {event.title}{" "}
                                  <span className="w-6 h-6 text-yellow-400">
                                    {event.icon}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="w-6 h-6 text-yellow-400">
                                    {event.icon}
                                  </span>{" "}
                                  {event.title}
                                </>
                              )}
                            </h2>
                            <p className="mt-2 text-gray-300 text-left">
                              {event.venue}
                            </p>
                            <div className="w-full flex justify-end">
                              <span
                                className={`inline-flex text-yellow-400 items-center gap-2 px-4 py-2 rounded-xl mt-3 text-sm transition-all duration-300 ${
                                  isHovered
                                    ? "bg-yellow-900/10 border border-yellow-500/20 text-yellow-300"
                                    : "bg-purple-900/10 border border-purple-500/20 text-purple-200"
                                } capitalize`}
                              >
                                {event.timing}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Center Point with curved connectors */}
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                            isHovered
                              ? "bg-yellow-400 border-purple-500 scale-125 shadow-lg shadow-purple-500/20"
                              : "bg-yellow-500 border-purple-600"
                          }`}
                        />
                      </div>

                      {/* Empty space for the other side */}
                      <div className="w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};

export default TimelinePage;
