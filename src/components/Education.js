import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="bg-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <ol className="mt-10 space-y-6 border-l border-orange-500/40 pl-6">
          {education.map((e) => (
            <li key={e.school} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-orange-500" />
              <h3 className="text-lg font-semibold text-white">{e.school}</h3>
              <p className="text-slate-400">{e.detail}</p>
              <p className="text-sm text-orange-400">{e.period}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
