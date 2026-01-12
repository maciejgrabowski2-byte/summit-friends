import * as React from "react";
import EventItem from "./EventItem";

interface TimeAndPlace {
  time: string;
  startingPoint: string;
  transport: string;
}

interface Activity {
  level: string;
  activityIcon: string;
  activityName: string;
  distance: string;
  elevation: string;
}

interface Participant {
  image: string;
  altText?: string;
}

interface Photo {
  image: string;
  altText?: string;
  className: string;
}

interface Event {
  date: string;
  day: string;
  title: string;
  timeAndPlace: TimeAndPlace;
  activity: Activity;
  participants: Participant[];
  additionalCount: string;
  organizerName: string;
  status?: string;
  photos?: Photo[];
}

interface EventSectionProps {
  title: string;
  events: Event[];
  isPastEvents?: boolean;
}

function EventSection({ title, events, isPastEvents = false }: EventSectionProps) {
  return (
    <>
      <header className="flex gap-2.5 items-center self-stretch pb-4 border-b border-solid border-border">
        <h2 className="text-lg font-bold text-foreground max-md:text-lg max-sm:text-base">
          {title}
        </h2>
      </header>
      <section className={`flex flex-col items-start self-stretch ${isPastEvents ? 'gap-2.5' : 'gap-4'}`}>
        {events.map((event, index) => (
          <EventItem
            key={index}
            date={event.date}
            day={event.day}
            title={event.title}
            timeAndPlace={event.timeAndPlace}
            activity={event.activity}
            participants={event.participants}
            additionalCount={event.additionalCount}
            organizerName={event.organizerName}
            status={event.status}
            photos={event.photos}
            isPastEvent={isPastEvents}
          />
        ))}
      </section>
    </>
  );
}

export default EventSection;
