import { Bike, ArrowUpRight, MoveHorizontal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departure: "Munich",
    transport: "Train",
    difficulty: "Medium",
    activity: "Cycling",
    distance: "18km",
    elevation: "560m",
    participants: [
      "https://i.pravatar.cc/32?img=70",
      "https://i.pravatar.cc/32?img=71",
      "https://i.pravatar.cc/32?img=72",
    ],
    extraParticipants: 14,
    organizer: "Jean-Chrisian",
    isFull: true,
  },
  {
    id: 2,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departure: "Munich",
    transport: "Train",
    difficulty: "Medium",
    activity: "Cycling",
    distance: "18km",
    elevation: "560m",
    participants: [
      "https://i.pravatar.cc/32?img=73",
      "https://i.pravatar.cc/32?img=74",
      "https://i.pravatar.cc/32?img=75",
    ],
    extraParticipants: 14,
    organizer: "Jean-Chrisian",
    isFull: true,
  },
];

const pastEvents = [
  {
    id: 3,
    date: "Jun 30",
    day: "Sat",
    title: "Full-carpool After Work hike to Kampenwand",
    time: "6:45",
    departure: "Munich",
    transport: "Train",
    difficulty: "Medium",
    activity: "Cycling",
    distance: "18km",
    elevation: "560m",
    participants: [
      "https://i.pravatar.cc/32?img=76",
      "https://i.pravatar.cc/32?img=77",
      "https://i.pravatar.cc/32?img=78",
    ],
    extraParticipants: 14,
    organizer: "Jean-Chrisian",
    showReview: true,
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=100&h=100&fit=crop",
    ],
  },
];

interface SidebarEventCardProps {
  event: typeof upcomingEvents[0] | typeof pastEvents[0];
  showReview?: boolean;
}

const SidebarEventCard = ({ event, showReview }: SidebarEventCardProps) => {
  return (
    <div className="p-4 bg-muted/30 rounded-lg">
      <div className="flex gap-3">
        <div className="text-center shrink-0">
          <p className="text-sm font-medium text-foreground">{event.date}</p>
          <p className="text-sm text-muted-foreground">{event.day}</p>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-medium text-foreground text-sm leading-tight mb-2">{event.title}</h4>
          <p className="text-xs text-muted-foreground mb-2">
            at {event.time} · from {event.departure} · by {event.transport}
          </p>
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs font-medium">
              {event.difficulty}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Bike className="w-3 h-3" />
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
                {event.participants.slice(0, 3).map((avatar, index) => (
                  <Avatar key={index} className="w-6 h-6 border-2 border-background">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                +{event.extraParticipants}, by {event.organizer}
              </span>
            </div>
            {'isFull' in event && event.isFull && (
              <span className="text-xs text-muted-foreground italic">full</span>
            )}
          </div>
          
          {showReview && 'images' in event && (
            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs h-7">
                Write reviews
              </Button>
            </div>
          )}
          
          {'images' in event && (
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

const EventsSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Your upcoming events */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Your upcoming events</h3>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <SidebarEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      
      {/* Your past events */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Your past events</h3>
        <div className="space-y-4">
          {pastEvents.map((event) => (
            <SidebarEventCard key={event.id} event={event} showReview />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSidebar;
