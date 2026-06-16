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
            className="relative overflow-hidden"
          >
            <img src="/Screenshot 2026-06-15 111005.png" alt="Oasis-Shell Terminal Integration" className="w-full h-auto rounded-xl shadow-2xl border border-gray-200 dark:border-[#333333]"/>
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

      </div>
    </section>
  );
}
