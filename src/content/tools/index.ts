import type { ToolComparisonRow, ToolDetailEntry } from "@/types/tool";

import { claudeCodeTool } from "@/content/tools/claude-code";
import { copilotTool } from "@/content/tools/copilot";
import { cursorTool } from "@/content/tools/cursor";
import { figmaAgentTool } from "@/content/tools/figma-agent";
import { gemini35Tool } from "@/content/tools/gemini-35";
import { grokBuildTool } from "@/content/tools/grok-build";

/**
 * Tool comparison rows, sorted newest-first.
 * Kept to ~8 active entries to avoid bloat.
 */
export const toolComparisonRows: ToolComparisonRow[] = [
  {
    slug: "figma-agent",
    name: "Figma Design Agent",
    vendor: "Figma",
    category: "Design agent",
    coreCapability: "On-canvas AI design collaboration with design system awareness.",
    bestFor: ["Design exploration", "Bulk editing", "Design system management"],
    pricing: "Free beta",
    audience: "UI/UX designers who want AI directly inside their Figma canvas.",
    searchTerms: ["design", "figma", "ui", "ux", "prototype", "design system"],
    addedAt: "2026-05-20",
    sourceLinks: {
      product: "https://www.figma.com/blog/the-figma-agent-is-here/",
      pricing: "https://www.figma.com/pricing/",
    },
  },
  {
    slug: "gemini-35",
    name: "Gemini 3.5 Flash",
    vendor: "Google",
    category: "Agentic model",
    coreCapability: "1M context, strong agentic coding benchmarks, cost-effective pricing.",
    bestFor: ["Agent loops", "Large codebase analysis", "Cost-sensitive workloads"],
    pricing: "$1.50/Mtok input",
    audience: "Teams needing a fast, cheap, capable model for high-volume agentic coding.",
    searchTerms: ["google", "agent", "api", "context", "cost", "benchmark", "antigravity"],
    addedAt: "2026-05-19",
    sourceLinks: {
      product: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/",
      pricing: "https://ai.google.dev/pricing",
    },
  },
  {
    slug: "grok-build",
    name: "Grok Build",
    vendor: "xAI",
    category: "Agentic coding",
    coreCapability: "Multi-agent parallel execution with model routing via OpenRouter.",
    bestFor: ["Multi-file refactors", "CI/CD pipelines", "Parallel execution"],
    pricing: "$99/mo SuperGrok",
    audience: "Developers who want model flexibility and parallel multi-file execution.",
    searchTerms: ["terminal", "cli", "agent", "multi-file", "parallel", "model routing"],
    addedAt: "2026-05-14",
    sourceLinks: {
      product: "https://grok.com/build",
      pricing: "https://x.ai/pricing",
    },
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    vendor: "Windsurf",
    category: "AI-native IDE",
    coreCapability: "Agentic editor with strong value positioning and unlimited tab completions.",
    bestFor: ["Budget-conscious devs", "Lightweight AI coding", "Editor-first workflows"],
    pricing: "$20/mo Pro",
    audience: "Developers who want AI-native editing without premium-enterprise pricing.",
    searchTerms: ["budget", "affordable", "editor", "cost", "autocomplete", "value"],
    highlight: "Best Value",
    addedAt: "2026-03-01",
    sourceLinks: {
      product: "https://windsurf.com/editor",
      pricing: "https://windsurf.com/pricing",
    },
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    vendor: "Anthropic",
    category: "Agentic coding",
    coreCapability: "Task-level automation across files, tests, and terminal workflows.",
    bestFor: ["Complex tasks", "Large refactors", "Codebase understanding"],
    pricing: "Included in Claude plans",
    audience: "Professional engineers handling multi-step, high-context work.",
    searchTerms: ["refactor", "legacy", "codebase", "agent", "terminal", "complex"],
    highlight: "Deep Work",
    addedAt: "2026-02-01",
    sourceLinks: {
      product: "https://www.anthropic.com/product/claude-code",
      pricing: "https://claude.com/pricing",
    },
  },
  {
    slug: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    category: "AI-native IDE",
    coreCapability: "Agentic editing, repo-wide understanding, and strong multi-file workflows.",
    bestFor: ["Front-end work", "Refactors", "Fast iteration"],
    pricing: "$20/mo Pro",
    audience: "Developers who want an AI-first editor without losing speed.",
    searchTerms: ["frontend", "typescript", "refactor", "react", "ui", "multi-file"],
    highlight: "Deep Work",
    addedAt: "2025-06-01",
    sourceLinks: {
      product: "https://cursor.com/",
      pricing: "https://cursor.com/en-US/pricing",
    },
  },
  {
    slug: "copilot",
    name: "GitHub Copilot",
    vendor: "Microsoft / OpenAI",
    category: "Assistant",
    coreCapability: "Fast inline completion, chat, reviews, and broad IDE coverage.",
    bestFor: ["Daily coding", "Students", "Quick ramp-up"],
    pricing: "$10/mo Pro",
    audience: "General developers who want immediate productivity gains.",
    searchTerms: ["javascript", "python", "student", "daily coding", "starter", "debugging"],
    highlight: "Starter Friendly",
    addedAt: "2024-06-01",
    sourceLinks: {
      product: "https://github.com/features/copilot",
      pricing: "https://github.com/features/copilot/plans",
    },
  },
  {
    slug: "gemini-code-assist",
    name: "Gemini Code Assist",
    vendor: "Google",
    category: "Code assistant",
    coreCapability: "Large-context analysis, enterprise connectivity, and strong review support.",
    bestFor: ["Large codebases", "Enterprise teams", "Integrators"],
    pricing: "Free personal tier",
    audience: "Developers who value generous free usage and Google ecosystem tie-ins.",
    searchTerms: ["enterprise", "large codebase", "java", "integration", "review", "free"],
    addedAt: "2024-03-01",
    sourceLinks: {
      product: "https://codeassist.google/",
      pricing: "https://codeassist.google/products/business",
    },
  },
];

export const toolDetailEntries: ToolDetailEntry[] = [
  figmaAgentTool,
  gemini35Tool,
  grokBuildTool,
  cursorTool,
  copilotTool,
  claudeCodeTool,
];

/**
 * Returns all detail pages that should be statically generated.
 */
export function getToolDetailEntries() {
  return toolDetailEntries;
}

/**
 * Resolves a single tool detail record from its slug.
 */
export function getToolDetailEntry(slug: string) {
  return toolDetailEntries.find((entry) => entry.slug === slug);
}
