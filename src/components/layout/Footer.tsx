import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark}>SC</span>
            <span className={styles.logoText}>
              She Clubs <em>Collective</em>
            </span>
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
              <li><MapPin size={14} /> Washington, DC · MD · VA</li>
              <li><Mail size={14} /> hello@sheclubs.co</li>
              <li><Instagram size={14} /> @sheclubscollective</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} She Clubs Collective. Made in the DMV with care.</p>
        </div>
      </div>
    </footer>
  );
}
