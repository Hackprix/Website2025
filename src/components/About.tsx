"use client";
import { ABOUT, METRICS } from "@/config/content";
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { SparklesCore } from "./ui/Sparkles";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  reverse?: boolean;
}
const About: React.FC<AboutProps> = ({ reverse = false }) => {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const [metricsInView, setMetricsInView] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const topImages = [
    "/carousal1.jpg", 
    "/carousal2.png", 
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
    <div className="w-full bg-gradient-to-r from-purple-900/20 to-cyan-900/20 px-4 py-8 md:px-8 relative">
      <SparklesCore
        id="tsparticles-about"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={40}
        className="w-full h-full opacity-50 absolute top-0 left-0 z-0"
      />

      <div ref={sectionRef} className="mx-auto max-w-9xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Content */}
          <motion.div className="flex flex-col justify-center" initial="hidden" animate={controls} variants={textVariants}>
            <motion.h2 className="relative mb-4 font-poppins dark:text-white text-black">
              <motion.p className="absolute top-1/2 -translate-y-1/2 text-3xl md:text-4xl" variants={textVariants}>
                {ABOUT.title}
              </motion.p>
              <motion.p
                style={{ fontSize: "5rem" }}
                className="font-extrabold dark:text-white/30 text-black/30"
                variants={textVariants}
              >
                About
              </motion.p>
            </motion.h2>

            <motion.p className="mb-6 text-xl text-sky-700 font-poppins" variants={textVariants}>
              {ABOUT.subtitle}
            </motion.p>

            <motion.p className="mb-8 text-lg z-20 dark:text-white font-poppins leading-relaxed md:leading-loose" variants={textVariants}>
              {ABOUT.description}
            </motion.p>

            {/* Metrics Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
          </motion.div>

          {/* Right Content - Scrolling Images with Animations */}
          <motion.div className="relative overflow-hidden" initial="hidden" animate={controls} variants={textVariants}>
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.2}
              maxSize={1.6}
              particleDensity={40}
              className="w-full h-full opacity-50 absolute"
            />

            {/* First Scrolling Row */}
            <motion.div className="relative mb-4 h-48 overflow-hidden md:h-64" variants={imageVariants}>
              <div className="hover:pause flex animate-scroll-right space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...topImages, ...topImages].map((img, index) => (
                  <motion.div key={index} className="h-48 w-72 shrink-0 md:h-64" variants={imageVariants}>
                    <Image
                      src={img}
                      alt={`Event ${index + 1}`}
                      width={288}
                      height={256}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Second Scrolling Row */}
            <motion.div className="relative h-48 overflow-hidden md:h-64" variants={imageVariants}>
              <div className="hover:pause flex animate-scroll-left space-x-4 whitespace-nowrap hover:[animation-play-state:paused]">
                {[...bottomImages, ...bottomImages].map((img, index) => (
                  <motion.div key={index} className="h-48 w-72 shrink-0 md:h-64" variants={imageVariants}>
                    <Image
                      src={img}
                      alt={`Event ${index + 1}`}
                      width={288}
                      height={256}
                      className="h-full w-full rounded-lg object-cover"                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;