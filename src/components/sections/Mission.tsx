import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.section} id="mission">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>— Our Mission</span>
          <h2 className={styles.headline}>Why We Exist</h2>
        </div>
        <div className={styles.right}>
          <p className={styles.lead}>
            She Clubs Collective was born from a simple truth — <em>women go further together.</em>
          </p>
          <p className={styles.body}>
            We create intentional space for women who are building — whether
            that's a business, a career, or a better version of themselves.
          </p>
          <p className={styles.body}>
            Through movement, meaningful discussion, and real connection, we show up for each
            other every step of the way.
          </p>
          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <span>01</span>
              <p>Intentional Community</p>
            </div>
            <div className={styles.pillar}>
              <span>02</span>
              <p>Honest Conversation</p>
            </div>
            <div className={styles.pillar}>
              <span>03</span>
              <p>Real Connection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
