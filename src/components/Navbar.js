"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
   { href: "/#home", label: "Home" },
   { href: "/#about", label: "About" },
   { href: "/#skills", label: "Skills" },
   { href: "/#experience", label: "Experience" },
   { href: "/#projects", label: "Projects" },
   { href: "/#certificates", label: "Certificates" },
   { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
   const [open, setOpen] = useState(false);

   return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
         <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
            <a href="/#home" className="text-lg font-bold text-white">
               {profile.shortName}
               <span className="text-orange-500">.</span>
            </a>

            <ul className="hidden gap-7 md:flex">
               {links.map((l) => (
                  <li key={l.href}>
                     <a
                        href={l.href}
                        className="text-sm text-slate-300 transition hover:text-orange-400"
                     >
                        {l.label}
                     </a>
                  </li>
               ))}
            </ul>

            <button
               type="button"
               className="md:hidden rounded border border-white/20 px-3 py-1 text-sm text-slate-200"
               aria-label="Toggle menu"
               aria-expanded={open}
               onClick={() => setOpen(!open)}
            >
               {open ? "Close" : "Menu"}
            </button>
         </nav>

         {open && (
            <ul className="border-t border-white/10 bg-slate-950 px-5 py-3 md:hidden">
               {links.map((l) => (
                  <li key={l.href}>
                     <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-slate-300 hover:text-orange-400"
                     >
                        {l.label}
                     </a>
                  </li>
               ))}
            </ul>
         )}
      </header>
   );
}
