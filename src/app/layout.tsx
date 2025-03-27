/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Geist, Geist_Mono, Play, Roboto, Catamaran, Poppins, Anton, Space_Grotesk, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
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

export const metadata: Metadata = {
  title: "SanketikaFest",
  description: "SanketikaFest is an exciting annual event by Lords Institute of Engineering and Technology, featuring a blend of technical and non-technical competitions, workshops, and fun!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

