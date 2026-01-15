import * as React from "react";
import { Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "./Divider";
import { RouteStats } from "./RouteStats";

function EventHeader() {
  return (
    <header className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5">
        <time className="text-lg font-bold text-foreground">
          May 10, Sunday
        </time>
        <p className="text-sm font-bold text-muted-foreground">
          06:40 AM - 17:00 PM
        </p>
      </div>
      
      <h1 className="text-2xl font-bold text-foreground">
        Pottenstein ring: A land of caves and castles, rivers and rocks
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Activity</p>
          <p className="text-base text-foreground">Hiking</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Difficulty</p>
          <p className="text-base text-foreground">T3 Moderate</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Departs from</p>
          <p className="text-base text-foreground">Munich</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Transport</p>
          <p className="text-base text-foreground">Train, bus</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="secondary" size="icon" className="rounded-xl">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-xl">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
        <Button className="px-6">
          Join event
        </Button>
      </div>
    </header>
  );
}

function DescriptionSection() {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h2 className="text-xl font-bold text-foreground">Description</h2>
      <p className="text-base leading-7 text-foreground">
        Many poets and painters walked through the countryside of
        Franconian Switzerland hundreds years ago and catched it in word
        and on paintings. Franconian Switzerland is one of the largest
        nature parks in Germany and a real hidden gem. The area is very
        well known for its impressive caves, rock formations and green
        scenery. Also, there are many medieval castles and ruins..
      </p>
      <button className="text-base text-primary hover:underline self-start">
        Show more
      </button>
    </section>
  );
}

function MeetingTransportSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-foreground">
        Meeting and transport
      </h2>
      <p className="text-base leading-7 text-foreground">
        We meet on platform and buy a group ticket all together.
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Meeting location</p>
          <p className="text-base text-foreground">Munich HBF, Platform 29</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Meeting time</p>
          <p className="text-base text-foreground">6:40 AM</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Transport</p>
          <p className="text-base text-foreground">Train, bus 145 to Lindau</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Ticket price</p>
          <p className="text-base text-foreground">€16 per person</p>
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  const equipmentLeft = [
    "Hiking boots",
    "Food and drinks",
    "Cash for the ticket",
    "Headlamp (just in case)"
  ];
  
  const equipmentRight = [
    "Helmet",
    "Poles",
    "Headlamp"
  ];

  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-foreground">Equipment</h2>
      <div className="flex flex-col sm:flex-row gap-8">
        <ul className="space-y-1">
          {equipmentLeft.map((item, index) => (
            <li key={index} className="text-lg leading-8 text-foreground">• {item}</li>
          ))}
        </ul>
        <ul className="space-y-1">
          {equipmentRight.map((item, index) => (
            <li key={index} className="text-lg leading-8 text-foreground">• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function EventInfo() {
  return (
    <main className="flex flex-col gap-8 w-full max-w-[600px]">
      <EventHeader />
      <Divider />
      <DescriptionSection />
      <MeetingTransportSection />
      <Divider />
      <EquipmentSection />
      <Divider />
      <RouteStats />
    </main>
  );
}

export default EventInfo;
