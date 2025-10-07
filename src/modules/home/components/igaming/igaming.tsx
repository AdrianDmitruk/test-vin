import Link from 'next/link'

import styles from './igaming.module.scss'

export function Igaming() {
  return (
    <section id='igaming' className={styles.igaming}>
      <div className={styles.dotsFirst}></div>
      <div className={styles.dotsSecond}></div>
      <div className={styles.dotsThird}></div>
      <div className={styles.text}>
        <h1 className={styles.textTitle}>
          <div className={styles.textTitleFirst}>
            <span>iGaming</span> Investment
          </div>
          <div className={styles.textTitleSecond}>
            & <span>Management</span> Company
          </div>
        </h1>

        <p className={styles.textSubtitle}>
          We own and operate iGaming brands while expanding through talent,
          partnerships, and strategic investments.
        </p>
      </div>

      <Link className={styles.btn} href='mailto:vintogroup@gmail.com'>
        contact us
      </Link>
    </section>
  )
}
