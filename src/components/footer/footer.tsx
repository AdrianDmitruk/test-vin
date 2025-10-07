import Image from 'next/image'

import Logo from '../ui/logo/logo'

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />

      <span className={styles.copy}>
        © 2025 Copyrights by company. All Rights Reserved.
      </span>

      <a
        className={styles.linkedin}
        href='https://www.linkedin.com/company/vinto-group/'
        target='_blank'
      >
        <Image
          className={styles.linkedinImg}
          src='/linkedin.svg'
          width={30}
          height={30}
          alt='logo'
        />
      </a>
    </footer>
  )
}
