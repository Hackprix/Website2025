"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DEPARTMENTS } from "@/config/content";

export function DepartmentHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => DEPARTMENTS.map(dept => dept.shortName),
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
              <span className="text-black font-poppins tracking-wide dark:text-purple-400">Explore Events by</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-cyan-600 dark:text-cyan-400"
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

            <p className="text-base md:text-xl leading-relaxed tracking-tight text-black/70 dark:text-white/70 max-w-2xl text-center">
              Immerse yourself in a world of innovation and learning. Each department brings unique events, 
              from technical workshops to management symposiums, creating a vibrant tapestry of academic excellence 
              and practical knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 