export default function ProgressStrip() {
  const percent = 62
  return (
    <section className="py-8 bg-gradient-to-r from-sky-50 via-emerald-50 to-slate-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-700">Today's progress</p>
          <div className="mt-2 h-3 w-full bg-white rounded-full border border-gray-100 shadow-inner overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        <div className="text-slate-600 text-sm">{percent}% complete</div>
      </div>
    </section>
  )
}
