import { useEffect, useRef, useState } from 'react'

export function useInView(options = { root: null, rootMargin: '0px', threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
