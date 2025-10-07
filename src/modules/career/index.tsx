import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.scss'

export function CareerModule() {
  return (
    <section className={styles.wrap}>
      <div className={styles.dotsFirst}></div>
      <div className={styles.dotsSecond}></div>
      <div className={styles.dotsThird}></div>
      <h1 className={styles.title}>
        Open <span>roles</span>
      </h1>

      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.itemLeft}>Marketing</div>

          <div className={styles.itemRight}>
            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Digital Marketing Manager
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Performance Marketing Specialist
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>Affiliate Manager</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>SEO Specialist</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Social Media Manager
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Content Marketing Specialist
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Marketing</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLeft}>Product</div>

          <div className={styles.itemRight}>
            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>Product Manager</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Product</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>Business Analyst</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Product</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>UI/UX Designer</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Product</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>QA Engineer</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Product</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>Project Manager</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Product</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLeft}>Retention</div>

          <div className={styles.itemRight}>
            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>RM Manager</div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Retention</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                VIP Account Manager
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Retention</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Player Retention Specialist
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Retention</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Loyalty Program Manager{' '}
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Retention</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>

            <div className={styles.itemRightBlock}>
              <div className={styles.itemRightBlockName}>
                Customer Success Manager
              </div>

              <div className={styles.itemRightBlockInfo}>
                <div className={styles.itemRightBlockInfoText}>Retention</div>
                <Link className={styles.itemRightBlockInfoLink} href='#'>
                  Apply now
                  <Image src='/arr.svg' width={36} height={36} alt='arr' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
