/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedText } from "./animated-text";
import { BlurFade } from "./BlurFade";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showLogoSection, setShowLogoSection] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  useEffect(() => {
    // First text animation (0-2.5s)
    const timer1 = setTimeout(() => {
      setShowLogoSection(true);
    }, 2500);

    // Show third text (4-5.5s)
    const timer2 = setTimeout(() => {
      setShowSecondText(true);
    }, 4000);

    // Fade out splash screen
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const secondTextVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: showSecondText ? 0 : 1 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <div className="relative flex flex-col items-center">
        {!showLogoSection ? (
          <AnimatedText
            text="SanketikaFest"
            duration={0.1}
            delay={0.05}
            textClassName="text-4xl md:text-8xl font-bold text-center font-poppins text-white"
            underlineGradient="from-purple-500 via-cyan-500 to-purple-500"
            underlineHeight="h-1"
            underlineOffset="-bottom-2"
          />
        ) : !showSecondText ? (
          <div className="flex flex-col items-center space-y-2">
            <BlurFade
              delay={0.2}
              className="text-xl md:text-6xl font-bold leading-normal md:leading-[5rem] tracking-[-0.02em] drop-shadow-sm text-white font-poppins text-center"
            >
              An Annual Event By
            </BlurFade>
            <BlurFade delay={0.4}>
              <img
                src="/lords.png"
                alt="Lords Institute"
                className="w-20 md:w-36 h-auto"
              />
            </BlurFade>
          </div>
        ) : (
          <motion.h1
            variants={secondTextVariants}
            initial="hidden"
            animate="show"
            className="font-poppins text-center text-xl md:text-6xl font-bold leading-normal md:leading-[5rem] tracking-[-0.02em] drop-shadow-sm text-white"
          >
            {["Unleash", "Talent,", "Ignite", "Passion"].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{ display: "inline-block", paddingRight: "8px" }}
              >
                {word === "" ? <span>&nbsp;</span> : word}
              </motion.span>
            ))}
          </motion.h1>
        )}
      </div>
    </motion.div>
  );
}; 