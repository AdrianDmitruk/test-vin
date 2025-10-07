import styles from './about.module.scss'

export function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.img}></div>
      <h2 className={styles.title}>
        About <span>US</span>
      </h2>
      <p className={styles.subtitle}>
        We operate globally across Africa, Asia, Europe, LATAM and beyond. As an
        iGaming investment and management company, we own leading operators,
        scale brands, acquire teams, and back projects that push the industry
        forward — if you’re in iGaming, you’re with us.
      </p>
    </section>
  )
}
