"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[800px] z-50 px-6 py-3 bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-full shadow-lg dark:shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg">
              <Image src="/logo.svg" alt="Oasis-Shell Logo" width={48} height={48} className="object-contain drop-shadow-md group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Oasis-Shell</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Docs</Link>
            <a href="/#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Features</a>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              id="search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all"
            >
              <Search className="w-4 h-4" />
              <span className="text-[10px] font-bold hidden sm:inline-block border border-gray-200 dark:border-gray-700 bg-white dark:bg-black rounded px-1.5 py-0.5 shadow-sm">Ctrl K</span>
            </button>
            <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1"></div>
            <ThemeToggle />
            <a href="https://github.com/jibin7jose/Oasis-Shell" target="_blank" rel="noreferrer" className="hidden sm:flex px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:scale-105 ml-2">
              Download OS
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
