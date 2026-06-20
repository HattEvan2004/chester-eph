import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
      {/* vertical trade-run rail */}
      <div
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-hairline lg:block"
        aria-hidden
      />

      <div className="shell relative grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="flex flex-col justify-center py-12 lg:py-24 lg:pr-14">
          <span className="eyebrow text-copper">
            Chester, Nova Scotia &middot; Est. {site.since}
          </span>

          <h1 className="mt-6 font-display text-[2.7rem] font-black uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[4.4rem]">
            Chester&rsquo;s Trusted{" "}
            <span className="text-volt-deep">Electrical</span>,{" "}
            <span className="text-pipe">Plumbing</span> &amp;{" "}
            <span className="text-copper">Heating</span> Team
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Family owned and operated since {site.since}, delivering quality
            craftsmanship for homes, businesses, repairs, renovations, and new
            construction.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Get an Estimate
            </a>
            <a
              href={`tel:${site.phone.general.tel}`}
              className="btn btn-dark"
            >
              Call {site.phone.general.label}
            </a>
          </div>

          {/* Service / segment strip */}
          <div className="mt-12 border-t-2 border-ink pt-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-stamp text-sm uppercase tracking-[0.14em] text-charcoal">
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 bg-volt" /> Electrical
              </span>
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 bg-pipe" /> Plumbing
              </span>
              <span className="flex items-center gap-2">
                <i className="h-2.5 w-2.5 bg-copper" /> Heating
              </span>
              <span className="mx-1 hidden h-4 w-px bg-hairline sm:block" />
              <span className="text-warmgrey">Residential</span>
              <span className="text-warmgrey">&middot;</span>
              <span className="text-warmgrey">Commercial</span>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative min-h-[340px] lg:min-h-full">
          <div className="relative h-full w-full overflow-hidden border-x-2 border-b-2 border-ink lg:border-b-2 lg:border-r-0">
            <div
              className="absolute inset-0 bg-charcoal bg-cover bg-[20%_center]"
              style={{ backgroundImage: "url('/images/hero.jpg')" }}
              role="img"
              aria-label="Chester EPH crew working on site"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,10,9,0.15) 0%, rgba(11,10,9,0.55) 100%)",
              }}
              aria-hidden
            />
            {/* corner ticks */}
            <Ticks />

            {/* Since stamp */}
            <div className="absolute bottom-5 left-5 flex h-[104px] w-[104px] flex-col items-center justify-center rounded-full border-2 border-volt bg-ink/85 text-center text-paper backdrop-blur sm:h-32 sm:w-32">
              <span className="font-stamp text-[0.62rem] uppercase tracking-stamp text-volt">
                Since
              </span>
              <span className="font-display text-3xl font-black leading-none sm:text-4xl">
                1988
              </span>
              <span className="mt-1 font-stamp text-[0.55rem] uppercase tracking-[0.18em] text-paper/70">
                Built Right
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticks() {
  const base =
    "absolute h-4 w-4 border-paper/50";
  return (
    <div aria-hidden>
      <span className={`${base} left-3 top-3 border-l-2 border-t-2`} />
      <span className={`${base} right-3 top-3 border-r-2 border-t-2`} />
      <span className={`${base} bottom-3 right-3 border-b-2 border-r-2`} />
    </div>
  );
}
