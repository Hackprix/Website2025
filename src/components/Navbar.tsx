"use client";

import {
  Home,
  ScrollText,
  // ClipboardPen,
  HandCoins,
  Navigation,
  Store,
} from "lucide-react";
import { AnimeNavBar } from "./ui/anime-navbar";
import { ThemeToggle } from "./ui/ThemeToggle";
import Image from "next/image";
import SideNavigation from "./SideNavigation";
import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";

export function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      setAtTop(isAtTop);
      setVisible(isScrollingUp || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed top-4 mb-8 md:top-10 left-0 right-0 z-70 mx-4 md:mx-20 transition-opacity duration-700 ${
        visible ? 'opacity-100 rounded-full' : 'opacity-0 rounded-full pointer-events-none'
      } ${
        atTop ? '' : 'backdrop-blur-sm bg-white/80 dark:bg-black/80'
      }`}
    >
      <div className="w-full rounded-full bg-white dark:bg-black shadow-md hover:shadow-2xl dark:hover:shadow-white/50 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between md:p-4 p-4 px-8 md:px-8 gap-40">
          <div className="flex items-center h-4 md:h-12">
            <Image
              src="/assets/sanketika.png"
              alt="Logo of the website, a simple placeholder image"
              width={100}
              height={100}
              className="md:w-20 w-12 object-contain"
              unoptimized
            />
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <AnimeNavBar
              items={[
                { name: "Home", url: "/", icon: Home },
                { name: "Events", url: "/events", icon: ScrollText },
                // { name: "Schedule", url: "/contact", icon: ClipboardPen },
                { name: "Sponsors", url: "/sponsors", icon: HandCoins },
                { name: "Venue", url: "/venue", icon: Navigation },
                { name: "Stalls", url: "/stalls", icon: Store},
              ]}
            />
            <ThemeToggle />
          </div>
          <div className="xl:hidden flex items-center">
            <button
              className="focus:outline-none z-50"
              aria-label="Open navigation menu"
              onClick={() => setIsSideNavOpen(true)}
            >
              <RiMenuLine size={25} className="dark:text-white text-black" />
            </button>
          </div>
        </div>
      </div>
      <SideNavigation
        isOpen={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
        items={[
          { name: "Home", url: "/", icon: Home },
          { name: "Events", url: "/events", icon: ScrollText },
          // { name: "Contact", url: "/contact", icon: ClipboardPen },
          { name: "Sponsors", url: "/sponsors", icon: HandCoins },
          { name: "Venue", url: "/venue", icon: Navigation },
          { name: "Stalls", url: "/stalls", icon: Store},
        ]}
      />
    </header>
  );
}

// 'use client';

// import { Home, Info, Contact } from "lucide-react";
// import { AnimeNavBar } from "./ui/anime-navbar";
// import { ThemeToggle } from "./ui/ThemeToggle";
// import Image from "next/image";
// import SideNavigation from "./SideNavigation";
// import { useState } from "react";
// import { RiMenuLine } from "react-icons/ri";

// export function Navbar() {
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   return (
//     <header className="hover:scale-[1.007] transition duration-300 mx-4 md:fixed mt-4 md:mt-10 md:left-20 md:right-20 w-auto  rounded-full z-40 bg-white dark:bg-black text-black dark:text-white shadow-md hover:bg-white/90 hover:dark:bg-black/80">
//       <div className="container mx-auto flex items-center justify-between p-4 px-8 md:px-0">
//         <div className="flex items-center">
//           <Image
//             src="/assets/sanketika.png"
//             alt="Logo of the website, a simple placeholder image"
//             width={150}
//             height={150}
//             className="md:w-50 w-30"
//           />
//         </div>
//         <div className="hidden md:flex items-center space-x-8">
//           <AnimeNavBar
//             items={[
//               { name: "Home", url: "/", icon: Home },
//               { name: "About", url: "/about", icon: Info },
//               { name: "Contact", url: "/contact", icon: Contact },
//             ]}
//           />
//           <ThemeToggle />
//         </div>
//         <div className="md:hidden flex items-center">
//           <button
//             className="focus:outline-none z-50"
//             aria-label="Open navigation menu"
//             onClick={() => setIsSideNavOpen(true)}
//           >
//             <RiMenuLine size={25} className="dark:text-white text-black" />
//           </button>
//         </div>
//       </div>
//       <SideNavigation
//         isOpen={isSideNavOpen}
//         onClose={() => setIsSideNavOpen(false)}
//         items={[
//           { name: "Home", url: "/", icon: Home },
//           { name: "About", url: "/about", icon: Info },
//           { name: "Contact", url: "/contact", icon: Contact },
//         ]}
//       />
//     </header>
//   );
// }