import EventCard from "./EventCard";
import { upcomingEvents, pastEvents } from "@/data/mockEvents";

const EventsSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Your upcoming events */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Your upcoming events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="compact" />
          ))}
        </div>
      </div>

      {/* Your past events */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Your past events</h3>
        <div className="space-y-4">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="compact" showReview />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSidebar;
