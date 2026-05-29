import type { ToolComparisonRow, ToolDetailEntry } from "@/types/tool";

export type ModelComparisonRow = Omit<ToolComparisonRow, "highlight"> & {
  addedAt: string;
  highlight?: "New" | "Frontier" | "Best Value";
};

export type ModelDetailEntry = ToolDetailEntry;
