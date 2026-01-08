import { Bike, Footprints, ArrowUpRight, MoveHorizontal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Event } from "@/types/event";

interface EventCardCompactProps {
  event: Event;
  onClick?: () => void;
  className?: string;
  showReview?: boolean;
}

const EventCardCompact = ({ event, onClick, className, showReview }: EventCardCompactProps) => {
  const ActivityIcon = event.activity === "Cycling" ? Bike : Footprints;

  return (
    <div className={cn("p-4 rounded-lg bg-muted cursor-pointer", className)} onClick={onClick}>
      <div className="flex gap-3">
        <div className="text-center shrink-0">
          <p className="text-sm font-medium text-foreground">{event.date}</p>
          <p className="text-sm text-muted-foreground">{event.day}</p>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-medium text-foreground text-sm leading-tight mb-2">
            {event.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-2">
            at {event.time} · from {event.departureLocation} · by {event.transport}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs font-medium">
              {event.difficulty}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ActivityIcon className="w-3 h-3" />
              {event.activity}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MoveHorizontal className="w-3 h-3" />
              {event.distance}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowUpRight className="w-3 h-3" />
              {event.elevation}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {event.participants?.slice(0, 3).map((avatar, index) => (
                  <Avatar key={index} className="w-6 h-6 border-2 border-background">
                    <AvatarImage src={avatar} />
                    <AvatarFallback className="px-[20px] py-[20px] rounded-lg shadow-none">
                      U
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                +{event.extraParticipants}, by {event.organizer}
              </span>
            </div>
            {event.isFull && (
              <span className="text-xs text-muted-foreground italic">full</span>
            )}
          </div>

          {showReview && event.images && (
            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs h-7">
                Write reviews
              </Button>
            </div>
          )}

          {event.images && (
            <div className="flex gap-2 mt-3">
              {event.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Event photo"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCardCompact;
