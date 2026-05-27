import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ScenarioComparisonTable } from "@/components/compare/ScenarioComparisonTable";
import { ScenarioHero } from "@/components/compare/ScenarioHero";
import { ScenarioNavLinks } from "@/components/compare/ScenarioNavLinks";
import { ScenarioVerdictCard } from "@/components/compare/ScenarioVerdictCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { getScenarioEntries, getScenarioEntry } from "@/content/scenarios";

type ScenarioPageProps = {
  params: Promise<{ scenario: string }>;
};

/**
 * Returns the static params for implemented scenario pages.
 */
export function generateStaticParams() {
  return getScenarioEntries().map((entry) => ({ scenario: entry.slug }));
}

/**
 * Generates route metadata for a single scenario page.
 */
export async function generateMetadata({
  params,
}: ScenarioPageProps): Promise<Metadata> {
  const { scenario } = await params;
  const entry = getScenarioEntry(scenario);

  if (!entry) {
    return {
      title: "Scenario not found",
    };
  }

  return {
    title: entry.seo.title,
    description: entry.seo.description,
    alternates: {
      canonical: entry.seo.canonicalPath,
    },
  };
}

/**
 * Renders a statically generated scenario comparison page.
 */
export default async function ScenarioPage({ params }: ScenarioPageProps) {
  const { scenario } = await params;
  const entry = getScenarioEntry(scenario);

  if (!entry) {
    notFound();
  }

  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10 lg:py-16">
        <ScenarioHero
          eyebrow={entry.eyebrow}
          title={entry.title}
          painPoint={entry.painPoint}
        />
        <ScenarioComparisonTable
          columns={entry.tableColumns}
          comparedTools={entry.comparedTools}
        />
        <ScenarioVerdictCard
          recommendation={entry.recommendation}
          notRecommendedFor={entry.notRecommendedFor}
        />
        <ScenarioNavLinks items={entry.otherScenarios} />
      </div>
    </SiteShell>
  );
}
