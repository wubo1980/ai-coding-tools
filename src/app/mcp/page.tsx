import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "MCP Platforms | AI Coding Tools",
  description:
    "Explore Model Context Protocol tools, servers, and integration platforms with upcoming comparisons and platform guides.",
  alternates: {
    canonical: "/mcp",
  },
};

/**
 * Renders the MCP landing page placeholder.
 */
export default function McpPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14 lg:px-10 lg:py-16">
        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-8">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            MCP platforms
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            MCP tools, servers, and integration platforms are coming here.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
            This hub will cover Model Context Protocol platforms, hosted servers,
            deployment tooling, and integration surfaces for teams building agentic
            workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-[#10b981] px-5 py-3 text-sm font-semibold text-[#04130d] transition hover:bg-[#34d399]"
            >
              Back to tools
            </Link>
            <Link
              href="/models"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#10b981]/40"
            >
              Browse models
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
