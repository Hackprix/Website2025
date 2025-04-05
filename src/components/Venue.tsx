import { SparklesCore } from "./ui/Sparkles";

const Venue = () => {
    return (
      <main className="min-h-screen md:mt-16 -mb-44">
              <SparklesCore
        id="tsparticlesvenue"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={30}
        className="w-full h-full opacity-50 absolute"
      />
                    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
  
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative max-w-7xl mx-auto mb-4">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />
  
            <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
              Venue
            </h1>
            <p className="text-center text-xs md:text-xl text-yellow-100/60 max-w-4xl mx-auto">
            LORDS INSTITUTE OF ENGINEERING & TECHNOLOGY, Survey No. 32, Himayath sagar, Hyderabad
            </p>
          </div>
  
          <div className="relative max-w-7xl mx-auto mb-24">
            <div className="relative p-4 border-2 border-yellow-500/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10" />
              <div className="relative z-10">
                <iframe
                  className="w-full h-[500px] rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4512792671726!2d78.3674496!3d17.3420047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95ee6c4680d5%3A0x1890088c6b779e63!2sLords%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1743853219853!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  export default Venue;