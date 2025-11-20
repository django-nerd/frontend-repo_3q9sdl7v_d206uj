import React from 'react'

export default function CTA() {
  return (
    <section className="py-16 bg-[#F8F8FF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-[#F1F0FF] via-white to-[#E6FEFF] p-10 shadow-sm">
          <div className="pointer-events-none absolute -inset-20 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_20%,rgba(108,99,255,0.14),transparent),radial-gradient(35%_35%_at_80%_30%,rgba(0,212,255,0.14),transparent)]" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#2F2E41] to-[#6C63FF]">
                Make English your daily ritual
              </h2>
              <p className="mt-3 text-[#2F2E41]/80 leading-relaxed">
                Bite-sized lessons that fit your schedule and grow with you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-[#6C63FF] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-[#5b54ee] transition-colors">
                  Start Free
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white text-[#2F2E41] px-6 py-3 text-sm font-semibold shadow-sm border border-[#00D4FF]/40 hover:bg-[#E6FEFF] transition-colors">
                  Explore Features
                </a>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {[
                ['+1,200', 'new words this month'],
                ['92%', 'finish mini-lessons'],
                ['7d', 'average streak'],
                ['3–5m', 'per session'],
              ].map(([stat, label]) => (
                <li key={label} className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                  <p className="text-2xl font-bold text-[#2F2E41]">{stat}</p>
                  <p className="text-[#2F2E41]/70 text-sm">{label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
