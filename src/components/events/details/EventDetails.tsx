import * as React from "react";
import { DetailViewLayout } from "@/components/ui/DetailViewLayout";
import { EventGallery } from "./EventGallery";
import { EventInfo } from "./EventInfo";
import { EventSidebar } from "./EventSidebar";
import { useEvent } from "@/hooks/useEvents";
import { Skeleton } from "@/components/ui/skeleton";

interface EventDetailsProps {
  eventId: string;
}

export function EventDetails({ eventId }: EventDetailsProps) {
  const { data: event, isLoading, error } = useEvent(eventId);

  if (isLoading) {
    return (
      <div className="flex gap-8 p-8">
        <div className="flex-1 space-y-4">
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </div>
        <div className="flex-1 space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <div className="w-[360px] space-y-4">
          <Skeleton className="h-[600px] w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex items-center justify-center p-16 text-muted-foreground">
        Event not found or failed to load.
      </div>
    );
  }

  return (
    <DetailViewLayout
      leftColumn={<EventGallery event={event} />}
      mainContent={<EventInfo event={event} />}
      sidebar={<EventSidebar event={event} />}
    />
  );
}

export default EventDetails;
