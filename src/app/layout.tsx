import {
  Geist,
  Geist_Mono,
  Play,
  Roboto,
  Catamaran,
  Poppins,
  Anton,
  Space_Grotesk,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import ClientWrapper from "@/components/ClientWrapper"; // NEW

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-press" });
const play = Play({ subsets: ["latin"], weight: "400", variable: "--font-play" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });
const space = Space_Grotesk({ subsets: ["latin"], weight: "400", variable: "--font-space" });
const catamaran = Catamaran({ subsets: ["latin"], weight: "800", variable: "--font-cat" });
const poppins = Poppins({ subsets: ["latin"], weight: "400", variable: "--font-poppins" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <title>{String(metadata.title) || "Default Title"}</title>
        <meta name="description" content={String(metadata.description) || "Default description."} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${press.variable} ${play.variable} ${roboto.variable} ${space.variable} ${catamaran.variable} ${poppins.variable} ${anton.variable} font-minecraft antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
