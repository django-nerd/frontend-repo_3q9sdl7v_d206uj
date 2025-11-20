import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BookOpen, Sparkles, BadgeCheck } from 'lucide-react'

const courses = [
  { title: 'Starter Pack', level: 'A1', lessons: 18, color: 'from-sky-50 to-white', icon: BookOpen },
  { title: 'Everyday English', level: 'A2', lessons: 22, color: 'from-emerald-50 to-white', icon: Sparkles },
  { title: 'Travel Basics', level: 'A2', lessons: 16, color: 'from-slate-50 to-white', icon: BadgeCheck },
]

export default function Courses() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="mt-2 text-slate-600">Pick a calm path and level up with bite-sized lessons.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map(({ title, level, lessons, color, icon: Icon }) => (
            <div key={title} className={`rounded-2xl border border-gray-100 bg-gradient-to-br ${color} p-5 shadow-sm`}> 
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                    <Icon size={20} className="text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-slate-600">Level {level}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-800">{lessons} lessons</span>
              </div>
              <button className="mt-5 w-full rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 transition-colors">Start</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
