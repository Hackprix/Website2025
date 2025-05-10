"use client";
import React from "react";
import { SESSIONS } from "@/config/content";
import SessionsCard from "@/components/ui/DepartmentCard";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/Sparkles";
import { DepartmentHero } from "@/components/ui/DepartmentHero";
import { ShootingStars } from "./ui/ShootingStar";

const DepartmentPage = () => {
  return (
    <div className="w-full stars h-full flex items-center justify-center overflow-hidden z-20 md:pt-36 pt-16 bg-gradient-to-b from-black via-slate-900 to-slate-900">
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div> */}
      {/* <SparklesCore
        id="tsparticlesdepartmentpage"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={60}
        className="w-full h-full opacity-50 absolute"
      /> */}

<ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={5}
        maxSpeed={15}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
            <style jsx>{`
        .stars {
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #eee,
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
      <div className="relative z-10 px-4 max-w-7xl mx-auto my-2">
        <DepartmentHero />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:space-y-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {SESSIONS.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <SessionsCard session={session} />
            </motion.div>
          ))}                                 
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentPage; 