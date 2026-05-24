import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <Sparkles size={14} /> A DMV Women's Community
          </span>
          <h1 className={styles.headline}>
            You Don't Have to <em>Build Alone.</em>
          </h1>
          <p className={styles.sub}>
            She Clubs Collective is a community where women come together through movement,
            conversation, and the courage to build — careers, businesses, and each other.
          </p>
          <div className={styles.actions}>
            <a href="#join" className={styles.primary}>
              Join the Collective <ArrowRight size={18} />
            </a>
            <a href="#events" className={styles.secondary}>
              See Upcoming Events
            </a>
          </div>
          <div className={styles.stats}>
            <div>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Women Building Together</span>
            </div>
            <div className={styles.divider} />
            <div>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>Events Hosted</span>
            </div>
            <div className={styles.divider} />
            <div>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>Powerful Sisterhood</span>
            </div>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop"
              alt="Women in conversation"
              loading="eager"
            />
          </div>
          <div className={styles.imgWrapSmall}>
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop"
              alt="Women moving together"
              loading="eager"
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeStar}>✦</span>
            <div>
              <strong>Built in the DMV</strong>
              <p>Made for women like you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
