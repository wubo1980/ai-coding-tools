import Link from "next/link";

type ScenarioNavLinksProps = {
  items: {
    slug: string;
    title: string;
  }[];
};

/**
 * Renders the footer navigation for switching between implemented scenarios.
 */
export function ScenarioNavLinks({ items }: ScenarioNavLinksProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
      <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
        Other scenarios
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/compare/${item.slug}`}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[#10b981]/40 hover:bg-white/[0.05]"
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Switch to the {item.title.toLowerCase()} scenario page.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
