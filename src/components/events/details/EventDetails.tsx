import * as React from "react";
import { DetailViewLayout } from "@/components/ui/DetailViewLayout";
import { EventGallery } from "./EventGallery";
import { EventInfo } from "./EventInfo";
import { EventSidebar } from "./EventSidebar";

export function EventDetails() {
  return (
    <DetailViewLayout
      backPath="/events"
      backLabel="Back to events"
      leftColumn={<EventGallery />}
      mainContent={<EventInfo />}
      sidebar={<EventSidebar />}
    />
  );
}

export default EventDetails;
