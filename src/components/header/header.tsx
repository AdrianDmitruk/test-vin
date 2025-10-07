'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import LenisStarter from '@/components/lenis/LenisStarter'
import ScrollOnQuery from '@/components/scroll/ScrollOnQuery'

import Logo from '../ui/logo/logo'

import styles from './header.module.scss'

type LenisInstance = { scrollTo?: (target: Element | number) => void }

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const getScroll = () => {
      const winY = window.scrollY
      const docY = document.documentElement.scrollTop
      const bodyY = document.body.scrollTop
      return winY || docY || bodyY
    }
    const onScroll = () => {
      const scrollVal = getScroll()
      setScrolled(scrollVal > 1)
    }
    const onLenis = (ev: Event | CustomEvent<{ scroll: number }>) => {
      const detail = (ev as CustomEvent<{ scroll: number }> | undefined)?.detail
      const scrollVal = detail?.scroll ?? getScroll()
      setScrolled(scrollVal > 1)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('lenis:scroll', onLenis as EventListener)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('lenis:scroll', onLenis as EventListener)
    }
  }, [])

  const handleNavTo = async (
    targetId: string,
    extraOverride?: number,
    e?: React.SyntheticEvent
  ) => {
    if (e) e.preventDefault()
    setMenuOpen(false)

    const doScrollNumeric = (el: Element) => {
      const headerEl = document.querySelector(
        `.${styles.header}`
      ) as HTMLElement | null
      const headerHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : 80
      const extra = typeof extraOverride === 'number' ? extraOverride : 12

      const elTop = (el as HTMLElement).offsetTop
      const targetY = Math.round(elTop - headerHeight - extra)

      window.scrollTo({ top: targetY, behavior: 'auto' })

      const lenis = (window as Window & { __lenis?: LenisInstance }).__lenis
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(targetY)
        return
      }

      let attempts = 0
      const maxAttempts = 30
      const pollLenis = async () => {
        while (attempts < maxAttempts) {
          await new Promise(r => setTimeout(r, 100))
          attempts++
          const l = (window as Window & { __lenis?: LenisInstance }).__lenis
          if (l && typeof l.scrollTo === 'function') {
            l.scrollTo(targetY)
            return
          }
        }
      }
      void pollLenis()
    }

    if (pathname === '/' || pathname === '') {
      const el = document.getElementById(targetId)
      if (el) doScrollNumeric(el)
      return
    }

    await router.push('/')
    setTimeout(() => {
      try {
        window.location.hash = `#${targetId}`
      } catch {}
    }, 60)
    return
  }

  return (
    <>
      {scrolled && <div className={styles.headerSpacer} />}
      <header className={`${styles.header} ${scrolled ? styles.fixed : ''}`}>
        <Logo />
        <nav
          className={menuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}
        >
          <a
            className={styles.navItem}
            href='#igaming'
            onClick={e => handleNavTo('igaming', undefined, e)}
          >
            Home
          </a>
          <a
            className={styles.navItem}
            href='#about'
            onClick={e => handleNavTo('about', -80, e)}
          >
            About Us
          </a>
          <Link className={styles.navItem} href='/career'>
            Career
          </Link>
          <a
            className={styles.navItem}
            href='#partner'
            onClick={e => handleNavTo('partner', 50, e)}
          >
            Partnerships
          </a>
          <a
            className={styles.navItem}
            href='#connect'
            onClick={e => handleNavTo('connect', undefined, e)}
          >
            Investments
          </a>
          <Link className={styles.navItem} href='mailto:vintogroup@gmail.com'>
            Contacts
          </Link>
        </nav>

        <button
          className={styles.burger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? (
            <Image src='/close.svg' alt='Close' width={40} height={40} />
          ) : (
            <Image src='/burger.svg' alt='Menu' width={40} height={40} />
          )}
        </button>
      </header>
      <LenisStarter />
      <ScrollOnQuery />
    </>
  )
}

export default Header
