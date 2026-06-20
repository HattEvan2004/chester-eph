const panels = [
  {
    eyebrow: "For homeowners",
    title: "Residential",
    copy: "For homeowners needing repairs, upgrades, renovations, or new construction support.",
    image: "/images/residential.svg",
  },
  {
    eyebrow: "For business",
    title: "Commercial",
    copy: "For local businesses, contractors, and property owners who need reliable trade work done right.",
    image: "/images/commercial.svg",
  },
];

export default function ResidentialCommercial() {
  return (
    <section className="bg-ink">
      <div className="relative grid md:grid-cols-2">
        {/* center pipe seam (desktop) */}
        <div
          className="absolute left-1/2 top-0 z-20 hidden h-full -translate-x-1/2 md:block"
          aria-hidden
        >
          <div className="relative h-full w-1 bg-paper">
            <span className="absolute -top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-ink" />
            <span className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-ink" />
            <span className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-paper bg-ink" />
          </div>
        </div>

        {panels.map((p) => (
          <article
            key={p.title}
            className="group relative flex min-h-[440px] items-end overflow-hidden md:min-h-[560px]"
          >
            <div
              className="absolute inset-0 bg-charcoal bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${p.image}')` }}
              role="img"
              aria-label={`${p.title} trade work`}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,10,9,0.25) 0%, rgba(11,10,9,0.88) 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10 w-full p-8 text-paper md:p-12">
              <span className="eyebrow text-volt">{p.eyebrow}</span>
              <h3 className="mt-4 font-display text-5xl font-black uppercase leading-none md:text-6xl">
                {p.title}
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/85">
                {p.copy}
              </p>
              <a
                href="#contact"
                className="request-link mt-7 text-volt"
              >
                Get an Estimate
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
                  <path d="M0 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
