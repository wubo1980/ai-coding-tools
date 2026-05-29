import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { ModelComparisonTable } from "@/components/models/ModelComparisonTable";
import { getModelsByNewest } from "@/content/models";

export const metadata: Metadata = {
  title: "AI Models Comparison - Benchmarks, Pricing & Reviews | AI Coding Tools",
  description:
    "Compare GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and other frontier AI models by benchmark scores, pricing, and task suitability.",
  alternates: {
    canonical: "/models",
  },
};

/**
 * Renders the models hub page with an overview and comparison table.
 */
export default function ModelsPage() {
  const rows = getModelsByNewest();

  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10 lg:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_0.8fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              Frontier model reviews
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Compare AI models by benchmark strength, pricing, and real task fit.
            </h1>
            <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-300">
              This hub tracks frontier models used in coding, research, legal analysis,
              and long-running agent workflows. The goal is not to crown a universal
              winner, but to show which model makes sense for the workload you actually
              care about.
            </p>
          </div>
          <aside className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              What this page optimizes for
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
              <li>Benchmark and reasoning performance that matters in production use.</li>
              <li>Pricing clarity for API buyers and product users.</li>
              <li>Practical fit for coding, agent loops, and long-context work.</li>
            </ul>
          </aside>
        </section>
        <ModelComparisonTable rows={rows} />
      </div>
    </SiteShell>
  );
}
