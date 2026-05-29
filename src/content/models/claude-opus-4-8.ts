import type { ToolDetailEntry } from "@/types/tool";

export const claudeOpus48: ToolDetailEntry = {
  slug: "claude-opus-4-8",
  name: "Claude Opus 4.8",
  eyebrow: "Updated May 28, 2026",
  heroPainPoint: [
    "Tired of AI models that confidently give you wrong code?",
    "Need a model that scales from quick prompts to multi-hour agent sessions?",
  ],
  overview: [
    { label: "Vendor", value: "Anthropic" },
    { label: "Release Date", value: "May 28, 2026" },
    { label: "Context Window", value: "1M tokens" },
    { label: "Pricing", value: "$15/Mtok input, $75/Mtok output" },
    { label: "SWE-bench Pro", value: "69.2 (+7.6% vs 4.7)" },
    {
      label: "Key Update",
      value: "Self-correction, dynamic workflows, 2.5x fast mode (3x cheaper)",
    },
  ],
  positioning:
    "Anthropic's most capable hybrid reasoning model - pushing the frontier for coding, agentic tasks, and professional work with a meaningful reliability uplift over Opus 4.7.",
  capabilities: [
    {
      title: "Self-Correction & Reliability",
      description:
        "Unlike previous models that rush to confident wrong answers, Opus 4.8 flags uncertainties, catches its own bugs, and pushes back when a plan is not sound. This is the single biggest quality-of-life improvement over Opus 4.7.",
    },
    {
      title: "Super-Agent Performance",
      description:
        "Opus 4.8 is the only model to complete every case end-to-end on Anthropic's Super-Agent benchmark, beating both prior Opus models and GPT-5.5 at parity on cost.",
    },
    {
      title: "Dynamic Workflows (Claude Code)",
      description:
        "A new capability in Claude Code that allows the model to tackle very large-scale problems by dynamically breaking them into sub-tasks and executing them in parallel.",
    },
    {
      title: "Fast Mode (2.5x Speed, 3x Cheaper)",
      description:
        "Fast mode for Opus 4.8 delivers 2.5x the speed at one-third the cost of previous fast mode - making it viable for high-volume agentic workloads.",
    },
    {
      title: "Computer Use & Browser Agent",
      description:
        "Opus 4.8 scores 84% on Online-Mind2Web, a meaningful jump over both Opus 4.7 and GPT-5.5, making it the strongest browser-agent model tested.",
    },
    {
      title: "1M Context Window",
      description:
        "Handle entire codebases, long documents, and multi-turn agent sessions in a single context - no need for chunking or summarization.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 96,
      summary: "Best-in-class coding and agentic performance",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 65,
      summary: "Premium pricing, but unchanged from Opus 4.7",
      tone: "amber",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 82,
      summary: "Excellent via Claude Code CLI and claude.ai",
      tone: "blue",
    },
  },
  pros: [
    "Best SWE-bench Pro score of any Claude model (69.2)",
    "Self-correction reduces debugging time significantly",
    "1M context window for whole-codebase understanding",
    "Dynamic workflows for large-scale autonomous tasks",
    "Same pricing as Opus 4.7 - no premium bump",
    "Fast mode is 3x cheaper while maintaining quality",
  ],
  cons: [
    "Premium pricing vs GPT-5.5 for simple tasks",
    "Fast mode still slower than Gemini 3.5 Flash",
    "No image generation capability",
    "Limited availability in some regions on launch day",
  ],
  pricing: {
    freeTier: "None - no free tier for Opus models",
    billing:
      "Pay-as-you-go via Anthropic API, Claude Pro ($20/mo), or Claude Enterprise",
    plans: [
      {
        name: "Claude Pro",
        price: "$20/mo",
        details: "Includes limited Opus 4.8 access + Sonnet 4.8",
      },
      {
        name: "Claude Enterprise",
        price: "Custom",
        details: "Unlimited Opus 4.8 access + SSO + audit logs",
      },
      {
        name: "API (pay-as-you-go)",
        price: "$15/Mtok in",
        details: "$15/Mtok input, $75/Mtok output",
      },
    ],
    teamPlan: "Claude Team: $25/user/mo with shared context and higher usage limits",
    notes: [
      "Fast mode pricing: significantly reduced - approximately one-third of base fast mode cost",
      "API rate limits depend on usage tier - higher tiers available for enterprise customers",
    ],
  },
  privacy: [
    { label: "Data Training", value: "Not trained on API inputs/outputs by default" },
    { label: "Data Retention", value: "30 days for API abuse monitoring" },
    {
      label: "Enterprise Privacy",
      value: "Available with data isolation agreement",
    },
    { label: "SOC 2", value: "Type II certified" },
  ],
  suitableFor: [
    "Complex multi-file code refactoring",
    "Autonomous agent workflows (24/7 unattended)",
    "Legal document analysis and drafting",
    "Deep research and report generation",
    "Large-scale code review and bug detection",
    "Browser automation and computer-use tasks",
  ],
  notSuitableFor: [
    "Simple autocomplete or single-line suggestions (overkill)",
    "Image generation or multimodal creative work",
    "High-volume, low-cost API calls (use Sonnet or Haiku)",
    "Real-time streaming where sub-100ms latency matters",
  ],
  quickStart: [
    {
      title: "Try on claude.ai",
      duration: "1 min",
      description: "Visit claude.ai and select Opus 4.8 from the model picker.",
    },
    {
      title: "Install Claude Code",
      duration: "5 min",
      description:
        "Run `npm install -g @anthropic-ai/claude-code` and authenticate.",
    },
    {
      title: "Set Opus 4.8",
      duration: "1 min",
      description:
        "In Claude Code, run `/model opus-4-8` to switch to the new model.",
    },
    {
      title: "Enable Dynamic Workflows",
      duration: "2 min",
      description:
        "Run `/settings dynamic-workflows on` in Claude Code for large-scale tasks.",
    },
  ],
  relatedTools: [
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "Opus 4.8 is the recommended model for Claude Code workflows.",
    },
    {
      slug: "cursor",
      name: "Cursor",
      reason: "Cursor supports Opus 4.8 as a model backend.",
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Direct competitor in AI-assisted coding.",
    },
  ],
  sourceLinks: [
    {
      label: "Anthropic Blog Post",
      url: "https://www.anthropic.com/news/claude-opus-4-8",
    },
    {
      label: "Opus 4.8 System Card",
      url: "https://www.anthropic.com/claude-opus-4-8-system-card",
    },
    {
      label: "Claude Pricing",
      url: "https://www.anthropic.com/pricing",
    },
  ],
  seo: {
    title: "Claude Opus 4.8 Review: Benchmarks, Pricing, and What's New | AI Coding Tools",
    description:
      "Claude Opus 4.8 delivers 69.2 SWE-bench Pro (+7.6%), self-correction, dynamic workflows in Claude Code, 2.5x fast mode at 3x cheaper - all at the same price as Opus 4.7.",
    canonicalPath: "/models/claude-opus-4-8",
  },
};
