const express = require("express");
const db = require("../db");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact — simpan pesan dari form kontak
router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  const errors = {};
  if (!name || !name.trim()) errors.name = "Nama wajib diisi.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "Email tidak valid.";
  if (!message || message.trim().length < 10)
    errors.message = "Pesan minimal 10 karakter.";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const insert = db.prepare(
    `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`
  );
  const result = insert.run(name.trim(), email.trim(), message.trim());

  res.status(201).json({
    id: result.lastInsertRowid,
    message: "Pesan berhasil terkirim. Terima kasih sudah menghubungi!",
  });
});

// GET /api/contact — lihat semua pesan masuk (dipakai untuk cek pesan sendiri,
// idealnya diberi autentikasi sebelum dipakai di production)
router.get("/", (req, res) => {
  const messages = db
    .prepare(`SELECT * FROM messages ORDER BY created_at DESC`)
    .all();

  res.json(messages);
});

module.exports = router;
