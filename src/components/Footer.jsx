export default function Footer() {
  return (
    <footer className="py-12 bg-[#2F2E41] text-white border-t border-[#1f1e2d] mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 iLearn — Learn calmly, every day.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-[#00D4FF] transition-colors">Privacy</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-[#00D4FF] transition-colors">Terms</a>
          <span aria-hidden>•</span>
          <a href="#" className="hover:text-[#00D4FF] transition-colors">Support</a>
        </div>
      </div>
    </footer>
  )
}
