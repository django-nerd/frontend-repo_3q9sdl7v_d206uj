import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductPreview from './components/ProductPreview'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import CTA from './components/CTA'
import BadgeCloud from './components/BadgeCloud'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] text-[#2F2E41]">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Features */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Why it works</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Built for focus and consistency. Short sessions, clear goals, and gentle gamification help you stay motivated without stress.
              </p>
              <div className="mt-4">
                <BadgeCloud />
              </div>
              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#6C63FF] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-[#5a52e6] transition-colors">
                Start Learning
              </button>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-[#F1F0FF] via-white to-[#E6FEFF] p-6">
              <Features />
            </div>
          </div>
        </section>

        {/* Marquee divider */}
        <div className="max-w-6xl mx-auto px-6">
          <Marquee />
        </div>

        {/* 3. Product preview */}
        <ProductPreview />

        {/* CTA bridge */}
        <CTA />

        {/* 4. Testimonials */}
        <Testimonials />
      </main>
      {/* 5. Footer */}
      <Footer />
    </div>
  )
}

export default App
