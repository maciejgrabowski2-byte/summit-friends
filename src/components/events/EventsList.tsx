import EventCard from "./EventCard";
import { useEventsGroupedByDate } from "@/hooks/useEvents";
import { useTranslation } from "@/hooks/useTranslation";
import { Skeleton } from "@/components/ui/skeleton";

interface EventsListProps {
  onEventClick?: (eventId: string | number) => void;
}

const EventsList = ({ onEventClick }: EventsListProps) => {
  const { t } = useTranslation();
  const { data: eventsListData, isLoading, error } = useEventsGroupedByDate();

  const handleEventClick = (eventId: string | number) => {
    onEventClick?.(eventId);
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2].map((group) => (
          <div key={group}>
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Failed to load events. Please try again later.
      </div>
    );
  }

  if (!eventsListData || Object.keys(eventsListData).length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No upcoming events found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
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
