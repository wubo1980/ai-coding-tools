"use client";

import { useMemo, useState } from "react";

import { HeroSection } from "@/components/home/HeroSection";
import { ToolComparisonTable } from "@/components/home/ToolComparisonTable";
import { toolComparisonRows } from "@/content/tools";

/**
 * Filters the comparison dataset by a free-form search query.
 */
function filterTools(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return toolComparisonRows;
  }

  return toolComparisonRows.filter((tool) =>
    [tool.name, tool.vendor, tool.category, tool.coreCapability, tool.audience, ...tool.bestFor, ...tool.searchTerms]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery),
  );
}

/**
 * Composes the interactive hero and comparison table for the home page.
 */
export function HomeExperience() {
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => filterTools(query), [query]);
  const recommendationNames = filteredTools.slice(0, 3).map((tool) => tool.name);
  const emptyMessage =
    "No direct match yet. Try front-end, refactor, CI/CD, enterprise, or budget to narrow the list.";

  return (
    <>
      <HeroSection
        query={query}
        recommendationNames={recommendationNames}
        onQueryChange={setQuery}
      />
      <ToolComparisonTable tools={filteredTools} emptyMessage={emptyMessage} />
    </>
  );
}
