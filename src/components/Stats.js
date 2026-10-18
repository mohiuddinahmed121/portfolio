import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-slate-900/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold text-orange-500">{s.value}</p>
            <p className="mt-1 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
