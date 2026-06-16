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
                <li><a href="/docs" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Overview</a></li>
                <li><a href="/docs/quickstart" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Installation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Core Features</h4>
              <ul className="space-y-2">
                <li><a href="/docs/architecture" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">OS Architecture</a></li>
                <li><a href="/docs/file-explorer" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">File Explorer</a></li>
                <li><a href="/docs/sentient-vault" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Sentient Vault</a></li>
                <li><a href="/docs/screen-capture" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Screen Capture</a></li>
                <li><a href="/docs/settings" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Settings & Telemetry</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Echo System</h4>
              <ul className="space-y-2">
                <li><a href="/docs/echo-memory" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Echo Memory</a></li>
                <li><a href="/docs/shortcuts" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Global Shortcuts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Advanced Systems</h4>
              <ul className="space-y-2">
                <li><a href="/docs/aegis-quarantine" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Aegis Quarantine</a></li>
                <li><a href="/docs/omni-forge" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Omni-Vent Forge</a></li>
                <li><a href="/docs/chronos" className="block px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Chronos Archival</a></li>
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
