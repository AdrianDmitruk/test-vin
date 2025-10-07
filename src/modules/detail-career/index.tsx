import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.scss'

export function DetailCareerModule() {
  return (
    <div className={styles.wrap}>
      <div className={styles.dotsFirst}></div>
      <div className={styles.dotsSecond}></div>
      <div className={styles.dotsThird}></div>
      <Link className={styles.brand} href='/career'>
        <Image src='/arr-l.svg' width={12} height={24} alt='arr' />
        Back to jobs
      </Link>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1 className={styles.contentHeaderTitle}>
            Rust/C++/Go Backend Engineer - Enterprise Agent (London)
          </h1>
          <div className={styles.contentHeaderLocation}>
            <Image src='/location.svg' width={24} height={24} alt='location' />
            London, UK
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h5 className={styles.contentBlockTitle}>About xAI</h5>

          <p className={styles.contentBlockText}>
            xAI’s mission is to create AI systems that can accurately understand
            the universe and aid humanity in its pursuit of knowledge. Our team
            is small, highly motivated, and focused on engineering excellence.
            This organization is for individuals who appreciate challenging
            themselves and thrive on curiosity. We operate with a flat
            organizational structure. All employees are expected to be hands-on
            and to contribute directly to the company’s mission. Leadership is
            given to those who show initiative and consistently deliver
            excellence. Work ethic and strong prioritization skills are
            important. All engineers are expected to have strong communication
            skills. They should be able to concisely and accurately share
            knowledge with their teammates.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h5 className={styles.contentBlockTitle}>About the team</h5>

          <p className={styles.contentBlockText}>
            The Enterprise Agents Engineering Team at xAI is a team of builders
            solving the hardest problems in applied AI: integrating with messy
            systems, orchestrating complex workflows, and harnessing AI to
            transform business operations. We build full-stack solutions with
            ownership of end-to-end product execution from ideation to
            deployment, collaborating closely with our research team to
            incorporate cutting-edge AI advancements into robust and reliable
            user-centric solutions. Through an iterative development process, we
            work hand-in-hand with customers to gather feedback, refine
            features, and evolve products to address real-world challenges.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h5 className={styles.contentBlockTitle}>About the role</h5>

          <div className={styles.contentBlockText}>
            <p>An ideal candidate meets at least the following requirements:</p>
            <br />
            <ul>
              <li>Expert knowledge of either Rust or C++ or Go,</li>
              <li>
                Experience in designing, implementing, and maintaining reliable
                and horizontally scalable distributed systems,
              </li>
              <li>
                Knowledge of service observability and reliability best
                practices,
              </li>
              <li>
                Experience in operating commonly used databases such as
                PostgreSQL, Clickhouse, and CockroachDB
              </li>
            </ul>

            <br />
            <p>
              Additionally, any of the below points will help a candidate stand
              out:
            </p>
            <br />
            <ul>
              <li>Expert knowledge of Python,</li>
              <li>
                Experience with Docker, Kubernetes, and containerized
                applications,
              </li>
              <li>Expert knowledge of TypeScript,</li>
              <li>
                Expert knowledge of gRPC (unary, response streaming,
                bi-directional streaming, REST mapping),
              </li>
              <li>
                Hands-on experience with LLM APIs, embeddings, or RAG patterns
              </li>
              <li>Track record of delivering user-facing software at scale.</li>
            </ul>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h5 className={styles.contentBlockTitle}>Interview process</h5>

          <div className={styles.contentBlockText}>
            <p>
              After submitting your application, the team reviews your CV and
              statement of exceptional work. If your application passes this
              stage, you will be invited to a 15 minute interview (“phone
              interview”) during which a member of our team will ask some basic
              technical questions. If you clear the initial phone interview, you
              will enter the main process, which consists of at least two
              technical interviews:
            </p>
            <br />
            <ol>
              <li>Coding interview in Rust or C++.</li>
              <li>Distributed systems design interview.</li>
            </ol>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h5 className={styles.contentBlockTitle}>Benefits</h5>

          <p className={styles.contentBlockText}>
            Base salary is just one part of our total rewards package at xAI,
            which also includes equity, comprehensive medical, vision, and
            dental coverage, access to a pension plan, short & long-term
            disability insurance, life insurance, and various other discounts
            and perks.
          </p>
        </div>
      </div>

      <div className={styles.form}>
        <div className={styles.formInput}>
          <input
            className={styles.formInputItem}
            placeholder='Your Telegram account'
            type='text'
            name=''
            id=''
          />
          <Image
            className={styles.formInputImg}
            src='/telegram.svg'
            width={24}
            height={24}
            alt='telegram'
          />
        </div>

        <div className={styles.formAction}>
          <button className={styles.formActionFile}>
            <Image
              src='/attachment.svg'
              width={24}
              height={24}
              alt='attachment'
            />
            Attach CV
          </button>

          <button className={styles.formActionBtn}>Submit Application</button>
        </div>
      </div>
    </div>
  )
}
