"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, ArrowRight, BrainCircuit } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState("");

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : document.getElementById("search-trigger")?.click();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-gray-900/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
          >
            <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Input Header */}
              <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-white/5">
                <Search className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Ask the Sentient Vault... (or search docs)"
                  className="flex-1 bg-transparent border-none outline-none text-lg text-gray-900 dark:text-white placeholder:text-gray-400"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fake Results Body */}
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {query.length === 0 ? (
                  <div className="text-center py-12 text-sm text-gray-500 flex flex-col items-center">
                    <BrainCircuit className="w-12 h-12 text-gray-200 dark:text-gray-800 mb-4" />
                    <p>Type to search documentation or invoke neural intent.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest px-3 mb-2 mt-4">Top Results</div>
                    
                    <a href="/docs/quickstart" className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-white/5 group transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-black flex items-center justify-center border border-gray-200 dark:border-white/10">
                          <Command className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">Quickstart Guide</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Install Oasis-Shell and boot the Foundry Kernel.</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a href="/docs" className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-white/5 group transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-black flex items-center justify-center border border-gray-200 dark:border-white/10">
                          <Command className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">Engine Logic</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Understand the structural hashing and proximity clustering.</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="bg-gray-50 dark:bg-black/50 px-4 py-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-800 px-1.5 rounded font-sans">↑</kbd><kbd className="bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-800 px-1.5 rounded font-sans">↓</kbd> to navigate</span>
                  <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-800 px-1.5 rounded font-sans">Enter</kbd> to select</span>
                </div>
                <div>Powered by <strong>Oasis Sentient Vault</strong></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
