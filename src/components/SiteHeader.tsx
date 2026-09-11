"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Flight Experience" },
  { href: "#training", label: "Training" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-panel-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-wide whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          EMMANUEL <span className="text-accent">OFUJE JAMES</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium whitespace-nowrap text-muted lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-2 lg:inline-block"
        >
          Get in Touch
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-panel-border p-2.5 text-foreground lg:hidden"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-panel-border/70 bg-background px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-panel hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-navy-2"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
