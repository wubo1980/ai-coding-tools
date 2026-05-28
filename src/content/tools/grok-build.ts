import type { ToolDetailEntry } from "@/types/tool";

export const grokBuildTool: ToolDetailEntry = {
  slug: "grok-build",
  name: "Grok Build",
  eyebrow: "Agentic coding",
  heroPainPoint: [
    "When a refactoring task touches eight files, most coding tools work through them one at a time. You watch each file sequentially, waiting for the next step.",
    "Grok Build takes a different approach. It breaks the work into subtasks and runs parallel subagents—multiple files changed simultaneously. The question is whether the coordination overhead is worth the speed gain.",
  ],
  overview: [
    { label: "Developer", value: "xAI" },
    { label: "First availability", value: "May 14, 2026 (early beta)" },
    { label: "Current release", value: "Beta, actively updated weekly" },
    {
      label: "Positioning",
      value: "A multi-agent terminal coding tool with model flexibility, parallel execution, and CLAUDE.md compatibility.",
    },
  ],
  positioning:
    "Grok Build is strongest when your work spans multiple files and you want parallel execution, or when you value the ability to route between different models through a single interface.",
  capabilities: [
    {
      title: "Multi-agent parallel execution",
      description:
        "A coordinator agent breaks complex tasks into subtasks and spawns parallel subagents, each handling a subset of the work simultaneously instead of sequentially.",
    },
    {
      title: "Three explicit modes",
      description:
        "Offers code (auto-apply), plan (show diffs first, wait for approval), and ask (read-only) modes. The /plan command switches modes mid-session without restarting.",
    },
    {
      title: "Model routing via OpenRouter",
      description:
        "Lets you route to any model—Grok, Claude, GPT, Gemini—through OpenRouter. Run /model claude-sonnet-4 to switch, getting the best model for each task.",
    },
    {
      title: "CLAUDE.md compatibility",
      description:
        "Uses the same CLAUDE.md project instruction file as Claude Code. Zero migration cost—your existing configuration carries over directly.",
    },
    {
      title: "Skills Marketplace + MCP",
      description:
        "Supports both MCP servers and a Skills system with lifecycle hooks. Skills can run custom logic before/after file edits, before commands execute, and on errors.",
    },
    {
      title: "Headless / CI mode",
      description:
        "Supports headless execution via the -p flag with streaming-json output, making it suitable for automated CI/CD pipelines.",
    },
    {
      title: "256K token context window",
      description:
        "Larger than Claude Code's 200K. In practice, both are sufficient for most projects, but Grok Build tends to load context more aggressively.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 7,
      summary: "Promising multi-agent architecture, but beta stability and coordination issues hold it back from production-ready.",
      tone: "blue",
    },
    price: {
      label: "Price",
      value: 8,
      summary: "Usage-based pricing at ~$1/Mtok is significantly cheaper than Claude Code's ~$3/Mtok for heavy workloads.",
      tone: "emerald",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 6,
      summary: "Easy to start if you already use Claude Code (same CLAUDE.md format), but beta rough edges add friction.",
      tone: "amber",
    },
  },
  pros: [
    "Multi-agent parallelism genuinely speeds up multi-file tasks.",
    "Model routing gives you flexibility no other terminal agent offers.",
    "CLAUDE.md compatibility means zero migration cost from Claude Code.",
    "Skills Marketplace lifecycle hooks are more powerful than MCP alone.",
    "Usage-based pricing at ~$1/Mtok is 3x cheaper than Claude Code API pricing.",
  ],
  cons: [
    "Early beta—subagent coordination occasionally produces conflicting edits.",
    "Skills sometimes fail silently with unclear error messages.",
    "Non-Grok models via OpenRouter may lose tool-use capabilities.",
    "Requires $99/mo SuperGrok subscription or API usage; no free entry-level tier.",
    "Ecosystem is sparse compared to Claude Code's mature MCP server network.",
  ],
  pricing: {
    freeTier: "None. SuperGrok subscription or API usage required.",
    billing: "Monthly subscription ($99/mo SuperGrok) or usage-based API pricing (~$1/1M input tokens).",
    plans: [
      {
        name: "SuperGrok",
        price: "$99/mo",
        details: "Includes Grok Build access, Grok chat, image generation on X. Full model routing via OpenRouter.",
      },
      {
        name: "API usage",
        price: "~$1/1M input",
        details: "Pay-as-you-go via xAI API. Cheaper than Claude Code API pricing.",
      },
    ],
    teamPlan: "Enterprise and team pricing not yet announced (early beta).",
    notes: [
      "The $99/mo SuperGrok tier is only worth it for Grok Build alone if you also use other xAI products.",
      "At ~$1/Mtok input, API pricing is roughly 3x cheaper than Claude Code for heavy automation or CI/CD workloads.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "xAI's privacy policy for Grok Build is still evolving in beta. Code sent through Grok models may be used for training unless opted out, per xAI's standard Grok terms.",
    },
    {
      label: "Opt-out / controls",
      value: "Opt-out controls are available through xAI account settings, but specific Grok Build privacy settings are less mature than established tools.",
    },
    {
      label: "Enterprise privacy",
      value: "No enterprise-grade privacy controls announced yet. Teams with strict data governance should wait for the stable release.",
    },
  ],
  suitableFor: [
    "Developers who want model flexibility—use different models through one interface.",
    "Teams working on large multi-file changes that benefit from parallel execution.",
    "Existing SuperGrok subscribers who want to leverage their subscription.",
    "Early adopters comfortable with beta software who want to shape the tool.",
    "Developers who want to supplement Claude Code with parallel execution for specific tasks.",
  ],
  notSuitableFor: [
    "Teams that need production-reliable tooling today.",
    "Organizations with strict enterprise security and compliance requirements.",
    "Developers who prefer IDE-native tools over terminal-based agents.",
    "Budget-conscious users who want a $20/mo entry point like Copilot or ChatGPT.",
    "Anyone who cannot afford time lost to beta instability and silent failures.",
  ],
  quickStart: [
    {
      title: "Install Grok Build",
      duration: "3 min",
      description: "Install via npm: `npm install -g grok-build`. Requires a SuperGrok subscription or API key.",
    },
    {
      title: "Configure project context",
      duration: "5 min",
      description: "Create or reuse a CLAUDE.md file for project instructions, tech stack, and coding conventions.",
    },
    {
      title: "Try plan mode on a multi-file task",
      duration: "10 min",
      description: "Run `grok --plan \"Refactor X across 3 files\"` to see the multi-agent coordination in action before approving changes.",
    },
  ],
  relatedTools: [
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "More stable and better for deep sequential reasoning. Grok Build is best used alongside it.",
    },
    {
      slug: "codex",
      name: "OpenAI Codex",
      reason: "If you prefer OpenAI's ecosystem and don't need multi-agent parallel execution.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://grok.com/build" },
    { label: "Pricing", url: "https://x.ai/pricing" },
    { label: "Documentation", url: "https://docs.x.ai/docs/grok-build" },
  ],
  seo: {
    title: "Grok Build Review: Multi-Agent Terminal Coding Tool from xAI",
    description:
      "A developer-focused review of Grok Build covering multi-agent architecture, model routing, pricing, pros, cons, and who should use it in 2026.",
    canonicalPath: "/tool/grok-build",
  },
};
