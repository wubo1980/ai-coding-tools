export type ScenarioTableColumn = {
  key: string;
  label: string;
};

export type ScenarioComparedTool = {
  slug: string;
  name: string;
  matchScore: number;
  verdict: string;
  metrics: Record<string, string>;
  prosForScenario: string[];
  consForScenario: string[];
};

export type ScenarioRecommendationItem = {
  slug: string;
  name: string;
  reason: string;
};

export type ScenarioEntry = {
  slug: string;
  title: string;
  eyebrow: string;
  painPoint: string[];
  tableColumns: ScenarioTableColumn[];
  comparedTools: ScenarioComparedTool[];
  recommendation: {
    primary: ScenarioRecommendationItem;
    alternatives: ScenarioRecommendationItem[];
  };
  notRecommendedFor: string[];
  otherScenarios: {
    slug: string;
    title: string;
  }[];
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
};
