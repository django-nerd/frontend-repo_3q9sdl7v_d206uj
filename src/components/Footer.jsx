export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 text-slate-300 border-t border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 LingoFlow — Learn calmly, every day.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  )
}
