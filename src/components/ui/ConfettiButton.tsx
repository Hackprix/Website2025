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
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter(); 

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect(); 
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setLoading(true);
    console.log("Confetti Options:", options);
    // Trigger confetti
    setTimeout(() => {
        confetti({
          ...options,
          origin: {
            x: x / window.innerWidth,
            y: y / window.innerHeight,
          },
        });
      }, 2000); // ⏳ Wait 2 seconds before triggering confetti
      

    // Wait for confetti animation, then navigate
    timerRef.current = setTimeout(() => {
      setLoading(false);
      router.push('/Events'); 
    }, 3000);
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
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  }}
>
  {loading ? (
    <>
      <CircularProgress size={24} color="inherit" />
      <span>Loading...</span>
    </>
  ) : (
    children
  )}
</Button>

  );
};

export default ConfettiButton;