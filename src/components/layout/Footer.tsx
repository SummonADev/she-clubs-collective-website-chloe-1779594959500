import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="She Clubs Collective">
            <img src="/logo.svg" alt="She Clubs Collective" />
          </Link>
          <p className={styles.tagline}>
            Building together. Growing together. Rising together.
          </p>
        </div>

        <div className={styles.cols}>
          <div>
            <h4 className={styles.colTitle}>Explore</h4>
            <ul className={styles.list}>
              <li><a href="/#mission">Why We Exist</a></li>
              <li><a href="/#formats">Event Formats</a></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><a href="/#join">Join the Collective</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.list}>
              <li>Washington, DC · MD · VA</li>
              <li>hello@sheclubs.co</li>
              <li>@sheclubscollective</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} She Clubs Collective. Made in the DMV.</p>
        </div>
      </div>
    </footer>
  );
}
