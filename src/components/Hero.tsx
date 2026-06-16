"use client";

import { motion } from "framer-motion";
import { Download, Layout, Terminal, GitMerge, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-[#030712] flex items-center">
      {/* Soft Glow Background */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-[#E2E2E2] mb-4 font-sans leading-[1.1]">
            The open source AI Operating System
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-[#A0A0A0] mb-8 font-medium">
            Your home for deterministic local intelligence.
          </p>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Oasis-Shell-Installer.exe"
              download
              className="px-8 py-4 rounded bg-[#0066b8] hover:bg-[#005a9e] text-white font-semibold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg min-w-[300px]"
            >
              <Download className="w-5 h-5" /> Download for Windows
            </motion.a>
            <div className="text-sm text-gray-500 dark:text-[#A0A0A0] mt-2 font-medium">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Web</a>,{" "}
              <a href="#" className="hover:underline">Insiders edition</a>, or{" "}
              <a href="#" className="hover:underline">other platforms</a>
              <div className="mt-2 text-xs opacity-70">
                By using Oasis-Shell, you agree to its <a href="#" className="underline">license</a> and <a href="#" className="underline">privacy statement</a>.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Big App Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 w-full max-w-[1200px]"
        >
          <img 
            src="/Screenshot 2026-06-15 110549.png" 
            alt="Oasis-Shell Interface" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 dark:border-[#333333]"
          />
        </motion.div>

        {/* Built With Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">Engineered With</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 hover:opacity-100 transition-all duration-500">
            {/* Tauri */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <img src="https://cdn.worldvectorlogo.com/logos/tauri-1.svg" className="w-8 h-8" alt="Tauri" /> Tauri
            </div>
            {/* Rust */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" className="w-8 h-8 dark:invert" alt="Rust" /> Rust
            </div>
            {/* React */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="w-8 h-8" alt="React" /> React
            </div>
            {/* Tailwind */}
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="w-8 h-8" alt="Tailwind CSS" /> Tailwind
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
