import type { ScenarioEntry } from "@/types/scenario";

export const frontEndDevScenario: ScenarioEntry = {
  slug: "front-end-dev",
  title: "AI Coding Tools For Front-End Developers",
  eyebrow: "Front-end development",
  painPoint: [
    "A small UI change rarely stays small for long. One component tweak leads to a style token, a prop chain, an API call, and then three files that all need to move together before the page behaves again.",
    "That is where ordinary autocomplete starts to feel too local. Front-end work is distributed across components, styles, hooks, routes, and data fetching layers, so the best tool is the one that understands that shape of work instead of only the current cursor position.",
  ],
  tableColumns: [
    { key: "frameworkFit", label: "Framework fit" },
    { key: "componentContext", label: "Component context" },
    { key: "multiFile", label: "Multi-file editing" },
    { key: "styling", label: "CSS and styling" },
    { key: "verdict", label: "Why it stands out" },
  ],
  comparedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      matchScore: 9,
      verdict: "Best fit when a front-end task spreads across components, hooks, and styling layers.",
      metrics: {
        frameworkFit: "Excellent for React, TypeScript, and modern UI repos.",
        componentContext: "Strong repo-aware context across related files.",
        multiFile: "One of the best options for coordinated edits.",
        styling: "Handles Tailwind, CSS modules, and CSS-in-JS well.",
      },
      prosForScenario: [
        "Feels natural in component-heavy repos where changes rarely stay inside one file.",
        "Strong agent workflows help when UI work touches API hooks and presentation code together.",
        "Very good fit for React and TypeScript-heavy front-end teams.",
      ],
      consForScenario: [
        "More expensive than entry-level tools if you only need light completion.",
        "You get the most value only after learning when to use agents versus tab completion.",
      ],
    },
    {
      slug: "copilot",
      name: "GitHub Copilot",
      matchScore: 8,
      verdict: "Most practical fit if you want fast front-end help inside the editor you already use.",
      metrics: {
        frameworkFit: "Excellent editor coverage for React, Vue, Angular, and TypeScript.",
        componentContext: "Good in-file and chat assistance, but less editor-native than Cursor for large UI changes.",
        multiFile: "Useful, though deeper cross-file work depends on agent mode and GitHub context.",
        styling: "Strong for utility classes, repetitive CSS, and scaffolding UI code.",
      },
      prosForScenario: [
        "Easy to adopt for teams already using VS Code or GitHub workflows.",
        "Very good at routine front-end acceleration like components, tests, and repetitive props.",
        "Lower friction than moving the whole team into a new editor.",
      ],
      consForScenario: [
        "Large refactors across front-end folders can feel less deliberate than Cursor.",
        "The most advanced workflows depend on understanding newer agent and billing features.",
      ],
    },
    {
      slug: "claude-code",
      name: "Claude Code",
      matchScore: 7,
      verdict: "Strong option for front-end teams doing larger architectural changes, not just UI tweaks.",
      metrics: {
        frameworkFit: "Good for broad codebase reasoning, less editor-native for day-to-day UI polish.",
        componentContext: "Very strong when the task includes architecture, routing, and testing context.",
        multiFile: "Excellent for larger feature or refactor sequences.",
        styling: "Capable, but not as naturally embedded in the rapid CSS iteration loop.",
      },
      prosForScenario: [
        "Useful when front-end work includes build issues, test failures, or repo-wide migrations.",
        "Good at reasoning over larger task chains rather than isolated snippets.",
      ],
      consForScenario: [
        "Heavier than many front-end developers need for quick styling and component iteration.",
        "Less natural than an AI-native editor for ultra-fast UI feedback loops.",
      ],
    },
    {
      slug: "gemini-code-assist",
      name: "Gemini Code Assist",
      matchScore: 6,
      verdict: "Reasonable pick when you want a free or low-cost assistant for light front-end work.",
      metrics: {
        frameworkFit: "Good baseline support for TS and web stacks.",
        componentContext: "Decent for review and explanation, lighter than the best front-end-first tools.",
        multiFile: "Moderate compared with Cursor or Claude Code.",
        styling: "Fine for basic CSS help, but not the strongest specialist choice.",
      },
      prosForScenario: [
        "Generous free access makes it easy to test before paying.",
        "Good fallback option for lighter front-end development budgets.",
      ],
      consForScenario: [
        "Not the sharpest choice when component trees and multi-file UI edits dominate the workday.",
        "Front-end-specific workflows feel less purpose-built than the top two options.",
      ],
    },
  ],
  recommendation: {
    primary: {
      slug: "cursor",
      name: "Cursor",
      reason:
        "Choose Cursor if your front-end work constantly spans components, hooks, routes, styling, and API layers. It is the most natural fit for multi-file React or TypeScript-heavy repos.",
    },
    alternatives: [
      {
        slug: "copilot",
        name: "GitHub Copilot",
        reason:
          "Choose Copilot if you want the easiest front-end upgrade path inside VS Code or GitHub without changing your whole editor workflow.",
      },
      {
        slug: "claude-code",
        name: "Claude Code",
        reason:
          "Choose Claude Code when the front-end task is bigger than UI polish and starts looking like a repo-wide migration, test fix, or architecture cleanup.",
      },
      {
        slug: "gemini-code-assist",
        name: "Gemini Code Assist",
        reason:
          "Choose Gemini Code Assist if budget matters and you mainly need lightweight help for day-to-day component work.",
      },
    ],
  },
  notRecommendedFor: [
    "Developers whose work is mostly backend services, infrastructure, or terminal-heavy automation rather than component-driven UI work.",
    "Teams that only need cheap inline completion and do not care about cross-file UI changes or component context.",
    "Buyers who want a single flat recommendation regardless of whether they prioritize editor-native flow, GitHub integration, or budget.",
  ],
  otherScenarios: [
    { slug: "front-end-dev", title: "Front-end developer" },
    { slug: "budget-developer", title: "Budget-first developer" },
  ],
  seo: {
    title: "Best AI Coding Tools For Front-End Developers",
    description:
      "Compare the AI coding tools that fit front-end developers best, with guidance on React, component context, styling workflows, and multi-file UI edits.",
    canonicalPath: "/compare/front-end-dev",
  },
};
