import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "LingoFlow cut our onboarding time in half. New hires ship customer-ready messages after a week, not a month.",
    author: 'Sofia — Support Lead'
  },
  {
    quote: "The real-time feedback is gold. I see exactly why a phrasing is more natural and learn it on the spot.",
    author: 'Dev — Product Manager'
  },
  {
    quote: "Micro-lessons fit my commute perfectly. I’ve kept a 42‑day streak without ever feeling overwhelmed.",
    author: 'Mina — Designer'
  },
  {
    quote: "Our team finally sounds consistent across languages. Glossaries and tone presets made it effortless.",
    author: 'Arman — Localization Ops'
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What LingoFlow users say</h2>
        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="rounded-2xl border border-gray-100 bg-white/70 backdrop-blur shadow-md p-8">
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed">“{t.quote}”</p>
                    <p className="mt-4 text-sm text-slate-600">{t.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-slate-900' : 'bg-slate-300 hover:bg-slate-400'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
