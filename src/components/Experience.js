import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-sm uppercase tracking-widest text-orange-500">Experience</p>
      <h2 className="mt-2 text-3xl font-bold text-white">Work Experience</h2>

      <div className="mt-10 space-y-6">
        {experience.map((e) => (
          <article
            key={`${e.company}-${e.period}`}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                <p className="text-slate-300">
                  {e.companyUrl ? (
                    <a
                      href={e.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400"
                    >
                      {e.company}
                    </a>
                  ) : (
                    e.company
                  )}
                </p>
              </div>
              <p className="text-sm text-orange-400">{e.period}</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            {e.certificate && (
              <a
                href={e.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium text-orange-400 hover:text-orange-300"
              >
                View experience certificate ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
