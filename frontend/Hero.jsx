export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6">
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <p className="eyebrow mb-4">Spec — Full-Stack Developer</p>
          <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.05] text-paper">
            Nama Anda
            <span className="block text-muted text-2xl md:text-3xl font-normal mt-4">
              Merancang dan membangun produk web dari database sampai
              antarmuka pengguna.
            </span>
          </h1>

          <p className="mt-6 text-muted max-w-xl leading-relaxed">
            Saya membangun aplikasi web yang cepat, rapi secara arsitektur,
            dan enak dipakai — mulai dari desain antarmuka, logika backend,
            sampai skema basis data.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Lihat proyek
            </a>
            <a href="#contact" className="btn-ghost">
              Hubungi saya
            </a>
          </div>
        </div>

        <div className="blueprint-frame bg-ink-card/60 border border-ink-line p-6 font-mono text-sm">
          <p className="section-label mb-4">// status.json</p>
          <dl className="space-y-3">
            <Row k="role" v='"Full-Stack Developer"' />
            <Row k="stack" v='["React", "Node.js", "Express", "SQLite"]' />
            <Row k="location" v='"Indonesia"' />
            <Row k="availability" v='"open for work"' accent />
            <Row k="response_time" v='"< 24 jam"' />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, accent }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink-line/60 pb-2">
      <dt className="text-muted">{k}</dt>
      <dd className={accent ? "text-amber" : "text-paper"}>{v}</dd>
    </div>
  );
}
