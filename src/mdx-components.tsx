import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-12">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {children}
      </p>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto my-8 text-sm font-mono shadow-2xl border border-gray-700/50">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-md text-sm font-mono font-bold">
        {children}
      </code>
    ),
    ...components,
  };
}
