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
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/she.clubs/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow on Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>@she.clubs</span>
            </a>
          </div>
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
              <li><a href="mailto:chloe@sheclubscollective.com">chloe@sheclubscollective.com</a></li>
              <li>
                <a
                  href="https://www.instagram.com/she.clubs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @she.clubs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} She Clubs Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
