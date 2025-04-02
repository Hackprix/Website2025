/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Geist, Geist_Mono, Play, Roboto, Catamaran, Poppins, Anton, Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react" 
import { metadata } from "./metadata";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { Template } from "@/components/Template";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const press = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
})

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: "800",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500); // Slightly longer than splash screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <title>{String(metadata.title) || "Default Title"}</title>
        <meta name="description" content={String(metadata.description) || "Default description."} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {isLoading && <SplashScreen />}
          <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
            <Template>{children}</Template>
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

