import Link from "next/link";

import type { ScenarioEntry } from "@/types/scenario";

type ScenarioVerdictCardProps = {
  recommendation: ScenarioEntry["recommendation"];
  notRecommendedFor: ScenarioEntry["notRecommendedFor"];
};

/**
 * Renders the recommendation and not-recommended sections for a scenario page.
 */
export function ScenarioVerdictCard({
  recommendation,
  notRecommendedFor,
}: ScenarioVerdictCardProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <article className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          Recommendation
        </p>
        <div className="mt-5 rounded-3xl border border-[#10b981]/20 bg-[#10b981]/8 p-5">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">{recommendation.primary.name}</h2>
            <Link
              href={`/tool/${recommendation.primary.slug}`}
              className="text-sm font-medium text-[#7ef3bf] transition hover:text-white"
            >
              Open tool page
            </Link>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-200">{recommendation.primary.reason}</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {recommendation.alternatives.map((item) => (
            <article key={item.slug} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <Link
                  href={`/tool/${item.slug}`}
                  className="text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  Tool page
                </Link>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{item.reason}</p>
            </article>
          ))}
        </div>
      </article>
      <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-zinc-300 uppercase">
          Not recommended for
        </p>
        <ul className="mt-5 space-y-3">
          {notRecommendedFor.map((item) => (
            <li key={item} className="text-sm leading-7 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
