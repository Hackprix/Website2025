"use client";

import { Home, Info, Contact } from "lucide-react";
import { AnimeNavBar } from "./ui/anime-navbar";
import { ThemeToggle } from "./ui/ThemeToggle";
import Image from "next/image";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

export function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
  <header className="md:fixed mt-4 md:mt-10 md:left-20 md:right-20 w-auto mx-4 md:mx-0 rounded-full dark:bg-white bg-black text-black dark:text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center">
        <Image
          src="/assets/sanketika.png"
          alt="Logo of the website, a simple placeholder image"
          width={150}
          height={150}
        />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <AnimeNavBar
          items={[
            { name: "Home", url: "/", icon: Home },
            { name: "About", url: "/about", icon: Info },
            { name: "Contact", url: "/contact", icon: Contact },
          ]}
        />
        <ThemeToggle />
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setIsSideNavOpen(true)}
        >
          <RiMenuLine size={25} className="dark:text-black text-white" />
        </button>
      </div>
    </div>
    <SideNavigation
      isOpen={isSideNavOpen}
      onClose={() => setIsSideNavOpen(false)}
      items={[
        { name: "Home", url: "/", icon: Home },
        { name: "About", url: "/about", icon: Info },
        { name: "Contact", url: "/contact", icon: Contact },
      ]}
    />
  </header>

  );
}