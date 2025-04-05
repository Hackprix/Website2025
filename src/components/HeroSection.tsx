"use client";
import { config } from "@/config";
import { ArrowRightIcon, Link } from "lucide-react";
import React from "react";
import CountdownTimer from "./CountdownTimer";
import AnimatedShinyText from "./ui/AnimatedShinyText";
import AnimatedText from "./ui/AnimatedText";
import { SparklesCore } from "@/components/ui/Sparkles";
// import { GradientButton } from "@/components/ui/GradientButton";
import ConfettiButton from "@/components/ui/ConfettiButton";
import { AiOutlineDiscord } from "react-icons/ai";
import { Button } from "@/components/ui/Button";

const HeroSection = () => {
  const conferenceDates = config.CONFERENCE_DAYS.datesLabel;
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden z-20 md:pt-40 pt-30">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={50}
        className="w-full h-full opacity-50 absolute"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-6 py-2 mb-6 rounded-full border-2 dark:border-yellow-500 border-red-500/70 text-white text-sm md:text-xl font-semibold bg-red-600/30 dark:bg-yellow-500/60 transition-all duration-300">
          {conferenceDates}
        </div>
        <AnimatedText
          className="text-center dark:text-white text-black text-4xl mb-8"
          text="Sanketika"
          textClassName="text-5xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-900 text-transparent bg-clip-text dark:from-purple-400 dark:via-yellow-200 dark:to-cyan-400 transition duration-700"
          underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
          underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
          underlineDuration={1.5}
        />
        <AnimatedShinyText className="rounded-full dark:bg-black/85 bg-gray-400/50 border border-gray-200 inline-flex items-center justify-center px-4 md:w-3/4 py-1 transition ease-out hover:text-black hover:duration-300 text-black dark:text-white z-10">
          <span className="font-poppins md:text-lg text-xs">
            🕹️ Unleash Talent, Ignite Passion
          </span>
          <ArrowRightIcon className="ml-1 size-3 md:size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <Link
          href="https://2024.aidays.io"
          target="_blank"
          className="px-6 py-3 text-base font-medium text-purple-300 hover:text-purple-200 transition-all duration-300 flex items-center justify-center"
        >
          View 2024 Highlights
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <Button variant="shimmer" size="custom" onClick={() => window.open('https://discord.gg/7EEWNGJH', '_blank')} className="flex items-center gap-2">
            <span className="relative z-10">
              <AiOutlineDiscord className="w-4 h-4 md:w-6 md:h-6 text-black font-poppins dark:text-white" />
            </span>
            <span className="relative z-10 text-xs sm:text-lg font-poppins" >Join Discord</span>
          </Button>
          <ConfettiButton>Register</ConfettiButton>
        </div>

        <div className="mt-10">
          <CountdownTimer />
        </div>
              </div>
    </div>
  );
};

export default HeroSection;
