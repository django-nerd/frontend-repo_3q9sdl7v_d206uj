import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: 'I finally enjoy practicing every day. The gentle pace and clean visuals keep me focused.',
    author: 'Maya, UX Designer'
  },
  {
    quote: 'The streak and bite-sized tasks are exactly what I needed to build a real habit.',
    author: 'Jon, Product Manager'
  },
  {
    quote: 'It feels calm yet motivating. I’m learning more in 15 minutes than I used to in an hour.',
    author: 'Ana, Student'
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What learners say</h2>
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
