import React, { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function ProductPreview() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateRM = () => setReducedMotion(rm.matches)
    updateRM()
    rm.addEventListener?.('change', updateRM)
    return () => rm.removeEventListener?.('change', updateRM)
  }, [])

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white/60 backdrop-blur-xl shadow-xl">
          {/* subtle gradient backdrop */}
          <div className="absolute -inset-16 opacity-70" aria-hidden>
            <div className="h-full w-full bg-[radial-gradient(40%_60%_at_20%_30%,rgba(56,189,248,0.15),transparent),radial-gradient(30%_50%_at_80%_60%,rgba(16,185,129,0.12),transparent)]" />
          </div>
          <div className="relative grid lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">See your progress at a glance</h2>
              <p className="mt-3 text-slate-600 max-w-prose">A clean dashboard highlights what matters: daily tasks, streak, and a clear next step. Everything else stays out of your way.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Glassy card layout for focus</li>
                <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-sky-500" /> Gentle micro-animations</li>
                <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-indigo-500" /> Built for low-power devices</li>
              </ul>
            </div>
            {/* iPhone mockup */}
            <div className="relative h-[420px] md:h-[520px] lg:h-full flex items-end justify-center p-8">
              <div className={`relative w-[260px] md:w-[300px] aspect-[9/19] rounded-[40px] border border-black/10 bg-white/80 shadow-[0_20px_80px_rgba(2,6,23,0.15)] backdrop-blur-xl overflow-hidden will-change-transform transition-transform duration-700 ease-out ${inView && !reducedMotion ? 'translate-y-0' : 'translate-y-8'}`}>
                {/* top notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/80 rounded-b-2xl mt-2" />
                {/* screen */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(241,245,249,0.8),rgba(255,255,255,0.9))]">
                  {/* simple UI mock */}
                  <div className="p-4 space-y-3">
                    <div className="h-8 w-1/2 rounded-lg bg-slate-200" />
                    <div className="h-3 w-2/3 rounded bg-slate-200" />
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="rounded-xl border border-slate-200 bg-white/70 p-3">
                          <div className="h-4 w-1/2 rounded bg-slate-200" />
                          <div className="mt-2 h-3 w-2/3 rounded bg-slate-200" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 h-10 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400" />
                  </div>
                </div>
                {/* glass frame highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-white/60" />
                <div className="pointer-events-none absolute inset-0 rounded-[40px] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
