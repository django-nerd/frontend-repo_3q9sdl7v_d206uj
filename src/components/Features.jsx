import { Trophy, CalendarCheck, BarChart3, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Trophy,
    title: 'Game Levels',
    desc: 'Progress through structured levels that build vocabulary and grammar step-by-step.',
    color: 'from-sky-50 to-white',
  },
  {
    icon: CalendarCheck,
    title: 'Daily Tasks',
    desc: 'Stay consistent with gentle, achievable daily goals and reminders.',
    color: 'from-emerald-50 to-white',
  },
  {
    icon: BarChart3,
    title: 'Progress Bar',
    desc: 'Track your learning journey with a clear, motivating progress indicator.',
    color: 'from-slate-50 to-white',
  }
]

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section id="features" ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`rounded-2xl border border-gray-100 bg-gradient-to-br ${color} p-5 shadow-sm will-change-transform transition duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                  <Icon size={22} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Bonus card */}
          <div className={`lg:col-span-3 rounded-2xl border border-gray-100 bg-gradient-to-r from-sky-50 via-emerald-50 to-slate-50 p-6 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } transition duration-700 ease-out`} style={{ transitionDelay: `${features.length * 80}ms` }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                <Sparkles size={18} className="text-emerald-600" />
              </div>
              <p className="text-slate-700 text-sm">
                Thoughtful micro-animations, soft gradients, and a clean layout keep the experience calm and responsive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
