require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const postsRouter = require("./routes/posts");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- API routes ---
app.use("/api/posts", postsRouter);
app.use("/api/contact", contactRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// --- Serve frontend build in production ---
// Setelah menjalankan `npm run build` di folder frontend, hasilnya (folder
// `dist`) disalin/di-build ke sini agar Express bisa menyajikannya.
const frontendDist = path.join(__dirname, "..", "frontend", "dist");
app.use(express.static(frontendDist));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
