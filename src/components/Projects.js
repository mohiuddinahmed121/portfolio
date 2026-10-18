import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-widest text-orange-500">
          Accomplishments
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white">My Projects</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition hover:-translate-y-1 hover:border-orange-500/50"
            >
              {/* Screenshot: image file na thakle gradient dekhabe */}
              <div
                className="h-40 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${p.image}), linear-gradient(135deg, #1e293b, #334155)`,
                }}
                role="img"
                aria-label={`${p.title} preview`}
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-white group-hover:text-orange-400">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  {p.details ? (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
                    >
                      View Details
                    </Link>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-orange-500 px-5 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500 hover:text-white"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
