/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { NavItem } from "./ui/anime-navbar";
// import { RiCloseLine } from "react-icons/ri";
import { ThemeToggle } from "./ui/ThemeToggle";

interface SideNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

const SideNavigation = ({ isOpen, onClose, items }: SideNavigationProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col justify-between z-80 bg-white dark:bg-black dark:text-white text-black">
        <div className="flex justify-between items-center p-4">
          <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
          <ThemeToggle />
          {/* <button
            className="focus:outline-none"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <RiCloseLine size={25} className="text-black dark:text-white" />
          </button> */}
        </div>
        <nav>
          <ul className="space-y-1 pt-8 px-2">
            {items.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  href={item.url}
                  className="text-lg tracking-tighter font-medium w-full block py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-purple-500/10 hover:scale-[1.02]"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col space-y-4 pb-8">
          <span className="flex items-center space-x-4">
            <div className="w-auto text-white rounded-full flex items-center justify-center">
              <Image
                src="/assets/sanketika.png"
                alt="Cyclesync Logo"
                width={150}
                height={150}
              />
            </div>
          </span>
          <span className="tracking-tighter text-muted-foreground text-[0.725rem]">
            &copy; 2025 Sanketika, All rights reserved
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNavigation;