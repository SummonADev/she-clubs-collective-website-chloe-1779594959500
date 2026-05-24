import styles from './EventCard.module.css';
import type { SheEvent } from '@/types';

type EventCardProps = {
  event: SheEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.tag}>{event.format}</span>
      <h3 className={styles.title}>{event.name}</h3>
      <p className={styles.desc}>{event.description}</p>
      <div className={styles.meta}>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Date</span>
          <span className={styles.metaValue}>{event.dateLabel}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>Location</span>
          <span className={styles.metaValue}>{event.location}</span>
        </div>
      </div>
      <button className={styles.cta} type="button">
        {event.ctaLabel} →
      </button>
    </article>
  );
}
