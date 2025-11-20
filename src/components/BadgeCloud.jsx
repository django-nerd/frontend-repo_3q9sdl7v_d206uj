import React from 'react'

const badges = [
  'Speaking', 'Listening', 'Reading', 'Writing', 'Grammar', 'Vocabulary', 'Idioms', 'Phrasal Verbs', 'Pronunciation', 'Fluency'
]

export default function BadgeCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-slate-700 shadow-sm hover:shadow transition">
          {b}
        </span>
      ))}
    </div>
  )
}
