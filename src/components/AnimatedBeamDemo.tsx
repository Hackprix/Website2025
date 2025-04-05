"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/AnimatedBeam";
import { SparklesCore } from "./ui/Sparkles";
import { motion } from "framer-motion";

// Reusable Circle Component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showBeams, setShowBeams] = useState(false);

  useEffect(() => {
    // Wait for images to load and layout to stabilize
    const timer1 = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);

    // Add a small delay before showing beams to ensure proper positioning
    const timer2 = setTimeout(() => {
      setShowBeams(true);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-[500px] w-screen">
      <div
        ref={containerRef}
        className="relative flex flex-col h-[500px] w-screen items-center justify-start gap-10 p-10"
      >
        {/* Sparkle Effect Background */}
        <SparklesCore
          id="tsparticles-animatedBeam"
          background="transparent"
          minSize={0.2}
          maxSize={1.6}
          particleDensity={40}
          className="w-full h-full opacity-50 absolute top-0 left-0 z-0 pointer-events-none"
        />

        {/* Logos */}
        <motion.div 
          className="flex flex-col mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/org.svg"
            alt="Sanketika Logo Light"
            width={100}
            height={100}
            className="w-250 block dark:hidden"
            priority
            onLoad={() => setImagesLoaded(true)}
          />
          <Image
            src="/org2.svg"
            alt="Sanketika Logo Dark"
            width={100}
            height={100}
            className="w-250 hidden dark:block"
            priority
            onLoad={() => setImagesLoaded(true)}
          />
        </motion.div>

        {/* Gradient Background Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
        </div>

        {/* Circles Container */}
        <motion.div 
          className="relative flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Image src="/civil.png" alt="Civil" width={200} height={100} className="w-100" priority />
            </Circle>
            <Circle ref={div8Ref}>
              <Image src="/cse.png" alt="CSE" width={200} height={100} className="w-100 mt-2" priority />
            </Circle>
            <Circle ref={div5Ref}>
              <Image src="/csd.png" alt="CSD" width={200} height={100} className="w-100 mt-3 ml-1" priority />
            </Circle>
          </div>

          {/* Middle row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Image src="/ece.png" alt="ECE" width={200} height={100} className="w-[52px] mt-4" priority />
            </Circle>
            <Circle ref={div4Ref} className="size-16">
              <Image src="/assets/sanketika.png" alt="Sanketika" width={100} height={100} className="w-100 mt-2" priority />
            </Circle> 
            <Circle ref={div6Ref}>
              <Image src="/csm.png" alt="CSM" width={200} height={100} className="w-[200px] mt-2" priority />
            </Circle>
          </div>

          {/* Bottom row */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Image src="/mech.png" alt="Mech" width={100} height={100} className="w-100 mt-2" priority />
            </Circle>
            <Circle ref={div9Ref}>
              <Image src="/mba.jpeg" alt="MBA" width={200} height={100} className="w-[54px] rounded-sm" unoptimized priority />
            </Circle>
            <Circle ref={div7Ref}>
              <Image src="/it.png" alt="IT" width={100} height={100} className="w-100 mt-2" priority />
            </Circle>
          </div>
        </motion.div>

        {/* Animated Beams */}
        {imagesLoaded && showBeams && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />
            <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} curvature={-45} endYOffset={-10} />
            <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} curvature={45} endYOffset={10} />
          </motion.div>
        )}
      </div>
    </div>
  );
}