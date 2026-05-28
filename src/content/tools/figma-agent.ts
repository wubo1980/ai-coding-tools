import type { ToolDetailEntry } from "@/types/tool";

export const figmaAgentTool: ToolDetailEntry = {
  slug: "figma-agent",
  name: "Figma Design Agent",
  eyebrow: "Design agent",
  heroPainPoint: [
    "Every time feedback comes in, someone has to manually rename variables, swap components across a grid of screens, or repeat the same padding change across an entire flow.",
    "Figma's Design Agent changes that. It lives directly on the canvas, understands your design system, and handles the work that usually slows you down—without toggling between tools or losing context.",
  ],
  overview: [
    { label: "Developer", value: "Figma" },
    { label: "First availability", value: "May 20, 2026 (beta)" },
    { label: "Current release", value: "Beta, rolling out gradually" },
    {
      label: "Positioning",
      value: "A design agent built into Figma that works on the canvas with full awareness of your components, tokens, and design system.",
    },
  ],
  positioning:
    "Figma Design Agent is strongest when you need to explore design directions quickly, make bulk edits across many frames, and work through feedback without leaving the canvas—all while maintaining design system consistency.",
  capabilities: [
    {
      title: "On-canvas AI collaboration",
      description:
        "Works directly on the Figma canvas inside the same file as your team. No separate setup, no context switching—just open the agent in the left rail and start prompting.",
    },
    {
      title: "Design system awareness",
      description:
        "Uses your most frequently and recently used components as a starting point. You can @-mention specific tokens, variables, and components to steer outputs toward your exact design system.",
    },
    {
      title: "Parallel exploration",
      description:
        "Prompt multiple design directions simultaneously. Compare several checkout flows optimized for different business goals, or ask for three different information architectures at once.",
    },
    {
      title: "Bulk editing and automation",
      description:
        "Update typography across a file, replace lorem ipsum and imagery across a grid, set all chip components to their active state, or convert screens to dark mode in one prompt.",
    },
    {
      title: "Design system documentation",
      description:
        "Bulk-update descriptions, tags, and use cases across libraries. Standardize naming conventions. Document components with all their states and variants.",
    },
    {
      title: "Feedback processing",
      description:
        "Summarize comments, identify themes, and turn scattered feedback into actionable next steps. Model stakeholder perspectives to pressure-test designs.",
    },
    {
      title: "MCP server + code-to-canvas",
      description:
        "The Figma MCP server lets code flow to the canvas and designs flow back to code. Start in code, bring it into Figma to iterate with the agent, then send it back—everything stays in sync.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 8,
      summary: "Deep Figma integration with design system awareness is genuinely useful. Bulk editing capabilities save hours of manual work.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 7,
      summary: "Free during beta with no credit consumption. Pricing at GA is TBD, but Figma is a premium product.",
      tone: "blue",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 9,
      summary: "Zero learning curve—it lives inside Figma where designers already work. Prompts work with the vocabulary designers already use.",
      tone: "emerald",
    },
  },
  pros: [
    "Deeply integrated into Figma—no context switching, no new tool to learn.",
    "Design system awareness means outputs align with your existing components and tokens.",
    "Bulk editing capabilities can automate hours of repetitive work.",
    "Parallel exploration lets designers cover more ground without manual effort.",
    "Feedback processing turns scattered comments into actionable, structured output.",
    "MCP server bridges the gap between code and design workflows.",
  ],
  cons: [
    "Early beta—rolling out gradually with limited availability.",
    "Requires Professional, Organization, or Enterprise Full seat plan. Starter/Education/Government excluded.",
    "AI credits will apply at general availability—pricing TBD.",
    "Not for developers—pure design tool, no coding capabilities.",
    "Currently focused on 2D UI design; not suited for 3D, illustration, or print work.",
  ],
  pricing: {
    freeTier: "Free during beta rollout—no AI credits consumed. Starter plan excluded.",
    billing: "AI credits will apply at general availability. Pricing details not yet announced.",
    plans: [
      {
        name: "Beta",
        price: "Free",
        details: "No AI credit consumption during beta. Requires Professional, Organization, or Enterprise Full seat.",
      },
      {
        name: "GA (TBD)",
        price: "TBD",
        details: "AI credits will be consumed at general availability. Pricing not yet announced.",
      },
    ],
    teamPlan: "Available on Professional ($12/editor/mo), Organization ($45/editor/mo), and Enterprise plans.",
    notes: [
      "Collab and Dev seats can use the agent in drafts only.",
      "Starter, Education, and Government plans are not included.",
      "Beta access requires joining a waitlist—not guaranteed.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "Figma's existing privacy policy applies. Design data is processed according to Figma's standard terms for AI features.",
    },
    {
      label: "Opt-out / controls",
      value: "Standard Figma admin controls apply. Enterprise orgs have additional data governance options.",
    },
    {
      label: "Enterprise privacy",
      value: "Figman Enterprise includes audit logs, compliance documentation, and admin-level AI feature controls.",
    },
  ],
  suitableFor: [
    "UI/UX designers who want to explore more design directions in less time.",
    "Design teams maintaining large design systems who need help with documentation and consistency.",
    "Product designers processing feedback across multiple stakeholders and iterations.",
    "Teams that want AI design capabilities without leaving Figma's ecosystem.",
    "Design operations teams automating repetitive layout and component work.",
  ],
  notSuitableFor: [
    "Software developers looking for a coding tool—this is design-only.",
    "Solo designers on Starter or Education plans (not supported in beta).",
    "Teams that prefer code-first design workflows with tools like Claude Design.",
    "Designers working in 3D, illustration, or print—Figma's agent is 2D UI-focused.",
    "Organizations with strict no-cloud-design policies (Figma runs on their infrastructure).",
  ],
  quickStart: [
    {
      title: "Request beta access",
      duration: "2 min",
      description: "Join the Figma Design Agent waitlist at figma.com. Beta invites roll out gradually over weeks.",
    },
    {
      title: "Enable the agent in Figma",
      duration: "1 min",
      description: "Once invited, the agent appears in the left rail of Figma Design. No installation or configuration needed.",
    },
    {
      title: "Try your first prompt",
      duration: "5 min",
      description: "Select a frame and ask the agent to generate a variation, bulk-edit typography, or convert to dark mode—all within your existing canvas.",
    },
  ],
  relatedTools: [
    {
      slug: "cursor",
      name: "Cursor",
      reason: "If you want AI for code instead of design. Cursor handles the implementation side of the same workflow.",
    },
    {
      slug: "gemini-code-assist",
      name: "Gemini Code Assist",
      reason: "Google's alternative if you need AI across both code and design with GCP integration.",
    },
  ],
  sourceLinks: [
    { label: "Product page", url: "https://www.figma.com/blog/the-figma-agent-is-here/" },
    { label: "Help center", url: "https://help.figma.com/hc/en-us/articles/37998629035799-Work-with-the-AI-agent-in-Figma-Design" },
    { label: "Waitlist", url: "https://www.figma.com/join-waitlist/" },
  ],
  seo: {
    title: "Figma Design Agent Review: On-Canvas AI Design Collaboration",
    description:
      "A detailed review of Figma's Design Agent—on-canvas AI that works with your design system, automates bulk edits, and processes feedback. Beta 2026.",
    canonicalPath: "/tool/figma-agent",
  },
};
