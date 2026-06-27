import type { ToolDetailEntry } from "@/types/tool";

export const windsurfTool: ToolDetailEntry = {
  slug: "windsurf",
  name: "Windsurf",
  eyebrow: "AI-native IDE",
  heroPainPoint: [
    "Between Cursor's $20/mo Pro+ upsell and Copilot's $10/mo baseline, finding an AI coding tool that balances cost with real editing power feels like a pricing spreadsheet exercise. You want agentic editing without the enterprise tax.",
    "Windsurf positions itself as that middle ground. It delivers unlimited tab completions and agentic editing at a flat $20/mo, with a clean editor-first workflow that sidesteps the complexity of multi-agent orchestration.",
  ],
  overview: [
    { label: "Developer", value: "Windsurf (formerly Codeium)" },
    { label: "First availability", value: "2023 (as Codeium), rebranded 2024" },
    { label: "Current release", value: "Windsurf Editor (June 2026) with Cascade agent mode and unlimited completions" },
    {
      label: "Positioning",
      value: "An AI-native IDE focused on value pricing, agentic editing, and a frictionless editor experience.",
    },
  ],
  positioning:
    "Windsurf is strongest when you want AI-native editing with unlimited completions, a capable agent mode, and predictable pricing — without the pressure to upgrade to a higher tier for basic daily use.",
  capabilities: [
    {
      title: "Unlimited tab completions",
      description:
        "Unlike most competitors that cap completions per month, Windsurf delivers unlimited inline suggestions. For developers who write hundreds of lines a day, this removes the mental overhead of 'am I burning through my allocation?'.",
    },
    {
      title: "Cascade agent mode",
      description:
        "Windsurf's agent mode (Cascade) can read, write, and refactor across multiple files in a project. It operates in a read-first analysis mode before making changes, reducing the risk of hallucinated edits.",
    },
    {
      title: "Multi-file editing",
      description:
        "Cascade's agent workflow supports editing across multiple files in a single operation. It's more conservative than Cursor's parallel agents but more reliable for scoped changes.",
    },
    {
      title: "Built-in terminal and debugging",
      description:
        "The editor ships with an integrated terminal and debugger, allowing agent-suggested commands to be run without leaving the editor. Cascade can explain and suggest terminal commands interactively.",
    },
    {
      title: "Git awareness and diff view",
      description:
        "Agent-generated changes are presented in a clear diff view before applying. Windsurf understands your git state and avoids editing files outside the working tree unless explicitly prompted.",
    },
    {
      title: "Privacy-first architecture",
      description:
        "Windsurf offers a zero-retention policy for code data by default. Code is processed for completions and agent requests but not stored or used for model training without explicit opt-in.",
    },
    {
      title: "Cross-platform support",
      description:
        "Available on macOS, Windows, and Linux as a standalone editor built on a VS Code-compatible foundation, supporting most VS Code extensions and themes.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 7,
      summary: "Solid agentic editing with Cascade mode and unlimited completions. Lags behind Cursor on parallel agents and multi-repo automation.",
      tone: "blue",
    },
    price: {
      label: "Price",
      value: 9,
      summary: "Best value in the category. Unlimited completions at $20/mo with no hidden tiers or usage caps.",
      tone: "emerald",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 8,
      summary: "Familiar VS Code-like interface, lower learning curve than Cursor's advanced agent workflows. Cascade is intuitive for new users.",
      tone: "amber",
    },
  },
  pros: [
    "Unlimited tab completions — no monthly cap, no counting usage.",
    "Cascade agent mode is reliable and cautious, good for production code.",
    "Best value pricing at $20/mo flat, no tier pressure.",
    "Privacy-first by default, no code retention for training.",
    "VS Code-compatible — most extensions and themes work out of the box.",
    "Clear diff view for agent-generated changes, reducing surprise edits.",
  ],
  cons: [
    "No parallel agents or multi-repo automation — Cursor leads on complex workflows.",
    "Cascade is more conservative than Cursor agents, which means slower on multi-file refactors.",
    "No cloud agent execution — all processing is local.",
    "Smaller community and fewer third-party tutorials compared to Cursor and Copilot.",
    "Less frequent updates — Cursor ships releases weekly, Windsurf on a slower cadence.",
  ],
  pricing: {
    freeTier: "Windsurf Free offers basic completions and limited Cascade usage. Suitable for evaluation and light coding.",
    billing: "Monthly or annual subscriptions. The Pro plan is flat $20/mo with no usage-based overage.",
    plans: [
      {
        name: "Free",
        price: "$0",
        details: "Basic completions, limited Cascade agent requests, community support.",
      },
      {
        name: "Pro",
        price: "$20/mo",
        details: "Unlimited completions, full Cascade agent mode, priority support. No usage limits.",
      },
    ],
    teamPlan: "Windsurf Teams is available with centralized billing, admin controls, and org-wide privacy policies. Contact sales for pricing.",
    notes: [
      "Pro is genuinely all-inclusive — no 'Pro+' or usage tiers like Cursor's model.",
      "Free tier is functional but the limited Cascade requests make it more of a trial than a daily driver.",
      "No enterprise/Ultra tier — Windsurf keeps the pricing simple.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "Code is not used for model training by default. Windsurf has a zero-retention data policy that respects your code privacy.",
    },
    {
      label: "Opt-out / controls",
      value: "Privacy settings are easy to find in preferences. Teams can enforce org-wide zero-retention policies.",
    },
    {
      label: "Enterprise privacy",
      value: "Teams plan includes admin-managed data controls, SSO, and compliance documentation.",
    },
  ],
  suitableFor: [
    "Budget-conscious developers who want full AI coding capabilities without tier pressure.",
    "Freelancers and solo developers who write daily and need unlimited completions.",
    "Teams evaluating AI coding tools who want the best value-per-dollar option.",
    "Developers who prefer a VS Code-like experience with minimal migration friction.",
    "Privacy-conscious users who want code data protection by default.",
  ],
  notSuitableFor: [
    "Teams needing parallel agent execution or multi-repo automation (use Cursor).",
    "Developers who need cloud-based agent workflows (all processing is local).",
    "Users who want the fastest release cycle and bleeding-edge features.",
    "Enterprise buyers needing dedicated support and custom SLAs (teams plan is still maturing).",
  ],
  quickStart: [
    {
      title: "Download Windsurf Editor",
      duration: "5 min",
      description: "Install from windsurf.com/editor for your platform (macOS, Windows, or Linux).",
    },
    {
      title: "Create an account",
      duration: "2 min",
      description: "Sign up for a free or Pro account. No credit card required for the free tier.",
    },
    {
      title: "Open a project and try Cascade",
      duration: "10 min",
      description: "Open an existing project, invoke Cascade, and ask for a multi-file change. Review the diff before applying.",
    },
  ],
  relatedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      reason: "Stronger for parallel agents and multi-repo work. Compare if you need advanced automation.",
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Better fit for teams already in the GitHub ecosystem. Cheaper at $10/mo but with completion limits.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://windsurf.com/editor" },
    { label: "Pricing page", url: "https://windsurf.com/pricing" },
    { label: "Documentation", url: "https://docs.windsurf.com/" },
    { label: "Blog", url: "https://windsurf.com/blog" },
  ],
  seo: {
    title: "Windsurf AI Editor Review 2026: Pricing, Features & Best Use Cases",
    description:
      "A developer-focused review of Windsurf AI Editor covering pricing, Cascade agent mode, unlimited completions, privacy, and how it compares to Cursor and Copilot as a value AI coding tool.",
    canonicalPath: "/tool/windsurf",
  },
};
