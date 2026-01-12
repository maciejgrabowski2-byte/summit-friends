import * as React from "react";
import EventDate from "./EventDate";
import EventContent from "./EventContent";

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

interface EventItemProps {
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
  isPastEvent?: boolean;
}

function EventItem({
  date,
  day,
  title,
  timeAndPlace,
  activity,
  participants,
  additionalCount,
  organizerName,
  status,
  photos,
  isPastEvent = false
}: EventItemProps) {
  return (
    <article className="flex flex-wrap gap-3.5 content-start items-start self-stretch max-sm:gap-3">
      <div className={isPastEvent ? "flex justify-center items-start h-[57px] w-[45px]" : ""}>
        <EventDate date={date} day={day} />
      </div>
      <EventContent
        title={title}
        timeAndPlace={timeAndPlace}
        activity={activity}
        participants={participants}
        additionalCount={additionalCount}
        organizerName={organizerName}
        status={status}
        photos={photos}
        isPastEvent={isPastEvent}
      />
    </article>
  );
}

export default EventItem;
