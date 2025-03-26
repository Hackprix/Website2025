/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ABOUT, METRICS } from "@/config/content";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { SparklesCore } from "./ui/Sparkles";

const About = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef(null);

//   const metrics = [
//     { id: 1, number: 5000, label: "Hackers" },
//     { id: 2, number: 50, label: "Partners" },
//     { id: 3, number: 70, label: "Hack hours" },
//     { id: 4, number: 85, label: "Events" },
//     { id: 5, number: 220, label: "Projects" },
//     { id: 6, number: 50, label: "Mentors" },
//   ];

  const topImages = [
    "/carousal1.jpg", 
    "/carousal2.png", 
    "/carousal3.jpg", 
    "/carousal7.jpg", 
    "/carousal8.jpg", 
  ];

  const bottomImages = [
    "/carousal4.jpg", 
    "/carousal5.jpg", 
    "/carousal6.jpg", 
    "/carousal9.jpg",
    "/carousal10.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-purple-900/20 to-cyan-900/20 px-4 py-8 md:px-8 relative">
      <SparklesCore
        id="tsparticles-about"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={40}
        className="w-full h-full opacity-50 absolute top-0 left-0 z-0"
      />

      <div className="mx-auto max-w-9xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="relative mb-4 font-poppins dark:text-white text-black">
              <p className="absolute top-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                {ABOUT.title}
              </p>
              <p
                style={{
                  fontSize: "5rem",
                }}
                className="font-extrabold dark:text-white/30 text-black/30"
              >
                About
              </p>
            </h2>
            <p className="mb-6 text-xl text-sky-700 font-poppins font-poppins">{ABOUT.subtitle}</p>
            <p className="mb-8 text-lg dark:text-white font-poppins leading-relaxed md:leading-loose">{ABOUT.description}</p>

            {/* Metrics Grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {METRICS.map((metric) => (
                <div key={metric.id} className="text-center">
                  <p className="text-2xl font-poppins font-poppins text-red-500 md:text-3xl">
                    {inView && (
                      <>
                        {metric.isCurrency ? "₹" : ""}
                        <CountUp end={metric.number} duration={2} />
                        {metric.isCurrency ? "L" : ""}
                      </>
                    )}
                    +
                  </p>
                  <p className="mt-1 text-sm dark:text-white md:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Scrolling Images */}
          <div className="relative overflow-hidden">
            {/* Top row */}
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.2}
              maxSize={1.6}
              particleDensity={40}
              className="w-full h-full opacity-50 absolute"
            />
            <div className="relative mb-4 h-48 overflow-hidden md:h-64">
              <div className="hover:pause flex animate-scroll-left space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...topImages, ...topImages].map((img, index) => (
                  <div key={index} className="h-48 w-72 shrink-0 md:h-64">
                    <img
                      src={img}
                      alt={`Event ${index + 1}`}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="relative h-48 overflow-hidden md:h-64">
              <div className="hover:pause flex animate-scroll-right space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...bottomImages, ...bottomImages].map((img, index) => (
                  <div key={index} className="h-48 w-72 shrink-0 md:h-64">
                    <img
                      src={img}
                      alt={`Event ${index + 1}`}
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
