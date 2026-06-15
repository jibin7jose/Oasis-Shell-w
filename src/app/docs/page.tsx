export default function DocsPage() {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-500">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Documentation</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
        Oasis-Shell is a rule-based utility for monitoring structural changes in local workspaces and executing neural directives. It provides a structured signal for change analysis, powered by a deterministic LLaVA engine.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-12">Engine Logic</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        The system provides auditable results through a multi-stage processing pipeline:
      </p>
      
      <ul className="space-y-3 mb-12 text-gray-600 dark:text-gray-300">
        <li className="flex items-start">
          <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span><strong>Structural Hashing:</strong> Normalizes window layout and active processes into canonical text before indexing.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span><strong>Isolation Layer:</strong> Identifies primary context containers while stripping UI noise and background telemetry.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span><strong>Rule Engine:</strong> Employs <em>Proximity Clustering</em> (scanning neural verbs within a 5-word window) and <em>Negation Shift Detection</em> to detect intent changes.</span>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">System Guarantees</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 mb-12">
        <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-semibold">
            <tr>
              <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">Feature</th>
              <th className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">Guarantee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-900/20">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Determinism</td>
              <td className="px-6 py-4">Identical workspace states always yield identical Context Crate JSON outputs.</td>
            </tr>
            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-900/20">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Risk Coverage</td>
              <td className="px-6 py-4">Rule-based detection of data sharing, system anomalies, and numeric memory overrides.</td>
            </tr>
            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-900/20">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Offline Isolation</td>
              <td className="px-6 py-4">All LLM embeddings and inference execute strictly on local compute natively via Ollama.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">Architecture Flow</h2>
      <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
        {/* Simple SVG Graph Diagram representation */}
        <svg viewBox="0 0 400 200" className="w-full max-w-lg text-gray-900 dark:text-white" fill="currentColor">
          <rect x="20" y="80" width="100" height="40" rx="6" className="fill-emerald-100 dark:fill-emerald-900/30 stroke-emerald-500" strokeWidth="2" />
          <text x="70" y="105" textAnchor="middle" className="text-xs font-semibold fill-emerald-700 dark:fill-emerald-400">User Intent</text>
          
          <line x1="120" y1="100" x2="160" y2="100" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <rect x="160" y="30" width="100" height="140" rx="6" className="fill-gray-100 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-700" strokeWidth="2" />
          <text x="210" y="55" textAnchor="middle" className="text-[10px] font-bold fill-gray-500">OASIS KERNEL</text>
          
          <rect x="175" y="70" width="70" height="25" rx="4" className="fill-indigo-100 dark:fill-indigo-900/30 stroke-indigo-400" strokeWidth="1" />
          <text x="210" y="86" textAnchor="middle" className="text-[9px] fill-indigo-700 dark:fill-indigo-300">Parser</text>
          
          <rect x="175" y="110" width="70" height="25" rx="4" className="fill-indigo-100 dark:fill-indigo-900/30 stroke-indigo-400" strokeWidth="1" />
          <text x="210" y="126" textAnchor="middle" className="text-[9px] fill-indigo-700 dark:fill-indigo-300">LLaVA Vision</text>

          <line x1="260" y1="100" x2="300" y2="100" className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="2" markerEnd="url(#arrow)" />

          <rect x="300" y="80" width="80" height="40" rx="6" className="fill-teal-100 dark:fill-teal-900/30 stroke-teal-500" strokeWidth="2" />
          <text x="340" y="105" textAnchor="middle" className="text-xs font-semibold fill-teal-700 dark:fill-teal-400">Execution</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-gray-400 dark:fill-gray-600" />
            </marker>
          </defs>
        </svg>
      </div>

    </article>
  );
}
