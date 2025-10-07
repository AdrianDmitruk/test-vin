'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

declare global {
  interface Window {
    __lenis?: unknown
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    window.__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      window.dispatchEvent(
        new CustomEvent('lenis:scroll', { detail: { scroll: lenis.scroll } })
      )
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      try {
        delete window.__lenis
      } catch {}
    }
  }, [])
}

export default useLenis
