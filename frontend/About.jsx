export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-ink-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-12">
        <div>
          <p className="section-label mb-2">01 — Tentang</p>
          <h2 className="font-display text-3xl font-semibold text-paper">
            Latar Belakang
          </h2>
        </div>

        <div className="space-y-5 text-muted leading-relaxed max-w-2xl">
          <p>
            Saya adalah pengembang web yang senang mengerjakan proyek secara
            menyeluruh — dari merancang skema basis data, menulis API, hingga
            menyusun antarmuka yang enak dipakai. Bagi saya, kode yang baik
            adalah kode yang mudah dipahami orang lain enam bulan dari
            sekarang, termasuk oleh diri saya sendiri.
          </p>
          <p>
            Beberapa tahun terakhir saya berfokus pada ekosistem JavaScript —
            React di sisi antarmuka, dan Node.js/Express di sisi server —
            dengan perhatian khusus pada performa, aksesibilitas, dan
            struktur kode yang mudah dirawat.
          </p>
          <p>
            Di luar coding, saya suka menulis catatan teknis singkat tentang
            hal-hal yang saya pelajari — beberapa di antaranya bisa dibaca di
            bagian{" "}
            <a href="#blog" className="text-teal hover:text-amber">
              Tulisan
            </a>{" "}
            di halaman ini.
          </p>
        </div>
      </div>
    </section>
  );
}
