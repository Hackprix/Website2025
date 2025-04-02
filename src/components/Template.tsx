"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { PageTransition } from "./ui/PageTransition";

export const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const isFirstMount = useRef(true);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Skip if this is the first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }


    if (prevPathname.current === pathname) {
      return;
    }

    // Update previous pathname
    prevPathname.current = pathname;

    // Show transition only for actual navigation
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isNavigating && !isFirstMount.current && <PageTransition />}
      {children}
    </>
  );
}; 