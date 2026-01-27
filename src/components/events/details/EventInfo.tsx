import * as React from "react";
import { Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "./Divider";
import { RouteStats } from "./RouteStats";
import { Event } from "@/types/event";

interface EventInfoProps {
  event: Event;
}

function EventHeader({ event }: { event: Event }) {
  const formattedDate = event.date ? `${event.date}${event.day ? `, ${event.day}` : ''}` : 'Date TBD';
  const formattedTime = event.time 
    ? `${event.time} AM${event.duration ? ` - ${event.duration}` : ''}`
    : 'Time TBD';

  return (
    <header className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1.5">
        <time className="text-lg font-bold text-foreground">
          {formattedDate}
        </time>
        <p className="text-sm font-bold text-muted-foreground">
          {formattedTime}
        </p>
      </div>
      
      <h1 className="text-2xl font-bold text-foreground">
        {event.title}
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Activity</p>
          <p className="text-base text-foreground">{event.activity || 'Hiking'}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Difficulty</p>
          <p className="text-base text-foreground">
            {event.activityBadge || event.difficulty || 'Not specified'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Departs from</p>
          <p className="text-base text-foreground">
            {event.departureLocation || 'TBD'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Transport</p>
          <p className="text-base text-foreground">
            {event.transport || 'Not specified'}
          </p>
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
        <Button className="px-6" disabled={event.isFull || event.soldOut}>
          {event.isFull || event.soldOut ? 'Event Full' : 'Join event'}
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
        Join us for an exciting outdoor adventure! This event offers a great opportunity 
        to explore nature, meet fellow enthusiasts, and challenge yourself with a 
        memorable experience in the mountains.
      </p>
      <button className="text-base text-primary hover:underline self-start">
        Show more
      </button>
    </section>
  );
}

function MeetingTransportSection({ event }: { event: Event }) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold text-foreground">
        Meeting and transport
      </h2>
      <p className="text-base leading-7 text-foreground">
        We meet at the departure location and travel together.
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Meeting location</p>
          <p className="text-base text-foreground">
            {event.departureLocation || 'TBD'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Meeting time</p>
          <p className="text-base text-foreground">
            {event.time ? `${event.time} AM` : 'TBD'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Transport</p>
          <p className="text-base text-foreground">
            {event.transport || 'Own transport'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-muted-foreground">Duration</p>
          <p className="text-base text-foreground">
            {event.duration || 'Full day'}
          </p>
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  const equipmentLeft = [
    "Hiking boots",
    "Food and drinks",
    "Weather-appropriate clothing",
    "Headlamp (just in case)"
  ];
  
  const equipmentRight = [
    "First aid kit",
    "Sun protection",
    "Backpack"
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

export function EventInfo({ event }: EventInfoProps) {
  return (
    <main className="flex flex-col gap-6 md:gap-8 w-full lg:max-w-[600px]">
      <EventHeader event={event} />
      <Divider />
      <DescriptionSection />
      <MeetingTransportSection event={event} />
      <Divider />
      <EquipmentSection />
      <Divider />
      <RouteStats event={event} />
    </main>
  );
}

export default EventInfo;
