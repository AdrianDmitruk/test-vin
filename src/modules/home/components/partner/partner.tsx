import Link from 'next/link'

import styles from './partner.module.scss'

export function Partner() {
  return (
    <section id='partner' className={styles.partner}>
      <div className={styles.img}></div>

      <div className={styles.content}>
        <h2 className={styles.contentTitle}>
          Partner <span>with Us</span> Grow in <span>iGaming</span>
        </h2>

        <p className={styles.contentSubtitle}>
          We collaborate with leading providers of payments, banking, and
          financial solutions, as well as AI and AML technologies, retention
          platforms, and global communication services. Our goal is to build
          strong partnerships that give our operators an edge and shape the
          future of the iGaming ecosystem together
        </p>

        <div className={styles.contentFooter}>
          <ul className={styles.contentFooterUl}>
            <li className={styles.contentFooterUlLi}>
              PSPs, Acquirers, Banks and EMI
            </li>
            <li className={styles.contentFooterUlLi}>AI & Data-Driven Tools</li>
            <li className={styles.contentFooterUlLi}>
              Risk & Fraud Prevention Tools
            </li>
            <li className={styles.contentFooterUlLi}>
              Traffic Acquisition & Management Tools
            </li>
            <li className={styles.contentFooterUlLi}>Retention Solutions</li>
            <li className={styles.contentFooterUlLi}>
              Multi-channel Messaging
            </li>
            <li className={styles.contentFooterUlLi}>
              Tax,Legal & Licensing Advisors
            </li>
            <li className={styles.contentFooterUlLi}>
              Strategic Brand Collaborations
            </li>
          </ul>

          <Link className={styles.btn} href='mailto:vintogroup@gmail.com'>
            contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
