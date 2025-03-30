'use client';

import React, { useState, useRef, useEffect } from 'react';
import confetti, { Options as ConfettiOptions, GlobalOptions as ConfettiGlobalOptions } from 'canvas-confetti';
import { useRouter } from 'next/navigation'; // ✅ Use 'next/navigation' instead of 'next/router'
import { Button, ButtonProps } from '@/components/ui/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface ConfettiButtonProps extends ButtonProps {
  options?: ConfettiOptions & ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
  children?: React.ReactNode;
}

const ConfettiButton: React.FC<ConfettiButtonProps> = ({ options, children, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState<React.ReactNode>(children);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Start loading
    setLoading(true);

    // After 2 seconds, show confetti and change text
    setTimeout(() => {
      confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
      setLoading(false);
      setButtonText("Redirecting...");
    }, 2000);

    // After 3.5 seconds total (2s loading + 1.5s redirecting text), navigate
    timerRef.current = setTimeout(() => {
      router.push('/events');
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Button
      onClick={handleClick}
      {...props}
      variant="shimmer"
      size="custom"
      className="font-poppins text-xs sm:text-lg min-w-[120px] sm:min-w-[160px]"
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "Poppins",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {loading ? (
        <>
        <div className="flex items-center justify-center">
          <CircularProgress size={20} color="inherit" />
          <span className="ml-2">Loading...</span>
        </div>
        </>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default ConfettiButton;