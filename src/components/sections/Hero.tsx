import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>A DMV Women's Community</span>
        <h1 className={styles.headline}>
          You Don't Have to<br/><em>Build Alone.</em>
        </h1>
        <p className={styles.sub}>
          She Clubs Collective is a community where women come together through movement,
          conversation, and the courage to build — careers, businesses, and each other.
        </p>
        <div className={styles.actions}>
          <a href="#join" className={styles.primary}>Join the Collective</a>
          <a href="#events" className={styles.secondary}>See Upcoming Events →</a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.line} />
      </div>
    </section>
  );
}
