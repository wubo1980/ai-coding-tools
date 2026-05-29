import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/SiteShell";
import { ModelScorePanel } from "@/components/models/ModelScorePanel";
import { AudienceFitGrid } from "@/components/tool/AudienceFitGrid";
import { PricingBreakdown } from "@/components/tool/PricingBreakdown";
import { ProsConsGrid } from "@/components/tool/ProsConsGrid";
import { QuickStartSteps } from "@/components/tool/QuickStartSteps";
import { RelatedToolsSection } from "@/components/tool/RelatedToolsSection";
import { getModel, getModelEntries } from "@/content/models";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Returns static params for implemented model detail pages.
 */
export function generateStaticParams() {
  return getModelEntries().map((entry) => ({ slug: entry.slug }));
}

/**
 * Generates route metadata for a model detail page.
 */
export async function generateMetadata({
  params,
}: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    return {
      title: "Model not found",
    };
  }

  return {
    title: model.seo.title,
    description: model.seo.description,
    alternates: {
      canonical: model.seo.canonicalPath,
    },
  };
}

/**
 * Renders a statically generated model detail page.
 */
export default async function ModelPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    notFound();
  }

  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10 lg:py-16">
        <section className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              {model.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {model.name}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-300">
              {model.heroPainPoint.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              Overview
            </p>
            <dl className="mt-5 space-y-4">
              {model.overview.map((item) => (
                <div key={item.label} className="border-b border-white/8 pb-4 last:border-b-0">
                  <dt className="text-sm font-medium text-zinc-400">{item.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-7 text-zinc-400">{model.positioning}</p>
          </aside>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Core capabilities
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {model.capabilities.map((capability) => (
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

        <ModelScorePanel scores={model.scores} />

        <ProsConsGrid pros={model.pros} cons={model.cons} />

        <PricingBreakdown pricing={model.pricing} />

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Privacy
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {model.privacy.map((item) => (
              <article key={item.label} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <h2 className="text-sm font-medium text-zinc-300">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <AudienceFitGrid
          suitableFor={model.suitableFor}
          notSuitableFor={model.notSuitableFor}
        />

        <QuickStartSteps steps={model.quickStart} />

        <RelatedToolsSection items={model.relatedTools} />

        <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Source links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            {model.sourceLinks.map((link) => (
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
