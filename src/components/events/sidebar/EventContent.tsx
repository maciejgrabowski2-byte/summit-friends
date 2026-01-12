import * as React from "react";
import ActivityInfo from "./ActivityInfo";
import ParticipantsList from "./ParticipantsList";
import PhotoGallery from "./PhotoGallery";

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

interface EventContentProps {
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

function EventContent({
  title,
  timeAndPlace,
  activity,
  participants,
  additionalCount,
  organizerName,
  status,
  photos,
  isPastEvent = false
}: EventContentProps) {
  return (
    <div className={`flex flex-col gap-3 items-start pb-4 border-b border-solid border-border flex-[1_0_0] ${isPastEvent ? 'overflow-hidden' : ''}`}>
      <h3 className="self-stretch text-base font-bold text-foreground max-md:text-sm max-sm:text-sm">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 items-end max-sm:flex-wrap max-sm:gap-2">
        <span className="text-xs font-bold text-foreground max-md:text-xs max-sm:text-xs">
          {timeAndPlace.time}
        </span>
        <div className="text-xs font-bold text-muted-foreground max-sm:text-xs">
          <span className="text-xs text-muted-foreground max-sm:text-xs">from </span>
          <span className="text-xs font-bold text-muted-foreground max-sm:text-xs">
            {timeAndPlace.startingPoint}
          </span>
        </div>
        <div className="text-xs font-bold text-muted-foreground max-sm:text-xs">
          <span className="text-xs font-light text-muted-foreground max-sm:text-xs">
            by{" "}
          </span>
          <span className="text-xs font-bold text-muted-foreground max-sm:text-xs">
            {timeAndPlace.transport}
          </span>
        </div>
      </div>
      <ActivityInfo
        level={activity.level}
        activityIcon={activity.activityIcon}
        activityName={activity.activityName}
        distance={activity.distance}
        elevation={activity.elevation}
      />
      <div className={isPastEvent ? "flex flex-wrap gap-y-3 justify-between content-center items-center self-stretch" : ""}>
        <ParticipantsList
          participants={participants}
          additionalCount={additionalCount}
          organizerName={organizerName}
          status={status}
          showButton={isPastEvent}
        />
      </div>
      {photos && (
        <PhotoGallery photos={photos} />
      )}
    </div>
  );
}

export default EventContent;
