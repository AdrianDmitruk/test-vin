'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useCallback } from 'react'

import styles from './connect.module.scss'

export function Connect() {
  const handleScrollToConnect = useCallback((e: MouseEvent) => {
    e.preventDefault()

    const targetId = 'connect'
    const el = document.getElementById(targetId)
    if (!el) {
      // fallback to native hash
      try {
        window.location.hash = `#${targetId}`
      } catch {}
      return
    }

    const headerEl = document.querySelector('header') as HTMLElement | null
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 80
    const extra = 12
    const elTop = (el as HTMLElement).offsetTop
    const targetY = Math.round(elTop - headerHeight - extra)

    // immediate jump so user lands near the target, then Lenis animate if present
    window.scrollTo({ top: targetY, behavior: 'auto' })
    const lenis = (
      window as unknown as Window & {
        __lenis?: { scrollTo?: (t: number) => void }
      }
    ).__lenis
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetY)
    }
  }, [])
  return (
    <section className={styles.connect}>
      <h2 className={styles.title}>
        Let’s <span>Connect</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.contentItem}>
          <Image src='/careers.png' width={100} height={100} alt='careers' />

          <div className={styles.contentItemInfo}>
            <div className={styles.contentItemInfoBorder}></div>
            <div className={styles.contentItemInfoText}>
              <h5 className={styles.contentItemInfoTextTitle}>Careers</h5>
              <p className={styles.contentItemInfoTextSubtitle}>
                Tailor our platform to your brand and meet the specific needs of
                your business
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentItem}>
          <Image src='/partner.png' width={100} height={100} alt='partner' />

          <div className={styles.contentItemInfo}>
            <div className={styles.contentItemInfoBorder}></div>
            <div className={styles.contentItemInfoText}>
              <h5 className={styles.contentItemInfoTextTitle}>Partnerships</h5>
              <p className={styles.contentItemInfoTextSubtitle}>
                We’re always looking for strong collaborations. Learn more about
                partnerships or{' '}
                <Link
                  className={styles.link}
                  href='mailto:vintogroup@gmail.com'
                >
                  contact
                </Link>{' '}
                us with your proposal
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentItem}>
          <Image src='/invest.png' width={100} height={100} alt='invest' />

          <div className={styles.contentItemInfo}>
            <div className={styles.contentItemInfoBorder}></div>
            <div className={styles.contentItemInfoText}>
              <h5 className={styles.contentItemInfoTextTitle}>Investments</h5>
              <p className={styles.contentItemInfoTextSubtitle}>
                We provide capital and strategic support for iGaming projects →
                <a
                  className={styles.link}
                  href='#connect'
                  onClick={handleScrollToConnect}
                >
                  {' '}
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
