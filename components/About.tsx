export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper-2">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden />
      <div className="shell relative grid items-center gap-12 py-16 md:py-28 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink sm:aspect-[5/4] lg:aspect-[4/5]">
            <div
              className="absolute inset-0 bg-charcoal bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about.svg')" }}
              role="img"
              aria-label="The Chester EPH family crew"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,10,9,0) 45%, rgba(11,10,9,0.55) 100%)",
              }}
              aria-hidden
            />
          </div>
          {/* Est. mark */}
          <div className="absolute -bottom-6 -right-3 flex flex-col items-center border-2 border-ink bg-volt px-6 py-4 text-ink shadow-lift sm:-right-6">
            <span className="font-stamp text-[0.62rem] uppercase tracking-stamp">
              Established
            </span>
            <span className="font-display text-4xl font-black leading-none">
              1988
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow text-copper">Our story</span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] text-ink md:text-6xl">
            Built on quality
            <br />
            craftsmanship.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Since 1988, Chester Electrical, Plumbing, and Heating has served
            homes and businesses in and around Chester with dependable
            electrical, plumbing, and heating work. As a family owned and
            operated company, our reputation has been built through skilled
            work, reliable service, and a commitment to doing the job right.
          </p>

          {/* Marks row */}
          <div className="mt-9 grid grid-cols-3 border-t-2 border-ink">
            {[
              { k: "35+", v: "Years serving" },
              { k: "100%", v: "Family run" },
              { k: "3", v: "Trades, one team" },
            ].map((m) => (
              <div
                key={m.v}
                className="border-r-2 border-ink py-5 pr-4 last:border-r-0"
              >
                <div className="font-display text-3xl font-black text-ink md:text-4xl">
                  {m.k}
                </div>
                <div className="mt-1 font-stamp text-[0.7rem] uppercase tracking-[0.14em] text-warmgrey">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-dark mt-9">
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
}
