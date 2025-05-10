"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export function DepartmentHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => {
      return [
        "Meetups",
        "Workshops",
        "Events",
        "Sessions"
      ];
    },
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 md:py-10 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="font-poppins tracking-wide text-white mb-10">Stay Tuned For</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-blue-500 mt-8"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mb-10 font-poppins text-base md:text-xl leading-relaxed tracking-tight text-black/70 dark:text-white/70 max-w-2xl text-center">
            Pre-hackathon sessions are on.
            Come, learn a bit, meet people, and get set to build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 