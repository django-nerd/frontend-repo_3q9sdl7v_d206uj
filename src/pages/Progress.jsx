import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-700">{label}</span>
        <span className="text-sm text-slate-500">{value}%</span>
      </div>
      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function Progress() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Your Progress</h1>
        <p className="mt-2 text-slate-600">Gentle metrics to keep you motivated, not stressed.</p>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-gray-100 p-6">
            <ProgressBar label="Vocabulary" value={68} />
            <div className="h-4" />
            <ProgressBar label="Grammar" value={54} />
            <div className="h-4" />
            <ProgressBar label="Listening" value={72} />
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Daily streak</h3>
            <p className="text-slate-600 text-sm mt-1">You're on a 5-day learning streak. Keep it light and steady.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
