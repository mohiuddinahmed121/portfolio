import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

const detailed = projects.filter((p) => p.details);

export function generateStaticParams() {
  return detailed.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = detailed.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Mohiuddin Ahmed`,
    description: project.description,
  };
}

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = detailed.find((p) => p.slug === slug);
  if (!project) notFound();

  const { details } = project;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 pb-24 pt-28">
        <Link href="/#projects" className="text-sm text-orange-400 hover:text-orange-300">
          ← Back to projects
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold text-white">{project.title}</h1>
        <p className="mt-3 text-slate-400">{project.description}</p>

        <div
          className="mt-8 h-64 rounded-2xl border border-white/10 bg-cover bg-center sm:h-80"
          style={{
            backgroundImage: `url(${project.image}), linear-gradient(135deg, #1e293b, #334155)`,
          }}
          role="img"
          aria-label={`${project.title} preview`}
        />

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Live Project ↗
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              GitHub (Client) ↗
            </a>
          )}
        </div>

        <Section title="Overview">
          <p className="text-slate-300">{details.overview}</p>
        </Section>

        <Section title="Main Technology Stack">
          <div className="flex flex-wrap gap-2">
            {details.stack.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Challenges Faced">
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {details.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title="Potential Improvements & Future Plans">
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {details.improvements.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
