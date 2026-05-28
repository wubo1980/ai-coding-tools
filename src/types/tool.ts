export type ToolComparisonRow = {
  slug: string;
  name: string;
  vendor: string;
  category: string;
  coreCapability: string;
  bestFor: string[];
  pricing: string;
  audience: string;
  searchTerms: string[];
  highlight?: "Best Value" | "Deep Work" | "Starter Friendly" | "New";
  /**
   * ISO date string (YYYY-MM-DD) for sorting newest-first.
   * Tools with no date sort to the end.
   */
  addedAt: string;
  sourceLinks: {
    product: string;
    pricing: string;
  };
};

export type ToolScoreKey = "capability" | "price" | "easeOfUse";

export type ToolScore = {
  label: string;
  value: number;
  summary: string;
  tone: "emerald" | "blue" | "amber";
};

export type ToolOverviewItem = {
  label: string;
  value: string;
};

export type ToolCapabilityItem = {
  title: string;
  description: string;
};

export type ToolPricingTier = {
  name: string;
  price: string;
  details: string;
};

export type ToolPrivacyItem = {
  label: string;
  value: string;
};

export type QuickStartStep = {
  title: string;
  duration: string;
  description: string;
};

export type RelatedToolItem = {
  slug: string;
  name: string;
  reason: string;
};

export type ToolSourceLink = {
  label: string;
  url: string;
};

export type ToolDetailEntry = {
  slug: string;
  name: string;
  eyebrow: string;
  heroPainPoint: string[];
  overview: ToolOverviewItem[];
  positioning: string;
  capabilities: ToolCapabilityItem[];
  scores: Record<ToolScoreKey, ToolScore>;
  pros: string[];
  cons: string[];
  pricing: {
    freeTier: string;
    billing: string;
    plans: ToolPricingTier[];
    teamPlan: string;
    notes: string[];
  };
  privacy: ToolPrivacyItem[];
  suitableFor: string[];
  notSuitableFor: string[];
  quickStart: QuickStartStep[];
  relatedTools: RelatedToolItem[];
  sourceLinks: ToolSourceLink[];
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
};
