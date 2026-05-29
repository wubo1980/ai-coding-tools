import Link from "next/link";

import type { ModelComparisonRow } from "@/types/model";

type ModelComparisonTableProps = {
  rows: ModelComparisonRow[];
};

/**
 * Renders the model comparison table on the models index page.
 */
export function ModelComparisonTable({ rows }: ModelComparisonTableProps) {
  return (
    <section className="overflow-hidden rounded-[30px] border border-white/10 bg-[#121723] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/10 px-6 py-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          Model comparison
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          Compare frontier models by capability, price, and best-fit workload.
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1040px] w-full border-collapse text-left">
          <caption className="sr-only">AI model comparison table</caption>
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-xs tracking-[0.2em] text-zinc-400 uppercase">
              <th className="sticky left-0 z-20 min-w-[220px] bg-[#151a26] px-5 py-4">Model</th>
              <th className="px-5 py-4">Vendor</th>
              <th className="px-5 py-4">Core capability</th>
              <th className="px-5 py-4">Best for</th>
              <th className="bg-[#0d2c24] px-5 py-4 text-[#7ef3bf]">Pricing</th>
              <th className="px-5 py-4">Audience</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((model) => (
              <tr key={model.slug} className="border-b border-white/8 align-top last:border-b-0">
                <td className="sticky left-0 z-10 bg-[#121723] px-5 py-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/models/${model.slug}`}
                        className="text-base font-semibold text-white transition hover:text-[#7ef3bf]"
                      >
                        {model.name}
                      </Link>
                      {model.highlight ? (
                        <span className="rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-2.5 py-1 text-[11px] font-medium text-[#7ef3bf]">
                          {model.highlight}
                        </span>
                      ) : null}
                    </div>
                    <span className="text-sm text-zinc-500">{model.category}</span>
                    <span className="text-xs text-zinc-500">Added {model.addedAt}</span>
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
                      <a
                        href={model.sourceLinks.product}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-white"
                      >
                        Product
                      </a>
                      <a
                        href={model.sourceLinks.pricing}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-white"
                      >
                        Pricing
                      </a>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-zinc-300">{model.vendor}</td>
                <td className="px-5 py-5 text-sm leading-7 text-zinc-300">
                  {model.coreCapability}
                </td>
                <td className="px-5 py-5">
                  <div className="flex flex-wrap gap-2">
                    {model.bestFor.map((item) => (
                      <span
                        key={`${model.slug}-${item}`}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="bg-[#0d2c24]/70 px-5 py-5 text-sm font-semibold text-[#c2ffe4]">
                  {model.pricing}
                </td>
                <td className="px-5 py-5 text-sm leading-7 text-zinc-400">{model.audience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
