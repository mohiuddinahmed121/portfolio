import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-sm uppercase tracking-widest text-orange-500">Skills</p>
      <h2 className="mt-2 text-3xl font-bold text-white">Skills &amp; Technologies</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.group}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <h3 className="font-semibold text-white">{g.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
