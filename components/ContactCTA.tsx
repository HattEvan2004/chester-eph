import { site } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div className="blueprint-dark absolute inset-0" aria-hidden />
      <div className="shell relative grid gap-14 py-16 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Left: pitch + primary call */}
        <div className="flex flex-col">
          <span className="eyebrow text-volt">Get in touch</span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            Need electrical, plumbing, or heating service?
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">
            Get in touch today for an estimate for your home or business in
            Chester and surrounding areas.
          </p>

          {/* Primary phone */}
          <a
            href={`tel:${site.phone.general.tel}`}
            className="group mt-10 inline-flex items-center gap-5 border-y-2 border-paper/20 py-6"
          >
            <span className="font-stamp text-xs uppercase tracking-stamp text-paper/60">
              Call
              <br />
              now
            </span>
            <span className="font-display text-4xl font-black tracking-tight text-volt transition-colors group-hover:text-paper md:text-5xl">
              {site.phone.general.label}
            </span>
          </a>

          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light mt-8 self-start"
          >
            <FacebookIcon />
            Message on Facebook
          </a>
        </div>

        {/* Right: directory */}
        <div className="border-2 border-paper/20 bg-paper/[0.03]">
          <div className="border-b-2 border-paper/20 px-6 py-4 font-stamp text-xs uppercase tracking-stamp text-paper/60 md:px-8">
            Direct lines
          </div>

          <DirectoryRow
            accent="bg-volt"
            label="Electrical"
            name={site.phone.electrical.name}
            number={site.phone.electrical.label}
            tel={site.phone.electrical.tel}
          />
          <DirectoryRow
            accent="bg-pipe"
            label="Plumbing"
            name={site.phone.plumbing.name}
            number={site.phone.plumbing.label}
            tel={site.phone.plumbing.tel}
          />
          <DirectoryRow
            accent="bg-copper"
            label="General"
            name="Any service"
            number={site.phone.general.label}
            tel={site.phone.general.tel}
          />

          <a
            href={`mailto:${site.email}`}
            className="flex items-center justify-between px-6 py-6 transition-colors hover:bg-paper/[0.06] md:px-8"
          >
            <span>
              <span className="block font-stamp text-[0.7rem] uppercase tracking-stamp text-paper/50">
                Email
              </span>
              <span className="mt-1 block text-lg font-semibold text-paper">
                {site.email}
              </span>
            </span>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function DirectoryRow({
  accent,
  label,
  name,
  number,
  tel,
}: {
  accent: string;
  label: string;
  name: string;
  number: string;
  tel: string;
}) {
  return (
    <a
      href={`tel:${tel}`}
      className="flex items-center justify-between gap-4 border-b-2 border-paper/20 px-6 py-6 transition-colors hover:bg-paper/[0.06] md:px-8"
    >
      <span className="flex items-center gap-4">
        <span className={`h-10 w-1.5 ${accent}`} aria-hidden />
        <span>
          <span className="block font-stamp text-[0.7rem] uppercase tracking-stamp text-paper/50">
            {label} &middot; {name}
          </span>
          <span className="mt-1 block font-display text-xl font-extrabold text-paper md:text-2xl">
            {number}
          </span>
        </span>
      </span>
      <Arrow />
    </a>
  );
}

function Arrow() {
  return (
    <svg
      width="22"
      height="13"
      viewBox="0 0 20 12"
      fill="none"
      aria-hidden
      className="flex-none text-paper/60"
    >
      <path d="M0 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.1V14h2.3v7h3.1Z" />
    </svg>
  );
}
