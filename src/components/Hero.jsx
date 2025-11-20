import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Calm, gamified English learning
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600">
          Learn with bite-sized levels, daily tasks, and a friendly progress system. Designed to feel motivating, not overwhelming.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-sm hover:bg-emerald-600 transition-colors">
            Start Learning
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-800 px-6 py-3 text-sm sm:text-base font-semibold hover:bg-sky-200 transition-colors">
            See Features
          </a>
        </div>
      </div>
    </section>
  )
}
