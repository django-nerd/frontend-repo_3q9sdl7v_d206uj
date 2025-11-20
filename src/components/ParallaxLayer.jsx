import React, { useEffect, useRef } from 'react'

export default function ParallaxLayer({ speed = 0.2, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const y = window.scrollY * speed
      el.style.transform = `translate3d(0, ${y}px, 0)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>
  )
}
