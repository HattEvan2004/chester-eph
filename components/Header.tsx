"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-ink text-paper/80 md:block">
        <div className="shell flex h-9 items-center justify-between font-stamp text-[0.72rem] uppercase tracking-stamp">
          <span>Serving {site.area} since {site.since}</span>
          <span className="flex items-center gap-6">
            <span className="text-volt">Electrical</span>
            <span className="text-pipe-light">Plumbing</span>
            <span className="text-copper-light">Heating</span>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-hairline bg-paper/95 backdrop-blur"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4 md:h-[80px]">
          <a href="#top" className="flex items-center" aria-label={site.name}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={300}
              height={120}
              priority
              className="h-9 w-auto md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-stamp text-sm uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-volt-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.general.tel}`}
              className="hidden items-center gap-2 font-stamp text-sm uppercase tracking-[0.1em] text-charcoal md:flex"
            >
              <PhoneIcon />
              {site.phone.general.label}
            </a>
            <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              Get an Estimate
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border-2 border-ink lg:hidden"
            >
              <span className="relative block h-[14px] w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-b border-hairline bg-paper lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <nav className="shell flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 font-stamp text-base uppercase tracking-[0.12em] text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a
              href={`tel:${site.phone.general.tel}`}
              className="btn btn-dark w-full"
            >
              Call {site.phone.general.label}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Get an Estimate
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L15.5 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
