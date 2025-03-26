"use client";

import { Home, ScrollText , ClipboardPen, HandCoins, Navigation } from "lucide-react";
import { AnimeNavBar } from "./ui/anime-navbar";
import { ThemeToggle } from "./ui/ThemeToggle";
import Image from "next/image";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

export function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
  <header className=" hover:scale-[1.007] transition duration-300 md:fixed mt-4 md:mt-10 md:left-20 md:right-20 w-auto mx-4 z-20 md:mx-0 rounded-full bg-white dark:bg-black text-black dark:text-white shadow-md hover:bg-white/90 hover:dark:bg-black/80">
    
    <div className="container mx-auto flex items-center justify-between md:p-4 p-4 px-8 md:px-8 gap-40">
      <div className="flex items-center">
        <Image
          src="/assets/sanketika.png"
          alt="Logo of the website, a simple placeholder image"
          width={150}
          height={150}
          className="md:w-50 w-30"
        />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <AnimeNavBar
          items={[
            { name: "Home", url: "/", icon: Home },
            { name: "Events", url: "/Events", icon: ScrollText },
            { name: "Schedule", url: "/contact", icon: ClipboardPen },
            { name: "Sponsers", url: "/sponsers", icon: HandCoins },
            { name: "Venue", url: "/venue", icon: Navigation },
          ]}
        />
        <ThemeToggle />
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none z-50"
          aria-label="Open navigation menu"
          onClick={() => setIsSideNavOpen(true)}
        >
          <RiMenuLine size={25} className="dark:text-white text-black" />
        </button>
      </div>
    </div>
    <SideNavigation
      isOpen={isSideNavOpen}
      onClose={() => setIsSideNavOpen(false)}
      items={[
        { name: "Home", url: "/", icon: Home },
        { name: "About", url: "/about", icon: ScrollText },
        { name: "Contact", url: "/contact", icon: ClipboardPen },
        { name: "Sponsers", url: "/sponsers", icon: HandCoins },
        { name: "Venue", url: "/venue", icon: Navigation },
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