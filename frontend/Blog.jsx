import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat tulisan");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="blog" className="px-6 py-24 border-t border-ink-line bg-ink-alt/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-lg">
          <p className="section-label mb-2">04 — Tulisan</p>
          <h2 className="font-display text-3xl font-semibold text-paper">
            Catatan & Log
          </h2>
          <p className="text-muted mt-3 text-sm">
            Diambil langsung dari API backend — coba tambahkan tulisan baru
            lewat database untuk melihatnya muncul di sini.
          </p>
        </div>

        {status === "loading" && (
          <p className="font-mono text-sm text-muted">Memuat tulisan…</p>
        )}

        {status === "error" && (
          <p className="font-mono text-sm text-amber">
            Tidak bisa memuat tulisan. Pastikan server backend berjalan di
            port 4000.
          </p>
        )}

        {status === "ok" && posts.length === 0 && (
          <p className="font-mono text-sm text-muted">Belum ada tulisan.</p>
        )}

        <div className="space-y-0">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className="grid md:grid-cols-[140px_1fr] gap-4 py-6 border-b border-ink-line group"
            >
              <div className="font-mono text-xs text-muted">
                {formatDate(post.published_at)}
                <span className="block mt-1 text-teal">{post.tag}</span>
              </div>
              <div>
                <h3 className="font-display text-lg text-paper group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDate(iso) {
  const d = new Date(iso.replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
