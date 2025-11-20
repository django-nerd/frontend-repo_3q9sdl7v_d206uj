import { Trophy, CalendarCheck, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: 'Game Levels',
    desc: 'Progress through structured levels that build vocabulary and grammar step-by-step.',
    color: 'bg-sky-50 text-sky-700',
    ring: 'ring-sky-100'
  },
  {
    icon: CalendarCheck,
    title: 'Daily Tasks',
    desc: 'Stay consistent with gentle, achievable daily goals and reminders.',
    color: 'bg-emerald-50 text-emerald-700',
    ring: 'ring-emerald-100'
  },
  {
    icon: BarChart3,
    title: 'Progress Bar',
    desc: 'Track your learning journey with a clear, motivating progress indicator.',
    color: 'bg-slate-50 text-slate-700',
    ring: 'ring-slate-100'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-14 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color, ring }) => (
            <div key={title} className={`rounded-2xl border border-gray-100 p-5 ring-1 ${ring} bg-white/70 backdrop-blur-sm`}> 
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
