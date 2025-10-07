import Image from 'next/image'
import Link from 'next/link'

import styles from './build.module.scss'

export function Build() {
  return (
    <section className={styles.build}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>
          Build <span>Yourself</span> Build the Future of <span>iGaming</span>
        </h2>
        <p className={styles.headerSubtitle}>
          Join a global team where talent grows, ideas matter, and careers
          accelerate.
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <div className={styles.contentItem}>
              <h5 className={styles.contentItemName}>
                Digital Marketing Manager
              </h5>

              <div className={styles.contentItemRight}>
                <span className={styles.contentItemRightCategory}>
                  Marketing
                </span>

                <Link className={styles.contentItemRightLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.contentItem}>
              <h5 className={styles.contentItemName}>
                Performance Marketing Specialist
              </h5>

              <div className={styles.contentItemRight}>
                <span className={styles.contentItemRightCategory}>
                  Marketing
                </span>

                <Link className={styles.contentItemRightLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.contentItem}>
              <h5 className={styles.contentItemName}>Affiliate Manager</h5>

              <div className={styles.contentItemRight}>
                <span className={styles.contentItemRightCategory}>
                  Marketing
                </span>

                <Link className={styles.contentItemRightLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.contentItem}>
              <h5 className={styles.contentItemName}>SEO Specialist</h5>

              <div className={styles.contentItemRight}>
                <span className={styles.contentItemRightCategory}>
                  Marketing
                </span>

                <Link className={styles.contentItemRightLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.contentItem}>
              <h5 className={styles.contentItemName}>Social Media Manager</h5>

              <div className={styles.contentItemRight}>
                <span className={styles.contentItemRightCategory}>
                  Marketing
                </span>

                <Link className={styles.contentItemRightLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.border}></div>

          <Link href='/career' className={styles.view}>
            View all open roles
          </Link>
        </div>
      </div>
    </section>
  )
}
