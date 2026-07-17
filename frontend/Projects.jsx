const PROJECTS = [
  {
    name: "Aplikasi Manajemen Tugas",
    role: "Full-Stack",
    stack: "React · Express · PostgreSQL",
    status: "Live",
    desc: "Aplikasi to-do kolaboratif dengan autentikasi pengguna, papan kanban, dan notifikasi real-time.",
  },
  {
    name: "Dashboard Analitik Penjualan",
    role: "Frontend",
    stack: "React · Recharts · Tailwind",
    status: "Live",
    desc: "Dashboard interaktif untuk memvisualisasikan data penjualan bulanan dengan filter dinamis.",
  },
  {
    name: "API Inventaris Toko",
    role: "Backend",
    stack: "Node.js · Express · SQLite",
    status: "In progress",
    desc: "REST API untuk mengelola stok barang, lengkap dengan dokumentasi dan validasi input.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-t border-ink-line">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-lg">
          <p className="section-label mb-2">03 — Proyek</p>
          <h2 className="font-display text-3xl font-semibold text-paper">
            Pekerjaan Terpilih
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="blueprint-frame border border-ink-line bg-ink-card/40 p-6 flex flex-col gap-4 hover:border-teal/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {p.name}
                </h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 border rounded-sm shrink-0 ${
                    p.status === "Live"
                      ? "border-teal text-teal"
                      : "border-amber text-amber"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>

              <dl className="mt-auto font-mono text-xs text-muted space-y-1 pt-4 border-t border-ink-line">
                <div className="flex gap-2">
                  <dt className="text-teal">role:</dt>
                  <dd>{p.role}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-teal">stack:</dt>
                  <dd>{p.stack}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
