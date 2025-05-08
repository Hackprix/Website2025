/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Update active tab based on current pathname
    const currentItem = items.find(item => {
      // Exact match
      if (item.url === pathname) return true;
      // Check if we're in a department page (url starts with /events/)
      if (pathname.startsWith('/events/') && item.url === '/events') return true;
      return false;
    });
    
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [pathname, items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      <motion.div
        className="flex items-center gap-3 bg-white/90 dark:bg-black/50 border border-black/20 dark:border-white/20 backdrop-blur-lg py-2 px-2 rounded-full shadow-2xl relative"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isHovered = hoveredTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => {
                setActiveTab(item.name);
              }}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                "text-black dark:text-white/70 hover:text-black dark:hover:text-white",
                isActive && "text-black dark:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                  <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                  <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                  <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    style={{
                      animation: "shine 3s ease-in-out infinite",
                    }}
                  />
                </motion.div>
              )}

              <div className="flex items-center space-x-2">
                <Icon size={18} strokeWidth={2.5} />
                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
              </div>

              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}
              </AnimatePresence>

              {isActive && (
                <motion.div
                  layoutId="anime-mascot"
                  className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="relative w-12 h-12">
                    <motion.img
                      src="/navguy1.png"
                      alt="Nav Guy"
                      className="w-60"
                      animate={
                        hoveredTab
                          ? {}
                          : {
                              y: [0, -3, 0],
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }
                      }
                    />
                    <AnimatePresence>
                      {hoveredTab && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute -top-1 -right-8 text-yellow-300"
                          >
                            <motion.img
                              src="/rocket.png"
                              alt="rocket"
                              className="w-10 h-10"
                              animate={{
                                y: [0, -2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }}
                            />
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute -top-2 -left-4 text-yellow-300"
                          >
                            <motion.img
                              src="/rocket.png"
                              alt="rocket"
                              className="w-8 h-8"
                              animate={{
                                y: [0, -2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }}
                            />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}