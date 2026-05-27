import type { ToolDetailEntry, ToolScore } from "@/types/tool";

type ToolScorePanelProps = {
  scores: ToolDetailEntry["scores"];
};

const toneClasses: Record<ToolScore["tone"], string> = {
  emerald: "bg-[#10b981]",
  blue: "bg-[#3b82f6]",
  amber: "bg-[#f59e0b]",
};

/**
 * Renders reusable score cards for capability, price, and ease of use.
 */
export function ToolScorePanel({ scores }: ToolScorePanelProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="mb-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          Score cards
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Quick read on capability, price, and learning curve.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Object.values(scores).map((score) => (
          <article
            key={score.label}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-300">{score.label}</p>
                <p className="mt-2 text-4xl font-semibold text-white">
                  {score.value}
                  <span className="text-base text-zinc-500">/10</span>
                </p>
              </div>
            </div>
            <div className="mt-4 h-2.5 rounded-full bg-white/8">
              <div
                className={`h-full rounded-full ${toneClasses[score.tone]}`}
                style={{ width: `${score.value * 10}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{score.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
