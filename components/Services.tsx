import { site } from "@/lib/site";

type Service = {
  no: string;
  key: string;
  title: string;
  copy: string;
  image: string;
  accentText: string;
  accentBg: string;
  rail: string;
  tint: string;
};

const services: Service[] = [
  {
    no: "01",
    key: "Electrical",
    title: "Electrical",
    copy: "Repairs, wiring, upgrades, panels, service calls, and new construction support.",
    image: "/images/electrical.svg",
    accentText: "text-volt-deep",
    accentBg: "bg-volt",
    rail: "bg-volt",
    tint: "linear-gradient(135deg, rgba(244,180,0,0.20), rgba(11,10,9,0.78))",
  },
  {
    no: "02",
    key: "Plumbing",
    title: "Plumbing",
    copy: "Leaks, repairs, fixtures, water lines, renovations, and dependable plumbing service.",
    image: "/images/plumbing.svg",
    accentText: "text-pipe",
    accentBg: "bg-pipe",
    rail: "bg-pipe",
    tint: "linear-gradient(135deg, rgba(44,92,127,0.30), rgba(11,10,9,0.80))",
  },
  {
    no: "03",
    key: "Heating",
    title: "Heating",
    copy: "Heating service, repairs, installs, and comfort solutions for homes and businesses.",
    image: "/images/heating.svg",
    accentText: "text-copper",
    accentBg: "bg-copper",
    rail: "bg-copper",
    tint: "linear-gradient(135deg, rgba(181,83,30,0.30), rgba(11,10,9,0.80))",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper">
      {/* Section header */}
      <div className="shell border-b-2 border-ink py-14 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-charcoal">What we do</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] text-ink md:text-6xl">
              Three trades.
              <br />
              One dependable team.
            </h2>
          </div>
          <p className="max-w-sm text-charcoal/75 md:pb-2">
            From a single service call to a full build, the same crew handles
            your electrical, plumbing, and heating &mdash; done right the first
            time.
          </p>
        </div>
      </div>

      {/* Service rows */}
      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.key} service={s} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <article
      className={`overflow-hidden border-b-2 border-ink ${
        flip ? "bg-paper-2" : "bg-paper"
      }`}
    >
      <div
        className={`shell grid items-stretch gap-0 lg:grid-cols-2 ${
          flip ? "" : ""
        }`}
      >
        {/* Text cell */}
        <div
          className={`relative flex flex-col justify-center py-12 lg:py-20 ${
            flip ? "lg:order-2 lg:pl-16" : "lg:pr-16"
          }`}
        >
          {/* colored rail */}
          <span
            className={`absolute top-12 hidden h-[calc(100%-6rem)] w-1.5 lg:block ${
              service.rail
            } ${flip ? "right-0" : "left-0"}`}
            aria-hidden
          />
          {/* ghost number */}
          <span
            className="pointer-events-none absolute -top-2 right-2 select-none font-display text-[7rem] font-black leading-none text-ink/[0.05] lg:text-[10rem]"
            aria-hidden
          >
            {service.no}
          </span>

          <span className={`eyebrow ${service.accentText}`}>
            Service No. {service.no}
          </span>
          <h3 className="mt-4 font-display text-5xl font-black uppercase leading-none text-ink md:text-7xl">
            {service.title}
          </h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
            {service.copy}
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="#contact"
              className={`request-link ${service.accentText}`}
            >
              Request Service
              <Arrow />
            </a>
            <span className="h-px w-16 bg-hairline" aria-hidden />
            <a
              href={`tel:${site.phone.general.tel}`}
              className="font-stamp text-sm uppercase tracking-[0.12em] text-warmgrey hover:text-charcoal"
            >
              {site.phone.general.label}
            </a>
          </div>
        </div>

        {/* Image cell */}
        <div
          className={`relative min-h-[260px] overflow-hidden lg:min-h-[460px] ${
            flip ? "lg:order-1" : ""
          }`}
        >
          <div
            className="absolute inset-0 bg-charcoal bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
            role="img"
            aria-label={`${service.title} work by Chester EPH`}
          />
          <div
            className="absolute inset-0"
            style={{ background: service.tint }}
            aria-hidden
          />
          <span
            className={`absolute bottom-0 left-0 ${service.accentBg} px-5 py-2 font-stamp text-xs uppercase tracking-stamp text-ink`}
          >
            {service.key}
          </span>
        </div>
      </div>
    </article>
  );
}

function Arrow() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
      <path
        d="M0 6h17M13 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
