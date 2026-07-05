import type { ToolDetailEntry } from "@/types/tool";

export const geminiCodeAssistTool: ToolDetailEntry = {
  slug: "gemini-code-assist",
  name: "Gemini Code Assist",
  eyebrow: "Code assistant",
  heroPainPoint: [
    "When you're working across a massive enterprise codebase — think Java monoliths, multi-service Go repos, or GCP-infrastructure-as-code — inline completions barely scratch the surface. You need a tool that can ingest 100k+ lines of context and help you review, refactor, and reason at scale.",
    "Gemini Code Assist answers with Google's Gemini backend (including 3.5 Flash for agent loops), a massive context window, and deep enterprise connectivity — plus a genuinely useful free personal tier that no other major AI coding tool matches.",
  ],
  overview: [
    { label: "Developer", value: "Google Cloud" },
    { label: "First availability", value: "2024 (public preview)" },
    { label: "Current release", value: "Gemini Code Assist (June 2026) with Gemini 3.5 Flash backend and Antigravity integration" },
    {
      label: "Positioning",
      value: "An enterprise-grade code assistant with massive context, free personal tier, and deep GCP integration.",
    },
  ],
  positioning:
    "Gemini Code Assist is strongest when you need large-codebase reasoning, enterprise compliance, and Google ecosystem tie-ins — or when you simply want a capable coding assistant that doesn't cost a dime.",
  capabilities: [
    {
      title: "Gemini-powered code completion and chat",
      description:
        "Full inline code completions and conversational chat backed by Gemini models. With Gemini 3.5 Flash integration, completions are fast and agentic coding is supported within the IDE. The GitHub community (https://github.com/) has extensive discussions and examples covering this exact use case.",
    },
    {
      title: "Large-context analysis (1M+ tokens)",
      description:
        "Gemini's 1.05M-token native context window means Code Assist can ingest entire repositories in a single pass. For enterprise Java or multi-module projects, this is a genuine differentiator.",
    },
    {
      title: "Enterprise connectivity",
      description:
        "Connects to private repositories, internal documentation, and corporate APIs through GCP-native integrations. Code Assist can reference your org's internal libraries and coding standards.",
    },
    {
      title: "Code review support",
      description:
        "Built-in review features that analyze diffs for bugs, style violations, and security issues. Review comments are generated with repository-aware context, not generic templates.",
    },
    {
      title: "GCP ecosystem integration",
      description:
        "Native integration with Cloud Code, Cloud Workstations, and Vertex AI. For teams already on GCP, Code Assist works with your existing identity, billing, and compliance framework.",
    },
    {
      title: "Gemini 3.5 Flash agentic backend",
      description:
        "Behind the scenes, Code Assist leverages Gemini 3.5 Flash for agentic loops — multi-step reasoning across files. This brings agent-style workflows to the assistant interface.",
    },
    {
      title: "Free personal tier",
      description:
        "Gemini Code Assist offers a genuinely useful free tier with completions, chat, and review features. No credit card required. For individual developers, this is the most generous free offering in the category.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 7,
      summary: "Strong for large-codebase analysis and enterprise integration. Agentic capabilities are solid but behind dedicated agent tools like Claude Code.",
      tone: "blue",
    },
    price: {
      label: "Price",
      value: 10,
      summary: "Best-in-class pricing with a genuinely useful free tier. Enterprise pricing is competitive for GCP-shop teams.",
      tone: "emerald",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 7,
      summary: "Familiar IDE plugin experience for basic use. Deeper enterprise features require GCP setup and configuration.",
      tone: "amber",
    },
  },
  pros: [
    "Genuinely useful free personal tier — no other major AI coding tool matches this.",
    "1M+ token context window for large codebase analysis.",
    "Deep GCP and enterprise connectivity for org-wide adoption.",
    "Gemini 3.5 Flash backend for fast, cost-effective agentic loops.",
    "Strong code review support with repository-aware analysis.",
    "Enterprise-grade privacy and compliance via GCP infrastructure.",
  ],
  cons: [
    "Best experience requires GCP ecosystem familiarity and setup.",
    "Less polished than Cursor or Copilot for day-to-day rapid editing.",
    "Agentic capabilities are limited compared to dedicated agent tools (Cursor, Claude Code).",
    "Smaller plugin/extension ecosystem than Copilot and VS Code extensions.",
    "Documentation is fragmented across Google Cloud and Gemini product lines.",
  ],
  pricing: {
    freeTier: "Free personal tier includes completions, chat, and code review. No credit card required. Rate limited but genuinely usable for daily work.",
    billing: "Monthly/annual subscriptions per user for Business/Enterprise tiers. GCP committed-use discounts apply.",
    plans: [
      {
        name: "Free",
        price: "$0",
        details: "Completions, chat, code review. Rate-limited but the most generous free tier among major AI coding tools.",
      },
      {
        name: "Business",
        price: "$22.80/user/mo",
        details: "Unmetered features, enterprise connectivity, admin controls, SSO, and compliance tools.",
      },
      {
        name: "Enterprise",
        price: "Contact sales",
        details: "Custom SLAs, dedicated support, VPC-SC, CMEK, audit logging, and advanced compliance.",
      },
    ],
    teamPlan: "Gemini Code Assist for Business is $22.80/user/mo with centralized billing, admin controls, and org-wide policy enforcement. Enterprise pricing is custom.",
    notes: [
      "Free tier is genuinely usable — not a trial-with-expiration. Rate limits are generous for individual developers.",
      "Business tier pricing is competitive with Copilot Enterprise ($39/user/mo) and Cursor Teams ($40/user/mo).",
      "GCP committed-use discounts can reduce Business/Enterprise costs further.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "Google Cloud's standard data processing terms apply. Code processed through Code Assist is not used for model training without explicit opt-in.",
    },
    {
      label: "Opt-out / controls",
      value: "Available through GCP console. Business and Enterprise tiers provide additional data governance controls.",
    },
    {
      label: "Enterprise privacy",
      value: "Vertex AI-powered controls including VPC-SC, CMEK (Customer-Managed Encryption Keys), audit logging, and data residency options.",
    },
  ],
  suitableFor: [
    "Enterprise teams already on GCP who want unified security and billing.",
    "Individual developers who want a free AI coding assistant without credit card or trial expiry.",
    "Teams working with massive monorepos or Java/Go codebases that benefit from 1M+ context.",
    "Organizations that need enterprise compliance (SOC 2, HIPAA, data residency).",
    "Developers who frequently do code review and want AI-assisted review workflows.",
  ],
  notSuitableFor: [
    "Developers who want an AI-native IDE replacement (this is a plugin/assistant, not a standalone editor).",
    "Users seeking advanced agentic workflows (get Cursor, Claude Code, or Codex).",
    "Teams not on GCP who find GCP-native tooling a barrier rather than a benefit.",
    "Developers who want aggressive multi-file refactor agents that work autonomously.",
  ],
  quickStart: [
    {
      title: "Install the plugin",
      duration: "5 min",
      description: "Install Gemini Code Assist plugin for VS Code, JetBrains, or Cloud Workstations IDE.",
    },
    {
      title: "Sign in with Google",
      duration: "2 min",
      description: "Authenticate with your Google account. Free tier requires no GCP project setup.",
    },
    {
      title: "Try a large-codebase review",
      duration: "10 min",
      description: "Open a repository with significant code, invoke Code Assist's review or analysis feature, and compare the context-aware suggestions with a standard completion tool.",
    },
  ],
  relatedTools: [
    {
      slug: "gemini-35",
      name: "Gemini 3.5 Flash",
      reason: "The model backend powering Code Assist. Check the model review for deeper performance benchmarks.",
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Primary competitor. Copilot has broader IDE support; Code Assist has the free tier and GCP integration advantage.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://codeassist.google/" },
    { label: "Pricing page", url: "https://codeassist.google/products/business" },
    { label: "Google Cloud documentation", url: "https://cloud.google.com/code-assist/docs" },
    { label: "Gemini API pricing", url: "https://ai.google.dev/pricing" },
  ],
  seo: {
    title: "Gemini Code Assist Review 2026: Pricing, Free Tier & Enterprise Features",
    description:
      "A developer-focused review of Gemini Code Assist covering pricing, the free personal tier, enterprise features, Gemini 3.5 Flash backend, and how it compares to Copilot and Cursor.",
    canonicalPath: "/tool/gemini-code-assist",
  },
};
