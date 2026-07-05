import type { ScenarioEntry } from "@/types/scenario";

export const budgetDeveloperScenario: ScenarioEntry = {
  slug: "budget-developer",
  title: "AI Coding Tools For Budget-Conscious Developers",
  eyebrow: "Budget-first developer",
  painPoint: [
    "AI coding subscriptions add up fast when you are a student, a solo builder, or a small team. A tool that looks affordable at first can become expensive once usage caps, premium requests, or hidden upgrade pressure start showing up.",
    "That makes value the real decision point, not hype. The most useful option here is the one that gives enough real work output for the money while staying clear about free limits, paid entry cost, and privacy trade-offs.",
  ],
  tableColumns: [
    { key: "monthlyCost", label: "Real monthly cost" },
    { key: "freeTier", label: "Free tier value" },
    { key: "entryCost", label: "Lowest paid entry" },
    { key: "privacy", label: "Privacy clarity" },
    { key: "verdict", label: "Why it stands out" },
  ],
  comparedTools: [
    {
      slug: "copilot",
      name: "GitHub Copilot",
      matchScore: 9,
      verdict: "Best balance of meaningful free usage, low paid entry, and broad usefulness.",
      metrics: {
        monthlyCost: "$0 free or $10/mo Pro",
        freeTier: "Strong free tier with 50 agent/chat requests and 2,000 completions.",
        entryCost: "Low barrier for paid upgrade.",
        privacy: "Clear opt-out exists, but individuals still need to review training settings.",
      },
      prosForScenario: [
        "The free tier is strong enough to evaluate real daily usage before paying.",
        "Pro is still one of the easiest low-cost paid upgrades in the market.",
        "Useful across many workflows, so you avoid paying for multiple narrow tools too early.",
      ],
      consForScenario: [
        "Privacy settings require attention because individual interaction data policy changed in 2026.",
        "Heavy premium usage can reduce the simplicity of the cheap-looking starting price.",
      ],
    },
    {
      slug: "windsurf",
      name: "Windsurf",
      matchScore: 8,
      verdict: "Most appealing when you want an AI-native editor feel without jumping into premium pricing tiers.",
      metrics: {
        monthlyCost: "$20/mo Pro",
        freeTier: "Less generous than the best free-first options, but still testable.",
        entryCost: "Reasonable for an AI-native editor if you want more than autocomplete.",
        privacy: "Acceptable, though not the clearest differentiator versus enterprise-first tools.",
      },
      prosForScenario: [
        "Good value if you specifically want an AI-native editing experience.",
        "Makes more sense than pricier agent-heavy tools when budget is capped.",
      ],
      consForScenario: [
        "Not the absolute cheapest option once you compare it to strong free tiers.",
        "Value depends on whether you really want the editor-native workflow rather than just assistance.",
      ],
    },
    {
      slug: "gemini-code-assist",
      name: "Gemini Code Assist",
      matchScore: 8,
      verdict: "Great fit for developers who want a credible free baseline before committing to any paid plan.",
      metrics: {
        monthlyCost: "$0 personal tier",
        freeTier: "One of the easiest free options for light and moderate usage.",
        entryCost: "No upfront cost for individual experimentation.",
        privacy: "Reasonably clear, with enterprise upgrades available later.",
      },
      prosForScenario: [
        "Easy starting point if the budget is effectively zero right now.",
        "Good for students or side projects that need help but not deep agent workflows.",
      ],
      consForScenario: [
        "Not as feature-complete for power users as stronger paid tools.",
        "Free value is good, but deeper workflow depth still trails the most mature premium choices.",
      ],
    },
    {
      slug: "cursor",
      name: "Cursor",
      matchScore: 6,
      verdict: "Worth paying for only if budget is limited but multi-file productivity is the top priority.",
      metrics: {
        monthlyCost: "$20/mo Pro",
        freeTier: "Hobby exists, but serious use pushes most people into paid plans.",
        entryCost: "Moderate rather than cheap.",
        privacy: "Very clear Privacy Mode story, which improves trust for paid users.",
      },
      prosForScenario: [
        "High-value spend if a solo developer gets real productivity gains from multi-file editing.",
        "Privacy language is easier to understand than some cheaper-looking alternatives.",
      ],
      consForScenario: [
        "Harder to justify if your budget ceiling is very low.",
        "Overkill if you only need lightweight completion and occasional chat help.",
      ],
    },
  ],
  recommendation: {
    primary: {
      slug: "copilot",
      name: "GitHub Copilot",
      reason:
        "Choose GitHub Copilot first if you want the most practical low-cost default. The free tier is real, the paid step-up is still low, and it works across many common developer workflows.",
    },
    alternatives: [
      {
        slug: "gemini-code-assist",
        name: "Gemini Code Assist",
        reason:
          "Choose Gemini Code Assist if your budget is effectively zero and you want a credible free assistant before paying for anything.",
      },
      {
        slug: "windsurf",
        name: "Windsurf",
        reason:
          "Choose Windsurf if you are willing to pay for an AI-native editor feel but still want to stay below premium enterprise-style pricing.",
      },
      {
        slug: "cursor",
        name: "Cursor",
        reason:
          "Choose Cursor only if your budget is tight but the productivity upside from multi-file editing clearly outweighs the higher monthly cost.",
      },
    ],
  },
  notRecommendedFor: [
    "Teams solving high-stakes enterprise privacy or governance requirements where the cheapest path is not the main decision driver.",
    "Developers who need the deepest agentic automation every day and are willing to pay more for it.",
    "Buyers who care more about front-end-specific workflow depth or repo-wide refactor power than about monthly cost discipline.",
  ],
  otherScenarios: [
    { slug: "front-end-dev", title: "Front-end developer" },
    { slug: "budget-developer", title: "Budget-first developer" },
  ],
  seo: {
    title: "Best AI Coding Tools For Budget-Conscious Developers",
    description:
      "Compare the best AI coding tools when price matters most, including free-tier value, paid entry cost, privacy clarity, and real-world trade-offs. The GitHub community (https://github.com/) has extensive discussions and examples covering this exact use case.",
    canonicalPath: "/compare/budget-developer",
  },
};
