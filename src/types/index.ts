export type EventFormat = 'Movement' | 'Panel Discussion' | 'Workshop' | 'Founder Gathering';

export type SheEvent = {
  id: string;
  name: string;
  date: string;
  dateLabel: string;
  format: EventFormat;
  location: string;
  image: string;
  description: string;
  ctaLabel: 'Get Tickets' | 'RSVP';
};
