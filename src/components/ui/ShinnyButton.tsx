/* eslint-disable import/no-anonymous-default-export */
"use client";

import React from "react";
import { motion, type AnimationProps, HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps: AnimationProps = {
  initial: { "--x": "100%" } as any,
  animate: { "--x": "-100%" } as any,
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear"
  },
};

interface ShinyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...animationProps}
      whileTap={{ scale: 0.95 }}
      {...props}
      className={cn(
        "relative md:rounded-lg rounded-md md:px-6 md:py-2 px-4 py-1 font-medium bg-black dark:bg-white transition-colors",
        className
      )}
    >
      <span
        className="relative block text-xs uppercase tracking-wide text-white dark:text-black"
        style={{
          WebkitMaskImage: "linear-gradient(-75deg, rgba(0,0,0,1) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), rgba(0,0,0,1) calc(var(--x) + 40%))",
          maskImage: "linear-gradient(-75deg, rgba(0,0,0,1) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), rgba(0,0,0,1) calc(var(--x) + 40%))"
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          "--x": "0%",
          WebkitMaskImage: "linear-gradient(-75deg, transparent calc(var(--x) + 20%), white calc(var(--x) + 30%), transparent calc(var(--x) + 40%))",
          maskImage: "linear-gradient(-75deg, transparent calc(var(--x) + 20%), white calc(var(--x) + 30%), transparent calc(var(--x) + 40%))"
        } as any}
      />
    </motion.button>
  );
};

export default { ShinyButton };
