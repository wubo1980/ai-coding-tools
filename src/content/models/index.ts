import type { ToolDetailEntry } from "@/types/tool";
import type { ModelComparisonRow } from "@/types/model";

import { claudeOpus48 } from "@/content/models/claude-opus-4-8";

export const modelComparisonRows: ModelComparisonRow[] = [
  {
    slug: "claude-opus-4-8",
    name: "Claude Opus 4.8",
    vendor: "Anthropic",
    category: "Frontier model",
    coreCapability:
      "Hybrid reasoning, 1M context, self-correction, best-in-class coding agent.",
    bestFor: [
      "Coding agents",
      "Deep research",
      "Legal analysis",
      "Multi-hour agent sessions",
    ],
    pricing: "$15/Mtok in",
    audience:
      "Developers and teams needing the most capable general-purpose model available.",
    searchTerms: [
      "claude",
      "anthropic",
      "opus",
      "coding",
      "agent",
      "benchmark",
      "reasoning",
    ],
    addedAt: "2026-05-28",
    highlight: "New",
    sourceLinks: {
      product: "https://www.anthropic.com/news/claude-opus-4-8",
      pricing: "https://www.anthropic.com/pricing",
    },
  },
];

/**
 * Returns model rows sorted by newest first.
 */
export function getModelsByNewest(): ModelComparisonRow[] {
  return [...modelComparisonRows].sort(
    (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
  );
}

/**
 * Resolves a single model detail record from its slug.
 */
export function getModel(slug: string): ToolDetailEntry | undefined {
  const map: Record<string, ToolDetailEntry> = {
    "claude-opus-4-8": claudeOpus48,
  };

  return map[slug];
}

/**
 * Returns all implemented model detail records.
 */
export function getModelEntries(): ToolDetailEntry[] {
  return [claudeOpus48];
}
