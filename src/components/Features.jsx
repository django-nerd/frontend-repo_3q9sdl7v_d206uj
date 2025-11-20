import { Trophy, CalendarCheck, BarChart3, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Trophy,
    title: 'Game Levels',
    desc: 'Progress through structured levels that build vocabulary and grammar step-by-step.',
    color: 'from-[#F1F0FF] to-white',
  },
  {
    icon: CalendarCheck,
    title: 'Daily Tasks',
    desc: 'Stay consistent with gentle, achievable daily goals and reminders.',
    color: 'from-[#E6FEFF] to-white',
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
    <section id="features" ref={ref} className="py-16 bg-[#F8F8FF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`group rounded-2xl border border-gray-100 bg-gradient-to-br ${color} p-5 shadow-sm will-change-transform transition duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } hover:-translate-y-1 hover:[transform:perspective(800px)_rotateX(1.5deg)_rotateY(-1.5deg)]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                  <Icon size={22} className="text-[#2F2E41]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2F2E41]">{title}</h3>
                  <p className="mt-2 text-[#2F2E41]/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Bonus card */}
          <div className={`lg:col-span-3 rounded-2xl border border-gray-100 bg-gradient-to-r from-[#F1F0FF] via-white to-[#E6FEFF] p-6 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } transition duration-700 ease-out`} style={{ transitionDelay: `${features.length * 80}ms` }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <Sparkles size={18} className="text-[#6C63FF]" />
              </div>
              <p className="text-[#2F2E41]/80 text-sm">
                Subtle animations, soft gradients, and clean layout keep the experience calm and responsive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
