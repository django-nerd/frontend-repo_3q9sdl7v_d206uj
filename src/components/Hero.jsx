import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { useInView } from '../hooks/useInView'

// Lazy-load Spline to avoid upfront cost and only render when needed
const LazySpline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [isDesktop, setIsDesktop] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setIsDesktop(mq.matches)
    const updateRM = () => setReducedMotion(rm.matches)
    update()
    updateRM()
    mq.addEventListener?.('change', update)
    rm.addEventListener?.('change', updateRM)
    return () => {
      mq.removeEventListener?.('change', update)
      rm.removeEventListener?.('change', updateRM)
    }
  }, [])

  const showSpline = useMemo(() => isDesktop && !reducedMotion && inView, [isDesktop, reducedMotion, inView])

  return (
    <section ref={ref} className="relative w-full min-h-[72vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Soft animated gradient background (very light) */}
      <div className="pointer-events-none absolute -inset-16 opacity-[0.7]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(50%_50%_at_80%_30%,rgba(52,211,153,0.12),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(15,23,42,0.06),transparent)] animate-[pulse_12s_ease-in-out_infinite]" />
      </div>

      {/* 3D scene only on capable devices and when in view */}
      <div className="absolute inset-0" aria-hidden>
        {showSpline ? (
          <Suspense fallback={null}>
            <LazySpline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        ) : (
          // Lightweight fallback illustration
          <svg className="w-full h-full" viewBox="0 0 1200 600" role="img">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <g>
              <circle cx="200" cy="180" r="160" fill="url(#g1)" />
              <circle cx="980" cy="120" r="140" fill="url(#g1)" />
              <circle cx="700" cy="480" r="200" fill="url(#g1)" />
            </g>
          </svg>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
          ✨ Learn calmly • Level up daily
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
          English learning that feels light, focused, and fun
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600">
          Short sessions, clear goals, and gentle gamification. Progress without pressure.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-600 transition-colors">
            Start Learning
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-800 px-6 py-3 text-sm sm:text-base font-semibold hover:bg-sky-200 transition-colors">
            See Features
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto text-slate-600">
          <div className="rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm">
            <p className="text-xs">Avg. daily time</p>
            <p className="text-lg font-semibold">12m</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm">
            <p className="text-xs">This week</p>
            <p className="text-lg font-semibold">5 sessions</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm">
            <p className="text-xs">Streak</p>
            <p className="text-lg font-semibold">7 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}
