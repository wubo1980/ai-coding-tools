type ScenarioHeroProps = {
  eyebrow: string;
  title: string;
  painPoint: string[];
};

/**
 * Renders the opening pain-point section for a scenario page.
 */
export function ScenarioHero({
  eyebrow,
  title,
  painPoint,
}: ScenarioHeroProps) {
  return (
    <section className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_0.75fr]">
      <div>
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-base leading-8 text-zinc-300">
          {painPoint.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <aside className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          What matters here
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
          <li>Focus on the dimensions that actually change the buying decision in this workflow.</li>
          <li>Prefer tools that solve the dominant pain instead of scoring well everywhere in theory.</li>
          <li>Use the verdict section to choose a fit by sub-scenario, not by hype.</li>
        </ul>
      </aside>
    </section>
  );
}
