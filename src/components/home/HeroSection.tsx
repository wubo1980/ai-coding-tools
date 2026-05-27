"use client";

type HeroSectionProps = {
  query: string;
  recommendationNames: string[];
  onQueryChange: (value: string) => void;
};

/**
 * Renders the hero section with the home page search interaction.
 */
export function HeroSection({
  query,
  recommendationNames,
  onQueryChange,
}: HeroSectionProps) {
  const helperText =
    recommendationNames.length > 0
      ? `Recommended now: ${recommendationNames.join(" · ")}`
      : "Try searches like front-end, refactor, CI/CD, budget, or student.";

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_24%)]" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-10 lg:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-zinc-300 uppercase">
          Objective reviews for global developers
        </span>
        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Can&apos;t find the right AI coding tool? This guide helps you choose.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
          Real comparisons, scenario-based recommendations, and source-backed pricing
          updates for developers who want signal instead of hype.
        </p>
        <div
          id="search"
          className="mt-10 flex w-full max-w-3xl flex-col gap-4 rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <label htmlFor="tool-search" className="sr-only">
            Search by language or scenario
          </label>
          <input
            id="tool-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by language, workflow, team type, or budget..."
            className="h-14 rounded-2xl border border-white/10 bg-[#11151f] px-5 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/30"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-300">{helperText}</p>
            <a
              href="#compare"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#10b981] px-6 text-sm font-semibold text-[#04130d] transition hover:bg-[#34d399]"
            >
              View full comparison
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
