 
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SparklesCore } from "./ui/Sparkles";
import Image from "next/image";

interface Sponsor {
  id: string;
  name: string;
  image: string;
  tier: "Platinum" | "Gold" | "Silver";
  className?: string;
  href?: string;
}

const SPONSORS: Sponsor[] = [
  {
    id: "sponsor-1",
    name: "Sponsor 1",
    image: "/sponsors/acube.png",
    tier: "Gold",
    href: "https://acubexerox.com/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-2",
    name: "Sponsor 2",
    image: "/sponsors/dhanalaxmi.png",
    tier: "Platinum",
    href: "https://dhanalaxmioverseas.in/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-3",
    name: "Sponsor 3",
    image: "/sponsors/lordsskill.jpg",
    tier: "Gold",
    href: "https://lordsskillacademy.com",
    className: "h-16 w-auto rounded-sm",
  },
  // Duplicate sponsors to ensure continuous scrolling
  {
    id: "sponsor-1-dup",
    name: "Sponsor 1",
    image: "/sponsors/acube.png",
    tier: "Gold",
    href: "https://acubexerox.com/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-2-dup",
    name: "Sponsor 2",
    image: "/sponsors/dhanalaxmi.png",
    tier: "Platinum",
    href: "https://dhanalaxmioverseas.in/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-3-dup",
    name: "Sponsor 3",
    image: "/sponsors/lordsskill.jpg",
    tier: "Gold",
    href: "https://lordsskillacademy.com",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-1-dup1",
    name: "Sponsor 1",
    image: "/sponsors/acube.png",
    tier: "Gold",
    href: "https://acubexerox.com/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-2-dup2",
    name: "Sponsor 2",
    image: "/sponsors/dhanalaxmi.png",
    tier: "Platinum",
    href: "https://dhanalaxmioverseas.in/",
    className: "h-16 w-auto rounded-sm",
  },
  {
    id: "sponsor-3-dup3",
    name: "Sponsor 3",
    image: "/sponsors/lordsskill.jpg",
    tier: "Gold",
    href: "https://lordsskillacademy.com",
    className: "h-16 w-auto",
  },
];

const getTierColor = (tier: Sponsor["tier"]) => {
  switch (tier) {
    case "Platinum":
      return "text-gray-600 dark:text-gray-300";
    case "Gold":
      return "text-yellow-500 dark:text-yellow-400";
    case "Silver":
      return "text-gray-400 dark:text-gray-200";
    default:
      return "text-gray-500";
  }
};

export function SponsorsSection() {
  return (
    <section className="relative h-fit flex flex-col py-10 ">
      <SparklesCore
        id="tsparticlessponsors"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={30}
        className="w-full h-full opacity-50 absolute"
      />
      {/* Gradient Background Overlays */}
      {/* <div className="absolute inset-0 pointer-events-none">
         
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div> */}
            <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-1">
        <div className="flex flex-col items-center justify-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r dark:from-purple-500 dark:to-cyan-500 from-gray-900 to-gray-700">
            Our Sponsors
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-black/70 dark:text-white/70">
            Thank you to our amazing sponsors for making this event possible
          </p>
        </div>

        <div className="relative w-full">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                speed: 1,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {SPONSORS.map((sponsor) => (
                <CarouselItem
                  key={sponsor.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="flex flex-col items-center justify-center space-y-4 p-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-dark/80 dark:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                        <div className="relative md:h-16 md:w-32 w-16 h-12 flex items-center justify-center">
                          <Image
                            src={sponsor.image}
                            alt={sponsor.name}
                            fill
                            className="object-contain w-2"
                            priority
                            unoptimized
                            onClick={() => window.open(sponsor.href, "_blank")}
                          />
                        </div>
                      </div>
                    </div>
                    <span className={`font-semibold ${getTierColor(sponsor.tier)}`}>
                      {sponsor.tier} Sponsor
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 