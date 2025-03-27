"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/AnimatedBeam";
import { SparklesCore } from "./ui/Sparkles";

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

  return (
    <div
      className="relative flex flex-col h-[600px] w-screen items-center justify-start gap-10 p-10 "
      ref={containerRef}
    >
      <SparklesCore
        id="tsparticles-animatedBeam"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={40}
        className="w-full h-full opacity-50 absolute top-0 left-0 z-0 pointer-events-none"
      />
      <div className="flex flex-col  ">
        <Image
          src="/org.svg"
          alt="Sanketika Logo Light"
          width={100}
          height={100}
          className=" w-250 block dark:hidden"
        />

        {/* Image visible in dark mode */}
        <Image
          src="/org2.svg"
          alt="Sanketika Logo Dark"
          width={100}
          height={100}
          className="w-250 hidden dark:block"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image
              src="/civil.png"
              alt="Placeholder image 1"
              width={200}
              height={100}
              className="w-100"
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              src="/csd.png"
              alt="Placeholder image 2"
              width={200}
              height={100}
              className="w-100 mt-3 ml-1"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image
              src="/ece.png"
              alt="Placeholder image 3"
              width={200}
              height={100}
              className="w-[52px] mt-4"
            />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Image
              src="/assets/sanketika.png"
              alt="Placeholder image 4"
              width={100}
              height={100}
              className="w-100 mt-2"
            />
            {/* //middle image */}
          </Circle>
          <Circle ref={div6Ref}>
            <Image
              src="/csm.png"
              alt="Placeholder image 5"
              width={200}
              height={100}
              className="w-[200px] mt-2"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image
              src="/mech.png"
              alt="Placeholder image 6"
              width={100}
              height={100}
              className="w-100 mt-2"
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src="/it.png"
              alt="Placeholder image 7"
              width={100}
              height={100}
              className="w-100 mt-2"
            />
          </Circle>
        </div>
        <div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
        </div>
      </div>
    </div>
  );
}
