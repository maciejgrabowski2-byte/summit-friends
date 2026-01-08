import { Mountain, Bike, Footprints, ArrowUpDown, Clock, MapPin, Share2, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Event } from "@/types/event";

interface EventCardProfileProps {
  event: Event;
  onClick?: () => void;
  className?: string;
}

const EventCardProfile = ({ event, onClick, className }: EventCardProfileProps) => {
  const getActivityIcon = () => {
    switch (event.activity) {
      case "Cycling":
        return <Bike className="w-4 h-4" />;
      case "Hiking":
        return <Mountain className="w-4 h-4" />;
      default:
        return <Footprints className="w-4 h-4" />;
    }
  };

  return (
    <Card className={cn("border cursor-pointer", className)} onClick={onClick}>
      <CardContent className="p-4">
        {/* Organizer Row */}
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={event.organizerAvatar || `https://i.pravatar.cc/40?img=${(event.id as number) + 10}`}
              alt={event.organizer}
            />
            <AvatarFallback>{event.organizer[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{event.organizer}</span>
          <span className="text-muted-foreground text-sm">+{event.participantsComing}</span>
          {event.status && <Badge className={event.statusColor}>{event.status}</Badge>}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>

        {/* User Status */}
        {event.userStatus && (
          <>
            <Badge className={`${event.userStatusColor} mb-3`}>{event.userStatus}</Badge>
            <span className="text-sm text-muted-foreground ml-2">
              at {event.time} · from {event.departureLocation} · by {event.transport}
            </span>
          </>
        )}

        {/* Activity Details */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3 mb-4">
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              {event.difficulty}
            </Badge>
            {getActivityIcon()}
            <span>{event.activity}</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpDown className="w-4 h-4" />
            <span>{event.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{event.elevation} elevation</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{event.duration}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              Comment
            </Button>
          </div>
          {event.primaryAction && (
            <Button variant="outline" size="sm" className={event.primaryActionColor}>
              {event.primaryAction}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCardProfile;
