type AudienceFitGridProps = {
  suitableFor: string[];
  notSuitableFor: string[];
};

/**
 * Renders the suitable-versus-not-suitable audience section.
 */
export function AudienceFitGrid({
  suitableFor,
  notSuitableFor,
}: AudienceFitGridProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-[28px] border border-blue-400/15 bg-blue-400/[0.05] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-blue-300 uppercase">Good fit</p>
        <ul className="mt-4 space-y-3">
          {suitableFor.map((item) => (
            <li key={item} className="text-sm leading-7 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-zinc-300 uppercase">
          Not ideal
        </p>
        <ul className="mt-4 space-y-3">
          {notSuitableFor.map((item) => (
            <li key={item} className="text-sm leading-7 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
