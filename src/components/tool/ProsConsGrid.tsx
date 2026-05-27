type ProsConsGridProps = {
  pros: string[];
  cons: string[];
};

/**
 * Renders the reusable strengths and weaknesses grid.
 */
export function ProsConsGrid({ pros, cons }: ProsConsGridProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-[28px] border border-emerald-400/15 bg-emerald-400/[0.05] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#7ef3bf] uppercase">Pros</p>
        <ul className="mt-4 space-y-3">
          {pros.map((item) => (
            <li key={item} className="text-sm leading-7 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="rounded-[28px] border border-rose-400/15 bg-rose-400/[0.05] p-6">
        <p className="text-xs font-medium tracking-[0.24em] text-rose-300 uppercase">Cons</p>
        <ul className="mt-4 space-y-3">
          {cons.map((item) => (
            <li key={item} className="text-sm leading-7 text-zinc-200">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
