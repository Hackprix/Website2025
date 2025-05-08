'use client'
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // pixels per second
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  speed = 50,
  className,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(contentRef.current.offsetWidth);
      }
    };

    // Initial width calculation
    updateWidth();

    // Update width on window resize
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [items]);

  const animationDuration = containerWidth / speed;

  return (
    <div
      ref={containerRef}
      className={cn("z-30 w-full overflow-hidden inset-0 bg-black", className)}
      aria-hidden="true"
    >
      
      <div className="relative flex py-6">
        {/* First set */}
        <div
          ref={contentRef}
          className="flex shrink-0 items-center"
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center px-4 md:px-6"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
              <span className="ml-4 -mb-3 whitespace-nowrap text-xs text-black dark:text-white md:text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set */}
        <div
          className="flex shrink-0 items-center"
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center px-4 md:px-6"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
              <span className="ml-4 -mb-3 whitespace-nowrap text-xs text-black dark:text-white md:text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Third set to ensure smooth looping */}
        <div
          className="flex shrink-0 items-center"
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={`third-${index}`}
              className="flex items-center px-4 md:px-6"
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
              <span className="ml-4 -mb-3 whitespace-nowrap text-xs text-black dark:text-white md:text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${containerWidth}px);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteMarquee;