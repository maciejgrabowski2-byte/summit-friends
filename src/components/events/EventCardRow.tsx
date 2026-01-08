import { Bike, Footprints } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Event } from "@/types/event";

interface EventCardRowProps {
  event: Event;
  onClick?: () => void;
  className?: string;
}

const EventCardRow = ({ event, onClick, className }: EventCardRowProps) => {
  const ActivityIcon = event.activity === "Cycling" ? Bike : Footprints;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border",
        className
      )}
      onClick={onClick}
    >
      {/* Time & Duration */}
      <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 sm:w-16 shrink-0">
        <span className="text-lg font-semibold text-foreground">{event.time}</span>
        <span className="text-sm text-muted-foreground">{event.duration}</span>
      </div>

      {/* Image & Info */}
      <div className="flex gap-3 flex-1 min-w-0">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground truncate">{event.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar className="w-5 h-5">
              <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
              <AvatarFallback>{event.organizer[0]}</AvatarFallback>
            </Avatar>
            <span>by {event.organizer}</span>
          </div>
        </div>
      </div>

      {/* Departure */}
      <div className="sm:w-32 shrink-0">
        <p className="text-sm font-medium text-foreground">{event.departureLocation}</p>
        <p className="text-sm text-muted-foreground">
          {event.transport ? `by ${event.transport}` : "No transport"}
        </p>
      </div>

      {/* Activity */}
      <div className="sm:w-48 shrink-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 text-sm text-foreground">
            <ActivityIcon className="w-4 h-4" />
            {event.activity}
          </span>
          <Badge className="bg-primary/20 text-primary border-0 text-xs font-medium">
            {event.activityBadge}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {event.distance} • {event.elevation} elevation • {event.totalHeight} {event.heightType}
        </p>
      </div>

      {/* Participants */}
      <div className="sm:w-40 shrink-0 sm:text-right">
        <p className="text-sm text-foreground mb-2">
          {event.participantsComing} coming /{" "}
          {event.spotsAvailable ? (
            <span className="text-primary">{event.spotsAvailable} available</span>
          ) : (
            <span className="text-muted-foreground">{event.waitlist} in waitlist</span>
          )}
        </p>
        <div className="flex sm:justify-end -space-x-2">
          {event.participants?.slice(0, 4).map((avatar, index) => (
            <Avatar key={index} className="w-7 h-7 border-2 border-background">
              <AvatarImage src={avatar} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCardRow;
