'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

type LenisInstance = { scrollTo?: (target: Element | number) => void }

export default function ScrollOnQuery() {
  const search = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(search?.toString() ?? '')
    const targetId = params.get('scrollTo')
    const extraParam = params.get('extra')
    const extra = extraParam ? Number(extraParam) : undefined
    if (!targetId) return

    let attempts = 0
    const maxAttempts = 60

    const doScroll = (el: Element) => {
      const headerEl = document.querySelector(
        '.' + (document.querySelector('[class]') ? 'header' : 'header')
      ) as HTMLElement | null
      const headerHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : 80
      const off = typeof extra === 'number' ? extra : 12
      const elTop = (el as HTMLElement).offsetTop
      const targetY = Math.round(elTop - headerHeight - off)

      window.scrollTo({ top: targetY, behavior: 'auto' })

      const lenis = (window as Window & { __lenis?: LenisInstance }).__lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(targetY)
      }

      try {
        const url = new URL(window.location.href)
        url.searchParams.delete('scrollTo')
        url.searchParams.delete('extra')
        window.history.replaceState(
          {},
          '',
          url.pathname + url.search + url.hash
        )
      } catch {}
    }

    const poll = async () => {
      await new Promise(r => requestAnimationFrame(() => r(undefined)))

      while (attempts < maxAttempts) {
        const el = document.getElementById(targetId)
        if (el) {
          doScroll(el)
          return
        }
        attempts++
        await new Promise(r => setTimeout(r, 100))
      }
    }

    void poll()
  }, [search])

  useEffect(() => {
    const getTargetFromHash = () => {
      const h = window.location.hash
      if (!h || h.length <= 1) return null
      return h.replace('#', '')
    }

    const doProgrammaticScroll = (id: string, extra?: number) => {
      const headerEl = document.querySelector('header') as HTMLElement | null
      const headerHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : 80
      const off = typeof extra === 'number' ? extra : 12
      const el = document.getElementById(id)
      if (!el) return
      const elTop = (el as HTMLElement).offsetTop
      const targetY = Math.round(elTop - headerHeight - off)

      if (Math.abs(window.scrollY - targetY) <= 8) return

      window.scrollTo({ top: targetY, behavior: 'auto' })

      const lenis = (window as Window & { __lenis?: LenisInstance }).__lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(targetY)
      }
    }

    const tryHash = () => {
      const id = getTargetFromHash()
      if (!id) return

      requestAnimationFrame(() => {
        setTimeout(() => doProgrammaticScroll(id), 80)
        setTimeout(() => doProgrammaticScroll(id), 400)
      })
    }

    tryHash()

    window.addEventListener('hashchange', tryHash)
    return () => window.removeEventListener('hashchange', tryHash)
  }, [])

  return null
}
