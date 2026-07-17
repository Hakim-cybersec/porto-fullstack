import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 border-t border-ink-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[220px_1fr] gap-12">
        <div>
          <p className="section-label mb-2">05 — Kontak</p>
          <h2 className="font-display text-3xl font-semibold text-paper">
            Mari Berdiskusi
          </h2>
          <p className="text-muted mt-3 text-sm max-w-xs">
            Punya proyek atau peluang kerja sama? Kirim pesan lewat form ini,
            saya akan balas secepatnya.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-5">
          <Field
            label="Nama"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div>
            <label htmlFor="message" className="section-label block mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-ink-card border border-ink-line focus:border-teal rounded-sm px-4 py-3 text-paper text-sm outline-none transition-colors"
              placeholder="Ceritakan sedikit tentang proyek Anda…"
            />
            {errors.message && (
              <p className="text-amber text-xs font-mono mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Mengirim…" : "Kirim pesan"}
          </button>

          {status === "sent" && (
            <p className="font-mono text-sm text-teal">
              Pesan terkirim. Terima kasih sudah menghubungi!
            </p>
          )}
          {status === "error" && Object.keys(errors).length === 0 && (
            <p className="font-mono text-sm text-amber">
              Gagal mengirim pesan. Pastikan server backend berjalan.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="section-label block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-ink-card border border-ink-line focus:border-teal rounded-sm px-4 py-3 text-paper text-sm outline-none transition-colors"
      />
      {error && <p className="text-amber text-xs font-mono mt-1">{error}</p>}
    </div>
  );
}
