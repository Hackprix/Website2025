import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-black text-black dark:text-white transition-all duration-300 flex items-center justify-center min-h-screen pt-16">
        <div>
          <h1 className="text-4xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg">This is the home page content.</p>
        </div>
      </div>
    </>
  );
}