import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star } from "lucide-react";

interface HistoryEvent {
  id: string;
  title: string;
  date: string;
  organizer: string;
  organizerAvatar: string;
  participants: number;
  rating: number;
  images: string[];
}

const mockHistoryEvents: HistoryEvent[] = [
  {
    id: "1",
    title: "Summer Hiking Adventure",
    date: "Aug 15, 2024",
    organizer: "John Doe",
    organizerAvatar: "https://api.builder.io/api/v1/image/assets/TEMP/3259d434afa918c3b00df2c010cd89b50f15cff4?width=64",
    participants: 12,
    rating: 4.8,
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/38c2f89386c7b2cf2e727688d2e13e81efa9fe0a?width=200",
      "https://api.builder.io/api/v1/image/assets/TEMP/948fae9b1ad364f32738749fd08afa8bf43c16e4?width=200",
    ]
  },
  {
    id: "2",
    title: "Early Morning Trek",
    date: "Jul 22, 2024",
    organizer: "Anna Schmidt",
    organizerAvatar: "https://api.builder.io/api/v1/image/assets/TEMP/31aaf3d5a248fd7b6bff036254b3f69077d9d94c?width=64",
    participants: 8,
    rating: 4.5,
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/e7a6aaa22ebcb3937278f33af9f033f6bf6f3af1?width=200",
    ]
  },
  {
    id: "3",
    title: "Weekend Challenge",
    date: "Jun 10, 2024",
    organizer: "Mike Johnson",
    organizerAvatar: "https://api.builder.io/api/v1/image/assets/TEMP/a039b7aae05ad11094502be4f7382407cb1404d7?width=64",
    participants: 15,
    rating: 4.9,
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/9ee01f844b4347aff76bf655bfd0b6614c4ee0c8?width=200",
      "https://api.builder.io/api/v1/image/assets/TEMP/59e79527a797d46919ef85ecc31ff05e9648eaf5?width=200",
      "https://api.builder.io/api/v1/image/assets/TEMP/f88787220ec172819b63917474a033749136c065?width=200",
    ]
  }
];

function EventHistoryCard({ event }: { event: HistoryEvent }) {
  return (
    <article className="p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{event.title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
        </div>
        <Badge variant="secondary" className="gap-1">
          <Star className="w-3 h-3 fill-current" />
          {event.rating}
        </Badge>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
            <AvatarFallback>{event.organizer[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">by {event.organizer}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{event.participants} participants</span>
        </div>
      </div>
      
      {event.images.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {event.images.slice(0, 3).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event photo ${index + 1}`}
              className="w-16 h-16 rounded-md object-cover shrink-0"
            />
          ))}
          {event.images.length > 3 && (
            <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-muted-foreground">
                +{event.images.length - 3}
              </span>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export function RouteEventHistory() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Event History</h2>
        <Badge variant="outline">{mockHistoryEvents.length} events</Badge>
      </div>
      
      <div className="space-y-3">
        {mockHistoryEvents.map((event) => (
          <EventHistoryCard key={event.id} event={event} />
        ))}
      </div>
      
      <button className="text-sm text-primary hover:underline self-start">
        View all events on this route
      </button>
    </section>
  );
}

export default RouteEventHistory;
