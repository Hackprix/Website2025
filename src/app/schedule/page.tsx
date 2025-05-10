"use client";
import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SparklesCore } from "@/components/ui/Sparkles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "@/components/ui/carousel1";
import { DEPARTMENTS } from "@/config/content";
import Image from "next/image";

const SchedulePage = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col w-full">
      <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
      </div>
      <main className="min-h-screen">
        {/* <SparklesCore
          id="tsparticlesschedule"
          background="transparent"
          minSize={0.8}
          maxSize={1.6}
          particleDensity={30}
          className="w-full h-full opacity-50 absolute"
        /> */}

        {/* Content */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mt-12 mb-16 text-center font-press tracking-widest">
              Schedule
            </h1>

            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {DEPARTMENTS.map((department) => (
                    <CarouselItem key={department.id}>
                      <div className="p-4">
                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-500/20">
                          <Image
                            src={department.schedulePoster}
                            alt={`${department.name} Schedule`}
                            width={800}
                            height={600}
                            className="w-full h-auto max-h-[600px] object-contain"
                          />
                          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-900/5">
                            <h2 className="text-2xl font-bold text-yellow-200">
                              {department.name}
                            </h2>
                            <p className="text-white mt-2">
                              {department.shortName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <CarouselNavigation
                    className="flex justify-between px-60"
                    classNameButton="bg-purple-900/20 border border-purple-500/20 text-purple-200 hover:bg-purple-900/40 p-4"
                    alwaysShow
                  />
                </div>
                <CarouselIndicator />
              </Carousel>
            </div>
          </div>
        </div>
      </main>
      <Footerdemo />
    </div>
  );
};

export default SchedulePage;
