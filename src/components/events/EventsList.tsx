import EventRow from "./EventRow";

const eventsData = {
  "Tomorrow, Saturday": [
    {
      id: 1,
      time: "6:45",
      duration: "3 days",
      title: "A very long event name bla second line",
      organizer: "Jessica",
      organizerAvatar: "https://i.pravatar.cc/40?img=1",
      image: "/placeholder.svg",
      departureLocation: "Munich Hbf, pl 29",
      transport: "Train",
      activity: "Hiking",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "1800",
      heightType: "total height",
      participantsComing: 12,
      spotsAvailable: 4,
      participants: [
        "https://i.pravatar.cc/32?img=10",
        "https://i.pravatar.cc/32?img=11",
        "https://i.pravatar.cc/32?img=12",
        "https://i.pravatar.cc/32?img=13",
      ],
    },
    {
      id: 2,
      time: "6:45",
      duration: "12 hours",
      title: "Rofanspitze",
      organizer: "Helena",
      organizerAvatar: "https://i.pravatar.cc/40?img=2",
      image: "/placeholder.svg",
      departureLocation: "Munich",
      transport: "Carpool",
      activity: "Cycling",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "1800",
      heightType: "descent",
      participantsComing: 20,
      waitlist: 20,
      participants: [
        "https://i.pravatar.cc/32?img=20",
        "https://i.pravatar.cc/32?img=21",
        "https://i.pravatar.cc/32?img=22",
        "https://i.pravatar.cc/32?img=23",
      ],
    },
    {
      id: 3,
      time: "6:45",
      duration: "1 day",
      title: "Tannheimer Berge",
      organizer: "John Doe",
      organizerAvatar: "https://i.pravatar.cc/40?img=3",
      image: "/placeholder.svg",
      departureLocation: "Munich",
      transport: "Bus",
      activity: "Hiking",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "2234",
      heightType: "total height",
      participantsComing: 12,
      spotsAvailable: 4,
      participants: [
        "https://i.pravatar.cc/32?img=30",
        "https://i.pravatar.cc/32?img=31",
        "https://i.pravatar.cc/32?img=32",
        "https://i.pravatar.cc/32?img=33",
      ],
    },
    {
      id: 4,
      time: "8:00",
      duration: "12 days",
      title: "Event name bla second line",
      organizer: "Freddy",
      organizerAvatar: "https://i.pravatar.cc/40?img=4",
      image: "/placeholder.svg",
      departureLocation: "Munich Hbf",
      transport: null,
      activity: "Hiking",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "1800",
      heightType: "descent",
      participantsComing: 20,
      waitlist: 20,
      participants: [
        "https://i.pravatar.cc/32?img=40",
        "https://i.pravatar.cc/32?img=41",
        "https://i.pravatar.cc/32?img=42",
        "https://i.pravatar.cc/32?img=43",
      ],
    },
  ],
  "Jun 23, Sunday": [
    {
      id: 5,
      time: "6:45",
      duration: "12 hours",
      title: "Event name bla second line",
      organizer: "Larissa",
      organizerAvatar: "https://i.pravatar.cc/40?img=5",
      image: "/placeholder.svg",
      departureLocation: "Zurich Hbf",
      transport: "Bus",
      activity: "Hiking",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "2234",
      heightType: "total height",
      participantsComing: 12,
      spotsAvailable: 4,
      participants: [
        "https://i.pravatar.cc/32?img=50",
        "https://i.pravatar.cc/32?img=51",
        "https://i.pravatar.cc/32?img=52",
        "https://i.pravatar.cc/32?img=53",
      ],
    },
    {
      id: 6,
      time: "6:45",
      duration: "1 day",
      title: "Hiking the highest peak",
      organizer: "Laurence",
      organizerAvatar: "https://i.pravatar.cc/40?img=6",
      image: "/placeholder.svg",
      departureLocation: "Munich deutsche...",
      transport: null,
      activity: "Hiking",
      activityBadge: "T3",
      distance: "18km",
      elevation: "1982",
      totalHeight: "1800",
      heightType: "descent",
      participantsComing: 20,
      waitlist: 20,
      participants: [
        "https://i.pravatar.cc/32?img=60",
        "https://i.pravatar.cc/32?img=61",
        "https://i.pravatar.cc/32?img=62",
        "https://i.pravatar.cc/32?img=63",
      ],
    },
  ],
};

const EventsList = () => {
  return (
    <div className="space-y-8">
      {Object.entries(eventsData).map(([dateGroup, events]) => (
        <div key={dateGroup}>
          {/* Date Header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-lg font-semibold text-foreground whitespace-nowrap sm:w-16 shrink-0">{dateGroup}</h2>
            <div className="hidden sm:flex flex-1 text-sm text-muted-foreground">
              <div className="flex-1 min-w-0"></div>
              <span className="w-32 shrink-0">Departing from</span>
              <span className="w-48 shrink-0">Activity</span>
              <span className="w-40 shrink-0 text-right">Participants</span>
            </div>
          </div>
          
          {/* Events */}
          <div className="space-y-4">
            {events.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
