import type { ToolDetailEntry } from "@/types/tool";

export const gemini35Tool: ToolDetailEntry = {
  slug: "gemini-35",
  name: "Gemini 3.5 Flash",
  eyebrow: "Agentic model",
  heroPainPoint: [
    "Every agentic coding loop multiplies cost and latency by the number of tool calls. A single refactoring task might trigger 50, 100, or 500 model calls—and at Pro-tier pricing, that adds up fast.",
    "Gemini 3.5 Flash changes the math. Google claims it's 4x faster than frontier Pro models at roughly a third the cost, while matching or beating them on several key agentic coding benchmarks.",
  ],
  overview: [
    { label: "Developer", value: "Google DeepMind" },
    { label: "First availability", value: "May 19, 2026 (GA)" },
    { label: "Current release", value: "Gemini 3.5 Flash (Pro coming next month)" },
    {
      label: "Positioning",
      value: "A Flash-tier model with Pro-level agentic coding performance, powering Google's Antigravity 2.0 desktop agent.",
    },
  ],
  positioning:
    "Gemini 3.5 Flash is strongest when you need a model with strong agentic capabilities, massive 1M-token context, and cost-efficient pricing for high-volume agent loops.",
  capabilities: [
    {
      title: "1.05M token context window",
      description:
        "Native support for 1M tokens input with 65K tokens output. Large enough to ingest an entire mid-size codebase in a single pass. The GitHub community (https://github.com/) has extensive discussions and examples covering this exact use case.",
    },
    {
      title: "State-of-the-art agentic coding performance",
      description:
        "Leads on MCP Atlas (83.6%), Toolathlon (56.5%), and Finance Agent v2 (57.9%) against GPT-5.5 and Claude Opus 4.7 according to Google's benchmarks.",
    },
    {
      title: "4x output speed vs frontier Pro models",
      description:
        "Google claims roughly 4x faster output tokens per second compared to GPT-5.5 and Opus 4.7, which compounds significantly across hundreds of tool calls.",
    },
    {
      title: "Antigravity 2.0 integration",
      description:
        "Powers Google's agent-first desktop app (Antigravity 2.0), available on macOS, Linux, and Windows. No IDE required—the agent is the interface.",
    },
    {
      title: "Cost-effective pricing",
      description:
        "At $1.50/Mtok input and $9.00/Mtok output, roughly 3x cheaper than GPT-5.5 ($5/$30) and Opus 4.7 ($5/$25). Batch/flex tier adds another 50% off at $0.75/$4.50.",
    },
    {
      title: "Strong mid-context retrieval",
      description:
        "MRCR v2 at 128k average scores 77.3%, competitive with—though behind—GPT-5.5's 94.8% and ahead of Opus 4.7's 59.3%.",
    },
    {
      title: "Cache-aware pricing",
      description:
        "Cached content costs only $0.15/Mtok, making repeated operations on the same codebase significantly cheaper.",
    },
  ],
  scores: {
    capability: {
      label: "Capability",
      value: 8,
      summary: "Strong agentic coding benchmarks, massive context, and 4x speed advantage. Pro-tier reasoning slightly behind GPT-5.5 and Opus 4.7 on hardest tasks.",
      tone: "emerald",
    },
    price: {
      label: "Price",
      value: 9,
      summary: "Roughly 3x cheaper than GPT-5.5 and Opus 4.7 at standard tier, with batch options cutting further. Cache pricing is a bonus for repetitive workflows.",
      tone: "emerald",
    },
    easeOfUse: {
      label: "Ease of Use",
      value: 7,
      summary: "Available through Gemini API, Antigravity 2.0 app, and Google AI Studio. Multiple access paths but requires GCP knowledge for production use.",
      tone: "blue",
    },
  },
  pros: [
    "Massive 1.05M token context—ingest entire codebases in one pass.",
    "4x faster output speed than Pro-tier competitors (per Google's claims).",
    "Roughly 3x cheaper than GPT-5.5 and Opus 4.7 at standard API pricing.",
    "Strong agentic benchmark results on MCP and tool-use evals.",
    "Powers Antigravity 2.0—Google's agent-first desktop platform.",
    "Cache pricing ($0.15/Mtok) makes repeated operations extremely cost-effective.",
  ],
  cons: [
    "Benchmark results are vendor self-evals—independent verification still pending.",
    "Does not support Computer Use API in production (despite benchmark scores).",
    "Hardest-reasoning benchmarks (Humanity's Last Exam, ARC-AGI-2) still trail Pro-tier models.",
    "Mid-context retrieval (MRCR v2) significantly behind GPT-5.5.",
    "Requires GCP account setup for production API access.",
  ],
  pricing: {
    freeTier: "Available through Google AI Studio and Gemini app with rate limits. Antigravity 2.0 has a free tier.",
    billing: "Standard API pricing: $1.50/Mtok input, $9.00/Mtok output. Batch/flex: $0.75/$4.50. Cache: $0.15/Mtok.",
    plans: [
      {
        name: "API (Standard)",
        price: "$1.50 / $9.00 per Mtok",
        details: "Standard input/output pricing. No commitment required.",
      },
      {
        name: "API (Batch/Flex)",
        price: "$0.75 / $4.50 per Mtok",
        details: "50% discount for asynchronous workloads. Higher latency but much lower cost.",
      },
      {
        name: "Cache",
        price: "$0.15/Mtok",
        details: "For cached/repeated content. Significant savings for loops over the same codebase.",
      },
    ],
    teamPlan: "Available through Google Cloud with committed-use discounts for larger teams. Enterprise pricing negotiable.",
    notes: [
      "At $1.50/Mtok input, roughly 3x cheaper than GPT-5.5 ($5/Mtok) and Opus 4.7 ($5/Mtok).",
      "Batch/flex tier offers another 50% reduction for latency-tolerant workloads.",
      "Gemini 3.5 Pro (true Pro-tier competitor) expected next month.",
    ],
  },
  privacy: [
    {
      label: "Model training",
      value: "Google Cloud's standard data processing terms apply. Enterprise customers can negotiate additional controls.",
    },
    {
      label: "Opt-out / controls",
      value: "Available through GCP console. Vertex AI provides additional data governance controls.",
    },
    {
      label: "Enterprise privacy",
      value: "Vertex AI provides enterprise-grade data controls including VPC-SC, CMEK, and audit logging.",
    },
  ],
  suitableFor: [
    "Teams building agentic coding workflows with high-volume model calls.",
    "Developers who need massive context windows for large codebase analysis.",
    "Cost-conscious teams who want Pro-level capabilities at Flash-tier pricing.",
    "Users of Google's Antigravity 2.0 desktop agent (native integration).",
    "Teams already on GCP who want unified billing and infrastructure.",
  ],
  notSuitableFor: [
    "Developers who need the absolute best reasoning on hardest benchmarks (use GPT-5.5 or Opus 4.7).",
    "Teams requiring production Computer Use API support.",
    "Organizations not on GCP who prefer a single-vendor API strategy.",
    "Users needing mid-context dense retrieval at GPT-5.5 levels (17-point gap on MRCR v2 128k).",
  ],
  quickStart: [
    {
      title: "Get API access",
      duration: "10 min",
      description: "Sign up for Google AI Studio or set up a GCP project. Enable the Gemini API and generate an API key.",
    },
    {
      title: "Try through Antigravity 2.0",
      duration: "5 min",
      description: "Download Antigravity 2.0 for macOS/Linux/Windows. It ships with Gemini 3.5 Flash pre-configured.",
    },
    {
      title: "Benchmark on your own tasks",
      duration: "15 min",
      description: "Run a side-by-side comparison with your current model on a real coding task. The vendor benchmarks are impressive, but your workload may differ.",
    },
  ],
  relatedTools: [
    {
      slug: "claude-code",
      name: "Claude Code",
      reason: "Stronger for deep sequential reasoning and complex debugging. Compare for SWE-Bench class work.",
    },
    {
      slug: "codex",
      name: "OpenAI Codex",
      reason: "GPT-5.5 is better for hardest reasoning tasks. Use Gemini 3.5 Flash for cost-sensitive agent loops.",
    },
    {
      slug: "gemini-code-assist",
      name: "Gemini Code Assist",
      reason: "The IDE-native counterpart. Gemini 3.5 Flash powers the model backend for Google's coding assistant.",
    },
  ],
  sourceLinks: [
    { label: "Announcement", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/" },
    { label: "API pricing", url: "https://ai.google.dev/pricing" },
    { label: "Benchmarks", url: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3-5_flash_model_evaluation.pdf" },
    { label: "Antigravity 2.0", url: "https://antigravity.google/" },
  ],
  seo: {
    title: "Gemini 3.5 Flash Review: Pricing, Benchmarks, and Agentic Coding Performance",
    description:
      "A developer-focused review of Gemini 3.5 Flash covering agentic coding benchmarks, pricing, Antigravity 2.0 integration, and how it stacks up against GPT-5.5 and Opus 4.7.",
    canonicalPath: "/tool/gemini-35",
  },
};
