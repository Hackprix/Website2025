import Image from 'next/image';
import TextImageSection from '@/components/TextImageSection';
import { TitleSponser } from '@/config/content';
import { SparklesCore } from './ui/Sparkles';

const TitleSponserSection = () => {
  return (
    <section className="text-center pt-12 relative h-fit">
      {/* Fix: Added pointer-events-none to prevent blocking interactions */}
      <SparklesCore
              id="tsparticles-sponser"
              background="transparent"
              minSize={0.2}
              maxSize={1.6}
              particleDensity={40}
              className="w-full h-full opacity-50 absolute top-0 left-0 z-0 pointer-events-none"
            />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
{/* 
      <h2 className="relative mb-4 font-poppins dark:text-white text-black">
              <p className="absolute top-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                {ABOUT.title}
              </p>
              <p
                style={{
                  fontSize: "5rem",
                }}
                className="font-extrabold dark:text-white/30 text-black/30"
              >
                About
              </p>
            </h2> */}
      <div className="flex flex-col justify-center relative dark:mb-12">
  {/* Title Text (Always on Top) */}
  <h2 className="text-4xl font-poppins tracking-widest text-black dark:text-white">
    {/* Dynamic Title */}
    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 font-bold text-center text-2xl w-screen md:text-4xl z-20 ">
      {TitleSponser.title}
    </p>

    {/* Large Background Text */}
    <p
      className="font-extrabold text-black/30 dark:text-white/30 dark:hidden text-5xl md:text-7xl"
    >
      Title Sponser
    </p>
  </h2>

  {/* Background Image (Ensuring Behind Everything) */}
  <div className="absolute inset-0 items-center justify-center z-0 hidden dark:flex">
    <Image
      src="/titlesponser.svg"
      alt="Journey"
      width={600}
      height={500}
      className="mix-blend-lighten w-80 md:w-150"
    />
  </div>
</div>

      

      <p className="mt-2 text-sm font-poppins md:text-2xl relative z-50 md:mb-0 mb-4">{TitleSponser.subtitle}</p>
      <SparklesCore
              id="tsparticles-sponser2"
              background="transparent"
              minSize={0.2}
              maxSize={1.6}
              particleDensity={40}
              className="w-full h-full opacity-50 absolute top-0 left-0 z-0 pointer-events-none"
            />

      <TextImageSection
        description={TitleSponser.description}
        buttons={[
          { text: "View College", link: "https://www.lords.ac.in" },
        ]}
        imageSrc="/titlesponser.png"
        imageAlt="Lords"
        imageWidth={0}
        imageHeight={0}
        imageRotation={0.0}
      />
    </section>
  );
};


export default TitleSponserSection;