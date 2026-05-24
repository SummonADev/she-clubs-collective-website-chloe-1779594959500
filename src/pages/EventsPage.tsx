import styles from './EventsPage.module.css';
import EventCard from '@/components/EventCard';
import { events } from '@/lib/events';

export default function EventsPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>— All Events</span>
          <h1 className={styles.title}>Find Your Next Moment of <em>Connection</em></h1>
          <p className={styles.subtitle}>
            Every gathering is a doorway. Step through whichever one calls to you.
          </p>
        </div>
        <div className={styles.grid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
