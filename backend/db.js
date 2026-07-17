const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "data", "portfolio.db"));

db.pragma("journal_mode = WAL");

// --- Schema ---
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    tag TEXT NOT NULL DEFAULT 'Umum',
    published_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    is_read INTEGER NOT NULL DEFAULT 0
  );
`);

// --- Seed sample posts only if table is empty, so re-runs don't duplicate ---
const count = db.prepare("SELECT COUNT(*) AS c FROM posts").get().c;

if (count === 0) {
  const insert = db.prepare(`
    INSERT INTO posts (slug, title, excerpt, content, tag, published_at)
    VALUES (@slug, @title, @excerpt, @content, @tag, @published_at)
  `);

  const seedPosts = [
    {
      slug: "membangun-portofolio-full-stack",
      title: "Catatan Membangun Portofolio Full-Stack",
      excerpt:
        "Kenapa saya memisahkan frontend dan backend, dan bagaimana keduanya saling berkomunikasi lewat REST API.",
      content:
        "Portofolio ini dibangun dengan React di sisi frontend dan Express + SQLite di sisi backend. Pemisahan ini membuat kode lebih rapi, mudah di-deploy terpisah, dan gampang dikembangkan lebih lanjut, misalnya menambah panel admin untuk mengelola tulisan blog tanpa menyentuh kode.",
      tag: "Engineering",
      published_at: "2026-05-02 09:00:00",
    },
    {
      slug: "belajar-desain-yang-tidak-generik",
      title: "Belajar Membuat Desain yang Tidak Terasa Generik",
      excerpt:
        "Sedikit refleksi tentang memilih palet warna, tipografi, dan elemen khas yang mencerminkan karakter sebuah produk.",
      content:
        "Desain yang baik dimulai dari memahami subjeknya, bukan menempelkan template. Di proyek ini saya memilih nuansa 'blueprint' teknik karena cocok dengan identitas seorang pengembang: presisi, terstruktur, dan sedikit personal lewat detail-detail kecil.",
      tag: "Desain",
      published_at: "2026-06-14 09:00:00",
    },
    {
      slug: "checklist-sebelum-deploy",
      title: "Checklist Kecil Sebelum Deploy ke Production",
      excerpt:
        "Beberapa hal sederhana yang sering terlewat: environment variable, CORS, dan validasi input di backend.",
      content:
        "Sebelum deploy, pastikan environment variable sudah dipisah dari kode, endpoint API sudah divalidasi inputnya, dan CORS dikonfigurasi agar hanya domain frontend yang diizinkan. Hal-hal kecil ini sering jadi sumber bug di production.",
      tag: "Engineering",
      published_at: "2026-07-01 09:00:00",
    },
  ];

  const insertMany = db.transaction((posts) => {
    for (const post of posts) insert.run(post);
  });

  insertMany(seedPosts);
}

module.exports = db;
