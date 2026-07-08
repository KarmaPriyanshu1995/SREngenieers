import { PROCESS } from "@/lib/data";

export default function ProcessStrip() {
  return (
    <div className="relative">
      <div className="absolute left-5 right-5 top-5 hidden border-t border-steel-600 md:block" />

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {PROCESS.map((step, i) => (
          <div
            key={step.step}
            className="relative flex gap-4 md:flex-col md:items-center md:gap-3 md:text-center"
          >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hydraulic bg-steel-950 font-display text-sm font-bold text-hydraulic">
              {step.step}
            </div>

            {i < PROCESS.length - 1 && (
              <span className="absolute bottom-0 left-5 top-10 w-px bg-steel-600 md:hidden" />
            )}

            <div>
              <h4 className="font-display text-base font-bold uppercase tracking-wide text-white">
                {step.title}
              </h4>
              <p className="mt-1 font-body text-sm text-steel-300">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
