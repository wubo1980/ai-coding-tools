import type { ToolDetailEntry } from "@/types/tool";

export const cursorTool: ToolDetailEntry = {
  slug: "cursor",
  name: "Cursor",
  eyebrow: "AI-native IDE",
  heroPainPoint: [
    "When a refactor spans eight files, a design system, and a build step, basic autocomplete starts feeling small. You spend more time restating context than actually changing code.",
    "Cursor earns its keep in that moment. It behaves less like a tab-completion plugin and more like an editor built around repo-wide context, agent workflows, and fast iteration loops.",
  ],
  overview: [
    { label: "Developer", value: "Anysphere" },
    { label: "First availability", value: "2023 public launch" },
    { label: "Current release", value: "Cursor 3.1 in the April 2026 release track" },
    {
      label: "Positioning",
      value: "An AI-native IDE focused on agentic editing, multi-file changes, and codebase understanding.",
    },
  ],
  positioning:
    "Cursor is strongest when your work is broader than one file and you want the editor, the agent, and the model switcher to feel like one workflow instead of three separate tools.",
  capabilities: [
    {
      title: "Agent-driven editing",
      description:
        "Lets you describe a change and have the tool plan and apply edits across multiple files, which reduces the overhead of manual file-by-file coordination.",
    },
    {
      title: "Codebase indexing",
      description:
        "Builds semantic context over the repository, which helps the model reason about structure instead of guessing from only the active buffer.",
    },
    {
      title: "Tab completions",
      description:
        "Predicts the next change with low friction, which is still useful even when you are not using a full agent workflow.",
    },
    {
      title: "Cloud agents",
      description:
        "Runs longer tasks outside the local editor, which is useful when you want work to continue while you review or switch context.",
    },
    {
      title: "MCP, skills, and hooks",
      description:
        "Extends the editor beyond raw prompting, which helps teams wire Cursor into repeatable workflows and guarded automations.",
    },
    {
      title: "Model choice across frontier providers",
      description:
        "Supports OpenAI, Claude, Gemini, xAI, and Cursor models, which gives you better control over cost, speed, and quality by task.",
    },
    {
      title: "Privacy Mode",
      description:
        "Adds zero-data-retention controls with supported providers, which matters if your team wants stronger defaults without leaving the product.",
    },
    {
      title: "Team administration",
      description:
        "Adds analytics, org billing, SSO, RBAC, and privacy controls, which makes Cursor viable beyond solo use.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 9,
      summary: "Excellent at repo-wide editing, agent workflows, and day-to-day coding speed.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 7,
      summary: "Strong value at Pro, but serious daily agent usage can push many users toward Pro+.",
      tone: "blue",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 8,
      summary: "Easy to start if you already know VS Code, but advanced agent flows still require judgment.",
      tone: "amber",
    },
  },
  pros: [
    "Feels fast in real code, not just in toy prompts or single-file demos.",
    "Repo-wide context is materially better than traditional autocomplete-first tools.",
    "Multi-file refactors are a core workflow rather than an afterthought.",
    "Privacy Mode is clear, practical, and available beyond enterprise-only buyers.",
    "Teams plan adds real admin controls instead of a thin billing wrapper.",
  ],
  cons: [
    "The best experience depends on learning when to use Tab, chat, or agents instead of treating them as the same tool.",
    "Included usage is not infinite, so power users can outgrow Pro faster than the sticker price suggests.",
    "If you prefer your existing IDE extensions and keybindings untouched, moving editors still carries switching cost.",
    "Privacy behavior changes if you bring your own API keys, so teams need to understand the exception path.",
  ],
  pricing: {
    freeTier:
      "Hobby is free with no credit card, plus limited Agent requests and limited Tab completions.",
    billing: "Monthly or yearly subscriptions, with usage-based overage available after included usage is exhausted.",
    plans: [
      {
        name: "Hobby",
        price: "$0",
        details: "No credit card, limited Agent requests, limited Tab completions.",
      },
      {
        name: "Pro",
        price: "$20/mo",
        details: "Extended Agent limits, frontier models, MCPs, skills, hooks, and cloud agents.",
      },
      {
        name: "Pro+",
        price: "$60/mo",
        details: "Everything in Pro plus 3x usage on OpenAI, Claude, and Gemini models.",
      },
      {
        name: "Ultra",
        price: "$200/mo",
        details: "Everything in Pro plus 20x usage and priority access to new features.",
      },
    ],
    teamPlan:
      "Teams costs $40 per user per month and adds shared chats, centralized billing, analytics, org-wide privacy controls, RBAC, and SAML/OIDC SSO. Enterprise is custom.",
    notes: [
      "Cursor states that every plan includes a set amount of model usage.",
      "On-demand usage can continue after included usage is consumed and is billed in arrears.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value:
        "With Privacy Mode enabled, code is not stored by model providers and is not used for training.",
    },
    {
      label: "Opt-out / controls",
      value:
        "Privacy Mode can be enabled in settings. Teams can enforce it org-wide, and Enterprise includes more admin-level controls.",
    },
    {
      label: "Enterprise privacy",
      value:
        "Enterprise adds audit logs, granular model controls, compliance documentation, and customer-managed encryption keys for supported data paths.",
    },
  ],
  suitableFor: [
    "Front-end or full-stack developers who constantly move between files during UI and feature work.",
    "Teams that want an AI-native editor instead of layering many tools onto a traditional IDE.",
    "Engineers doing medium-to-large refactors where repo context matters more than raw autocomplete speed.",
    "Developers who care about model choice and want one editor that can route across providers.",
  ],
  notSuitableFor: [
    "Developers who only want cheap inline completion and do not need agent workflows.",
    "Teams that cannot tolerate any editor migration from their current setup.",
    "Buyers who need a perfectly predictable flat monthly cost despite heavy model usage.",
    "Organizations that require their own API-key stack for everything and do not want product-specific privacy caveats.",
  ],
  quickStart: [
    {
      title: "Download and install Cursor",
      duration: "5 min",
      description: "Install the editor from cursor.com and launch the desktop app.",
    },
    {
      title: "Sign in and configure Privacy Mode",
      duration: "3 min",
      description: "Connect your account, then enable Privacy Mode before opening sensitive repositories.",
    },
    {
      title: "Open a repo and try agent editing",
      duration: "7 min",
      description: "Index your project, ask for a scoped multi-file change, and compare the result with Tab completions.",
    },
  ],
  relatedTools: [
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Better fit if you want broad editor coverage and a lighter ramp-up path.",
    },
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "Stronger fit when the task is long-running, terminal-heavy, and intentionally agentic.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://cursor.com/" },
    { label: "Pricing page", url: "https://cursor.com/en-US/pricing" },
    { label: "Privacy and data", url: "https://cursor.com/help/security-and-privacy/privacy" },
    { label: "Changelog", url: "https://cursor.com/changelog/3-1" },
  ],
  seo: {
    title: "Cursor Review: Pricing, Privacy, and Best Use Cases",
    description:
      "A developer-focused review of Cursor covering pricing, privacy, core capabilities, strengths, weaknesses, and who should actually use it.",
    canonicalPath: "/tool/cursor",
  },
};
