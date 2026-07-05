import type { ToolDetailEntry } from "@/types/tool";

export const codexTool: ToolDetailEntry = {
  slug: "codex",
  name: "OpenAI Codex",
  eyebrow: "Agentic coding",
  heroPainPoint: [
    "Setup scripts that live in READMEs nobody reads. Bug reproduction steps that get lost in a Jira ticket. Deployment playbooks that are outdated the day after they're written. Every team has workflows they do repeatedly but never codify — because scripting them takes longer than just doing it manually.",
    "OpenAI Codex's Record & Replay, launched June 17 2026, finally addresses this: demonstrate a workflow once on your Mac, and Codex turns it into a reusable automation. It's a fundamentally different approach to AI coding that prioritizes 'show me over tell me.'",
  ],
  overview: [
    { label: "Developer", value: "OpenAI" },
    { label: "First availability", value: "2025 (public preview)" },
    { label: "Current release", value: "Codex with Record & Replay (June 17, 2026), macOS desktop app" },
    {
      label: "Positioning",
      value: "An agentic coding workspace focused on workflow recording, automation, and macOS-native agent interactions.",
    },
  ],
  positioning:
    "Codex is strongest when your workflow involves repetitive desktop tasks that are hard to describe but easy to demonstrate — environment setup, deployment sequences, bug reproduction, and API migrations.",
  capabilities: [
    {
      title: "Record & Replay (June 2026)",
      description:
        "The flagship feature: perform a workflow once on macOS while Codex records every action (file edits, terminal commands, UI interactions). Replay it anytime as a reusable automation skill. Recorded skills are semantic, not positional — they adapt to changing context. The GitHub community (https://github.com/) has extensive discussions and examples covering this exact use case.",
    },
    {
      title: "macOS desktop app",
      description:
        "Codex runs as a standalone macOS desktop application. The app provides a session-based workspace where you can manage multiple agent conversations, recorded workflows, and code generation tasks.",
    },
    {
      title: "GPT-5.5 agent backend",
      description:
        "Powered by OpenAI's GPT-5.5 model, offering state-of-the-art reasoning for complex coding tasks. The agent can read, write, and refactor code across files with strong contextual understanding.",
    },
    {
      title: "Workflow persistence and sharing",
      description:
        "Recorded skills can be saved, edited, and shared with teammates. This turns tribal knowledge into executable documentation. Skills are editable after recording, allowing refinement over time.",
    },
    {
      title: "Computer Use integration",
      description:
        "Record & Replay leverages OpenAI's Computer Use capability, which allows Codex to understand and interact with desktop UI elements semantically rather than by pixel coordinates.",
    },
    {
      title: "Agent workspace sessions",
      description:
        "Isolated sessions for different tasks, each with its own conversation history, file state, and recorded skills. Sessions can be paused and resumed, making Codex suitable for ongoing projects.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 8,
      summary: "Record & Replay is genuinely innovative. Strong agent backend with GPT-5.5. macOS-only limitation is a significant constraint.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 6,
      summary: "Competitive for individual users but pricing is tied to OpenAI's subscription model. No free tier beyond limited trial.",
      tone: "amber",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 8,
      summary: "Record & Replay is intuitive — you demonstrate, it records. Session management is clean. macOS-only limits accessibility.",
      tone: "emerald",
    },
  },
  pros: [
    "Record & Replay is a genuinely new interaction model for AI coding tools.",
    "Backed by GPT-5.5, one of the strongest reasoning models available.",
    "Recorded skills are semantic, not positional — adaptable to context changes.",
    "Editable skills allow refinement without re-recording.",
    "Shareable skills turn individual expertise into team automation.",
    "Session-based workspace keeps different projects and workflows organized.",
  ],
  cons: [
    "macOS only — no Windows, Linux, or web version at launch.",
    "Record & Replay excluded from EEA, UK, and Switzerland at launch.",
    "No CI/CD or server-side workflow support — desktop automation only.",
    "No free tier beyond limited trial (unlike Gemini Code Assist's free offering).",
    "Computer Use dependency means Record & Replay may have blind spots in certain desktop configurations.",
    "Smaller ecosystem than Cursor and Copilot in terms of IDE integrations and plugins.",
  ],
  pricing: {
    freeTier: "Limited trial available through the Codex desktop app. Full features require a paid subscription.",
    billing: "Monthly subscription tied to OpenAI's platform. Usage within subscription limits; overage billed at API rates.",
    plans: [
      {
        name: "Trial",
        price: "$0",
        details: "Limited Codex access for evaluation. Session limits apply.",
      },
      {
        name: "Pro",
        price: "$20/mo",
        details: "Full Codex access, Record & Replay, session workspace, and GPT-5.5 agent backend.",
      },
    ],
    teamPlan: "Team and Enterprise pricing available through OpenAI's enterprise sales. Includes centralized billing, admin controls, and priority support.",
    notes: [
      "Pro pricing is competitive with Cursor ($20/mo) and Windsurf ($20/mo).",
      "No usage caps are clearly documented; heavy users should verify limits before committing.",
      "Enterprise pricing likely mirrors OpenAI's existing ChatGPT Enterprise structure.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "API data is not used for training by default. OpenAI's standard data usage policies apply.",
    },
    {
      label: "Opt-out / controls",
      value: "Zero-retention options available through API settings. Team/Enterprise plans offer additional controls.",
    },
    {
      label: "Enterprise privacy",
      value: "Enterprise plans include data retention controls, SSO, and compliance documentation. SOC 2 compliant.",
    },
  ],
  suitableFor: [
    "Developers on macOS who want to automate repetitive desktop workflows.",
    "Teams that struggle with documentation — Record & Replay turns demos into executable skills.",
    "Engineers doing environment setup, deployment sequences, and migration tasks.",
    "Developers who prefer demonstrating over describing workflows to AI.",
    "OpenAI ecosystem users who want a single-vendor AI stack.",
  ],
  notSuitableFor: [
    "Windows or Linux users (macOS only at launch).",
    "Teams needing CI/CD or server-side workflow automation.",
    "Developers in EEA, UK, or Switzerland (Record & Replay excluded at launch).",
    "Users who want an IDE plugin rather than a standalone application.",
    "Budget-conscious users who need a free tier for daily development.",
  ],
  quickStart: [
    {
      title: "Download Codex for macOS",
      duration: "5 min",
      description: "Install the Codex desktop app from openai.com/codex. macOS only.",
    },
    {
      title: "Sign in and enable Computer Use",
      duration: "3 min",
      description: "Authenticate with your OpenAI account and enable Computer Use in settings for Record & Replay.",
    },
    {
      title: "Record your first workflow",
      duration: "10 min",
      description: "Start recording, perform a setup or deployment workflow, stop recording. Edit and replay the skill to verify it works.",
    },
  ],
  relatedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      reason: "Stronger for multi-repo automations and parallel agent execution. Compare for advanced workflow orchestration.",
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      reason: "Better for cross-platform use and GitHub-native workflows. Compare if you need broader tool coverage.",
    },
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "Terminal-first agent with strong plugin ecosystem. Compare for deep sequential reasoning tasks.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://openai.com/index/codex-preview" },
    { label: "Pricing page", url: "https://openai.com/pricing" },
    { label: "Record & Replay announcement", url: "https://openai.com/index/codex-record-replay" },
    { label: "OpenAI documentation", url: "https://platform.openai.com/docs" },
  ],
  seo: {
    title: "OpenAI Codex Review 2026: Features, Record & Replay & Pricing",
    description:
      "A developer-focused review of OpenAI Codex covering Record & Replay, pricing, GPT-5.5 agent backend, macOS workflow automation, and how it compares to Cursor, Copilot, and Claude Code.",
    canonicalPath: "/tool/codex",
  },
};
