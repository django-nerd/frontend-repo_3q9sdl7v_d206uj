export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© 2025 LingoFlow. Learn calmly, every day.</p>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-800">Privacy</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-slate-800">Terms</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-slate-800">Support</a>
        </div>
      </div>
    </footer>
  )
}
