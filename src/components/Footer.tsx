import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200/50 dark:border-white/10 py-16 bg-white dark:bg-[#030712] relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg">
              <Image src="/logo.svg" alt="Oasis-Shell Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Oasis-Shell</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            The next-generation, AI-driven operating system interface. Deterministic, fully local, and beautifully designed.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
          <ul className="space-y-3">
            <li><a href="/docs" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">API Reference</a></li>
            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
          <ul className="space-y-3">
            <li><a href="https://github.com/jibin7jose/Oasis-Shell" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">GitHub</a></li>
            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Twitter</a></li>
            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Discord</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200/50 dark:border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Jibin Jose. Released under MIT License.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-500">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
