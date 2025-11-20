import React from 'react'

// Lightweight, CSS-driven marquee for social proof / vibe
// Uses prefers-reduced-motion to disable animation
export default function Marquee() {
  const items = [
    'Daily Streaks',
    'Smart Reviews',
    'Level-Up Quests',
    'Speaking Drills',
    'Mini Games',
    'Grammar Bites',
    'Word Sprints',
  ]

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white/70 shadow-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" />
      <div className="[--speed:28s] flex gap-8 whitespace-nowrap py-3 will-change-transform motion-safe:animate-[marquee_var(--speed)_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-slate-600 inline-flex items-center gap-2 px-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-[marquee_var(--speed)_linear_infinite] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
