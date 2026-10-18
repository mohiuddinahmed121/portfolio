import { certificates } from "@/data/portfolio";

export default function Certificates() {
   return (
      <section id="certificates" className="bg-slate-900/60 py-24">
         <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm uppercase tracking-widest text-orange-500">Achievements</p>

            <h2 className="mt-2 text-3xl font-bold text-white">Certificates &amp; Hackathons</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
               {certificates.map((c) => (
                  <article
                     key={c.title}
                     className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40"
                  >
                     <a
                        href={c.pdf || c.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${c.title} certificate`}
                        className="block w-full overflow-hidden bg-white"
                     >
                        <img
                           src={c.image}
                           alt={`${c.title} certificate`}
                           loading="lazy"
                           className="block h-auto w-full object-contain"
                        />
                     </a>

                     <div className="p-5">
                        <h3 className="font-semibold text-white">{c.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">{c.description}</p>

                        <p className="mt-3 text-sm text-slate-300">{c.issuer}</p>

                        <p className="text-sm text-orange-400">{c.date}</p>

                        {c.pdf && (
                           <a
                              href={c.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-block text-sm font-medium text-orange-400 transition hover:text-orange-300"
                           >
                              View PDF ↗
                           </a>
                        )}
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
