import type { ScenarioEntry } from "@/types/scenario";

import { budgetDeveloperScenario } from "@/content/scenarios/budget-developer";
import { frontEndDevScenario } from "@/content/scenarios/front-end-dev";

export const scenarioEntries: ScenarioEntry[] = [
  frontEndDevScenario,
  budgetDeveloperScenario,
];

/**
 * Returns all implemented scenario pages.
 */
export function getScenarioEntries() {
  return scenarioEntries;
}

/**
 * Resolves a single scenario entry by slug.
 */
export function getScenarioEntry(scenario: string) {
  return scenarioEntries.find((entry) => entry.slug === scenario);
}
