# Oasis-Shell Website: Project Workflow & Creation Guide

This document outlines the overarching project workflow used to create the Oasis-Shell website, including how the documentation portal was built, and how you can integrate search capabilities in the future.

---

## 1. Website Creation Workflow

Creating a responsive, modern website for a complex OS requires a structured approach. Here is the step-by-step workflow we used:

### Step 1: Technology Stack Selection
*   **Framework:** Next.js 14 (App Router) for Server-Side Rendering (SSR) and seamless API integrations.
*   **Styling:** Tailwind CSS v4 for utility-first, rapid UI development.
*   **Animations:** Framer Motion for buttery-smooth scroll triggers and interactive hover states.
*   **Icons:** Lucide-React for clean, consistent, and lightweight SVG icons.

### Step 2: UI/UX Prototyping (Code-First)
*   Instead of using Figma, we built the UI directly in code ("Text First").
*   We created a VS Code-inspired layout for the Hero section (`src/components/Hero.tsx`) to immediately signal to developers that this is a technical tool.
*   We used CSS Grid to create a "Bento Box" layout for the features (`src/components/Features.tsx`), highlighting the global keyboard shortcuts (e.g., `Ctrl+Shift+G`).

### Step 3: Theme Architecture
*   We integrated `next-themes` to handle the Light/Dark/System state.
*   **Crucial Step:** Configured Tailwind v4's dark variant using `@custom-variant dark (&:is(.dark *), &:is(.dark));` in `globals.css` to ensure the background and foreground colors flip correctly when the theme toggle is clicked.

---

## 2. Documentation Creation Workflow

We built a dedicated documentation portal (`/docs`) to mimic professional API sites like PolicyDiff. Here is how you manage and expand it:

### Current Implementation (React Pages)
*   **Layout (`src/app/docs/layout.tsx`):** We created a sticky left-sidebar containing the navigation tree (Getting Started, API Reference, Core Concepts). This layout wraps all pages inside the `/docs` directory.
*   **Content (`src/app/docs/page.tsx`):** We used Tailwind Typography classes (`prose prose-gray dark:prose-invert`) to style standard HTML elements like `<h1>`, `<p>`, and `<ul>` beautifully. We also included custom SVG diagrams and HTML tables.

### Recommended Workflow for Future Expansion (MDX)
As your documentation grows, writing everything in React components becomes tedious. 
**Step-by-step to upgrade to MDX:**
1. Install Next.js MDX dependencies: `npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx`
2. Configure `next.config.mjs` to support `.mdx` files.
3. You can then write documentation purely in Markdown (e.g., `src/app/docs/quickstart/page.mdx`), and Next.js will automatically render it within your beautiful `layout.tsx` sidebar!

---

## 3. Search Integration Workflow

The user requested: *"that way to search"*. 
Currently, the website is static. However, Oasis-Shell is famous for its **Sentient Vault (Local Vector Database)**. Here is the workflow to add search functionality to your website's documentation:

### Option A: Standard Documentation Search (Algolia DocSearch)
If you want standard keyword search for your `/docs`:
1. Apply for **Algolia DocSearch** (it is free for open-source documentation).
2. Install the package: `npm install @docsearch/react`
3. Add the `<DocSearch />` component to your `Navbar.tsx` or `docs/layout.tsx` sidebar. Algolia will automatically crawl your site and provide instant, drop-down search results.

### Option B: Sentient "Oasis" Semantic Search (Custom Integration)
To truly show off your OS, you can bridge your website to your native Rust backend's semantic search:
1. **API Route:** Create a Next.js Server Action or API Route (e.g., `src/app/api/search/route.ts`).
2. **Database:** Host your Vector DB (e.g., Pinecone or Postgres pgvector) or query your local Ollama instance if the website is running locally.
3. **UI:** Create a modal (`Ctrl+K` command palette) on the website using Framer Motion. When a user types a query, hit your semantic search endpoint to return deeply contextual results rather than simple keyword matches.

---

## 4. Final Image Integration Workflow

As per the strategy: *"first fully add text then I will give images"*.
Once you have the high-resolution screenshots of the OS:
1. Place the `.png` or `.webp` files into the `public/` folder of the website (e.g., `public/hero-screenshot.png`).
2. Open `src/components/Hero.tsx`.
3. Locate the `<div>` containing the CSS IDE Mockup.
4. Replace that block with the Next.js optimized image tag:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/hero-screenshot.png" 
     alt="Oasis-Shell Interface" 
     width={1200} 
     height={800} 
     className="rounded-xl shadow-2xl border border-gray-800"
   />
   ```
5. Repeat this process for any diagrams in the `/docs` section.
