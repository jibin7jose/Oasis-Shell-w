"use client";

import { motion } from "framer-motion";
import { Download, Layout, Terminal, GitMerge, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white dark:bg-[#030712] flex items-center">
      {/* Soft Glow Background */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 font-sans leading-[1.1]">
            Operating Systems. <br />
            <span className="text-blue-600 dark:text-blue-500">Redefined.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium max-w-lg">
            Free. Built on local LLMs. Runs natively on your hardware.
          </p>
          
          <div className="flex flex-col gap-4 max-w-sm">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/jibin7jose/Oasis-Shell"
              className="px-8 py-5 rounded bg-[#0066b8] hover:bg-[#005a9e] text-white font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <Download className="w-6 h-6" /> Download for Windows
            </motion.a>
            <div className="flex items-center gap-4 text-sm font-medium mt-2">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Web version</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Mac</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Linux</a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: VS Code Style Editor Screenshot */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full lg:w-[120%] lg:-mr-[20%]"
        >
          {/* Mac/Windows Window Mockup */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-[#1e1e1e] flex flex-col h-[500px] md:h-[650px] w-full">
            {/* Title Bar */}
            <div className="h-10 bg-[#323233] flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[#cccccc] text-xs font-sans tracking-wide">Oasis-Shell - Strategic Cortex</div>
              <div className="w-12"></div> {/* Spacer for balance */}
            </div>
            
            {/* Editor Body */}
            <div className="flex flex-1 text-left min-h-0">
              {/* Sidebar */}
              <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-[#252526] shrink-0">
                <Layout className="w-6 h-6 text-white opacity-80" />
                <Terminal className="w-6 h-6 text-white opacity-40 hover:opacity-80 transition-opacity" />
                <GitMerge className="w-6 h-6 text-white opacity-40 hover:opacity-80 transition-opacity" />
              </div>
              {/* Explorer */}
              <div className="hidden sm:block w-64 bg-[#252526] text-[#cccccc] p-4 font-mono text-sm border-r border-[#1e1e1e] shrink-0">
                <div className="font-bold text-[11px] tracking-widest uppercase mb-4 opacity-70">Explorer</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold"><div className="w-2 h-2 border border-current"></div> <span>SENTIENT_VAULT</span></div>
                  <div className="pl-4 text-[#4ec9b0] bg-[#37373d] py-1 -ml-4 pl-8 border-l-2 border-[#007acc]">neural_core.rs</div>
                  <div className="pl-4 text-[#ce9178] py-1">vision_engine.ts</div>
                  <div className="pl-4 text-[#dcdcaa] py-1">memory_vector.db</div>
                  <div className="pl-4 text-[#9cdcfe] py-1">gui_stage.tsx</div>
                </div>
              </div>
              {/* Code Area */}
              <div className="flex-1 bg-[#1e1e1e] font-mono text-sm sm:text-base text-[#d4d4d4] overflow-hidden relative flex flex-col">
                <div className="flex items-center gap-4 bg-[#252526] px-4 pt-2 shrink-0">
                  <div className="text-[#4ec9b0] bg-[#1e1e1e] px-4 py-2 border-t-2 border-[#007acc]">neural_core.rs</div>
                  <div className="text-[#969696] hover:text-[#d4d4d4] cursor-pointer">terminal</div>
                </div>
                <div className="p-6 overflow-auto">
                  <pre className="leading-loose">
                    <span className="text-[#569cd6]">pub async fn</span> <span className="text-[#dcdcaa]">resolve_neural_intent</span>(query: <span className="text-[#4ec9b0]">String</span>) {`{`}
                    <br/>
                    {"    "}<span className="text-[#6a9955]">// 1. Generate semantic embeddings locally</span>
                    <br/>
                    {"    "}<span className="text-[#569cd6]">let</span> embedding <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">VectorDB</span>::<span className="text-[#dcdcaa]">generate</span>(&amp;query).<span className="text-[#c586c0]">await</span>?;
                    <br/>
                    {"    "}<span className="text-[#569cd6]">let</span> context <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">WorkspaceManager</span>::<span className="text-[#dcdcaa]">scan_active_windows</span>();
                    <br/><br/>
                    {"    "}<span className="text-[#6a9955]">// 2. Route intent to specialized Sentinels</span>
                    <br/>
                    {"    "}<span className="text-[#c586c0]">if</span> query.<span className="text-[#dcdcaa]">contains</span>(<span className="text-[#ce9178]">"deploy"</span>) {`{`}
                    <br/>
                    {"        "}<span className="text-[#4ec9b0]">DeploymentSentinel</span>::<span className="text-[#dcdcaa]">trigger</span>(context).<span className="text-[#c586c0]">await</span>;
                    <br/>
                    {"    "}{`}`} <span className="text-[#c586c0]">else</span> {`{`}
                    <br/>
                    {"        "}<span className="text-[#4ec9b0]">LocalLLM</span>::<span className="text-[#dcdcaa]">infer_action</span>(embedding).<span className="text-[#c586c0]">await</span>;
                    <br/>
                    {"    "}{`}`}
                    <br/>
                    {`}`}
                  </pre>
                </div>
                
                {/* Floating Intent Bar inside the IDE */}
                <div className="absolute bottom-8 right-8 bg-[#252526] border border-[#454545] shadow-2xl rounded-lg p-3 flex items-center gap-3 animate-pulse">
                  <Code2 className="w-5 h-5 text-[#007acc]" />
                  <span className="text-[#cccccc] text-sm">Processing intent locally...</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
