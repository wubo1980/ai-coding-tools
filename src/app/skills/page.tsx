import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "AI Skills & Plugins | AI Coding Tools",
  description:
    "Explore AI agent skills, IDE plugins, and workflow extensions with upcoming side-by-side comparisons.",
  alternates: {
    canonical: "/skills",
  },
};

/**
 * Renders the skills landing page placeholder.
 */
export default function SkillsPage() {
  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-14 lg:px-10 lg:py-16">
        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-8">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Skills and plugins
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Skills, plugins, and workflow extensions are next in line.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
            This section will track AI agent skills, IDE plugins, extension packs, and
            workflow modules with the same comparison style used across tools and models.
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
