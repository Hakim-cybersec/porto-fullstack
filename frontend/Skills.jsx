const GROUPS = [
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST API", "SQLite / PostgreSQL"],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "Docker", "Vercel / Railway", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-ink-line bg-ink-alt/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-12">
        <div>
          <p className="section-label mb-2">02 — Keahlian</p>
          <h2 className="font-display text-3xl font-semibold text-paper">
            Tools & Teknologi
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-amber uppercase tracking-[0.15em] mb-4">
                {group.label}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-paper text-sm border-l-2 border-ink-line pl-3 py-0.5 hover:border-teal transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
