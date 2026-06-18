"use client";

import { motion } from "framer-motion";
import { Brain, Command, Eye, Zap, Database, Globe } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Code with rich features.</h2>
        </div>

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
              Oasis-Shell&apos;s Neural Intent Bar replaces traditional search. Type natural language commands and the deterministic local LLM engine translates your intent into system actions natively.
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
            className="relative overflow-hidden"
          >
            <img src="/image.png" alt="Oasis-Shell Terminal Integration" className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 dark:border-[#333333]"/>
          </motion.div>
        </div>

        {/* Feature 2: Photographic Memory (Extensions/Everywhere equivalent) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <img src="/Screenshot 2026-06-15 111021.png" alt="Oasis-Shell System Dashboard" className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 dark:border-[#333333]"/>
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

        {/* Feature 3: Extensible Developer Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-6 shadow-lg">
              <Command className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Built for Developers.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Oasis-Shell is completely open-source and deeply customizable. Write your own Sentinels in Rust, hook into the Native LLM Engine, and extend the OS capabilities instantly.
            </p>
            <a href="https://github.com/jibin7jose/Oasis-Shell" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold hover:underline">
              View the source code →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e1e1e] p-4 rounded-2xl border border-[#333] shadow-2xl overflow-hidden font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-2 text-xs text-gray-500">src-tauri/src/ai.rs</span>
            </div>
            <pre className="text-[#d4d4d4] overflow-x-auto p-2">
              <span className="text-[#569cd6]">pub async fn</span> <span className="text-[#dcdcaa]">rag_query</span>(query: <span className="text-[#4ec9b0]">String</span>) -&gt; <span className="text-[#4ec9b0]">Result</span>&lt;<span className="text-[#4ec9b0]">String</span>, <span className="text-[#4ec9b0]">String</span>&gt; {`{`}<br/>
              {"    "}<span className="text-[#6a9955]">// 1. Generate semantic embeddings locally</span><br/>
              {"    "}<span className="text-[#569cd6]">let</span> embedding <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">VectorDB</span>::<span className="text-[#dcdcaa]">generate</span>(&amp;query).<span className="text-[#c586c0]">await</span>?;<br/>
              {"    "}<span className="text-[#569cd6]">let</span> context <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">WorkspaceManager</span>::<span className="text-[#dcdcaa]">scan_windows</span>();<br/><br/>
              {"    "}<span className="text-[#6a9955]">// 2. Route intent to specialized Sentinels</span><br/>
              {"    "}<span className="text-[#c586c0]">if</span> query.<span className="text-[#dcdcaa]">contains</span>(<span className="text-[#ce9178]">"deploy"</span>) {`{`}<br/>
              {"        "}<span className="text-[#4ec9b0]">DeploymentSentinel</span>::<span className="text-[#dcdcaa]">trigger</span>(context).<span className="text-[#c586c0]">await</span>;<br/>
              {"    "}{`}`} <span className="text-[#c586c0]">else</span> {`{`}<br/>
              {"        "}<span className="text-[#4ec9b0]">LocalLLM</span>::<span className="text-[#dcdcaa]">infer_action</span>(embedding).<span className="text-[#c586c0]">await</span>;<br/>
              {"    "}{`}`}<br/>
              {`}`}
            </pre>
          </motion.div>
        </div>

        {/* Feature 4: Heuristic Guardian */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative bg-black rounded-2xl border border-gray-800 p-8 shadow-[0_0_50px_rgba(244,63,94,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
            <div className="relative z-10 space-y-6">
               <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <span className="text-xs font-mono text-rose-500 uppercase tracking-widest">Process Forensics</span>
                  <span className="text-xs font-mono text-gray-500">sparkline_trace.svg</span>
               </div>
               <div className="flex gap-4">
                 <div className="w-1.5 h-16 bg-rose-500 rounded-full" />
                 <div>
                   <div className="text-sm font-bold text-white mb-2">Priority Cache Sync: ACTIVE</div>
                   <div className="flex items-center gap-4 mt-3">
                     <svg width="120" height="40" className="overflow-visible"><polyline fill="none" stroke="#34d399" strokeWidth="2" points="0,30 20,25 40,35 60,10 80,15 100,5 120,20"/></svg>
                     <svg width="120" height="40" className="overflow-visible"><polyline fill="none" stroke="#60a5fa" strokeWidth="2" points="0,20 20,15 40,25 60,20 80,35 100,10 120,15"/></svg>
                   </div>
                 </div>
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center mb-6 shadow-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              The Heuristic Guardian.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Oasis-Shell acts as an active Sentinel over your hardware. Using undocumented Win32 APIs, the daemon renders mathematical Sparklines of process volatility, suspends rogue applications, and maintains a cryptographic audit log of all CPU priority allocations.
            </p>
            <a href="/docs/aegis-quarantine" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold hover:underline">
              View Aegis Telemetry Specs →
            </a>
          </motion.div>
        </div>

        {/* Feature 5: Strategic Boardroom & Clickable Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-6 shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              A Sentient Workforce.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Why code alone? Convene the <strong>Strategic Boardroom</strong> where multiple AI personas debate your architecture, simulate "Black Swan" risks, and automatically forge native deployment binaries via the <strong>Exodus Protocol</strong>.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500" /> <strong>Clickable Reality:</strong> Global OCR over any unselectable UI element.
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                <div className="w-2 h-2 rounded-full bg-indigo-500" /> <strong>Sentient Terminal:</strong> Translates Unix (ls, grep) into native PowerShell.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-indigo-500/30 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]" />
             <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                   <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                     <Brain className="w-5 h-5 text-indigo-300" />
                   </div>
                   <div>
                     <div className="text-white font-bold tracking-widest uppercase text-xs">Boardroom Synthesis</div>
                     <div className="text-indigo-300 font-mono text-[10px]">Persona Alignment: STABLE</div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                      <div className="text-xs text-indigo-400 font-bold mb-1">Architect Golem</div>
                      <div className="text-sm text-gray-300">"The proposed structure risks vector collision. Implementing contextual partitioning."</div>
                   </div>
                   <div className="flex gap-4">
                      <button className="flex-1 py-3 bg-indigo-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 transition-colors">Manifest Report</button>
                      <button className="flex-1 py-3 bg-black/40 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Invoke Oracle</button>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
