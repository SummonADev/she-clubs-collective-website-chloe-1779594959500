import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import WhatWeDo from '@/components/sections/WhatWeDo';
import EventFormats from '@/components/sections/EventFormats';
import EventsSection from '@/components/sections/EventsSection';
import JoinSection from '@/components/sections/JoinSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <WhatWeDo />
      <EventFormats />
      <EventsSection />
      <JoinSection />
    </>
  );
}
