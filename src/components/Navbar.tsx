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
        className="fixed top-0 w-full z-50 px-6 py-3 bg-white dark:bg-[#181818] border-b border-gray-200 dark:border-[#2b2b2b]"
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
              <Image src="/logo.svg" alt="Oasis-Shell Logo" width={48} height={48} className="object-contain drop-shadow-md group-hover:scale-110 transition-transform dark:invert" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Oasis-Shell</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#007acc] dark:hover:text-[#4ec9b0] transition-colors">Docs</Link>
            <Link href="/docs/quickstart" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#007acc] dark:hover:text-[#4ec9b0] transition-colors">Install</Link>
            <a href="/#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#007acc] dark:hover:text-[#4ec9b0] transition-colors">Features</a>
            <Link href="/docs/echo-memory" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#007acc] dark:hover:text-[#4ec9b0] transition-colors">Echo Memory</Link>
            <Link href="/docs/shortcuts" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#007acc] dark:hover:text-[#4ec9b0] transition-colors">Shortcuts</Link>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              id="search-trigger"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center justify-between w-64 lg:w-80 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-[#2d2d2d] border border-gray-200 dark:border-[#3c3c3c] hover:border-[#007acc] dark:hover:border-[#007acc] text-gray-500 dark:text-[#cccccc] transition-all"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 opacity-70" />
                <span className="text-sm">Search docs...</span>
              </div>
              <span className="text-[10px] font-bold border border-gray-300 dark:border-[#555] bg-white dark:bg-[#1e1e1e] rounded px-1.5 py-0.5 shadow-sm opacity-80">Ctrl K</span>
            </button>
            {/* Mobile search icon */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1"></div>
            <ThemeToggle />
            <a href="/Oasis-Shell-Installer.exe" download className="hidden sm:flex px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:scale-105 ml-2">
              Download OS
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
