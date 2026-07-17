export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-ink-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} Nama Anda. Dibangun dengan React & Express.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal transition-colors">GitHub</a>
          <a href="#" className="hover:text-teal transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-teal transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
