import { Bookmark, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Event } from "@/types/event";

interface EventCardGalleryProps {
  event: Event;
  onClick?: () => void;
  className?: string;
}

const EventCardGallery = ({ event, onClick, className }: EventCardGalleryProps) => {
  return (
    <article
      className={cn(
        "flex-shrink-0 w-[300px] bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow group cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Bookmark button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors">
          <Bookmark className="w-4 h-4 text-foreground" />
        </button>

        {/* Sold out badge */}
        {event.soldOut && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm"
          >
            Sold out - Join waiting list
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{event.date}</p>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          by {event.organizer} •{" "}
          <Star className="w-3 h-3 inline text-amber-500" /> {event.rating}
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs"
              >
                👤
              </div>
            ))}
          </div>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {event.attendees} attendees
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCardGallery;
