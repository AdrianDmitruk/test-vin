import Image from 'next/image'
import Link from 'next/link'

import styles from './logo.module.scss'

export default function Logo() {
  return (
    <Link className={styles.logo} href='/'>
      <Image
        className={styles.logoImg}
        src='/logo.svg'
        width={76}
        height={78}
        alt='logo'
      />

      <Image
        className={styles.logoMobImg}
        src='/logoMob.svg'
        width={57}
        height={58.5}
        alt='logoMob'
      />
    </Link>
  )
}
