import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/SiteShell";
import { AudienceFitGrid } from "@/components/tool/AudienceFitGrid";
import { PricingBreakdown } from "@/components/tool/PricingBreakdown";
import { ProsConsGrid } from "@/components/tool/ProsConsGrid";
import { QuickStartSteps } from "@/components/tool/QuickStartSteps";
import { RelatedToolsSection } from "@/components/tool/RelatedToolsSection";
import { ToolScorePanel } from "@/components/tool/ToolScorePanel";
import { getToolDetailEntries, getToolDetailEntry } from "@/content/tools";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Returns the static params for the implemented tool detail pages.
 */
export function generateStaticParams() {
  return getToolDetailEntries().map((entry) => ({ slug: entry.slug }));
}

/**
 * Generates route-level metadata for a tool detail page.
 */
export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolDetailEntry(slug);

  if (!tool) {
    return {
      title: "Tool not found",
    };
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
    alternates: {
      canonical: tool.seo.canonicalPath,
    },
  };
}

/**
 * Renders a statically generated tool detail page.
 */
export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolDetailEntry(slug);

  if (!tool) {
    notFound();
  }

  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10 lg:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              {tool.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {tool.name}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-300">
              {tool.heroPainPoint.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              Overview
            </p>
            <dl className="mt-5 space-y-4">
              {tool.overview.map((item) => (
                <div key={item.label} className="border-b border-white/8 pb-4 last:border-b-0">
                  <dt className="text-sm font-medium text-zinc-400">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-7 text-zinc-400">{tool.positioning}</p>
          </aside>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Core capabilities
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {tool.capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-5"
              >
                <h2 className="text-lg font-semibold text-white">{capability.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ToolScorePanel scores={tool.scores} />

        <ProsConsGrid pros={tool.pros} cons={tool.cons} />

        <PricingBreakdown pricing={tool.pricing} />

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Privacy
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {tool.privacy.map((item) => (
              <article key={item.label} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <h2 className="text-sm font-medium text-zinc-300">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <AudienceFitGrid
          suitableFor={tool.suitableFor}
          notSuitableFor={tool.notSuitableFor}
        />

        <QuickStartSteps steps={tool.quickStart} />

        <RelatedToolsSection items={tool.relatedTools} />

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Source links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            {tool.sourceLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {link.label}: {link.url}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
