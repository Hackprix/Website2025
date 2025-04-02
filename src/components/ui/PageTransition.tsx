"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface SpinnerVariantProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const InfinityLoader = ({ size = 24, ...props }: SpinnerVariantProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <title>Loading...</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeDasharray="205.271142578125 51.317785644531256"
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
      strokeLinecap="round"
      style={{
        transform: 'scale(0.8)',
        transformOrigin: '50px 50px',
      }}
    >
      <animate
        attributeName="stroke-dashoffset"
        repeatCount="indefinite"
        dur="2s"
        keyTimes="0;1"
        values="0;256.58892822265625"
      />
    </path>
  </svg>
);

export const PageTransition = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'} opacity-80`} />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.0 }}
        className={isDark ? 'text-white' : 'text-black'}
      >
        <InfinityLoader size={48} />
      </motion.div>
    </motion.div>
  );
}; 