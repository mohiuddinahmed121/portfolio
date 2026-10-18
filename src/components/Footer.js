import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Facebook", href: profile.facebook },
  ];

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex gap-5">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
