import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { useInView } from '../hooks/useInView'
import ParallaxLayer from './ParallaxLayer'

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
    <section ref={ref} className="relative w-full min-h-[72vh] flex items-center justify-center overflow-hidden bg-[#F8F8FF]">
      {/* Soft animated gradient background (very light) */}
      <div className="pointer-events-none absolute -inset-16 opacity-[0.7]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(108,99,255,0.12),transparent),radial-gradient(50%_50%_at_80%_30%,rgba(0,212,255,0.12),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(47,46,65,0.08),transparent)] animate-[pulse_12s_ease-in-out_infinite]" />
      </div>

      {/* Parallax floating shapes (very subtle) */}
      {!reducedMotion && (
        <div aria-hidden className="absolute inset-0">
          <ParallaxLayer speed={0.08} className="absolute -top-10 left-10">
            <div className="h-56 w-56 rounded-full bg-[#6C63FF]/30 blur-2xl" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.12} className="absolute top-20 right-0">
            <div className="h-72 w-72 rounded-full bg-[#00D4FF]/30 blur-3xl" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.06} className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="h-64 w-64 rounded-full bg-[#2F2E41]/10 blur-2xl" />
          </ParallaxLayer>
        </div>
      )}

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
                <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.24" />
              </linearGradient>
            </defs>
            <g>
              <circle cx="200" cy="180" r="160" fill="url(#g1)" />
              <circle cx="980" cy="120" r="140" fill="url(#g1)" />
              <circle cx="700" cy="480" r="200" fill="url(#g1)" />
            </g>
          </svg>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8FF]/80 via-[#F8F8FF]/70 to-[#F8F8FF]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/20 bg-white/70 px-3 py-1 text-xs font-medium text-[#6C63FF] shadow-sm">
          ✨ Learn calmly • Level up daily
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#2F2E41] to-[#6C63FF]">
          English learning that feels light, focused, and fun
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#2F2E41]/80">
          Short sessions, clear goals, and gentle gamification. Progress without pressure.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-[#6C63FF] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-sm hover:bg-[#5b54ee] transition-colors">
            Start Learning
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white text-[#2F2E41] px-6 py-3 text-sm sm:text-base font-semibold shadow-sm border border-[#00D4FF]/40 hover:bg-[#E6FEFF] transition-colors">
            See Features
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto text-[#2F2E41]/80">
          <div className="rounded-xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
            <p className="text-xs">Avg. daily time</p>
            <p className="text-lg font-semibold text-[#2F2E41]">12m</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
            <p className="text-xs">This week</p>
            <p className="text-lg font-semibold text-[#2F2E41]">5 sessions</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
            <p className="text-xs">Streak</p>
            <p className="text-lg font-semibold text-[#2F2E41]">7 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}
