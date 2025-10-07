import Image from 'next/image'
import Link from 'next/link'

import styles from './connect.module.scss'

export function Connect() {
  return (
    <section id='connect' className={styles.connect}>
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
                <Link className={styles.link} href='#'>
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
                <Link className={styles.link} href='#'>
                  {' '}
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
