import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Divider } from "./Divider";
import { Event } from "@/types/event";

interface EventSidebarProps {
  event: Event;
}

function OrganizerSection({ event }: { event: Event }) {
  const initials = event.organizer
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Organizer</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-bold text-foreground">{event.organizer}</h3>
            <p className="text-sm text-muted-foreground">Event Organizer</p>
          </div>
        </div>
        <Button variant="secondary" size="sm">
          Send a message
        </Button>
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function ParticipantsSection({ event }: { event: Event }) {
  const participants = event.participants || [];
  const participantsComing = event.participantsComing || event.attendees || participants.length;
  const spotsAvailable = event.spotsAvailable || 0;
  const totalSpots = participantsComing + spotsAvailable;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Participants</h2>
        <p className="text-sm text-muted-foreground">
          {participantsComing} out of {totalSpots}
          {spotsAvailable > 0 && (
            <> / <span className="font-bold">{spotsAvailable} spots left</span></>
          )}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex -space-x-2">
          {participants.slice(0, 7).map((src, index) => (
            <Avatar key={index} className="w-8 h-8 border-2 border-background">
              <AvatarImage src={src} alt={`Participant ${index + 1}`} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ))}
        </div>
        {spotsAvailable > 0 && (
          <div className="flex -space-x-1 ml-2">
            {Array.from({ length: Math.min(spotsAvailable - 1, 3) }).map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-xl bg-muted border-2 border-dashed border-border"
              />
            ))}
            <button className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Plus className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        )}
      </div>
      <Divider className="pt-4" />
    </section>
  );
}

function DiscussionSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Discussion</h2>
      
      <article className="space-y-2">
        <div className="flex items-start gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://i.pravatar.cc/32?img=10" alt="Victor" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="font-bold text-primary">Victor</span>
            <p className="text-sm text-foreground leading-6 mt-1">
              Looking forward to this event! Does anyone know if we need to bring our own lunch?
            </p>
          </div>
        </div>
        <div className="ml-10 text-xs text-muted-foreground">
          <button className="text-primary hover:underline">Like</button>
          {" - "}
          <button className="text-primary hover:underline">Reply</button>
          {" - 1d ago"}
        </div>
      </article>

      <article className="space-y-2 ml-8">
        <div className="flex items-start gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://i.pravatar.cc/32?img=11" alt="Anna" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <span className="font-bold text-primary">Anna</span>
            <p className="text-sm text-foreground leading-6 mt-1">
              Yes, please bring your own food and drinks. We'll have a picnic break along the way!
            </p>
          </div>
        </div>
        <div className="ml-8 text-xs text-muted-foreground">
          <button className="text-primary hover:underline">Like</button>
          {" - "}
          <button className="text-primary hover:underline">Reply</button>
          {" - 1d ago"}
        </div>
      </article>

      <button className="text-xs text-primary hover:underline ml-auto block">
        + 3 comments
      </button>
    </section>
  );
}

export function EventSidebar({ event }: EventSidebarProps) {
  return (
    <aside className="w-full lg:w-[360px] xl:w-[400px] shrink-0">
      <div className="bg-muted rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
        <OrganizerSection event={event} />
        <ParticipantsSection event={event} />
        <DiscussionSection />
      </div>
    </aside>
  );
}

export default EventSidebar;
