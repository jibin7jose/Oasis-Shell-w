export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Left Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="sticky top-32 space-y-8">
            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Getting Started</h4>
              <ul className="space-y-2">
                <li><a href="/docs" className="block px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-md">Introduction</a></li>
                <li><a href="/docs/quickstart" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Quickstart (MDX)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">API Reference</h4>
              <ul className="space-y-2">
                <li><a href="#" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Endpoints</a></li>
                <li><a href="#" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Core Concepts</h4>
              <ul className="space-y-2">
                <li><a href="#" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
