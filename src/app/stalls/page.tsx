import { Footerdemo } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

const stalls = [
  {
    name: "TechVerse",
    logo: "/assets/stalls/logoipsum-365.svg",
    description: "Innovative gadgets and futuristic tech demos.",
    imageWidth: 100,
    imageHeight: 100,
  },
  {
    name: "Artistry Booth",
    logo: "/assets/stalls/logoipsum-363.svg",
    description: "Live art, calligraphy, and custom sketches.",
    imageWidth: 100,
    imageHeight: 80,
  },
  {
    name: "Snack Station",
    logo: "/assets/stalls/logoipsum-370.svg",
    description: "Tasty treats and refreshing beverages.",
    imageWidth: 100,
    imageHeight: 100,
  },
];

export default function StallsPage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex flex-col min-h-screen">
      <div className="inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <Navbar />
      </div>
      <main className="min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Stalls</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {stalls.map((stall, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 min-h-64 shadow-md rounded-xl p-6 text-center hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-center gap-2"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={stall.logo}
                  alt={stall.name}
                  width={100}
                  height={80}
                  className="object-contain rounded-md"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{stall.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {stall.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footerdemo />
    </div>
  );
}
