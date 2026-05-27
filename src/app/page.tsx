import type { Metadata } from "next";

import { HomeExperience } from "@/components/home/HomeExperience";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "AI Coding Tools Comparison",
  description:
    "Find the right AI coding assistant with source-backed pricing, scenario-based recommendations, and a developer-friendly comparison table.",
};

/**
 * Renders the first implemented version of the home page.
 */
export default function Home() {
  return (
    <SiteShell>
      <HomeExperience />
    </SiteShell>
  );
}
