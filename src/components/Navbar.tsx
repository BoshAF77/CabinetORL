"use client";

import { useState } from "react";
import { doctor } from "@/data/doctor";

const links = [
  { label: "Le Docteur", href: "#docteur" },
  { label: "Expertise", href: "#expertise" },
  { label: "Le Cabinet", href: "#cabinet" },
  { label: "Équipements", href: "#equipements" },
  { label: "Galerie", href: "#galerie" },
  { label: "Adresses", href: "#adresses" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bleu/10 bg-ivoire/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-[76px] max-w-wrap items-center justify-between px-6">
        <a href="#" className="font-serif text-xl font-semibold text-bleu">
          {doctor.fullName.replace("Gharbi", "")}
          <span className="text-sauge">Gharbi</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-bleu/80 transition-colors hover:text-sauge"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-[3px] bg-bleu px-5 py-2.5 text-sm text-ivoire transition-colors hover:bg-sauge hover:text-bleu md:inline-block"
        >
          Nous contacter
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-bleu/15 md:hidden"
        >
          <span className="relative block h-[1.5px] w-[18px] bg-bleu before:absolute before:-top-1.5 before:block before:h-[1.5px] before:w-[18px] before:bg-bleu before:content-[''] after:absolute after:top-1.5 after:block after:h-[1.5px] after:w-[18px] after:bg-bleu after:content-['']" />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-bleu/10 bg-ivoire md:hidden">
          {links.concat({ label: "Contact", href: "#contact" }).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-bleu/10 px-6 py-4 text-bleu"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
