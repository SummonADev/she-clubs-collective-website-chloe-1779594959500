import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.section} id="mission">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgMain}>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80&auto=format&fit=crop"
              alt="Women gathered in conversation"
            />
          </div>
          <div className={styles.imgAccent}>
            <img
              src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&q=80&auto=format&fit=crop"
              alt="Women celebrating"
            />
          </div>
          <div className={styles.quote}>
            <span>“Women go further together.”</span>
          </div>
        </div>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Our Mission</span>
          <h2 className={styles.headline}>Why We Exist</h2>
          <p className={styles.body}>
            She Clubs Collective was born from a simple truth — <strong>women go further together.</strong>
            Based in the DMV, we create intentional space for women who are building — whether
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
