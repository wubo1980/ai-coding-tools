import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
};

const base = "https://ai-coding-tools-psi.vercel.app";

const toolSlugs = ["copilot", "cursor", "claude-code", "claude-api", "codex", "gemini-code-assist", "windsurf"];

export default function sitemap() {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/compare/front-end-dev`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/compare/budget-developer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...toolSlugs.map((slug) => ({
      url: `${base}/tool/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}