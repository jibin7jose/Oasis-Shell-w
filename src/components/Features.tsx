"use client";

import { motion } from "framer-motion";
import { Brain, Command, Eye, Zap, Database, Globe } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* Feature 1: Sentient AI (Copilot equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Think it. Execute it.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Oasis-Shell's Neural Intent Bar replaces traditional search. Type natural language commands and the deterministic local LLM engine translates your intent into system actions natively.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                <Command className="w-5 h-5 text-emerald-500" /> Global shortcut: <kbd className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm border border-gray-200 dark:border-gray-700 shadow-sm">Ctrl + K</kbd>
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                <Zap className="w-5 h-5 text-teal-500" /> Runs entirely offline on Ollama.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-[#1e1e1e] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
            <div className="flex items-center gap-4 bg-white dark:bg-[#252526] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Brain className="w-6 h-6 text-emerald-500" />
              <div className="flex-1">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Neural Intent</div>
                <div className="text-gray-900 dark:text-white font-mono text-sm">"Deploy current workspace to Vercel"</div>
              </div>
            </div>
            <div className="mt-6 space-y-3 pl-12 border-l-2 border-emerald-500/30">
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400">⚡ Extracting context from VS Code...</div>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400">⚡ Identifying Next.js framework...</div>
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">✓ Executing deployment sentinel.</div>
            </div>
          </motion.div>
        </div>

        {/* Feature 2: Photographic Memory (Extensions/Everywhere equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-[#1e1e1e] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white dark:bg-[#252526] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center aspect-square gap-3 hover:scale-105 transition-transform cursor-pointer">
                  <Eye className="w-8 h-8 text-indigo-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Vision Inference</span>
               </div>
               <div className="bg-white dark:bg-[#252526] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center aspect-square gap-3 hover:scale-105 transition-transform cursor-pointer">
                  <Database className="w-8 h-8 text-blue-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Sentient Vault</span>
               </div>
               <div className="bg-white dark:bg-[#252526] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center aspect-square gap-3 hover:scale-105 transition-transform cursor-pointer">
                  <Globe className="w-8 h-8 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Context Crates</span>
               </div>
               <div className="bg-white dark:bg-[#252526] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center aspect-square gap-3 hover:scale-105 transition-transform cursor-pointer">
                  <Command className="w-8 h-8 text-pink-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Voice Engine</span>
               </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Photographic Context.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Never lose your train of thought. Oasis-Shell automatically captures semantic snapshots of your workflow into the Sentient Vault, allowing you to instantly recall complex "Context Crates".
            </p>
            <a href="/docs/architecture" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Learn about the Vision Engine →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
