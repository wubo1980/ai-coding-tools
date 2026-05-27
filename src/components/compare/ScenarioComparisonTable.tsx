import Link from "next/link";

import type { ScenarioComparedTool, ScenarioTableColumn } from "@/types/scenario";

type ScenarioComparisonTableProps = {
  columns: ScenarioTableColumn[];
  comparedTools: ScenarioComparedTool[];
};

/**
 * Renders the scrollable comparison table tailored to a scenario page.
 */
export function ScenarioComparisonTable({
  columns,
  comparedTools,
}: ScenarioComparisonTableProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-[#121723] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/10 px-6 py-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          Scenario comparison
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Compare only the dimensions that matter in this workflow.
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1120px] w-full border-collapse text-left">
          <caption className="sr-only">Scenario comparison table</caption>
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-xs tracking-[0.2em] text-zinc-400 uppercase">
              <th className="sticky left-0 z-20 min-w-[220px] bg-[#151a26] px-5 py-4">Tool</th>
              <th className="px-5 py-4">Match score</th>
              {columns.map((column) => (
                <th key={column.key} className="px-5 py-4">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparedTools.map((tool) => (
              <tr key={tool.slug} className="border-b border-white/8 align-top last:border-b-0">
                <td className="sticky left-0 z-10 bg-[#121723] px-5 py-5">
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/tool/${tool.slug}`}
                      className="text-base font-semibold text-white transition hover:text-[#7ef3bf]"
                    >
                      {tool.name}
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {tool.prosForScenario.map((item) => (
                        <span
                          key={`${tool.slug}-${item}`}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-white">{tool.matchScore}</span>
                    <div className="h-2.5 w-28 rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[#10b981]"
                        style={{ width: `${tool.matchScore * 10}%` }}
                      />
                    </div>
                  </div>
                </td>
                {columns.map((column) => (
                  <td key={`${tool.slug}-${column.key}`} className="px-5 py-5 text-sm leading-7 text-zinc-300">
                    {column.key === "verdict" ? tool.verdict : tool.metrics[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
