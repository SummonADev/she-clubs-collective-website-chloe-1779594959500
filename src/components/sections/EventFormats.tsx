import { Activity, Mic, Hammer, Wine } from 'lucide-react';
import styles from './EventFormats.module.css';

type Format = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const formats: Format[] = [
  {
    icon: <Activity size={28} />,
    title: 'Movement Events',
    body: 'Workouts, wellness walks, and active experiences that kick off connection before a single word is spoken.',
  },
  {
    icon: <Mic size={28} />,
    title: 'Panel Discussions',
    body: "Real talk from women who've done it — career pivots, business building, and everything in between.",
  },
  {
    icon: <Hammer size={28} />,
    title: 'Workshops',
    body: 'Hands-on sessions covering entrepreneurship, branding, finance, leadership, and more.',
  },
  {
    icon: <Wine size={28} />,
    title: 'Intimate Founder Gatherings',
    body: "Small, curated evenings for founders and builders to connect deeply, share honestly, and support each other's journey.",
  },
];

export default function EventFormats() {
  return (
    <section className={styles.section} id="formats">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>Our Event Formats</span>
          <h2 className={styles.headline}>
            Every Event. One Purpose. <em>Your Growth.</em>
          </h2>
          <p className={styles.sub}>
            We meet in different ways so every woman finds her entry point into the community.
          </p>
        </div>
        <div className={styles.grid}>
          {formats.map((f) => (
            <article key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.text}>{f.body}</p>
              <div className={styles.flourish} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
