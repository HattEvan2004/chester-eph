import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-paper">
      {/* conduit divider */}
      <div className="flex items-center gap-3 px-5 py-4 md:px-10" aria-hidden>
        <span className="h-px flex-1 bg-paper/15" />
        <span className="h-3 w-3 rounded-full border-2 border-paper/40" />
        <span className="h-2 w-2 bg-volt" />
        <span className="h-2 w-2 bg-pipe" />
        <span className="h-2 w-2 bg-copper" />
        <span className="h-3 w-3 rounded-full border-2 border-paper/40" />
        <span className="h-px flex-1 bg-paper/15" />
      </div>

      <div className="shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt={site.name}
            width={300}
            height={120}
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
            Family owned and operated, serving {site.area} since {site.since}.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-stamp text-xs uppercase tracking-[0.14em] text-paper/50">
            <span className="text-volt">Electrical</span>
            <span>&middot;</span>
            <span className="text-pipe-light">Plumbing</span>
            <span>&middot;</span>
            <span className="text-copper-light">Heating</span>
          </div>
        </div>

        {/* Coverage */}
        <div>
          <h3 className="font-stamp text-xs uppercase tracking-stamp text-paper/50">
            What we serve
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Repairs &amp; service calls</li>
            <li>Renovations</li>
            <li>New construction</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-stamp text-xs uppercase tracking-stamp text-paper/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phone.general.tel}`}
                className="font-display text-lg font-extrabold text-paper hover:text-volt"
              >
                {site.phone.general.label}
              </a>
            </li>
            <li className="text-paper/80">
              Electrical &mdash;{" "}
              <a
                href={`tel:${site.phone.electrical.tel}`}
                className="hover:text-volt"
              >
                {site.phone.electrical.name} {site.phone.electrical.label}
              </a>
            </li>
            <li className="text-paper/80">
              Plumbing &mdash;{" "}
              <a
                href={`tel:${site.phone.plumbing.tel}`}
                className="hover:text-volt"
              >
                {site.phone.plumbing.name} {site.phone.plumbing.label}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-paper/80 hover:text-volt"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 hover:text-volt"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-paper/15">
        <div className="shell flex flex-col items-start justify-between gap-2 py-5 font-stamp text-[0.7rem] uppercase tracking-[0.14em] text-paper/45 sm:flex-row sm:items-center">
          <span>
            &copy; {year} {site.name}
          </span>
          <span>Serving {site.area}</span>
        </div>
      </div>
    </footer>
  );
}
