import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import styles from './EventCard.module.css';
import type { SheEvent } from '@/types';

type EventCardProps = {
  event: SheEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={event.image} alt={event.name} loading="lazy" />
        <span className={styles.tag}>{event.format}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{event.name}</h3>
        <p className={styles.desc}>{event.description}</p>
        <div className={styles.meta}>
          <span><Calendar size={14} /> {event.dateLabel}</span>
          <span><MapPin size={14} /> {event.location}</span>
        </div>
        <button className={styles.cta} type="button">
          {event.ctaLabel} <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
