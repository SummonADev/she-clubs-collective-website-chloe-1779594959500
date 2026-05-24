import styles from './EventFormats.module.css';

type Format = {
  title: string;
  body: string;
};

const formats: Format[] = [
  {
    title: 'Movement Events',
    body: 'Workouts, wellness walks, and active experiences that kick off connection before a single word is spoken.',
  },
  {
    title: 'Panel Discussions',
    body: "Real talk from women who've done it — career pivots, business building, and everything in between.",
  },
  {
    title: 'Workshops',
    body: 'Hands-on sessions covering entrepreneurship, branding, finance, leadership, and more.',
  },
  {
    title: 'Intimate Founder Gatherings',
    body: "Small, curated evenings for founders and builders to connect deeply, share honestly, and support each other's journey.",
  },
];

export default function EventFormats() {
  return (
    <section className={styles.section} id="formats">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>— Our Event Formats</span>
          <h2 className={styles.headline}>
            Every Event. One Purpose. <em>Your Growth.</em>
          </h2>
          <p className={styles.sub}>
            We meet in different ways so every woman finds her entry point into the community.
          </p>
        </div>
        <div className={styles.list}>
          {formats.map((f, i) => (
            <article key={f.title} className={styles.row}>
              <span className={styles.num}>0{i + 1}</span>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.text}>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
