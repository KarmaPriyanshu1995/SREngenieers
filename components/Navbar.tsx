"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phone = BUSINESS.phones[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-steel-600/50 bg-steel-950/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-display text-lg font-extrabold uppercase tracking-wide text-white"
          >
            SR <span className="text-hydraulic">Engineering</span> Works
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium uppercase tracking-wide text-steel-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${phone.tel}`}
            className="hidden rounded-sm bg-hydraulic px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide text-steel-950 transition-colors hover:bg-white md:block"
          >
            Call Now
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <button
              aria-hidden
              tabIndex={-1}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-steel-950/60 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col gap-6 border-l border-steel-600 bg-steel-950 p-6 pt-24 md:hidden"
            >
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold uppercase text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${phone.tel}`}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-sm bg-hydraulic px-4 py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-steel-950"
              >
                Call Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
