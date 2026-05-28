"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { ToolComparisonRow } from "@/types/tool";

const PAGE_SIZE = 10;
const MAX_TOTAL = 100;

type ToolComparisonTableProps = {
  tools: ToolComparisonRow[];
  emptyMessage: string;
};

/**
 * Renders the paginated comparison table for the home page.
 * Shows at most 10 tools per page (newest first), with a hard cap of 100 total entries.
 */
export function ToolComparisonTable({
  tools: allTools,
  emptyMessage,
}: ToolComparisonTableProps) {
  const [page, setPage] = useState(0);

  // Cap at MAX_TOTAL, already sorted newest-first by the data layer
  const cappedTools = useMemo(
    () => allTools.slice(0, MAX_TOTAL),
    [allTools],
  );

  const totalPages = Math.max(1, Math.ceil(cappedTools.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const pageTools = cappedTools.slice(
    safePage * PAGE_SIZE,
    (safePage + 1) * PAGE_SIZE,
  );

  // Show pagination only when there's more than one page
  const showPagination = cappedTools.length > PAGE_SIZE;

  return (
    <section id="compare" className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Core comparison table
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Compare the tools developers actually cross-shop in 2026.
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-400">
            Pricing is shown as the current entry point or dominant billing model. Final
            details should still be verified on the linked official pricing pages.
          </p>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-500">
          Newest tools appear first. Showing {Math.min(PAGE_SIZE, cappedTools.length)} of{" "}
          {cappedTools.length} tools.
        </p>
      </div>
      <div className="mb-8 flex flex-wrap gap-3">
        <Link
          href="/compare/front-end-dev"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:border-[#10b981]/40 hover:text-white"
        >
          Front-end developer scenario
        </Link>
        <Link
          href="/compare/budget-developer"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:border-[#10b981]/40 hover:text-white"
        >
          Budget-first scenario
        </Link>
      </div>

      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#121723] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
        <div className="overflow-x-auto">
          <table className="min-w-[1040px] w-full border-collapse text-left">
            <caption className="sr-only">AI coding tools comparison table</caption>
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs tracking-[0.2em] text-zinc-400 uppercase">
                <th className="sticky left-0 z-20 min-w-[220px] bg-[#151a26] px-5 py-4">Tool</th>
                <th className="px-5 py-4">Vendor</th>
                <th className="px-5 py-4">Core capability</th>
                <th className="px-5 py-4">Best for</th>
                <th className="bg-[#0d2c24] px-5 py-4 text-[#7ef3bf]">Pricing</th>
                <th className="px-5 py-4">Audience</th>
              </tr>
            </thead>
            <tbody>
              {pageTools.length > 0 ? (
                pageTools.map((tool) => (
                  <tr key={tool.slug} className="border-b border-white/8 align-top last:border-b-0">
                    <td className="sticky left-0 z-10 bg-[#121723] px-5 py-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            href={`/tool/${tool.slug}`}
                            className="text-base font-semibold text-white transition hover:text-[#7ef3bf]"
                          >
                            {tool.name}
                          </Link>
                          {tool.highlight ? (
                            <span className="rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-2.5 py-1 text-[11px] font-medium text-[#7ef3bf]">
                              {tool.highlight}
                            </span>
                          ) : null}
                        </div>
                        <span className="text-sm text-zinc-500">{tool.category}</span>
                        <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
                          <a
                            href={tool.sourceLinks.product}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                          >
                            Product
                          </a>
                          <a
                            href={tool.sourceLinks.pricing}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                          >
                            Pricing
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-sm leading-7 text-zinc-300">{tool.vendor}</td>
                    <td className="px-5 py-5 text-sm leading-7 text-zinc-300">
                      {tool.coreCapability}
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex flex-wrap gap-2">
                        {tool.bestFor.map((item) => (
                          <span
                            key={`${tool.slug}-${item}`}
                            className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-zinc-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="bg-[#0d2c24]/70 px-5 py-5 text-sm font-semibold text-[#c2ffe4]">
                      {tool.pricing}
                    </td>
                    <td className="px-5 py-5 text-sm leading-7 text-zinc-400">{tool.audience}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-sm text-zinc-400">
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showPagination && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            disabled={safePage === 0}
            onClick={() => setPage(safePage - 1)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-zinc-300 transition hover:border-[#10b981]/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Previous
          </button>
          <span className="text-sm text-zinc-500">
            Page {safePage + 1} of {totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages - 1}
            onClick={() => setPage(safePage + 1)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-sm text-zinc-300 transition hover:border-[#10b981]/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
}
