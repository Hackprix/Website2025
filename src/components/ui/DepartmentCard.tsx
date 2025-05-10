/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  MotionValue,
} from "framer-motion";
import { ShinyButton } from "@/components/ui/ShinnyButton";
import { SESSIONS } from "@/config/content";

interface Sessions {
  id: string;
  name: string;
  position: string;
  eventName: string;
  description: string;
  eventLink?: string;
  event?: string;
  SpeakerImage: string;
}

interface SessionsCardProps {
  session: Sessions;
}

interface MouseMoveEvent {
  currentTarget: HTMLElement;
  clientX: number;
  clientY: number;
}

interface CardPatternProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Icon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const SessionsCard: React.FC<SessionsCardProps> = ({ session }) => {
  const router = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const handleClick = () => {
    if (session.eventLink) {
      window.open(session.eventLink, '_blank');
    }
  };

  function onMouseMove({ currentTarget, clientX, clientY }: MouseMoveEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className="relative w-3/4 sm:w-full h-full max-w-sm mx-auto group hover:-translate-y-6 transition-transform duration-300 will-change-transform"
      onMouseMove={onMouseMove}
    >
      {/* Corner Icons */}
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 -left-2 md:-top-3 md:-left-3 dark:text-white text-black transition-transform duration-300" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 -left-2 md:-bottom-3 md:-left-3 dark:text-white text-black transition-transform duration-300" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 -right-2 md:-top-3 md:-right-3 dark:text-white text-black transition-transform duration-300" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 -right-2 md:-bottom-3 md:-right-3 dark:text-white text-black transition-transform duration-300" />

      <div
        onClick={handleClick}
        className="group/card h-full relative border border-black/[0.2] dark:border-white/[0.2] px-3 sm:px-4 py-6 sm:py-6 cursor-pointer transition-all duration-300 bg-white/60 dark:bg-black/50 rounded-[2rem] [mask-image:linear-gradient(to_bottom,transparent,black_1rem,black_calc(100%-1rem),transparent)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]"
      >
        {/* Evervault Card Effect */}
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-10 flex flex-col items-center h-full">
          {/* Center Logo Section */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full flex items-center justify-center mt-2 sm:mt-3 md:mt-4">
            <div className="absolute w-full h-full bg-orange-400/[0.3] dark:bg-white/[0.8] blur-sm rounded-full" />
            <img
              src={session.SpeakerImage}
              alt={session.name}
              className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-full"
            />
          </div>

          {/* Speaker Name, Position and Event Name */}
          <div className="text-center flex-grow px-1 sm:px-2 mt-3 sm:mt-4 md:mt-6">
            <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white font-poppins">
                {session.name}
              </h3>
            </div>
            <div className="h-6 sm:h-8 md:h-10 flex items-center justify-center">
              <p className="text-sm sm:text-base text-black/80 dark:text-white/80 font-poppins">
                {session.position}
              </p>
            </div>
            <div className="h-12 sm:h-14 md:h-16 flex items-start">
              <h4 className="text-base sm:text-lg md:text-xl text-black dark:text-white font-poppins">
                {session.eventName}
              </h4>
            </div>
          </div>

          {/* View Event and Arrow Section */}
          <div className="flex items-center justify-between w-full px-1 sm:px-2 py-2 sm:py-3 md:py-4 mt-auto h-full">
            <ShinyButton className="textsm:text-xs md:text-sm font-press">
              View Event
            </ShinyButton>
            <div className="transform rounded-full bg-white dark:bg-black transition-transform duration-200 lg:-rotate-45 group-hover/card:-rotate-0">
              <BsArrowRightCircleFill className="text-4xl sm:text-3xl md:text-6xl text-black dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CardPattern({ mouseX, mouseY, randomString }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-700  md:opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-100 md:opacity-0 mix-blend-overlay md:group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-[8px] sm:text-[10px] md:text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

export default SessionsCard;
