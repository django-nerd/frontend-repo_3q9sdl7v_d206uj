import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/progress', label: 'Progress' },
  { to: '/profile', label: 'Profile' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-200 to-emerald-200 border border-white shadow-inner flex items-center justify-center">
            <span className="text-sky-700 font-bold">EN</span>
          </div>
          <span className="font-semibold text-slate-800">iLearn</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === item.to
                  ? 'bg-sky-100 text-sky-800'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-gray-100 bg-white">
          <div className="flex flex-col gap-2 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === item.to
                    ? 'bg-sky-100 text-sky-800'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
