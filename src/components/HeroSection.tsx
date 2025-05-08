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
import { ShootingStars } from "./ui/ShootingStar";
import Image from "next/image";

const HeroSection = () => {
  const conferenceDates = config.CONFERENCE_DAYS.datesLabel;
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-20 md:pt-40 py-16">
      <div className="absolute inset-0 pointer-events-none z-0 stars" />
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div> */}
      {/* <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.2}
        maxSize={1.6}
        particleDensity={50}
        className="w-full h-full opacity-50 absolute"
      /> */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-5">
        <div className="inline-block font-poppins px-6 py-2 mb-2 rounded-full border-2 border-blue-500 text-white text-sm md:text-xl font-semibold dark:bg-blue-500/60 transition-all duration-300">
          {conferenceDates}
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logo.png"
            alt="Hackprix Logo"
            width={800}
            height={800}
            className=""
          />
          <AnimatedText
            className="text-center text-white text-4xl"
            text=""
            textClassName="text-white font-minecraft text-5xl md:text-9xl font-bold bg-clip-text transition duration-700"
            // underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
            // underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
            // underlineDuration={1.5}
          />
        </div>
        <AnimatedShinyText className="rounded-full border inline-flex items-center justify-center px-4 md:w-3/4 py-1 transition ease-out hover:text-black hover:duration-300 text-black dark:text-white z-10">
          <span className="font-poppins md:text-lg text-xs">
            🕹️ Unleash Talent, Ignite Passion
          </span>
          {/* <ArrowRightIcon className="ml-1 size-3 md:size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
        <Link
          href=""
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
          <Button
            variant="shimmer"
            size="custom"
            onClick={() => window.open("https://discord.gg/7EEWNGJH", "_blank")}
            className="flex items-center gap-2"
          >
            <span className="relative z-10">
              <AiOutlineDiscord className="w-4 h-4 md:w-6 md:h-6 text-black font-poppins dark:text-white" />
            </span>
            <span className="relative z-10 text-xs sm:text-lg font-poppins">
              Join Discord
            </span>
          </Button>
          <ConfettiButton
            onClick={() =>
              window.open("https://hackprix-2025.devfolio.co/", "_blank")
            }
          >
            Register
          </ConfettiButton>
        </div>

        <div className="mt-10">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
