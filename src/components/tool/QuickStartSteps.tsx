import type { QuickStartStep } from "@/types/tool";

type QuickStartStepsProps = {
  steps: QuickStartStep[];
};

/**
 * Renders the three-step quick-start section for a tool page.
 */
export function QuickStartSteps({ steps }: QuickStartStepsProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
      <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
        Quick start
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-zinc-400">Step {index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm font-medium text-[#7ef3bf]">{step.duration}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
