import EventCard from "./EventCard";
import { eventsListData } from "@/data/mockEvents";
import { useTranslation } from "@/hooks/useTranslation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface EventsListProps {
  onEventClick?: (eventId: string | number) => void;
}

const EventsList = ({ onEventClick }: EventsListProps) => {
  const { t } = useTranslation();
  const [parent] = useAutoAnimate({ duration: 300 });

  const handleEventClick = (eventId: string | number) => {
    onEventClick?.(eventId);
  };

  return (
    <div ref={parent} className="space-y-8">
      {Object.entries(eventsListData).map(([dateGroup, events]) => (
        <div key={dateGroup}>
          {/* Date Header */}
          <div className="hidden sm:flex items-center gap-4 mb-4 px-4">
            <div className="w-16 shrink-0">
              <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">
                {dateGroup}
              </h2>
            </div>
            <div className="flex gap-3 flex-1 min-w-0"></div>
            <span className="w-32 shrink-0 text-sm text-muted-foreground">
              {t('events.list.departingFrom')}
            </span>
            <span className="w-48 shrink-0 text-sm text-muted-foreground">
              {t('events.list.activity')}
            </span>
            <span className="w-40 shrink-0 text-right text-sm text-muted-foreground">
              {t('events.list.participants')}
            </span>
          </div>
          <h2 className="sm:hidden text-lg font-semibold text-foreground mb-4">
            {dateGroup}
          </h2>

          {/* Events */}
          <div className="space-y-4">
            {events.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                variant="row" 
                onClick={() => handleEventClick(event.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
