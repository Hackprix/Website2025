"use client";
import { ABOUT, METRICS } from "@/config/content";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { SparklesCore } from "./ui/Sparkles";
import Image from "next/image";

interface AboutProps {
  reverse?: boolean;
}
const About: React.FC<AboutProps> = ({ }) => {
  const statsRef = useRef(null);
  const [metricsInView, setMetricsInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMetricsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) observer.observe(currentStatsRef);
    return () => {
      if (currentStatsRef) observer.unobserve(currentStatsRef);
    };
  }, []);

  const topImages = [
    "/carousal1.jpg", 
    "/carousal7.jpg", 
    "/carousal8.jpg",
  ];

  const bottomImages = [
    "/carousal4.jpg", 
    "/carousal5.jpg", 
    "/carousal6.jpg", 
    "/carousal9.jpg",
  ];

  return (
    <div className="w-full px-4 py-8 md:px-8 relative">
      <SparklesCore
        id="tsparticles-about"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={40}
        className="w-full h-full opacity-50 absolute top-0 left-0 z-0"
      />
            <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute md:top-1/3 top-1/6 md:left-1/8 left-1/3 -translate-x-1/2 overflow-hidden -translate-y-1/2 w-[400px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute md:top-1/3 top-1/6 md:left-1/8 left-1/3 overflow-hidden -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>

      <div ref={sectionRef} className="mx-auto max-w-9xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="relative mb-4 font-poppins dark:text-white text-black">
              <p className="absolute top-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                {ABOUT.title}
              </p>
              <div className="flex flex-col mb-16">
                        <Image
                          src="/bg-text/About (1).svg"
                          alt="Sanketika Logo Light"
                          width={100}
                          height={100}
                          className="w-72 block dark:hidden"
                        />
                        <Image
                          src="/bg-text/About.svg"
                          alt="Sanketika Logo Dark"
                          width={100}
                          height={100}
                          className="w-72 hidden dark:block"
                        />
                      </div>
            </div>

            <p className="mb-6 text-xl text-sky-700 font-poppins">
              {ABOUT.subtitle}
            </p>

            <p className="mb-8 text-lg z-20 dark:text-white font-poppins leading-relaxed md:leading-loose">
              {ABOUT.description}
            </p>

            {/* Metrics Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6 md:grid-cols-4 h-[150px]">
              {METRICS.map((metric) => (
                <div key={metric.id} className="text-center">
                  {metricsInView && (
                    <>
                      <p className="text-2xl font-poppins text-red-500 md:text-3xl">
                        {metric.isCurrency ? "₹" : ""}
                        <CountUp end={metric.number} duration={10} />
                        {metric.isCurrency ? "L" : ""}+
                      </p>
                      <p className="mt-1 text-sm dark:text-white md:text-base">
                        {metric.label}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Scrolling Images */}
          <div className="relative overflow-hidden">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.2}
              maxSize={1.6}
              particleDensity={40}
              className="w-full h-full opacity-50 absolute"
            />

            {/* First Scrolling Row */}
            <div className="relative mb-4 h-48 overflow-hidden md:h-64">
              <div className="hover:pause flex animate-scroll-right space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...topImages, ...topImages].map((img, index) => (
                  <div key={index} className="h-48 w-72 shrink-0 md:h-64">
                    <Image
                      src={img}
                      alt={`Event ${index + 1}`}
                      width={288}
                      height={256}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Scrolling Row */}
            <div className="relative h-48 overflow-hidden md:h-64">
              <div className="hover:pause flex animate-scroll-left space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...bottomImages, ...bottomImages].map((img, index) => (
                  <div key={index} className="h-48 w-72 shrink-0 md:h-64">
                    <Image
                      src={img}
                      alt={`Event ${index + 1}`}
                      width={288}
                      height={256}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;