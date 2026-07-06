import type { ToolDetailEntry } from "@/types/tool";

export const claudeCodeTool: ToolDetailEntry = {
  slug: "claude-code",
  name: "Claude Code",
  eyebrow: "Agentic coding system",
  heroPainPoint: [
    "When the task is not 'write this function' but 'understand this service, fix the CI failure, update four files, and rerun the tests,' ordinary code generation starts to feel shallow. The hard part is not producing text. It is holding the whole task together.",
    "Claude Code is built for that heavier loop. It reads the codebase, makes edits across files, runs commands, iterates on failures, and behaves like an agentic engineering partner instead of a next-line suggester.",
  ],
  overview: [
    { label: "Developer", value: "Anthropic" },
    { label: "First availability", value: "Research preview announced in February 2025" },
    { label: "Current release", value: "Generally available since May 2025" },
    {
      label: "Positioning",
      value: "An agentic coding system for codebase-level tasks, command execution, testing, and long-running engineering work.",
    },
  ],
  positioning:
    "Claude Code is at its best when you want to delegate a real engineering task that spans reading, editing, testing, and iteration, especially when the terminal is already part of the job.",
  capabilities: [
    {
      title: "Codebase reading",
      description:
        "Searches directories and follows dependencies, which makes it effective when the task starts with understanding unfamiliar architecture. For reference, the <a href='https://github.com/'>GitHub</a> or <a href='https://openai.com/blog/'>OpenAI blog</a> or <a href='https://docs.anthropic.com/en/docs'>Anthropic documentation</a> or <a href='https://arxiv.org/'>arXiv academic research</a> have more detailed documentation on this topic.",
    },
    {
      title: "Multi-file execution",
      description:
        "Edits across the repository in one task loop, which matters when a change touches interfaces, tests, and implementation together.",
    },
    {
      title: "Terminal workflow support",
      description:
        "Runs commands, tests, and toolchain actions, which is essential when software work depends on more than text generation.",
    },
    {
      title: "Failure iteration",
      description:
        "Reads failing test output and retries the workflow, which reduces the manual back-and-forth common in agent-assisted coding.",
    },
    {
      title: "Cloud and local execution paths",
      description:
        "Works locally and on the web, which helps teams mix hands-on terminal use with delegated parallel tasks.",
    },
    {
      title: "IDE integrations",
      description:
        "Supports VS Code and JetBrains integrations, which narrows the gap between terminal-first operation and editor-based review.",
    },
    {
      title: "Permission controls",
      description:
        "Defaults to asking before making changes or running commands, which gives users a safer on-ramp into autonomous behavior.",
    },
    {
      title: "Commercial privacy options",
      description:
        "Supports team, enterprise, API, and zero-data-retention paths, which matters when privacy requirements are non-negotiable.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 9,
      summary: "Excellent for complex, multi-step, codebase-level work where execution matters as much as generation.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 6,
      summary: "Powerful, but the value depends heavily on whether Pro is enough or you need Max or commercial seats.",
      tone: "blue",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 7,
      summary: "Clear for experienced engineers, but less intuitive than editor-first tools if you are new to agent workflows.",
      tone: "amber",
    },
  },
  pros: [
    "Very strong fit for tasks that naturally span code, shell commands, tests, and retries.",
    "Feels purpose-built for real engineering work instead of dressed-up autocomplete.",
    "Can accelerate unfamiliar codebase onboarding because it reasons at the project level.",
    "Commercial privacy defaults are stronger than many people assume, especially on Team, Enterprise, and API terms.",
    "The permission model makes autonomy adjustable instead of all-or-nothing.",
  ],
  cons: [
    "If you mainly want low-friction inline completion, this is more tool than you need.",
    "Consumer privacy settings require attention because retention changes materially based on model-improvement preference.",
    "Pricing is bundled into Claude plans rather than a simple standalone tool fee, which makes quick comparison harder.",
    "The best results still depend on strong task framing and review discipline, especially on larger code changes.",
  ],
  pricing: {
    freeTier:
      "Claude Free includes chat, code generation, file creation, code execution, and Claude Code-related access limits, but with much less usage than paid plans.",
    billing: "Consumer pricing is monthly or annual through Claude plans; commercial pricing uses per-seat plans, and enterprise can add API-rate usage.",
    plans: [
      {
        name: "Pro",
        price: "$20/mo or $17/mo annual equivalent",
        details: "Includes Claude Code, Claude Cowork, more usage, projects, research, and broader model access.",
      },
      {
        name: "Max",
        price: "From $100/mo",
        details: "Includes everything in Pro plus 5x or 20x more usage, higher output limits, and priority access.",
      },
      {
        name: "Team Standard",
        price: "$20 per seat / mo annual or $25 monthly",
        details: "Team access with more usage than Pro, central billing, SSO, domain verification, and no training by default.",
      },
      {
        name: "Team Premium",
        price: "$100 per seat / mo annual or $125 monthly",
        details: "5x more usage than standard seats, includes Claude Code and broader admin features.",
      },
    ],
    teamPlan:
      "Team and Enterprise both include Claude Code. Enterprise starts at $20 per seat plus usage at API rates and adds SCIM, audit logs, compliance API, custom retention controls, and network controls.",
    notes: [
      "Anthropic positions Claude Code as included in Claude plans rather than a completely separate subscription.",
      "Commercial customers get no model training on content by default, unless they explicitly opt in through approved programs.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value:
        "Consumer users can allow or deny model improvement. Commercial users on Team, Enterprise, and API are not used for generative model training by default.",
    },
    {
      label: "Opt-out / controls",
      value:
        "Consumers can change model-improvement privacy settings. Claude Code also supports telemetry, error-reporting, feedback, and survey opt-outs via settings or environment variables.",
    },
    {
      label: "Enterprise privacy",
      value:
        "Commercial users get 30-day standard retention, optional zero data retention on supported enterprise setups, and admins can disable feedback flows.",
    },
  ],
  suitableFor: [
    "Professional engineers handling complex refactors, CI failures, and toolchain-heavy tasks.",
    "Teams that want an agent to execute work, not just suggest code snippets.",
    "Developers comfortable reviewing command execution and code changes with a high-context assistant.",
    "Organizations that need commercial privacy terms and a path to stricter retention controls.",
  ],
  notSuitableFor: [
    "Developers who mostly want inline suggestions inside an editor and nothing else.",
    "Users who are uncomfortable with agent workflows that read files and run commands.",
    "Teams that want a single flat-price story without thinking about seats, usage, or plan type.",
    "Beginners who need the lowest possible learning curve before getting useful results.",
  ],
  quickStart: [
    {
      title: "Choose the right Claude plan",
      duration: "4 min",
      description: "Start with Pro for individual use or Team / Enterprise if you need commercial privacy defaults.",
    },
    {
      title: "Install Claude Code and review privacy settings",
      duration: "6 min",
      description: "Set up the tool, then confirm model-improvement, telemetry, and retention-related preferences for your account type.",
    },
    {
      title: "Open a real repo and delegate one full task",
      duration: "8 min",
      description: "Ask for a concrete change that includes reading files, editing, and running tests so you can evaluate the full workflow.",
    },
  ],
  relatedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      reason: "Better fit if you want an AI-native editor with faster UI-centric multi-file work.",
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Better fit if broad GitHub integration and lower-friction adoption matter more than deep agent autonomy.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://www.anthropic.com/product/claude-code" },
    { label: "Pricing page", url: "https://claude.com/pricing" },
    { label: "Claude Code data usage", url: "https://code.claude.com/docs/en/data-usage" },
    {
      label: "Commercial training policy",
      url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training",
    },
    {
      label: "Consumer training policy",
      url: "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training",
    },
  ],
  seo: {
    title: "Claude Code Review: Pricing, Privacy, and When It Shines",
    description:
      "A developer-focused Claude Code review covering pricing, privacy policies, retention, strengths, weaknesses, and the workflows where it actually wins.",
    canonicalPath: "/tool/claude-code",
  },
};
