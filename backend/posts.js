const express = require("express");
const db = require("../db");

const router = express.Router();

// GET /api/posts — daftar semua tulisan, terbaru dulu
router.get("/", (req, res) => {
  const posts = db
    .prepare(
      `SELECT id, slug, title, excerpt, tag, published_at
       FROM posts ORDER BY published_at DESC`
    )
    .all();

  res.json(posts);
});

// GET /api/posts/:slug — detail satu tulisan
router.get("/:slug", (req, res) => {
  const post = db
    .prepare(`SELECT * FROM posts WHERE slug = ?`)
    .get(req.params.slug);

  if (!post) {
    return res.status(404).json({ error: "Tulisan tidak ditemukan." });
  }

  res.json(post);
});

module.exports = router;
