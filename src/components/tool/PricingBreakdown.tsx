import type { ToolDetailEntry } from "@/types/tool";

type PricingBreakdownProps = {
  pricing: ToolDetailEntry["pricing"];
};

/**
 * Renders the pricing section shared by all tool pages.
 */
export function PricingBreakdown({ pricing }: PricingBreakdownProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
      <div className="mb-6">
        <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
          Pricing breakdown
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          What you actually pay for and where the caveats start.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-zinc-300">Free tier</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{pricing.freeTier}</p>
        </article>
        <article className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
          <p className="text-sm font-medium text-zinc-300">Billing model</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{pricing.billing}</p>
        </article>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {pricing.plans.map((plan) => (
          <article key={plan.name} className="rounded-3xl border border-white/8 bg-[#0f1420] p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <span className="rounded-full bg-[#0d2c24] px-3 py-1 text-sm font-semibold text-[#b6f6d6]">
                {plan.price}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{plan.details}</p>
          </article>
        ))}
      </div>
      <article className="mt-5 rounded-3xl border border-white/8 bg-white/[0.03] p-5">
        <p className="text-sm font-medium text-zinc-300">Team / enterprise</p>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{pricing.teamPlan}</p>
      </article>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-500">
        {pricing.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
