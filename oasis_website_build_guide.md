# Building the Oasis-Shell Website: A Step-by-Step Guide

This guide details the complete process of building the responsive landing page for the Oasis-Shell Sentient OS. It is designed to reflect the raw power, deterministic AI capabilities, and native Rust performance of your actual OS backend.

## Phase 1: Project Initialization & Setup

**Goal:** Create a modern, robust web foundation capable of handling complex UI components and animations.

1. **Initialize Next.js App Router**
   - We start by bootstrapping a new Next.js 14 project using `npx create-next-app@latest`.
   - **Why Next.js?** It provides App Router for clean layouts, Server Components for fast loading, and native Vercel deployment support.
   - We enable **TypeScript** for strict type-safety, mirroring the reliability of your Rust backend.
   - We enable **Tailwind CSS v4** for utility-first styling without writing bloated CSS files.

2. **Install Core Design Dependencies**
   - `npm install framer-motion lucide-react next-themes`
   - **Framer Motion:** Used to create the fluid, butter-smooth animations (like the floating hero layout and bento-grid hovers) that make the website feel "sentient".
   - **Lucide React:** Provides clean, crisp SVG icons that match the native OS aesthetic.
   - **Next-Themes:** Handles the complex state logic of switching between Light, Dark, and System modes seamlessly.

## Phase 2: Analyzing the Core OS (`App.tsx` & `README.md`)

Before writing any UI code, we analyze the native `Oasis-Shell` codebase to understand what we are selling:

*   **Keyboard-First Architecture:** Discovered global listeners mapping `Ctrl+K` to the Neural Intent Bar, and `Ctrl+Shift+G` to the Strategic Cortex.
*   **The Sentient Vault:** A local vector database for semantic file search.
*   **Heuristic Guardian:** A background agent that monitors CPU/RAM and auto-mitigates anomalies.
*   **Photographic Memory:** LLaVA vision models capturing the screen for historical query.
*   **Foundry Command Center:** A quake-style terminal executing natural language directives.

*These exact features must dictate the copy (text) on the website.*

## Phase 3: Building the Foundation (Theming & Global CSS)

1. **Configure Tailwind v4 Dark Mode:**
   - In `globals.css`, we implement the `@custom-variant dark (&:is(.dark *), &:is(.dark));` rule. This ensures that when `next-themes` applies the `.dark` class to the HTML tag, Tailwind correctly flips all `dark:bg-*` and `dark:text-*` classes.
   
2. **Setup the Theme Provider:**
   - Create `src/components/ThemeProvider.tsx` to wrap the Next.js application in `next-themes` context, preventing hydration mismatches on first load.

## Phase 4: Constructing the Components (Text & Layout First)

### 1. The Navigation Bar (`Navbar.tsx`)
*   **Layout:** A fixed, sticky top bar with a glassmorphic blur (`backdrop-blur-xl`).
*   **Elements:** 
    *   Left: A styled OS logo.
    *   Center: Links to Features, Architecture, and Docs.
    *   Right: The Theme Toggle button and a CTA to "Download OS".

### 2. The VS Code-Inspired Hero (`Hero.tsx`)
*   **Goal:** Immediately communicate that this is a developer-focused, powerful tool.
*   **Left Column (Text):** Massive typography stating "Operating Systems. Redefined." Followed by a direct CTA button "Download for Windows".
*   **Right Column (Mockup):** Instead of a static image, we build a *native CSS grid* that perfectly mimics the VS Code dark theme (`#1e1e1e`). 
    *   We populate the mocked code editor with actual Rust logic derived from your project: `pub async fn resolve_neural_intent()`.
    *   *Note: We build this using pure text and CSS first. You can easily swap this out for actual `.png` or `.webp` images later if preferred.*

### 3. The Bento-Grid Features (`Features.tsx`)
*   **Layout:** A modern, asymmetric grid (Bento box style) rather than a boring list.
*   **Content:** We map the features discovered in Phase 2 directly into cards.
*   **Special Touch:** For every feature (e.g., Streaming Terminal), we add an interactive `<kbd>` tag visually displaying the shortcut (`Ctrl` + `` ` ``), reinforcing the "Keyboard-First" marketing angle.

### 4. The Documentation Portal (`/docs/page.tsx`)
*   **Layout:** A two-column layout consisting of a sticky left-sidebar for navigation and a wide right column for content.
*   **Content (Text First):** 
    *   **Engine Logic:** Detailed bullet points explaining the Hashing, Isolation Layer, and Rule Engine.
    *   **System Guarantees:** A responsive HTML `<table>` proving Determinism and Offline Isolation.
    *   **Architecture Graph:** Built using an inline SVG to represent the flow of data without needing external image assets yet.

## Phase 5: Final Polish & Next Steps

1. **Responsive Testing:** Ensure all grids collapse to single columns on mobile devices, and that the glassmorphic blurs do not cause performance lag on lower-end devices.
2. **Placeholder Image Replacement:**
   - As requested, the website currently uses pure CSS mockups, gradients, and SVGs (Text First).
   - *Next Step:* When you are ready to provide high-resolution screenshots of the 3D Strategic Cortex or the Sentient Vault, we can simply drop them into the `public/` folder and replace the CSS mockups in `Hero.tsx` and `/docs` with Next.js `<Image>` tags.

---

**Ready for Images:** The text, structure, and routing are 100% complete. Let me know when you have the image files, and I will integrate them!
