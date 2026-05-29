import Link from "next/link";

/**
 * Renders the lightweight global header for public pages.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white uppercase"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#10b981] shadow-[0_0_18px_rgba(16,185,129,0.7)]" />
          AI Coding Tools
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/compare/front-end-dev" className="transition hover:text-white">
            Front-end
          </Link>
          <Link href="/compare/budget-developer" className="transition hover:text-white">
            Budget
          </Link>
          <Link href="/tool/cursor" className="transition hover:text-white">
            Cursor
          </Link>
          <Link href="/tool/copilot" className="transition hover:text-white">
            Copilot
          </Link>
          <Link href="/tool/claude-code" className="transition hover:text-white">
            Claude Code
          </Link>
          <Link href="/models" className="transition hover:text-white">
            Models
          </Link>
          <Link href="/skills" className="transition hover:text-white">
            Skills
          </Link>
          <Link href="/mcp" className="transition hover:text-white">
            MCP
          </Link>
        </nav>
      </div>
    </header>
  );
}
