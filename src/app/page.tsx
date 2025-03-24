import { Navbar } from "@/components/Navbar";
import { FlickeringGrid } from '@/components/FlickeringGrid';
import { GooeyText } from "@/components/ui/GooeyText";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full absolute inset-0 h-screen">
      <FlickeringGrid 
              className="w-full h-full"
              squareSize={4}
              gridGap={6}
              color="#249cad"
              maxOpacity={0.5}
              flickerChance={0.1}
              // height={800}
              // width={800}
      />
      </div>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex items-center justify-center min-h-screen flex-col">
      <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["Sanketika", "Fest", "Is", "Here!"]}
        morphTime={1}
        cooldownTime={0.45}
        className="font-bold"
      />
    </div>
      </div>
    </>
  );
}