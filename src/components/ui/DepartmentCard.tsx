/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useMotionValue, useMotionTemplate, motion, MotionValue } from "framer-motion";

interface Department {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  description: string;
}

interface DepartmentCardProps {
  department: Department;
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

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const router = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const handleClick = () => {
    router.push(`/events/${department.id}`);
  };

  function onMouseMove({ currentTarget, clientX, clientY }: MouseMoveEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div className="relative w-3/4 sm:w-full max-w-sm mx-auto bg-white/60">
      {/* Corner Icons */}
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 -left-2 md:-top-3 md:-left-3 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 -left-2 md:-bottom-3 md:-left-3 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -top-2 -right-2 md:-top-3 md:-right-3 dark:text-white text-black" />
      <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 -bottom-2 -right-2 md:-bottom-3 md:-right-3 dark:text-white text-black" />

      <div
        onClick={handleClick}
        className="group/card relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/[0.2] dark:border-white/[0.2] px-3 sm:px-4 py-4 sm:py-6 cursor-pointer h-[300px] sm:h-[350px] md:h-[400px] transition-all duration-300"
        onMouseMove={onMouseMove}
      >
        {/* Evervault Card Effect */}
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

        <div className="relative z-10 flex flex-col items-center h-full">
          {/* Center Logo Section */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full flex items-center justify-center mt-2 sm:mt-3 md:mt-4">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <img
              src={department.logo}
              alt={department.name}
              className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>

          {/* Department Name and Description */}
          <div className="text-center flex-grow px-1 sm:px-2 mt-3 sm:mt-4 md:mt-6">
            <h3 className="text-lg h-20 sm:text-lg md:text-xl lg:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3 md:mb-4">
              {department.name}
            </h3>
            <p className="text-xs sm:text-sm text-black/80 dark:text-white/80 line-clamp-3 max-w-prose mx-auto">
              {department.description}
            </p>
          </div>

          {/* View Events and Arrow Section */}
          <div className="flex items-center justify-between w-full px-1 sm:px-2 py-2 sm:py-3 md:py-4 mt-auto">
            <span className="rounded-lg bg-white/40 dark:bg-black/40 px-2 py-0.5 text-[10px] sm:text-xs md:text-sm font-medium text-black dark:text-white group-hover/card:bg-white/80 dark:group-hover/card:bg-black/80">
              View Events
            </span>
            <div className="transform rounded-full bg-white dark:bg-black transition-transform duration-200 lg:-rotate-45 group-hover/card:-rotate-0">
              <BsArrowRightCircleFill className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black dark:text-white" />
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
        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-[8px] sm:text-[10px] md:text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

export default DepartmentCard; 