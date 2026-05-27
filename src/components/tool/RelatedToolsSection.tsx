import Link from "next/link";

import type { RelatedToolItem } from "@/types/tool";

type RelatedToolsSectionProps = {
  items: RelatedToolItem[];
};

/**
 * Renders the related-tools links section shared across tool pages.
 */
export function RelatedToolsSection({ items }: RelatedToolsSectionProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
      <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
        Related tools
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/tool/${item.slug}`}
            className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-[#10b981]/40 hover:bg-white/[0.05]"
          >
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{item.reason}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
