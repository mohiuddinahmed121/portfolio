import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-sm uppercase tracking-widest text-orange-500">My intro</p>
      <h2 className="mt-2 text-3xl font-bold text-white">About Me</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="space-y-4 text-slate-300 md:col-span-2">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {profile.interests.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/15 px-4 py-1 text-sm text-slate-300"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <dl className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm">
          <div>
            <dt className="text-slate-500">Name</dt>
            <dd className="text-slate-200">{profile.name}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Location</dt>
            <dd className="text-slate-200">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Email</dt>
            <dd className="break-all text-slate-200">{profile.email}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Phone</dt>
            <dd className="text-slate-200">{profile.phone}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
