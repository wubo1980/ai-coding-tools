import type { ToolComparisonRow, ToolDetailEntry } from "@/types/tool";

import { claudeCodeTool } from "@/content/tools/claude-code";
import { copilotTool } from "@/content/tools/copilot";
import { cursorTool } from "@/content/tools/cursor";

export const toolComparisonRows: ToolComparisonRow[] = [
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
    sourceLinks: {
      product: "https://github.com/features/copilot",
      pricing: "https://github.com/features/copilot/plans",
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
    sourceLinks: {
      product: "https://cursor.com/",
      pricing: "https://cursor.com/en-US/pricing",
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
    sourceLinks: {
      product: "https://www.anthropic.com/product/claude-code",
      pricing: "https://claude.com/pricing",
    },
  },
  {
    slug: "claude-api",
    name: "Claude API",
    vendor: "Anthropic",
    category: "API platform",
    coreCapability: "Flexible model access for custom automations, CI pipelines, and internal tools.",
    bestFor: ["CI/CD", "Custom workflows", "Internal platforms"],
    pricing: "Token-based",
    audience: "Teams integrating AI into existing engineering systems.",
    searchTerms: ["api", "integration", "ci", "cd", "workflow", "automation"],
    sourceLinks: {
      product: "https://docs.anthropic.com/",
      pricing: "https://docs.anthropic.com/en/about-claude/pricing",
    },
  },
  {
    slug: "codex",
    name: "OpenAI Codex",
    vendor: "OpenAI",
    category: "Coding agent",
    coreCapability: "Cloud tasks, code review, and coding assistance inside the ChatGPT ecosystem.",
    bestFor: ["Learning", "Debugging", "General-purpose coding help"],
    pricing: "$20/mo Plus entry",
    audience: "Builders who already live in ChatGPT and want coding workflows there.",
    searchTerms: ["chatgpt", "learning", "debugging", "full-stack", "prompting"],
    sourceLinks: {
      product: "https://developers.openai.com/codex/pricing",
      pricing: "https://chatgpt.com/pricing",
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
    sourceLinks: {
      product: "https://codeassist.google/",
      pricing: "https://codeassist.google/products/business",
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
    sourceLinks: {
      product: "https://windsurf.com/editor",
      pricing: "https://windsurf.com/pricing",
    },
  },
];

export const toolDetailEntries: ToolDetailEntry[] = [
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
