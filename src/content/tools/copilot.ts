import type { ToolDetailEntry } from "@/types/tool";

export const copilotTool: ToolDetailEntry = {
  slug: "copilot",
  name: "GitHub Copilot",
  eyebrow: "Workflow-wide assistant",
  heroPainPoint: [
    "When you want help everywhere you already work, inside VS Code, on GitHub, in pull requests, and in the terminal, point tools start to feel fragmented. You keep switching surfaces while your context leaks out between them.",
    "Copilot solves that better than most because it is no longer just an autocomplete plugin. It is a workflow layer that now spans editor suggestions, chat, cloud agents, code review, and GitHub-native automation.",
  ],
  overview: [
    { label: "Developer", value: "GitHub / Microsoft" },
    { label: "First availability", value: "Technical preview announced in 2021" },
    {
      label: "Current release",
      value: "Service-based platform; May 2026 feature cadence with no single standalone app version",
    },
    {
      label: "Positioning",
      value: "An AI coding assistant that follows developers from the IDE to GitHub, reviews, and terminal workflows.",
    },
  ],
  positioning:
    "GitHub Copilot makes the most sense when you want one assistant to show up across the tools your team already uses instead of asking everyone to move into a new editor.",
  capabilities: [
    {
      title: "Inline suggestions",
      description:
        "Still the fastest path to routine acceleration, especially for repetitive code, tests, and boilerplate you do not want to type by hand.",
    },
    {
      title: "Chat and agent mode",
      description:
        "Lets you move from quick questions to scoped execution, which is more useful than raw completion once the task stops being local.",
    },
    {
      title: "Cloud agent",
      description:
        "Can research, plan, and write code in the background, which helps when you want asynchronous work instead of another synchronous prompt loop.",
    },
    {
      title: "Code review",
      description:
        "Reviews pull requests and editor diffs, which is valuable when teams want AI to help catch issues earlier in review, not just during typing.",
    },
    {
      title: "CLI support",
      description:
        "Extends the assistant into terminal workflows, which matters for developers who live in shell commands as much as editors.",
    },
    {
      title: "Multi-model access",
      description:
        "Exposes models from Anthropic, Google, OpenAI, xAI, and more, which gives users flexibility without changing products.",
    },
    {
      title: "GitHub-native context",
      description:
        "Works directly with GitHub issues, pull requests, repositories, and Spaces, which reduces glue work for teams already standardized on GitHub.",
    },
    {
      title: "Enterprise controls",
      description:
        "Supports governance, MCP policies, and org controls, which is important if a company wants AI without losing admin visibility.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 8,
      summary: "Very broad across coding, review, CLI, and GitHub workflows, even if it is not always the deepest agent.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 8,
      summary: "Free is usable, Pro is inexpensive, but premium usage and billing transitions need attention.",
      tone: "blue",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 9,
      summary: "Easy to adopt because it fits existing tools instead of forcing a workflow reset.",
      tone: "amber",
    },
  },
  pros: [
    "Broadest surface coverage of the three sample tools, from IDE to GitHub to CLI.",
    "Very low adoption friction for teams already living inside GitHub.",
    "Free tier is meaningful enough to test real workflows before paying.",
    "Code review and cloud agent features make it more than just autocomplete.",
    "Strong default choice for mixed-seniority teams that need consistency.",
  ],
  cons: [
    "Repo-wide understanding is not always as deliberate or editor-native as Cursor's best flows.",
    "Pricing language is currently in transition, which makes cost forecasting less clean than it looks at first glance.",
    "Free, Pro, and Pro+ privacy expectations changed in 2026, so individuals need to review training settings carefully.",
    "If your work is mostly long, high-autonomy refactors, other tools can feel more purpose-built.",
  ],
  pricing: {
    freeTier:
      "Free includes 50 agent mode or chat requests per month and 2,000 completions per month, plus Copilot CLI access.",
    billing: "Individual pricing is monthly, with premium requests or AI-credit style usage transitions depending on the billing experience rollout.",
    plans: [
      {
        name: "Free",
        price: "$0",
        details: "50 agent/chat requests, 2,000 completions, access to Haiku 4.5, GPT-5 mini, and more.",
      },
      {
        name: "Pro",
        price: "$10/mo",
        details: "Cloud agent, code review, Claude and Codex access, 300 premium requests, unlimited GPT-5 mini agent/chat, unlimited inline suggestions.",
      },
      {
        name: "Pro+",
        price: "$39/mo",
        details: "Everything in Pro, access to all models including Claude Opus 4.7, and 5x more premium requests than Pro.",
      },
    ],
    teamPlan:
      "Copilot Business remains $19 per user per month and Copilot Enterprise remains $39 per user per month under the June 2026 billing transition announcement.",
    notes: [
      "GitHub states that Pro and Pro+ upgrades were temporarily paused while flexible billing rolls out.",
      "GitHub announced a transition to usage-based billing with AI Credits starting June 1, 2026.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value:
        "As of April 24, 2026, interaction data from Free, Pro, and Pro+ can be used for model training unless the user opts out. Business and Enterprise are excluded from this update.",
    },
    {
      label: "Opt-out / controls",
      value:
        "Individual subscribers can opt out in Copilot settings under Privacy without losing access to features.",
    },
    {
      label: "Enterprise privacy",
      value:
        "Business and Enterprise customers keep enterprise protections and are not included in the individual training-data policy update.",
    },
  ],
  suitableFor: [
    "Developers who want one assistant across GitHub, IDEs, code review, and terminal work.",
    "Teams already standardized on GitHub and unwilling to switch editors just to get better AI help.",
    "Students, generalists, and product-minded engineers who want broad coverage before deep specialization.",
    "Organizations that value governance and admin controls alongside daily coding help.",
  ],
  notSuitableFor: [
    "Developers who primarily want a deeply AI-native IDE experience centered on multi-file agent editing.",
    "Users who need the strongest possible autonomy for long terminal-first coding sessions.",
    "Individuals who do not want to think about privacy settings or training opt-out changes.",
    "Power users who regularly burn through premium features and want simpler cost predictability.",
  ],
  quickStart: [
    {
      title: "Activate Copilot on GitHub",
      duration: "3 min",
      description: "Pick Free, Pro, or Pro+ and enable the product from your GitHub account.",
    },
    {
      title: "Install the extension in your editor",
      duration: "4 min",
      description: "Add GitHub Copilot to VS Code, JetBrains, Visual Studio, or another supported environment.",
    },
    {
      title: "Turn on agent or review workflows",
      duration: "6 min",
      description: "Open a real project, test chat or agent mode, and then try Copilot on a pull request or in the CLI.",
    },
  ],
  relatedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      reason: "Better fit if you want the AI-native IDE experience and stronger editor-centric multi-file flows.",
    },
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "Better fit if your main need is high-autonomy task execution through terminal-style workflows.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://github.com/features/copilot" },
    { label: "Pricing page", url: "https://github.com/features/copilot/plans" },
    {
      label: "Training policy update",
      url: "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/",
    },
    { label: "Trust Center", url: "https://copilot.github.trust.page/faq" },
  ],
  seo: {
    title: "GitHub Copilot Review: Pricing, Privacy, and Real Workflow Fit",
    description:
      "A source-backed GitHub Copilot review covering pricing, privacy changes, capability depth, limitations, and who should use it in 2026.",
    canonicalPath: "/tool/copilot",
  },
};
