import Link from 'next/link'

import styles from './scale.module.scss'

export function Scale() {
  return (
    <section id='connect' className={styles.partner}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>
          Scale <span>with US</span>
        </h2>

        <p className={styles.contentSubtitle}>
          We invest in iGaming brands and acquire high-performing teams to
          accelerate growth together. What We Offer:
        </p>

        <div className={styles.contentFooter}>
          <ul className={styles.contentFooterUl}>
            <li className={styles.contentFooterUlLi}>
              We invest in and acquire media buying teams and marketing agencies
            </li>
            <li className={styles.contentFooterUlLi}>
              We partner with iGaming operators through acquisitions and joint
              ventures
            </li>
            <li className={styles.contentFooterUlLi}>
              We share our expertise and infrastructure for equity in growing
              brands
            </li>
            <li className={styles.contentFooterUlLi}>
              We drive growth with our network, technology, and operational
              support
            </li>
          </ul>

          <Link className={styles.btn} href='mailto:vintogroup@gmail.com'>
            Email us
          </Link>
        </div>
      </div>

      <div className={styles.img}></div>
    </section>
  )
}
