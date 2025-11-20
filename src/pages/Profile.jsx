import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Profile() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="mt-2 text-slate-600">Personalize your calm learning experience.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Display name</h3>
            <input className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Your name" />
          </div>
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Daily goal</h3>
            <select className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200">
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>15 minutes</option>
            </select>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
