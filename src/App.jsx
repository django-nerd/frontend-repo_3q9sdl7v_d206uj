import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProgressStrip from './components/ProgressStrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="get-started" className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Why it works</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Built for focus and consistency. Short sessions, clear goals, and gentle gamification help you stay motivated without stress.
              </p>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-sky-600 transition-colors">
                Start Learning
              </button>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-sky-50 via-emerald-50 to-slate-50 p-6">
              <Features />
            </div>
          </div>
        </section>
        <ProgressStrip />
      </main>
      <Footer />
    </div>
  )
}

export default App
