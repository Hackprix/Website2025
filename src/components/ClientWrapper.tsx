"use client";

import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Template } from "@/components/Template";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShouldRenderContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
      <SplashScreen onComplete={() => setIsLoading(false)} />
      {shouldRenderContent && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Template>{children}</Template>
        </motion.main>
      )}
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
