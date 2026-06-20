const points = [
  "Family owned and operated",
  "Serving Chester since 1988",
  "Residential and commercial service",
  "Small repairs to new construction",
  "A commitment to doing it right",
];

export default function TrustBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="blueprint-dark absolute inset-0" aria-hidden />
      <div className="shell relative py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-volt">Why Chester trusts us</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl">
              Quality craftsmanship
              <br />
              since day one.
            </h2>
          </div>
          <div className="font-stamp text-right text-sm uppercase tracking-stamp text-paper/60">
            Est. 1988
            <br />
            Chester, N.S.
          </div>
        </div>

        {/* Connected run of credibility points */}
        <ul className="relative mt-14 grid gap-y-10 md:grid-cols-5 md:gap-y-0">
          {/* horizontal run line (desktop) */}
          <span
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-paper/20 md:block"
            aria-hidden
          />
          {points.map((p, i) => (
            <li key={i} className="relative flex gap-4 md:block md:px-4">
              {/* node */}
              <span
                className="mt-0.5 block h-3.5 w-3.5 flex-none rounded-full border-2 border-volt bg-ink md:mb-6"
                aria-hidden
              />
              <div>
                <span className="font-stamp text-xs uppercase tracking-stamp text-volt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 max-w-[14rem] text-base font-medium leading-snug text-paper/90">
                  {p}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
