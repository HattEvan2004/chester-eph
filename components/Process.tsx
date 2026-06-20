const steps = [
  {
    no: "1",
    title: "Reach Out",
    copy: "Call, message, or request an estimate.",
  },
  {
    no: "2",
    title: "Tell Us What You Need",
    copy: "Share the details of the job for your home or business.",
  },
  {
    no: "3",
    title: "Get It Done Right",
    copy: "A skilled team handles the work with care, quality, and attention to detail.",
  },
];

export default function Process() {
  return (
    <section className="bg-paper">
      <div className="shell py-16 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow text-pipe">How it works</span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] text-ink md:text-6xl">
            Getting service
            <br />
            is simple.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* desktop conduit run */}
          <span
            className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-charcoal/30 md:block"
            aria-hidden
          />
          {/* mobile vertical run */}
          <span
            className="absolute bottom-4 left-8 top-4 border-l-2 border-dashed border-charcoal/30 md:hidden"
            aria-hidden
          />

          <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <li key={s.no} className="relative flex gap-6 md:block">
                {/* node */}
                <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full border-2 border-ink bg-volt">
                  <span className="font-display text-2xl font-black text-ink">
                    {s.no}
                  </span>
                </div>
                <div className="md:mt-7 md:pr-8">
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-charcoal/75">
                    {s.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
