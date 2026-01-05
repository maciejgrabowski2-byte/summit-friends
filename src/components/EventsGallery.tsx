import { useRef } from "react";
import { ChevronLeft, ChevronRight, Bookmark, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import event1Img from "@/assets/event-1.jpg";
import event2Img from "@/assets/event-2.jpg";
import event3Img from "@/assets/event-3.jpg";
import event4Img from "@/assets/event-4.jpg";

const events = [
  {
    title: "Sunrise Alpine Hike",
    organizer: "Munich Hiking Group",
    date: "Sat, Jan 11, 2026 • 6:00 AM",
    location: "Bavaria, Germany",
    attendees: 42,
    rating: 4.8,
    image: event1Img,
    soldOut: false,
  },
  {
    title: "Sunset Summit Trek",
    organizer: "Zurich Adventurers",
    date: "Sun, Jan 12, 2026 • 3:00 PM",
    location: "Swiss Alps",
    attendees: 28,
    rating: 4.6,
    image: event2Img,
    soldOut: false,
  },
  {
    title: "Trail Running Meetup",
    organizer: "Forest Runners Club",
    date: "Sat, Jan 18, 2026 • 8:00 AM",
    location: "Black Forest, Germany",
    attendees: 35,
    rating: 4.9,
    image: event3Img,
    soldOut: true,
  },
  {
    title: "Beginner Bouldering Day",
    organizer: "Climbing Buddies",
    date: "Sun, Jan 19, 2026 • 10:00 AM",
    location: "Fontainebleau, France",
    attendees: 18,
    rating: 4.7,
    image: event4Img,
    soldOut: false,
  },
];

const EventsGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="events" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Upcoming events
            </h2>
            <p className="text-muted-foreground">Join adventures happening soon</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {events.map((event, index) => (
            <article
              key={event.title}
              className="flex-shrink-0 w-[300px] bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-shadow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Bookmark button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors">
                  <Bookmark className="w-4 h-4 text-foreground" />
                </button>

                {/* Sold out badge */}
                {event.soldOut && (
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm">
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
                  by {event.organizer} • <Star className="w-3 h-3 inline text-amber-500" /> {event.rating}
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
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4"
          >
            View all events
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
