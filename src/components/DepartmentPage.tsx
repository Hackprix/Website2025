"use client";
import React from "react";
import { DEPARTMENTS } from "@/config/content";
import DepartmentCard from "@/components/ui/DepartmentCard";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/Sparkles";

const DepartmentPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden z-20 md:pt-40 pt-30">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[120px]" />
      </div>
      <SparklesCore
        id="tsparticlesdepartmentpage"
        background="transparent"
        minSize={0.8}
        maxSize={1.6}
        particleDensity={60}
        className="w-full h-full opacity-50 absolute"
      />
      <div className="relative z-10 px-4 max-w-7xl mx-auto my-10">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold dark:text-white text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Department Events
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore events from different departments and participate in exciting competitions, workshops, and more.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {DEPARTMENTS.map((department, index) => (
            <motion.div
              key={department.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <DepartmentCard department={department} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentPage; 