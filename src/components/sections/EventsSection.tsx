import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
            <span className={styles.eyebrow}>Upcoming</span>
            <h2 className={styles.headline}>What's Coming Up</h2>
            <p className={styles.sub}>Show up. Connect. Leave inspired.</p>
          </div>
          <Link to="/events" className={styles.headerCta}>
            View All Events <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.bottom}>
          <Link to="/events" className={styles.cta}>
            View All Events <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
