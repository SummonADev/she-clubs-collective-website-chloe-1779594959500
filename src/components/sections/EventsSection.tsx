import { Link } from 'react-router-dom';
import styles from './EventsSection.module.css';
import EventCard from '@/components/EventCard';
import { events } from '@/lib/events';

export default function EventsSection() {
  const upcoming = events.slice(0, 3);

  return (
    <section className={styles.section} id="events">
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className={styles.eyebrow}>— Upcoming</span>
            <h2 className={styles.headline}>What's <em>Coming Up</em></h2>
            <p className={styles.sub}>Show up. Connect. Leave inspired.</p>
          </div>
          <Link to="/events" className={styles.headerCta}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.bottom}>
          <Link to="/events" className={styles.cta}>View All Events</Link>
        </div>
      </div>
    </section>
  );
}
